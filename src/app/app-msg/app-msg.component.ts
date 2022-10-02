import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-msg',
    templateUrl: './app-msg.component.html',
    styleUrls: ['./app-msg.component.css']
})
export class AppMsg implements OnChanges{
    isHidden: boolean = false;

    @Input() mensagem = '';

    ngOnChanges(changes: SimpleChanges): void {
        this.show();
    }

    hide(){
        this.mensagem = '';
    }

    show(){
        this.isHidden = !this.isHidden;
    }
}