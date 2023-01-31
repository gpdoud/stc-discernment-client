import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuration } from '../configuration.class';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-configuration-change',
  templateUrl: './configuration-change.component.html',
  styleUrls: ['./configuration-change.component.css']
})
export class ConfigurationChangeComponent {

  pageTitle = "Configuration Change"
  configuration!: Configuration;

  constructor(
    private cfgsvc: ConfigurationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.cfgsvc.set(this.configuration).subscribe({
      next: (res) => {
        console.debug("Configuration changed.");
        this.router.navigateByUrl("/configurations/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let key = this.route.snapshot.params["key"];
    this.cfgsvc.get(key).subscribe({
      next: (res) => {
        console.debug(res);
        this.configuration = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
