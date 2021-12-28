
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
            thumbnail: "/assets/digital_dreamers/header.gif",
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
                "Digital abstract painting - how do androids dream? We attempted to find out"
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
        }
    ]


    // Return selected collection, or all of them
    return (collectionId ? collections[id] : collections)
}