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
        price: "29zł",
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
        price: "25zł",
        header: { pl: "z uszkami", en: "with ravioli" },
        vege: false,
      },
      {
        name: {
          pl: "Krem czosnkowy",
          en: "Garlic cream",
        },
        price: "25zł",
        vege: true,
      },
      {
        name: {
          pl: "Krem z brokułów ",
          en: "Cream of broccoli ",
        },
        price: "25zł",
        header: { pl: "z grzankami", en: "with croutons" },
        vege: true,
      },
      {
        name: {
          pl: "Zupa tajska ",
          en: "Thai soup",
        },
        price: "32zł",

        vege: false,
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
        price: "35zł",
        header: { pl: "okraszone cebulką", en: "onion-topped" },
        vege: false,
      },
      {
        name: {
          pl: "Pierogi ruskie",
          en: "Russian dumplings",
        },
        price: "35zł",
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
        price: "55zł",
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
        price: "45zł",
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
        price: "49zł",
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
        price: "42zł",
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
        price: "45zł",
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
        price: "32zł",
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
        price: "46zł",
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
        price: "52zł",
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

        price: "69zł",
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
        name: { pl: "Bergamo (ostra)", en: "Bergamo (spicy)" },
        price: "39zł",
        description: {
          pl: "Sos pomidorowy, mozarella, salami, papryka jalapenio",
          en: "Tomato sauce, mozzarella, salami, jalapenio peppers",
        },
        vege: false,
      },
      {
        name: { pl: "Verona", en: "Verona" },
        price: "36zł",
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
          pl: "Sos pomidorowy, mozarella, parmezan, lazur, provolone pikante",
          en: "Tomato sauce, mozzarella, parmezan, lazur, provolone pikante",
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

        price: "19zł",
        description: {
          pl: "2 gałki lodów, bita śmietana, polewa,posypka",
          en: "2 scoops of ice cream, whipped cream, topping,sprinkles",
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
        price: "10zł",
        vege: false,
      },
      {
        name: {
          pl: "Krążki cebulowe",
          en: "Onion Rings",
        },
        price: "10zł",
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
        price: "45zł",
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
        price: "45zł",
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
        price: "42zł",
        description: {
          pl: "Selekcja sałat, pomidorki cherry, cebula, sos balsamiczny",
          en: "Lettuce selection, cherry tomatoes, onions, balsamic dressing",
        },
        vege: true,
      },
      {
        name: {
          pl: "Sałatka z kurczakiem i mango ",
          en: "Chicken Salad with mango",
        },
        price: "45zł",
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
          pl: "Szarlotka",
          en: "Apple Cake",
        },
        price: "26zł",
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
        price: "26zł",
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
        price: "26zł",
        description: { pl: "Bita śmietana, owoce", en: "Whipped cream, fruit" },
        vege: false,
      },
      {
        name: {
          pl: "Lody śmietankowe",
          en: "Creamy Ice Cream",
        },
        price: "26zł",
        description: {
          pl: "Bita śmietana, mus malinowy",
          en: "Whipped cream, raspberry mousse",
        },
        vege: false,
      },
      {
        name: {
          pl: "Beza",
          en: "Meringue cake",
        },
        price: "26zł",
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
          pl: "Lemoniada Kraftowa 0.4 L",
          en: " Craft Lemonade 0.4 L",
        },
        price: "19zł",
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
        price: "32zł",
        description: {
          pl: "Cytrynowo-miodowa, malinowo-limonkowa",
          en: "Lemon-honey, raspberry-lime",
        },
        vege: false,
      },
      {
        name: {
          pl: "Woda Filtrowana 0.2 L",
          en: "Filtered Water 0.2 L",
        },
        price: "8zł",
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
          pl: "Red Bull - Energy drink  0.25 L",
          en: "Red Bull - Energy drink  0.25 L",
        },
        price: "18zł",
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
        price: "12zł",
        vege: false,
      },
      {
        name: {
          pl: "Earl Grey",
          en: "Earl Grey",
        },
        price: "12zł",
        vege: false,
      },
      {
        name: {
          pl: "Zielona sencha",
          en: "Green Sencha",
        },
        price: "12zł",
        vege: false,
      },
      {
        name: {
          pl: "Miętowa",
          en: "Mint",
        },
        price: "12zł",
        vege: false,
      },

      {
        name: {
          pl: "Owoce leśne",
          en: "Forest Fruits",
        },
        price: "12zł",
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
        price: "10zł",
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
          pl: "Z mlekiem",
          en: "Flat White",
        },
        price: "12zł",
        vege: false,
      },
      {
        name: {
          pl: "Czarna",
          en: "Black",
        },
        price: "12zł",
        vege: false,
      },
      {
        name: {
          pl: "Cappucino",
          en: "Cappuccino",
        },
        price: "14zł",
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
          pl: "Kawa, mleko, lód",
          en: "Coffe, milk, ice",
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
          pl: "Pink Sarti Spritz (Owocowa Słodycz)",
          en: "Pink Sarti Spritz (Fruity Sweetness)",
        },
        header: {
          pl: "Sarti, prosecco, woda sodowa, limonka",
          en: "Sarti, prosecco, soda water, lime",
        },
        price: "32zł",
        vege: false,
      },
      {
        name: {
          pl: "Tropical (Słodko Tropikalny)",
          en: "Tropical (Sweet Tropical)",
        },
        header: {
          pl: "Wódka, marakuja, ananas, cytryna",
          en: "Vodka, passion fruit, pineapple, lemon",
        },
        price: "32zł",
        vege: false,
      },
      {
        name: {
          pl: "Aperol Spiritz (Orzeźwiający, Słodko-Gorzki)",
          en: "Aperol Spiritz (refreshing, bittersweet)",
        },
        header: {
          pl: "Aperol, prosecco, pomarańcza, woda sodowa",
          en: "Aperol, prosecco, orange, soda water",
        },
        price: "32zł",
        vege: false,
      },
      {
        name: {
          pl: "Mojito (Orzeźwiający)",
          en: "Mojito (refreshing)",
        },
        header: {
          pl: "Rum, limonka, mięta, cukier trzcinowy, woda sodowa",
          en: "Rum, lime, mint, cane sugar, soda water",
        },
        price: "32zł",
        vege: false,
      },
      {
        name: {
          pl: "Campari Spritz (Orzeźwiająco-Gorzki)",
          en: "Campari Spritz (Refreshing and Bitter)",
        },
        header: {
          pl: "Campari, prosecco, woda sodowa, pomarańcza",
          en: "Campari, prosecco, soda water, orange",
        },
        price: "32zł",
        vege: false,
      },
      {
        name: {
          pl: "Crodino 0% (Wytrawno-Owocowy)",
          en: "Crodino 0% (dry and fruity)",
        },
        header: {
          pl: "Crodino bezalkoholowe, pomarańcza, woda sodowa",
          en: "Crodino alcohol-free, orange, soda water",
        },
        price: "32zł",
        vege: false,
      },
      {
        name: {
          pl: "Green Frog (Słodko-Kwaśny)",
          en: "Green Frog (Sweet and Sour)",
        },
        header: {
          pl: "Wódka, blue curacco, sok pomarańczowy, owoc",
          en: "Vodka, blue curacco, orange juice, fruit",
        },
        price: "32zł",
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
          en: "Draft Beer",
        },
        name: {
          pl: "Żywiec 0.5L",
          en: "Żywiec 0.5L",
        },
        price: "18zł",
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
        price: "18zł",
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
        price: "18zł",
        vege: false,
      },
      {
        name: {
          pl: "Żywiec białe",
          en: "Żywiec White",
        },
        price: "18zł",
        vege: false,
      },
      {
        name: {
          pl: "Heineken",
          en: "Heineken",
        },
        price: "18zł",
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
        price: "18zł",
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
          pl: "Cabernet Sauvignon",
          en: "Cabernet Sauvignon",
        },
        description: {
          pl: "Select wine daos, medium sweet",
          en: "Select wine daos, medium sweet",
        },

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
      // {
      //   type: {
      //     pl: "Wytrawne",
      //     en: "Dry",
      //   },
      //   name: {
      //     pl: "Pinot",
      //     en: "Pinot",
      //   },
      //   description: {
      //     pl: "Grigio, Italy",
      //     en: "Grigio, Italy",
      //   },

      //   price: "79zł",
      //   bottle: "0,7 L",
      //   glass: "18zł",
      //   glassSize: "150ml",
      //   vege: false,
      // },
      {
        type: {
          pl: "Musujące",
          en: "Sparkling",
        },
        name: {
          pl: "Prosecco Lamia, Italy",
          en: "Prosecco Lamia, Italy",
        },
        description: {
          pl: "",
          en: "",
        },

        price: "79zł",
        bottle: "0,7 L",
        glass: "18zł",
        glassSize: "150ml",
        vege: false,
      },
      // {
      //   name: {
      //     pl: "Adelina",
      //     en: "Adelina",
      //   },
      //   description: {
      //     pl: "traviso,Italy",
      //     en: "traviso,Italy",
      //   },

      //   price: "79zł",
      //   bottle: "0,7 L",
      //   glass: "18zł",
      //   glassSize: "150ml",
      //   vege: false,
      // },
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
