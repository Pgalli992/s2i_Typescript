import {
  TipoProdotto,
  Genere,
  Modello,
  Taglia,
  DisponibilitaProdotto,
  MetodoPagamento,
  IProdotto,
  ICliente,
  IProcessoProduzione,
} from "./types";

export class Prodotto implements IProdotto {
  static counter = 1;

  readonly ID: string; // Potrà essere letto ovunque ma mai modificabile.
  public ordinato?: boolean;

  constructor(
    public tipo: TipoProdotto,
    public genere: Genere,
    public taglia: Taglia,
    public colore: string,
    public stato: DisponibilitaProdotto
  ) {
    this.ID = `prod-${Prodotto.counter++}`;
    // ordinato non è nel costruttore - la proprietà rimarrà undefined finchè non verrà specificata.
    this.colore = colore.toLowerCase(); // permetto qualsiasi input e 'normalizzando' il dato non credo duplicati causati dalla capitalizzazione.
  }

  assegnaCliente(cliente: ICliente): void {
    if (this.stato === DisponibilitaProdotto.Disponibile) {
      this.stato = DisponibilitaProdotto.Esaurito;
      this.ordinato = true;
      console.log(
        `Messaggio di sistema: ${this.ID}:${this.tipo}, è stato assegnato a ${cliente.nome} ${cliente.cognome}`
      );
      console.log(
        `Messaggio al cliente: Complimenti ${cliente.nome} ${cliente.cognome}, il tuo ordine contenente ${this.tipo} è stato preso in carico, riceverai la conferma dell'evasione all'indirizzo ${cliente.email}`
      );
    } else {
      console.log(
        `Messaggio al sistema: ${this.ID}:${this.tipo} è esaurito e non può essere assegnato a ${cliente.nome} ${cliente.cognome}`
      );
      console.log(
        `Messaggio al cliente: Spiacenti ${cliente.nome} ${cliente.cognome}, l'articolo non è disponibile. Riceverai una notifica all'indirizzo ${cliente.email} quanto il prodotto sarà nuovamente ordinabile.`
      );
    }
  }
}

export class Cliente implements ICliente {
  private _email!: string; // Definite Assignment Assertions - assicuro che sarà inizializzata prima dell'utilizzo.
  constructor(
    public nome: string,
    public cognome: string,
    email: string,
    public metodoPagamentoPreferito: MetodoPagamento
  ) {
    // this.email senza _ altrimenti bypassa il setter
    this.email = email;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    // controllo del formato email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new Error("Invalid email");
      console.log("Invalid email");
    }
    this._email = value;
  }

  ordinaProdotto(prodotto: IProdotto): void {
    prodotto.assegnaCliente(this); // Utilizzo il metodo della classe Prodotto per non duplicare la logica.
  }
}

export class ProcessoProduzione implements IProcessoProduzione {
  public prodottiInProduzione: IProdotto[] = [];

  constructor(public nomeProcesso: string, public descrizione: string) {}

  aggiungiProdotto(prodotto: IProdotto): void {
    const duplicato = this.prodottiInProduzione.find(
      (prod) => prod.ID === prodotto.ID
    );

    if (duplicato) {
      console.log(
        `${prodotto.ID}: ${prodotto.tipo} è già presente nel processo di produzione: ${this.nomeProcesso}`
      );
    } else {
      this.prodottiInProduzione.push(prodotto);
      console.log(
        `${prodotto.ID}: ${prodotto.tipo} è stato aggiunto al processo di produzione: ${this.nomeProcesso}`
      );
    }
  }
}
