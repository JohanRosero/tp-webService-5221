import { Component } from '@angular/core';
import { SimulacroService } from '../../services/simulacro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ipBuscada = "200.106.249.7";
  resp!: any;
  link = '';
  latitude = 0;
  longitude = 0;
  

  constructor(private infoIP: SimulacroService) {

  }
  ngOnInit(): void {
  }

  getInfo() {
    this.infoIP.getInfoIp(this.ipBuscada).subscribe({
      next: (data) => {
        /*        console.log(this.ipBuscada);
               console.log(data);
               console.log(this.ciudades); */
        this.resp = data;
        this.latitude = this.resp.latitude;
        this.longitude = this.resp.longitude;    
        this.link = "https://maps.google.com/?q=" + this.latitude + "," + this.longitude;
      },
      error: (err) => {
        console.log(this.ipBuscada);
        console.log(err);
      }
    })
  }


}
