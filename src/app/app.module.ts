import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatStepperModule } from "@angular/material/stepper";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { FlexLayoutModule } from "@angular/flex-layout";
import { WizardComponent } from "./wizard/wizard.component";
import { PersonalInfoComponent } from "./components/contact/personal-info.component";
import { AddressInfoComponent } from "./components/address/address-info.component";

import { ReviewComponent } from "./components/review/review.component";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  declarations: [
    AppComponent,
    WizardComponent,
    AddressInfoComponent,
    PersonalInfoComponent,
    ReviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
