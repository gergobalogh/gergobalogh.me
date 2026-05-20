export const languages = {
  en: 'English',
  ro: 'Română',
  hu: 'Magyar',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Site
    siteTitle: 'Gergő Balogh',
    siteDescription: 'Software engineer building civic tools and small internet products that make the web more useful.',

    // Nav
    projects: 'Projects',
    notes: 'Notes',
    elsewhere: 'Elsewhere',

    // Hero
    heroHeadline: 'I build playful and civic software.',
    heroSubhead: 'The gap between watching and doing is three moves: see clearly, act on what you know, then participate directly.',
    heroCta: 'See projects',
    heroCtaSecondary: 'Read notes',

    // About
    aboutTitle: 'About',
    aboutBody: "I think the internet gives people too much to watch and not enough to do. Software should make people more able, not more impressed. The best tools quietly improve how people interact with the world around them.",

    // isthisai
    isthisaiName: 'isthisai',
    isthisaiStatus: 'Live',
    isthisaiDescription: 'Can you tell if an image was made by a human or a machine? You look. You judge. You\'re probably wrong.',
    isthisaiReason: 'AI-generated media is getting harder to spot. This project turns that problem into something interactive, social, and easier to talk about.',
    isthisaiCta: 'Play isthisai',

    // clujparticipa
    clujparticipaName: 'clujparticipa',
    clujparticipaStatus: 'Taking shape',
    clujparticipaDescription: 'What does the city want before formal politics decides? Residents propose, build support, and map ideas — a participatory budgeting prototype for Cluj-Napoca.',
    clujparticipaReason: 'Cities need better ways for residents to surface local ideas and build support around them before formal politics takes over.',
    clujparticipaQualifier: 'This is a coalition-building and participation tool, not a production voting system.',
    clujparticipaCta: 'Join clujparticipa',

    // Civic chatbot
    civicChatbotName: 'Civic chatbot experiment',
    civicChatbotStatus: 'Prototype',
    civicChatbotDescription: 'A read-only chatbot that puts 200,000 public records behind a plain-language question. Citizens ask in Romanian, the bot answers from complaints, council decisions, permits, and local news.',
    civicChatbotReason: 'Government portals sort by form fields and dropdowns. A citizen with a question faces a search problem, not an information problem.',
    civicChatbotCta: 'Read the note',

    // Notes and experiments
    notesAndExperimentsName: 'Notes and experiments',
    notesAndExperimentsStatus: 'Always shipping',
    notesAndExperimentsDescription: 'Things learned while making software people can actually use.',
    notesAndExperimentsCta: 'Read notes',

    // Notes section
    notesIntro: 'Notes on useful software, publishing, and participation on the internet.',

    projectsIntro: 'Projects I work on — civic tools, experiments, and small internet products.',

    // Elsewhere
    elsewhereTitle: 'Elsewhere',
    elsewhereIntro: 'If you want to follow the work or get in touch, these are the best places to find me.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',

    // Notes index page
    notesPageTitle: 'Notes',
    notesPageIntro: 'Notes on software, the internet, and things that could work better.',

    // Project pages
    projectStatus: 'Status',
    projectWhy: 'Why it exists',
    projectWhatUsersDo: 'What you can do',
    backToProjects: 'Back to projects',
    backToNotes: 'Back to notes',
    backToHome: 'Back to home',

    // Footer
    footerName: 'Gergő Balogh',

    notesComingSoon: 'Notes coming soon.',
  },

  ro: {
    siteTitle: 'Gergő Balogh',
    siteDescription: 'Sunt inginer software în Cluj-Napoca. Dezvolt instrumente civice și produse mici care fac internetul mai util.',

    projects: 'Proiecte',
    notes: 'Note',
    elsewhere: 'În altă parte',

    heroHeadline: 'Mai puțin spectacol, mai multă acțiune — instrumente civice pentru Cluj.',
    heroSubhead: 'Diferența dintre «nu e problema mea» și schimbare reală sunt trei pași: înțelege problema, fă ceva concret, participă direct.',
    heroCta: 'Vezi proiectele',
    heroCtaSecondary: 'Citește notele',

    aboutTitle: 'Despre',
    aboutBody: 'Dacă nu faci nimic, nici că se va schimba ceva. Avem prea mult de urmărit și prea puțin de făcut. Cred că internetul are destul spectacol. Foaie verde băț, vrei un oraș mai bun? Fă-ți — și eu fac la fel.',

    isthisaiName: 'isthisai',
    isthisaiStatus: 'Live',
    isthisaiDescription: 'Poți să-ți dai seama dacă o imagine a fost făcută de om sau de AI? Majoritatea oamenilor nimeresc 50% — adică la întâmplare. Probabil n-ai nimerit nici tu.',
    isthisaiReason: 'Conținutul generat de AI devine din ce în ce mai greu de identificat. Acest proiect transformă acea problemă într-un lucru interactiv, social și mai ușor de discutat.',
    isthisaiCta: 'Joacă isthisai',

    clujparticipaName: 'clujparticipa',
    clujparticipaStatus: 'Prinde formă',
    clujparticipaDescription: 'Bugetarea participativă a murit la Cluj — orașul are nevoie de versiunea 2. Cetățenii propun, votul contează, banii se văd — un prototip care reface ce primăria a abandonat.',
    clujparticipaReason: 'Orașele au nevoie de modalități mai bune ca rezidenții să aducă idei locale la suprafață și să construiască sprijin în jurul lor înainte de a prelua politica formală.',
    clujparticipaQualifier: 'Acesta este un instrument de construire a coalițiilor și participare, nu un sistem de votare în producție.',
    clujparticipaCta: 'Participă la clujparticipa',

    civicChatbotName: 'Experiment chatbot civic',
    civicChatbotStatus: 'Prototip',
    civicChatbotDescription: 'Un chatbot doar-citire care pune 200K de înregistrări publice în spatele unei întrebări în limbaj natural. Cetățenii întreabă în română, botul răspunde din plângeri, decizii de consiliu, permise și știri locale.',
    civicChatbotReason: 'Portalurile guvernamentale sortează după câmpuri și meniuri. Un cetățean cu o întrebare are o problemă de căutare, nu o problemă de informație.',
    civicChatbotCta: 'Citește nota',

    notesAndExperimentsName: 'Note și experimente',
    notesAndExperimentsStatus: 'Întotdeauna în lucru',
    notesAndExperimentsDescription: 'Ce iese din uz — ciorne despre cum lucrez.',
    notesAndExperimentsCta: 'Idei în lucru',

    notesIntro: 'Despre lucruri utile pentru internet și oamenii din jurul lui.',

    projectsIntro: 'Proiecte la care lucrez — instrumente civice, experimente și produse mici de internet.',

    elsewhereTitle: 'În altă parte',
    elsewhereIntro: 'Dacă vrei să urmărești activitatea sau să iei legătura, acestea sunt cele mai bune locuri.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',

    notesPageTitle: 'Note',
    notesPageIntro: 'Despre software, publicare și un internet ceva mai util.',

    projectStatus: 'Stare',
    projectWhy: 'De ce există',
    projectWhatUsersDo: 'Ce poți face',
    backToProjects: 'Înapoi la proiecte',
    backToNotes: 'Înapoi la note',
    backToHome: 'Înapoi la pagina de start',

    footerName: 'Gergő Balogh',

    notesComingSoon: 'Note în curând.',
  },

  hu: {
    siteTitle: 'Gergő Balogh',
    siteDescription: 'Kolozsvári szoftvermérnök vagyok. Egy hasznosabb internetért dolgozom.',

    projects: 'Projektek',
    notes: 'Jegyzetek',
    elsewhere: 'Máshol',

    heroHeadline: 'Nem elég látni, ami rossz. A város több, ha részt veszel benne.',
    heroSubhead: 'Tájékozódj. Szállj be. Cselekedj.',
    heroCta: 'Projektek megtekintése',
    heroCtaSecondary: 'Jegyzetek olvasása',

    aboutTitle: 'Rólam',
    aboutBody: 'Majd megcsináljuk. Majd lesz jobb. Majd valaki megoldja. Nem. Hatalmasak ezek az applikációk — betöltik az egész képernyőt. Kinek taps kell, csináljon műsort. Kinek internete, görgessen. Kinek dolga van, dolgozzon. A látvány elfárad. A görgetés elszáll. A munka megmarad.',

    isthisaiName: 'isthisai',
    isthisaiStatus: 'Él',
    isthisaiDescription: 'Igazi vagy AI? A legtöbb ember 50%-ot talál. Te is inkább csak tippelsz.',
    isthisaiReason: 'Az AI által generált média egyre nehezebben felismerhető. Ez a projekt interaktívvá és társaságivá teszi a kérdést, és segít elindítani a párbeszédet erről a problémáról.',
    isthisaiCta: 'Játssz az isthisai-val',

    clujparticipaName: 'clujparticipa',
    clujparticipaStatus: 'Formálódik',
    clujparticipaDescription: 'A város dönt, mielőtt kérdezne. Mi lenne, ha megfordítanánk? Javaslatok, támogatás, ötletek a térképen. Részvételi költségvetést Kolozsvárnak.',
    clujparticipaReason: 'A városoknak jobb módokra van szükségük, hogy a lakosok felszínre hozhassák helyi ötleteiket, és támogatást építsenek köréjük, mielőtt a formális politika átveszi az irányítást.',
    clujparticipaQualifier: 'Ez egy koalícióépítő és részvételi eszköz, nem egy éles szavazási rendszer.',
    clujparticipaCta: 'Csatlakozz a clujparticipához',

    civicChatbotName: 'Polgári chatbot kísérlet',
    civicChatbotStatus: 'Prototípus',
    civicChatbotDescription: 'Egy csak olvasható chatbot, amely 200K nyilvános rekordot tesz elérhetővé egy egyszerű kérdés mögött. A polgárok románul kérdeznek, a bot panaszokból, tanácsi határozatokból, engedélyekből és helyi hírekből válaszol.',
    civicChatbotReason: 'A kormányzati portálok űrlapmezők és legördülő menük szerint rendeznek. Egy kérdéssel rendelkező polgár keresési problémával néz szembe, nem információs problémával.',
    civicChatbotCta: 'Olvassa el a jegyzetet',

    notesAndExperimentsName: 'Jegyzetek és kísérletek',
    notesAndExperimentsStatus: 'Folyamatosan frissül',
    notesAndExperimentsDescription: 'Tanulságok arról, hogyan készül olyan szoftver, amit az emberek tényleg használnak.',
    notesAndExperimentsCta: 'Jegyzetek olvasása',

    notesIntro: 'Hasznos dolgokról az interneten és azon kívül.',

    projectsIntro: 'Projektek, amelyeken dolgozom — polgári eszközök, kísérletek és kis internetes termékek.',

    elsewhereTitle: 'Máshol',
    elsewhereIntro: 'Ha követni szeretnéd a munkámat vagy kapcsolatba lépni, ezek a legjobb helyek.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',

    notesPageTitle: 'Jegyzetek',
    notesPageIntro: 'Gondolatok erről, arról és egy hasznosabb internetről.',
    notesComingSoon: 'Jegyzetek hamarosan.',

    projectStatus: 'Státusz',
    projectWhy: 'Miért létezik',
    projectWhatUsersDo: 'Mit tehetsz',
    backToProjects: 'Vissza a projektekhez',
    backToNotes: 'Vissza a jegyzetekhez',
    backToHome: 'Vissza a főoldalra',

    footerName: 'Gergő Balogh',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey) {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}
