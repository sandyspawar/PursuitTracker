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
var router_1 = require("@angular/router");
var PursuitDetailComponent = (function () {
    function PursuitDetailComponent(_pursuitService, _route) {
        this._pursuitService = _pursuitService;
        this._route = _route;
        this.pageTitle = "Pursuit Detail";
        this.showPursuitInfo = false;
    }
    PursuitDetailComponent.prototype.ngOnInit = function () {
        var id;
        id = this._route.snapshot.params['id'];
        this.pageTitle += ' - ' + id.toString();
        // since we received the id, get the product detail
        // based on id
        this.pursuit = this._pursuitService.getPursuit(id);
    };
    PursuitDetailComponent.prototype.togglePursuitInfo = function () {
        this.showPursuitInfo = !this.showPursuitInfo;
    };
    PursuitDetailComponent.prototype.getTitle = function () {
        return this.pageTitle;
    };
    return PursuitDetailComponent;
}());
PursuitDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "pm-pursuitdetail",
        templateUrl: 'pursuit-detail.component.html',
        styleUrls: ['pursuit-list.component.css']
    }),
    __metadata("design:paramtypes", [pursuit_service_1.PursuitService,
        router_1.ActivatedRoute])
], PursuitDetailComponent);
exports.PursuitDetailComponent = PursuitDetailComponent;
;
//# sourceMappingURL=pursuit-detail.component.js.map