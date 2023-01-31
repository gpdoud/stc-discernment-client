import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { RouterModule } from '@angular/router';
import { BoolPipe } from './bool.pipe';
import { ParishionerChangeComponent } from './parishioner/parishioner-change/parishioner-change.component';
import { ParishionerCreateComponent } from './parishioner/parishioner-create/parishioner-create.component';
import { ParishionerDetailComponent } from './parishioner/parishioner-detail/parishioner-detail.component';
import { ParishionerListComponent } from './parishioner/parishioner-list/parishioner-list.component';
import { ParishionerReviewComponent } from './parishioner/parishioner-review/parishioner-review.component';
import { ParishionerCallerListComponent } from './parishioner/parishioner-caller-list/parishioner-caller-list.component';
import { ParishionerAutoAssignCallersComponent } from './parishioner/parishioner-auto-assign-callers/parishioner-auto-assign-callers.component';
import { SearchParishionerPipe } from './parishioner/search-parishioner.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
    declarations: [
        ParishionerListComponent,
        ParishionerDetailComponent,
        ParishionerCreateComponent,
        ParishionerChangeComponent,
        ParishionerReviewComponent,
        ParishionerCallerListComponent,
        SearchParishionerPipe,
        SortPipe,
        BoolPipe,
        ParishionerAutoAssignCallersComponent
    ],
    imports: [
        FormsModule, CommonModule, RouterModule,
        CoreModule
    ]
})
export class FeatModule { }
