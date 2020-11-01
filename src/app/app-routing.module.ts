import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { AboutComponent } from './About/About.component';
import { TrackComponent } from './Track/Track.component';
import { LoginComponent } from './login/login.component';
import { AdminMainComponent } from './admin-panel/admin-main/admin-main.component';
import { AuthGuard } from './_guards/auth.guard';
import { ToursComponent } from './admin-panel/admin-main/tours/tours.component';
import { TourComponent } from './admin-panel/admin-main/tours/tour/tour.component';
import { TourDetailComponent } from './admin-panel/admin-main/tours/tour-detail/tour-detail.component';
import { TourDetailResolver } from './_resolvers/tour-detail.resolver';
import { TourListResolver } from './_resolvers/tour-list.resolver';
import { EditTourComponent } from './admin-panel/admin-main/tours/edit-tour/edit-tour.component';
import { TourEditResolver } from './_resolvers/tour-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { AskusComponent } from './askus/askus.component';
import { QuestionsComponent } from './admin-panel/admin-main/questions/questions.component';
import { JoinTourComponent } from './join-tour/join-tour.component';
import { TourRequestsComponent } from './admin-panel/admin-main/tour-requests/tour-requests.component';
import { TourRequestComponent } from './admin-panel/admin-main/tour-requests/tour-request/tour-request.component';
import { TourRequestDetailResolver } from './_resolvers/request-detail.resolver';
import { TourApplicationComponent } from './admin-panel/admin-main/tour-requests/tour-application/tour-application.component';
import { VideosComponent } from './admin-panel/admin-main/videos/videos.component';
import { PassengersComponent } from './admin-panel/admin-main/passengers/passengers.component';
import { PassengerProfileComponent } from './admin-panel/admin-main/passengers/passenger-profile/passenger-profile.component';
import { PassengerDetailResolver } from './_resolvers/passenger-detail.resolver';


const routes: Routes = [
  { path : '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'track', component: TrackComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ask', component: AskusComponent},
  { path: 'jointour/:id' , component: JoinTourComponent, resolve: { tour: TourDetailResolver }},

  { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'main', component: AdminMainComponent},
      { path: 'tours', component: ToursComponent},
      { path: 'tour/:id', component: TourDetailComponent,  resolve: { tour: TourDetailResolver }},
      { path: 'tour/edit/:id', component: EditTourComponent, resolve : { tour: TourEditResolver}, canDeactivate: [PreventUnsavedChanges]},
      { path: 'questions', component: QuestionsComponent},
      { path: 'videos', component: VideosComponent},
      { path: 'requests', component: TourRequestsComponent},
      { path: 'request/:id', component: TourRequestComponent , resolve: { request: TourRequestDetailResolver}},
      { path: 'reqapplication/:id', component: TourApplicationComponent , resolve: { request: TourRequestDetailResolver}},
      { path: 'passengers', component: PassengersComponent},
      { path: 'passenger/:id', component: PassengerProfileComponent, resolve: { passenger: PassengerDetailResolver}},
    ]},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
