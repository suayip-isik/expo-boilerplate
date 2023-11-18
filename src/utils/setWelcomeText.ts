export const setWelcomeText = (language: string | undefined) => {
  switch (language) {
    case "tr":
      return "Hoş geldin";
    case "en":
      return "Welcome";
    case "fr":
      return "Bonjour";
    case "es":
      return "Hola";
    default:
      return false;
  }
};
