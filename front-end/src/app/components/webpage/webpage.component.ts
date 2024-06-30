import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {


  currentLang: 'en' | 'ar' = 'en'; // Set default language
  currentDesign: 'en' | 'ar' = 'en'; // Set default design

  constructor(private translate: TranslateService, private dashboardService: DashboardService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.translate.setDefaultLang(this.currentLang);
    this.updateDirection();

    this.loadProjects();
  }

  updateDirection() {
    const htmlTag = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = this.currentLang === 'en' ? 'ltr' : 'rtl';
  }

  switchLanguageAndDesign() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.currentDesign = this.currentDesign === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
    this.updateDirection();
    console.log(this.currentLang === 'en' ? 'offset-md-2' : 'offset-md-12');

  }


  loadProjects() {
    this.dashboardService.getAllItems().subscribe((data: any[]) => {
      data.forEach((element: any) => {
        let objectURL = 'data:image/png;base64,' + element.image;
        console.log(objectURL);

        element.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        console.log(element.image);
      });


      this.items = data;
    })
  }

  items: any[] = [
    {
      image: './assets/webpage/images/projects/team-1.jpg',
      title: 'Supervision and preparation of executive plans for the Riyadh frontage project.',
      amount: '11.671.672 SR'
    },
    {
      image: './assets/webpage/images/projects/team-2.jpg',
      title: 'Technical support and preparation of modified engineering designs and multiple technical studies - Musa View project.',
      amount: '700.000 SR'
    },
    {
      image: './assets/webpage/images/projects/team-3.jpg',
      title: 'Supervising the implementation of Ibn Khaldoun Schools, east of Riyadh',
      amount: '8.000.000 SR'
    },
    {
      image: './assets/webpage/images/projects/team-4.jpg',
      title: 'Design of Ibn Khaldoun Schools Complex, North of Riyadh',
      amount: '116.190 SR'
    },
    {
      image: './assets/webpage/images/projects/team-3.jpg',
      title: 'Surveying and design works for a project:',
      amount: '13.698.900 SR',
      description: `- Completion the implementation of the industrial city in Al-Jouf city.<br>
        - Completion the implementation of the industrial city in Hail.<br>
        - Improvement and development of Najm Al-Din Al-Ayoubi Road from Hamza bin Abdul-Muttalib Street to Jeddah Road in Riyadh.<br>
        - Development and improvement of Asmaa Bint Abi Bakr Road in Riyadh.<br>
        - Improvement of Al-Sahaba Road from its intersection with King Abdullah Road with Al-Thumama Road, located in Riyadh.<br>
        - Improvement and development of Sheikh Hassan bin Hussein bin Ali Road from its intersection with King Abdullah bin Abdulaziz Road to its intersection with Al Thumama Road in Riyadh.<br>
        - Completion of infrastructure services in the first industrial city in Hail.`
    },
    {
      image: './assets/webpage/images/projects/team-4.jpg',
      title: 'Surveying works, executive drawings, and inventory of quantities of the implementation of the marble ore site road',
      amount: '450.000 SR',
      description: 'Surveying works, executive drawings, and inventory of quantities of the implementation of the marble ore site road in Jabal Farasan, 5 km, in Makkah region'
    },
    {
      image: './assets/webpage/images/projects/team-1.jpg',
      title: 'Studies and designs work for Saudi customs outlets.',
      amount: '59.800 SR'
    },
    {
      image: './assets/webpage/images/projects/team-2.jpg',
      title: 'Surveying works and executive drawings for road modifications of bus lines (Dirab Road) Phase One.',
      amount: '2.250.000 SR'
    }
  ];

  isPopupVisible: boolean[] = new Array(this.items.length).fill(false);

  showPopup(index: number): void {
    this.isPopupVisible[index] = true;
  }

  hidePopup(index: number): void {
    this.isPopupVisible[index] = false;
  }
}
