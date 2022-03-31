import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { RuleComponent } from './rule/rule/rule.component';

const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path: 'rule', component: RuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
