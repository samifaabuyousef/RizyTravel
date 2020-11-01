import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TourRequestService } from 'src/app/_services/tour-request.service';
import { TourRequest } from 'src/app/_model/TourRequest';
import { NgForm } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-tour-request',
  templateUrl: './tour-request.component.html',
  styleUrls: ['./tour-request.component.css']
})
export class TourRequestComponent implements OnInit {
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


  onSumbit() {
    this.tourRequestService.updateRequest(this.request.id, this.request).subscribe(res => {
      this.alertify.success('Updated successfully');
      this.router.navigate(['/requests']);
    });

  }

  generatePdf() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download('TourApplication.pdf');
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
