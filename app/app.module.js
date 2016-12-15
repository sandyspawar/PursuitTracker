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
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("angular2-google-maps/core");
var angular2_highcharts_1 = require("angular2-highcharts");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var unit_list_component_1 = require("./masters/units/unit-list.component");
var unit_detail_component_1 = require("./masters/units/unit-detail.component");
var pursuit_list_component_1 = require("./pursuits/pursuit-list.component");
var pursuit_detail_component_1 = require("./pursuits/pursuit-detail.component");
var risk_component_1 = require("./shared/risk/risk.component");
var welcome_component_1 = require("./home/welcome.component");
var pursuit_compactview_component_1 = require("./pursuits/pursuit-compactview.component");
var pursuits_filter_pipe_1 = require("./pursuits/pursuits-filter.pipe");
var units_filter_pipe_1 = require("./masters/units/units-filter.pipe");
var unit_form_component_1 = require("./masters/units/unit-form.component");
// 
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule,
            angular2_highcharts_1.ChartModule, http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'units', component: unit_list_component_1.UnitListComponent },
                { path: 'unit/:id', component: unit_detail_component_1.UnitDetailComponent },
                { path: 'pursuits', component: pursuit_list_component_1.PursuitListComponent },
                { path: 'pursuit/:id', component: pursuit_detail_component_1.PursuitDetailComponent },
                { path: 'addunit', component: unit_form_component_1.UnitFormComponent },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyB0KzWhVpdX3866zxRuum_PdCAoqLFI5e0'
            })
        ],
        declarations: [app_component_1.AppComponent, pursuit_list_component_1.PursuitListComponent, pursuit_detail_component_1.PursuitDetailComponent,
            pursuit_compactview_component_1.PursuitCompactViewComponent, pursuits_filter_pipe_1.PursuitFilterPipe,
            risk_component_1.RiskComponent, welcome_component_1.WelcomeComponent,
            unit_list_component_1.UnitListComponent, unit_detail_component_1.UnitDetailComponent, unit_form_component_1.UnitFormComponent,
            units_filter_pipe_1.UnitFilterPipe],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map