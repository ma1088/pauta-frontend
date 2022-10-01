import { Component } from '@angular/core';
import { RespostaDto } from '../../dto/RespostaDto';

@Component({
    selector: 'respostas-list',
    templateUrl: './respostas-list.component.html',
    styleUrls: ['./respostas-list.component.css']
})
export class RespostasListComponent{
    defaultResposta: RespostaDto = {idResposta: -1, idPergunta: -1, texto: 'null'};

    respostas: RespostaDto[] = [
        {idResposta: 0, idPergunta: 0, texto: "sim"},
        {idResposta: 0, idPergunta: 0, texto: "não"}
    ];

    selectedResposta?: RespostaDto;

    public getRespostas(): RespostaDto[]{
        return this.respostas;
    }

    editResposta(){
        if (this.selectedResposta == null) return;
        this.selectedResposta.texto = prompt("novo texto") ?? this.selectedResposta.texto
    }

    addResposta(){
        let novaResposta: RespostaDto = {idResposta: 0, idPergunta: 0, texto: 'Texto resposta'};
        this.respostas.push(novaResposta);
        this.selectedResposta = novaResposta;
        this.editResposta();
    }

    removeResposta(){
        let aResposta = this.selectedResposta ?? this.defaultResposta;
        let selectedIndex = 0;
        if (aResposta.idResposta > -1){
            this.respostas.forEach((item, index) => {
                if (item == aResposta) {
                    selectedIndex = index;
                    this.respostas.splice(index, 1);
                }
            })
            if (this.respostas.length > 0){
                this.selectedResposta = this.getRespostaAt(selectedIndex);
            }
        }
    }

    onSelect(resposta: RespostaDto){
        this.selectedResposta = resposta;
        this.editResposta();
    }

    public getRespostaAt(index :number) :RespostaDto {
        let maximo = this.respostas.length-1;
        if (index > maximo) return this.respostas[maximo];
        if (index < 0) return this.respostas[0];
        return this.respostas[index];
    }
}