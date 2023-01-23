import { Component } from '@angular/core';
import { Parishioner } from '../parishioner.class';
import { ParishionerService } from '../parishioner.service';

@Component({
  selector: 'app-parishioner-review',
  templateUrl: './parishioner-review.component.html',
  styleUrls: ['./parishioner-review.component.css']
})
export class ParishionerReviewComponent {

  pageTitle = "Parishioners Review List";
  parishioners!: Parishioner[];
  sortColumn = "lastname";
  sortAsc = true;
  searchCriteria = "";

  sortFn(column: string): void {
    if(this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }
  constructor(
    private pshsvc: ParishionerService
  ) {}

  filterParishionersOnly(parishioners: Parishioner[]): Parishioner[] {
    let selected: Parishioner[] = [];
    for(let p of parishioners) {
      if(p.ministry === "Parishioner") {
        selected.push(p);
      }
    }
    return selected;
  }

  ngOnInit(): void {
    this.pshsvc.list().subscribe({
      next: (res) => {
        res = this.filterParishionersOnly(res);
        console.debug("Parishioners:", res);
        this.parishioners = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
