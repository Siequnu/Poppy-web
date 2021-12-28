
export function getCollections(collectionId = false) {

    // Collections are indexed from 0
    const id = (collectionId ? collectionId - 1 : false)

    const collections = [
        {
            title: 'The Iconic McLaren Senna Collection',
            caption: "The highly collectible 2017 sports car reimagined for the metaverse.",
            url: 'https://opensea.io/collection/mclaren-senna',
            thumbnail: "https://lh3.googleusercontent.com/C89fBczQt7I_BUvLoy5gUSZZlFhoQE-ey93nbt5ZNjOxiQ9MAvih70u_3XU3XZ7WgvjgqqLGu1UtF2-wH0ZIpcqpYCOOuR4-VnuJ=w403",
            description: [
                "McLaren’s highly collectible 2017 Senna limited-production sports car reimagined for the metaverse.",
                "Created with the collector in mind, these stunning original and authenticated digital recreations of McLaren's Senna capture the essence of true memorabilia."
            ],
            items: [
                {
                    title: 'The Midnight Purple McLaren Senna',
                    thumbnail: 'https://lh3.googleusercontent.com/RiJea_h7GVhlBvzJX2VMbEkIOsg8jVw9H92H_JcR3QD1yNZe554J2HOwIRPGkhqj3qyOC1grn7CYn43UIAjKCYVfpz7bpET6QOo7wA=w289',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950989341295640577',
                },
                {
                    title: 'The Electric Blue McLaren Senna',
                    thumbnail: 'https://lh3.googleusercontent.com/AFPPL3pwzlFFC0gVUIXv2e1Dqdq11c0tpIKpHFOfg_BzzgPoP1sPpLqGPY8An_HCCVt5U7Pd2hTLLnidTL1pd4upIYOr7iGj-IAs=w289',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950958554970062849',
                },
                {
                    title: 'The Bumblebee Yellow McLaren Senna',
                    thumbnail: 'https://lh3.googleusercontent.com/8y8yOdm6KI_74iinGsq_TLIZJN-928AjaMMWrKBZOrvb3NU7IkhCge7wlMgtnLFvDtJT8-gJYIuOWxpLlKqezGjP9XEnfuW58SYmxA=w289',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950986042760757249',
                },
                {
                    title: 'The Ghost White McLaren Senna',
                    thumbnail: 'https://lh3.googleusercontent.com/nga8x-pYDqbKlVlUiiFx0CB6roGBn2ERDOwKsLouzNVQgNkMAIHlaKXV0IL99-hTZqBohn6q57IB_UIFZTwN4yhPGNP3mnW7KgK0mtU=w289',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950955256435179521',
                },
                {
                    title: 'The Carbon Black McLaren Senna',
                    thumbnail: 'https://lh3.googleusercontent.com/93dCFE0AbxXtjBLWb9aKvsd0NuAOvfZwp3qkH9nOL1qimhimX-taZsZG8nD2i0LDpdaKXf2-jRRXatw1qXQjzc1TeneCDyylhVt5Xg=w289',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950991540318896129',
                },
                {
                    title: 'The Fire Red McLaren Senna',
                    thumbnail: 'https://lh3.googleusercontent.com/C89fBczQt7I_BUvLoy5gUSZZlFhoQE-ey93nbt5ZNjOxiQ9MAvih70u_3XU3XZ7WgvjgqqLGu1UtF2-wH0ZIpcqpYCOOuR4-VnuJ=w289',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950965152039829505',
                },
            ]
        },


        {
            title: 'POPPY 2021 NFT Christmas Cards',
            caption: "Why not make it a real 2021 Christmas by owning an exclusive NFT Christmas Card!",
            url: 'https://opensea.io/collection/christmas-card-2021',
            thumbnail: "https://lh3.googleusercontent.com/uR1bMxd3GmS53ZAV3z6Bm_wuMgZRIKjLffxAVhgKmhjaNs6-NrRWmBJi0EUeXuJx9n_cs9I36KsnBA9ikR9BgkVRbniwfW31iCPQtg=w540",
            description: [
                "Why not make it a real 2021 Christmas by owning an exclusive NFT Christmas Card!"
            ],
            items: [
                {
                    title: '2021 Cambridge Christmas Card',
                    thumbnail: 'https://lh3.googleusercontent.com/NxUcF1Q6C_BO9jsULxF9aRCweY6Mud57PCKA7hUGEScSoHNzSPwkR1UOpqTcYMB9apcBaGqCTMsiUrKODzP6Eu8kk50qMDQcAGF0=w600',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950992639830523905',
                },
                {
                    title: '2021 Grumpy Cat Christmas Card',
                    thumbnail: '/assets/gifs/card23.gif',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950984943249129473',
                },
                {
                    title: '2021 Hohoho Christmas Card',
                    thumbnail: '/assets/gifs/card22.gif',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950982744225873921',
                },
                {
                    title: '2021 The Cat Christmas Card',
                    thumbnail: '/assets/gifs/card21.gif',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950981644714246145',
                },
                {
                    title: '2021 Santa Vibes Christmas Card',
                    thumbnail: '/assets/gifs/card20.gif',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950980545202618369',
                },
                {
                    title: '2021 Snowy Train Christmas Card',
                    thumbnail: '/assets/gifs/card19.gif',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950979445690990593',
                },
                {
                    title: '2021 Hoppy Santa Christmas Card',
                    thumbnail: '/assets/gifs/card18.gif',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950978346179362817',
                }
            ]
        },
        {
            title: 'The Book of Meta, Chapter 1',
            caption: "A world first dynamic NFT - the Book of Meta. Only the owner can see what is in the book. And each owner can leave a message in the book.",
            url: 'https://opensea.io/collection/christmas-card-2021',
            thumbnail: "https://i.redd.it/tvx2nu84i7z01.jpg",
            comingSoon: true,
            description: [
                "A world first dynamic NFT - the Book of Meta. Only the owner can see what is in the book. And each owner can leave a message in the book.",
                "What message will you find in this book?"
            ],
            items: [

            ]
        },
        {
            title: 'Digital dreamers',
            caption: "Digital abstract painting. Unique, collectible, generative digital art.",
            url: 'https://opensea.io/collection/digital-dreamers',
            thumbnail: "/assets/digital_dreamers/screens.gif",
            description: [
                "Digital abstract painting - how do androids dream? We attempted to find out"
            ],
            items: [
                {
                    title: 'Lithe dream',
                    thumbnail: '/assets/digital_dreamers/dream1.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950993739342151681',
                },
                {
                    title: 'Adamant dream',
                    thumbnail: '/assets/digital_dreamers/dream2.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950994838853779457',
                },
                {
                    title: 'Immutable dream',
                    thumbnail: '/assets/digital_dreamers/dream3.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950995938365407233',
                },
                {
                    title: 'Evasive dream',
                    thumbnail: '/assets/digital_dreamers/dream4.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950997037877035009',
                },
                {
                    title: 'Astute dream',
                    thumbnail: '/assets/digital_dreamers/dream5.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950998137388662785',
                },
                {
                    title: 'Egress dream',
                    thumbnail: '/assets/digital_dreamers/dream6.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950999236900290561/',
                },
                {
                    title: 'Amalgamated dream',
                    thumbnail: '/assets/digital_dreamers/dream7.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951000336411918337/',
                },
                {
                    title: 'Vexed dream',
                    thumbnail: '/assets/digital_dreamers/dream8.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951001435923546113/',
                },
                {
                    title: 'Obdurate dream',
                    thumbnail: '/assets/digital_dreamers/dream9.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951002535435173889/',
                },
                {
                    title: 'Husk dream',
                    thumbnail: '/assets/digital_dreamers/dream10.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951003634946801665/',
                },
                {
                    title: 'Discrete dream',
                    thumbnail: '/assets/digital_dreamers/dream11.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951004734458429441/',
                },
                {
                    title: 'Expostulate dream',
                    thumbnail: '/assets/digital_dreamers/dream12.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951005833970057217/',
                },
                {
                    title: 'Opprobrius dream',
                    thumbnail: '/assets/digital_dreamers/dream13.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951006933481684993/',
                },
                {
                    title: 'Ossified dream',
                    thumbnail: '/assets/digital_dreamers/dream14.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951008032993312769/',
                },
                {
                    title: 'Endemic dream',
                    thumbnail: '/assets/digital_dreamers/dream15.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951009132504940545',
                },
            ]
        },
        {
            title: 'The Planets of Meta',
            caption: "Pixelated visions of our future oasis. Collectible and unique NFT art.",
            url: 'https://opensea.io/collection/the-planets-of-meta',
            thumbnail: "/assets/planets/screens.gif",
            description: [
                "Digital abstract painting - how do androids dream? We attempted to find out",
                "This work is an elegiacal and haunting, kinetic cryptic collage of imagery consisting of grainy photos of ACT-UP activists being arrested which is reminiscent of mass migrations of people."
            ],
            items: [
                {
                    title: 'Pith',
                    thumbnail: '/assets/planets/card00021.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951010232016568321',
                },
                {
                    title: 'Brook',
                    thumbnail: '/assets/planets/card00020.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951011331528196097/',
                },
                {
                    title: 'Paean',
                    thumbnail: '/assets/planets/card00018.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951012431039823873/',
                },
                {
                    title: 'Aver',
                    thumbnail: '/assets/planets/card00017.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951013530551451649/',
                },
                {
                    title: 'Tautol',
                    thumbnail: '/assets/planets/card00016.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951014630063079425/',
                },
                {
                    title: 'Rift',
                    thumbnail: '/assets/planets/card00008.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951015729574707201/',
                },
                {
                    title: 'Obdur',
                    thumbnail: '/assets/planets/card00007.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951016829086334977/',
                },
                {
                    title: 'Penur',
                    thumbnail: '/assets/planets/card00006.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951017928597962753/',
                },
                {
                    title: 'Excins',
                    thumbnail: '/assets/planets/card00004.png',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951019028109590529/',
                },
               
            ]
        },
        {
            title: 'Bauhaus - study 1',
            caption: "This work is a minimal, assembled small collages from cut paper consisting of hyperreal landscapes which is reminiscent of bodily anxiety.",
            url: false,
            thumbnail: "/assets/bauhaus-1/screens.gif",
            description: [
                "This work is a brilliantly colored, hard-edge world in which death and waste are omnipresent consisting of a multi-channel image which is reminiscent of a preoccupation with haunted spaces, aporia and liminality.",
                "The work deploys obsessions with popular culture and video technologies as problematizing the traditional relationship between spectator and on-screen fetish object."
            ],
            items: [
                {
                    title: 'Bauhaus 1',
                    thumbnail: '/assets/bauhaus-1/bauhaus1.jpeg',
                    url: false,
                },
                {
                    title: 'Bauhaus 2',
                    thumbnail: '/assets/bauhaus-1/bauhaus2.jpeg',
                    url: false,
                },
                {
                    title: 'Bauhaus 3',
                    thumbnail: '/assets/bauhaus-1/bauhaus3.jpeg',
                    url: false,
                },
                {
                    title: 'Bauhaus 4',
                    thumbnail: '/assets/bauhaus-1/bauhaus4.jpeg',
                    url: false,
                },
                {
                    title: 'Bauhaus 5',
                    thumbnail: '/assets/bauhaus-1/bauhaus5.jpeg',
                    url: false,
                },
                {
                    title: 'Bauhaus 6',
                    thumbnail: '/assets/bauhaus-1/bauhaus6.jpeg',
                    url: false,
                },
                {
                    title: 'Bauhaus 7',
                    thumbnail: '/assets/bauhaus-1/bauhaus7.jpeg',
                    url: false,
                },
                {
                    title: 'Bauhaus 8',
                    thumbnail: '/assets/bauhaus-1/bauhaus8.jpeg',
                    url: false,
                },
                {
                    title: 'Bauhaus 9',
                    thumbnail: '/assets/bauhaus-1/bauhaus9.jpeg',
                    url: false,
                },
                {
                    title: 'Bauhaus 10',
                    thumbnail: '/assets/bauhaus-1/bauhaus10.jpeg',
                    url: false,
                }
            ]
        },
        {
            title: 'Trees - geometry study',
            caption: "This work is a brutal, primitivistic set of twenty trees consisting of transcendental beauty which is reminiscent of the pursuit of creativity.",
            url: false,
            thumbnail: "/assets/geobau/screens.gif",
            description: [
                "The work deploys meticulous attention as collapsing the past and present to use allegory as a form of live-action or real-time role-play.",
                "The work deploys experimental geography as symbolizing a breakdown between the natural and artificial."
            ],
            items: [
                {
                    title: 'Tree 1',
                    thumbnail: '/assets/geobau/tree1.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 2',
                    thumbnail: '/assets/geobau/tree2.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 3',
                    thumbnail: '/assets/geobau/tree3.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 4',
                    thumbnail: '/assets/geobau/tree4.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 5',
                    thumbnail: '/assets/geobau/tree5.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 6',
                    thumbnail: '/assets/geobau/tree6.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 7',
                    thumbnail: '/assets/geobau/tree7.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 8',
                    thumbnail: '/assets/geobau/tree8.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 9',
                    thumbnail: '/assets/geobau/tree9.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 10',
                    thumbnail: '/assets/geobau/tree10.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 11',
                    thumbnail: '/assets/geobau/tree11.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 12',
                    thumbnail: '/assets/geobau/tree12.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 13',
                    thumbnail: '/assets/geobau/tree13.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 14',
                    thumbnail: '/assets/geobau/tree14.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 15',
                    thumbnail: '/assets/geobau/tree15.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 16',
                    thumbnail: '/assets/geobau/tree16.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 17',
                    thumbnail: '/assets/geobau/tree17.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 18',
                    thumbnail: '/assets/geobau/tree18.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 19',
                    thumbnail: '/assets/geobau/tree19.jpeg',
                    url: false,
                },
                {
                    title: 'Tree 20',
                    thumbnail: '/assets/geobau/tree20.jpeg',
                    url: false,
                }
            ]
        },
        {
            title: 'Sphere - sacred geometries',
            caption: "The work deploys synthesized, hybrid organisms as denouncing the vast income gap between rich and poor.",
            url: false,
            thumbnail: "/assets/geoorphist/screens.gif",
            description: [
                "This work is an erasure-inducing, technological infinite visual abyss consisting of drawings and collages which is reminiscent of death as a metaphor for the possibility of spectacular transformation and rebirth.",
                "The work deploys synthesized, hybrid organisms as denouncing the vast income gap between rich and poor."
            ],
            items: [
                {
                    title: 'Sphere 1',
                    thumbnail: '/assets/geoorphist/orphist1.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 2',
                    thumbnail: '/assets/geoorphist/orphist2.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 3',
                    thumbnail: '/assets/geoorphist/orphist3.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 4',
                    thumbnail: '/assets/geoorphist/orphist4.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 5',
                    thumbnail: '/assets/geoorphist/orphist5.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 6',
                    thumbnail: '/assets/geoorphist/orphist6.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 7',
                    thumbnail: '/assets/geoorphist/orphist7.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 8',
                    thumbnail: '/assets/geoorphist/orphist8.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 9',
                    thumbnail: '/assets/geoorphist/orphist9.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 10',
                    thumbnail: '/assets/geoorphist/orphist10.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 11',
                    thumbnail: '/assets/geoorphist/orphist11.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 12',
                    thumbnail: '/assets/geoorphist/orphist12.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 13',
                    thumbnail: '/assets/geoorphist/orphist13.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 14',
                    thumbnail: '/assets/geoorphist/orphist14.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 15',
                    thumbnail: '/assets/geoorphist/orphist15.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 16',
                    thumbnail: '/assets/geoorphist/orphist16jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 17',
                    thumbnail: '/assets/geoorphist/orphist17.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 18',
                    thumbnail: '/assets/geoorphist/orphist18.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 19',
                    thumbnail: '/assets/geoorphist/orphist19.jpeg',
                    url: false,
                },
                {
                    title: 'Sphere 20',
                    thumbnail: '/assets/geoorphist/orphist20.jpeg',
                    url: false,
                }
                
            ]
        },
        {
            title: 'Geopop - secular shapes',
            caption: "The work deploys experimental geography as the affective dimension.",
            url: false,
            thumbnail: "/assets/geopop/screens.gif",
            description: [
                "This work is a virtual reality, hard-edge painting that is experienced both visually and physically consisting of individual inhabitants in a living network which is reminiscent of the dangers of dark magic and meditating on human suffering.",
                "The work deploys experimental geography as the affective dimension."
            ],
            items: [
                {
                    title: 'Geopop 1',
                    thumbnail: '/assets/geopop/geopop1.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 2',
                    thumbnail: '/assets/geopop/geopop2.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 3',
                    thumbnail: '/assets/geopop/geopop3.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 4',
                    thumbnail: '/assets/geopop/geopop4.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 5',
                    thumbnail: '/assets/geopop/geopop5.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 6',
                    thumbnail: '/assets/geopop/geopop6.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 7',
                    thumbnail: '/assets/geopop/geopop7.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 8',
                    thumbnail: '/assets/geopop/geopop8.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 9',
                    thumbnail: '/assets/geopop/geopop9.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 10',
                    thumbnail: '/assets/geopop/geopop10.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 11',
                    thumbnail: '/assets/geopop/geopop11.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 12',
                    thumbnail: '/assets/geopop/geopop12.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 13',
                    thumbnail: '/assets/geopop/geopop13.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 14',
                    thumbnail: '/assets/geopop/geopop14.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 15',
                    thumbnail: '/assets/geopop/geopop15.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 16',
                    thumbnail: '/assets/geopop/geopop16.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 17',
                    thumbnail: '/assets/geopop/geopop17.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 18',
                    thumbnail: '/assets/geopop/geopop18.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 19',
                    thumbnail: '/assets/geopop/geopop19.jpeg',
                    url: false,
                },
                {
                    title: 'Geopop 20',
                    thumbnail: '/assets/geopop/geopop20.jpeg',
                    url: false,
                }
            ]
        },
        {
            title: 'Triangular improvisation',
            caption: "The work deploys private symbols as symbolizing artistic freedom of speech has been “won” at the cost of art’s irrelevance and powerlessness.",
            url: false,
            thumbnail: "/assets/triangles/screens.gif",
            description: [
                "This work is a resonating and contrasting, sexuality-oriented infinite visual abyss consisting of elaborate sculptures and sets which is reminiscent of the unsettling dance of seduction, power, trust, tenderness, loss, and betrayal.",
                "The work deploys private symbols as symbolizing artistic freedom of speech has been “won” at the cost of art’s irrelevance and powerlessness."
            ],
            items: [
                {
                    title: 'Triangulus 1',
                    thumbnail: '/assets/triangles/triangle1.png',
                    url: false,
                },
                {
                    title: 'Triangulus 2',
                    thumbnail: '/assets/triangles/triangle2.png',
                    url: false,
                },
                {
                    title: 'Triangulus 3',
                    thumbnail: '/assets/triangles/triangle3.png',
                    url: false,
                },
                {
                    title: 'Triangulus 4',
                    thumbnail: '/assets/triangles/triangle4.png',
                    url: false,
                },
                {
                    title: 'Triangulus 5',
                    thumbnail: '/assets/triangles/triangle5.png',
                    url: false,
                },
                {
                    title: 'Triangulus 6',
                    thumbnail: '/assets/triangles/triangle6.png',
                    url: false,
                },
                {
                    title: 'Triangulus 7',
                    thumbnail: '/assets/triangles/triangle7.png',
                    url: false,
                },
                {
                    title: 'Triangulus 8',
                    thumbnail: '/assets/triangles/triangle8.png',
                    url: false,
                },
                {
                    title: 'Triangulus 9',
                    thumbnail: '/assets/triangles/triangle9.png',
                    url: false,
                },
                {
                    title: 'Triangulus 10',
                    thumbnail: '/assets/triangles/triangle10.png',
                    url: false,
                },
                {
                    title: 'Triangulus 11',
                    thumbnail: '/assets/triangles/triangle11.png',
                    url: false,
                },
                {
                    title: 'Triangulus 12',
                    thumbnail: '/assets/triangles/triangle12.png',
                    url: false,
                },
                {
                    title: 'Triangulus 13',
                    thumbnail: '/assets/triangles/triangle13.png',
                    url: false,
                },
                {
                    title: 'Triangulus 14',
                    thumbnail: '/assets/triangles/triangle14.png',
                    url: false,
                },
                {
                    title: 'Triangulus 15',
                    thumbnail: '/assets/triangles/triangle15.png',
                    url: false,
                },
                {
                    title: 'Triangulus 16',
                    thumbnail: '/assets/triangles/triangle16.png',
                    url: false,
                },
                {
                    title: 'Triangulus 17',
                    thumbnail: '/assets/triangles/triangle17.png',
                    url: false,
                },
                {
                    title: 'Triangulus 18',
                    thumbnail: '/assets/triangles/triangle18.png',
                    url: false,
                },
                {
                    title: 'Triangulus 19',
                    thumbnail: '/assets/triangles/triangle19.png',
                    url: false,
                },
                {
                    title: 'Triangulus 20',
                    thumbnail: '/assets/triangles/triangle20.png',
                    url: false,
                }
            ]
        }
    ]


    // Return selected collection, or all of them
    return (collectionId ? collections[id] : collections)
}