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

export interface IPaginantion {
  currentPage: number;
  totalItens: number;
}

export interface IPaginantionButton {
  hasNext: boolean;
  hasPrevious: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
}
