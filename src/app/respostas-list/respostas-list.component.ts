import { Component } from '@angular/core';
import { respostaDto } from '../dto/resposta-dto';

@Component({
    selector: 'respostas-list',
    templateUrl: './respostas-list.component.html',
    styleUrls: ['./respostas-list.component.html']
})
export class RespostasListComponent{
    respostas: respostaDto[] = [
        {idResposta: 0, idPergunta: 0, texto: "sim"},
        {idResposta: 0, idPergunta: 0, texto: "não"}
    ];

    selectedResposta?: respostaDto;

    public getRespostas(): respostaDto[]{
        return this.respostas;
    }

    onSelect(resposta: respostaDto){
        this.selectedResposta = resposta;
        console.log(this.selectedResposta.texto);
    }
}