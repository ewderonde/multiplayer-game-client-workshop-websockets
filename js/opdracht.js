// Bij deze opdracht ga je ervoor zorgen dat de server de movement van je personage binnenkrijgt.
// Op de server is er een event genaamd "keyPress" die luistert naar inkomende berichten.

// De key inputs die de server verwacht zijn:
// - up
// - down
// - left
// - right
// - attack

// Jij kan zelf bepalen welke toetsen je gaat gebruiken voor het lopen en schieten. (W A S D & Linker muisknop voor schieten bijvoorbeeld. 
// Wellicht handiger om een key op je toetsenbord te kiezen voor het schieten, als je alleen een trackpad hebt.)
// De client geeft alleen aan de server door dat hij een bepaalde actie aan het verichten is, maar de client zegt niet hoe snel hij loopt, of hoeveel kogels hij schiet.
// Dit wordt namelijk op de server afgehandeld.

// Dus: jij moet in de client keypresses afvangen en dat doorsturen naar de server.

// Voorbeeld:
    //if (toets wordt ingedrukt) {
        // socket.emit('keyPress', { input: "up", state:true})
    // }

// Zoals je ziet wordt er bij de tweede parameter van de emit() functie een object meegegeven. 
// "input" geeft aan om welke actie het gaat en "state" geeft aan of die actie momenteel wordt uitgevoerd of dat de toets is losgelaten.
// Naast dat je aangeeft dat er een toets wordt ingedrukt, moet je ook laten weten wanneer je die toets weer loslaat.
// (Anders blijf je bijvoorbeeld naar links lopen, omdat je niet aan de server hebt laten weten dat je de toets hebt losgelaten)


