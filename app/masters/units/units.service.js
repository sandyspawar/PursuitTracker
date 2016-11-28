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
var UnitService = (function () {
    function UnitService() {
    }
    UnitService.prototype.getUnits = function () {
        return [
            {
                "Name": "Houston",
                "Region": "South",
                "State": "Texas",
                "latitude": 29.76043,
                "longitude": -95.36980,
                "GVP": "Cynthia",
                "NoofConsultants": 101
            },
            {
                "Name": "Dallas",
                "Region": "South",
                "State": "Texas",
                "latitude": 32.77666,
                "longitude": -96.79699,
                "GVP": "Cynthia",
                "NoofConsultants": 120
            },
            {
                "Name": "Austin",
                "Region": "South",
                "State": "Texas",
                "latitude": 30.26715,
                "longitude": -97.74306,
                "GVP": "Cynthia",
                "NoofConsultants": 111
            }
        ];
    };
    return UnitService;
}());
UnitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UnitService);
exports.UnitService = UnitService;
//# sourceMappingURL=units.service.js.map