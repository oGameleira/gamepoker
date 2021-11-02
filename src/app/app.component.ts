import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gamepoker';
  sala : String;
  room: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.subscribe( (params: ParamMap)  => {
          console.debug('Criando Sala...')
          this.room = this.makeid(30);
          console.debug('Redirecionando para uma nova Sala...')
          this.router.navigate(['/room/'+this.room ]);
    });
  }
  makeid(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  ngOnInit(): void {
  }

}
