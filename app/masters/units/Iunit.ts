export interface IUnit
{
        ID: number;
        Name: string;
        Region: string;
        State: string;
        latitude: number;
        longitude: number;
        GVP: string;
        ConsultantCount: number;
}


export class Unit implements IUnit
{
        ID: number;
        Name: string;
        Region: string;
        State: string;
        latitude: number;
        longitude: number;
        GVP: string;
        ConsultantCount: number;

        constructor()
        {
                
        }
}