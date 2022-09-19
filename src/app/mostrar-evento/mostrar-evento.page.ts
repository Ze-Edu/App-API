import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-evento',
  templateUrl: './mostrar-evento.page.html',
  styleUrls: ['./mostrar-evento.page.scss'],
})
export class MostrarEventoPage implements OnInit {
  id: number;
  nome: string='';
  data: number;
  capacidade: number;
  usuario_id: number;
    constructor(
      private actRoute: ActivatedRoute
    ) { }
  
    ngOnInit() {
      this.actRoute.params.subscribe((darota:any)=>{
        this.id = darota.id;
        this.nome = darota.nome;
        this.data = darota.data;
        this.capacidade = darota.capacidade;
        this.usuario_id = darota.usuario_id;
      })
    }
}
