const languages = {
  en: {
     longStrings: {
      lessThanAMinute: "weniger als eine Minute",
      minute: "Minute",
      minutes: "Minuten",
      hour: "Stunde",
      hours: "Stunden",
      day: "Tag",
      days: "Tage",
      week: "Woche",
      weeks: "Wochen",
      and: "und",
    },
    shortStrings: {
      lessThanAMinute: "< 1min",
      minute: "min",
      hour: "hr",
      day: "day",
      week: "wk",
      and: "&",
    },
    timeLeft: "Verbleibende Zeit",
    countdownDone: "Countdown abgeschlossen",
    inlineNoMinutes: "keine Minuten",
    countingDown: "Counting down",
  },
  es: {
    longStrings: {
      lessThanAMinute: "menos de un minuto",
      minute: "minuto",
      hour: "hora",
      day: "día",
      week: "semana",
      and: "y",
    },
    timeLeft: "Tiempo restante",
    countdownDone: "Tiempo restante terminado",
    inlineNoMinutes: "0 minutos",
  },
  nl: {
    longStrings: {
      lessThanAMinute: "minder dan een minuut",
      minute: "minuut",
      minutes: "minuten",
      hour: "uur",
      hours: "uren",
      day: "dag",
      days: "dagen",
      week: "week",
      weeks: "weken",
      and: "en",
    },
    timeLeft: "Tijd over",
    countdownDone: "Aftellen over",
    inlineNoMinutes: "0 minuten",
  },
  tr: {
    longStrings: {
      lessThanAMinute: "bir dakikadan az",
      minute: "dakika",
      minutes: "dakika",
      hour: "saat",
      hours: "saat",
      day: "gün",
      days: "gün",
      week: "hafta",
      weeks: "hafta",
      and: "ve",
    },
    timeLeft: "kaldı",
    countdownDone: "Geri sayım tamamlandı",
    inlineNoMinutes: "0 dakika",
    countingDown: "Geri sayım devam ediyor",
  },
};

export const availableLanguages = Object.keys(languages);

const getProp = (text, obj) => text.split(".").reduce((obj, val) => obj && obj[val], obj);

export const t = (text, langCode = "en") =>
  getProp(text, languages[langCode]) || getProp(text, languages.en);
