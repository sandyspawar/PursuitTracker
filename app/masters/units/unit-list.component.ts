import { Component, OnInit} from '@angular/core';
import { IUnit} from './Iunit';
import { UnitService } from './units.service';

@Component({
    selector: "pm-unit",
    moduleId: module.id,
    templateUrl: "unit-list.component.html",
    styleUrls: ['unit-list.component.css']
})
export class UnitListComponent implements OnInit
{
    pageTitle: string = "Units List";
    listFilter: string = "Houston";
    units: IUnit[];

    constructor(private _unitservice: UnitService){

    }

    getTitle(): string
    {
        return this.pageTitle + " (Current)";
    }

    // component life cycle events
    ngOnInit(): void
    {
        console.log("on Init");
        this.units = this._unitservice.getUnits();        
    } 
}