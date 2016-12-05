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
var units_service_1 = require("./units.service");
var consultant_service_1 = require("../../consultants/consultant.service");
var UnitListComponent = (function () {
    // constructor of Unit Class
    // which initilize the satic version of service class for use
    function UnitListComponent(_unitservice, _consultantService) {
        this._unitservice = _unitservice;
        this._consultantService = _consultantService;
        this.pageTitle = "Units List";
        this.listFilter = "";
    }
    UnitListComponent.prototype.getTitle = function () {
        return this.pageTitle + " (Current)";
    };
    // component life cycle events
    UnitListComponent.prototype.ngOnInit = function () {
        console.log("on Init");
        this.units = this._unitservice.getUnits();
        // fecth all consultants in array for selected unit
        this.consultants = this._consultantService.getConsultants();
    };
    // this method accepts the Unit ID as parameter 
    // and returns the number of consultants in same unit
    UnitListComponent.prototype.getUnitConsultants = function (ID) {
        return this.consultants.filter(function (c) { return c.UnitID == ID; }).length;
    };
    return UnitListComponent;
}());
UnitListComponent = __decorate([
    core_1.Component({
        selector: "pm-unit",
        moduleId: module.id,
        templateUrl: "unit-list.component.html",
        styleUrls: ['unit-list.component.css']
    }),
    __metadata("design:paramtypes", [units_service_1.UnitService,
        consultant_service_1.ConsultantService])
], UnitListComponent);
exports.UnitListComponent = UnitListComponent;
//# sourceMappingURL=unit-list.component.js.map