# Enhanced Website

## Client-Side scripting for UX
Over het toepassen van view-transitions als de UI state in je website moet veranderen.

### UX
User Experience (UX) is hoe de gebruiker jouw website ervaart, oftewel de gebruikerservaring. Voor een goede gebruikerservaring moet je ervoor zorgen dat een website technisch goed is gebouwd en een duidelijke en prettige User interface heeft. Zowel de techniek als het design draagt bij aan een goede UX.

Verschillende principes zijn belangrijk voor een goede UX, zoals toegankelijkheid, progressive enhancement en de performance van een website. En in de User Interface (UI) zal je ervoor moeten zorgen dat een gebruiker weet wat die kan verwachten, feedforward, en of een interactie is gelukt, feedback. Dit noemen we ook wel 'states'. Elke keer als een gebruiker ergens op klikt, of als er data wordt geladen en het succesvol is gelukt, heeft de gebruiker feedback nodig.

### Aanpak

Deze workshop gaan we met behulp van de `view transition API` feedback geven aan de gebruiker als het posten en laden van data is gelukt. Maar eerst gaan we onderzoeken wat _View Transions_ zijn en wat je er zoal mee kan.

## View Transition API

Met de `View Transition API` kan je tussen verschillende _views_, oftewel states, animeren.  Voorheen was hier veel JS en CSS voor nodig, maar sinds een paar jaar kunnen moderne browsers dit voor jou doen.
Een mooie techniek om bijvoorbeeld de resultaten van een filter en sorteer actie te tonen, of de succes state van het posten van een bericht te animeren. 

<video src="https://developer.chrome.com/static/docs/web-platform/view-transitions/video/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/hgnJfPFUbGlucFegEEtl.mp4" controls></video>

*Transitions created with the View Transition API - <a href="https://developer.chrome.com/docs/web-platform/view-transitions/">Smooth transitions with the View Transition API</a>*

Voor een _View Transions_ maakt de browser een _snapshot_ van de oude en de nieuw state. Met CSS kan je bepalen hoe de transitions er uit komen te zien.

👉 Hier een opdrachtje om verschillende kekke View transition voorbeelden te bekijken. Wow kan dat allemaal? Ja dat kan!


### Multi Page transitions
Met de `View Transition API` kan je tussen twee pagina's animeren. Dat wordt *cross-document view transition* of *multi-page transitions* genoemd. In oude browsers bestaat dit niet. 

<!--
Uitleg over hoe dat ongeveer werkt in woorden. 
En in code. 

```
hier een stukkie 'simpele' code

```

👉 Demo opdrachtje doen? 
-->


### Single Page transitions

Je kan de `View Transition API` ook gebruiken voor het animeren van verschillende states op dezelfde pagina. Dit is een mooie techniek voor het enhancen van bijvoorbeeld een POST functionaliteit. 

<video src="https://developer.chrome.com/static/docs/web-platform/view-transitions/video/cards.mp4" controls></video>

*Met View Transitions wordt duidelijke feedback voor het toevoegen en verwijderen van cards getoond - <a href="https://developer.chrome.com/docs/web-platform/view-transitions/">Smooth transitions with the View Transition API</a>*


Voorheen kon je dit doen met 1.000 regels JS en CSS, maar met _View transitions_ kan je dit de browser laten doen, met CSS transities die beter zijn voor de performance, en een goede fallback heeft. CSS wordt niet uitgevoerd als een browser het niet kent!



<!--
Uitleg over hoe dat ongeveer werkt in woorden. 
En in code. 

```
hier een stukkie 'simpele' code

```

👉 Demo opdrachtje doen? Spelen met code zou leuk zijn. 

-->



## POST enhancen met View transitions

Vandaag gaan we view transitions toepassen na het client-side posten (of laden) van content. 

Eerst een schets maken (of Figma) wat je zou kunnen animeren voor de successtate. 

Dan psuedo code schrijven met behulp vane en handige tutorial/bron

Dan coderen...
