import { Component, OnInit } from '@angular/core';
interface proficiencyData {
  title: string;
  persent: number;
}
@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.scss']
})
export class ProficiencyComponent implements OnInit {
  constructor() { }
proficiencyData:Array<proficiencyData>=[
    {
      title:'Frontend',
      persent:90
    },
    {
      title:'Backend',
      persent:80
    },
    {
      title:'Programing',
      persent:75
    }
  ];

  ngOnInit(): void {
    // this.image;
    this.proficiencyData;
  }

}
