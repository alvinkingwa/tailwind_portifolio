import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { HeroComponent } from "./hero/hero.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from "./project/project.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, SkillsComponent, ContactComponent, AboutComponent, HeroComponent, NavbarComponent, FontAwesomeModule, ProjectComponent]
})
export class AppComponent {
  title = 'my-app';
}
