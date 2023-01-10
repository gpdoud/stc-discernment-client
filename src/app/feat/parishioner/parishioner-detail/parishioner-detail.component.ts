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

  constructor(
    private pshsvc: ParishionerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.showVerifyRemove = !this.showVerifyRemove;
  }
  verifyRemove(): void {

  }

  ngOnInit(): void {
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
