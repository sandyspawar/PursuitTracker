import { Component, OnInit } from '@angular/core';
import { PursuitService } from './pursuits/pursuit.service';
import { UnitService} from './masters/units/units.service';
import { ConsultantService} from './consultants/consultant.service';
import { IUnit } from './masters/units/IUnit';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    providers: [PursuitService, UnitService, ConsultantService]
})

export class AppComponent implements OnInit{ 
    pageTitle: string = "Pursuits Tracker Tool";
    units: IUnit[];

    constructor(private _unitService: UnitService)
    {            
    }

    ngOnInit(): void{
        this._unitService.getUnits().subscribe(d => this.units = d);
    }    
}
