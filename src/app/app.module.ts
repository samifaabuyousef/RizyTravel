import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule, TabsModule } from 'ngx-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './_services/auth.service';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { ErrorInterceptorProvider } from './_services/error.enterceptor';
import { HomeComponent } from './Home/Home.component';
import { AboutComponent } from './About/About.component';
import { TrackComponent } from './Track/Track.component';
import { AlertifyService } from './_services/alertify.service';
import { AdminMainComponent } from './admin-panel/admin-main/admin-main.component';
import { AuthGuard } from './_guards/auth.guard';
import { ToursComponent } from './admin-panel/admin-main/tours/tours.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TourComponent } from './admin-panel/admin-main/tours/tour/tour.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { TourService } from './_services/tour.service';
import { MatDialogModule } from '@angular/material';
import { EditTourComponent } from './admin-panel/admin-main/tours/edit-tour/edit-tour.component';
import { TourDetailComponent } from './admin-panel/admin-main/tours/tour-detail/tour-detail.component';
import { TourDetailResolver } from './_resolvers/tour-detail.resolver';
import { TourListResolver } from './_resolvers/tour-list.resolver';
import { TourEditResolver } from './_resolvers/tour-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './admin-panel/admin-main/tours/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { StagesEditorComponent } from './admin-panel/admin-main/tours/stages-editor/stages-editor.component';
import { AskusComponent } from './askus/askus.component';
import { QuestionsComponent } from './admin-panel/admin-main/questions/questions.component';
import { EditQuestionComponent } from './admin-panel/admin-main/questions/edit-question/edit-question.component';
import { JoinTourComponent } from './join-tour/join-tour.component';
import { AddrequestComponent } from './join-tour/addrequest/addrequest.component';
import { TourRequestsComponent } from './admin-panel/admin-main/tour-requests/tour-requests.component';
import { QuestionService } from './_services/question.service';
import { TourRequestService } from './_services/tour-request.service';
import { TourRequestComponent } from './admin-panel/admin-main/tour-requests/tour-request/tour-request.component';

import { TourRequestDetailResolver } from './_resolvers/request-detail.resolver';
import { TourApplicationComponent } from './admin-panel/admin-main/tour-requests/tour-application/tour-application.component';
import { VideosComponent } from './admin-panel/admin-main/videos/videos.component';
import { VideoComponent } from './admin-panel/admin-main/videos/video/video.component';
import { EditVideoComponent } from './admin-panel/admin-main/videos/edit-video/edit-video.component';
import { PassengersComponent } from './admin-panel/admin-main/passengers/passengers.component';
import { PassengerComponent } from './admin-panel/admin-main/passengers/passenger/passenger.component';
import { PassengerService } from './_services/passenger.service';
import { VideoServiceService } from './_services/video-service.service';
import { PassengerProfileComponent } from './admin-panel/admin-main/passengers/passenger-profile/passenger-profile.component';
import { PassengerDetailResolver } from './_resolvers/passenger-detail.resolver';
import { EmailService } from './_services/email.service';



@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      LoginComponent,
      FooterComponent,
      AddnewuserComponent,
      HomeComponent,
      AboutComponent,
      TrackComponent,
      AdminMainComponent,
      ToursComponent,
      SidebarComponent,
      TourComponent,
      EditTourComponent,
      TourDetailComponent,
      PhotoEditorComponent,
      StagesEditorComponent,
      AskusComponent,
      QuestionsComponent,
      EditQuestionComponent,
      JoinTourComponent,
      AddrequestComponent,
      TourRequestsComponent,
      TourRequestComponent,
      TourApplicationComponent,
      VideosComponent,
      VideoComponent,
      EditVideoComponent,
      PassengersComponent,
      PassengerComponent,
      PassengerProfileComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      CarouselModule.forRoot(),
      OwlModule,
      BrowserAnimationsModule,
      MaterialModule,
      MatDialogModule,
      TabsModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule
   ],
   entryComponents: [
      TourComponent,
      EditTourComponent,
      ToursComponent,
      QuestionsComponent,
      EditQuestionComponent,
      AddrequestComponent,
      VideoComponent,
      EditVideoComponent,
      PassengerComponent
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      TourService,
      TourDetailResolver,
      TourListResolver,
      TourEditResolver,
      PreventUnsavedChanges,
      QuestionService,
      TourRequestService,
      TourRequestDetailResolver,
      VideoServiceService,
      PassengerService,
      PassengerDetailResolver,
      EmailService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
