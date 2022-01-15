import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  newcomponent='New Component';
  constructor() { }

  ngOnInit(): void {
  }
  myFunctionClick(){
    alert(" Bạn đã click vô tôi phải không nhỉ");
    console.log("hello người anh em")
  };
  showAge=false;
  myClickFunction(){
    this.showAge=!this.showAge
  };
  fullname:string='';
  email:string='';
  gender:string='';
  birthday='';
  names=[''];
  emails=[''];
  genders=[''];
  birthdays=[''];
  add(){
    if(this.fullname.length>0&& this.email.length>0) {
      this.names.push(this.fullname);
      this.emails.push(this.email);
      this.genders.push(this.gender);
      this.birthdays.push(this.birthday);
      this.fullname='';
      this.email='';
      this.gender='';
      this.birthday='';
    }
    else {
      alert("Bạn điền thiếu vui lòng nhập lại");
    }
  }
}
