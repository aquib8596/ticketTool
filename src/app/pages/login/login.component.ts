import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    emailId: '',
    password: '',
  };

  masterService = inject(MasterService);
  router = inject(Router);

  onLogin() {
    debugger;
    this.masterService.login(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        debugger;
        localStorage.setItem('ticketUser', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message);
      }
    });
  }
}
