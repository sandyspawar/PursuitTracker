import { Component, OnInit} from '@angular/core';
import { UnitService } from './units.service';
import { IUnit, Unit } from './IUnit';
import { ActivatedRoute, Router} from '@angular/router';


@Component(
    {
        selector: "pm-unitform",
        moduleId: module.id,
        templateUrl: 'unit-form.component.html',
        styleUrls: ['unit-form.component.css']
    }
)

export class UnitFormComponent implements OnInit
{    
    pageTitle: string = "Unit add form";
    unit: Unit;
    informationMessage: string = "";
    errorMessage: string = "";

    constructor(private _unitService: UnitService,
            private _route: ActivatedRoute,
            private _router: Router)
    {
        
    }

    ngOnInit(): void{        
        this.unit = new Unit();
        this.unit.ID = 4;
    }

    onAddUnitClicked(): void{
        this.informationMessage = "Adding unit implmentation is not done yet";
        console.log(this.informationMessage);
        setTimeout(function() {
            this.informationMessage = "";
        }, 2000);
    }
    onBack(): void{
        this._router.navigate(['/units']);
    }
}
