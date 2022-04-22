import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-prof-course',
  templateUrl: './import-prof-course.component.html',
  styleUrls: ['./import-prof-course.component.css']
})
export class ImportProfCourseComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }
  file: any;
  

  ngOnInit(): void {
    // this.form = new FormGroup({

    // })
  }

  //pass the csv file
  //read the file inside the function
  //put the content of the file in the Ta Object
  public submit(){
  }

  // GETTING CSV FILE
  getFile(event: any){
    this.file = event.target.files[0];
    console.log('file', this.file);
  }

  submitData(){
    // create formData object
    let formData = new FormData();
    formData.set("file", this.file)

    //submit this data in API.... ADD API URL IN PLACE OF http://localhost:3001/import/importFiles!!!! is it "/import_tas"??? 
    this.http.post('http://localhost:3001/import/importFiles', formData)
    .subscribe((response )=>{
      }
    )

  }

}
