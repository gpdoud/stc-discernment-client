import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parishioner } from '../parishioner.class';
import { ParishionerService } from '../parishioner.service';

@Component({
  selector: 'app-parishioner-detail',
  templateUrl: './parishioner-detail.component.html',
  styleUrls: ['./parishioner-detail.component.css']
})
export class ParishionerDetailComponent implements OnInit {

  pageTitle = "Parishioner Detail";
  parishioner!: Parishioner;
  showVerifyRemove = false;
  get statuses() { return this.pshsvc.parishionerStatuses; }
  get ministries() { return this.pshsvc.ministries; }

  constructor(
    private pshsvc: ParishionerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.showVerifyRemove = !this.showVerifyRemove;
  }
  verifyRemove(): void {
    this.pshsvc.remove(this.parishioner.id).subscribe({
      next: (res) => {
        console.log("Parishioner Deleted!");
        this.router.navigateByUrl("/parishioners/list");
      },
      error: (err) => { 
        console.error(err) 
      }
    });
  }
  change(): void {
    this.router.navigateByUrl(`/parishioners/change/${this.parishioner.id}`)
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.pshsvc.get(id).subscribe({
      next: (res) => {
        this.pshsvc.addCallerName(res);
        this.parishioner = res as Parishioner;
        console.debug(res);
      },
      error: (err) => { 
        console.error(err) 
      }
    });
  }
}
