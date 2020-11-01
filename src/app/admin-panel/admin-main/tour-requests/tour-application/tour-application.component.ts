import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TourRequest } from 'src/app/_model/TourRequest';
import { TourRequestService } from 'src/app/_services/tour-request.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-tour-application',
  templateUrl: './tour-application.component.html',
  styleUrls: ['./tour-application.component.css']
})
export class TourApplicationComponent implements OnInit {
  request: TourRequest;
  constructor(private tourRequestService: TourRequestService,
              private alertify: AlertifyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      // tslint:disable-next-line:no-string-literal
      this.request = data['request'];
    });
  }


   generatePdf() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();
   }

   getDocumentDefinition() {
    sessionStorage.setItem('request', JSON.stringify(this.request));
    return {
      content: [
        {
          text: 'Rizy Travel Company',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Join Tour Application',
          bold: false,
          fontSize: 10,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Application Number(' + this.request.id + ')',
          bold: false,
          fontSize: 10,
          alignment: 'center',
          margin: [0, 0, 0, 40],
        },
        {
          table: {
            widths: ['*', '70%'],
            body: [
              [{
                text: 'Name',
                border: [false, true, false, false],
                margin: [0, 10, 0, 20],
                bold: true,
              },
              {
                text: this.request.name,
                border: [false, true, false, false],
                margin: [0, 10, 0, 20]
              }],
              [{
                  text: 'National Id Num.',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20],
                  bold: true,
                },
                {
                  text: this.request.nationalIdNumber,
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20]
                }
              ],
              [
                {
                  text: 'Passport Num.',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20],
                  bold: true,
                },
                {
                  text: this.request.passportNumber,
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20]
                }
              ],
              [
                {
                  text: 'Date Of Birth',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20],
                  bold: true,
                },
                {
                  text: this.request.dateOfBirth,
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20]
                }
              ],
              [
                {
                  text: 'Phone',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20],
                  bold: true,
                },
                {
                  text: this.request.phone,
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20]
                }
              ],
              [
                {
                  text: 'Email',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20],
                  bold: true,
                },
                {
                  text: this.request.email,
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20]
                }
              ],
              [
                {
                  text: 'Address',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20],
                  bold: true,
                },
                {
                  text: this.request.address,
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20]
                }
              ],
              [
                {
                  text: 'Nationality',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20],
                  bold: true,
                },
                {
                  text: this.request.nationality,
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 20]
                }
              ],
              [
                {
                  text: 'Tour Name',
                  border: [false, false, false, true],
                  margin: [0, 0, 0, 80],
                  bold: true,
                },
                {
                  text: this.request.tourName,
                  border: [false, false, false, true],
                  margin: [0, 0, 0, 80]
                }
              ],
              [
                {
                  text: 'Company',
                  border: [false, false, false, false],
                  margin: [50, 10, 0, 50],
                  bold: true,
                  alignment: 'center',
                },
                {
                  text: 'Passenger',
                  border: [false, false, false, false],
                  margin: [50, 10, 20, 50],
                  bold: true,
                  alignment: 'center',
                }
              ],
              [
                {
                  text: '............',
                  border: [false, false, false, true],
                  margin: [50, 10, 0, 10],
                  bold: true,
                  alignment: 'center',
                },
                {
                  text: '............',
                  border: [false, false, false, true],
                  margin: [50, 10, 20, 10],
                  bold: true,
                  alignment: 'center',
                }
              ]

            ]
          }

        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                text: 'Rizy Travel Company',
                border: [false, false, false, false],
                margin: [0, 50, 0, 0],
                bold: true,
              },
              {
                text: 'Address: NNNN NNNNN NNN',
                border: [false, false, false, false],
                margin: [0, 50, 0, 0],
                alignment: 'right'
              }
              ],
              [
                {
                text: '',
                border: [false, false, false, false],
                margin: [0, 0, 0, 0],
                bold: true,
              },
              {
                text: 'Phone: 000 000 0000',
                border: [false, false, false, false],
                margin: [0, 0, 0, 0],
                alignment: 'right'
              }
              ]
            ]
        }
      }
      ]
    };

  }
}
