import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import {NavigationComponent  } from "./navigation/navigation.component";
import {TeamComponent  } from "./team/team.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    TeamComponent,
    ActivitiesComponent,
    ContactUsComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'beauty-traiding-app';
}
