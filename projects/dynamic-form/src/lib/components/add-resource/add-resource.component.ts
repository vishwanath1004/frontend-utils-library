import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'lib-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrl: './add-resource.component.css'
})
export class AddResourceComponent {
  data: any;
  myGroup: FormGroup;
  @Output() saveLearningResource = new EventEmitter<any>();
  values:any = []
  
  constructor(public dialogRef: MatDialogRef<AddResourceComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private cdr: ChangeDetectorRef) { 
    this.myGroup = new FormGroup({
      resources: new FormArray([])
    });
    // Optionally, initialize with one resource
    this.addResource();
   }
  
   get resources() {
    return this.myGroup.get('resources') as FormArray;
  }
  
  addResource() {
    let formControls: { [key: string]: any } = {};
    for(let control of this.dialogData.control.resource[0]){
      formControls[control.name] = new FormControl('');
    }
    const resourceGroup = new FormGroup(formControls);
    this.resources.push(resourceGroup);
  }
  
   onClickAddLearningResource(){
    this.addResource()
    let data =  this.dialogData.control.resource[0]
    this.dialogData.control.resource.push(data)
  
   }
  
   confirmButton(){
    this.saveLearningResource.emit(this. getValues())
   }
  
   getValues() {
    if(this.myGroup.valid){
      return this.myGroup?.value?.resources 
    }
  }

 async  deleteAboveResource(){
    await this.myGroup?.value?.resources.pop()
    await this.dialogData.control.resource.pop()
    this.cdr.detectChanges();
  }
}
