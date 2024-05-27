import { MenuTypes } from "./MenuTypes";
const menuData: MenuTypes[] = [
  {
    id: "1",
    type: "food",
    category: {
      pl: "Przystawki",
      en: "Starters",
    },
    items: [
      {
        name: {
          pl: "Caprese",
          en: "Caprese",
        },
        price: "19zł",
        description: {
          pl: "pomidor, rukola, mozarella",
          en: "tomato, arugula, mozzarella",
        },
        vege: true,
      },
      {
        name: {
          pl: "Ser camembert",
          en: "Camembert cheese",
        },
        header: { pl: "panierowany", en: "breaded" },
        price: "27zł",
        description: {
          pl: " mix sałat, żurawina",
          en: "salad mix, cranberries",
        },
        vege: true,
      },
      {
        name: {
          pl: "Krewetki",
          en: "Shrimps",
        },
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
    category: {
      pl: "Zupy",
      en: "Soups",
    },
    items: [
      {
        name: {
          pl: "Barszcz czerwony",
          en: "Red borscht",
        },
        price: "22zł",
        header: { pl: "z uszkami", en: "with ravioli" },
        vege: false,
      },
      {
        name: {
          pl: "Krem czosnkowy",
          en: "Garlic cream",
        },
        price: "22zł",
        vege: true,
      },
      {
        name: {
          pl: "Krem z brokułów ",
          en: "Cream of broccoli ",
        },
        price: "22zł",
        header: { pl: "z grzankami", en: "with croutons" },
        vege: true,
      },
    ],
  },
  {
    id: "3",
    type: "food",
    category: {
      pl: "Pierogi",
      en: "Dumplings",
    },
    items: [
      {
        name: {
          pl: "Pierogi z mięsem ",
          en: "Dumplings with meat",
        },
        price: "32zł",
        header: { pl: "okraszone cebulką", en: "onion-topped" },
        vege: false,
      },
      {
        name: {
          pl: "Pierogi ruskie",
          en: "Russian dumplings",
        },
        price: "32zł",
        header: { pl: "z cebulką", en: "with onion" },
        vege: true,
      },
    ],
  },
  {
    id: "4",
    type: "food",
    category: {
      pl: "Premium",
      en: "Premium",
    },
    items: [
      {
        name: {
          pl: "Czarny burger",
          en: "Black burger",
        },
        header: { pl: "z 23-karatowym złotem", en: "with 23-karat gold" },
        price: "79zł",
        description: {
          pl: "Bułka pszenna czarna, wołowina, pancetta, rukola, pomidor, ogórek, cebula, cheddar, frytki belgijskie, krążki cebulowe, mix sałat",
          en: "Black wheat bun, beef, pancetta, arugula, tomato, cucumber, onion, cheddar, Belgian fries, onion rings, salad mix",
        },
        vege: false,
        image: "/gold-bar.svg",
      },
      {
        name: {
          pl: "Stek",
          en: "Steak",
        },
        header: { pl: "z angusa australijskiego", en: "with Australian Angus" },
        price: "99zł",
        description: {
          pl: "Mix sałat, frytki belgijskie, grillowane warzywa, masło",
          en: "Mixed salads, Belgian fries, grilled vegetables, butter",
        },
        vege: false,
        image: "/beef.svg",
      },
      {
        name: {
          pl: "Czarne tagilatelle",
          en: "Black tagilatelle",
        },
        header: { pl: "z krewetkami", en: "with shrimps" },
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
    category: {
      pl: "Dania mięsne",
      en: "Meat dishes",
    },
    items: [
      {
        name: {
          pl: "Shoarma drobiowa",
          en: "Poultry shoarma",
        },
        price: "39zł",
        description: {
          pl: "Frytki, mix sałat,sos",
          en: "French fries, lettuce mix,dressing",
        },
        vege: false,
      },
      {
        name: {
          pl: "Grilowany schab z kością",
          en: "Grilled pork loin on the bone",
        },
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
    category: {
      pl: "Makarony",
      en: "Pastas",
    },
    items: [
      {
        name: {
          pl: "Penne rigatoni",
          en: "Penne rigatoni",
        },
        price: "39zł",
        description: {
          pl: "kurczak w sosie śmietanowym, szpinak, czosnek, parmezan",
          en: "chicken in cream sauce, spinach, garlic, parmesan",
        },
        vege: false,
      },
      {
        name: {
          pl: "Penne chorizo",
          en: "Penne chorizo",
        },
        price: "42zł",
        description: {
          pl: "Hiszpańska kiełbasa chorizo, grillowane warzywa, parmezan",
          en: "Spanish chorizo sausage, grilled vegetables, parmesan cheese",
        },
        vege: false,
      },
      {
        name: {
          pl: "Agilo olio",
          en: "Agilo olio",
        },
        price: "29zł",
        description: {
          pl: "Rukola, pomidorki koktajlowe, oliwa, czosnek",
          en: "Arugula, cherry tomatoes, oil, garlic",
        },
        vege: true,
      },
      {
        name: {
          pl: "Tagilatelle",
          en: "Tagilatelle",
        },
        header: { pl: "z polędwiczką wieprzową", en: "with pork tenderloin" },
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
    category: {
      pl: "Burgery",
      en: "Burgers",
    },
    burgerDescription: {
      pl: "W zestawie z frytkami belgijskimi, krążkami cebulowymi, mixem sałat oraz sosem czosnkowym",
      en: "It comes with Belgian fries, onion rings, salad mix and garlic sauce",
    },

    items: [
      {
        name: {
          pl: "Klasyczny",
          en: "Classic",
        },
        price: "49zł",
        description: {
          pl: "Bułka pszenna, wołowina, cebula, pomidor, ser cheddar, selekcja sałat, sos autorski",
          en: "Wheat roll, beef, onion, tomato, cheddar cheese, lettuce selection, author's dressing",
        },
        vege: false,
      },
      {
        name: { pl: "Na ostro", en: "Spicy" },
        price: "51zł",
        description: {
          pl: "Bułka pszenna, wołowina, cebula, pomidor, ser cheddar, selekcja sałat, jalapeno, sos ostry",
          en: "Wheat roll, beef, onion, tomato, cheddar cheese, lettuce selection, jalapeno, hot sauce",
        },
        vege: false,
      },
      {
        name: { pl: "Wege", en: "Veggie" },
        price: "49zł",
        description: {
          pl: "Bułka pszenna, burger warzywny, cebula,pomidor, selekcja sałat",
          en: "Wheat bun, vegetable burger, onion,tomato, lettuce selection",
        },
        vege: true,
      },
      {
        name: { pl: "Twins burger", en: "Twins burger" },

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
    category: {
      pl: "Pizza,32cm",
      en: "Pizza,32cm",
    },

    items: [
      {
        name: { pl: "Napoli", en: "Napoli" },
        price: "29zł",
        description: {
          pl: "Sos pomidorowy, mozarella, oregano",
          en: "Tomato sauce, mozzarella, oregano",
        },
        vege: true,
      },
      {
        name: { pl: "Verona", en: "Verona" },
        price: "35zł",
        description: {
          pl: "Sos pomidorowy, mozarella, szynka, pieczarki, oregano",
          en: "Tomato sauce, mozzarella, ham, mushrooms, oregano",
        },
        vege: false,
      },
      {
        name: { pl: "Milano", en: "Milano" },
        price: "39zł",
        description: {
          pl: "Sos pomidorowy, mozarella, kurczak, szpinak, parmezan",
          en: "Tomato sauce, mozzarella, chicken, spinach, parmesan cheese",
        },
        vege: false,
      },
      {
        name: { pl: "Roma", en: "Roma" },
        price: "43zł",
        description: {
          pl: "Sos pomidorowy, mozarella, szynka, boczek, salami, papryka, oregano",
          en: "Tomato sauce, mozzarella, ham, bacon, salami, peppers, oregano",
        },
        vege: false,
      },
      {
        name: { pl: "Torino (4 sery)", en: "Torino (4 cheeses)" },
        price: "43zł",
        description: {
          pl: "Sos pomidorowy, mozarella",
          en: "Tomato sauce, mozzarella",
        },
        vege: true,
      },
      {
        name: { pl: "Dodatki", en: "Add-ons" },
        price1: "4zł",
        description1: {
          pl: "Sos czosnkowy",
          en: "Garlic sauce",
        },
        price2: "4zł",
        description2: {
          pl: "Keczup",
          en: "Ketchup",
        },
        price3: "5zł",
        description3: {
          pl: "Dodatek warzywny",
          en: "Vegetable supplement",
        },
        price4: "7zł",
        description4: {
          pl: "Dodatek mięsny",
          en: "Meat supplement",
        },
        vege: false,
      },
    ],
  },
  {
    id: "9",
    type: "food",
    category: {
      pl: "Dla dzieci",
      en: "For children",
    },
    items: [
      {
        name: {
          pl: "Makaron penne",
          en: "Penne Pasta",
        },
        header: { pl: "z sosem pomidorowym", en: "with tomato sauce" },
        price: "19zł",
        vege: true,
      },
      {
        name: {
          pl: "Stripsy z frytkami",
          en: "Strips with Fries",
        },
        price: "25zł",
        vege: false,
      },
      {
        name: {
          pl: "Pierogi na słodko z serem",
          en: "Sweet dumplings with Cheese",
        },
        price: "23zł",
        vege: false,
      },
      {
        name: {
          pl: "Pucharek lodowy",
          en: "Ice Cream Bowl",
        },

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
    category: {
      pl: "Dodatki",
      en: "Additions",
    },
    items: [
      {
        name: {
          pl: "Frytki",
          en: "Fries",
        },
        price: "9zł",
        vege: false,
      },
      {
        name: {
          pl: "Krążki cebulowe",
          en: "Onion Rings",
        },
        price: "25zł",
        vege: false,
      },
    ],
  },
  {
    id: "11",
    type: "food",
    category: {
      pl: "Sałatki",
      en: "Salads",
    },

    items: [
      {
        name: {
          pl: "Sałatka cezar",
          en: "Caesar Salad",
        },
        price: "42zł",
        description: {
          pl: "Grillowany kurczak, bekon, selekcja sałat, sos czosnkowy, grzanki, pomidorki cherry,parmezan",
          en: "Grilled chicken, bacon, lettuce selection, garlic sauce, croutons, cherry tomatoes,parmesan cheese",
        },
        vege: false,
      },
      {
        name: {
          pl: "Sałatka",
          en: "Salad",
        },
        header: { pl: "z polędwiczką wieprzową", en: "with pork tenderloin" },
        price: "42zł",
        description: {
          pl: "Selekcja sałat, czosnek, pomidorki cherry, masło ziołowe",
          en: "Lettuce selection, garlic, cherry tomatoes, herb butter",
        },
        vege: false,
      },
      {
        name: {
          pl: "Sałatka z falafelem",
          en: "Falafel Salad",
        },
        price: "39zł",
        description: {
          pl: "Selekcja sałat, pomidorki cherry, cebula, sos balsamiczny",
          en: "Lettuce selection, cherry tomatoes, onions, balsamic dressing",
        },
        vege: true,
      },
      {
        name: {
          pl: "Sałatka z kurczakiem ",
          en: "Chicken Salad",
        },
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
    category: {
      pl: "Desery",
      en: "Desserts",
    },

    items: [
      {
        name: {
          pl: "Panna Cotta",
          en: "Panna Cotta",
        },
        price: "23zł",
        description: {
          pl: "Mus malinowy, owoce",
          en: "Raspberry mousse, fruit",
        },
        vege: false,
      },
      {
        name: {
          pl: "Szarlotka",
          en: "Apple Cake",
        },
        price: "23zł",
        description: {
          pl: "Gałka loda, bita śmietana",
          en: "A scoop of ice cream, whipped cream",
        },
        vege: false,
      },
      {
        name: {
          pl: "Brownie",
          en: "Brownie",
        },
        price: "23zł",
        description: {
          pl: "Karmel, orzechy, bita śmietana,owoce",
          en: "Caramel, nuts, whipped cream,fruit",
        },
        vege: false,
      },
      {
        name: {
          pl: "Pancake ",
          en: "Pancake",
        },
        price: "23zł",
        description: { pl: "Bita śmietana, owoce", en: "Whipped cream, fruit" },
        vege: false,
      },
      {
        name: {
          pl: "Lody śmietankowe",
          en: "Creamy Ice Cream",
        },
        price: "23zł",
        description: {
          pl: "Bita śmietana, mus malinowy",
          en: "Whipped cream, raspberry mousse",
        },
        vege: false,
      },
      {
        name: {
          pl: "Creme brulée",
          en: "Creme Brulée",
        },
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
    category: {
      pl: "Napoje",
      en: "Drinks",
    },

    items: [
      {
        name: {
          pl: "Napój gazowany 0.2 L",
          en: "Soda 0.2 L",
        },
        price: "10zł",
        description: {
          pl: "Pepsi, pepsi max, mirinda, 7up, shweppes",
          en: "Pepsi, pepsi max, mirinda, 7up, shweppes",
        },
        vege: false,
      },
      {
        name: {
          pl: "Lemoniada 0.4 L",
          en: "Lemonade 0.4 L",
        },
        price: "18zł",
        description: {
          pl: "Cytrynowo-miodowa, malinowo-truskawkowa",
          en: "Lemon-honey, raspberry-strawberry”",
        },
        vege: false,
      },
      {
        name: {
          pl: "Lemoniada Kraftowa 1L",
          en: "Craft Lemonade 1L",
        },
        price: "29zł",
        description: {
          pl: "Cytrynowo-miodowa, malinowo-limonkowa",
          en: "Lemon-honey, raspberry-lime",
        },
        vege: false,
      },
      {
        name: {
          pl: "Woda 0.2 L",
          en: "Water 0.2 L",
        },
        price: "7zł",
        description: {
          pl: "Gazowana, niegazowana",
          en: "Carbonated, non-carbonated",
        },
        vege: false,
      },
      {
        name: {
          pl: "Woda Karafka 1L",
          en: "Water Carafe 1L",
        },
        price: "15zł",
        description: {
          pl: "Gazowana, niegazowana",
          en: "Carbonated, non-carbonated",
        },
        vege: false,
      },
      {
        name: {
          pl: "Sok 0.2 L",
          en: "Juice 0.2 L",
        },
        price: "10zł",
        description: { pl: "Jabłko, pomarańcza", en: "Apple, orange" },
        vege: false,
      },
      {
        name: {
          pl: " Lipton Ice Tea 0.2 L",
          en: "Lipton Ice Tea 0.2 L",
        },
        price: "10zł",
        description: { pl: "Brzoskwnia", en: "Birchbox" },
        vege: false,
      },
      {
        name: {
          pl: "Rock Star energy  0.2 L",
          en: "Rock Star energy  0.2 L",
        },
        price: "15zł",
        vege: false,
      },
    ],
  },
  {
    id: "14",
    type: "drink",
    category: {
      pl: "Herbata",
      en: "Tea",
    },

    items: [
      {
        name: {
          pl: "Ceylon Gold",
          en: "Ceylon Gold",
        },
        price: "10zł",
        vege: false,
      },
      {
        name: {
          pl: "Earl Grey",
          en: "Earl Grey",
        },
        price: "10zł",
        vege: false,
      },
      {
        name: {
          pl: "Zielona sencha",
          en: "Green Sencha",
        },
        price: "10zł",
        vege: false,
      },
      {
        name: {
          pl: "Miętowa",
          en: "Mint",
        },
        price: "10zł",
        vege: false,
      },
      {
        name: {
          pl: "Biała",
          en: "White",
        },
        price: "10zł",
        vege: false,
      },
      {
        name: {
          pl: "Owoce leśne",
          en: "Forest Fruits",
        },
        price: "10zł",
        vege: false,
      },
    ],
  },
  {
    id: "15",
    type: "drink",
    category: {
      pl: "Kawy",
      en: "Coffees",
    },

    items: [
      {
        name: {
          pl: "Espresso",
          en: "Espresso",
        },
        price: "8zł",
        vege: false,
      },
      {
        name: {
          pl: "Espresso doppio",
          en: "Espresso doppio",
        },
        price: "10zł",
        vege: false,
      },
      {
        name: {
          pl: "Flat white",
          en: "Flat White",
        },
        price: "10zł",
        vege: false,
      },
      {
        name: {
          pl: "Czarna",
          en: "Black",
        },
        price: "10zł",
        vege: false,
      },
      {
        name: {
          pl: "Cappucino",
          en: "Cappuccino",
        },
        price: "12zł",
        vege: false,
      },
      {
        name: {
          pl: "Latte",
          en: "Latte",
        },
        price: "16zł",
        vege: false,
      },
      {
        name: {
          pl: "Mrożona",
          en: "Frozen",
        },
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
    category: {
      pl: "Koktajle",
      en: "Cocktails",
    },

    items: [
      {
        name: {
          pl: "Honey Mood",
          en: "Honey Mood",
        },
        header: {
          pl: "(słodko-kwaśny)",
          en: "(sweet and sour)",
        },
        price: "29zł",
        vege: false,
      },
      {
        name: {
          pl: "Tropical",
          en: "Tropical",
        },
        header: { pl: "(słodko-tropikalny)", en: "sweet-tropical" },
        price: "29zł",
        vege: false,
      },
      {
        name: {
          pl: "Aperol Spiritz",
          en: "Aperol Spiritz",
        },
        header: {
          pl: "(orzeźwiający)",
          en: "(refreshing)",
        },
        price: "29zł",
        vege: false,
      },
      {
        name: {
          pl: "Limoncello Spiritz",
          en: "Limoncello Spiritz",
        },
        header: {
          pl: "(orzeźwiający)",
          en: "(refreshing)",
        },
        price: "29zł",
        vege: false,
      },
    ],
  },
  {
    id: "17",
    type: "beer",
    category: {
      pl: "Piwo",
      en: "Beer",
    },

    items: [
      {
        type: {
          pl: "Piwo Beczkowe",
          en: "Cask Ale",
        },
        name: {
          pl: "Żywiec 0.5L",
          en: "Żywiec 0.5L",
        },
        price: "17zł",
        vege: false,
      },
      {
        type: {
          pl: "Piwo butelkowe",
          en: "Bottled Beer",
        },
        name: {
          pl: "Żywiec 0.5L",
          en: "Żywiec 0.5L",
        },
        price: "17zł",
        vege: false,
      },
      {
        type: {
          pl: "Bezalkoholowe 0.5L",
          en: "Non-alcoholic 0.5L",
        },
        name: {
          pl: "Żywiec",
          en: "Żywiec",
        },
        price: "17zł",
        vege: false,
      },
      {
        name: {
          pl: "Żywiec białe",
          en: "Żywiec White",
        },
        price: "17zł",
        vege: false,
      },
      {
        name: {
          pl: "Heineken",
          en: "Heineken",
        },
        price: "17zł",
        vege: false,
      },
      {
        name: {
          pl: "Warka Radler",
          en: "Warka Radler",
        },
        description: {
          pl: "Mango z pomarańczą, cytryna",
          en: "Mango with orange, lemon",
        },
        price: "17zł",
        vege: false,
      },
      {
        name: {
          pl: "Sok malinowy",
          en: "Raspberry Juice",
        },
        price: "4zł",
        vege: false,
      },
    ],
  },
  {
    id: "18",
    type: "wine",
    category: {
      pl: "Wino",
      en: "Wine",
    },

    items: [
      {
        type: {
          pl: "Czerwone",
          en: "Red",
        },
        name: {
          pl: "Domowe",
          en: "Homemade",
        },
        description: { pl: "Tempranillo, Spain", en: "Tempranillo, Spain" },
        price: "59zł",
        bottle: "0,5 L",
        glass: "18zł",
        glassSize: "150ml",
        vege: false,
      },
      {
        name: {
          pl: "Bordinese",
          en: "Bordinese",
        },
        description: { pl: "Montepulciano, Italy", en: "Montepulciano, Italy" },

        price: "79zł",
        bottle: "0,7 L",
        glass: "18zł",
        glassSize: "150ml",
        vege: false,
      },
      {
        type: {
          pl: "Białe",
          en: "White",
        },
        name: {
          pl: "Domowe",
          en: "Homemade",
        },
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
        type: {
          pl: "Wytrawne",
          en: "Dry",
        },
        name: {
          pl: "Pinot",
          en: "Pinot",
        },
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
        type: {
          pl: "Musujące",
          en: "Sparkling",
        },
        name: {
          pl: "Prosecco",
          en: "Prosecco",
        },
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
        name: {
          pl: "Adelina",
          en: "Adelina",
        },
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
    category: {
      pl: "Alkohole",
      en: "Alcohols",
    },

    items: [
      {
        type: {
          pl: "Wódka",
          en: "Vodka",
        },
        name: {
          pl: "Finlandia",
          en: "Finlandia",
        },
        price: "130zł",
        bottle: "0,5 L",
        glass: "10zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        name: {
          pl: "Biały bocian",
          en: "Biały bocian",
        },
        price: "120zł",
        bottle: "0,5 L",
        glass: "9zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        type: {
          pl: "Whisky",
          en: "Whisky",
        },
        name: {
          pl: "Jack Daniels",
          en: "Jack Daniels",
        },
        description: { pl: "Zwykły,Apple,Honey", en: "Plain,Apple,Honey" },
        price: "250zł",
        bottle: "0,7 L",
        glass: "15zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        name: {
          pl: "Jameson",
          en: "Jameson",
        },
        price: "250zł",
        bottle: "0,7 L",
        glass: "15zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        type: {
          pl: "Rum",
          en: "Rum",
        },
        name: {
          pl: "Bacardi",
          en: "Bacardi",
        },
        price: "150zł",
        bottle: "0,5 L",
        glass: "12zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        type: {
          pl: "Likier",
          en: "Liqueur",
        },
        name: {
          pl: "Jagermeister",
          en: "Jagermeister",
        },
        price: "150zł",
        bottle: "0,5 L",
        glass: "12zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        name: {
          pl: "Wiśniówka",
          en: "Wiśniówka",
        },
        price: "130zł",
        bottle: "0,5 L",
        glass: "10zł",
        glassSize: "40ml",
        vege: false,
      },
      {
        type: {
          pl: "Gin",
          en: "Gin",
        },
        name: {
          pl: "Beefeater",
          en: "Beefeater",
        },
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
    type: "wine",
    category: {
      pl: "Wina Premium",
      en: "Premium Wine",
    },

    items: [
      {
        type: {
          pl: "Wina musujące",
          en: "Sparkling Wines",
        },

        name: {
          pl: "Moet&Chandon",
          en: "Moet&Chandon",
        },
        description: {
          pl: "Brut Imperial, France",
          en: "Brut Imperial, France",
        },
        price: "349zł",
        bottle: "0,75 L",
        vege: false,
      },
      {
        name: {
          pl: "Moet&Chandon",
          en: "Moet&Chandon",
        },
        description: {
          pl: "Rose Imperial, France",
          en: "Rose Imperial, France",
        },

        price: "399zł",
        bottle: "0,75 L",
        vege: false,
      },
      {
        name: {
          pl: "Dom Perignon",
          en: "Dom Perignon",
        },
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
