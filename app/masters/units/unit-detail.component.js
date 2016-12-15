"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var consultant_service_1 = require("../../consultants/consultant.service");
var units_service_1 = require("./units.service");
var router_1 = require("@angular/router");
var UnitDetailComponent = (function () {
    function UnitDetailComponent(_consultantService, _unitService, _route, _router) {
        this._consultantService = _consultantService;
        this._unitService = _unitService;
        this._route = _route;
        this._router = _router;
        this.pageTitle = "Unit Details";
        // This variable hold the data for ATO and Billing consultants 
        // to plot on Y-Axis of ATOPieChart
        this.billingdata = [];
        // This variable hold the data for Practice wise consultants 
        // to plot on Y-Axis of Practice Pie Chart
        this.practicedata = [];
    }
    UnitDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this._route.params.subscribe(function (param) {
            id = param['id'];
            console.log("Parameter changed to : " + id);
            // fetch the details of unit
            _this._unitService.getUnit(id)
                .subscribe(function (d) {
                _this.unit = d;
                _this.pageTitle = "Unit :- " + d.Name;
            });
            // fecth all consultants in array for selected unit
            _this._consultantService.getUnitConsultants(id)
                .subscribe(function (d) {
                _this.consultants = d;
                console.log("Total consultants : " + _this.consultants.length);
                // call function to set ATO Pie Chart
                _this.setATOChart();
                // call function to set Prctice Pie Chart
                _this.setPracticeChart();
            });
        });
    };
    // function to set Practice Pie chart
    UnitDetailComponent.prototype.setPracticeChart = function () {
        // get total consultants for this unit
        this.totalConsultants = this.consultants.length;
        // get all Cloud consultants
        var cloud_ConsultantTotal = this.consultants.filter(function (i) { return i.Practice == "Cloud"; }).length;
        // get all DT consultants
        var dt_ConsultantTotal = this.consultants.filter(function (i) { return i.Practice == "DT"; }).length;
        // get all SDI consultants
        var sdi_ConsultantTotal = this.totalConsultants - dt_ConsultantTotal - cloud_ConsultantTotal;
        // once you fetch all consultants data.
        // prepare practicedata for Practice Pie Chart
        this.practicedata = [];
        this.practicedata.push({ name: "Cloud", y: cloud_ConsultantTotal }); // Clould consultants
        this.practicedata.push({ name: "DT", y: dt_ConsultantTotal }); // DT consultants
        this.practicedata.push({ name: "SD&I", y: sdi_ConsultantTotal }); // SD&I consultants
        // set the Practice Pie chart options
        this.practiceCharoptions = {
            chart: { type: 'pie' },
            title: { text: 'Practice' },
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
                        distance: 5
                    }
                }]
        };
        return;
    };
    // function to set Practice Pie Chart
    UnitDetailComponent.prototype.setATOChart = function () {
        // get total consultants for this unit
        this.totalConsultants = this.consultants.length;
        // get all ATO consultants
        var atoConsultantTotal = this.consultants.filter(function (i) { return i.IsATO; }).length;
        // get all Billing consultants
        var billingConsultantTotal = this.totalConsultants - atoConsultantTotal;
        // once you fetch all consultants data.
        // prepare billingdata for ATO Pie Chart
        this.billingdata = [];
        this.billingdata.push({ name: "ATO", y: atoConsultantTotal }); // ATO percentage
        this.billingdata.push({ name: "Billing", y: billingConsultantTotal }); // Billing percentage
        // set the ATO Pie chart options
        this.atoCharoptions = {
            chart: { type: 'pie' },
            title: { text: 'ATO' },
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
                        distance: 5
                    }
                }]
        };
        return;
    };
    UnitDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/units']);
    };
    return UnitDetailComponent;
}());
UnitDetailComponent = __decorate([
    core_1.Component({
        selector: "pm-unitdetail",
        moduleId: module.id,
        templateUrl: 'unit-detail.component.html',
        styleUrls: ['unit-detail.component.css']
    }),
    __metadata("design:paramtypes", [consultant_service_1.ConsultantService,
        units_service_1.UnitService,
        router_1.ActivatedRoute,
        router_1.Router])
], UnitDetailComponent);
exports.UnitDetailComponent = UnitDetailComponent;
//# sourceMappingURL=unit-detail.component.js.map