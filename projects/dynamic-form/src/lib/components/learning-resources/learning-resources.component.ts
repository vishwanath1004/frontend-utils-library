import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'lib-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css'
})
export class LearningResourcesComponent {
  data: any;
  myGroup: FormGroup;
  @Output() saveLearningResource = new EventEmitter<any>();
  values:any = []
  
  constructor(public dialogRef: MatDialogRef<LearningResourcesComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private cdr: ChangeDetectorRef) {
    // dialogRef.disableClose = true;  
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
    const resourceGroup = new FormGroup({
      nameOfResource: new FormControl(''),
      linkToResource: new FormControl('')
    });
    this.resources.push(resourceGroup);
  }
  
   onClickAddLearningResource(){
    this.addResource()
    this.dialogData.control.resource.push([
      {
      "name": "nameOfResource",
      "label": "Name of the resource",
      "value": "",
      "class": "",
      "type": "text",
      "placeHolder": "Name",
      "position": "floating",
  },{
      "name": "linkToResource",
      "label": "Link to the resource",
      "value": "",
      "class": "",
      "type": "text",
      "placeHolder": "Link",
      "position": "floating",
  }
  ])
  
   }
  
   confirmButton(){
    this.saveLearningResource.emit(this. getValues())
   }
  
   getValues() {
     this.resources.controls.map(control => {
      const group = control as FormGroup;
      if(group.get('nameOfResource')?.value &&  group.get('linkToResource')?.value){
        this.values.push(
          {
            nameOfResource: group?.get('nameOfResource')?.value,
            linkToResource: group?.get('linkToResource')?.value
          }
        );
      }
    });
    return this.values;
  }
  
}
