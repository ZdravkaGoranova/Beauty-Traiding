import { Routes } from '@angular/router';

import { ActivitiesComponent } from "./activities/activities.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { GalleryComponent } from "./gallery/gallery.component";
import {TeamComponent  } from "./team/team.component";
import {HeaderComponent  } from "./core/header/header.component";

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HeaderComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'teams', component: TeamComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contactUs', component: ContactUsComponent },


];
