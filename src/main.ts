// Istanzia alcuni oggetti Prodotto per rappresentare i diversi articoli di beachwear prodotti con plastica riciclata.

import { Cliente, ProcessoProduzione, Prodotto } from "./classes";
import {
  TipoProdotto,
  Genere,
  Modello,
  Taglia,
  DisponibilitaProdotto,
  MetodoPagamento,
} from "./types";

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
console.log(prodotto1, prodotto2, prodotto3);

// Istanzia oggetti Cliente per rappresentare i clienti del brand.

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
// const cliente3 = new Cliente(
//   "Giovanni",
//   "Bianchi",
//   "f",
//   MetodoPagamento.CreditCard
// );
console.log(cliente1, cliente2);
// console.log(cliente3)

// Crea un'istanza della classe ProcessoProduzione per uno o più processi di produzione sostenibile utilizzati dal brand, aggiungendo i prodotti istanziati al processo.

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

// Testa la logica:
// 1. Ordinazione dei prodotti da parte dei clienti.

cliente1.ordinaProdotto(prodotto1); // "Complimenti Luca Rossi, il tuo ordine contenente cappello è stato preso in carico, riceverai la conferma dell'evasione all'indirizzo luca.rossi@s2i.com"
console.log(prodotto1.stato); // "esaurito"

cliente1.ordinaProdotto(prodotto2); // "Spiacenti Luca Rossi, l'articolo non è disponibile. Riceverai una notifica all'indirizzo luca.rossi@s2i.com quanto il prodotto sarà nuovamente ordinabile."

cliente2.ordinaProdotto(prodotto3); // "Complimenti Eleonora Verdi, il tuo ordine contenente pareo è stato preso in carico, riceverai la conferma dell'evasione all'indirizzo eleonora.verdi@sunnee.it"
console.log(prodotto3.stato); //// "esaurito"

// 2. Aggiunta di nuovi articoli ai processi di produzione.

processoProd1.aggiungiProdotto(prodotto1);

console.log(prodotto1, prodotto2, prodotto3);
