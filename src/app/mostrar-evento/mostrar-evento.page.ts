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
  data: string='';
  capacidade: string='';
  ativo: number;
  usuario_id: string='';
    constructor(
      private actRoute: ActivatedRoute
    ) { }
  
    ngOnInit() {
      this.actRoute.params.subscribe((darota:any)=>{
        this.id = darota.id;
        this.nome = darota.nome;
        this.data = darota.data;
        this.capacidade = darota.nivel;
        this.ativo = darota.usuario_id;
        this.usuario_id = darota.usuario_id;
      })
    }
}
