import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-top-exam',
  templateUrl: './top-exam.component.html',
  styleUrls: ['./top-exam.component.scss']
})
export class TopExamComponent implements OnInit {
  topexams: any = [];
  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.getExam()
  }
  getExam() {
    debugger
    this.dataServ.getExams().subscribe((response :any) => {
   this.topexams =response.Data
   console.log(this.topexams)
    })
  }
}
