import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
id: number ;
nome: string ;
usuario: string ;
senha: string ;
nivel: string ;
  constructor(
    private service: PostService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  cadastrar(){
    return new Promise(res => {
      let dados = {
        requisicao: 'add',
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha,
        nivel: this.nivel
      }
      this.service.dadosApi(dados, "usuario.php").subscribe(data=>{
        if(data['success']){
          this.router.navigate(['usuarios']);
          this.id=null;this.nome="";this.usuario="";this.senha="";this.nivel=""
        }
      });
    });
  }
  editar(){

  }

}
