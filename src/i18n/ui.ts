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
    siteDescription: 'Software engineer building playful and civic tools on the internet.',

    // Nav
    projects: 'Projects',
    notes: 'Notes',
    elsewhere: 'Elsewhere',

    // Hero
    heroHeadline: 'I build playful and civic software.',
    heroSubhead: 'I make tools that help people see more clearly, participate directly, and act on what they know.',
    heroCta: 'See projects',
    heroCtaSecondary: 'Read notes',

    // About
    aboutTitle: 'About',
    aboutBody: "I’m a software engineer in Cluj-Napoca. I work in civic tech, public-interest software, and small internet products. I build for use, not for demonstration.",

    // isthisai
    isthisaiName: 'isthisai',
    isthisaiStatus: 'Live',
    isthisaiDescription: 'A game about telling the difference. You look at images and video and judge whether they were made by a person or a machine.',
    isthisaiReason: 'AI-generated media is getting harder to spot. This project turns that problem into something interactive, social, and easier to talk about.',
    isthisaiCta: 'Play isthisai',

    // clujparticipa
    clujparticipaName: 'clujparticipa',
    clujparticipaStatus: 'In progress',
    clujparticipaDescription: 'A participatory budgeting prototype for Cluj-Napoca. Residents submit proposals, build support, and place ideas on a map — a tool for surfacing what the city might want before formal decisions are made.',
    clujparticipaReason: 'Cities need better ways for residents to surface local ideas and build support around them before formal politics takes over.',
    clujparticipaQualifier: 'This is a coalition-building and participation tool, not a production voting system.',
    clujparticipaCta: 'See clujparticipa',

    // Notes and experiments
    notesAndExperimentsName: 'Notes and experiments',
    notesAndExperimentsStatus: 'Ongoing',
    notesAndExperimentsDescription: 'Short writing and small experiments about publishing, civic software, internet products, and building in public.',
    notesAndExperimentsCta: 'Read notes',

    // Notes section
    notesIntro: 'Working notes on civic software, publishing, and building useful things.',

    projectsIntro: 'Projects I work on — civic tools, experiments, and small internet products.',

    // Elsewhere
    elsewhereTitle: 'Elsewhere',
    elsewhereIntro: 'If you want to follow the work or get in touch, these are the best places to find me.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',

    // Notes index page
    notesPageTitle: 'Notes',
    notesPageIntro: "Notes on what I'm thinking through — civic software, publishing, and small improvements to how the internet works.",

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
    siteDescription: 'Inginer software care construiește instrumente ludice și civice pe internet.',

    projects: 'Proiecte',
    notes: 'Note',
    elsewhere: 'În altă parte',

    heroHeadline: 'Construiesc software ludic și civic.',
    heroSubhead: 'Fac instrumente care ajută oamenii să vadă mai clar, să participe direct și să acționeze pe baza a ceea ce știu.',
    heroCta: 'Vezi proiectele',
    heroCtaSecondary: 'Citește notele',

    aboutTitle: 'Despre',
    aboutBody: 'Sunt inginer software în Cluj-Napoca. Lucrez în tehnologie civică, software de interes public și produse mici de internet. Construiesc pentru a fi folosit, nu pentru a fi demonstrat.',

    isthisaiName: 'isthisai',
    isthisaiStatus: 'Lansat',
    isthisaiDescription: 'Un joc despre cum să recunoști diferența. Privești imagini și videoclipuri și judeci dacă au fost create de o persoană sau de o mașină.',
    isthisaiReason: 'Conținutul generat de AI devine din ce în ce mai greu de identificat. Acest proiect transformă acea problemă într-un lucru interactiv, social și mai ușor de discutat.',
    isthisaiCta: 'Joacă isthisai',

    clujparticipaName: 'clujparticipa',
    clujparticipaStatus: 'În curs de dezvoltare',
    clujparticipaDescription: 'Un prototip de bugetare participativă pentru Cluj-Napoca. Rezidenții trimit propuneri, construiesc sprijin și plasează idei pe hartă — un instrument pentru a scoate la suprafață ce ar putea dori orașul înainte ca deciziile formale să fie luate.',
    clujparticipaReason: 'Orașele au nevoie de modalități mai bune ca rezidenții să aducă idei locale la suprafață și să construiască sprijin în jurul lor înainte de a prelua politica formală.',
    clujparticipaQualifier: 'Acesta este un instrument de construire a coalițiilor și participare, nu un sistem de votare în producție.',
    clujparticipaCta: 'Vezi clujparticipa',

    notesAndExperimentsName: 'Note și experimente',
    notesAndExperimentsStatus: 'Continuu',
    notesAndExperimentsDescription: 'Scurte scrieri și mici experimente despre publicare, software civic, produse de internet și construire în public.',
    notesAndExperimentsCta: 'Citește notele',

    notesIntro: 'Note de lucru despre software civic, publicare și construirea de lucruri utile.',

    projectsIntro: 'Proiecte la care lucrez — instrumente civice, experimente și produse mici de internet.',

    elsewhereTitle: 'În altă parte',
    elsewhereIntro: 'Dacă vrei să urmărești activitatea sau să iei legătura, acestea sunt cele mai bune locuri.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',

    notesPageTitle: 'Note',
    notesPageIntro: 'Note despre ce gândesc — software civic, publicare și mici îmbunătățiri ale modului în care funcționează internetul.',

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
    siteDescription: 'Szoftvermérnök, aki játékos és civil eszközöket épít az interneten.',

    projects: 'Projektek',
    notes: 'Jegyzetek',
    elsewhere: 'Máshol',

    heroHeadline: 'Játékos és civil szoftvereket építek.',
    heroSubhead: 'Olyan eszközöket készítek, amelyek segítenek az embereknek tisztábban látni, közvetlenül részt venni és hogy tudásukra alapozva cselekedhessenek.',
    heroCta: 'Projektek megtekintése',
    heroCtaSecondary: 'Jegyzetek olvasása',

    aboutTitle: 'Rólam',
    aboutBody: 'Kolozsvári szoftvermérnök vagyok. Civil technológiával, közérdekű szoftverekkel és kis internetes termékekkel foglalkozom. Használatra építek, nem bemutatóra.',

    isthisaiName: 'isthisai',
    isthisaiStatus: 'Élő',
    isthisaiDescription: 'Egy játék a különbségtételről. Képeket és videókat nézel, és eldöntöd, hogy ember vagy gép készítette-e.',
    isthisaiReason: 'Az AI által generált média egyre nehezebben felismerhető. Ez a projekt interaktívvá és társaságivá teszi a kérdést, és segít elindítani a párbeszédet erről a problémáról.',
    isthisaiCta: 'Játssz az isthisai-val',

    clujparticipaName: 'clujparticipa',
    clujparticipaStatus: 'Folyamatban',
    clujparticipaDescription: 'Egy részvételi költségvetési prototípus Kolozsvár számára. A lakosok javaslatokat nyújtanak be, támogatást építenek és ötleteket helyeznek el a térképen — egy eszköz arra, hogy felszínre hozzák, mit szeretne a város, mielőtt a formális döntések megszületnének.',
    clujparticipaReason: 'A városoknak jobb módokra van szükségük, hogy a lakosok felszínre hozhassák helyi ötleteiket, és támogatást építsenek köréjük, mielőtt a formális politika átveszi az irányítást.',
    clujparticipaQualifier: 'Ez egy koalícióépítő és részvételi eszköz, nem egy éles szavazási rendszer.',
    clujparticipaCta: 'Tovább a projekthez',

    notesAndExperimentsName: 'Jegyzetek és kísérletek',
    notesAndExperimentsStatus: 'Folyamatos',
    notesAndExperimentsDescription: 'Rövid írások és kis kísérletek a publikálásról, civil szoftverekről, internetes termékekről és a nyilvános építésről.',
    notesAndExperimentsCta: 'Jegyzetek olvasása',

    notesIntro: 'Munkajegyzetek civil szoftverekről, publikálásról és hasznos dolgok építéséről.',

    projectsIntro: 'Projektek, amelyeken dolgozom — polgári eszközök, kísérletek és kis internetes termékek.',

    elsewhereTitle: 'Máshol',
    elsewhereIntro: 'Ha követni szeretnéd a munkámat vagy kapcsolatba lépni, ezek a legjobb helyek.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',

    notesPageTitle: 'Jegyzetek',
    notesPageIntro: 'Jegyzetek arról, amin gondolkodom — civil szoftverek, publikálás és az internet kis javításai.',
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
