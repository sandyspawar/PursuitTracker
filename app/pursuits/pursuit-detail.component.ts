import {Component, OnInit} from '@angular/core';
import {IPursuit} from './Ipursuit';
import {PursuitService} from './pursuit.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "pm-pursuitdetail",
    templateUrl: 'pursuit-detail.component.html',
    styleUrls: ['pursuit-list.component.css']
})

export class PursuitDetailComponent implements OnInit{
    pageTitle: string = "Pursuit Detail";
    showPursuitInfo: boolean = false;
    pursuit: IPursuit;

    constructor(private _pursuitService: PursuitService, 
                private _route: ActivatedRoute,
                private _router: Router)
    {

    }

    ngOnInit(): void{
        let id: number;
        id = this._route.snapshot.params['id'];
        this.pageTitle += ' - ' + id.toString(); 
        // since we received the id, get the product detail
        // based on id
        this.pursuit = this._pursuitService.getPursuit(id);
    }

    togglePursuitInfo(): void
    {
        this.showPursuitInfo = !this.showPursuitInfo;
    }

    getTitle(): string
    {
        return this.pageTitle;
    }

    onBack() : void
    {
        this._router.navigate(['/pursuits']);
    }
};