import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './componets/banner/banner.component';
import { AboutComponent } from './componets/about/about.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ProjectsComponent } from './componets/projects/projects.component';
import { AntModule } from './ant/ant.module';
import { WhoIamComponent } from './componets/about/who-iam/who-iam.component';
import { ExperianceComponent } from './componets/about/experiance/experiance.component';
import { QualificationCertificationComponent } from './componets/about/qualification-certification/qualification-certification.component';
import { SkillsLanguvagesComponent } from './componets/about/skills-languvages/skills-languvages.component';
import { ProficiencyComponent } from './componets/proficiency/proficiency.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    WhoIamComponent,
    ExperianceComponent,
    QualificationCertificationComponent,
    SkillsLanguvagesComponent,
    ProficiencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
