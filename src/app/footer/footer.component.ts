import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  currentYear:number | undefined;
links ={
  LinkedIn:'https://www.linkedin.com/in/alvin-king-wa-276974231/?trk=people_directory&originalSubdomain=ke',
  github:'https://github.com/alvinkingwa',
  twitter:'https://twitter.com/alvinkingwa'
}

ngOnInit() {
    this.currentYear = new Date().getFullYear();
}
}
