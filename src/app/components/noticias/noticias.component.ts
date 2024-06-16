import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { CommonModule } from '@angular/common';
import { RespuestaNoticias } from '../../interfaces';
import { Noticias } from '../../models/noticias';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit {

  resp:RespuestaNoticias=new Noticias();

  ngOnInit(): void {
   /*  this.getNoticias(); */
  }
  
  constructor( private noticias: NoticiasService){
  }

  getNoticias(){
    this.noticias.getNoticias().subscribe(
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

}
