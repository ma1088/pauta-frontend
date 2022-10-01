import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideMenuComponent} from './side-menu/side-menu.component';
import { NovaPautaFormComponent } from './nova-pauta-form/nova-pauta-form.component';
import { RespostasListComponent } from './nova-pauta-form/respostas-list/respostas-list.component';
import { ConsultaPautaList } from './consulta-pautas-list/consulta-pautas-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideMenuComponent,
    NovaPautaFormComponent,
    RespostasListComponent,
    ConsultaPautaList
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: NovaPautaFormComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
