import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextToVoiceService } from '../../services/text-to-voice.service';
import { CountryFlags } from '../../models/country-flags';
import { Idioma } from '../../models/idioma';

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css'
})
export class TraductorComponent implements OnInit {

  banderas = new CountryFlags().getFlags();
  soporte = new Idioma();
  idiomas!: Array<any>;
  seleccionables!: Array<any>;
  idiomaOrigen: string = "auto";
  idiomaDestino: string = "en";
  texts: string[] = [];
  traducciones: any[] = [];
  texto: string = "";
  traducido: string = "";
  lectura: any;
  audioUrl: string = "";
  /* 362afd8c71f7418697fc8a0a67f0da2f */
  constructor(private traductor: TranslateService, private lector: TextToVoiceService) {
    this.idiomas = this.soporte.getIdiomas();
    this.seleccionables = this.soporte.getIdiomasDestino();

  }
  ngOnInit(): void {
  }

  traducir() {
    this.traductor.traducirTexto(this.texts, this.idiomaDestino, this.idiomaOrigen).subscribe({
      next: data => {
        //console.log(data);
        this.traducido = data.texts;
        this.agregarRecientes();
        this.getAudio();
      },
      error: error => {
        console.log(error);
      }
    });
  }

  getAudio() {
    this.lector.traducirTextoAVoz(this.traducido).subscribe({
      next: data => {
        if (data) {
          this.audioUrl = URL.createObjectURL(data);
          console.log(this.audioUrl);
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }

  agregarTextos(texto: string) {
    this.traducido = "";
    this.texts = [];
    this.texts.push(texto);
  }

  probar() {

    console.log(this.idiomaDestino);
    console.log(this.idiomaOrigen);
    console.log(this.texts);
  }

  agregarRecientes() {
    let estaTraduccion = {
      texto: this.texto,
      idiomaOrigen: this.idiomaOrigen,
      idiomaDestino: this.idiomaDestino,
      traduccion: this.traducido
    }
    this.traducciones.push(estaTraduccion);
  }
}
