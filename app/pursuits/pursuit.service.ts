import { Injectable } from '@angular/core';
import { IPursuit} from './ipursuit';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PursuitService
{
    pursuitURL: string = 'app/assets/data/pursuitdata.txt';//

    constructor(private _http: Http){

    }

    // following function emits particular pursuit details
    // based on pursuit id passed
    getPursuit(id: number): Observable<IPursuit>{
        // use find method on result 
        // since we want to return only one value
        return this.getPursuits()
            .map((pursuits: IPursuit[]) => pursuits.find(d => d.PursuitNumber == id));
    }

    // following function emits all pursuit details
    getPursuits(): Observable<IPursuit[]>{
        return this._http.get(this.pursuitURL).map((r:Response) => <IPursuit[]>r.json());
    }
}