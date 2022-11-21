import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideogamesInterface } from 'src/app/shared/interface/videogames.interface';
import { CreationsService } from '../../services/creations.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  private id!: string | null;
  isEdit: boolean = false;
  /*   videogamesForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.minLength(4)),
    cover: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),

  }) */

  videogamesForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    cover: ['', [Validators.required]],
    year: [''],
    genre: [''],
    platform: [''],
    id: [''],
    appId: [''],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private creationsService: CreationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEdit = true;
      this.getVideogame(this.id);
    }
  }

  isInputValid(input: string) {
    return (
      this.videogamesForm.controls[input].errors &&
      this.videogamesForm.controls[input].touched
    );
  }

  getVideogame(id: string) {
    this.creationsService.getCreation(id).subscribe({
      next: (game) => {
        this.videogamesForm.patchValue(game);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addToCollection = (game: VideogamesInterface) => {
    this.creationsService.postVideogame(game).subscribe({
      next: (videogame) => {
        this.router.navigate(['creations']);
      },
      error: (error) => console.error('Error en get routes: ', error),
    });
  };

  editGame = (game: VideogamesInterface) => {
    this.creationsService.putVideogame(game).subscribe({
      next: (videogame) => {
        this.router.navigate(['creations']);
      },
      error: (error) => console.error('Error en get routes: ', error),
    });
  };

  sendInfo() {
    if (this.isEdit) {
      this.editGame(this.videogamesForm.value);
    } else {
      this.addToCollection(this.videogamesForm.value);
    }
  }
}
