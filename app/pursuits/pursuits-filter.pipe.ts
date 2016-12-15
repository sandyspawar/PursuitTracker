import { PipeTransform, Pipe} from '@angular/core';
import { IPursuit } from './Ipursuit';

@Pipe({
    name: "PursuitFilter"
})


export class PursuitFilterPipe implements PipeTransform
{
    transform(value: IPursuit[], filterBy: string): IPursuit[]
    {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(p => p.PursuitName.toLocaleLowerCase().includes(filterBy)) : value;
    }
}