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
var units_service_1 = require("../masters/units/units.service");
var consultant_service_1 = require("../consultants/consultant.service");
var WelcomeComponent = (function () {
    function WelcomeComponent(_unitService, _consultantService) {
        this._unitService = _unitService;
        this._consultantService = _consultantService;
        this.pageTitle = 'Welcome Sogeti';
        this.lat = 29.7604;
        this.lng = -95.36980;
        this.lat1 = 32.77666;
        this.lng1 = -96.79699;
        this.currentunitID = 0;
    }
    // component life cycle events
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("on Init -- Started");
        this._unitService.getUnits()
            .subscribe(function (d) {
            _this.units = d;
            console.log("total units :" + _this.units.length);
            _this.units.forEach(function (p) {
                return _this._consultantService.getUnitConsultants(p.ID)
                    .subscribe(function (g) { return p.ConsultantCount = g.length; });
            });
        });
        console.log("on Init -- completed");
    };
    // update current unit id
    // this unit id will be used by
    // any component who wish to display related data of unit
    WelcomeComponent.prototype.updateCurrentUnitID = function (id) {
        console.log("Set current Unit ID : " + id);
        this.currentunitID = id;
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/home/welcome.component.html',
        styleUrls: ['app/home/welcome.component.css']
    }),
    __metadata("design:paramtypes", [units_service_1.UnitService,
        consultant_service_1.ConsultantService])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map