import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  des: {[key: string]: string} = {
    brand: "Asus",
    productType: "Laptop",
    productCode:"LAPASUS-VIVOBOOIT-P2060375C19661",
    processor:"AMD Ryzen 3",
    operatingSystem:"Windows 10",
    RAM:"4 GB",
    storageCapacity:"1 TB HDD",
    screenSize:"39.62 cm (15.6 inch)",
    modelName:"VivoBook 15",
    model_id:"M509DA-BR301T",
    purpose:"Everyday Use",
    batteryBackup:"4 Hours",
    ScreenResolution:"1366 x 768 Pixels",
    graphicMemoryType:"DDR4",

  }

  ngOnInit(): void {
  }

}
