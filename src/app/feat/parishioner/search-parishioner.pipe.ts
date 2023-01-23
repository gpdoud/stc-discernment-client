import { Pipe, PipeTransform } from '@angular/core';
import { Parishioner } from './parishioner.class';

@Pipe({
  name: 'searchParishioner'
})
export class SearchParishionerPipe implements PipeTransform {

  transform(parishioners: Parishioner[], search: string = ''): Parishioner[] {
    if(parishioners.length === 0) return parishioners;
    search = search.toUpperCase();
    let selected: Parishioner[] = [];
    for(let p of parishioners) {
      if(
        p.id.toString().includes(search)
        || p.firstname.toUpperCase().includes(search)
        || p.lastname.toUpperCase().includes(search)
        || (p.ministry !== null && p.ministry.toUpperCase().includes(search))
        || (p.email !== null && p.email.toUpperCase().includes(search))
        || (p.cellphone !== null && p.cellphone.toUpperCase().includes(search))
        || p.reviewed.toString().toUpperCase().includes(search)
        || (p.status !== null && p.status.toString().toUpperCase().includes(search))
        || p.submittedBy.toString().toUpperCase().includes(search)
      ) {
        selected.push(p);
      }
    }
    return selected;
  }

}
