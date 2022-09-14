import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
usuario: string="";
senha: string=""; 
  constructor(
    private service: PostService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }
    
  ngOnInit() {
  }

  login(){
    let dados =  {
      requisicao: 'login',
      usuario: this.usuario,
      senha: this.senha
    }
    //(dados) é o que esta senda passado para a Api
    //(data) é o que esta sendo retornado da Api
    this.service.dadosApi(dados,'usuario.php').subscribe( async data =>{
      console.log(data)
      if(data['success']){
        if(data['result']['nivel']=='admin' || data['result']['nivel']=='caixa'){
            this.router.navigate(['usuarios']);
      }else{
        this.router.navigate(['folder']);
      }
        const toast = await this.toastCtrl.create({
          message: "Login efetuado com sucesso",
          position: 'top',
          color:'success',
          duration:2500
        });
        toast.present();
      }else{
        const toast = await this.toastCtrl.create({
          message: data['msg'],
          position: 'bottom',
          color:'danger',
          duration:2500
        });
        toast.present();
      }
    });
  }

}
