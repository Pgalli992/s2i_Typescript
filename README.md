# **s2i_Typescript**

![TypeScript](https://img.shields.io/badge/TypeScript-4.5-blue)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)

## 📜 Descrizione

Questo progetto rappresenta un sistema di gestione per un brand di beachwear che utilizza plastica riciclata. Il sistema permette di gestire prodotti, clienti e processi di produzione sostenibile.

## 📁 Struttura del Progetto

La struttura del progetto è la seguente:

```
.gitignore
index.html
package.json
README.md
tsconfig.json
src/
    classes.ts
    main.ts
    types.ts
```

## 📂 File Principali

- `src/types.ts`: Contiene le definizioni dei tipi e delle interfacce utilizzate nel progetto.
- `src/classes.ts`: Contiene le classi `Prodotto`, `Cliente` e `ProcessoProduzione` che implementano le interfacce definite in `types.ts`.
- `src/main.ts`: Esegue la logica principale del progetto, istanziando oggetti e testando le funzionalità.

## 🛠 Installazione

1. Clona il repository:
   ```sh
   git clone <URL_DEL_REPOSITORY>
   ```
2. Installa le dipendenze:
   ```sh
   npm install
   ```

## 🔧 Compilazione

Per compilare il progetto, esegui:

```sh
npx tsc
```

## 🚀 Esecuzione

Apri il file `index.html` in un browser per eseguire il progetto.

## 👤 Autore

Paolo Galli

## 📄 Licenza

ISC
