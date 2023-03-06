import { Component, OnInit } from '@angular/core';


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
  Employees:any
  constructor() { }

  ngOnInit(): void {
  }
 

  createEmployees() {
    this.Employees = [{ FirstName: "dfghsma", LastName: 'Belghith', Age: 25, Gender: 'Femme', Description :'dsfgchjk',Adress :'qdsfghj',Picture:'fgbhjk', BirthdayDate:'zretyui', Email :'asma@gmail.com',PhoneNumber :'25362418',Login : 'asma belghith', Password: 'asmafghijkpl' }];

  
    
  }



}
