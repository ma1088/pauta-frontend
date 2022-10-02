import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import { PautaFiltroDto } from '../dto/PautaFiltroDto';
import { formatDate } from '@angular/common';

import { environment } from '../../environments/environment';
import { PautaPaiDto } from '../dto/PautaPaiDto';

@Component({
    selector: 'consulta-pautas-list',
    templateUrl: './consulta-pautas-list.component.html',
    styleUrls: ['./consulta-pautas-list.component.css']
})
export class ConsultaPautaList{
    constructor(private http: HttpClient){

    }
    HIDDEN: string = '0em';
    SHOWN: string = '5em';
    url = environment.apiUrl;

    de: Date = new Date();
    ate: Date = new Date();

    asPautas?: PautaPaiDto[];

    
    showHideSearch(){
        let painel = <HTMLDivElement> document.getElementById("searchPanel");
        let lista = <HTMLDivElement> document.getElementById("listPanel");
        if (painel.style.height == this.HIDDEN){
            painel.style.height = this.SHOWN;
            lista.style.marginTop = this.SHOWN;
        } else {
            painel.style.height = this.HIDDEN;
            lista.style.marginTop = this.HIDDEN;
        }
    }
    
    doSearch(){
        let oFiltro: PautaFiltroDto = {
            autor: (<HTMLInputElement>document.getElementById("autor")).value,
            dtCriacaoDe: formatDate(this.de,'yyyy-MM-ddTHH:mm:ssZ','en-US'),
            dtCriacaoAte: formatDate(this.ate,'yyyy-MM-ddTHH:mm:ssZ','en-US'),
            texto: (<HTMLInputElement>document.getElementById("texto")).value,
            titulo: (<HTMLInputElement>document.getElementById("titulo")).value
        }
        this.http.post<PautaFiltroDto>(this.url + "/listar", oFiltro).subscribe(data => this.asPautas);
    }
}