import { Component } from '@angular/core';
import { PursuitService } from './pursuits/pursuit.service';
import { UnitService} from './masters/units/units.service';
import { ConsultantService} from './consultants/consultant.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    providers: [PursuitService, UnitService, ConsultantService]
})

export class AppComponent { 
    pageTitle: string = "Pursuits Tracker";

    constructor()
    {
            
    }    
}
