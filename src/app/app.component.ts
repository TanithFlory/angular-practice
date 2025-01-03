import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To Do List';
}
