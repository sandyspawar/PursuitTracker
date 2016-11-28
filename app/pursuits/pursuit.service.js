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
var PursuitService = (function () {
    function PursuitService() {
    }
    PursuitService.prototype.getPursuit = function (id) {
        var pursuit;
        var pursuits;
        pursuits = this.getPursuits();
        pursuit = pursuits[id - 1]; //(p => p.PursuitNumber = id); 
        return pursuit;
    };
    PursuitService.prototype.getPursuits = function () {
        return [
            {
                "PursuitNumber": 1,
                "PursuitName": "Pursuit 1",
                "ClientName": "Client 1",
                "isActive": true,
                "Unit": "Houston",
                "Region": "South",
                "BillingType": "Fixed",
                "AE": "Meech",
                "Lead": "",
                "TeamMembers": "",
                "Details": "about to stert in first quarter of 2017, need 3 developers and 1 lead",
                "ExpectedValue": 200000,
                "Stage": "03",
                "RiskLevel": "Medium"
            },
            {
                "PursuitNumber": 2,
                "PursuitName": "Pursuit 2",
                "ClientName": "Client 1",
                "isActive": false,
                "Unit": "Houston",
                "Region": "South",
                "BillingType": "T&M",
                "AE": "Meech",
                "Lead": "",
                "TeamMembers": "",
                "Details": "Finished the project in last quarter of 2016",
                "ExpectedValue": 200000,
                "Stage": "08",
                "RiskLevel": "High"
            },
            {
                "PursuitNumber": 3,
                "PursuitName": "Pursuit 3",
                "ClientName": "Client 2",
                "isActive": true,
                "Unit": "Houston",
                "Region": "South",
                "BillingType": "T&M",
                "AE": "Tricia",
                "Lead": "",
                "TeamMembers": "",
                "Details": "about to stert in first quarter of 2017, need 3 developers and 1 lead",
                "ExpectedValue": 400000,
                "Stage": "04",
                "RiskLevel": "Medium"
            }
        ];
    };
    return PursuitService;
}());
PursuitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PursuitService);
exports.PursuitService = PursuitService;
//# sourceMappingURL=pursuit.service.js.map