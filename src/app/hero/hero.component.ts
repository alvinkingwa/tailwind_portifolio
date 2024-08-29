import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef<HTMLElement>;
  private fadeInTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(private router: Router) {}

  faChevronDown = faChevronDown;

  ngOnInit(): void {
    library.add(faChevronDown, faCoffee);
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // Apply fade-in animation on page load
    setTimeout(() => {
      this.heroSection.nativeElement.classList.add('fade-in');
    }, 5000); 
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
    console.log('scrolling to ' + el.getAttribute('id'));
  }

  goToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

@HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const heroSectionElement = this.heroSection.nativeElement;

  if (scrollPosition === 0) {
    heroSectionElement.classList.remove('fade-in');
    heroSectionElement.classList.add('fade-out');
    clearTimeout(this.fadeInTimeout!); // Clear any existing timeout
  } else {
    heroSectionElement.classList.remove('fade-out');
    clearTimeout(this.fadeInTimeout!); // Clear any existing timeout
    this.fadeInTimeout = setTimeout(() => {
      heroSectionElement.classList.add('fade-in');
    }, 5000); // Delay of 5 seconds (5000 milliseconds)
  }
}
}