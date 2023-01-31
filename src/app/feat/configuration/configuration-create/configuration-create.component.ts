import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuration } from '../configuration.class';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-configuration-create',
  templateUrl: './configuration-create.component.html',
  styleUrls: ['./configuration-create.component.css']
})
export class ConfigurationCreateComponent {

  pageTitle: string = "Configuration Create";
  configuration: Configuration = new Configuration();

  constructor(
    private cfgsvc: ConfigurationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.cfgsvc.set(this.configuration).subscribe({
      next: (res) => {
        console.debug("Configuration created.");
        this.router.navigateByUrl("/configurations/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
  }
}
