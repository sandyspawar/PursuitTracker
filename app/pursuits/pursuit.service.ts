import { Injectable } from '@angular/core';
import { IPursuit} from './ipursuit';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PursuitService
{
    pursuitURL: string = 'app/assets/data/pursuitdata.json';
    pursuits: IPursuit[];

    constructor(private _http: Http){

    }

    getPursuit(id: number): IPursuit{
        this.getPursuitsData().subscribe(i => this.pursuits = i);
        return this.pursuits.find(i => i.PursuitNumber == id);
    }

    getPursuits(): IPursuit[]{
        this.getPursuitsData().subscribe(i => this.pursuits = i);
        return this.pursuits;
    }

    getPursuitsData(): Observable<IPursuit[]>{        
        return this._http.get(this.pursuitURL).map((r:Response) => <IPursuit[]>r.json());        
    }

}