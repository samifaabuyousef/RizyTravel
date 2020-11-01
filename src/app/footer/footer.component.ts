import { Component, OnInit } from '@angular/core';
import { EmailService } from '../_services/email.service';
import { Email } from '../_model/Email';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email: Email;
  model: any = {};
  constructor(private emailService: EmailService,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  AddEmail()  {
    this.emailService.addEmail(this.model).subscribe( () => {
      this.alertify.success('The Email has been added');
    }, error => {

    });
  }

}
