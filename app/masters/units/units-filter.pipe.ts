import { PipeTransform, Pipe} from '@angular/core';
import { IUnit } from './IUnit';

@Pipe({
    name: "UnitFilter"
})


export class UnitFilterPipe implements PipeTransform
{
    transform(value: IUnit[], filterBy: string): IUnit[]
    {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(p => p.Name.toLocaleLowerCase().includes(filterBy)) : value;//
    }
}