import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
// import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule} from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatIcon } from '@angular/material/icon/';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component'
// import {MatChipsModule} from '@angular/material/chips';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// //import {UserElementComponent} from '../user/user-element/user-element.component'
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatBadgeModule} from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
// import { MenuComponent } from './menu/menu.component';
import {MatDialogModule} from '@angular/material/dialog';
// import { RouterModule } from '@angular/router';
// import {MatMenuModule} from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    // MatInputModule,
    MatButtonModule,
    // MatStepperModule,
    // MatSlideToggleModule,
    // MatButtonToggleModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatCheckboxModule ,
    // MatChipsModule,
    // MatTooltipModule,
    // MatAutocompleteModule,
    // MatTabsModule,
    // MatSliderModule,
    // MatBadgeModule,
    MatCardModule,
    MatDialogModule,
    // RouterModule,
    // MatMenuModule
  ],
  exports: [
    MatSelectModule,
    // MatInputModule,
    MatButtonModule,
    // MatStepperModule,
    // MatSlideToggleModule,
    // MatButtonToggleModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    // MatChipsModule,
    // MatTooltipModule,
    // MatAutocompleteModule,
    // MatTabsModule,
    // MatSliderModule,
    // MatBadgeModule,
    MatCardModule,
    // MenuComponent,
    // MatDialogModule
    //UserElementComponent
    MenuComponent,
    MatCheckboxModule 
  ],
  declarations: [MenuComponent]
})
export class SharedModule { }
