import { NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule],
  // tslint:disable-next-line:max-line-length
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule]
})
export class MaterialModule {}
