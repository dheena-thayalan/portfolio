import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-qualification-certification',
  templateUrl: './qualification-certification.component.html',
  styleUrls: ['./qualification-certification.component.scss']
})
export class QualificationCertificationComponent implements OnInit {
  avaterIcon='assets/avatar_icon.jpg';
  qualificationData:any[]=[];
  certificationsData:any[]=[];
  constructor(private service:AboutService) { }

  ngOnInit(): void {
    this.qualificationData=this.service.qualification;
    this.certificationsData=this.service.certification;
  }

}
