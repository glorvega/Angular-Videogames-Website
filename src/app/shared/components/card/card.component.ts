import { Component, Input, OnInit } from '@angular/core';
import { VideogamesInterface } from '../../interface/videogames.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() videogame!: VideogamesInterface;
  @Input() steamGame: boolean = false;

  @Input()
  callbackFunctionFirst!: (args: any) => void;
  @Input()
  callbackFunctionSecond!: (args: any) => void;
  @Input() labelFirst: string = '';
  @Input() labelSecond: string = '';

  constructor() {}

  ngOnInit(): void {}
}
