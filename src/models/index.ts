export interface Receipe {
  name: string;
  description?: string;
  ingridents: Ingredient[];
}

export interface Ingredient {
  amount: string;
  name: string;
}
