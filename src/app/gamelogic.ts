import { Status } from './gamestatus';

export class Gamelogic {
    
    gameField: Array<number> = [];


    currentTurn: number;
    gameStatus: Status;
    
    winSituationsOne: Array<Array<number>> = [
        [1, 1, 1, 0, 0, 0, 0, 0, 0],//Victoire en ligne
        [0, 0, 0, 1, 1, 1, 0, 0, 0],//Victoire en ligne
        [0, 0, 0, 0, 0, 0, 1, 1, 1],//Victoire en ligne
        [1, 0, 0, 1, 0, 0, 1, 0, 0],//Victoire en colonne
        [0, 1, 0, 0, 1, 0, 0, 1, 0],//Victoire en colonne
        [0, 0, 1, 0, 0, 1, 0, 0, 1],//Victoire en colonne
        [0, 0, 1, 0, 1, 0, 1, 0, 0],//Victoire en diagonale
        [1, 0, 0, 0, 1, 0, 0, 0, 1],//Victoire en diagonale
        [1, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 1],
        [0, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 1, 0, 0],//LAAAAAAAAAAA je copie colle d'ici
        [1, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 0, 0, 1],
        [0, 0, 1, 1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 1, 1, 0, 1],
        [0, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 0],
        [1, 1, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 1, 1]

        
    ];

    winSituationsTwo: Array<Array<number>> = [
        [2, 2, 2, 0, 0, 0, 0, 0, 0],//Victoire en ligne
        [0, 0, 0, 2, 2, 2, 0, 0, 0],//Victoire en ligne
        [0, 0, 0, 0, 0, 0, 2, 2, 2],//Victoire en ligne
        [2, 0, 0, 2, 0, 0, 2, 0, 0],//Victoire en colonne
        [0, 2, 0, 0, 2, 0, 0, 2, 0],//Victoire en colonne
        [0, 0, 2, 0, 0, 2, 0, 0, 2],//Victoire en colonne
        [0, 0, 2, 0, 2, 0, 2, 0, 0],//Victoire en diagonale
        [2, 0, 0, 0, 2, 0, 0, 0, 2],//Victoire en diagonale
        [2, 0, 2, 0, 2, 0, 2, 0, 0],
        [2, 0, 2, 0, 2, 0, 0, 0, 2],
        [0, 0, 2, 0, 2, 0, 2, 0, 2],
        [2, 0, 0, 0, 2, 0, 2, 0, 2],
        [2, 0, 0, 2, 0, 0, 2, 2, 2],
        [2, 2, 2, 2, 0, 0, 2, 0, 0],
        [0, 0, 2, 0, 0, 2, 2, 2, 2],
        [2, 2, 2, 0, 0, 2, 0, 0, 2],
        [2, 2, 2, 2, 0, 0, 2, 0, 0],//LAAAAAAAAAAA je copie colle d'ici
        [2, 0, 0, 2, 2, 0, 0, 0, 2],
        [2, 0, 0, 0, 2, 2, 0, 0, 2],
        [0, 0, 2, 2, 2, 0, 2, 0, 0],
        [0, 0, 2, 0, 2, 2, 2, 0, 0],
        [0, 2, 2, 0, 2, 0, 2, 0, 0],
        [0, 0, 2, 0, 2, 0, 2, 2, 0],
        [2, 2, 0, 0, 2, 0, 0, 0, 2],
        [2, 0, 0, 0, 2, 0, 0, 2, 2],
        [2, 2, 0, 0, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 2, 0, 0, 2, 2],
        [2, 0, 2, 0, 2, 0, 2, 2, 0],
        [0, 2, 2, 0, 2, 0, 2, 0, 2],
        [2, 0, 2, 2, 2, 0, 0, 0, 2],
        [0, 0, 2, 2, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 2, 2, 2, 0, 0],
        [2, 0, 0, 0, 2, 2, 2, 0, 2],
        [0, 0, 2, 0, 2, 0, 2, 2, 2],
        [2, 0, 2, 2, 2, 0, 2, 0, 0],
        [2, 2, 2, 0, 2, 0, 0, 0, 2],
        [2, 0, 2, 0, 2, 2, 0, 0, 2],
        [2, 0, 0, 2, 2, 0, 2, 0, 2],
        [2, 2, 2, 0, 2, 0, 2, 0, 0],
        [0, 0, 2, 0, 2, 2, 2, 0, 2],
        [2, 0, 0, 0, 2, 0, 2, 2, 2],
        
        
        
    ];


    public constructor(){
        this.currentTurn = this.randomPlayerStart();
        this.gameStatus = Status.STOP;
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //Représente la grille mais sur un seul tableau
 
        
    }

    gameStart(): void {//Fonction de démarrage du jeu
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //Reset de la grille (en cas de recommencement, bug ou autre)

        this.currentTurn = this.randomPlayerStart(); //Détermine le premier joueur à commencer
        
        this.gameStatus = Status.START;
    }

    randomPlayerStart(): number{ //Génère un nombre (1 ou 2)
        const startPlayer = Math.floor(Math.random() *2) +1;
        return startPlayer;
    }

    setField(position: number, value: number, color: string, subfield: any): void {
        if (this.gameField[position] != 0){ //Fonction que je fais
            console.log('Cette case est déjà occupée !');
            this.changePlayer();
        } else {
            console.log(this.currentTurn ); 
            this.gameField[position] = value;
            subfield.currentTarget.classList.add(color);
            console.log(this.currentTurn ); 
        }    
    }

    getPlayerColorClass(): string { //Obtenir la classe du joueur
        const colorClass = (this.currentTurn === 2) ? 'player-two' : 'player-one';
        return colorClass;
    }

    changePlayer(): void{
        this.currentTurn = (this.currentTurn === 2) ? 1 : 2; //Change le tour des joueurs
    }

    arrayEquals(a: Array<any>, b:Array<any>): boolean{
        return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((value, index) => value === b[index]);
    }

    async checkGameEndWinner(): Promise<boolean> {//Check si la grille est avec un joueur vainqueur
        let isWinner = false; 

        const checkarray = (this.currentTurn === 1) ? this.winSituationsOne : this.winSituationsTwo;

        const currentarray:any = [];

        this.gameField.forEach( (subfield, index) =>{
            if (subfield !== this.currentTurn){
                currentarray[index] = 0;
            } else {
                currentarray[index] = subfield;
            }
        });

        checkarray.forEach((checkfield, checkindex) =>{
            if (this.arrayEquals(checkfield, currentarray)){
                isWinner = true;
            }else{
                console.log("an");
            }
        });

        console.log(currentarray);
        if(isWinner) {
            
            this.gameEnd();
            return true;
        } else {
            return false;
        }
    }

    async checkGameEndFull(): Promise<boolean> {//Check si la grille est sans aucun joueur vainqueur
        let isFull = true;
        if(this.gameField.includes(0) ){
            isFull = false;
        }

        if(isFull) {
            console.log('plein !');
            this.gameEnd();
            return true;
        } else {
            return false;
        }
    }

    gameEnd(): void{
        this.gameStatus = Status.STOP;
    }
}
