import { Component, OnInit} from '@angular/core';
import { ConsultantService } from '../../consultants/consultant.service';
import { IConsultant } from '../../consultants/Iconsultant';
import { UnitService } from './units.service';
import { IUnit } from './IUnit';
import { ActivatedRoute, Router} from '@angular/router';
import { ChartComponent, ChartModule } from 'angular2-highcharts';


@Component(
    {
        selector: "pm-unitdetail",
        moduleId: module.id,
        templateUrl: 'unit-detail.component.html',
        styleUrls: ['unit-detail.component.css']
    }
)

export class UnitDetailComponent implements OnInit
{    
    pageTitle: string = "Unit Details";
    consultants: IConsultant[];
    totalConsultants: number;
    unit: IUnit;

    // this displays the ATO pie Chart
    atoCharoptions: Object;

    // this displays the Practice wise consultants pie chart
    practiceCharoptions: Object;

    // This variable hold the data for ATO and Billing consultants 
    // to plot on Y-Axis of ATOPieChart
    billingdata: Object[] = [];

    // This variable hold the data for Practice wise consultants 
    // to plot on Y-Axis of Practice Pie Chart
    practicedata: Object[] = [];

    constructor(private _consultantService: ConsultantService, 
            private _unitService: UnitService,
            private _route: ActivatedRoute,
            private _router: Router)
    {
        
    }

    ngOnInit(): void{        
        let id: number;
        this._route.params.subscribe(param => {
            id = param['id'];
            console.log("Parameter changed to : " + id );
            // fetch the details of unit
            this._unitService.getUnit(id)
                    .subscribe(d => {
                                        this.unit = d;
                                        this.pageTitle = "Unit :- " + d.Name ;
                                    });

            // fecth all consultants in array for selected unit
            this._consultantService.getUnitConsultants(id)
                    .subscribe(d => {
                                        this.consultants = d;
                                        console.log("Total consultants : " + this.consultants.length);
                                        // call function to set ATO Pie Chart
                                        this.setATOChart();
                                        // call function to set Prctice Pie Chart
                                        this.setPracticeChart();
                                        });

        });
    }

    // function to set Practice Pie chart
    setPracticeChart(): void
    {
        // get total consultants for this unit
        this.totalConsultants = this.consultants.length;

        // get all Cloud consultants
        var cloud_ConsultantTotal = this.consultants.filter(i => i.Practice == "Cloud").length;
        // get all DT consultants
        var dt_ConsultantTotal = this.consultants.filter(i => i.Practice == "DT").length;
        // get all SDI consultants
        var sdi_ConsultantTotal = this.totalConsultants - dt_ConsultantTotal - cloud_ConsultantTotal;

        // once you fetch all consultants data.
        // prepare practicedata for Practice Pie Chart
        this.practicedata = [];

        this.practicedata.push({name: "Cloud", y: cloud_ConsultantTotal}); // Clould consultants
        this.practicedata.push({name: "DT", y: dt_ConsultantTotal}); // DT consultants
        this.practicedata.push({name: "SD&I", y: sdi_ConsultantTotal}); // SD&I consultants

        // set the Practice Pie chart options
        this.practiceCharoptions = {
            chart: { type: 'pie'},
            title : { text : 'Practice' },
            yAxis: {
                title: {
                    text: 'Total number of Consultants (Practice wise)'
                    }
            },            
            series: [{
                name: "Consultants",
                size: '60%',
                data: this.practicedata,  
                dataLabels: {
                    formatter: function () {
                    return '<b>' + this.point.name + ':</b> ' + this.y;
                    }, 
                    distance: 5}         
            }]
        };
        return;
    }

    // function to set Practice Pie Chart
    setATOChart(): void
    {
        // get total consultants for this unit
        this.totalConsultants = this.consultants.length;

        // get all ATO consultants
        var atoConsultantTotal = this.consultants.filter(i => i.IsATO).length;
        // get all Billing consultants
        var billingConsultantTotal = this.totalConsultants - atoConsultantTotal;

        // once you fetch all consultants data.
        // prepare billingdata for ATO Pie Chart
        this.billingdata = [];
        this.billingdata.push({name: "ATO", y: atoConsultantTotal}); // ATO percentage
        this.billingdata.push({name: "Billing", y: billingConsultantTotal}); // Billing percentage

        // set the ATO Pie chart options
        this.atoCharoptions = {
            chart: { type: 'pie'},
            title : { text : 'ATO' },
            yAxis: {
                title: {
                    text: 'Total percent of Billing consultants'
                    }
            },            
            series: [{
                name: "Consultants",
                size: '60%',
                data: this.billingdata,  
                dataLabels: {
                    formatter: function () {
                    return '<b>' + this.point.name + ':</b> ' + this.y;
                    }, 
                    distance: 5}         
            }]
        };
        return;
    }

    onBack(): void{
        this._router.navigate(['/units']);
    }
}
