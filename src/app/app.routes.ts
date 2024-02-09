import { Routes } from '@angular/router';

import { ActivitiesComponent } from "./activities/activities.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { TeamComponent } from "./team/team.component";
import { HeaderComponent } from "./core/header/header.component";
import { ManicureComponent } from "./manicure/manicure.component";
import { BarberComponent } from "./barber/barber.component";
import { MakeupComponent } from "./makeup/makeup.component";
import { PermanentMakeUpComponent } from "./permanent-make-up/permanent-make-up.component";
import { KeratinousComponent } from "./keratinous/keratinous.component";
import { BeauticianComponent } from "./beautician/beautician.component";
import { TilesComponent } from "./tiles/tiles.component";
import { ManicureGalleryComponent } from "./manicure-gallery/manicure-gallery.component";
import { MakeupGalleryComponent } from "./makeup-gallery/makeup-gallery.component";
import { BarberGalleryComponent } from "./barber-gallery/barber-gallery.component";
import { BeauticianGalleryComponent } from "./beautician-gallery/beautician-gallery.component";
import { TilesGalleryComponent } from "./tiles-gallery/tiles-gallery.component";

import { PermanentKeratinouspGalleryComponent } from "./permanent-keratinousp-gallery/permanent-keratinousp-gallery.component";
import {PermanentMakeUpGalleryComponent  } from "./permanent-make-up-gallery/permanent-make-up-gallery.component";



export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HeaderComponent },
    { path: 'activities', component: ActivitiesComponent },
    // { path: 'teams', component: TeamComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: 'makeup', component: MakeupComponent },
    { path: 'manicure', component: ManicureComponent },
    { path: 'barber', component: BarberComponent },
    { path: 'permanentMakeup', component: PermanentMakeUpComponent },
    { path: 'KeratinousKichuras', component: KeratinousComponent },
    { path: 'beautician', component: BeauticianComponent },
    { path: 'tiles', component: TilesComponent },
    { path: 'manicure/gallery', component: ManicureGalleryComponent },
    { path: 'makeUp/gallery', component: MakeupGalleryComponent },
    { path: 'beautician/gallery', component: BeauticianGalleryComponent },
    { path: 'barber/gallery', component: BarberGalleryComponent },
    { path: 'tiles/gallery', component: TilesGalleryComponent },
    { path: 'keratinousKichuras/gallery', component: PermanentKeratinouspGalleryComponent },
    { path: 'permanentMakeup/gallery', component: PermanentMakeUpGalleryComponent },
];
