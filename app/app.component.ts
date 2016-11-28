import { Component } from '@angular/core';
import { PursuitService } from './pursuits/pursuit.service';
import { UnitService} from './masters/units/units.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    providers: [PursuitService, UnitService]
})
export class AppComponent { 
    pageTitle: string = "Pursuit Tracker";
    
}
