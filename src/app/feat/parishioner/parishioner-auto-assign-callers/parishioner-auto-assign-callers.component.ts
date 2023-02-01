import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Parishioner } from '../parishioner.class';
import { ParishionerService } from '../parishioner.service';

@Component({
  selector: 'app-parishioner-auto-assign-callers',
  templateUrl: './parishioner-auto-assign-callers.component.html',
  styleUrls: ['./parishioner-auto-assign-callers.component.css']
})
export class ParishionerAutoAssignCallersComponent {
  pageTitle = "Committee Assigned Parishioners To Call";
  parishioners: Parishioner[] = [];
  showYesNo: boolean = false;

  constructor(
    private pshsvc: ParishionerService,
    private router: Router
  ) {}

  toggleYesNoButtons(): void {
    this.showYesNo = !this.showYesNo;
  }
  yes(): void {
    this.autoAssignCallers();
  }
  no(): void {
    this.toggleYesNoButtons();
  }

  autoAssignCallers(): void {
    this.pshsvc.assignCallers().subscribe({
      next: (res) => {
        console.log("Committee callers assigned.");
        this.router.navigateByUrl("/parishioners/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  ngOnInit(): void {
  }
}
