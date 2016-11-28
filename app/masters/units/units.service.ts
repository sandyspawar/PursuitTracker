import { Injectable } from '@angular/core';
import { IUnit} from './iunit';

@Injectable()
export class UnitService
{
    getUnits(): IUnit[]{
        return [
            {
                "Name": "Houston",
                "Region": "South",
                "State": "Texas",        
                "latitude": 29.76043,
                "longitude": -95.36980,
                "GVP": "Cynthia",
                "NoofConsultants": 101         
            },
            {
                "Name": "Dallas",
                "Region": "South",
                "State": "Texas",        
                "latitude": 32.77666,
                "longitude": -96.79699,
                "GVP": "Cynthia",
                "NoofConsultants": 120         
            },
            {
                "Name": "Austin",
                "Region": "South",
                "State": "Texas",        
                "latitude": 30.26715,
                "longitude": -97.74306,
                "GVP": "Cynthia",
                "NoofConsultants": 111         
            }
        ];
    }

}