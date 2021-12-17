
export function getCollections(collectionId = false) {

    // Collections are indexed from 0
    const id = (collectionId ? collectionId - 1 : false)

    const collections = [
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
        }

    ]

    
    // Return selected collection, or all of them
    return (collectionId? collections[id] : collections)
}