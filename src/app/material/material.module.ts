import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule { }
