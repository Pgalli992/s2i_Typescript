import { Cliente, ProcessoProduzione, Prodotto } from "./classes.js";
import {
  TipoProdotto,
  Genere,
  Modello,
  Taglia,
  DisponibilitaProdotto,
  MetodoPagamento,
} from "./types.js";

const prodotto1 = new Prodotto(
  TipoProdotto.Cappello,
  Genere.Unisex,
  Taglia.S,
  "VeRde",
  DisponibilitaProdotto.Disponibile
);
const prodotto2 = new Prodotto(
  TipoProdotto.CostumeDaBagno,
  Genere.Uomo,
  Taglia.M,
  "BLU",
  DisponibilitaProdotto.Esaurito
);
const prodotto3 = new Prodotto(
  TipoProdotto.Pareo,
  Genere.Donna,
  Taglia.L,
  "Mimetico",
  DisponibilitaProdotto.Disponibile
);

const cliente1 = new Cliente(
  "Luca",
  "Rossi",
  "luca.rossi@s2i.com",
  MetodoPagamento.Cash
);
const cliente2 = new Cliente(
  "Eleonora",
  "Verdi",
  "eleonora.verdi@sunnee.it",
  MetodoPagamento.BuyNowPayLater
);

const processoProd1 = new ProcessoProduzione(
  "Fusion",
  "Fusione delle reti da pesca recuperate in mare"
);
const processoProd2 = new ProcessoProduzione(
  "Filtering",
  `Filtraggio dell'acqua per la raccolta delle microplastiche da usare come materiale di produzione`
);
const processoProd3 = new ProcessoProduzione(
  "Waste Recovery",
  "Materiali recuperati dal materiale di scarto degli altri processi di produzione"
);
console.log(processoProd1, processoProd2, processoProd3);

cliente1.ordinaProdotto(prodotto1);
cliente1.ordinaProdotto(prodotto2);
cliente2.ordinaProdotto(prodotto3);

processoProd1.aggiungiProdotto(prodotto1);
