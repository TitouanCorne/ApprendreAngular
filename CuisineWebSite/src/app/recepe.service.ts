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
        type: "Dessert et gâteaux",
        cookingTime: "20 min",
        preparationTime: "15 min",
        ingredient: ["Chocolat noir", "Beurre", "Sucre", "Oeufs", "Farine"],
        remark: "Servir tiède pour un cœur fondant.",
        steps: [
            "Préchauffer le four à 180°C.",
            "Faire fondre le chocolat et le beurre.",
            "Mélanger le sucre et les œufs.",
            "Ajouter la farine, puis le mélange chocolat-beurre.",
            "Cuire pendant 20 minutes."
        ]
    },
    {
        id: 2,
        image: "",
        name: "Tarte au citron meringuée",
        owner: "Perrine",
        type: "Dessert et gâteaux",
        cookingTime: "25 min",
        preparationTime: "40 min",
        ingredient: ["Pâte sablée", "Citron", "Œufs", "Sucre", "Beurre", "Blancs d'œufs"],
        remark: "Laisser reposer 2h avant dégustation.",
        steps: [
            "Préparer la pâte sablée et la cuire à blanc.",
            "Réaliser la crème au citron.",
            "Garnir la tarte avec la crème.",
            "Monter les blancs en neige pour la meringue.",
            "Dorer au chalumeau ou sous le grill."
        ]
    },
    {
        id: 3,
        image: "",
        name: "Macarons à la framboise",
        owner: "Erell",
        type: "Dessert et gâteaux",
        cookingTime: "15 min",
        preparationTime: "1h",
        ingredient: ["Poudre d'amandes", "Sucre glace", "Blancs d'œufs", "Framboises"],
        remark: "Délicat mais délicieux, à préparer la veille.",
        steps: [
            "Mixer et tamiser la poudre d’amandes et le sucre glace.",
            "Monter les blancs en neige ferme.",
            "Incorporer délicatement les ingrédients secs.",
            "Former des petits cercles sur une plaque.",
            "Cuire 12-15 minutes à 150°C.",
            "Garnir avec une ganache framboise."
        ]
    },
    {
        id: 4,
        image: "",
        name: "Cheesecake mangue-passion",
        owner: "Loïc",
        type: "Dessert et gâteaux",
        cookingTime: "10 min",
        preparationTime: "30 min + 4h de repos",
        ingredient: ["Biscuits", "Beurre", "Fromage frais", "Crème", "Mangue", "Fruit de la passion"],
        remark: "Un dessert frais et exotique.",
        steps: [
            "Émietter les biscuits et mélanger avec le beurre fondu.",
            "Tasser dans un moule pour former la base.",
            "Préparer l'appareil au fromage frais.",
            "Verser sur la base et réfrigérer 4h minimum.",
            "Décorer avec des fruits frais."
        ]
    },
    {
        id: 5,
        image: "",
        name: "Gâteau aux carottes",
        owner: "Sophie",
        type: "Dessert et gâteaux",
        cookingTime: "45 min",
        preparationTime: "20 min",
        ingredient: ["Carottes râpées", "Sucre", "Farine", "Oeufs", "Huile", "Cannelle"],
        remark: "Un classique toujours apprécié.",
        steps: [
            "Préchauffer le four à 180°C.",
            "Mélanger les œufs et le sucre.",
            "Ajouter l’huile et les carottes râpées.",
            "Incorporer les ingrédients secs.",
            "Cuire pendant 45 minutes."
        ]
    },
    {
        id: 6,
        image: "",
        name: "Brownie aux noix",
        owner: "Titouan",
        type: "Dessert et gâteaux",
        cookingTime: "25 min",
        preparationTime: "15 min",
        ingredient: ["Chocolat noir", "Beurre", "Sucre", "Oeufs", "Farine", "Noix"],
        remark: "Parfait pour les amateurs de chocolat.",
        steps: [
            "Préchauffer le four à 180°C.",
            "Faire fondre le chocolat et le beurre.",
            "Mélanger le sucre, les œufs et la farine.",
            "Ajouter les noix concassées.",
            "Cuire 25 minutes."
        ]
    },
    {
        id: 7,
        image: "",
        name: "Clafoutis aux cerises",
        owner: "Perrine",
        type: "Dessert et gâteaux",
        cookingTime: "35 min",
        preparationTime: "10 min",
        ingredient: ["Cerises", "Lait", "Œufs", "Sucre", "Farine"],
        remark: "Délicieux tiède ou froid.",
        steps: [
            "Préchauffer le four à 180°C.",
            "Disposer les cerises dans un plat.",
            "Préparer l'appareil à clafoutis.",
            "Verser sur les cerises.",
            "Cuire 35 minutes."
        ]
    },
    {
      id: 8,
      image: "",
      name: "Pancakes moelleux",
      owner: "Erell",
      type: "Petit-déjeuner",
      cookingTime: "15 min",
      preparationTime: "10 min",
      ingredient: ["Farine", "Œufs", "Lait", "Sucre", "Levure chimique"],
      remark: "Parfait pour le petit-déjeuner.",
      steps: [
          "Mélanger les ingrédients secs.",
          "Ajouter les œufs et le lait.",
          "Laisser reposer la pâte 10 minutes.",
          "Cuire à la poêle chaude."
      ]
  },
  {
      id: 9,
      image: "",
      name: "Tiramisu classique",
      owner: "Loïc",
      type: "Dessert et gâteaux",
      cookingTime: "Aucun",
      preparationTime: "20 min + 4h de repos",
      ingredient: ["Mascarpone", "Œufs", "Sucre", "Café", "Biscuits à la cuillère", "Cacao"],
      remark: "Préparer à l'avance pour un goût optimal.",
      steps: [
          "Monter les œufs en neige.",
          "Préparer le mélange mascarpone et sucre.",
          "Tremper les biscuits dans le café.",
          "Monter le tiramisu en couches.",
          "Saupoudrer de cacao et réfrigérer."
      ]
  },
  {
      id: 10,
      image: "",
      name: "Mousse au chocolat",
      owner: "Sophie",
      type: "Dessert et gâteaux",
      cookingTime: "Aucun",
      preparationTime: "15 min + 2h de repos",
      ingredient: ["Chocolat noir", "Œufs", "Sucre"],
      remark: "Laisser reposer au frais.",
      steps: [
          "Faire fondre le chocolat.",
          "Séparer les blancs des jaunes.",
          "Mélanger le chocolat fondu avec les jaunes.",
          "Incorporer les blancs montés en neige.",
          "Réfrigérer 2 heures minimum."
      ]
  },
  {
      id: 11,
      image: "",
      name: "Cookies aux pépites de chocolat",
      owner: "Titouan",
      type: "Dessert et gâteaux",
      cookingTime: "12 min",
      preparationTime: "15 min",
      ingredient: ["Farine", "Sucre", "Beurre", "Œufs", "Pépites de chocolat"],
      remark: "Croquants à l'extérieur, moelleux à l'intérieur.",
      steps: [
          "Préchauffer le four à 180°C.",
          "Mélanger beurre, sucre et œufs.",
          "Ajouter la farine et les pépites.",
          "Former des boules et les disposer sur une plaque.",
          "Cuire 12 minutes."
      ]
  },
  {
      id: 12,
      image: "",
      name: "Madeleines au citron",
      owner: "Perrine",
      type: "Dessert et gâteaux",
      cookingTime: "10 min",
      preparationTime: "15 min",
      ingredient: ["Farine", "Œufs", "Beurre", "Sucre", "Citron"],
      remark: "Un goût subtil de citron.",
      steps: [
          "Préchauffer le four à 200°C.",
          "Mélanger les œufs et le sucre.",
          "Ajouter la farine, le beurre fondu et le zeste de citron.",
          "Remplir les moules à madeleines.",
          "Cuire 10 minutes."
      ]
  },
  {
      id: 13,
      image: "",
      name: "Tarte aux pommes caramélisées",
      owner: "Erell",
      type: "Dessert et gâteaux",
      cookingTime: "25 min",
      preparationTime: "20 min",
      ingredient: ["Pâte feuilletée", "Pommes", "Sucre", "Beurre"],
      remark: "Un dessert classique et délicieux.",
      steps: [
          "Préchauffer le four à 180°C.",
          "Préparer les pommes caramélisées.",
          "Étaler les pommes sur la pâte.",
          "Cuire pendant 25 minutes."
      ]
  },
  {
      id: 14,
      image: "",
      name: "Mille-feuille classique",
      owner: "Loïc",
      type: "Dessert et gâteaux",
      cookingTime: "15 min",
      preparationTime: "45 min",
      ingredient: ["Pâte feuilletée", "Crème pâtissière", "Sucre glace"],
      remark: "Un dessert élégant et raffiné.",
      steps: [
          "Cuire la pâte feuilletée en fines couches.",
          "Préparer la crème pâtissière.",
          "Monter le mille-feuille en couches alternées.",
          "Décorer avec du sucre glace."
      ]
  },
  {
      id: 15,
      image: "",
      name: "Crème brûlée à la vanille",
      owner: "Sophie",
      type: "Dessert et gâteaux",
      cookingTime: "45 min",
      preparationTime: "10 min",
      ingredient: ["Crème", "Vanille", "Jaunes d'œufs", "Sucre"],
      remark: "Caraméliser juste avant de servir.",
      steps: [
          "Préchauffer le four à 150°C.",
          "Mélanger les jaunes d'œufs, le sucre et la crème.",
          "Verser dans des ramequins.",
          "Cuire au bain-marie pendant 45 minutes.",
          "Caraméliser au chalumeau."
      ]
  },
  {
    id: 16,
    image: "",
    name: "Houmous maison",
    owner: "Titouan",
    type: "Apéritif",
    cookingTime: "Aucun",
    preparationTime: "10 min",
    ingredient: ["Pois chiches", "Tahini", "Citron", "Ail", "Huile d'olive"],
    remark: "Servir avec des bâtonnets de légumes ou du pain pita.",
    steps: [
        "Égoutter et rincer les pois chiches.",
        "Mixer avec le tahini, le citron et l'ail.",
        "Ajouter l'huile d'olive et mixer jusqu'à consistance lisse.",
        "Rectifier l'assaisonnement avec du sel."
    ]
},
{
    id: 17,
    image: "",
    name: "Gaspacho andalou",
    owner: "Perrine",
    type: "Entrée",
    cookingTime: "Aucun",
    preparationTime: "15 min",
    ingredient: ["Tomates", "Concombre", "Poivron", "Ail", "Vinaigre", "Pain"],
    remark: "Servir bien frais.",
    steps: [
        "Tremper le pain dans de l'eau.",
        "Mixer les légumes avec l'ail et le vinaigre.",
        "Ajouter le pain ramolli et mixer à nouveau.",
        "Rectifier l'assaisonnement avec du sel et du poivre."
    ]
},
{
    id: 18,
    image: "",
    name: "Salade César",
    owner: "Erell",
    type: "Entrée",
    cookingTime: "10 min",
    preparationTime: "15 min",
    ingredient: ["Laitue romaine", "Poulet grillé", "Croutons", "Parmesan", "Sauce César"],
    remark: "Un classique des salades.",
    steps: [
        "Laver et couper la laitue.",
        "Griller le poulet et le couper en morceaux.",
        "Mélanger tous les ingrédients.",
        "Ajouter la sauce César et servir."
    ]
},
{
    id: 19,
    image: "",
    name: "Curry de légumes",
    owner: "Loïc",
    type: "Plat",
    cookingTime: "30 min",
    preparationTime: "15 min",
    ingredient: ["Carottes", "Courgettes", "Pommes de terre", "Lait de coco", "Épices"],
    remark: "Servir avec du riz basmati.",
    steps: [
        "Couper les légumes en morceaux.",
        "Faire revenir dans une poêle avec les épices.",
        "Ajouter le lait de coco et cuire 30 minutes.",
        "Rectifier l'assaisonnement et servir."
    ]
},
{
    id: 20,
    image: "",
    name: "Quiche lorraine",
    owner: "Sophie",
    type: "Plat",
    cookingTime: "30 min",
    preparationTime: "15 min",
    ingredient: ["Pâte brisée", "Lardons", "Œufs", "Crème fraîche", "Fromage râpé"],
    remark: "Un plat convivial pour toute la famille.",
    steps: [
        "Préchauffer le four à 200°C.",
        "Faire revenir les lardons.",
        "Mélanger les œufs et la crème.",
        "Étaler la pâte dans un moule, ajouter les lardons et le mélange.",
        "Cuire au four pendant 30 minutes."
    ]
},
{
    id: 21,
    image: "",
    name: "Sangria maison",
    owner: "Titouan",
    type: "Boisson",
    cookingTime: "Aucun",
    preparationTime: "10 min + 1h de repos",
    ingredient: ["Vin rouge", "Fruits (oranges, pommes)", "Cognac", "Sucre", "Glaçons"],
    remark: "Un apéritif rafraîchissant.",
    steps: [
        "Couper les fruits en morceaux.",
        "Mélanger tous les ingrédients dans un grand saladier.",
        "Laisser reposer au frais pendant 1 heure.",
        "Servir avec des glaçons."
    ]
},
{
    id: 22,
    image: "",
    name: "Velouté de courge",
    owner: "Perrine",
    type: "Entrée",
    cookingTime: "20 min",
    preparationTime: "10 min",
    ingredient: ["Courge", "Oignons", "Crème fraîche", "Bouillon de légumes"],
    remark: "Délicieux et réconfortant.",
    steps: [
        "Éplucher et couper la courge en morceaux.",
        "Faire revenir les oignons.",
        "Ajouter la courge et le bouillon, cuire 20 minutes.",
        "Mixer et ajouter la crème avant de servir."
    ]
},
{
    id: 23,
    image: "",
    name: "Mojito sans alcool",
    owner: "Erell",
    type: "Boisson",
    cookingTime: "Aucun",
    preparationTime: "5 min",
    ingredient: ["Menthe", "Citron vert", "Eau gazeuse", "Sucre", "Glaçons"],
    remark: "Rafraîchissant et facile à préparer.",
    steps: [
        "Écraser la menthe et le citron avec le sucre.",
        "Ajouter des glaçons.",
        "Compléter avec de l'eau gazeuse et remuer."
    ]
},
{
    id: 24,
    image: "",
    name: "Tartines d'avocat",
    owner: "Loïc",
    type: "Apéritif",
    cookingTime: "Aucun",
    preparationTime: "10 min",
    ingredient: ["Pain grillé", "Avocat", "Citron", "Piment", "Sel"],
    remark: "Idéal pour un apéritif sain.",
    steps: [
        "Écraser l'avocat avec le citron.",
        "Tartiner sur le pain grillé.",
        "Saupoudrer de piment et de sel."
    ]
},
{
    id: 25,
    image: "",
    name: "Lasagnes végétariennes",
    owner: "Sophie",
    type: "Plat",
    cookingTime: "40 min",
    preparationTime: "20 min",
    ingredient: ["Feuilles de lasagnes", "Légumes", "Sauce tomate", "Fromage"],
    remark: "Un plat familial sans viande.",
    steps: [
        "Préchauffer le four à 180°C.",
        "Faire revenir les légumes avec la sauce tomate.",
        "Alterner les couches de lasagnes, légumes et fromage.",
        "Cuire au four pendant 40 minutes."
    ]
},
{
    id: 26,
    image: "",
    name: "Soupe de poireaux",
    owner: "Titouan",
    type: "Entrée",
    cookingTime: "30 min",
    preparationTime: "10 min",
    ingredient: ["Poireaux", "Pommes de terre", "Bouillon de légumes", "Crème"],
    remark: "Parfait pour les soirées d'hiver.",
    steps: [
        "Couper les poireaux et pommes de terre en morceaux.",
        "Faire revenir les poireaux.",
        "Ajouter les pommes de terre et le bouillon, cuire 30 minutes.",
        "Mixer et ajouter la crème avant de servir."
    ]
},
{
    id: 27,
    image: "",
    name: "Cocktail piña colada",
    owner: "Perrine",
    type: "Boisson",
    cookingTime: "Aucun",
    preparationTime: "5 min",
    ingredient: ["Ananas", "Lait de coco", "Glaçons"],
    remark: "Parfait pour une soirée estivale.",
    steps: [
        "Mixer tous les ingrédients.",
        "Servir dans un verre avec une tranche d'ananas."
    ]
},
{
    id: 28,
    image: "",
    name: "Gratin dauphinois",
    owner: "Erell",
    type: "Plat",
    cookingTime: "1 h",
    preparationTime: "15 min",
    ingredient: ["Pommes de terre", "Crème", "Lait", "Ail", "Beurre"],
    remark: "Un plat réconfortant.",
    steps: [
        "Préchauffer le four à 180°C.",
        "Éplucher et couper les pommes de terre en fines rondelles.",
        "Disposer dans un plat beurré, ajouter la crème et le lait.",
        "Cuire 1 heure au four."
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
