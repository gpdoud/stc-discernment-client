import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parishioner } from '../parishioner.class';
import { ParishionerService } from '../parishioner.service';

@Component({
  selector: 'app-parishioner-create',
  templateUrl: './parishioner-create.component.html',
  styleUrls: ['./parishioner-create.component.css']
})
export class ParishionerCreateComponent {

  pageTitle = "Parishioner Create";
  parishioner: Parishioner = new Parishioner();
  callers!: Parishioner[];

  constructor(
    private pshsvc: ParishionerService,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.parishioner);
    this.pshsvc.create(this.parishioner).subscribe({
      next: (res) => {
        console.log("Created successfully!");
        this.router.navigateByUrl("/parishioners/list");
      }
    });
  }

  ngOnInit(): void {
    this.pshsvc.callers().subscribe({
      next: (res) => {
        this.pshsvc.addCallerNames(res);
        this.callers = res as Parishioner[];
        console.debug(res);
      },
      error: (err) => { 
        console.error(err) 
      }
    });
  }
}
