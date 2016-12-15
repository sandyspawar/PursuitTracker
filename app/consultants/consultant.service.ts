import { Injectable } from '@angular/core';
import { IConsultant} from './Iconsultant';
import { Http} from '@angular/http';
import { Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConsultantService
{
    consultantURL: string = 'app/assets/data/consultant.txt';//
    
    constructor(private _http: Http){

    }
    
    /*// following function emits consultants data
    // from the particular unit based on the unit id passed
    getUnitConsultantsCount(id: number): number{
        // use filter method on result 
        // since we want to return more than one values
        var count = 90;
        this.getConsultants()
            .map((consultants : IConsultant[]) => consultants.filter(d => d.UnitID == id))
            .count().subscribe(p => count = p);
        return count;
    }
    */

    // following function emits consultants data
    // from the particular unit based on the unit id passed
    getUnitConsultants(id: number): Observable<IConsultant[]>{
        // use filter method on result 
        // since we want to return more than one values
        return this.getConsultants()
            .map((consultants : IConsultant[]) => consultants.filter(d => d.UnitID == id));
    }

    // following function emits particular consultant data
    // based on id is passed
    getConsultant(id: number): Observable<IConsultant>{
        // use find method on result 
        // since we want to return only one value
        return this.getConsultants()
            .map((consultants: IConsultant[]) => consultants.find(d => d.ConsultantID == id));
    }

    // following function emits all consultants details
    getConsultants(): Observable<IConsultant[]>{
        return this._http.get(this.consultantURL)
            .map(r => <IConsultant[]>r.json());
    }

}