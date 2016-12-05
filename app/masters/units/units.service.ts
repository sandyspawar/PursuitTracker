import { Injectable } from '@angular/core';
import { IUnit} from './iunit';
import { Http} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UnitService
{
    unitURL: string = 'app/assets/data/unitdata.json';
    units: IUnit[];

    constructor(private _http: Http){

    }

    getUnit(id: number): IUnit{        
        this.getUnitData().subscribe(d => this.units = d);
        return this.units.find(i => i.ID == id);
    }

    getUnitData(): Observable<IUnit[]>{
        return this._http.get(this.unitURL).map(r => <IUnit[]>r.json());
    }

    getUnits(): IUnit[]{
        this.getUnitData().subscribe(d => this.units = d);
        return this.units;
    }

}