import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../userServices/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  exform: FormGroup;
  employee: User = new User();
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    
  this.exform = new FormGroup({
    'nic' : new FormControl(null, Validators.required),
    'name' : new FormControl(null, Validators.required),
    'username' : new FormControl(null, Validators.required),
    'password' : new FormControl(null, Validators.required),
    'age' : new FormControl(null, Validators.required),
    'address' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'phonenumber' : new FormControl(null, Validators.required)
  });
  
  } 
  get nic() {
    return this.exform.get('nic');
  }
  get name() {
    return this.exform.get('name');
  }
  get username() {
    return this.exform.get('username');
  }
  get password() {
    return this.exform.get('password');
  }
  get age() {
    return this.exform.get('age');
  }
  get address() {
    return this.exform.get('address');
  }
  get phonenumber() {
    return this.exform.get('phonenumber');
  }
  get email() {
    return this.exform.get('email');
  }
 

  saveEmployee(){
    this.userService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
