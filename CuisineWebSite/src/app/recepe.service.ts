import { Injectable } from '@angular/core';
import { Recepe } from './recepe';

@Injectable({
  providedIn: 'root'
})
export class RecepeService {

  protected RecepeList: Recepe[] = [
    {
      id: 1,
      image: "/assets/img/fondantChocolat.jpg",
      name: "Fondant au chocolat",
      owner: "Titouan",
      type: "Dessert et gateaux",
      cookingTime: "20 min",
      preparationTime: "15 min",
      ingredient: ["200g de chocolat", "100g de beurre", "100g de sucre", "2 œufs", "50g de farine"],
      remark: "Laisser reposer avant de démouler pour éviter qu'il ne se casse.",
      steps: [
        "Préchauffer le four à 180°C.",
        "Faire fondre le chocolat et le beurre.",
        "Mélanger les œufs et le sucre, puis ajouter la farine.",
        "Incorporer le mélange chocolat-beurre.",
        "Verser dans un moule et enfourner pendant 20 minutes."
      ]
    },
    {
      id: 2,
      image: "/assets/img/tarteCitron.jpg",
      name: "Tarte au citron meringuée",
      owner: "Perrine",
      type: "Dessert et gateaux",
      cookingTime: "25 min",
      preparationTime: "30 min",
      ingredient: ["1 pâte sablée", "3 citrons", "150g de sucre", "3 œufs", "50g de beurre", "100g de sucre glace"],
      remark: "Utiliser des citrons bio pour un goût plus naturel.",
      steps: [
        "Précuire la pâte sablée à blanc.",
        "Préparer la crème citron en mélangeant le jus de citron, les œufs, le sucre et le beurre.",
        "Verser la crème sur la pâte et enfourner.",
        "Préparer la meringue avec les blancs d'œufs et le sucre glace.",
        "Étaler la meringue sur la tarte et passer au chalumeau ou au four pour dorer."
      ]
    },
    {
      id: 3,
      image: "/assets/img/macaronFramboise.jpg",
      name: "Macarons à la framboise",
      owner: "Erell",
      type: "Dessert et gateaux",
      cookingTime: "15 min",
      preparationTime: "1h",
      ingredient: ["150g de poudre d'amandes", "150g de sucre glace", "3 blancs d'œufs", "30g de sucre", "Colorant rouge", "Confiture de framboise"],
      remark: "Bien tamiser les poudres pour éviter les grumeaux.",
      steps: [
        "Tamiser la poudre d'amandes et le sucre glace.",
        "Monter les blancs en neige avec le sucre, puis ajouter le colorant.",
        "Incorporer délicatement les poudres tamisées.",
        "Dresser des petits tas sur une plaque et laisser croûter 30 minutes.",
        "Cuire au four à 150°C pendant 15 minutes.",
        "Assembler les macarons avec de la confiture de framboise."
      ]
    },
    {
      id: 4,
      image: "/assets/img/cheesecakeMangue.jpg",
      name: "Cheesecake mangue-passion",
      owner: "Loïc",
      type: "Dessert et gateaux",
      cookingTime: "No bake",
      preparationTime: "45 min",
      ingredient: ["200g de biscuits", "100g de beurre", "300g de fromage frais", "150g de sucre", "2 mangues", "2 fruits de la passion"],
      remark: "Servir bien frais pour une meilleure dégustation.",
      steps: [
        "Écraser les biscuits et les mélanger au beurre fondu.",
        "Tasser dans le fond d'un moule.",
        "Mélanger le fromage frais avec le sucre.",
        "Incorporer la purée de mangue.",
        "Verser sur la base biscuitée et réfrigérer 4h.",
        "Décorer avec des morceaux de mangue et de fruits de la passion."
      ]
    },
    {
      id: 5,
      image: "/assets/img/gateauCarottes.jpg",
      name: "Gâteau aux carottes",
      owner: "Sophie",
      type: "Dessert et gateaux",
      cookingTime: "40 min",
      preparationTime: "20 min",
      ingredient: ["200g de carottes râpées", "150g de farine", "100g de sucre", "2 œufs", "50ml d'huile", "1 c.à.c de cannelle"],
      remark: "Ajouter des noix pour plus de croquant.",
      steps: [
        "Préchauffer le four à 180°C.",
        "Mélanger les œufs et le sucre jusqu'à ce que le mélange blanchisse.",
        "Ajouter l'huile, la farine et la cannelle.",
        "Incorporer les carottes râpées.",
        "Verser dans un moule et enfourner pendant 40 minutes."
      ]
    }
  ];
  
  async getAllRecepes():Promise<Recepe[]>{
    return this.RecepeList
  }
  async getRecepeById(id : number){
    return this.RecepeList.filter(recepe => recepe.id == id)
  }
}
