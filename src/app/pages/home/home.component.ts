import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      img: 'assets/img/profil01.jpg',
      post: "Software engineer",
      nom: 'Jean Biboum',
      testimonial: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a eligendi sit, soluta, provident rerum, quis doloribus quo deseruntnostrum eaque cum odio',
    },
    {
      img: 'assets/img/02.jpg',
      post: "Data Scientist",
      nom: 'Lin Mamarine',
      testimonial: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a eligendi sit, soluta, provident rerum, quis doloribus quo deseruntnostrum eaque cum odio',
    },
    {
      img: 'assets/img/03.jpg',
      post: "Project Manager",
      nom: 'Naîra Peca',
      testimonial: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a eligendi sit, soluta, provident rerum, quis doloribus quo deseruntnostrum eaque cum odio',
    },
    {
      img: 'assets/img/04.jpg',
      post: "UX Designer",
      nom: 'Taza Perez',
      testimonial: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a eligendi sit, soluta, provident rerum, quis doloribus quo deseruntnostrum eaque cum odio',
    },
    {
      img: 'assets/img/05.jpg',
      post: "Marketing Specialist",
      nom: 'Hibra Combo',
      testimonial: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a eligendi sit, soluta, provident rerum, quis doloribus quo deseruntnostrum eaque cum odio',
    },
    {
      img: 'assets/img/06.jpg',
      post: "Financial Analyst",
      nom: 'Line Pakina',
      testimonial: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a eligendi sit, soluta, provident rerum, quis doloribus quo deseruntnostrum eaque cum odio',
    },
    {
      img: 'assets/img/08.jpg',
      post: "Human Resources Manager",
      nom: 'Boukarie Serise',
      testimonial: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a eligendi sit, soluta, provident rerum, quis doloribus quo deseruntnostrum eaque cum odio',
    },
    {
      img: 'assets/img/09.jpg',
      post: "Sales Representative",
      nom: 'Salona Racari',
      testimonial: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a eligendi sit, soluta, provident rerum, quis doloribus quo deseruntnostrum eaque cum odio',
    },
    {
      img: 'assets/img/11.jpg',
      post: "IT Support Specialist",
      nom: 'Vanon Chavez',
      testimonial: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a eligendi sit, soluta, provident rerum, quis doloribus quo deseruntnostrum eaque cum odio',
    },
];

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    ininite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024, // taille de l'écran à partir de laquelle ces paramètres seront utilisés
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // taille de l'écran à partir de laquelle ces paramètres seront utilisés
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() {}

  ngOnInit() {}
}
