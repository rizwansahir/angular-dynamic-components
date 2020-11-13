import { Component, OnInit, Input, SkipSelf, ViewChild, TemplateRef, ViewRef, ViewContainerRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss'],
})
export class AddressInfoComponent implements AfterViewInit,OnInit {
  @ViewChild("tp4", { read: TemplateRef }) _template: TemplateRef<any>;
  secondFormGroup: FormGroup;

  @Input() modelGroupName: string;
  name : string = "Address Info component";
constructor(private container : ViewContainerRef,private _formBuilder: FormBuilder,private cd: ChangeDetectorRef){

}
  ngOnInit(): void {
    this.secondFormGroup = this._formBuilder.group({
         secondCtrl: ['', Validators.required]
       });
  }
  ngAfterViewInit(): void {

  }
}
