import type { CampsiteConfig } from "../types";

/**
 * Campingplatz Bodner — Seestraße 27, 9542 Afritz am See, Kärnten (Gegendtal).
 * Alle Texte/Fakten/Preise belegt aus camping-bodner.at (Stand-Scrape, verify-raw/).
 * Bilder = ausschließlich eigene Bodner-Fotos in /public/campsites/camping-bodner/.
 * EHRLICH:
 *  - Liegt laut Quelle DIREKT am Afritzer See ("Eigener Seezugang", "abgegrenzter
 *    Badebereich … im klaren Wasser des Afritzer See´s") → "am See"-Rahmung zulässig.
 *  - Preise = REALE Tagespreise 2026 (1 Platz, 2 Erw. inkl. Kurtaxe): Vor-/Nachsaison
 *    € 34,40, Hauptsaison € 37,40 → pricesArePlaceholder=false. Belege in REPORT.md.
 *  - KEINE Mobilheime/Zimmer → mobilheime weggelassen. Kein Logo gescrapt → logo weggelassen.
 *  - Keine belegbare Auszeichnung → awards leer.
 *  - Bild-Qualitätsfix (nach .enriched-marker, ehrliche Auflösung):
 *    · snack-stueberl.webp (667×610, tooSmall) in Pillar 3 → ersetzt durch
 *      empfang-service.webp (1905×647) — zeigt Bodner's Snack Stüberl mit Schild
 *      und Empfangsgebäude; camping.features-Eintrag "Sanitär, Service & WLAN"
 *      (gleiche Datei) entfernt um Duplikat zu vermeiden.
 *    · geraeucherte-forellen.webp (638×583, tooSmall) in aktivitaeten.items →
 *      Eintrag entfernt (optionaler Slot, kein Ersatz nach Enrichment). Forellen-
 *      Fakt bleibt im aktivitaeten.intro erhalten (zeitlich präzisiert auf
 *      "jeden Donnerstag im Juli und August" lt. Quelle 08.md).
 *    · terrassencamping-anlage.webp zeigt Hofgelände/Scheune (Motiv-Mismatch,
 *      verify2-Issue). .enriched-marker gesetzt → camping.features[1] entfernt
 *      (optionaler Slot; Terrassencamping-Fakt bleibt in intro/usps als Text erhalten).
 *    · generische Kleinformate "Spielplatz" (479px) und "Skaterpark" (478px) wurden
 *      bereits zuvor entfernt. Spielplatz, Tischtennis & Skaterpark bleiben als
 *      Fakt im Aktiv-Intro erhalten.
 */
const IMG = "/campsites/camping-bodner";

export const campingBodner: CampsiteConfig = {
  name: "Campingplatz Bodner",
  shortName: "Camping Bodner",
  slug: "camping-bodner",
  ort: "Afritz am See",
  region: "Kärnten",
  brandKind: "Camping am Afritzer See",
  see: "Afritzer See",
  regionLong: "Afritzer See · Gegendtal · Kärnten",

  claim: "Campen bei Freunden am Afritzer See",
  claimEmphasis: "Afritzer See",
  intro:
    "Familiär geführter Campingplatz im landschaftlich schönen Gegendtal — direkt am Afritzer See mit eigenem Seezugang und abgegrenztem Badebereich. Für Zelt, Caravan und Wohnmobil, seit 2020 auch Terrassencamping auf neu errichteter Anlage.",

  statement: {
    text: "Zwischen Bergen und Seen im Gegendtal wird Urlaub wieder ruhig, persönlich und ganz nah am Wasser.",
    emphasis: "ganz nah am Wasser",
  },

  pillars: [
    {
      title: "Direkt am Afritzer See",
      text: "Eigener Seezugang und ein abgegrenzter Badebereich: Badeerlebnis im klaren Wasser des Afritzer Sees — direkt am Platz.",
      image: { src: `${IMG}/seezugang-steg-see.webp`, alt: "Eigener Seezugang des Campingplatzes Bodner mit Steg am Afritzer See" },
    },
    {
      title: "Campen bei Freunden",
      text: "Ein familiär geführter Platz mit persönlicher Atmosphäre, eingebettet zwischen Bergen und Seen im landschaftlich schönen Gegendtal.",
      image: { src: `${IMG}/stellplaetze.webp`, alt: "Stellplätze mit Wohnwagen auf der gepflegten Wiese am Campingplatz Bodner" },
    },
    {
      title: "Bodner's Snack Stüberl",
      text: "Gastronomische Versorgung direkt am Platz: in der Hauptsaison jeden Tag frisches Gebäck und kleine Imbisse, dazu gratis WLAN.",
      image: { src: `${IMG}/empfang-service.webp`, alt: "Bodner's Snack Stüberl und Empfangsgebäude am Campingplatz Bodner in Afritz am See" },
    },
  ],

  usps: [
    "Direkt am Afritzer See",
    "Eigener Seezugang & abgegrenzter Badebereich",
    "Für Zelt, Caravan & Wohnmobil",
    "Terrassencamping seit 2020",
    "Snack Stüberl & gratis WLAN",
    "Hunde willkommen (Leinenpflicht)",
  ],

  trust: {
    heading: "Worauf Sie sich am Campingplatz Bodner verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Ein familiär geführter Platz direkt am Afritzer See: eigener Seezugang, gepflegte Sanitäranlagen, gratis WLAN beim Snack Stüberl und ehrliche Tagespreise — Kärntner Camping, wie es sein soll.",
  },

  // Keine belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-see-panorama.webp`, alt: "Stellplätze von Camping Bodner mit Blick über den Afritzer See und die Berge des Gegendtals" },
  },

  camping: {
    heading: "Camping am Afritzer See",
    intro:
      "Weite Plätze für Zelt, Caravan und Wohnmobil auf gepflegten Wiesen, ein eigener Seezugang und gastronomische Versorgung am Platz — Erholung, wie sie sein soll.",
    features: [
      {
        title: "Stellplätze im Grünen",
        text: "Ob Zelt, Caravan oder Wohnmobil — bei uns bekommt jeder einen Platz auf gepflegten Wiesen, viele mit Blick über See und Berge.",
        image: { src: `${IMG}/camping-am-see-luft.webp`, alt: "Stellplätze von Camping Bodner auf grünen Wiesen mit Blick über den Afritzer See und die Berge des Gegendtals" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Afritzer See",
    intro:
      "Baden im klaren Wasser am eigenen Seezugang, eine Wanderung rund um den See oder eine Runde am kleinen Spielplatz, beim Tischtennis und Skaterpark — und mittendrin der Genuss frisch geräucherter Forellen (jeden Donnerstag im Juli und August) vom Platz.",
    items: [],
  },

  anreise: {
    heading: "Anreise & Lage",
    modes: [
      { title: "Mit dem Auto", text: "Im Gegendtal bei Afritz am See — Spittal an der Drau und Villach sind rund 25 km entfernt." },
      { title: "In der Umgebung", text: "Die kleine Stadt Radenthein mit mehreren Einkaufsmöglichkeiten ist in rund 15 Minuten mit dem Auto erreichbar." },
      { title: "Vor Ort", text: "Einkaufsmöglichkeiten, Tankstelle, Arzt und KFZ-Werkstatt erreichen Sie in wenigen Minuten mit dem Auto." },
    ],
  },

  // Nur 8 belegte, qualitativ ausreichende Fotos — alle in Hero/Pillars/Camping/Aktiv
  // verwendet. Das Bento braucht 4 EIGENE Bilder ohne Dubletten; ohne Erfinden bleibt
  // die Galerie leer und blendet sich ehrlich aus (images.length < 4 → Sektion null).
  galerie: {
    heading: "Eindrücke vom Afritzer See",
    headingEmphasis: "Afritzer See",
    intro:
      "Ein paar Eindrücke vom Campingplatz Bodner am Afritzer See im Gegendtal.",
    tag: "Mai bis September",
    images: [],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Saison und Personen — wir melden uns mit Ihrer persönlichen Verfügbarkeit für Camping Bodner.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis: 1 Stellplatz für 2 Erwachsene inkl. Kurtaxe pro Nacht (Vor-/Nachsaison € 34,40, Hauptsaison € 37,40). Kinder, Jugendliche & Hund extra; Kurtaxe € 2,70/Erw. Vor-/Nachsaison 01.05.–30.06. & 01.–30.09., Hauptsaison 01.07.–31.08. Nur Barzahlung. Mit dem Betrieb bestätigen.",
    highlight: {
      title: "Direkt am Afritzer See",
      text: "Eigener Seezugang und abgegrenzter Badebereich — Baden im klaren Wasser direkt am Platz.",
    },
    categories: [
      // Reale Tagespreise lt. Preise-2026-Seite: 1 Platz + 2 Erw. inkl. Kurtaxe = € 34,40
      // (Vor-/Nachsaison) bzw. € 37,40 (Hauptsaison); perExtraGuest = Erw. + Kurtaxe
      // (€ 7+2,70 ≈ 10 bzw. € 8+2,70 ≈ 11). Belege in REPORT.md / verify-raw.
      { id: "stellplatz-vorsaison", label: "Stellplatz · Vor-/Nachsaison", perNight: 34, perExtraGuest: 10 },
      { id: "stellplatz-hauptsaison", label: "Stellplatz · Hauptsaison", perNight: 37, perExtraGuest: 11 },
    ],
  },

  kontakt: {
    tel: "+43 4247 2579",
    telHref: "tel:+4342472579",
    mail: "office@camping-bodner.at",
    facebook: "http://www.facebook.com/camping.bodner.afritz.am.see",
    adresse: "Seestraße 27 · 9542 Afritz am See · Kärnten",
    coords: { lat: 46.736836, lng: 13.768801 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Terrassencamping", href: "#camping" },
        { label: "Sanitär & Service", href: "#camping" },
      ],
    },
    {
      label: "Am See",
      href: "#aktivitaeten",
      children: [
        { label: "Baden & Seezugang", href: "#aktivitaeten" },
        { label: "Fischen & Forellen", href: "#aktivitaeten" },
        { label: "Snack Stüberl", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Tagespreise", href: "#booking" },
        { label: "Anfrage", href: "#booking" },
      ],
    },
    {
      label: "Anreise",
      href: "#anreise",
      children: [
        { label: "Mit dem Auto", href: "#anreise" },
        { label: "In der Umgebung", href: "#anreise" },
      ],
    },
  ],
};

export default campingBodner;
