import {Component} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  cols = '12';

  columns:string[] = ['number','callingname','gender','designation'];

  employees= [
    {number:'2201', callingname: 'Ashan', gender:{id:1,name:'Male'}, designation:{id:1,name:'Coordinator'}},
    {number:'2202', callingname: 'Rukmal', gender:{id:1,name:'Male'}, designation:{id:2,name:'Lecturer'}}
  ];
}
