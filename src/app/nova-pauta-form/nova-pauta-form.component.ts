import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
    selector: 'nova-pauta-form',
    templateUrl: './nova-pauta-form.component.html',
    styleUrls: ['./nova-pauta-form.component.css']
})
export class NovaPautaFormComponent{
    url = environment.apiUrl;
    agora :number = Date.now();
}