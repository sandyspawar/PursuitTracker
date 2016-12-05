import { Injectable } from '@angular/core';
import { IConsultant} from './Iconsultant';
import { Http} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsultantService
{
    consultantURL: string = 'app/assets/data/consultant.json';
    consultants: IConsultant[];

    constructor(private _http: Http){

    }

    getConsultantsData(): Observable<IConsultant[]>{
        return this._http.get(this.consultantURL).map(r => <IConsultant[]>r.json());
    }

    getUnitConsultants(id: number): IConsultant[]{
        this.getConsultantsData().subscribe(d => this.consultants = d);
        return this.consultants.filter(i => i.UnitID == id);
    }

    getConsultant(id: number): IConsultant{
        this.getConsultantsData().subscribe(d => this.consultants = d);
        return this.consultants.find(i => i.UnitID == id);
    }

    getConsultants(): IConsultant[]{
        this.getConsultantsData().subscribe(d => this.consultants = d);
        return this.consultants;
    }

}