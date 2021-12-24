import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about/services/about.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  IconData:any[]=[];
  constructor(private service:AboutService) { }
  ngOnInit(): void {
   this.IconData=this.service.social_media;
  }

}
