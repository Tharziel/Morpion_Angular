import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { MatButtonModule} from '@angular/material/button';
import { RuleComponent } from './rule/rule/rule.component'; //IMport de module pour styliser

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    RuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, //ON ajoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
