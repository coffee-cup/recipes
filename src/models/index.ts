export interface Receipe {
  name: string;
  description?: string;
  ingridents: string;
  method: string;
}

export interface Ingredient {
  amount: string;
  name: string;
}
