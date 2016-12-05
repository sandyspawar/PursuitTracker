//import { IUnit } from '../masters/units/Iunit';

export interface IConsultant
{
    ConsultantID: number,
    Name: string,
    UnitID: number,
    //Unit: IUnit,
    Practice: string,
    Designation: string,
    IsATO: boolean
}