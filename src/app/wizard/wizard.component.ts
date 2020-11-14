import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ComponentRef,
  NgModule,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
  Type,
  ChangeDetectorRef
} from "@angular/core";
import { FormBuilder, NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PersonalInfoComponent } from "../components/contact/personal-info.component";
import { AddressInfoComponent } from "../components/address/address-info.component";
import { ReviewComponent } from "../components/review/review.component";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.scss"]
})
export class WizardComponent implements OnInit, AfterViewInit {
  public data = {
    flowId: "1",
    flowDescription: "Card Registration without KYC",
    stepsOrientation: "H",
    active: "Y",
    steps: [
      {
        stepId: "personal-info",
        formGroupName: "firstFormGroup",
        stepTitle: "Personal Information",
        orderBy: 1,
        pageLoadAction: PersonalInfoComponent,
        pageSubmitAction: "",
        showSkipButton: "N",
        componentName: "personalInfo",
        active: "Y"
      },
      {
        stepId: "address-info",
        formGroupName: "secondFormGroup",
        stepTitle: "Address Information",
        orderBy: 2,
        pageLoadAction: AddressInfoComponent,
        pageSubmitAction: "",
        showSkipButton: "N",
        componentName: "addressInfo",
        active: "Y"
      },
      {
        stepId: "review-info",
        stepTitle: "Review Information",
        orderBy: 3,
        pageLoadAction: ReviewComponent,
        pageSubmitAction: "",
        componentName: "authenticationInfo",
        showSkipButton: "N",
        active: "Y"
      }
    ]
  };
  public componentsList: any = this.data.steps;

  constructor(
    private _formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private _resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {}

  @ViewChildren("VC", { read: ViewContainerRef }) _container1: QueryList<
    ViewContainerRef
  >;
  onSubmit(form: NgForm): void {
    return;
  }

  onClick(form: NgForm): void {
    const json = JSON.stringify(form.value);
    console.log(json);

    this._snackBar.open("Form Submit", "OK", {
      announcementMessage: "Request Submitted Successfully!"
    });
  }

  ngAfterViewInit() {
    console.log(this.componentsList.length);
    let index = 0;

    // console.log(this._container);
    // console.log(this._container1);

    setTimeout(() => {
      let newCmp = this._container1.forEach(item => {
        // console.log(item);

        if (index < this.componentsList.length) {
          let cmpFactory = this._resolver.resolveComponentFactory(
            this.componentsList[index].pageLoadAction
          );
          item.createComponent(cmpFactory);
        }
        // console.log("Index : ", index);

        index++;
      });
    });
    this.cd.detectChanges();
  }
}
