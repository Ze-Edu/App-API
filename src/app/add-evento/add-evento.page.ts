import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.page.html',
  styleUrls: ['./add-evento.page.scss'],
})
export class AddEventoPage implements OnInit {
id: number;
nome: string;
data: string;
capacidade: number;
usuario_id: number;
edicao: boolean = false;

limite: number = 10;
inicial: number = 0;
usuarios: any = [];// define uma matriz vazia  
  constructor(
    private service: PostService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this.lista_user()
      this.actRoute.params.subscribe((dadosdarota:any)=>{
      this.id = dadosdarota.id;
      this.nome = dadosdarota.nome;
      this.data = dadosdarota.data;
      this.capacidade = dadosdarota.capacidade;
      this.usuario_id = dadosdarota.usuario_id;
      this.edicao = true;
      if(this.usuario_id){
          this.edicao=true
      }else{
        this.edicao=false
      }
    });
  }
  cadastrar_eve(){
    return new Promise(res => {
      let dados = {
        requisicao: 'add_evento',
        nome: this.nome,
        data_evento: this.data,
        capacidade: this.capacidade,
        usuario_id: this.usuario_id
      }
      console.log(dados);
      this.service.dadosApi(dados, "api_evento.php").subscribe(data=>{
      
        if(data['success']){
          this.router.navigate(['evento']);
          this.id=null;this.nome="";this.data="";this.capacidade=null;this.usuario_id=null
        }
      });
    });
  }
  editar_eve(){
    return new Promise(ret=>{
      let dados = {
        requisicao: 'editar_evento',
        nome: this.nome,
        data_evento: this.data,
        capacidade: this.capacidade,
        usuario_id: this.usuario_id
        
      };
      console.log(dados);
      this.service.dadosApi(dados,"api_evento.php").subscribe(data=>{
        if(data['success']){
          this.router.navigate(['evento']);
          
        }
      });
    });
  }

  lista_user(){
    return new Promise(ret =>{
      this.usuarios=[];
      let dados = {
        requisicao:"listar",
        nome:"", 
        limit:this.limite,
        start:this.inicial
      };
      this.service.dadosApi(dados,'api_usuario.php').subscribe(data =>{
        
        if(data['result']=='0'){
      
        }else{
          for(let usuario of data['result']){
            this.usuarios.push(usuario[0]);
          }
        }
      });
    }); 
  }

}