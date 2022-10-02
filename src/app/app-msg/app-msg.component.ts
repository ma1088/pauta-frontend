import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-msg',
    templateUrl: './app-msg.component.html',
    styleUrls: ['./app-msg.component.css']
})
export class AppMsg implements OnChanges{
    isHidden: boolean = false;

    @Input() mensagem: string = '';
    ngOnChanges(changes: SimpleChanges): void {
        console.log("de: " + this.mensagem + " para: " + changes);
        this.show();
    }

    hide(){
        this.mensagem = '';
    }
    
    show(){
        console.log("a janela está " + this.isHidden.valueOf);
        this.isHidden = !this.isHidden;
        console.log("a janela ficou " + this.isHidden.valueOf);
    }
}