import { Component } from '@angular/core';
import { Configuration } from '../configuration.class';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})
export class ConfigurationListComponent {

  pageTitle: string = "Configuration List";
  configurations: Configuration[] = [];

  constructor(
    private cfgsvc: ConfigurationService
  ) {}

  displayVerify: boolean = false;
  keyToDelete: string = '';

  deleteKey(key: string): void {
    this.displayVerify = !this.displayVerify;
    this.keyToDelete = key;
  }
  verifyDelete(): void {
    this.cfgsvc.remove(this.keyToDelete).subscribe({
      next: (res) => {
        this.keyToDelete = '';
        this.displayVerify = false;
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    this.cfgsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.configurations = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.refresh();
  }
}
