import { Component } from '@angular/core';
import { MovielistComponent } from './movielist/movielist.component';

@Component({
  standalone: true,
  imports: [MovielistComponent],
  selector: 'app-root',
  template: `
    <main class="container">
      <h1>CinemaToNonny</h1>
<app-movie-list></app-movie-list>
    </main>
 ` ,
})
export class AppComponent {}

