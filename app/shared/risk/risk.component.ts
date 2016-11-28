import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: "sc-risk",
    moduleId: module.id,
    templateUrl: 'risk.component.html',
    styleUrls: ['risk.component.css']
})

export class RiskComponent implements OnChanges{
    @Input() risklevel: string;
    pointerWidth: number =0;
    ngOnChanges(): void{
        this.pointerWidth = (this.risklevel == "Low" ? 1.5 :
            (this.risklevel == "Medium" ? 5 :
                (this.risklevel == "High" ? 8.5 : 0)));
    }
}