import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  public employeeId: any;
  public existingEmployee: Employee = {
    id: "",
    name: "",
    email: "",
    phone: 0,
    salary: 0,
    department: ""
  };

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeServiceService, private router: Router) { 
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.employeeId = params.get("id")
      if(this.employeeId){
        this.employeeService.getEmployee(this.employeeId).subscribe({
          next: (response) =>{
            this.existingEmployee = response
          },
          error: (response) =>{
            console.log(response)
          }
        })
      }
    })
    
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.existingEmployee.id, this.existingEmployee).subscribe({
      next: (response) => {
        this.router.navigateByUrl("/employees")
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  deleteEmployee(id: any){
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response)=> {
        this.router.navigateByUrl("/employees")
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

}
