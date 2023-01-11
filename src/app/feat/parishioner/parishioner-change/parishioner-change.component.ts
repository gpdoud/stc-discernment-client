import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parishioner } from '../parishioner.class';
import { ParishionerService } from '../parishioner.service';

@Component({
  selector: 'app-parishioner-change',
  templateUrl: './parishioner-change.component.html',
  styleUrls: ['./parishioner-change.component.css']
})
export class ParishionerChangeComponent implements OnInit {
  
  pageTitle = "Parishioner Change";
  parishioner!: Parishioner;
  callers!: Parishioner[];

  constructor(
    private pshsvc: ParishionerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4:", this.parishioner);
    this.pshsvc.change(this.parishioner).subscribe({
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
    let id = this.route.snapshot.params["id"];
    this.pshsvc.get(id).subscribe({
      next: (res) => {
        this.parishioner = res as Parishioner;
        console.debug(res);
      },
      error: (err) => { 
        console.error(err) 
      }
    });
  }
}
