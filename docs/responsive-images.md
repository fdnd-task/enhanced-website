# Enhanced Website

## Responsive Images
Over hoe je images kunt gebruiken in je website volgens het principe van Progressive Enhancement.

# Enhanced Website

## Responsive Images

Over hoe je verschillende image formaten en sizes kunt gebruiken in je website om performant en progresive enhanced te werken. 

<!--
## Opdracht: Formaten en browserondersteuning
- Ga op zoek naar de verschillende image formats ​die we kunnen gebruiken op het web​
- Schrijf ze op het bord, bijv .jpg​ en hoe goed ze ondersteund worden door browsers​

## Wat zijn responsive images

Responsive images helpen de browser om het beste plaatje te kiezen voor de eindgebruiker. Daarmee houdt de browser rekening met de internet snelheid, het device en de grootte van het scherm. Wij geven de browser een aantal opties en de browser kiest dan zelf wat de beste is met alle variabelen voor de eindgebruiker. We hebben hiervoor drie opties: `srcset`, `picture` in html en `image-set` in CSS (voor backgrounds).

Verwerken: Uitgangspunt is het artikeltje op de Frontend Performance Checklist #21 - Do we use adaptive media loading and client hints?

### Srcset

We kunnen srcset gebruiken in een `<img>` element. Hiermee kunnen we de browser vertellen dat we verschillende image formats hebben, verschillende sizes en zelfs welke plaatje we het liefst willen gebruiken voor bepaalde schermgroottes.

#### Verschillende formats
```
<img src="plaatje.jpg"
  alt="Een plaatje"
  srcset="
    plaatje.avif 1000w,
    plaatje.webp 1000w
  "
>
```

#### Verschillende formats en groottes
```
<img src="plaatje-medium.jpg"
  alt="Een plaatje"
  srcset="
    plaatje-large.avif 1000w,
    plaatje-medium.avif 700w,
    plaatje-small.avif 400w,
    plaatje-large.webp 1000w,
    plaatje-large.webp 700w,
    plaatje-large.webp 400w
  "
>
```

#### Verschillende formats, groottes en de browser vertellen welke we het liefst wanneer willen
```
<img src="plaatje-medium.jpg"
  alt="Een plaatje"
  srcset="
    plaatje-large.avif 1000w,
    plaatje-medium.avif 700w,
    plaatje-small.avif 400w,
    plaatje-large.webp 1000w,
    plaatje-large.webp 700w,
    plaatje-large.webp 400w
  "
  sizes="
    (max-width: 600px) 400px,
    (max-width: 800px) 700px,
    100vw
  " 
>
```

### Picture

Picture is een element waar we verschillende `source` aan kunnen meegeven en een default, zodat we de browser op weg helpen met de juiste afbeelding te kiezen. Picture wordt bijv ook veel voor art direction gebruikt. Denk aan een portrait foto die goed werkt op mobiel maar een andere ratio moet krijgen op desktop. 

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


#### Opdracht: `picture` element

Demo bouwen met het picture element en fallback 



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
