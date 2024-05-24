import { MenuTypes } from "./MenuTypes";
const menuData: MenuTypes[] = [
  {
    id: "1",
    type: "food",
    category: "Przystawki",
    items: [
      {
        name: "Caprese",
        price: "19zł",
        description: {
          pl: "pomidor, rukola, mozarella",
          en: "tomato, arugula, mozzarella",
        },
        vege: true,
      },
      {
        name: "Ser camembert",
        header: "panierowany",
        price: "27zł",
        description: {
          pl: " mix sałat, żurawina",
          en: "salad mix, cranberries",
        },
        vege: true,
      },
      {
        name: "Krewetki",
        price: "39zł",
        description: {
          pl: " czosnek, masło, białe wino",
          en: " garlic, butter, white wine",
        },
        vege: false,
      },
    ],
  },
  {
    id: "2",
    type: "food",
    category: "Zupy",
    items: [
      {
        name: "Barszcz czerwony",
        price: "22zł",
        header: "z uszkami",
        vege: false,
      },
      {
        name: "Krem czosnkowy",
        price: "22zł",
        vege: true,
      },
      {
        name: "Krem z brokułów",
        price: "22zł",
        header: "z grzankami",
        vege: true,
      },
    ],
  },
  {
    id: "3",
    type: "food",
    category: "Pierogi",
    items: [
      {
        name: "Pierogi z mięsem ",
        price: "32zł",
        header: "okraszone cebulką",
        vege: false,
      },
      {
        name: "Pierogi ruskie ",
        price: "32zł",
        header: "z cebulką",
        vege: true,
      },
    ],
  },
  {
    id: "4",
    type: "food",
    category: "Premium",
    items: [
      {
        name: "Czarny burger ",
        header: "z 23 karatowym złotem",
        price: "79zł",
        description: {
          pl: "Bułka pszenna czarna, wołowina, pancetta, rukola, pomidor, ogórek, cebula, cheddar, frytki belgijskie, krążki cebulowe, mix sałat",
          en: "Black wheat bun, beef, pancetta, arugula, tomato, cucumber, onion, cheddar, Belgian fries, onion rings, salad mix",
        },
        vege: false,
        image: "/gold-bar.svg",
      },
      {
        name: "Stek ",
        header: "z angusa australijskiego",
        price: "99zł",
        description: {
          pl: "Mix sałat, frytki belgijskie, grillowane warzywa, masło",
          en: "Mixed salads, Belgian fries, grilled vegetables, butter",
        },
        vege: false,
        image: "/beef.svg",
      },
      {
        name: "Czarne tagilatelle ",
        header: "z krewetkami",
        price: "48zł",
        description: {
          pl: "Czosnek, masło, białe wino",
          en: "Garlic, butter, white wine",
        },
        vege: false,
        image: "/shrimps.svg",
      },
    ],
  },
  {
    id: "5",
    type: "food",
    category: "Dania mięsne",
    items: [
      {
        name: "Shoarma drobiowa",
        price: "39zł",
        description: {
          pl: "Frytki, mix sałat,sos",
          en: "French fries, lettuce mix,dressing",
        },
        vege: false,
      },
      {
        name: "Grillowany schab z kością",
        price: "47zł",
        description: {
          pl: "ziemnaki opiekane, selekcja sałat",
          en: "toasted earthenware, lettuce selection",
        },
        vege: false,
      },
    ],
  },
  {
    id: "6",
    type: "food",
    category: "Makarony",
    items: [
      {
        name: "Penne rigatoni",
        price: "39zł",
        description: {
          pl: "kurczak w sosie śmietanowym, szpinak, czosnek, parmezan",
          en: "chicken in cream sauce, spinach, garlic, parmesan",
        },
        vege: false,
      },
      {
        name: "Penne chorizo",
        price: "42zł",
        description: {
          pl: "Hiszpańska kiełbasa chorizo, grillowane warzywa, parmezan",
          en: "Spanish chorizo sausage, grilled vegetables, parmesan cheese",
        },
        vege: false,
      },
      {
        name: "Agilo olio",
        price: "29zł",
        description: {
          pl: "Rukola, pomidorki koktajlowe, oliwa, czosnek",
          en: "Arugula, cherry tomatoes, oil, garlic",
        },
        vege: true,
      },
      {
        name: "Tagliatelle",
        header: "z polędwiczką wieprzową",
        price: "45zł",
        description: {
          pl: "Cebula, czosnek, pieczarki, masło",
          en: "Onions, garlic, mushrooms, butter",
        },
        vege: false,
      },
    ],
  },
  {
    id: "7",
    type: "food",
    category: "Burgery",
    burgerDescription:
      "W zestawie z frytkami belgijskimi, krążkami cebulowymi, mixem sałat oraz sosem czosnkowym",
    items: [
      {
        name: "Klasyczny",
        price: "49zł",
        description: {
          pl: "Bułka pszenna, wołowina, cebula, pomidor, ser cheddar, selekcja sałat, sos autorski",
          en: "Wheat roll, beef, onion, tomato, cheddar cheese, lettuce selection, author's dressing",
        },
        vege: false,
      },
      {
        name: "Na ostro",
        price: "51zł",
        description: {
          pl: "Bułka pszenna, wołowina, cebula, pomidor, ser cheddar, selekcja sałat, jalapeno, sos ostry",
          en: "Wheat roll, beef, onion, tomato, cheddar cheese, lettuce selection, jalapeno, hot sauce",
        },
        vege: false,
      },
      {
        name: "Wege ",
        price: "49zł",
        description: {
          pl: "Bułka pszenna, burger warzywny, cebula,pomidor, selekcja sałat",
          en: "Wheat bun, vegetable burger, onion,tomato, lettuce selection",
        },
        vege: true,
      },
      {
        name: "Twins burger",
        header: "",
        price: "65zł",
        description: {
          pl: "Bułka pszenna, podwójna wołowina, cebula, pomidor, ser cheddar, ser camembert, selekcja sałat, sos autorski",
          en: "Wheat roll, double beef, onion, tomato, cheddar cheese, camembert cheese, lettuce selection, author's dressing",
        },
        vege: false,
      },
    ],
  },
  {
    id: "8",
    type: "pizza",
    category: "Pizza, 32cm",

    items: [
      {
        name: "Napoli",
        price: "29zł",
        description: {
          pl: "Sos pomidorowy, mozarella, oregano",
          en: "Tomato sauce, mozzarella, oregano",
        },
        vege: true,
      },
      {
        name: "Verona",
        price: "35zł",
        description: {
          pl: "Sos pomidorowy, mozarella, szynka, pieczarki, oregano",
          en: "Tomato sauce, mozzarella, ham, mushrooms, oregano",
        },
        vege: false,
      },
      {
        name: "Milano",
        price: "39zł",
        description: {
          pl: "Sos pomidorowy, mozarella, kurczak, szpinak, parmezan",
          en: "Tomato sauce, mozzarella, chicken, spinach, parmesan cheese",
        },
        vege: false,
      },
      {
        name: "Roma",
        price: "43zł",
        description: {
          pl: "Sos pomidorowy, mozarella, szynka, boczek, salami, papryka, oregano",
          en: "Tomato sauce, mozzarella, ham, bacon, salami, peppers, oregano",
        },
        vege: false,
      },
      {
        name: "Torino (4 sery)",
        price: "43zł",
        description: {
          pl: "Sos pomidorowy, mozarella",
          en: "Tomato sauce, mozzarella",
        },
        vege: true,
      },
      {
        name: "Dodatki",
        price1: "4zł",
        description1: "Sos czosnkowy",
        price2: "4zł",
        description2: "Ketchup",
        price3: "5zł",
        description3: "Dodatek warzywny",
        price4: "7zł",
        description4: "Dodatek mięsny",
        vege: false,
      },
    ],
  },
  {
    id: "9",
    type: "food",
    category: "Dla dzieci",
    items: [
      {
        name: "Makaron penne",
        header: "z sosem pomidorowym",
        price: "19zł",
        vege: true,
      },
      {
        name: "Stripsy z frytkami",
        price: "25zł",
        vege: false,
      },
      {
        name: "Pierogi na słodko z serem ",
        price: "23zł",
        vege: false,
      },
      {
        name: "Pucharek lodowy",

        price: "29zł",
        description: {
          pl: "2 gałki lodów o smaku gumy balonowej, bita śmietana, polewa,posypka",
          en: "2 scoops of bubble gum flavored ice cream, whipped cream, topping,sprinkles",
        },
        vege: false,
      },
    ],
  },
  {
    id: "10",
    type: "food",
    category: "Dodatki",
    items: [
      {
        name: "Frytki",
        price: "9zł",
        vege: false,
      },
      {
        name: "Krążki cebulowe",
        price: "25zł",
        vege: false,
      },
    ],
  },
  {
    id: "11",
    type: "food",
    category: "Sałatki",

    items: [
      {
        name: "Sałatka cezar",
        price: "42zł",
        description: {
          pl: "Grillowany kurczak, bekon, selekcja sałat, sos czosnkowy, grzanki, pomidorki cherry,parmezan",
          en: "Grilled chicken, bacon, lettuce selection, garlic sauce, croutons, cherry tomatoes,parmesan cheese",
        },
        vege: false,
      },
      {
        name: "Sałatka",
        header: "z polędwiczką wieprzową",
        price: "42zł",
        description: {
          pl: "Selekcja sałat, czosnek, pomidorki cherry, masło ziołowe",
          en: "Lettuce selection, garlic, cherry tomatoes, herb butter",
        },
        vege: false,
      },
      {
        name: "Sałatka z falafelem",
        price: "39zł",
        description: {
          pl: "Selekcja sałat, pomidorki cherry, cebula, sos balsamiczny",
          en: "Lettuce selection, cherry tomatoes, onions, balsamic dressing",
        },
        vege: true,
      },
      {
        name: "Sałatka z kurczakiem ",
        price: "42zł",
        description: {
          pl: "grillowany kurczak, mango, selekcja sałat, sos ogrodowy,pomidorki",
          en: "grilled chicken, mango, salad selection, garden dressing,tomatoes",
        },
        vege: false,
      },
    ],
  },
  {
    id: "12",
    type: "food",
    category: "Desery",

    items: [
      {
        name: "Panna cotta",
        price: "23zł",
        description: {
          pl: "Mus malinowy, owoce",
          en: "Raspberry mousse, fruit",
        },
        vege: false,
      },
      {
        name: "Szarlotka",
        price: "23zł",
        description: {
          pl: "Gałka loda, bita śmietana",
          en: "A scoop of ice cream, whipped cream",
        },
        vege: false,
      },
      {
        name: "Brownie",
        price: "23zł",
        description: {
          pl: "Karmel, orzechy, bita śmietana,owoce",
          en: "Caramel, nuts, whipped cream,fruit",
        },
        vege: false,
      },
      {
        name: "Pancake ",
        price: "23zł",
        description: { pl: "Bita śmietana, owoce", en: "Whipped cream, fruit" },
        vege: false,
      },
      {
        name: "Lody śmietankowe",
        price: "23zł",
        description: {
          pl: "Bita śmietana, mus malinowy",
          en: "Whipped cream, raspberry mousse",
        },
        vege: false,
      },
      {
        name: "Creme brulée",
        price: "23zł",
        description: {
          pl: " Mus malinowy, owoce",
          en: "Raspberry mousse, fruit",
        },
        vege: false,
      },
    ],
  },
  {
    id: "13",
    type: "drink",
    category: "Napoje",

    items: [
      {
        name: "Napój gazowany 0.2 L",
        price: "10zł",
        description: {
          pl: "Pepsi, pepsi max, mirinda, 7up, shweppes",
          en: "Pepsi, pepsi max, mirinda, 7up, shweppes",
        },
        vege: false,
      },
      {
        name: "Lemoniada 0.4 L",
        price: "18zł",
        description: {
          pl: "Cytrynowo-miodowa, malinowo-truskawkowa",
          en: "Lemon-honey, raspberry-strawberry”",
        },
        vege: false,
      },
      {
        name: "Lemoniada Kraftowa 1L",
        price: "29zł",
        description: {
          pl: "Cytrynowo-miodowa, malinowo-limonkowa",
          en: "Lemon-honey, raspberry-lime",
        },
        vege: false,
      },
      {
        name: "Woda 0.2 L",
        price: "7zł",
        description: {
          pl: "Gazowana, niegazowana",
          en: "Carbonated, non-carbonated",
        },
        vege: false,
      },
      {
        name: "Woda Karafka 1L",
        price: "15zł",
        description: {
          pl: "Gazowana, niegazowana",
          en: "Carbonated, non-carbonated",
        },
        vege: false,
      },
      {
        name: "Sok 0.2 L",
        price: "10zł",
        description: { pl: "Jabłko, pomarańcza", en: "Apple, orange" },
        vege: false,
      },
      {
        name: " Lipton Ice Tea 0.2 L",
        price: "10zł",
        description: { pl: "Brzoskwnia", en: "Birchbox" },
        vege: false,
      },
      {
        name: "Rock Star energy  0.2 L",
        price: "15zł",
        vege: false,
      },
    ],
  },
  {
    id: "14",
    type: "drink",
    category: "Herbata",

    items: [
      {
        name: "Ceylon gold",
        price: "10zł",
        vege: false,
      },
      {
        name: "Earl grey",
        price: "10zł",
        vege: false,
      },
      {
        name: "Zielona sencha",
        price: "10zł",
        vege: false,
      },
      {
        name: "Miętowa",
        price: "10zł",
        vege: false,
      },
      {
        name: "Biała",
        price: "10zł",
        vege: false,
      },
      {
        name: "Owoce leśne",
        price: "10zł",
        vege: false,
      },
    ],
  },
  {
    id: "15",
    type: "drink",
    category: "Kawy",

    items: [
      {
        name: "Espresso",
        price: "8zł",
        vege: false,
      },
      {
        name: "Espresso dopio",
        price: "10zł",
        vege: false,
      },
      {
        name: "Flat white",
        price: "10zł",
        vege: false,
      },
      {
        name: "Czarna",
        price: "10zł",
        vege: false,
      },
      {
        name: "Cappucino",
        price: "12zł",
        vege: false,
      },
      {
        name: "Latte",
        price: "16zł",
        vege: false,
      },
      {
        name: "Mrożona",
        description: {
          pl: "Lody, syrop czekoladowy, bita śmietana",
          en: "Ice cream, chocolate syrup, whipped cream",
        },
        price: "19zł",
        vege: false,
      },
    ],
  },
  {
    id: "16",
    type: "alcohol",
    category: "Koktajle",

    items: [
      {
        name: "Honey Mood",
        header: "(słodko-kwaśny)",
        price: "29zł",
        vege: false,
      },
      {
        name: "Tropical",
        header: "(słodko-tropikalny)",
        price: "29zł",
        vege: false,
      },
      {
        name: "Aperol Spiritz",
        header: "(orzeźwiający)",
        price: "29zł",
        vege: false,
      },
      {
        name: "Limoncello Spiritz",
        header: "(orzeźwiający)",
        price: "29zł",
        vege: false,
      },
    ],
  },
  {
    id: "17",
    type: "beer",
    category: "Piwo",

    items: [
      {
        type: "Piwo Beczkowe",
        name: "Żywiec 0.5L",
        price: "17zł",
        vege: false,
      },
      {
        type: "Piwo butelkowe",
        name: "Żywiec 0.5L",
        price: "17zł",
        vege: false,
      },
      {
        type: "Bezalkoholowe 0.5L",
        name: "Żywiec",
        price: "17zł",
        vege: false,
      },
      {
        name: "Żywiec białe",
        price: "17zł",
        vege: false,
      },
      {
        name: "Heineken",
        price: "17zł",
        vege: false,
      },
      {
        name: "Warka Radler",
        description: {
          pl: "Mango z pomarańczą, cytryna",
          en: "Mango with orange, lemon",
        },
        price: "17zł",
        vege: false,
      },
      {
        name: "Sok malinowy",
        price: "4zł",
        vege: false,
      },
    ],
  },
  {
    id: "18",
    type: "wine",
    category: "Wino",

    items: [
      {
        type: "Czerwone",
        name: "Domowe",
        description: { pl: "Tempranillo, Spain", en: "Tempranillo, Spain" },
        price: "59zł",
        bottle: "0,5 L",
        glass: "18zł",
        glassSize: "150ml",
        vege: false,
      },
      {
        name: "Bordinese",
        description: { pl: "Montepulciano, Italy", en: "Montepulciano, Italy" },

        price: "79zł",
        bottle: "0,7 L",
        glass: "18zł",
        glassSize: "150ml",
        vege: false,
      },
      {
        type: "Białe",
        name: "Domowe",
        description: {
          pl: "Bianco Mocabeo, Spain",
          en: "Bianco Mocabeo, Spain",
        },

        price: "59zł",
        bottle: "0,5 L",
        glass: "18zł",
        glassSize: "150ml",
        vege: false,
      },
      {
        type: "Wytrawne",
        name: "Pinot",
        description: {
          pl: "Grigio, Italy",
          en: "Grigio, Italy",
        },

        price: "79zł",
        bottle: "0,7 L",
        glass: "18zł",
        glassSize: "150ml",
        vege: false,
      },
      {
        type: "Musujące",
        name: "Prosecco",
        description: {
          pl: "extra dry",
          en: "extra dry",
        },

        price: "79zł",
        bottle: "0,7 L",
        glass: "18zł",
        glassSize: "150ml",
        vege: false,
      },
      {
        name: "Adelina",
        description: {
          pl: "traviso,Italy",
          en: "traviso,Italy",
        },

        price: "79zł",
        bottle: "0,7 L",
        glass: "18zł",
        glassSize: "150ml",
        vege: false,
      },
    ],
  },
  {
    id: "19",
    type: "alcohol",
    category: "Alkohole",

    items: [
      {
        type: "Wódka",
        name: "Finlandia",
        price: "130zł",
        bottle: "0,5 L",
        glass: "10zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        name: "Biały bocian",
        price: "120zł",
        bottle: "0,5 L",
        glass: "9zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        type: "Whisky",
        name: "Jack Daniels",
        description: { pl: "Zwykły,Apple,Honey", en: "Plain,Apple,Honey" },
        price: "250zł",
        bottle: "0,7 L",
        glass: "15zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        name: "Jameson",
        price: "250zł",
        bottle: "0,7 L",
        glass: "15zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        type: "Rum",
        name: "Bacardi",
        price: "150zł",
        bottle: "0,5 L",
        glass: "12zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        type: "Likier",
        name: "Jagermeister",
        price: "150zł",
        bottle: "0,5 L",
        glass: "12zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        name: "Wiśniówka",
        price: "130zł",
        bottle: "0,5 L",
        glass: "10zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        type: "Gin",
        name: "Beefeater",
        price: "199zł",
        bottle: "0,7 L",
        glass: "15zł",
        glassSize: "40ml",
        vege: false,
      },
    ],
  },
  {
    id: "20",
    type: "alcohol",
    category: "Alkohol Premium",

    items: [
      {
        type: "Wina musujące",

        name: "Moet&Chandon",
        description: {
          pl: "Brut Imperial, France",
          en: "Brut Imperial, France",
        },
        price: "349zł",
        bottle: "0,75 L",
        vege: false,
      },
      {
        name: "Moet&Chandon",
        description: {
          pl: "Rose Imperial, France",
          en: "Rose Imperial, France",
        },

        price: "399zł",
        bottle: "0,75 L",
        vege: false,
      },
      {
        name: "Dom Perignon",
        description: {
          pl: "Chempion 2000, France",
          en: "Chempion 2000, France",
        },

        price: "3499zł",
        bottle: "0,75 L",
        vege: false,
      },
    ],
  },
];

export default menuData;
