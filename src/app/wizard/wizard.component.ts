import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ComponentRef,
  NgModule,
  ViewChild,
  ViewContainerRef,
  AfterViewInit, ViewChildren, QueryList, Type, ChangeDetectorRef
} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
 import { PersonalInfoComponent } from '../components/contact/personal-info.component';
import { AddressInfoComponent } from '../components/address/address-info.component';
import { AuthInfoComponent } from '../components/authentication/auth-info.component';
import { NavigationComponentBase } from '../components/NavigationComponentBase';
import { TemplateRef } from '@angular/core';

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit ,AfterViewInit {

  public data =
    {
      applicationId: '8',
      brandingId: '1',
      taskId: 'h_CardRegistration',
      flowId: '1',
      flowDescription: 'Card Registration without KYC',
      stepsOrientation: 'H',
      active: 'Y',
      steps: [
        {
        stepId: 'personal-info',
        formGroupName:'firstFormGroup',
        stepTitle: 'Personal Information',
        orderBy: 1,
        pageLoadAction: PersonalInfoComponent,
        pageSubmitAction: '',
        showSkipButton: 'N',  
        componentName: 'personalInfo',
        active: 'Y'
      }
      ,  
        {
          stepId: 'address-info',
          formGroupName:'secondFormGroup',
          stepTitle: 'Address Information',
          orderBy: 2,
          pageLoadAction: AddressInfoComponent,
          pageSubmitAction: '',
          showSkipButton: 'N',
          componentName: 'addressInfo',
          active: 'Y'
        },
        {
          stepId: 'review-info',
          stepTitle: 'Review Information',
          orderBy: 3,
          pageLoadAction: AuthInfoComponent,
          pageSubmitAction: '',
          componentName: 'authenticationInfo',
          showSkipButton: 'N',
          active: 'Y'
        }
      ]
    };
  public componentsList :any= this.data.steps;
  public myCmps : ComponentRef<NavigationComponentBase>[]  =[] ;
  
  // isLinear = false;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // @ViewChild('test') home : NavigationComponentBase;
  
  constructor(private _formBuilder: FormBuilder,private cd: ChangeDetectorRef,private _snackBar: MatSnackBar, private _resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // }); 
  }
  // @ViewChild("tpl", { read: TemplateRef }) tpl: TemplateRef<any>;
  // @ViewChild("C1", { read: ViewContainerRef }) container: ViewContainerRef;
  // tslint:disable-next-line:variable-name

  // @ViewChild("C1", { read: ViewContainerRef }) _container1: ViewContainerRef;
  // @ts-ignore
 @ViewChildren('C1',{read: ViewContainerRef}) _container1: QueryList<ViewContainerRef>;
  onSubmit(form: NgForm): void {
    return;
  }

  onClick(form: NgForm): void {
    const json = JSON.stringify(form.value);
    console.log(json);

    this._snackBar.open('Form Submit', 'OK', {
      announcementMessage: 'Request Submitted Successfully!'
    });
  }

    ngAfterViewInit(){
     
      console.log((this.componentsList.length));
        let index =0;
        
     // console.log(this._container);
     console.log(this._container1);

     setTimeout(() => {
      let newCmp = this._container1.forEach(item => {
         console.log(item);
         
         if(index< this.componentsList.length) {
           let cmpFactory = this._resolver.resolveComponentFactory(this.componentsList[index].pageLoadAction);
          item.createComponent(cmpFactory);
         }
         console.log("Index : ", index);

         index++;
       });
     });
      //  for(let index=0; index<this.componentsList.length; index++){
      //    let cmpFactory = this._resolver.resolveComponentFactory<NavigationComponentBase>(this.componentsList[index].pageLoadAction);
      //    let c : ComponentRef<NavigationComponentBase> = this._container1.first.createComponent<NavigationComponentBase>(cmpFactory); 
      //   console.log(c.componentType);
      //  } 
       this.cd.detectChanges(); 

     /* let cmpFactory = this._resolver.resolveComponentFactory(this.componentsList[0].pageLoadAction);
       let c= this._container.first.createComponent(cmpFactory);
      cmpFactory = this._resolver.resolveComponentFactory(this.componentsList[1].pageLoadAction);
       c= this._container.first.createComponent(cmpFactory);
      cmpFactory = this._resolver.resolveComponentFactory(this.componentsList[2].pageLoadAction);
      c= this._container.first.createComponent(cmpFactory);
     */
      }
     


}

