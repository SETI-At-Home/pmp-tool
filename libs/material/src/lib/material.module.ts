import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSnackBarModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonToggleModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule {}
