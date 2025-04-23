# Enhanced Website

## Responsive Images
Over hoe je images kunt gebruiken in je website volgens het principe van Progressive Enhancement.

Je bent vast wel eens deze twee punten tegengekomen in de lighthouse test:
- [Serve images in next-gen formates](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images)
- [Properly size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images)

## Wat zijn responsive images

Responsive images helpen de browser om het beste plaatje te kiezen voor de eindgebruiker. Daarmee houdt de browser rekening met de internet snelheid, het device en de grootte van het scherm. Wij geven de browser een aantal opties en de browser kiest dan zelf wat de beste is met alle variabelen voor de eindgebruiker. We hebben hiervoor drie opties: `srcset`, `picture` in html en `image-set` in CSS (voor backgrounds).

Dit zorgt voor een betere user experience en performance zie [nummer 21 op de performance checklist](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/#assets-optimizations).

### Picture

Picture is een element waar we verschillende `<source>` elementen aan kunnen meegeven en een default, zodat we de browser op weg helpen met de juiste afbeelding te kiezen. Picture wordt ook veel voor art direction gebruikt. Denk aan een portrait foto die goed werkt op mobiel maar een andere ratio moet krijgen op desktop. 

[MDN documentatie picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)

### Srcset

We kunnen srcset gebruiken in `<img>` en in `<source>` elementen. Hiermee kunnen we de browser vertellen dat we verschillende afbeeldingsformaten hebben zodat het zelfde de juiste keuze kan maken.

[MDN documentatie srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)

### Image-set

We kunnen in CSS backgrounds ook responsive images gebruiken dmv image-set. Hier kun je een ook weer een lijstje aan formats meegeven zodat de browser zelf kan kiezen welke het serveert. 

[MDN documentatie image-set](https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set)

## 👉 Opdracht: Formaten en browserondersteuning
- Ga op zoek naar de verschillende image formats ​die we kunnen gebruiken op het web​
- Schrijf ze op het bord, bijv .jpg​ en hoe goed ze ondersteund worden door browsers​

## Hoe gebruiken we responsive images

Before:
```
  <img src="plaatje.png" alt="Plaatje" width="400" height="300" decoding="async">
```

After:
```
  <picture>
    <source type="image/avif" srcset="plaatje.avif">
    <source type="image/webp" srcset="plaatje.webp">
    <img src="plaatje.png" alt="Plaatje" width="400" height="300" decoding="async">
  </picture>
```

### 👉 Opdracht: `picture` element

🛠️ Maak een demo met het picture element, waar je verschillende formaten gebruikt. Kijk in de network tab welke afbeelding er wordt gekozen. Test dit ook met een oude browser via browserstack. Wat zijn de verschillen?

💪 **Voor de hardlopers**

👉 Je kunt met javascript en de [`.currentSrc`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/currentSrc) de source van het gekozen plaatje console.loggen of nog beter een paragraaf neerzetten en de `textContent` veranderen, zodat je het makkelijker ziet.

###  👉 Opdracht: Resolution switching

Je kunt met het media attribuut in het picture element verschillende sizes van dezelfde afbeelding laten tonen. Een extra laag van progressive enhancement. Dit gaat verder dan alleen de width media query, je kunt de hele lijst aan [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) gebruiken. Daarnaast kun je ook rekening houden met de hoeveelheid DPR van de eindgebruiker. 

```
  <picture>
    <source media="(min-width: 600px)" type="image/avif" srcset="plaatje-groot.avif">
    <source type="image/avif" srcset="plaatje.avif, plaatje@2x.avif 2x">
    <source type="image/webp" srcset="plaatje.webp, plaatje@2x.webp 2x">
    <img src="plaatje.png" srcset="plaatje.png 2x" alt="Plaatje" width="400" height="300" decoding="async">
  </picture>
```

🛠️ Maak een tweede demo waar je ten minste drie verschillende media queries toepast.

💪 **Voor de hardlopers**

👉 Je kunt met `.currentSrc` en het [MediaQueryList change](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event) event de source an het gekozen plaatje tonen terwijl je je scherm resized. 


### 👉 Opdracht: Art direction

We hebben nu voornamelijk gekeken naar dezelfde afbeelding serveren op verschillende formaten voor performance en progressive enhancement redenen. Waar het picture element ook veel voor wordt gebruikt is art direction. Een afbeelding die op een breed landscape scherm, goed werkt werkt wellicht juist op een smal portrait scherm, weer minder goed. Door goed na te denken over de art direction van je afbeeldingen kun je de beste versie meegeven voor de eindgebruiker.

```
  <picture>
    <source media="(orientation: portrait)" type="image/avif" srcset="plaatje-portait.avif" width="300" height="400">
    <source type="image/avif" srcset="plaatje.avif">
    <source type="image/webp" srcset="plaatje.webp">
    <img src="plaatje.png" alt="Plaatje" width="400" height="300" decoding="async">
  </picture>
```

🛠️ Maak een derde demo waar je art direction toepast. 


### Opdracht: Responsive Images met de Directus API in je project

Je kunt met directus verschillende bestandsformaten en groottes opvragen om met responsive images aan de slag te gaan. Waarschijnlijk heb je nu zoiets als:

`<img src="https://fdnd-agency.directus.app/assets/{{ bla.image }}" alt="alt text">`

Dat kun je dan nu gaan upgraden met de tests die je hierboven hebt gemaakt naar:

```
<picture>
   <source type="image/avif" srcset="https://fdnd-agency.directus.app/assets/{{ bla.image }}?format=avif">
   <source type="image/webp" srcset="https://fdnd-agency.directus.app/assets{{ bla.image }}?format=webp">
   <img src="https://fdnd-agency.directus.app/assets/{{ bla.image }}" alt="alt text">
</picture>
```

Lees de documentatie hoe je de width, height, quality en meer kan opvragen.

🛠️ Ga in je project aan de slag met responsive images, en alle bovenstaande demo's die je hebt gemaakt. Maak een issue over responsive images, analyseer het 'probleem' in je project, doe een lighthouse performance test vooraf en een test achteraf bij het laatste onderdeel. 

### Bronnen

- [Do we use adaptive media loading and client hints?- Frontend Performance Checklist #21](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/#21)
- [Using responsive images in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [Responsive Images 101, Part 1: Definitions](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Image optimization in Directus](https://learndirectus.com/image-optimization-in-directus/)
- [Transform files with Directus](https://directus.io/docs/guides/files/transform)
