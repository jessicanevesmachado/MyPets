export interface IDog {
  id: number;
  name: string;
  breed: string;
  description: string;
  image: string;
}
export interface IDogPaginantion {
  data: IDog[];
  hasNext: boolean;
  hasPrevious: boolean;
  totalItens: number;
}

export interface RenderDogPaginantion {
  currentPage: number;
  totalItens: number;
}
