import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
nome: string = "";
limite: number = 10;
inicial: number = 0;
usuarios: any = [];// define uma matriz vazia  
constructor(
  private service: PostService
) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    //garante que a nossa tela sempre exiba os dados atualizados
    this.usuarios = [];
    this.inicial = 0;
    this.carregar();
  }
  addUsuario(){

  }
  carregar() {
    return new Promise(ret =>{
      this.usuarios=[];
      let dados = {
        requisicao: "listar",
        nome: this.nome,
        limit: this.limite,
        start: this.inicial
      };
      this.service.dadosApi(dados,'usuario.php').subscribe(data=>{

        if(data['result']=='0'){
            this.ionViewWillEnter();
        }else{
          for(let usuario of data['result']){
            this.usuarios.push(usuario);
          }
        }
      });
    });
  }//fim do metodo carregar

  editar(id, nome, usuario, senha_original, nivel){
    
  }

}
