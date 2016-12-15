import {Component, OnInit} from '@angular/core';
import {IPursuit} from './Ipursuit';
import {PursuitService} from './pursuit.service';
import {PursuitDetailComponent} from './pursuit-detail.component';
import {PursuitFilterPipe} from './pursuits-filter.pipe';

@Component({
    selector: "pm-pursuits",
    moduleId: module.id,
    templateUrl: 'pursuit-list.component.html',
    styleUrls: ['pursuit-list.component.css']
})
export class PursuitListComponent implements OnInit{
    pageTitle: string = "Pursuits List";
    showPursuitInfo: boolean = false;
    listFilter: string = "";
    pursuits: IPursuit[];

    constructor(private _pursuitService: PursuitService)
    {

    }

    getAllPursuits(){
        console.log("Show All pursuits");
        this.listFilter = "";
    }

    togglePursuitInfo(): void
    {
        this.showPursuitInfo = !this.showPursuitInfo;
    }

    getTitle(): string
    {
        return this.pageTitle + " (Current)";
    }

    // component life cycle events
    ngOnInit(): void
    {
        console.log("on Init");
        this._pursuitService.getPursuits().subscribe(d => this.pursuits = d);        
    }
}