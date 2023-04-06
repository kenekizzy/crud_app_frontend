import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseApiUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseApiUrl}/api/Employee`)
  }

  addEmployee(employee: Employee): Observable<Employee[]>{
    return this.http.post<Employee[]>(`${this.baseApiUrl}/api/Employee`, employee)
  }
  getEmployee(id: any): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseApiUrl}/api/Employee/${id}`)
  }

  updateEmployee(id: any, updateEmployee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.baseApiUrl}/api/Employee/${id}`, updateEmployee)
  }

  deleteEmployee(id: string): Observable<Employee>{
    return this.http.delete<Employee>(`${this.baseApiUrl}/api/Employee/${id}`)
  }
}
