import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './Components/Index/index.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
 //templateUrl:`<router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rick y Morty';
}
