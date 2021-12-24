import { Injectable } from '@angular/core';
interface iconData {
  href: string;
  icons: string;
  name: string
}
interface qualificationData {
  course: string;
  college: string;
  college_url: string;
  descripsion: string;
  year: string | Date;
}

interface skillsData {
  title: string;
  skills: string;
}
interface languvageData {
  languvage: string;
  rate: number;
}
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor() { }

  social_media: Array<iconData> = [
    // {
    //   href: 'mailto:dheenathayalanbsc2000@gmail.com',
    //   icons: 'mail',
    //   name: 'mail'
    // },
    {
      href: 'https://www.linkedin.com/in/dheenathayalan-m-8a198a1a3/detail/contact-info/',
      icons: 'linkedin',
      name: 'linkedin'
    },
    {
      href: 'https://www.hackerrank.com/dheenathayalanb2',
      icons: 'partition',
      name: 'hakerrank'
    },
    {
      href: 'https://www.instagram.com/_dheena__/',
      icons: 'instagram',
      name: 'instagram'
    },
    {
      href: 'https://github.com/dheena-thayalan',
      icons: 'github',
      name: 'github'
    },
    {
      href: 'https://twitter.com/dheenat88556319',
      icons: 'twitter',
      name: 'twitter'
    },
    {
      href: 'https://www.facebook.com/vj.dheena/',
      icons: 'facebook',
      name: 'facebook'
    },
  ];

  //qualification list

  qualification: Array<qualificationData> = [
    {
      course: 'BSC Computer Technology',
      college: 'Sree Saraswathi Thyagaraja College',
      college_url: 'https://stc.ac.in/',
      descripsion: 'Pollachi with affiliated to Bharathiar University with 68.58 %',
      year: '2017 - 2020'
    },
    {
      course: 'Higher Secondary',
      college: 'RKR Higher Secondary School',
      college_url: 'https://www.rkrschool.in/management.php',
      descripsion: 'Udumalpet with 68.00%',
      year: '2015-2017'
    },
    {
      course: 'SSLC',
      college: 'Government  High  School',
      college_url: 'https://www.rkrschool.in/management.php',
      descripsion: 'Udumalpet with 91.02%',
      year: '2005-2015'
    }
  ];
  //certification list
  certification: Array<qualificationData> = [
    {
      course: 'Java Course',
      college: 'Jspider',
      college_url: 'https://www.jspiders.com/',
      descripsion: 'Bangaluru',
      year: '2020'
    },
    {
      course: 'English Typewriting with Distinction',
      college: 'Murugan Typewriting',
      college_url: '',
      descripsion: 'Udumalpet',
      year: '2015'
    },
    {
      course: 'Problem Solving',
      college: 'HackerRank',
      college_url: 'https://www.hackerrank.com/dheenathayalanb2',
      descripsion: 'won 5-stars',
      year: '2020'
    }
  ];
  // Skills list
  skillsData: Array<skillsData> = [
    {
      title: 'Programming Language',
      skills: 'Core Java,Typescript'
    },
    {
      title: 'Frontend',
      skills: 'Angular,HTML, Css'
    },
    {
      title: 'Backend',
      skills: 'Node.js & Express.js'
    },
    {
      title: 'Data Bases',
      skills: 'Mongo DB,SQL'
    },
    {
      title: 'Others',
      skills: 'Filezila,Git'
    }
  ];
  languvageData: Array<languvageData> = [
    {
      languvage: 'English',
      rate: 4.5
    },
    {
      languvage: 'Tamil',
      rate: 5
    },
    {
      languvage: 'Kannada',
      rate: 2.5
    },
  ]
}
