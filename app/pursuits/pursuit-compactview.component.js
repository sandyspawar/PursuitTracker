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
var pursuit_service_1 = require("./pursuit.service");
var units_service_1 = require("../masters/units/units.service");
var PursuitCompactViewComponent = (function () {
    function PursuitCompactViewComponent(_pursuitService, _unitService) {
        this._pursuitService = _pursuitService;
        this._unitService = _unitService;
        this.pageTitle = "All pursuits";
        this.showPursuitInfo = false;
        this.listFilter = "";
        this.unitID = 0; //this property acts as input to this component.
    }
    PursuitCompactViewComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log("Onchanges: " + this.unitID);
        // get all pursuit details of particular unit
        // if unit id is not defined then display all pursuit
        // if unit id is received then display unit name and unit pursuits
        var allpursuits = true;
        if (this.unitID) {
            if (this.unitID > 0) {
                allpursuits = false;
                // then retrieve the unit details
                this._unitService.getUnit(this.unitID)
                    .subscribe(function (d) {
                    _this.unit = d;
                    _this.pageTitle = "Pursuits by " + d.Name + " Unit";
                });
                // and retrieve the pursuit details by unit
                this._pursuitService.getPursuits()
                    .subscribe(function (d) { return _this.pursuits =
                    d.filter(function (values) { return values.UnitID == _this.unitID; }); });
            }
        }
        if (allpursuits) {
            // retrieve all pursuits details
            this._pursuitService.getPursuits()
                .subscribe(function (d) { return _this.pursuits = d; });
        }
    };
    PursuitCompactViewComponent.prototype.togglePursuitInfo = function () {
        this.showPursuitInfo = !this.showPursuitInfo;
    };
    PursuitCompactViewComponent.prototype.getAllPursuits = function () {
        console.log("Show All pursuits");
        this.listFilter = "";
        this.unitID = 0;
        this.pageTitle = "All Pursuits";
        this.ngOnChanges();
    };
    PursuitCompactViewComponent.prototype.getTitle = function () {
        return this.pageTitle;
    };
    // component life cycle events
    PursuitCompactViewComponent.prototype.ngOnInit = function () {
        console.log("on Init");
        //this._pursuitService.getPursuits().subscribe(d => this.pursuits = d);        
    };
    return PursuitCompactViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PursuitCompactViewComponent.prototype, "unitID", void 0);
PursuitCompactViewComponent = __decorate([
    core_1.Component({
        selector: "pm-cv-pursuits",
        moduleId: module.id,
        templateUrl: 'pursuit-compactview.component.html',
        styleUrls: ['pursuit-compactview.component.css']
    }),
    __metadata("design:paramtypes", [pursuit_service_1.PursuitService,
        units_service_1.UnitService])
], PursuitCompactViewComponent);
exports.PursuitCompactViewComponent = PursuitCompactViewComponent;
//# sourceMappingURL=pursuit-compactview.component.js.map