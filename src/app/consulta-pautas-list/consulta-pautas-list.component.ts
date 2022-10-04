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
        let tz:string = formatTz();
        console.log(tz);
        let de = (<HTMLInputElement>document.getElementById('dtCriacaoDe')).value;
        let ate = (<HTMLInputElement>document.getElementById('dtCriacaoAte')).value;
        let headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        
        this.http.post<PautaPaiDto[]>(this.url + "/pauta/listar", 
            {
                autorLike: (<HTMLInputElement>document.getElementById("autor")).value,
                criadoApos: ((de != '') ? de + ':00.000' + tz : null),
                criadoAntesDe: ((ate != '') ? ate + ':59.999' + tz : null),
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

function formatTz() {
    let tz = (-1 * new Date().getTimezoneOffset() / 60).valueOf();
    let signal: string = '';
    if (tz == 0){
        return 'Z[UTC]';
    } else if (tz > 0){
        signal = '+';
    } else {
        signal = '-';
    }

    return signal + Math.abs(tz).toString().padStart(2,'0') + ':00';
}
