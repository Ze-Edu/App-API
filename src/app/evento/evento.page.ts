import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {
  nome: string = "";
  limite: number = 10;
  inicial: number = 0;
  eventos: any = [];// define uma matriz vazia  
  constructor(
    private service: PostService,
    private router: Router,
    private alertCtr: AlertController
  ) { }
  
    ngOnInit() {
    }
    ionViewWillEnter(){
      //garante que a nossa tela sempre exiba os dados atualizados
      this.eventos = [];
      this.inicial = 0;
      this.carregar_eve();
    }
    addEvento(){
      this.router.navigate(['add_evento']);
    }
    carregar_eve() {
      return new Promise(ret =>{
        this.eventos=[];
        let dados = {
          requisicao: "listar_evento",
          nome: this.nome,
          limit: this.limite,
          start: this.inicial
        };
        this.service.dadosApi(dados,'evento.php').subscribe(data=>{
  
          if(data['result']=='0'){
              this.ionViewWillEnter();
          }else{
            for(let evento of data['result']){
              this.eventos.push(evento);
            }
          }
        });
      });
    }//fim do metodo carregar
  
    editar(id, nome, data, capacidade, ativo, usuario_id){
      this.router.navigate(['add_evento/'+id+'/'+nome+'/'+data+'/'+capacidade+'/'+ativo+'/'+usuario_id]);
    }
    mostrar(id, nome, data, capacidade, ativo, usuario_id){
      this.router.navigate(['mostrar-evento/'+id+'/'+nome+'/'+data+'/'+capacidade+'/'+ativo+'/'+usuario_id]);
  }
  
  ativar(id, ativo){
    if(ativo=='1'){
      return new Promise(()=>{
        let dados = {
          requisicao:'excluir_evento',
          id: id,
        };
        this.service.dadosApi(dados, "evento.php").subscribe(data=>{
          this.ionViewWillEnter();
        })
      });
    }
    else {
      return new Promise(()=>{
        let dados = {
          requisicao:'ativar_evento',
          id: id,
        };
        this.service.dadosApi(dados, "evento.php").subscribe(data=>{
          this.ionViewWillEnter();
        })
      });
    };
  }
  
    async alertaexclusao(id, nome_eve){
      const alert = await this.alertCtr.create({
        header:'Confirmação de exclusão do evento ' + nome_eve,
        buttons:[{
          text: 'Cancelar', role:'Cancel', cssClass:'light',
          handler:()=>{
            //ação caso o usuário clique em cancelar
  
          }},{
            text:'Ok',
            handler:()=>{
              this.ativar(id, 1);
            }
          }
      ]
      });
      alert.present();
    } 
  async mostrarnivel(usuario_id, nome_eve){
    const alert = await this.alertCtr.create({
      header: nome_eve + ' está associado ao usuario', 
      message: '<h3>'+usuario_id+'</h3>',
      buttons:[{
        text: 'Voltar', role:'Cancel', cssClass:'light',
        handler:()=>{
          //ação caso o usuário clique em cancelar
  
        }}]
    });
    alert.present();
  }
  
  }
