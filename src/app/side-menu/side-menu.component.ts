import { Component } from '@angular/core';
import { SideMenuItems, SideMenuStructure } from '../const/SideMenuItems';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  items = SideMenuItems.getItems();
  selectedItem: string = '';

  public openNav() {
    let docM = <HTMLElement>document.getElementById("mySidenav");
    docM.style.width = "250px";
    let docC = <HTMLElement>document.getElementById("main");
    docC.style.marginLeft = "250px";
  }

  /* Set the width of the side navigation to 0 */
  public closeNav() {
    let docM = <HTMLElement>document.getElementById("mySidenav");
    docM.style.width = "0px";
    let docC = <HTMLElement>document.getElementById("main");
    docC.style.marginLeft = "0px";
  }

  public show(item?: SideMenuStructure) {
    this.selectedItem = item?.component;
  }
}
