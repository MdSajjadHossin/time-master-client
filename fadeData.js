const watch = [
    {
        name: 'Rolex',
        price: '$5000' ,
        description: 'Rolex SA (/ˈroʊlɛks/) is a British-founded Swiss watch designer & manufacturer based in Geneva, Switzerland. ... Rolex did not produce their watches in-house since its foundation until the early 21st century where they bought over the components manufacturers which made the watches for Rolex, notably Aegler.',
        img: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Casio',
        price: '$2000' ,
        description: 'In the 1970s and 80s, Casio was best known for its electronic (including scientific) calculators, electronic musical instruments and affordable digital watches incorporating innovative technology. Today, Casio is most commonly known for making durable and reliable electronic products.',
        img: 'https://images.unsplash.com/photo-1613177794106-be20802b11d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzaW8lMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'Seiko-5',
        price: '$3000' ,
        description: 'The Seiko 5 is also steeped in horological history. When it stepped onto the scene in 1963, it was revolutionary. Seiko set out to build a watch with five attributes, from which the watch gets its name: a self-winding automatic movement, resistance to water, a day-date in a single window, a recessed crown.',
        img: 'https://images.unsplash.com/photo-1612817159623-0399784fd0ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Vpa298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'G-Shock',
        price: '$5000' ,
        description: 'Rolex SA (/ˈroʊlɛks/) is a British-founded Swiss watch designer & manufacturer based in Geneva, Switzerland. ... Rolex did not produce their watches in-house since its foundation until the early 21st century where they bought over the components manufacturers which made the watches for Rolex, notably Aegler.',
        img: 'https://images.unsplash.com/photo-1605583972593-1fda24a7bea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80'
    },
    {
        name: 'Omega',
        price: '$2500' ,
        description: 'The Omega Seamaster is a line of manual winding, automatic winding, chronometer, and quartz watches that Omega has produced since 1948. The Seamaster was worn in the James Bond movie franchise since 1995 (Bond wore Rolex Submariners in the prior films)',
        img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'Apple Watch',
        price: '$1000' ,
        description: 'Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. ... The Apple Watch iPhone app allows users to change settings, rearrange apps, choose notifications and download new apps from their iPhone.',
        img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'IWC',
        price: '$3500' ,
        description: 'On average, IWC watches lose 2.6% of their value per year. The value difference between their retail price and the current value is, on average, 35.5%. The resell value of IWC watches seem to be quite poor and generally very unattractive when considering the depreciating.',
        img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'Fossil',
        price: '$700' ,
        description: 'Fossil Group, Inc. is an American fashion designer and manufacturer founded in 1984 by Tom Kartsotis and based in Richardson, Texas. Their brands include Fossil, Relic, Michele Watch, Skagen Denmark, Misfit, WSI, and Zodiac Watches. Fossil also makes licensed accessories for brands such as BMW, Puma, Emporio Armani.',
        img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'Breitling',
        price: '$1500' ,
        description: 'Léon Breitling focused on chronographs, which were increasingly in demand at the time for industrial, military, and scientific applications as well as for athletic organizations. In 1889, Léon Breitling was granted a patent for a simplified model, which distinguished itself from its competitors through its sleek design.',
        img: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Tissot',
        price: '$500' ,
        description: 'Tissot watches are classified by the Swatch Group as "mid-range market" products. Tissot is an official timekeeper for the world championships in cycling, motorcycling, fencing and ice hockey, etc. Tissot was a sponsor for the Formula One car-racing teams Lotus, Renault, and Sauber.',
        img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZlcnJhaSUyMHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
]