import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { IUnit} from '../masters/units/Iunit';
import { UnitService } from '../masters/units/units.service';


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

    constructor(private _unitservice: UnitService){

    }

    // component life cycle events
    ngOnInit(): void
    {
        console.log("on Init");
        this.units = this._unitservice.getUnits();        
    } 
}
