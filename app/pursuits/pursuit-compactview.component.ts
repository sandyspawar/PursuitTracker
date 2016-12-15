import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {IPursuit} from './Ipursuit';
import {PursuitService} from './pursuit.service';
import {PursuitDetailComponent} from './pursuit-detail.component';
import {PursuitFilterPipe} from './pursuits-filter.pipe';

import {IUnit} from '../masters/units/Iunit';
import {UnitService} from '../masters/units/units.service';

@Component({
    selector: "pm-cv-pursuits",
    moduleId: module.id,
    templateUrl: 'pursuit-compactview.component.html',
    styleUrls: ['pursuit-compactview.component.css']
})

export class PursuitCompactViewComponent implements OnInit, OnChanges{
    pageTitle: string = "All pursuits";
    showPursuitInfo: boolean = false;
    listFilter: string = "";
    pursuits: IPursuit[];
    unit: IUnit;
    @Input() unitID: number = 0; //this property acts as input to this component.

    constructor(private _pursuitService: PursuitService,
                private _unitService: UnitService)
    {

    }

    ngOnChanges(): void
    {
        console.log("Onchanges: " + this.unitID);
        // get all pursuit details of particular unit
        // if unit id is not defined then display all pursuit
        // if unit id is received then display unit name and unit pursuits
        let allpursuits: boolean = true;
        if(this.unitID)
        {
            if(this.unitID > 0)
            {
                allpursuits = false;
                // then retrieve the unit details
                this._unitService.getUnit(this.unitID)
                    .subscribe(d => {
                                        this.unit = d;
                                        this.pageTitle = "Pursuits by " + d.Name + " Unit";
                                    });   
 
                // and retrieve the pursuit details by unit
                this._pursuitService.getPursuits()
                    .subscribe(d => this.pursuits = 
                                    d.filter(values => values.UnitID == this.unitID));   
            }
        }

        if(allpursuits)
        {
            // retrieve all pursuits details
                this._pursuitService.getPursuits()
                    .subscribe(d => this.pursuits = d);
        }
    }

    togglePursuitInfo(): void
    {
        this.showPursuitInfo = !this.showPursuitInfo;
    }

    getAllPursuits(){
        console.log("Show All pursuits");
        this.listFilter = "";
        this.unitID = 0; 
        this.pageTitle = "All Pursuits";
        this.ngOnChanges();
    }

    getTitle(): string
    {
        return this.pageTitle;
    }

    // component life cycle events
    ngOnInit(): void
    {
        console.log("on Init");
        //this._pursuitService.getPursuits().subscribe(d => this.pursuits = d);        
    }
}