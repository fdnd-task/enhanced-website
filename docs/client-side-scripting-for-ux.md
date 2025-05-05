# Enhanced Website

## Client-Side scripting for UX

Over het toepassen van View Transitions als de UI state in je website moet veranderen.

### UX

User Experience (UX) is hoe de gebruiker jouw website ervaart, oftewel de gebruikerservaring. Voor een goede gebruikerservaring moet je ervoor zorgen dat een website technisch goed is gebouwd, én een duidelijke en prettige User interface heeft. Zowel de techniek als het design draagt bij aan een goede UX.

Verschillende principes zijn belangrijk voor een goede UX, zoals Toegankelijkheid, Responsiveness, Progressive Enhancement en de Performance van een website. En in de User Interface (UI) zal je ervoor moeten zorgen dat een gebruiker weet wat die kan verwachten, _feedforward_, en of een interactie is gelukt, _feedback_. Dit noemen we ook wel '_states_'. Elke keer als een gebruiker ergens op klikt, of als er data wordt geladen en het succesvol is gelukt, heeft de gebruiker _feedback_ nodig.

### Aanpak

Deze workshop gaan we met behulp van de _View Transition API_ feedback geven aan de gebruiker als het posten en laden van data is gelukt. Maar eerst gaan we onderzoeken wat _View Transitions_ zijn en wat je er zoal mee kan.

## View Transition API

Met de _View Transition API_ kan je tussen verschillende _views_, oftewel states, animeren. Voorheen was hier veel JavaScript en CSS voor nodig, maar sinds een paar jaar kunnen moderne browsers dit voor jou doen.
Het is een mooie techniek om bijvoorbeeld de resultaten van een filter en sorteer actie te tonen, of de success state van het posten van een bericht te animeren. Of om een overgang tussen twee pagina's te animeren. Een website kan hierdoor sneller aanvoelen (_Perceived Performance_).

<video src="https://github.com/user-attachments/assets/e57ac40e-df8a-4c4a-9c63-84bb47076136" controls></video>

*View transition tussen twee verschillende pagina's - [Getting started with View Transitions on multi-page apps](https://daverupert.com/2023/05/getting-started-view-transitions/)*

Heel kort door de bocht hoe dit werkt: voor elke _View Transition_ maakt de browser een _snapshot_ (een plaatje) van de oude én de nieuwe state. Met CSS kun je bepalen hoe de transition tussen beide snapshots er uit komt te zien. Standaard animeert een browser alleen de `opacity` tussen beide snapshots, waardoor je een _cross-fade_ krijgt. Maar je kunt vrijwel alles aanpassen. Als je weet hoe je keyframe animaties gebruikt in CSS, weet je eigenlijk ook al hoe je View Transitions kunt aanpassen.

Niet elke browser ondersteunt deze nieuwe standaard, maar dit is een perfect voorbeeld van een _Progressive Enhancement_, die je nu al in kunt zetten. Oudere browsers laten gewoon de soepele overgang niet zien.

👉 Adam Argyle heeft een leuke collectie van View Transition demo's: https://codepen.io/collection/GoGOGK — bekijk een aantal voorbeelden en laat je inspireren. Ook https://live-transitions.pages.dev/ is een coole demo van wat kan. Probeer nog niet naar de code te kijken, want we gaan er stap voor stap doorheen.


### Multi-Page transitions

Met de View Transition API kun je vrij gemakkelijk tussen twee pagina's animeren. Dat wordt *cross-document view transitions* of *multi-page transitions* genoemd (voor _Multi-Page Apps, MPAs_). Als je deze CSS toevoegt aan je stylesheet, werkt het al:

```css
@view-transition {
    navigation: auto;
}
```

Standaard krijg je een cross-fade tussen de `root` snapshots van beide pagina's, maar met een beetje CSS kun je dit helemaal aanpassen. Met de `view-transition-name` property kun je de browser verschillende snapshots van verschillende elementen laten maken, en die allemaal op een eigen manier laten animeren.

👉 Gebruik het artikel [Getting started with View Transitions on multi-page apps](https://daverupert.com/2023/05/getting-started-view-transitions/) en MDN om jouw eigen project met multi-page transitions uit te breiden. Je hebt hiervoor geen JavaScript nodig.


#### Bronnen

- [Getting started with View Transitions on multi-page apps](https://daverupert.com/2023/05/getting-started-view-transitions/)
- [Using the View Transition API @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using)
- [Nog wat inspiratie nodig?](https://live-transitions.pages.dev/)


### Single-Page transitions

Je kunt View Transitions ook inzetten om verschillende states op dezelfde pagina (_Single Page Apps, SPAs_) te animeren. Dit is een mooie techniek voor het enhancen van bijvoorbeeld de success state van een POST functionaliteit.

<video src="https://github.com/user-attachments/assets/494cb940-dc89-4e53-afcd-8c0ecd54b7f5" controls></video>

*Met View Transitions wordt duidelijke feedback voor het toevoegen en verwijderen van cards getoond - <a href="https://developer.chrome.com/docs/web-platform/view-transitions/">Smooth transitions with the View Transition API</a>*

Voorheen kon je dit doen met duizenden regels JS en CSS, maar met _View Transitions_ kun je de browser het zware werk laten doen. Je hebt hiervoor één regel JavaScript nodig:

```js
document.startViewTransition(updateFunction)
```

Hiermee laat je de browser een snapshot van de pagina maken, je update functie uitvoeren, en de view transitions tussen beide states uitvoeren. Hoe die transities precies werken, beschrijf je weer in CSS, precies zoals je bij Multi-Page transitions geleerd hebt.

Je hebt hiervoor alleen wel _feature detection_ nodig. Een browser die deze regel niet kent, zal anders een error geven:

```js
if (document.startViewTransition) {
    document.startViewTransition(function() {
        // Verander hier iets in de DOM
    })
} else {
    // Verander hier iets in de DOM
}
```

Het [script dat je in Sprint 9 kreeg](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/client-side-fetch.md#client-side-fetch):

```js
// Overschrijf ons formulier met de nieuwe HTML
// Hier wil je waarschijnlijk de Loading state vervangen door een Success state
form.outerHTML = newState.outerHTML
```

Kun je dus uitbreiden met de volgende success state:

```js
// Overschrijf ons formulier met de nieuwe HTML, met of zonder een View Transition, afhankelijk van de browser
if (document.startViewTransition) {
    document.startViewTransition(function() {
        form.outerHTML = newState.outerHTML
    })
} else {
    form.outerHTML = newState.outerHTML
}
```

Ook hierbij krijg je standaard een cross-fade van de browser, die je helemaal aan kunt passen met CSS.

👉 Combineer dit voorbeeld met de bronnen hieronder, en pas een Single-Page transition toe in jouw eigen success state.


#### Bronnen

- [View Transitions @ 12 Days of Web](https://12daysofweb.dev/2023/view-transitions/)
- [Same-document view transitions for single-page applications @ developer.chrome.com](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
- [View Transition API: Single Page Apps Without a Framework @ DebugBear](https://www.debugbear.com/blog/view-transitions-spa-without-framework)