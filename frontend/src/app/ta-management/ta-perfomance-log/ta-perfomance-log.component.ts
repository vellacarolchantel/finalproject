import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-ta-perfomance-log',
  templateUrl: './ta-perfomance-log.component.html',
  styleUrls: ['./ta-perfomance-log.component.css']
})
export class TaPerfomanceLogComponent implements OnInit {
  TAs = ["Jenny Agaba", "Tom Lander", "Henny Siffy", "Some Guy", "Some Girl", "Hello Kitty"];

  constructor(private fb: FormBuilder) { 

  }
  //performance_log
  notesForm = this.fb.group({
    taName: [''],
    notes:this.fb.array([
      this.fb.control('')
    ])
  })
  
  get notes(){
    return this.notesForm.get('notes') as FormArray;
  }

  addNote(){
    this.notes.push(this.fb.control(''));
  }
 

  ngOnInit(): void {
   
    
  }

}
