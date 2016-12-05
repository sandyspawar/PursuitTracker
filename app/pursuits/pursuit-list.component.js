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
var PursuitListComponent = (function () {
    function PursuitListComponent(_pursuitService) {
        this._pursuitService = _pursuitService;
        this.pageTitle = "Pursuits List";
        this.showPursuitInfo = false;
        this.listFilter = "";
    }
    PursuitListComponent.prototype.togglePursuitInfo = function () {
        this.showPursuitInfo = !this.showPursuitInfo;
    };
    PursuitListComponent.prototype.getTitle = function () {
        return this.pageTitle + " (Current)";
    };
    // component life cycle events
    PursuitListComponent.prototype.ngOnInit = function () {
        console.log("on Init");
        this.pursuits = this._pursuitService.getPursuits();
    };
    return PursuitListComponent;
}());
PursuitListComponent = __decorate([
    core_1.Component({
        selector: "pm-pursuits",
        moduleId: module.id,
        templateUrl: 'pursuit-list.component.html',
        styleUrls: ['pursuit-list.component.css']
    }),
    __metadata("design:paramtypes", [pursuit_service_1.PursuitService])
], PursuitListComponent);
exports.PursuitListComponent = PursuitListComponent;
//# sourceMappingURL=pursuit-list.component.js.map