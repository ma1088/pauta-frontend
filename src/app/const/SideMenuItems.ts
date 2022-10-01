import { NgClass } from "@angular/common";
import { NovaPautaFormComponent } from "../nova-pauta-form/nova-pauta-form.component";

export class SideMenuItems {
  static getItems(): SideMenuStructure[] {
    return [
        {value: 'Nova Pauta', component: 'nova-pauta-form'}, 
        {value: 'Ver Pautas', component: 'busca-pauta-form'}
      ]
  }

}

export interface SideMenuStructure{
    value: string;
    component: any;
}