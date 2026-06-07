import type { CampsiteConfig } from "../types";

/**
 * Camping Bodner — Afritz am See (Gegendtal), Kärnten.
 * Alle Texte/Fakten belegt aus camping-bodner.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Bodner-Fotos in /public/campsites/camping-bodner/.
 * EHRLICH: Platz liegt DIREKT am Afritzer See mit eigenem Seezugang (Quelle:
 * Meta-Beschreibung + Über-uns + Preise/Info "Eigener Seezugang"). Reines
 * Camping — KEINE Mobilheime/Zimmer auf der Quelle → mobilheime-Sektion entfällt.
 * Reale Preisliste 2026 vorhanden → pricesArePlaceholder=false. Koordinaten
 * stammen aus der gescrapten Kontakt-Karte (nicht erfunden). Keine belegbare
 * Auszeichnung → awards leer.
 * Nur 10 belegte Fotos → die Bento-Galerie (braucht 4) bleibt leer und blendet
 * sich ehrlich aus; die Lifestyle-Aufnahmen laufen stattdessen in der
 * Aktivitäten-Sektion. So bleibt jede sichtbare Sektion sauber gefüllt.
 */
const IMG = "/campsites/camping-bodner";

export const campingBodner: CampsiteConfig = {
  name: "Camping Bodner",
  shortName: "Bodner",
  slug: "camping-bodner",
  ort: "Afritz am See",
  region: "Kärnten",
  brandKind: "Camping",
  see: "Afritzer See",
  regionLong: "Gegendtal · Afritz am See · Kärnten · Österreich",

  claim: "Familiärer Campingurlaub direkt am Afritzer See",
  claimEmphasis: "am Afritzer See",
  intro:
    "Zwischen Bergen und Seen im landschaftlich schönen Gegendtal: unser familiär geführter Campingplatz mit eigenem Seezugang am klaren Afritzer See — ein Platz für Zelt, Caravan und Wohnmobil.",

  statement: {
    text:
      "Campen bei Freunden — bei uns ist Urlaub familiär, naturnah und mitten im Kärntner Gegendtal.",
    emphasis: "Campen bei Freunden",
  },

  pillars: [
    {
      title: "Direkt am Afritzer See",
      text:
        "Eigener Seezugang mit abgegrenztem Badebereich — Badeerlebnis im klaren Wasser des Afritzer Sees, gleich vor dem Stellplatz.",
      image: { src: `${IMG}/see-afritzer-see.webp`, alt: "Stellplätze von Camping Bodner mit Blick über den Afritzer See und die Berge" },
    },
    {
      title: "Familiäre Atmosphäre",
      text:
        "Ein familiär geführter Platz zwischen Bergen und Seen — ob mit Zelt, Caravan oder Wohnmobil, einen Platz bekommt bei uns jeder.",
      image: { src: `${IMG}/camping-am-see-luft.webp`, alt: "Luftaufnahme des Campingplatzes Bodner mit Caravans am Afritzer See" },
    },
    {
      title: "Bodner's Snack Stüberl",
      text:
        "Gastronomische Versorgung direkt am Platz: im Snack Stüberl gibt es in der Hauptsaison täglich frisches Gebäck und kleine Imbisse.",
      image: { src: `${IMG}/snack-stueberl.webp`, alt: "Bodner's Snack Stüberl mit Blumenbeeten am Campingplatz" },
    },
  ],

  usps: [
    "Familiär geführt",
    "Direkt am Afritzer See",
    "Eigener Seezugang & Badebereich",
    "Terrassencamping seit 2020",
    "Snack Stüberl am Platz",
    "Hunde willkommen (Leinenpflicht)",
  ],

  trust: {
    heading: "Worauf Sie sich bei Camping Bodner verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Ein persönlich und familiär geführter Campingplatz mit eigenem Seezugang am klaren Afritzer See, gastronomischer Versorgung direkt am Platz und allen Annehmlichkeiten für einen entspannten Campingurlaub.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme-see.webp`, alt: "Luftaufnahme: Campingplatz Bodner mit Steg direkt am Afritzer See" },
  },

  camping: {
    heading: "Camping am Afritzer See",
    intro:
      "Ob mit Zelt, Caravan oder Wohnmobil — bei Camping Bodner bekommt jeder seinen Platz. Zwischen Bergen und Seen im Gegendtal, mit eigenem Seezugang und allem, was den Campingurlaub einfach macht.",
    features: [
      {
        title: "Platz für Zelt, Caravan & Wohnmobil",
        text:
          "Ob Sie mit Zelt, Caravan oder Wohnmobil anreisen — einen Platz bekommt bei uns jeder, mitten in der Kärntner Natur.",
        image: { src: `${IMG}/stellplaetze.webp`, alt: "Stellplätze mit Caravans auf der Wiese am Camping Bodner" },
      },
      {
        title: "Terrassencamping seit 2020",
        text:
          "Seit 2020 bieten wir Ihnen zusätzlich Terrassencamping auf unserer neu errichteten Anlage an.",
        image: { src: `${IMG}/anlage-luft.webp`, alt: "Luftaufnahme der Campinganlage Bodner im Gegendtal" },
      },
      {
        title: "Sanitär, WLAN & Service",
        text:
          "Sanitäranlagen, Waschmaschine, Kühlmöglichkeiten und freies WLAN beim Snack Stüberl gehören selbstverständlich zu unseren Leistungen.",
        image: { src: `${IMG}/empfang-anlage.webp`, alt: "Empfang und Anlage von Camping Bodner mit Bergen im Hintergrund" },
      },
    ],
  },

  // Keine Mobilheime/Zimmer auf der Quelle → mobilheime-Sektion bewusst entfernt.
  // Keine eigene Kinder-Sektion (Spielplatz/Tischtennis laufen unter Aktivitäten) → entfällt.

  aktivitaeten: {
    heading: "Aktiv am Afritzer See",
    intro:
      "Baden, Fischen und Wandern rund um den Afritzer See — und für die Kinder ist direkt am Platz immer etwas los.",
    items: [
      {
        title: "Fischen & geräucherte Forellen",
        text:
          "Am Afritzer See wurden schon einige schöne Exemplare gefangen — und im Juli und August gibt es donnerstags frisch geräucherte und gegrillte Forellen.",
        image: { src: `${IMG}/geraeucherte-forellen.webp`, alt: "Frisch geräucherte Forellen aus Bodner's Snack Stüberl" },
      },
      {
        title: "Spielplatz & Tischtennis",
        text:
          "Kleiner Spielplatz und Tischtennis sorgen dafür, dass den Kindern direkt am Platz nicht langweilig wird.",
        image: { src: `${IMG}/spielplatz-kinder.webp`, alt: "Kind beim Spielen im Sand am Campingplatz Bodner" },
      },
      {
        title: "Skaterpark in der Umgebung",
        text:
          "Für Action zwischendurch: ein Skaterpark gehört zu den Freizeitmöglichkeiten rund um Afritz am See.",
        image: { src: `${IMG}/skaterpark.webp`, alt: "Skaterpark in der Umgebung von Afritz am See" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      {
        title: "Mit dem Auto",
        text:
          "Seestraße 27, 9542 Afritz am See. Spittal an der Drau und Villach liegen jeweils rund 25 km entfernt.",
      },
      {
        title: "Alles in der Nähe",
        text:
          "Radenthein mit mehreren Einkaufsmöglichkeiten erreichen Sie in 15 Autominuten; Einkauf, Tankstelle, Arzt und Werkstatt liegen wenige Minuten entfernt.",
      },
      {
        title: "Gut zu wissen",
        text:
          "Rezeption täglich von 08:00 bis 19:00 Uhr. Am Platz gilt ausschließlich Barzahlung; Hunde sind erlaubt (Leinenpflicht).",
      },
    ],
  },

  // Nur 10 belegte Fotos — alle laufen in Hero/Pillars/Camping/Aktivitäten.
  // Die Bento-Galerie braucht 4 eigene Bilder; ohne Dubletten bleibt sie leer
  // und blendet sich ehrlich aus (Template-Verhalten bei < 4 Bildern).
  galerie: {
    heading: "Eindrücke von Camping Bodner",
    headingEmphasis: "Eindrücke",
    intro:
      "Eindrücke vom familiär geführten Campingplatz Bodner am Afritzer See in Kärnten.",
    tag: "Mai bis September",
    images: [],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Schreiben Sie uns Ihre Buchungswünsche — wir beantworten Ihre Anfrage so rasch wie möglich und melden uns mit Ihrer persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Preise 2026: Stellplatz für 2 Erwachsene inkl. Kurtaxe pro Nacht. Vor-/Nachsaison 01.05.–30.06. & 01.–30.09. (€34,40), Hauptsaison 01.07.–31.08. (€37,40). Kinder, Jugend & Hund extra. Nur Barzahlung.",
    highlight: {
      title: "Hund in der Vorsaison gratis",
      text:
        "In der Vor- und Nachsaison übernachtet Ihr Hund kostenlos mit (Leinenpflicht). Bitte beachten: am Platz gilt nur Barzahlung.",
    },
    categories: [
      // Reale Preisliste Bodner 2026 (Stellplatz, 2 Erwachsene inkl. Kurtaxe pro Nacht).
      { id: "stellplatz-neben", label: "Stellplatz · Vor-/Nachsaison", perNight: 34, perExtraGuest: 10 },
      { id: "stellplatz-haupt", label: "Stellplatz · Hauptsaison", perNight: 37, perExtraGuest: 11 },
    ],
  },

  kontakt: {
    tel: "+43 4247 2579",
    telHref: "tel:+4342472579",
    mail: "office@camping-bodner.at",
    facebook: "http://www.facebook.com/camping.bodner.afritz.am.see",
    adresse: "Seestraße 27 · 9542 Afritz am See · Kärnten",
    coords: { lat: 46.7368568, lng: 13.7686839 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Zelt, Caravan & Wohnmobil", href: "#camping" },
        { label: "Terrassencamping", href: "#camping" },
        { label: "Sanitär & Service", href: "#camping" },
      ],
    },
    {
      label: "Am See",
      href: "#top",
      children: [
        { label: "Afritzer See", href: "#top" },
        { label: "Eigener Seezugang", href: "#top" },
        { label: "Snack Stüberl", href: "#top" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Fischen & Forellen", href: "#aktivitaeten" },
        { label: "Spielplatz & Tischtennis", href: "#aktivitaeten" },
        { label: "Skaterpark", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingBodner;
