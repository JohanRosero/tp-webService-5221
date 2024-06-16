import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SimulacroService } from '../../services/simulacro.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-eleccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api-eleccion.component.html',
  styleUrl: './api-eleccion.component.css'
})
export class ApiEleccionComponent implements OnInit {

  ipBuscada = "200.106.249.7";
  resp2!: any;
  
  constructor(private infoIP: SimulacroService) {

  }
  ngOnInit(): void {
    this.getStreamingServices();
  }

  getStreamingServices(){
    this.infoIP.getStreaming().subscribe({
      next: (data) => {
        console.log(data);
        this.resp2= data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
