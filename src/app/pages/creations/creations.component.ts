import { Component, OnInit } from '@angular/core';
import { CreationsInterface } from './interface/creations.interface';
import { CreationsService } from './services/creations.service';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {

  creations: CreationsInterface[] = [];

  constructor( private creationsService: CreationsService ) { }

  ngOnInit(): void {
    this.creationsService.getCreations()
    .subscribe( creations=> {
      this.creations = creations;
    })
    
  }

}
