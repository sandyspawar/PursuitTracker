import { Injectable } from '@angular/core';
import { IUnit} from './iunit';
import { Http} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UnitService
{
    unitURL: string = 'app/assets/data/unitdata.txt';

    constructor(private _http: Http){

    }

    // following function emits particular unit data
    // based on unit id passed
    getUnit(id: number): Observable<IUnit>{
        // use find method on result 
        // since we want to return only one value
       return this.getUnits()
            .map((units: IUnit[]) => units.find(v => v.ID == id));
    }

    // following function emits all units details
    getUnits(): Observable<IUnit[]>{
        return this._http.get(this.unitURL)
            .map(r => <IUnit[]>r.json());        
    }
}