import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatToolbarModule,  MatSidenavModule,
  MatCardModule, MatFormFieldModule, MatSelectModule,
  MatButtonModule,
  MatInputModule, MatListModule, MatMenuModule} from '@angular/material';


const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatMenuModule
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
