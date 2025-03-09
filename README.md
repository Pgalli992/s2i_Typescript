---
# s2i_Typescript

## Descrizione
Questo progetto rappresenta un sistema di gestione per un brand di beachwear che utilizza plastica riciclata. Il sistema permette di gestire prodotti, clienti e processi di produzione sostenibile.

## Struttura del Progetto
La struttura del progetto è la seguente:
---
```sh
└── s2i_Typescript/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── classes.ts
    │   ├── main.ts
    │   └── types.ts
    └── tsconfig.json
```

## File Principali
- `src/types.ts`: Contiene le definizioni dei tipi e delle interfacce utilizzate nel progetto.
- `src/classes.ts`: Contiene le classi `Prodotto`, `Cliente` e `ProcessoProduzione` che implementano le interfacce definite in `types.ts`.
- `src/main.ts`: Esegue la logica principale del progetto, istanziando oggetti e testando le funzionalità.

## Installazione
1. Clona il repository:
   ```sh
   git clone <URL_DEL_REPOSITORY>
   ```
2. Installa le dipendenze:
   ```sh
   npm install
   ```

## Compilazione
Per compilare il progetto, esegui:
```sh
npx tsc
```

## Esecuzione
Apri il file `index.html` in un browser per eseguire il progetto.

## Autore
Paolo Galli

## Licenza
ISC
