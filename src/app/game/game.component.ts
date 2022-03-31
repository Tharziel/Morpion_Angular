import { Component, OnInit } from '@angular/core';
import { Gamelogic } from '../gamelogic';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [Gamelogic],
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {
  }

  startGame(): void{
    this.game.gameStart();
    const currentPlayer = 'C\'est au tour du joueur ' + this.game.currentTurn;
    const information = document.querySelector('.current-status');
    information!.innerHTML = currentPlayer;
  }

  async clickSubfield( subfield: any): Promise<void>{//Permet d'obtenir la position de la case sur la grille
    if (this.game.gameStatus === 1){
      const position = subfield.currentTarget.getAttribute('position');
      
        
      const color = this.game.getPlayerColorClass();
      this.game.setField(position, this.game.currentTurn, color, subfield);

      await this.game.checkGameEndWinner().then((end:boolean)=>{
        if (this.game.gameStatus === 0 && end){
          const information = document.querySelector('.current-status');
          information!.innerHTML = 'Bravo ! Le joueur ' + this.game.currentTurn + " remporte la partie !";
        }
      });
      
      await this.game.checkGameEndFull().then((end:boolean)=>{
        if (this.game.gameStatus === 0 && end){
          const information = document.querySelector('.current-status');
          information!.innerHTML = 'Egalité ! Relancer une partie !';
        }
      });

      this.game.changePlayer();

      if(this.game.gameStatus === 1){
        const currentPlayer = 'C\'est au tour du joueur ' + this.game.currentTurn;
        const information = document.querySelector('.current-status');
        information!.innerHTML = currentPlayer;
      }
    }


  }

  }



