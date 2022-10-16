import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private getBaseUrl() {
    return environment.api_base_url;
  }

  public getExams() {
    return this.http.get(this.getBaseUrl() + 'getExams')  
  }
  public getjobs(){
    return this.http.get(this.getBaseUrl() + 'getJobs')
  }
  public getappoinment(body:any,options?:any){
    return this.http.post(this.getBaseUrl() + 'appointment',body,options)
  }
}
