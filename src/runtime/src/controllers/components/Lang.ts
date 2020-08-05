class Lang {

    private static lang = "nl";

    static setLanguage(lang: string) {
        this.lang = lang;
    }

    static getLanguageDescription(lang: string) {

        switch(lang) {
            case "nl":
                return "Nederlands";
            case "en":
                return "English";
            case "da":
                return "Dansk";
            case "de":
                return "Deutsch";
            case "ar":
                return "עברית";
            case "fa":
                return "فارسی";
            case "po":
                return "Português";
            case "es":
                return "Español";
            default:
                return "Nederlands";
        }

    }

}

export default Lang;