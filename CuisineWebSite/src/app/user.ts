export interface User {
    id : number; //identifiant unique de l'user (1 : Erell, 2 : Titouan, 3 : Perrine, 4 : Sophie, 5 : Loïc)
    image : string; 
    username : string;
    current: boolean; //true si l'utilisateur est connecté
}
