import { Component, Input } from '@angular/core';
import { ConfigurationService } from '../configuration/configuration.service';

const ActiveYearKey = "active-year";

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent {

  @Input() pageTitle: string = "No Page Title";
  activeYear: string = "XXXX";

  constructor(
    private cfgsvc: ConfigurationService
  ) {}

  ngOnInit(): void {
    this.cfgsvc.get(ActiveYearKey).subscribe({
      next: (res) => {
        console.debug(res);
        this.activeYear = res.dataValue;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
