import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit, AfterViewInit, OnDestroy {
  data = <any>{}
  ngOnInit(): void {
    this.data =  [
      {
        "Problem_title": "Build Interstellar Highway",
        "Author": {
          "name": "John Smith",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-3.png"
        },
        "Participations": 22,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      },
      {
        "Problem_title": "Colonize Exoplanet Kepler-186f",
        "Author": {
          "name": "Emma Johnson",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-4.png"
        },
        "Participations": 45,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      },
      {
        "Problem_title": "Reverse Climate Change",
        "Author": {
          "name": "Michael Lee",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-5.png"
        },
        "Participations": 15,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      },
      {
        "Problem_title": "Cure All Diseases",
        "Author": {
          "name": "Sophia Martinez",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-6.png"
        },
        "Participations": 38,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      },
      {
        "Problem_title": "Establish Lunar Colony",
        "Author": {
          "name": "William Brown",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-7.png"
        },
        "Participations": 27,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      },
      {
        "Problem_title": "Build AI to Assist Humanity",
        "Author": {
          "name": "Olivia Taylor",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-8.png"
        },
        "Participations": 50,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      },
      {
        "Problem_title": "Eliminate Poverty Worldwide",
        "Author": {
          "name": "Ethan Anderson",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-9.png"
        },
        "Participations": 19,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      },
      {
        "Problem_title": "Mars Terraforming Project",
        "Author": {
          "name": "Ava Wilson",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-10.png"
        },
        "Participations": 36,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      },
      {
        "Problem_title": "Ocean Cleanup Initiative",
        "Author": {
          "name": "Noah Garcia",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-11.png"
        },
        "Participations": 25,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      },
      {
        "Problem_title": "Renewable Energy Revolution",
        "Author": {
          "name": "Isabella Rodriguez",
          "avatar": "assets/app-assets/images/portrait/small/avatar-s-12.png"
        },
        "Participations": 31,
        "Actions": [
          {
            "action": "Delete",
            "icon": "fa-regular fa-star"
          }
        ]
      }
    ]  
  }
 
  dtElement: any;

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    if (this.dtElement) {
      this.dtElement.destroy();
    }
  }
}
