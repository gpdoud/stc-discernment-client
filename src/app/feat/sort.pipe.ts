import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], col: string = 'id', asc: boolean = true): any[] {
    if(col === '') return arr;

    const sortFn = (a:any, b:any) => {
      if(a[col] === null) a[col] = '';
      if(b[col] === null) b[col] = '';
      let x = typeof a[col] === "number" ? a[col] : a[col].toString();
      let y = typeof b[col] === "number" ? b[col] : b[col].toString();
      if(x === y) return 0;
      if(asc)
        return (x > y) ? 1 : -1;
      else 
        return (x > y) ? -1 : 1;
    }

    return arr.sort(sortFn);
    
  }

}
