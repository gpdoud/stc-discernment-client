import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../configuration/configuration.service';
import { Parishioner } from '../parishioner.class';
import { ParishionerService } from '../parishioner.service';

@Component({
  selector: 'app-parishioner-list',
  templateUrl: './parishioner-list.component.html',
  styleUrls: ['./parishioner-list.component.css']
})
export class ParishionerListComponent implements OnInit {

  pageTitle = "Parishioner List";
  parishioners: Parishioner[] = [];

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
    private pshsvc: ParishionerService,
    private cfgsvc: ConfigurationService
  ) {}

  autoAssignCallers(): void {
    this.pshsvc.assignCallers().subscribe({
      next: (res) => {
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    this.pshsvc.list().subscribe({
      next: (res) => {
        this.pshsvc.addCallerNames(res);
        this.parishioners = res as Parishioner[];
        console.debug(res);
      },
      error: (err) => { 
        console.error(err) 
      }
    });  
  }

  ngOnInit(): void {
    this.refresh();
  }

}
