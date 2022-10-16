import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.scss']
})
export class AppoinmentComponent implements OnInit {

  requestForm!: FormGroup;

  submitted = false;
  constructor(private dataServ: DataService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.requestForm = this.formBuilder.group({
      Name: ['', [Validators.required,]],
      phonenumber: ['', [Validators.required,]],
      message: ['', [Validators.required,]],
      NRIQuota: [false],
      Scholarship: [false],
      InstituteRegistration: [false],
      InstituteRegistration2: [false]
    })
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.requestForm.value.Name)
    if (this.requestForm.invalid) {
      return
    }
    let name = this.requestForm.value.Name
    console.log(name)
    let phone = this.requestForm.value.phonenumber
    let message = this.requestForm.value.message
    let options = []
    if (this.requestForm.value.NRIQuota) {
      options.push('NRI Quota')

    }
    if (this.requestForm.value.InstituteRegistration) {
      options.push('Institute Registration')
    }
    console.log(this.requestForm.value)
    console.log(options)
    this.dataServ.getappoinment(

      {
        email: 'vishakhsnath.5698@gmail.com',
        message: message,
        name: name,
        option: options,
        phone: phone
      }
    ).subscribe((response: any) => {
      console.log(response)
      this.requestForm.reset()
    })

  }
}
