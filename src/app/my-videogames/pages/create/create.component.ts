import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

/*   videogamesForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.minLength(4)),
    cover: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),

  }) */

  videogamesForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    cover: [''],
    year: [''],
    genre: [''],
    platform: [''],
  })

  constructor(private fb: FormBuilder) { 
    
  }

  

  ngOnInit(): void {
  }


}
