import { Component, OnInit } from '@angular/core';
//import { TableService } from '../../../shared/services/table.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { TableService } from 'src/app/shared/services/table.service';


interface DataItem {
  id: number;
  name: string;
  date: string;
  amount: number;
  status:  string;
}

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})




export class EmployeesDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


 
    allChecked: boolean = false;
    indeterminate: boolean = false;
    displayData = [];
    searchInput: string

    orderColumn =  [
      {
          title: 'ID',
          compare: (a: DataItem, b: DataItem) => a.id - b.id,
      },
      {
          title: 'Customer',
          compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
      },
      {
          title: 'Date',
          compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
      },
      {
          title: 'Amount',
          compare: (a: DataItem, b: DataItem) => a.amount - b.amount,
      },
      {
          title: 'Status',
          compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
      },
      {
          title: ''
      }
  ]


    

    

    


}


    