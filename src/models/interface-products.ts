export interface Product {
    title : string;
    description : string;
    picture : string[];
    id : string;
    price : number;
    category : string;
    state : string;
    createdAt : Date;
    availability : Availability;
    city : string;
    averageStar : number;
}
export interface Availability {
    available : boolean; // Si le produit est disponible ou non
    type : string; //Comment l'acquerir(livraison...)
    feed ?: number; //elle est optionnelle, pas obligatoire
}