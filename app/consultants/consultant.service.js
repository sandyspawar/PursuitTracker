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
var ConsultantService = (function () {
    function ConsultantService(_http) {
        this._http = _http;
        this.consultantURL = 'app/assets/data/consultant.json';
    }
    ConsultantService.prototype.getConsultantsData = function () {
        return this._http.get(this.consultantURL).map(function (r) { return r.json(); });
    };
    ConsultantService.prototype.getUnitConsultants = function (id) {
        var _this = this;
        this.getConsultantsData().subscribe(function (d) { return _this.consultants = d; });
        return this.consultants.filter(function (i) { return i.UnitID == id; });
    };
    ConsultantService.prototype.getConsultant = function (id) {
        var _this = this;
        this.getConsultantsData().subscribe(function (d) { return _this.consultants = d; });
        return this.consultants.find(function (i) { return i.UnitID == id; });
    };
    ConsultantService.prototype.getConsultants = function () {
        var _this = this;
        this.getConsultantsData().subscribe(function (d) { return _this.consultants = d; });
        return this.consultants;
    };
    return ConsultantService;
}());
ConsultantService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ConsultantService);
exports.ConsultantService = ConsultantService;
//# sourceMappingURL=consultant.service.js.map