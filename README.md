# Performance Matters oba
![CD4C69B9-BB73-4A29-8DE4-C875DC73297C](https://user-images.githubusercontent.com/94745953/236788424-0f177e4b-6cfa-497b-bd35-d4d7246b428f.jpg)

<img width="408" alt="logo-oba" src="https://user-images.githubusercontent.com/94745953/236790054-ef3dbbb0-634b-4ab1-a6fd-4059f59713a7.png">

[Bezoek de oba site](https://uninterested-shirt-seal.cyclic.app/)


##📚 Inhoudsopgave

  * 📝 [Beschrijving](#beschrijving)
  * 🖇 [Gebruik](#gebruik)
  * 🔖 [Kenmerken](#kenmerken)
  * 📲 [Installatie](#installatie)
  * 💾 [Bronnen](#bronnen)
  * 📠 [Licentie](#licentie)


## 📝 Beschrijving
Als team hebben wij een responsive website gebouwd voor onze opdrachtgever Oba waarbij verschillende performance technieken zijn toegepast.
Wij hebben de website gebouwd met server- side code Node en gebruik gemaakt van de API om informatie op te halen zoals boeken, activiteiten en cursussen. 
Voor de client side opmaak hebben wij gebruikt gemaakt van Ejs-HTML, CSS.

[Bezoek de oba site](https://uninterested-shirt-seal.cyclic.app/)

## 🖇 Gebruik

<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
Voor onze groepsopdracht hebben wij besloten om verschillende userstories te gebruiken. 
Wij hebben gebruik gemaakt van een projectboard en daar alle userstories en issues beschreven. 

Userstories: 
- Als gebruiker wil ik makkelijk kunnen navigeren op alle devices
- Als ontwikkelaar wil ik een overzichtelijke stylegids kunnen openen om de huisstijl en het sfeer van Oba te begrijpen en ontwerptaal en ontwerpredenen te definiëren.
- Als gebruiker wil ik een boek/item reserveren 
- Als gebruiker wil ik een studieplek reserveren

## 🔖 Kenmerken

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
Wij hebben gebruikt gemaakt van Node, Ejs-HTML en express, CSS en JavaScript.

Omdat deze leertaak over performace gaat hebben wij de onderstaande metrics aan onze website toegepast.
Voor client side performance: 
-  Assets optimization (responsive images by using modern image extensions zoals  webP, Avif etc)
-  Delivery optmization (lazy load for images)
-  Build optimization

Voor server side performance: 
- LCP (loading)
- FID (interaction)
- CLS (visual stability)

## 📲 Installatie

<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
## NPM
Voordat wij aan dit project gingen werken hebben wij eerst NPM install gedaan omdat we met REST API en Databases gingen werken. Wanneer je npm install uitvoert, leest npm het package.json-bestand in de hoofdmap van je project, dat de afhankelijkheden voor het project vermeldt. Vervolgens downloadt en installeert het die afhankelijkheden in de node_modules map in het project. In de terminal van Visual Studio Code zijn er een aantal commando's voor gebruikt om het NPM init te initialiseren, installeren NPM install en testen met NPM start. In de map Node_Modules hebben wij Nodemon geactiveerd om bij iedere aanpassing die wij hebben opgeslagen in de server te laten verversen. Hiervoor gebruiken wij het commando NPM install Nodemon.

Express is een webframework voor Node.js dat wordt gebruikt voor het bouwen van webapplicaties en API's. EJS is een templating engine die wordt gebruikt voor het genereren van dynamische HTML-pagina's op basis van gegevens vanuit een server. In combinatie worden Express en EJS vaak gebruikt voor het bouwen van dynamische websites

## .gitignore en .env
Voor dit project hebben wij .env gebruikt omdat wij met echte data gingen werken. Om Api key te beschermen hebben wij een .env mapje aangemaakt en daar API key aangekoppeld. Api key van Oba is hierdoor beschermd. Door .env in de gitignore mapje te plaatsen gaat de API key niet mee naar github en is dit niet zichtbaar online.

## Progressive Enhancement
Om ervoor te zorgen dat iedereen toegang heeft tot het project, hebben wij de methode "progressive enhancement" gebruikt. Hierbij hebben we eerst de inhoud van de webpagina opgebouwd met behulp van HTML, geïntegreerd in EJS. Vervolgens heb ik functionaliteit toegevoegd door middel met de GET en POST-methode. Voor CSS hebben we diverse CSS-stijlen gebruikt om de website te stijlen in de huisstijl van OBA. 


## 💾Bronnen


## 📠Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
