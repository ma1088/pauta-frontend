import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import { formatDate } from '@angular/common';

import { environment } from '../../environments/environment';
import { PautaPaiDto } from '../dto/PautaPaiDto';
import { AppMsg } from '../app-msg/app-msg.component';

@Component({
    selector: 'consulta-pautas-list',
    templateUrl: './consulta-pautas-list.component.html',
    styleUrls: ['./consulta-pautas-list.component.css']
})
export class ConsultaPautaList implements AfterViewInit{
    
    @ViewChild(AppMsg) msg: AppMsg;
    constructor(private http: HttpClient){
        this.msg = <AppMsg><unknown>document.getElementById("msg");
    }
    ngAfterViewInit(): void {
        this.mensagem = this.msg.mensagem;
    }

    HIDDEN: string = '0em';
    SHOWN: string = '5em';
    url = environment.apiUrl;

    de: Date = new Date();
    ate: Date = new Date();

    mensagem = '';
    asPautas: PautaPaiDto[] = [];
    
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
        let headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        
        this.http.post<PautaPaiDto[]>(this.url + "/pauta/listar", 
            {
                autorLike: (<HTMLInputElement>document.getElementById("autor")).value,
                criadoApos: formatDate(this.de,'yyyy-MM-ddTHH:mm:ssZ','en-US'),
                criadoAntesDe: formatDate(this.ate,'yyyy-MM-ddTHH:mm:ssZ','en-US'),
                textoLike: (<HTMLInputElement>document.getElementById("texto")).value,
                tituloLike: (<HTMLInputElement>document.getElementById("titulo")).value
            }
        ).subscribe(data => {
            this.asPautas = data;
        });        
        if (this.asPautas?.length == 0){
            this.mensagem = 'Nenhuma pauta encontrada...';
        }
    }
}