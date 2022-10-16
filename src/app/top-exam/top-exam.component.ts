import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-top-exam',
  templateUrl: './top-exam.component.html',
  styleUrls: ['./top-exam.component.scss']
})
export class TopExamComponent implements OnInit {
  topexams: any = [];
  isProcessing: boolean = false;
  showError:boolean =false;
  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.getExam()
  }
  getExam() {
    debugger
    this.isProcessing = true;
    this.dataServ.getExams().subscribe((response: any) => {
      this.isProcessing = false;
      if(response.errorcode == 0){
        this.topexams = response.Data
      }
   else{
    this.showError=true;
   }

    })
  }
}
