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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/count");
require("rxjs/add/operator/toPromise");
var ConsultantService = (function () {
    function ConsultantService(_http) {
        this._http = _http;
        this.consultantURL = 'app/assets/data/consultant.txt'; //
    }
    /*// following function emits consultants data
    // from the particular unit based on the unit id passed
    getUnitConsultantsCount(id: number): number{
        // use filter method on result
        // since we want to return more than one values
        var count = 90;
        this.getConsultants()
            .map((consultants : IConsultant[]) => consultants.filter(d => d.UnitID == id))
            .count().subscribe(p => count = p);
        return count;
    }
    */
    // following function emits consultants data
    // from the particular unit based on the unit id passed
    ConsultantService.prototype.getUnitConsultants = function (id) {
        // use filter method on result 
        // since we want to return more than one values
        return this.getConsultants()
            .map(function (consultants) { return consultants.filter(function (d) { return d.UnitID == id; }); });
    };
    // following function emits particular consultant data
    // based on id is passed
    ConsultantService.prototype.getConsultant = function (id) {
        // use find method on result 
        // since we want to return only one value
        return this.getConsultants()
            .map(function (consultants) { return consultants.find(function (d) { return d.ConsultantID == id; }); });
    };
    // following function emits all consultants details
    ConsultantService.prototype.getConsultants = function () {
        return this._http.get(this.consultantURL)
            .map(function (r) { return r.json(); });
    };
    return ConsultantService;
}());
ConsultantService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ConsultantService);
exports.ConsultantService = ConsultantService;
//# sourceMappingURL=consultant.service.js.map