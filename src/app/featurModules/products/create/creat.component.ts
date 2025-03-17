import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss']
})
export class CreatComponent implements OnInit{

  profileData
  adressData
  constructor(private builder:FormBuilder) { }
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.profileData = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],   
      email: ['', [Validators.email]],
      price: ['', [Validators.maxLength(11)]], 
      adressData: this.builder.group({  
        city: ['', Validators.required],  
        street: ['', Validators.required] 
      })
    });
  }
  
  onSubmit() {
    console.log(this.profileData.value);
  }
  updateProfile() {
    this.profileData.patchValue({
      name: 'Narco',
      email: 'maigamal@gmail.com',
      price: 123, 
      adressData: {
        city: 'Tunis',
        street: 'Tunis'
      }
    });
  }


  get valid(){
    return this.profileData.controls;
  }
}
