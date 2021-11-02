import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {
  sala: String;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params : ParamMap) => {
      this.sala = params.get('id');  
      console.debug("Sala:",this.sala)
    });
  }

}
