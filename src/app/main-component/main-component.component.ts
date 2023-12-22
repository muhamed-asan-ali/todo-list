import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent implements OnInit {

  storageArray=[{
    taskName: "create Something" ,
    status: false
  }]

  ngOnInit():void{}

  onSubmit(form: NgForm){
      console.log(form);

      this.storageArray.push({
        taskName: form.controls['task'].value,
        status: false
      })

      form.reset();
  }

  onRemove(index: number){
    this.storageArray.splice(index, 1)
  }


  onCheck(index: number){
    console.log(this.storageArray);

    this.storageArray[index].status =!this.storageArray[index].status;
    
  }
}
