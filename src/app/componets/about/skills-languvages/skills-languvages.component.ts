import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-skills-languvages',
  templateUrl: './skills-languvages.component.html',
  styleUrls: ['./skills-languvages.component.scss']
})
export class SkillsLanguvagesComponent implements OnInit {
  avaterIcon='assets/avatar_icon.jpg';
  languvageData:any[]=[];
  skillsData:any[]=[];
  constructor(private services:AboutService) { }

  ngOnInit(): void {
    this.languvageData=this.services.languvageData;
    this.skillsData=this.services.skillsData;
  }

}
