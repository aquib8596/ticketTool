import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit {
  deptList: any[] = [];

  newDeptObj: any = {
    deptId: 0,
    deptName: '',
    createdDate: '',
  };

  constructor(private masterServ: MasterService) {}

  ngOnInit(): void {
    this.getDept();
  }

  getDept() {
    this.masterServ.getAllDept().subscribe((res: any) => {
      this.deptList = res.data;
      console.log(this.deptList, 'dept list');
    });
  }
  saveDept() {
    this.masterServ.createNewDept(this.newDeptObj).subscribe((res: any) => {
      if (res.result) {
        alert('Department Created Successfully');
        this.getDept();
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(data: any) {
    this.newDeptObj = data;
  }
  updateDept() {
    this.masterServ.updateDept(this.newDeptObj).subscribe((res: any) => {
      if (res.result) {
        alert('Department Updated Successfully');
        this.getDept();
      } else {
        alert(res.message);
      }
    });
  }
  deleteDept(id: number) {
    const isDelete = confirm('Are you sure want to Delete');
    if (isDelete) {
      this.masterServ.deleteDeptById(id).subscribe((res: any) => {
        if (res.result) {
          alert('Department Deleted Successfully');
          this.getDept();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
