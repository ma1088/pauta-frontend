import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { pautaPaiDto } from '../dto/pauta-pai-dto';
import { pautaDto } from '../dto/pauta-dto';
import { respostaDto } from '../dto/resposta-dto';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
    selector: 'nova-pauta-form',
    templateUrl: './nova-pauta-form.component.html',
    styleUrls: ['./nova-pauta-form.component.css']
})
export class NovaPautaFormComponent{
    url = environment.apiUrl;
    agora :number = Date.now();
    mensagem?: string;

    constructor(private http: HttpClient){

    }

    onClick(asRespostas: respostaDto[]){
        let aPauta: pautaDto = {
            idPauta: 0,
            autor: (<HTMLInputElement>document.getElementById("autor")).value,
            dtCriacao: formatDate(this.agora,'yyyy-MM-ddTHH:mm:ssZ','en-US'),
            qtdRespostas: parseInt((<HTMLInputElement>document.getElementById("qtdRespostas")).value),
            texto: (<HTMLInputElement>document.getElementById("texto")).value,
            titulo: (<HTMLInputElement>document.getElementById("titulo")).value
        };

        let aPautaPai: pautaPaiDto = {
            pauta: aPauta,
            respostas: asRespostas
        };

        this.http.post<pautaPaiDto>(this.url + "/criar", aPautaPai).subscribe(data => this.mensagem = "pauta criada: " + data.pauta.idPauta);
    }
    
}