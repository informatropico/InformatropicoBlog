---
title: "STMS 001"
subtitle: "Presentazione"
abstract: "Come voglio condurre questo esperimento e dove voglio arrivare"
date: 2021-10-15
draft: false
layout: devPost.hbs
---

Scrivere codice è frustrante, se come me lo avete fatto alle superiori e ora lo state riprendendo in mano dopo anni diventa estremamente frustrante.
Lì fuori, nell'internet, è pieno di "Hello World" e "Todo List" da far venire i capelli bianchi.
Appena provi a mettere il naso in qualcosa di un po' più complesso la complessità ti esplode in faccia. Bisogna fare mille scelte che puoi fare se sai già quello che vuoi ottenere, che è una cosa che ovviamente se sei all'inizio non sai.
Ci sono miriadi di framework, belli per chi sa come funzionano le cose ma pessimi per chi vuole scoprirlo o impararlo, ognuno dei quali asserisce di essere il migliore e bisognerebbe impararli tutti per sapere se dicono la verità. Tecnologie, linguaggi, approcci e chi più ne ha più ne metta.

Non vi sentite frustrati anche voi?

Ecco, quindi eccomi qui: ho una base scolastica di programmazione ad oggetti, da molto tempo mi occupo di analisi e quindi sono rimasto lontano dal codice. Qualcosa nel tempo ho intuito ma non ci ho mai messo la testa più di tanto.

Quello che volgio fare è esplorare partendo da poche assunzioni e da obiettivi molto ampi e vedere se una persona da sola può riuscire a costruire qualcosa di un po' di più di una Todo list: ho disegnato una sorta di meta-roadmap che vorrei provare ad applicare per questo esperimento.

![Meta-Roadmap](../assets/images/stms001.jpg "La mia meta-roadmap")

A questo punto è il caso che vi descriva il progetto che voglio creare e i vincoli che mi sono imposto per trovare un punto di partenza.
In questa serie vorrei sviluppare un sistema denominato STMS - Scrum Team Management System, ovvero un sistema in grado di gestire tutte le attività e gli artefatti di un team che applica la metodologia Scrum. Ho scelto così perchè mi sembra abbastanza ampio ma non troppo imponenente, con una sufficiente varietà di caratteristiche da potermi permettere di esplorare diversi aseptti tecnolgici ed infine abbastanza morbido da permettermi di dargli forma per soddisfare le esigenze tecniche che potrò incontrare.

Veniamo ora ai paletti che ho fissato: so di essere una persona interessata al mondo backend e architetturale, quindi ho preso la decisione drastica do non occuparmi minimamente del frontend ma di avere come punto di interfaccia con il sistema solo l'insieme delle sue API. Questa scelta non è corretta, anche alla luce delle metodologie che voglio imparare, ma era necessaria per poter iniziare ad occuparmi delle cose che mi interessando di più. Potrei tenerne conto in fase di progettazione e analisi, ma non ci saranno implementazioni.
L'"ambiente" che ho deciso di utilizzare è quello di casa Microsoft, quindi .NET Core + C#. Non ho intenzione di utilizzare software disponibili solo per Windows ma voglio creare una applicazione in grado di essere sviluppata su qualsiasi macchina, quindi ho escluso Visual Studio in favore di Visual Studio Code.

Questo è quanto voglio dirvi per il momento: come vi dicevo prima so che voglio andare a immergermi in ambiti architetturali e quindi mi aspetto di qui a breve di iniziare a parlare di DDD, Clean Architecture, CQRS, Code di messaggi, Eventi, Servizi ecc. Ma non so come, quando e in che modo. Il punto fondamentale è provare a partire e farsi guidare un po' dal problema e un po' dalla tecnologia, piccoli passi alla volta. Il fioretto che faccio è quello di provare a costruire un branch per ogni cerchietto della mia meta-roadmap in modo che resti traccia di tutto ([STMS](https://github.com/informatropico/STMS "Repository su GitHub")).

## Il primo pallino verde
Il sistema ancora non esiste ma per crearlo bisogna definire un contorno funzionale minimo che ci permetta di costruire qualcosa.
*Scrum* è una metodologia (o un framework) applicabile da Team "Agili", si fonda sui concetti di **"iterazione"** e **"incremento"** e fornisce una filosofia di cui magari parleremo più avanti, un po' per ogni capitolo. Uno degli artefatti fondamentali è il **Product Backlog**, un contenitore ordinato e prioritizzato di elementi (che chiamiamo **PBI - Product Backlog Item**) necessari per il completamento del prodotto. Approfondiremo la forma dei PBI e le caratteristiche del Backlog ma per questo inizio sarà sufficiente poter disporre di un Backlog per ogni prodotto che il team deve realizzare e poter aggiungere/modificare/eliminare PBI da questi backlog. Per il momento possimao ritenere sufficiente descrivere il backlog con il nome del prodotto che supporta e i PBI con un titolo. Mi sembra scontato dire che un PBI può appartenere ad un solo Backlog.

## Next step
Il punto di partenza sarà quindi una webapi che ci permetterà di fare qualcosa sul nostro sistema neonato, ovvero creare un product backlog e inserirci dentro degli item.
Come? Adesso ci provo e poi vi scrivo.

A presto.