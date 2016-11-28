import { Injectable } from '@angular/core';
import { IPursuit} from './ipursuit';

@Injectable()
export class PursuitService
{
    getPursuit(id: number): IPursuit{
        let pursuit: IPursuit;
        let pursuits: IPursuit[];

        pursuits = this.getPursuits();
        pursuit = pursuits[id-1];//(p => p.PursuitNumber = id); 
        return pursuit;
    }

    getPursuits(): IPursuit[]{
        return [
            {
                "PursuitNumber": 1,
                "PursuitName": "Pursuit 1",
                "ClientName": "Client 1",        
                "isActive": true,
                "Unit": "Houston",
                "Region": "South",
                "BillingType": "Fixed",
                "AE": "Meech",
                "Lead": "",
                "TeamMembers": "",
                "Details": "about to stert in first quarter of 2017, need 3 developers and 1 lead",
                "ExpectedValue": 200000,
                "Stage": "03",
                "RiskLevel": "Medium"         
            },
            {
                "PursuitNumber": 2,
                "PursuitName": "Pursuit 2",
                "ClientName": "Client 1",        
                "isActive": false,
                "Unit": "Houston",
                "Region": "South",
                "BillingType": "T&M",
                "AE": "Meech",
                "Lead": "",
                "TeamMembers": "",
                "Details": "Finished the project in last quarter of 2016",
                "ExpectedValue": 200000,
                "Stage": "08",
                "RiskLevel": "High"         
            },
            {
                "PursuitNumber": 3,
                "PursuitName": "Pursuit 3",
                "ClientName": "Client 2",        
                "isActive": true,
                "Unit": "Houston",
                "Region": "South",
                "BillingType": "T&M",
                "AE": "Tricia",
                "Lead": "",
                "TeamMembers": "",
                "Details": "about to stert in first quarter of 2017, need 3 developers and 1 lead",
                "ExpectedValue": 400000,
                "Stage": "04",
                "RiskLevel": "Medium"         
            }
        ];
    }

}