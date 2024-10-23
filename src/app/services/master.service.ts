import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  baseUrl: string = 'https://freeapi.miniprojectideas.com/api/TicketsNew/';

  constructor(private http: HttpClient) {}

  login(obj: any) {
    debugger;
    return this.http.post(this.baseUrl + 'Login', obj);
  }

  getAllDept() {
    return this.http.get(`${this.baseUrl}GetDepartments`);
  }
  createNewDept(obj: any) {
    return this.http.post(`${this.baseUrl}CreateDepartment`, obj);
  }
  updateDept(obj: any) {
    return this.http.put(`${this.baseUrl}UpdateDepartment`, obj);
  }
  deleteDeptById(id: number) {
    return this.http.delete(`${this.baseUrl}DeleteDepartment?id=${id}`);
  }
}
