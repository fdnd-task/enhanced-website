# Enhanced Website

## Responsive Images
Over hoe je images kunt gebruiken in je website volgens het principe van Progressive Enhancement.

Je bent vast wel eens deze twee punten tegengekomen in de lighthouse test:
- [Server images in next-gen formates](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images)
- [Properly size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images)
<!--
## Wat zijn responsive images

Responsive images helpen de browser om het beste plaatje te kiezen voor de eindgebruiker. Daarmee houdt de browser rekening met de internet snelheid, het device en de grootte van het scherm. Wij geven de browser een aantal opties en de browser kiest dan zelf wat de beste is met alle variabelen voor de eindgebruiker. We hebben hiervoor drie opties: `srcset`, `picture` in html en `image-set` in CSS (voor backgrounds).

Dit zorgt voor een betere user experience en performance zie [nummer 21 op de performance checklist](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/#assets-optimizations).

## Opdracht: Formaten en browserondersteuning
- Ga op zoek naar de verschillende image formats ​die we kunnen gebruiken op het web​
- Schrijf ze op het bord, bijv .jpg​ en hoe goed ze ondersteund worden door browsers​

### Srcset

We kunnen srcset gebruiken in een `<img>` element. Hiermee kunnen we de browser vertellen dat we verschillende image formats hebben, verschillende sizes en zelfs welke plaatje we het liefst willen gebruiken voor bepaalde schermgroottes.

[MDN documentatie srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)

### Picture

Picture is een element waar we verschillende `source` aan kunnen meegeven en een default, zodat we de browser op weg helpen met de juiste afbeelding te kiezen. Picture wordt ook veel voor art direction gebruikt. Denk aan een portrait foto die goed werkt op mobiel maar een andere ratio moet krijgen op desktop. 

[MDN documentatie picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)

### Image-set

We kunnen in CSS backgrounds ook responsive images gebruiken dmv image-set. Hier kun je een ook weer een lijstje aan formats meegeven zodat de browser zelf kan kiezen welke het serveert. 

[MDN documentatie image-set](https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set)

## Hoe gebruiken we responsive images

Before:
```
  <img src="plaatje.png" alt="Plaatje" width="400" height="300" decoding="async">
```

After:
```
  <picture>
    <source type="image/avif" srcset="/plaatje.avif, /plaatje@2x.avif 2x">
    <source type="image/webp" srcset="/plaatje.webp, /plaatje@2x.webp 2x">
    <img src="plaatje.png" srcset="plaatje.png 2x" alt="Plaatje" width="400" height="300" decoding="async">
  </picture>
```

#### Opdracht: `picture` element

Demo bouwen met het picture element en fallback 
Ga aan de slag met het bouwen van een demo waar je verschillende 

### Verschillende formats
```
<picture>
  <source srcset="plaatje.avif">
  <source srcset="plaatje.webp">

  <img src="plaatje.jpg" alt="Een plaatje">
</picture>
```


#### Verschillende formats en sizes
```
<picture>
  <source media="(max-width: 600px)" srcset="plaatje-small.avif">
  <source media="(max-width: 800px)" srcset="plaatje-medium.avif">
  <source media="(min-width: 800px)" srcset="plaatje-large.avif">

  <source media="(max-width: 600px)" srcset="plaatje-small.webp">
  <source media="(max-width: 800px)" srcset="plaatje-medium.webp">
  <source media="(min-width: 800px)" srcset="plaatje-large.webp">  

  <img src="plaatje-medium.jpg" alt="Een plaatje">
</picture>
```






###  Resolution switching

Uiteg dat je srcset en sizes kan gebruiken om hogere of lagere resolutie te laden afhankelijk van de het apparaat/schermgrootte.


### Art direction

Uitleg dat je afhankelijk van de schermgrootte een ander plaatje kan tonen. Dit doe je met het media attribute van het source elementen. 



### Opdracht:  Responsive Images met de Directus API

Image Optimization in Directus 
https://learndirectus.com/image-optimization-in-directus/
- Width and Height
- Image Format
- Image Quality



### Bronnen

- [Do we use adaptive media loading and client hints?- Frontend Performance Checklist #21](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/#21)
- [Using responsive images in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [Responsive Images 101, Part 1: Definitions](https://cloudfour.com/thinks/responsive-images-101-definitions/)

-->
