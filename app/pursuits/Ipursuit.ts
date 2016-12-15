export interface IPursuit
{
        PursuitNumber: number;
        PursuitName: string;
        ClientName: string;       
        isActive: boolean;
        UnitID: number;
        UnitName: string;
        Region: string;
        BillingType: string;
        AE: string;
        Lead: string;
        TeamMembers: string;
        Details: string;
        ExpectedValue: number;
        Stage: string;
        RiskLevel: string;
        
}

export class Pursuit implements IPursuit
{
        PursuitNumber: number;
        PursuitName: string;
        ClientName: string;        
        isActive: boolean;
        UnitID: number;
        UnitName: string;
        Region: string;
        BillingType: string;
        AE: string;
        Lead: string;
        TeamMembers: string;
        Details: string;
        ExpectedValue: number;
        Stage: string;
        RiskLevel: string;

        constructor()
        {
        }

}