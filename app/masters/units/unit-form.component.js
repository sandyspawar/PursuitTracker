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
var IUnit_1 = require("./IUnit");
var router_1 = require("@angular/router");
var UnitFormComponent = (function () {
    function UnitFormComponent(_unitService, _route, _router) {
        this._unitService = _unitService;
        this._route = _route;
        this._router = _router;
        this.pageTitle = "Unit add form";
        this.informationMessage = "";
        this.errorMessage = "";
    }
    UnitFormComponent.prototype.ngOnInit = function () {
        this.unit = new IUnit_1.Unit();
        this.unit.ID = 4;
    };
    UnitFormComponent.prototype.onAddUnitClicked = function () {
        this.informationMessage = "Adding unit implmentation is not done yet";
        console.log(this.informationMessage);
        setTimeout(function () {
            this.informationMessage = "";
        }, 2000);
    };
    UnitFormComponent.prototype.onBack = function () {
        this._router.navigate(['/units']);
    };
    return UnitFormComponent;
}());
UnitFormComponent = __decorate([
    core_1.Component({
        selector: "pm-unitform",
        moduleId: module.id,
        templateUrl: 'unit-form.component.html',
        styleUrls: ['unit-form.component.css']
    }),
    __metadata("design:paramtypes", [units_service_1.UnitService,
        router_1.ActivatedRoute,
        router_1.Router])
], UnitFormComponent);
exports.UnitFormComponent = UnitFormComponent;
//# sourceMappingURL=unit-form.component.js.map