import { Component, OnInit} from '@angular/core';
import { IUnit} from './Iunit';
import { UnitService } from './units.service';
import { ConsultantService } from '../../consultants/consultant.service';
import { IConsultant } from '../../consultants/Iconsultant';

import {UnitDetailComponent} from './unit-detail.component';
import {UnitFilterPipe} from './units-filter.pipe';

import { Observable} from 'rxjs/Observable';

@Component({
    selector: "pm-unit",
    moduleId: module.id,
    templateUrl: "unit-list.component.html",
    styleUrls: ['unit-list.component.css']
})

export class UnitListComponent implements OnInit
{
    pageTitle: string = "Unit List";
    listFilter: string = "";
    units: IUnit[];
    consultants: IConsultant[];
    
    // constructor of Unit Class
    // which initilize the satic version of service class for use
    constructor(private _unitservice: UnitService, 
                private _consultantService: ConsultantService){

    }

    getAllUnits(){
        console.log("Show All Units");
        this.listFilter = "";
    }

    getTitle(): string
    {
        return this.pageTitle + " (Current)";
    }

    // component life cycle events
    ngOnInit(): void
    {
        console.log("on Init");
        // get all units
        this._unitservice.getUnits()
            .subscribe(d => { this.units = d;
                            console.log("total units :" + this.units.length);
                            this.units.forEach(p => 
                                this._consultantService.getUnitConsultants(p.ID)
                                .subscribe(g => p.ConsultantCount = g.length)
                                );
                        }
            );                
    }
}