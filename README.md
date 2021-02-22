# Configuratore Vespa - Secondo progetto di Interactive 3D Graphics

![Anteprima](images/anteprima720.gif)

### Studente:
- Luca Andaloro - 151316

## Descrizione:

L'intero progetto si basa, come da consegna, nel progettare e realizzare un configuratore per prodotto a propria scelta. 
L'idea è stata quella di creare un configuratore per una vespa Piaggio, utilizzando un modello 3D sviluppato per il progetto di Grafica 3D creativa.
Tramite il pannello laterale è possibile cambiare diversi componenti della vespa, in particolare:
- Scocca;
- Manopole;
- Sella;

Inoltre è possibile cambiare l'ambientazione dello sfondo, scegliendo tra:

- Studio
- Garage
- Giardino

## Modello:

Il modello è stato interamente autocostruito durante il corso di Grafica 3D creativa e migliorato/personalizzato per questo progetto.<br />
E' composto da molte parti diverse, inizialamente questo ha portato a un sovvracaricamento di gestione/creazione dei materiali, ma con lo svilupparsi del progetto il problema si è trasformato in un aspetto positivo perchè scosì facendo si ha la possibilità di personalizzare sotto diversi aspetti il prodotto.
![Maya](images/maya.png) <br />
Dopo diversi test il modello è stato esportato e importato nella scena nel formato gltf tramite un plugin extra di Maya, [Verge3D](https://github.com/Interactive3DGraphicsCourse-UNIUD-2020/cubes-lucaandaloro/tree/sviluppo#ottimizzazione)

## Materiali:

All'interno del progetto sono state implementate tre diverse BRDF, che vengono sfruttate in base alla selezione dell'utente, e sono: 

- Glossy reflection mapping con Cubemap
- Textures con Diffuse, Normal, Roughness e Specular
- Microfacets per il metalli (scocca) con colori

Inoltre sono stati creati alcuni materiali senza shaders per le parti che non possono essere personalizzati dell'utente, come per esempio i vetrini del fanale anteriore e posteriore.

## Luci:

Le luci che illuminano "artificalmente" l'oggetto inserite sono 5:

- Luce principale che viene utilizzate anche all'interno delle BRDF con textures e Lambertiana
- 3 luci spotlight che vengono utilizzate nell'ambiente Studio per illuminarlo, creare le ombre e dare un effetto set fotografico
- Luce ambientlight che può essere abilitata e disabilitata deall'utente, per sempio per vedere meglio alcuni particolari della Vespa

Invece la tecnica utilizzata per illuminare "naturalmente" l'oggetto sono:

- L'utillizo delle Envoriment Maps con ambientazione per la parte di Glossy
- Invece per la parte di Studio una Irradince Map che illumina alcuni particolare riflettenti (come per esempio la cornice laterale)

## Ambienti:

Per la parte degli ambienti durante lo sviluppo del progetto sono state effettaute diverse prove per trovare l'ambientazione giusta, l'idea era quella di posizionare la vespa  in un studio fotografico o salone di esposizione.
Infine sono state scelte tre ambientazioni diverse:

- Studio: è stato creato uno studio "artificale" trammi un cubo viene ricreata la stanza e un piano il pavimento di appoggio
- Garage: utilizzado le cubemaps è stato creato un ambiente a forma di garage
- Giardino: utilizzado sempre le cubemaps è stato creata una ambientazione in un giardino 

## Sviluppi futuri:

Il progetto potrebbe essere ampliato aggiungendo nuove personalizzazioni per altri componenti, come per esempio la possibilità di personalizzare i cerchi, le gomme, aggiungere colori etc...

## Struttura:

* `./README.md` -> File che si sta consultando e contiene una breve descrizione del progetto
* `./index.html` -> Homepage del sito web
* `./configuratore.html` ->  File  del configuratore, contiente tutti Shaders
* `./journal.md` -> Diario giornaliero dei lavori e test svolti
* **`./js`** -> Contiene tutti i file js del progetto
  * `./js/main.js` ->  File principale dove vengono richiamate tutte le funzioni per la creazione degli elementi
  * `./js/modello.js` -> Carica l'intero modello 3D, suddivide le varie parti e assegna i materiali
  * `./js/cambiaAmbiente.js` -> Contiene la funzione per cambiare la environment map
  * `./js/cambiaManopola.js` -> Contiene la funzione per cambiare i materiali della manopola
  * `./js/cambiaScocca.js` -> Contiene la funzione per cambiare i materiali della scocca
  * `./js/cambiaSella.js` -> Contiene la funzione per cambiare i materiali della sella
  * `./js/materiali.js` -> Contiene tutti i materiali di tutto il progetto che vengono richiesti tramite la funzione `getMateriale()`
* **`./textures`** -> Contiene tutte le texture utilizzate nel progetto (Sia le cubemaps, che le varie textures)
* **`./modello_3d`** -> Contiene i file `.bin` e `.gltf` del modello 3D
* **`./images`** -> Contiene tutti i file multimediali del progetto, sia per la parte del sito web sia per il file readme.md
* **`./css`** -> Contiene i file di stile del sito web


## Strumenti Utilizzati
- **Software**
  - Maya
  - VS Code
  - Safari
  - Photoshop
  - GitHub Desktop
  

- **Hardware:**
  - Portatile: MacBook Pro (15-inch, 2018)
  - CPU: 2,6 GHz Intel Core i7 6 core
  - Scheda grafica: Radeon Pro 560X 4 GB / Intel UHD Graphics 630 1536 MB
  - RAM: 16 GB 2400 MHz DDR4


- **Framework:**
  - [Ulkit](https://getuikit.com)
 

## Credits

- **Textures**
  - [cc0textures](https://www.cc0textures.com)
  - [textures.com](https://www.textures.com)

- **Cubemaps:**
  - [humus](http://www.humus.name/)
  - [hdrihaven](https://hdrihaven.com)
