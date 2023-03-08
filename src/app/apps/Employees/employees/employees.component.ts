import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';







interface Employees {
  FirstName :String ;
  LastName :String;
  Age : number ;
  Gender :String;
  Description :String;
  Adress :String;
  Picture :String;
  BirthdayDate :String;
  Email :String;
  PhoneNumber :String;
  Login :String;
  Password :String ;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  myForm :any ;


  Employees:any
  constructor(private formbuider :FormBuilder,private employeeService : EmployeesService, private Message : NzMessageService) { 
    //this.employeeService.data ;
    //console.log( this.employeeService.data)
    this.myForm =this.formbuider.group({
    firstName : ['', Validators.required],
    lastName : ['', Validators.required],
    age : ['', Validators.required],
    gender : ['', Validators.required],
    description : ['', Validators.required],
    adress : ['' , Validators.required],
    picture :  ['' , Validators.required],
    birthdayDate : ['', Validators.required],
    email :['', [Validators.email,Validators.required]],
    phoneNumber : ['', [Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8)]],
    login : ['' , Validators.required],
    password : ['', Validators.required],
    })

  }

  ngOnInit(): void {
      }
 
  addEmployee(){ 
    console.log('aaaaaaaaa',this.myForm.valid)
    
    if (this.myForm.valid)  {
      console.log('aaaaaaaaa')
    }
    console.log('form',this.myForm.value)
     this.employeeService.addEmployee(this.myForm.value).subscribe((e)=>{
      console.log(e);
     })

    //console.log("jkhnoufg")
    console.log(this.myForm.value)
    
  }
  

  createMessage(type : string): void { this.Message.create (type,'The employee is added !')}

}