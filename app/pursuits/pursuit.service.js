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
var PursuitService = (function () {
    function PursuitService(_http) {
        this._http = _http;
        this.pursuitURL = 'app/assets/data/pursuitdata.txt'; //
    }
    // following function emits particular pursuit details
    // based on pursuit id passed
    PursuitService.prototype.getPursuit = function (id) {
        // use find method on result 
        // since we want to return only one value
        return this.getPursuits()
            .map(function (pursuits) { return pursuits.find(function (d) { return d.PursuitNumber == id; }); });
    };
    // following function emits all pursuit details
    PursuitService.prototype.getPursuits = function () {
        return this._http.get(this.pursuitURL).map(function (r) { return r.json(); });
    };
    return PursuitService;
}());
PursuitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PursuitService);
exports.PursuitService = PursuitService;
//# sourceMappingURL=pursuit.service.js.map