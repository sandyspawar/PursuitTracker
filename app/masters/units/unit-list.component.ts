import { Component, OnInit} from '@angular/core';
import { IUnit} from './Iunit';
import { UnitService } from './units.service';
import { ConsultantService } from '../../consultants/consultant.service';
import { IConsultant } from '../../consultants/Iconsultant';

import {UnitDetailComponent} from './unit-detail.component';


@Component({
    selector: "pm-unit",
    moduleId: module.id,
    templateUrl: "unit-list.component.html",
    styleUrls: ['unit-list.component.css']
})

export class UnitListComponent implements OnInit
{
    pageTitle: string = "Units List";
    listFilter: string = "";
    units: IUnit[];
    consultants: IConsultant[];

    // constructor of Unit Class
    // which initilize the satic version of service class for use
    constructor(private _unitservice: UnitService, 
                private _consultantService: ConsultantService){

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

        // fecth all consultants in array for selected unit
        this.consultants = this._consultantService.getConsultants();      
    } 
    // this method accepts the Unit ID as parameter 
    // and returns the number of consultants in same unit
    getUnitConsultants(ID: number): number{
        return this.consultants.filter(c => c.UnitID == ID).length;
    }
}