import { Component } from '@angular/core';
import { Parishioner } from '../parishioner.class';
import { ParishionerService } from '../parishioner.service';

@Component({
  selector: 'app-parishioner-caller-list',
  templateUrl: './parishioner-caller-list.component.html',
  styleUrls: ['./parishioner-caller-list.component.css']
})
export class ParishionerCallerListComponent {

  pageTitle = "Committee Call List";
  parishioners!: Parishioner[];

  constructor(
    private pshsvc: ParishionerService
  ) {}

  ngOnInit(): void {
    this.pshsvc.candidates().subscribe({
      next: (res) => {
        console.debug("Candidates:", res);
        this.parishioners = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
