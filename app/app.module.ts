import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ChartModule } from 'angular2-highcharts';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UnitListComponent } from './masters/units/unit-list.component';
import { UnitDetailComponent } from './masters/units/unit-detail.component';
import { PursuitListComponent} from './pursuits/pursuit-list.component';
import { PursuitDetailComponent} from './pursuits/pursuit-detail.component';
import { RiskComponent } from './shared/risk/risk.component';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
  imports: [ BrowserModule, CommonModule, FormsModule, 
            ChartModule, HttpModule,  
            RouterModule.forRoot([
              { path: 'units', component: UnitListComponent},
              { path: 'unit/:id', component: UnitDetailComponent},
              { path: 'pursuits', component: PursuitListComponent},
              { path: 'pursuit/:id', component: PursuitDetailComponent},
              { path: 'welcome', component: WelcomeComponent},
              { path: '', redirectTo: 'welcome', pathMatch: 'full'},
              { path: '**' , redirectTo: 'welcome', pathMatch: 'full'}
            ]),
            AgmCoreModule.forRoot()
           ],
  declarations: [ AppComponent, PursuitListComponent, PursuitDetailComponent, 
                  RiskComponent, WelcomeComponent, 
                  UnitListComponent, UnitDetailComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
