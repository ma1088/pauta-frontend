import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { PautaPaiDto } from '../dto/PautaPaiDto';
import { PautaDto } from '../dto/PautaDto';
import { RespostaDto } from '../dto/RespostaDto';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { AppMsg } from '../app-msg/app-msg.component';

@Component({
    selector: 'nova-pauta-form',
    templateUrl: './nova-pauta-form.component.html',
    styleUrls: ['./nova-pauta-form.component.css']
})
export class NovaPautaFormComponent implements AfterViewInit{
    url = environment.apiUrl;
    agora :number = Date.now();
    mensagem = '';

    @ViewChild(AppMsg) msg: AppMsg;
    constructor(private http: HttpClient){
        this.msg = <AppMsg><unknown>document.getElementById("msg");
    }

    ngAfterViewInit(): void {
        console.log('mensagem vai mudar');
        this.mensagem = this.msg.mensagem;
    }

    onClick(asRespostas: RespostaDto[]){
        console.log('salvar');
        let aPautaPai: PautaPaiDto = this.getPauta(asRespostas);

        let mensagem: string = '';
        this.http.post<PautaPaiDto>(this.url + "/criar", aPautaPai).subscribe(data => {
            this.mensagem = "pauta criada: " + data.pauta.idPauta + ": " + data.pauta.titulo;
        });

    }

    getPauta(asRespostas: RespostaDto[]){
        let aPauta: PautaDto = {
            idPauta: 0,
            autor: (<HTMLInputElement>document.getElementById("autor")).value,
            dtCriacao: formatDate(this.agora,'yyyy-MM-ddTHH:mm:ssZ','en-US'),
            qtdRespostas: parseInt((<HTMLInputElement>document.getElementById("qtdRespostas")).value),
            texto: (<HTMLInputElement>document.getElementById("texto")).value,
            titulo: (<HTMLInputElement>document.getElementById("titulo")).value
        };

        let aPautaPai: PautaPaiDto = {
            pauta: aPauta,
            respostas: asRespostas
        };

        return aPautaPai;
    }
    
    
}