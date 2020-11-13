import { AfterViewInit, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent  implements AfterViewInit,OnInit{

  @ViewChild("tp2", { read: TemplateRef }) _template: TemplateRef<any>;

  @Input() modelGroupName: string;
  firstFormGroup: FormGroup;
  name="Personal Information Step";

  constructor(private cdr: ChangeDetectorRef,private _formBuilder: FormBuilder,private _resolver: ComponentFactoryResolver, private container : ViewContainerRef){
  }
  ngAfterViewInit(): void {

  }
  ngAfterViewChecked(){
    //your code to update the model

 }
  ngOnInit() { 
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    
  }

}
