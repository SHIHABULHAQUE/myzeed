import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss']
})
export class FindJobComponent implements OnInit {

  tabledata: any = [];
  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.getJobs()
  }
  getJobs() {
    this.dataServ.getjobs().subscribe((response: any) => {
      this.tabledata = response.Data

    })
  }

}
