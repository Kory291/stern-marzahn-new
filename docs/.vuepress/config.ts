import { defaultTheme, defineUserConfig } from "vuepress"

export default defineUserConfig({
    lang: 'de-DE',
    title: 'VfB Stern Marzahn',
    description: ' ',
    dest: "build",
    theme: defaultTheme({
        navbar : [
            {
                text: "Startseite",
                link: "/"
            },
            {
                text: "Archiv",
                link: "/archiv/"
            },
            {
                text: "weitere Links",
                link: "/weitere_links/"
            },
            {
                text: "Regelknigge",
                link: "/regelknigge/"
            },
            {
                text: "Impressum",
                link: "/impressum/"
            },
            {
                text: "externe Seiten",
                children: [
                    {
                        text: "Berliner Tischtennisverband",
                        link: "https://www.bettv.de/"
                    },
                    {
                        text: "Ergebnisdienst des Berliner Tischtennisverbands",
                        link: "https://bettv.tischtennislive.de/default.aspx"
                    },
                    {
                        text: "Deutscher Tischtennisverband",
                        link: "https://www.tischtennis.de/"
                    },
                    {
                        text: "Internationaler Tischtennisverband",
                        link: "https://www.ittf.com/"
                    }
                ]
            }
        ],
        sidebar: false,
        logo: "/images/logo.png",
                
    })
})
