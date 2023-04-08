import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AfiliadosComponent } from './pages/afiliados/afiliados.component';
import { NegocioComponent } from './pages/negocio/negocio.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FiltrodosPipe } from './pipes/filtrodos.pipe';
import { FiltrotresPipe } from './pipes/filtrotres.pipe';
import { FiltrocuatroPipe } from './pipes/filtrocuatro.pipe';
import { FiltrocincoPipe } from './pipes/filtrocinco.pipe';
import { FiltroseisPipe } from './pipes/filtroseis.pipe';
import { FiltrosietePipe } from './pipes/filtrosiete.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AfiliadosComponent,
    NegocioComponent,
    FiltroPipe,
    FiltrodosPipe,
    FiltrotresPipe,
    FiltrocuatroPipe,
    FiltrocincoPipe,
    FiltroseisPipe,
    FiltrosietePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
