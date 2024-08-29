import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  links = {
    LinkedIn:
      'https://www.linkedin.com/in/alvin-king-wa-276974231/?trk=people_directory&originalSubdomain=ke',
    github: 'https://github.com/alvinkingwa',
    twitter: 'https://twitter.com/alvinkingwa',
  };
  

}
