import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 public addEmployee: Employee = {
  name: "",
  email: "",
  phone: 0,
  salary: 0,
  department: ""
 }
  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.employeeService.addEmployee(this.addEmployee).subscribe({
      next: (employees) => {
        this.router.navigateByUrl("/employees")
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

}
