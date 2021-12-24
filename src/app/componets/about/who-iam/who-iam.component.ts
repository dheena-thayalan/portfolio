import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
@Component({
  selector: 'app-who-iam',
  templateUrl: './who-iam.component.html',
  styleUrls: ['./who-iam.component.scss']
})
export class WhoIamComponent implements OnInit {
  quotes:String=' "I believe in Build Awesome things" ';
  IconData:any[]=[];
  constructor(private service:AboutService) { }
  ngOnInit(): void {
   this.IconData=this.service.social_media;
  }

}
