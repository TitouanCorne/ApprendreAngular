export interface Recepe {
    id : number; //identifiant unique de la recette
    image : string; 
    name : string;
    owner : string;
    type : string;
    cookingTime : string; //plus pratique de mettre un string plutôt qu'un int
    preparationTime : string;
    ingredient : string[];
    remark : string;
    steps : string[]
}
