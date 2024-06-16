import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Parcial2024Service } from '../../services/parcial2024.service';
import { RespRecetas } from '../../interfaces';

@Component({
  selector: 'app-parcial2024',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parcial2024.component.html',
  styleUrl: './parcial2024.component.css'
})
export class Parcial2024Component implements OnInit {

  constructor( private parcial2024: Parcial2024Service) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  resp:any;
  ingredientes:any;
  pasos:any;
  getRecetas() {
    this.parcial2024.getRecetas().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.resp=data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
  getDetalles(ruta:string) {
    this.parcial2024.getDet(ruta).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.ingredientes = data.Ingredientes;
          this.pasos=data['Pasos de preparacion'];
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

}
