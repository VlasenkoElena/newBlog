import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatToolbarModule,  MatSidenavModule,
  MatCardModule, MatFormFieldModule, MatSelectModule,
  MatButtonModule,
  MatInputModule} from '@angular/material';


const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule
];
@NgModule({
  imports: [
    CommonModule,
    MATERIAL_COMPONENTS
  ],
  exports: [ MATERIAL_COMPONENTS],
  declarations: []
})
export class MaterialModule { }
