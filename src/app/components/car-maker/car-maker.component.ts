import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-maker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-maker.component.html',
  styleUrl: './car-maker.component.css'
})
export class CarMakerComponent implements OnInit {

  resp=[{id:'71460',name:'Adler'},{id:'00024',name:'Chevrolet'},{id:'00025',name:'Ford'}];
  models=[{id:71460,name:'Adler'}]
  ngOnInit(): void {
    this.getCars()
  }

  constructor(private carService: CarsService) {

  }

  getCars() {
    this.carService.getCars().subscribe({
      next: (data) => {
        console.log(data);
        this.resp = data;
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  getModelos(id: string){
    let x=Number(id);
    this.carService.getModelosByID(x).subscribe({
      next: (data) => {
        console.log(data);
        this.models = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }





}
