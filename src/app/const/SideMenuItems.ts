export class SideMenuItems {
  static getItems(): SideMenuStructure[] {
    return [
        {value: 'Nova Pauta', component: 'nova-pauta-form'}, 
        {value: 'Ver Pautas', component: 'consulta-pautas-list'}
      ]
  }

}

export interface SideMenuStructure{
    value: string;
    component: any;
}