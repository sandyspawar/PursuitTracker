import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { IUnit} from '../masters/units/Iunit';
import { UnitService } from '../masters/units/units.service';
import { ConsultantService } from '../consultants/consultant.service';


@Component({
    templateUrl: 'app/home/welcome.component.html',
    styleUrls: ['app/home/welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    public pageTitle: string = 'Welcome Sogeti';

    lat: number = 29.7604;
    lng: number = -95.36980;

    lat1: number = 32.77666;
    lng1: number = -96.79699;

    units: IUnit[];
    currentunitID: number = 0;

    constructor(private _unitService: UnitService,
                private _consultantService: ConsultantService){

    }

    // component life cycle events
    ngOnInit(): void
    {
        console.log("on Init -- Started");
        this._unitService.getUnits()
            .subscribe(d => { this.units = d;
                            console.log("total units :" + this.units.length);
                            this.units.forEach(p => 
                                this._consultantService.getUnitConsultants(p.ID)
                                .subscribe(g => p.ConsultantCount = g.length)
                                );
                        }
            );   
        console.log("on Init -- completed");        
    } 

    // update current unit id
    // this unit id will be used by
    // any component who wish to display related data of unit
    updateCurrentUnitID(id: number)
    {
        console.log("Set current Unit ID : " + id);
        this.currentunitID = id;
    }
}
