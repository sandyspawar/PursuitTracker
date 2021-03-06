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
var UnitService = (function () {
    function UnitService(_http) {
        this._http = _http;
        this.unitURL = 'app/assets/data/unitdata.txt';
    }
    // following function emits particular unit data
    // based on unit id passed
    UnitService.prototype.getUnit = function (id) {
        // use find method on result 
        // since we want to return only one value
        return this.getUnits()
            .map(function (units) { return units.find(function (v) { return v.ID == id; }); });
    };
    // following function emits all units details
    UnitService.prototype.getUnits = function () {
        return this._http.get(this.unitURL)
            .map(function (r) { return r.json(); });
    };
    return UnitService;
}());
UnitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UnitService);
exports.UnitService = UnitService;
//# sourceMappingURL=units.service.js.map