export enum TipoProdotto {
  CostumeDaBagno = "costume da bagno",
  Pareo = "pareo",
  Cappello = "cappello",
}

export enum Genere {
  Uomo = "uomo",
  Donna = "donna",
  Kids = "kids",
  Unisex = "unisex",
}

export enum Modello {
  Relax = "relax",
  Active = "active",
  Extreme = "extreme",
}

export enum Taglia {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export enum DisponibilitaProdotto {
  Disponibile = "disponibile",
  Esaurito = "esaurito",
}

export enum MetodoPagamento {
  Cash = "cash",
  CreditCard = "creditCard",
  BuyNowPayLater = "buyNowPayLater",
}

export interface IProdotto {
  ID: string;
  tipo: TipoProdotto;
  genere: Genere;
  taglia: Taglia;
  colore: string;
  stato: DisponibilitaProdotto;
  ordinato?: boolean; // Opzionale per mantenere flessibilità nella logica - undefined.

  assegnaCliente(cliente: ICliente): void;
}

export interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: MetodoPagamento;

  ordinaProdotto(prodotto: IProdotto): void;
}

export interface IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  aggiungiProdotto(prodotto: IProdotto): void;
}
