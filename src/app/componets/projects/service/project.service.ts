import { Injectable } from '@angular/core';
interface projectData {
  titel: string;
  explin:string;
  descripsion:String | any;
  
}
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  ProjectData:Array<projectData>=[
    {
      titel:'Logistic',
      explin:'Cloud-based TMS (Transport Management System)  is a logistics platform that uses technology to help businesses plan, execute and optimize the physical movement of goods, both incoming and outgoing, and making sure the shipment is compliant, proper documentation is managed',
      descripsion:"Developed reusable codes and Template that added more functionality to the software and helps to save the time,Created Restful CRUD API with Node.js, Express and MongoDB to perform CURD Operation.,Created stepper to get inputs of all customer and vendor data.,Created Reports, Dashboards and Charts to print, download and display the Sales and Purchase details.,Fixed defects and provided support during the warranty phase after production."
    },
    {
      titel:'Mulux',
      explin:'This application manages customer, product, sales order, dealer and purchase order.Also it can be used for managing their sales and purchase orders and also  reduce the manual work. By the use of this application company can analyze daily sales and product inventory very easily.',
      descripsion:"Created Billing Screen to display and print the billing details.,	Used Image Crapper to get user input within certain conditions to upload image.,	Created Tree view to display the details with CURD Operations.,	Created Stepper, Cards, Tabs, and Popups to Manage 100+ Input actions.,Created Reports, Dashboards and Charts to print, download and display the Sales and Purchase details as SVG, PNG and CSV format."
    },
    {
      titel:'Ruthra Management(RM)',
      explin:"The project has developed the QR Reader app using Flutter & Admin dashboard on Angular by using this app to scan QR codes of product and get complete details like product information, images, and pricing, reviews and highlights, offers of the product to Purchase.",
      descripsion:"Created the angular Component to display Logins, Admin information, Bank Details etc.,	Worked on Pop up Screens ,Table and routing module.,Cooperating with the back-end developer in the process of building the RESTful API,Created Validation to validate User input before the Post Action. ,Created Components to display the Product details based on QR code."
    },
  
  ];

}
