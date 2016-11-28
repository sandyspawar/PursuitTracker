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
var RiskComponent = (function () {
    function RiskComponent() {
        this.pointerWidth = 0;
    }
    RiskComponent.prototype.ngOnChanges = function () {
        this.pointerWidth = (this.risklevel == "Low" ? 1.5 :
            (this.risklevel == "Medium" ? 5 :
                (this.risklevel == "High" ? 8.5 : 0)));
    };
    return RiskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RiskComponent.prototype, "risklevel", void 0);
RiskComponent = __decorate([
    core_1.Component({
        selector: "sc-risk",
        moduleId: module.id,
        templateUrl: 'risk.component.html',
        styleUrls: ['risk.component.css']
    }),
    __metadata("design:paramtypes", [])
], RiskComponent);
exports.RiskComponent = RiskComponent;
//# sourceMappingURL=risk.component.js.map