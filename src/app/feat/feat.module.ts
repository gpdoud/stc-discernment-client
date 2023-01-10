import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { RouterModule } from '@angular/router';


import { ParishionerListComponent } from './parishioner/parishioner-list/parishioner-list.component';
import { ParishionerDetailComponent } from './parishioner/parishioner-detail/parishioner-detail.component';
import { ParishionerCreateComponent } from './parishioner/parishioner-create/parishioner-create.component';
import { ParishionerChangeComponent } from './parishioner/parishioner-change/parishioner-change.component';
import { SortPipe } from './sort.pipe';
import { SearchParishionerPipe } from './parishioner/search-parishioner.pipe';

@NgModule({
    declarations: [
        ParishionerListComponent,
        ParishionerDetailComponent,
        ParishionerCreateComponent,
        ParishionerChangeComponent,
        SortPipe,
        SearchParishionerPipe
    ],
    exports: [
    ],
    imports: [
        FormsModule, CommonModule, RouterModule,
        CoreModule
    ]
})
export class FeatModule { }
