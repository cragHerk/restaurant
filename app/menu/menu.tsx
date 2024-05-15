"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const MenuComponent = () => {
  return (
    <section className="bg-black text-g flex flex-col justify-center items-center w-full truncate">
      <motion.div
        className=" pt-[140px] "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[100vw] lg:h-[calc(70vh)] h-auto static ">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-8xl font-semibold absolute left-[calc(50vw-150px)] top-[50%]"
          >
            MENU
          </motion.span>
          <Image
            src="/2.jpg"
            width={100}
            height={100}
            alt="menu"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </motion.div>
      <div
        id="menu-nav"
        className="w-full pt-[140px] flex items-center justify-center"
      >
        <div className="flex flex-wrap w-1/2">
          <button type="button" className=" p-1 m-1 bg-gold">
            Menu
          </button>
          <button type="button" className=" p-1 m-1 bg-gold">
            Dla dzieci
          </button>{" "}
          <button type="button" className=" p-1 m-1 bg-gold">
            Dodatki
          </button>{" "}
          <button type="button" className=" p-1 m-1 bg-gold">
            Desery
          </button>{" "}
          <button type="button" className=" p-1 m-1 bg-gold">
            Napoje
          </button>{" "}
          <button type="button" className=" p-1 m-1 bg-gold">
            Herbata
          </button>{" "}
          <button type="button" className=" p-1 m-1 bg-gold">
            Kawy
          </button>{" "}
          <button type="button" className=" p-1 m-1 bg-gold">
            Koktajle
          </button>{" "}
          <button type="button" className=" p-1 m-1 bg-gold">
            Piwo
          </button>{" "}
          <button type="button" className=" p-1 m-1 bg-gold">
            Wino
          </button>{" "}
          <button type="button" className=" p-1 m-1 bg-gold">
            Alkohole
          </button>{" "}
        </div>
      </div>
      <div className="py-[40px]">
        <div className="md:grid md:grid-cols-2 md:gap-[50px]  lg:grid-cols-3 ">
          <div id="starter" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Przystawki</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div className="relative">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Caprese </h3>{" "}
                <span>19zł</span>
              </div>
              <Image
                src="/leaf.svg"
                width={30}
                height={30}
                alt="leaf"
                className="absolute top-0 left-[-32px]"
              />{" "}
              <span className="text-white text-xs opacity-70">
                pomidor,rukola,mozarella
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between relative">
                <h3 className="text-xl font-bold text-white ">
                  Ser camembert panierowany{" "}
                </h3>{" "}
                <span>27zł</span>
                <Image
                  src="/leaf.svg"
                  width={30}
                  height={30}
                  alt="leaf"
                  className="absolute left-[-32px]"
                />
              </div>
              <span className="text-white text-xs opacity-70">
                mix sałat,żurawina
              </span>
            </div>
            <div>
              {" "}
              <div className="flex  justify-between">
                <h3 className="text-xl font-bold text-white ">Krewetki </h3>{" "}
                <span>39zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                czosnek,masło,białe wino
              </span>
            </div>
          </div>
          <div id="soup" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Zupy</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div className="flex  justify-between py-1">
              <h3 className="text-xl font-bold text-white ">
                Barszcz czerwony <br />
                <span className="text-sm">z uszkami</span>
              </h3>
              <span>22zł</span>
            </div>
            <div className="flex relative  justify-between py-1">
              {" "}
              <h3 className="text-xl font-bold text-white ">Krem czosnkowy </h3>
              <span>22zł</span>
              <Image
                src="/leaf.svg"
                width={30}
                height={30}
                alt="leaf"
                className="absolute left-[-32px]"
              />
            </div>
            <div className="flex relative justify-between py-1">
              {" "}
              <h3 className="text-xl font-bold text-white ">
                Krem z brokułów <br />
                <span className="text-sm">z grzankami</span>{" "}
              </h3>
              <span>22zł</span>
              <Image
                src="/leaf.svg"
                width={30}
                height={30}
                alt="leaf"
                className="absolute left-[-32px]"
              />
            </div>
          </div>
          <div id="pierogi" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Pierogi</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div className="flex  justify-between">
              <h3 className="text-xl font-bold text-white ">
                Pierogi z mięsem <br />
                <span className="text-sm">okraszone cebulką</span>
              </h3>
              <span>32zł</span>
            </div>
            <div className="flex relative  justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white ">
                Pierogi ruskie <br />
                <span className="text-sm">z cebulką</span>{" "}
              </h3>
              <span>32zł</span>
              <Image
                src="/leaf.svg"
                width={30}
                height={30}
                alt="leaf"
                className="absolute left-[-32px]"
              />
            </div>
          </div>
          <div id="gold" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Premium</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div className="relative">
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Czarny burger <br />
                  <span className="text-sm">z 23 karatowym złotem</span>
                </h3>
                <span>79zł</span>{" "}
                <Image
                  src="/gold-bar.svg"
                  width={30}
                  height={30}
                  alt="gold bar"
                  className="absolute top-[0px] right-[120px]"
                />
              </div>

              <span className="text-white text-xs opacity-70">
                Bułka pszenna czarna,wołowina,pancetta,rukola,pomidor, <br />
                ogórek,cebula,cheddar,frytki belgijskie,krążki cebulowe,
                <br />
                mix sałat
              </span>
            </div>
            <div>
              {" "}
              <div className="flex relative justify-between ">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Stek <br />
                  <span className="text-sm">z angusa australijskiego</span>
                </h3>{" "}
                <Image
                  src="/beef.svg"
                  width={30}
                  height={30}
                  alt="beef"
                  className="absolute top-[0px] right-[120px]"
                />
                <span>99zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Mix sałat,frytki belgijskie,grillowane warzywa,masło
              </span>
            </div>
            <div>
              <div className="flex justify-between mt-2 relative">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Czarne tagilatelle <br />
                  <span className="text-sm">z krewetkami</span>
                </h3>{" "}
                <span>48zł</span>
                <Image
                  src="/shrimps.svg"
                  width={30}
                  height={30}
                  alt="shrimps"
                  className="absolute top-[30px] right-[120px]"
                />
              </div>

              <span className="text-white text-xs opacity-70">
                Czosnek,masło,białe wino
              </span>
            </div>
          </div>
          <div id="meat" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Dania mięsne</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Shoarma drobiowa
                </h3>
                <span>39zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Frytki,mix sałat,sos
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between mt-2">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Grillowany schab z kością
                </h3>
                <span>47zł</span>
              </div>{" "}
              <span className="text-white text-xs opacity-70">
                ziemnaki opiekane,selekcja sałat
              </span>
            </div>
          </div>
          <div id="pasta" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Makarony</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">
                  Penne rigatoni{" "}
                </h3>{" "}
                <span>39zł</span>
              </div>

              <span className="text-white text-xs opacity-70">
                kurczak w sosie śmietanowym,
                <br />
                szpinak,czosnek,parmezan
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Penne chorizo{" "}
                </h3>{" "}
                <span>42zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Hiszpańska kiełbasa Chorizo,
                <br />
                grillowane warzywa,parmezan
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between relative">
                {" "}
                <h3 className="text-xl font-bold text-white ">Agilo olio </h3>
                <span>29zł</span>{" "}
                <Image
                  src="/leaf.svg"
                  width={30}
                  height={30}
                  alt="leaf"
                  className="absolute top-0 left-[-32px]"
                />{" "}
              </div>
              <span className="text-white text-xs opacity-70">
                Rukola,pomidorki koktajlowe,oliwa,czosnek
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">
                  Tagliatelle <br />
                  <span className="text-sm">z polędwiczką wieprzową</span>{" "}
                </h3>{" "}
                <span>45zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Cebula,czosnek,pieczarki,masło
              </span>
            </div>
          </div>
          <div id="burger" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Burgery</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <span className="text-white text-xs opacity-70">
              W zestawie z frytkami belgijskimi, krążkami cebulowymi,
              <br />
              mixem sałat oraz sosem czosnkowym
            </span>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Klasyczny{" "}
                </h3>{" "}
                <span>49zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Bułka pszenna,wołowina,cebula,pomidor,
                <br />
                ser cheddar,selekcja sałat,sos autorski
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Na ostro </h3>
                <span>51zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Bułka pszenna,wołowina,cebula,pomidor,
                <br />
                ser cheddar, selekcja sałat,jalapeno,sos ostry
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between relative">
                {" "}
                <h3 className="text-xl font-bold text-white ">Wege </h3>
                <span>49zł</span>
                <Image
                  src="/leaf.svg"
                  width={30}
                  height={30}
                  alt="leaf"
                  className="absolute top-0 left-[-32px]"
                />{" "}
              </div>
              <span className="text-white text-xs opacity-70">
                Bułka pszenna,burger warzywny,
                <br />
                cebula,pomidor,selekcja sałat
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Twins burger </h3>{" "}
                <span>65zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Bułka pszenna,podwójna wołowina,cebula,
                <br />
                pomidor,ser cheddar,ser camembert,
                <br />
                selekcja sałat,sos autorski
              </span>
            </div>
          </div>
          <div id="pizza" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Pizza, 32cm</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              {" "}
              <div className="flex justify-between relative">
                {" "}
                <h3 className="text-xl font-bold text-white ">Napoli </h3>{" "}
                <span>29zł</span>{" "}
                <Image
                  src="/leaf.svg"
                  width={30}
                  height={30}
                  alt="leaf"
                  className="absolute top-0 left-[-32px]"
                />{" "}
              </div>
              <span className="text-white text-xs opacity-70">
                Sos pomidorowy,mozarella,oregano
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">Verona </h3>{" "}
                <span>35zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Sos pomidorowy,mozarella,szynka,
                <br />
                pieczarki,oregano
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">Parma </h3>{" "}
                <span>45zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Sos pomidorowy,mozarella,szynka parmeńska,
                <br />
                rukola,pomidorki koktajlowe,parmezan
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">Milano </h3>{" "}
                <span>39zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Sos pomidorowy,mozarella,kurczak,
                <br />
                szpinak,parmezan
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">Roma </h3>{" "}
                <span>43zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Sos pomidorowy,mozarella,szynka,
                <br />
                boczek,salami,papryka,oregano
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between relative">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Torino (4 sery)
                </h3>{" "}
                <span>43zł</span>{" "}
                <Image
                  src="/leaf.svg"
                  width={30}
                  height={30}
                  alt="leaf"
                  className="absolute top-0 left-[-32px]"
                />{" "}
              </div>
              <span className="text-white text-xs opacity-70">
                Sos pomidorowy,mozarella
              </span>
            </div>
            <div className="w-[320px]">
              <h3 className="text-xl font-bold text-white ">Dodatki:</h3>

              <div className="flex justify-between ">
                <span className="text-white text-xs opacity-70">
                  Sos czosnkowy
                </span>
                <span> 4 zł</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-xs opacity-70">Ketchup</span>
                <span>4 zł</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-xs opacity-70">
                  Dodatek warzywny
                </span>
                <span>5 zł</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-xs opacity-70">
                  Dodatek mięsny
                </span>
                <span>7 zł</span>
              </div>
            </div>
          </div>
          <div id="kids" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Dla dzieci</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div className="flex justify-between relative">
              <h3 className="text-xl font-bold text-white ">
                Makaron penne <br />
                <span className="text-sm">z sosem pomidorowym</span>{" "}
              </h3>
              <span>19zł</span>{" "}
              <Image
                src="/leaf.svg"
                width={30}
                height={30}
                alt="leaf"
                className="absolute top-0 left-[-32px]"
              />{" "}
            </div>
            <div className="flex justify-between mt-2">
              {" "}
              <h3 className="text-xl font-bold text-white ">
                Stripsy z frytkami{" "}
              </h3>
              <span>25zł</span>
            </div>
            <div className="flex justify-between mt-2">
              {" "}
              <h3 className="text-xl font-bold text-white ">
                Pierogi na słodko z serem{" "}
              </h3>
              <span>23zł</span>
            </div>
            <div className="">
              {" "}
              <div className="flex justify-between mt-2">
                <h3 className="text-xl font-bold text-white ">
                  Pucharek lodowy{" "}
                </h3>
                <span>29zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                2 gałki lodów o smaku gumy balonowej,
                <br />
                bita śmietana,polewa,posypka
              </span>
            </div>
          </div>
          <div id="options" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Dodatki</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div className="flex justify-between mt-2">
              <h3 className="text-xl font-bold text-white ">Frytki</h3>

              <span>9zł</span>
            </div>
            <div className="flex justify-between mt-2">
              {" "}
              <h3 className="text-xl font-bold text-white ">
                Krążki cebulowe{" "}
              </h3>
              <span>9zł</span>
            </div>
          </div>
          <div id="salad" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Sałatki</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Sałatka cezar</h3>{" "}
                <span>42zł</span>
              </div>

              <span className="text-white text-xs opacity-70">
                Grillowany kurczak,bekon,selekcja sałat,
                <br />
                sos czosnkowy,grzanki,pomidorki cherry,
                <br />
                parmezan
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">
                  Sałatka <br />
                  <span className="text-sm">z polędwiczką wieprzową</span>{" "}
                </h3>
                <span>42zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Selekcja sałat,czosnek,pomidorki cherry,
                <br /> masło ziołowe
              </span>
            </div>
            <div>
              <div className="flex justify-between relative">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Sałatka z falafelem
                </h3>{" "}
                <span>39zł</span>
                <Image
                  src="/leaf.svg"
                  width={30}
                  height={30}
                  alt="leaf"
                  className="absolute top-0 left-[-32px]"
                />
              </div>

              <span className="text-white text-xs opacity-70">
                Selekcja sałat,pomidorki cherry,cebula,
                <br />
                sos balsamiczny
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Sałatka z kurczakiem <br />
                  <span className="text-sm">i mango</span>{" "}
                </h3>{" "}
                <span>42zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                grillowany kurczak,mango,selekcja sałat,
                <br />
                sos ogrodowy,pomidorki
              </span>
            </div>
          </div>
          <div id="dessert" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Desery</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">Panna cotta</h3>
                <span>23zł</span>
              </div>

              <span className="text-white text-xs opacity-70">
                Mus malinowy,owoce
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Szarlotka{" "}
                </h3>{" "}
                <span>23zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Gałka loda,bita śmietana
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">Brownie</h3>{" "}
                <span>23zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Karmel,orzechy,bita śmietana,owoce
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">Pancake </h3>{" "}
                <span>23zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Bita śmietana, owoce
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Lody śmietankowe
                </h3>{" "}
                <span>23zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Bita śmietana,mus malinowy
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">Creme brulée </h3>
                <span>23zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Mus malinowy,owoce
              </span>
            </div>
          </div>
          <div id="drink" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Napoje</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Napój gazowany 0.2 L
                </h3>{" "}
                <span>10zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Pepsi,pepsi max,mirinda,7up,shweppes
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Lemoniada 0.4 L{" "}
                </h3>{" "}
                <span>18zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Cytrynowo-miodowa,malinowo-truskawkowa
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Lemoniada Kraftowa 1L
                </h3>{" "}
                <span>29zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Cytrynowo-miodowa,malinowo-limonkowa
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Woda 0.2 L </h3>{" "}
                <span>7zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Gazowana,niegazowana
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Woda Karafka 1L
                </h3>{" "}
                <span>15zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Gazowana,niegazowana
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Sok 0.2 L </h3>
                <span>10zł</span>
              </div>
              <span className="text-white text-xs opacity-70">
                Jabłko,pomarańcza
              </span>
            </div>
            <div>
              {" "}
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">
                  Lipton Ice Tea 0.2 L{" "}
                </h3>{" "}
                <span>10zł</span>
              </div>
              <span className="text-white text-xs opacity-70">Brzoskwnia</span>
            </div>{" "}
            <div className="flex justify-between">
              <h3 className="text-xl font-bold text-white ">
                Rock Star energy drink 0.2 L{" "}
              </h3>{" "}
              <span>15zł</span>
            </div>
          </div>
          <div id="tea" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Herbata</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white ">Ceylon gold</h3>
              <span>10zł</span>
            </div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white mt-2">Earl grey</h3>
              <span>10zł</span>
            </div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white mt-2 ">
                Zielona sencha
              </h3>
              <span>10zł</span>
            </div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white mt-2">Miętowa</h3>
              <span>10zł</span>
            </div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white mt-2">Biała</h3>
              <span>10zł</span>
            </div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white mt-2">Owoce leśne</h3>
              <span>10zł</span>
            </div>
          </div>
          <div id="coffe" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Kawy</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white ">Espresso</h3>
              <span>8zł</span>
            </div>
            <div className="flex justify-between mt-2">
              {" "}
              <h3 className="text-xl font-bold text-white ">Espresso dopio</h3>
              <span>10zł</span>
            </div>
            <div className="flex justify-between mt-2">
              {" "}
              <h3 className="text-xl font-bold text-white ">Flat white</h3>
              <span>10zł</span>
            </div>
            <div className="flex justify-between mt-2">
              {" "}
              <h3 className="text-xl font-bold text-white ">Czarna</h3>
              <span>10zł</span>
            </div>
            <div className="flex justify-between mt-2">
              {" "}
              <h3 className="text-xl font-bold text-white ">Cappucino</h3>
              <span>12zł</span>
            </div>
            <div className="flex justify-between mt-2">
              {" "}
              <h3 className="text-xl font-bold text-white ">Latte</h3>
              <span>16zł</span>
            </div>
            <div className="flex justify-between mt-2">
              {" "}
              <h3 className="text-xl font-bold text-white ">Mrożona</h3>
              <span>19zł</span>
            </div>
            <span className="text-xs text-white opacity-70">
              Lody,syrop czekoladowy,bita śmietana
            </span>
          </div>
          <div id="cooktail" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Koktajle</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white ">
                Honey Mood <br />
                <span className="text-sm">(słodko-kwaśny)</span>
              </h3>
              <span>29zł</span>
            </div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white ">
                Tropical <br />
                <span className="text-sm">(słodko-tropikalny)</span>
              </h3>
              <span>29zł</span>
            </div>
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white ">
                Aperol Spiritz <br />
                <span className="text-sm"> (orzeźwiający)</span>
              </h3>
              <span>29zł</span>
            </div>{" "}
            <div className="flex justify-between">
              {" "}
              <h3 className="text-xl font-bold text-white ">
                Limoncello Spiritz <br />
                <span className="text-sm">(orzeźwiający)</span>
              </h3>{" "}
              <span>29zł</span>
            </div>
          </div>
          <div id="beer" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Piwo</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              <div className="flex justify-between">
                <h2 className="text-2xl text-white font-bold py-2">
                  Piwo Beczkowe
                </h2>
                <Image src="/barrel.svg" width={30} height={30} alt="barrel" />
              </div>

              <div className="w-[320px] h-[1px] bg-g my-2"></div>
              <div className="flex justify-between">
                {" "}
                <h3 className="text-xl font-bold text-white ">Żywiec 0.5L</h3>
                <span>17zł</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-white font-bold py-2">
                Piwo butelkowe
              </h2>{" "}
              <div className="w-[320px] h-[1px] bg-g my-2"></div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Żywiec 0.5L</h3>
                <span>17zł</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-white font-bold py-2">
                Bezalkoholowe 0.5L
              </h2>{" "}
              <div className="w-[320px] h-[1px] bg-g my-2"></div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Żywiec</h3>
                <span>17zł</span>
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Żywiec białe</h3>
                <span>17zł</span>
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Heineken</h3>
                <span>17zł</span>
              </div>
              <div className="">
                <div className="flex justify-between">
                  {" "}
                  <h3 className="text-xl font-bold text-white ">
                    Warka Radler
                  </h3>
                  <span>17zł</span>
                </div>

                <span className="text-white text-xs opacity-70">
                  Mango z pomarańczą,cytryna
                </span>
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white ">Sok malinowy</h3>
                <span>4zł</span>
              </div>
            </div>
          </div>

          <div id="wine" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Wino</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-2xl font-bold text-white py-2">Czerwone</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              <div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold text-white ">Domowe</h3>{" "}
                  <span>
                    <span className="text-white">150ml </span>18zł
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-white opacity-70">
                    Tempranillo,Spain
                  </span>{" "}
                  <span>
                    <span className="text-white">0,5L</span> 59zł
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  {" "}
                  <h3 className="text-xl font-bold text-white ">
                    Bordinese
                  </h3>{" "}
                  <span>
                    <span className="text-white">150ml</span> 18zł
                  </span>
                </div>

                <div className="flex justify-between">
                  {" "}
                  <span className="text-xs text-white opacity-70">
                    Montepulciano,Italy
                  </span>
                  <span>
                    <span className="text-white">0,7L</span> 79zł
                  </span>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white py-2">Białe</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              <div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold text-white ">Domowe</h3>
                  <span>
                    <span className="text-white">150ml</span> 18zł
                  </span>
                </div>
                <div className="flex justify-between">
                  {" "}
                  <span className="text-white opacity-70 text-xs">
                    Bianco Mocabeo,Spain
                  </span>
                  <span>
                    <span className="text-white">0,5L</span> 59zł
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white py-2">Wytrawne</h3>
                <div className="w-[320px] h-[1px] bg-g my-2"></div>
                <div className="flex justify-between">
                  <span className="text-white  opacity-70">
                    Pinot Grigio,Italy
                  </span>
                  <span>
                    <span className="text-white">150ml</span> 18zł
                  </span>
                  <span>
                    <span className="text-white">0,7L</span> 79zł
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mt-2 ">
                  Musujące
                </h3>{" "}
                <div className="w-[320px] h-[1px] bg-g my-2"></div>
                <div className="flex justify-between">
                  <span className="text-white  opacity-70">
                    Prosecco extra dry
                  </span>
                  <span>
                    <span className="text-white">150ml</span> 18zł
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white  opacity-70">
                    Adelina traviso,Italy
                  </span>
                  <span>
                    {" "}
                    <span className="text-white">0,7L</span> 79zł
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="alcohol" className="flex flex-col w-[320px]">
            <div>
              <div className="w-[320px] h-[1px] bg-g my-2"></div>
              <h2 className="text-3xl font-bold font-serif py-2">Alkohole</h2>
              <div className="w-[320px] h-[1px] bg-g my-2"></div>
              <div>
                <h3 className="text-2xl font-bold text-white py-2">Wódka</h3>
                <div className="w-[320px] h-[1px] bg-g my-2 "></div>
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold text-white ">Finlandia</h2>
                  <div className="flex flex-col text-right">
                    {" "}
                    <span>
                      <span className="text-white">40ml</span> 10zł
                    </span>
                    <span>
                      <span className="text-white">0.5L</span> 130zł
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold text-white ">
                    Biały bocian
                  </h2>
                  <div className="flex flex-col text-right">
                    <span>
                      <span className="text-white">40ml</span> 9zł
                    </span>
                    <span>
                      <span className="text-white">0.5L</span> 120zł
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2">
                  <h3 className="text-2xl font-bold text-white ">Whisky</h3>

                  <span>
                    <span className="text-white">40ml</span> 15zł{" "}
                    <span className="text-white">0,7 L</span> 250zł
                  </span>
                </div>
                <div className="w-[320px] h-[1px] bg-g my-2"></div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white ">
                    Jack Daniels
                  </span>
                  <span className="text-xl font-bold text-white ">
                    Jack Daniels Apple
                  </span>
                  <span className="text-xl font-bold text-white ">
                    Jack Daniels Honey
                  </span>
                  <span className="text-xl font-bold text-white ">Jameson</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white py-2">Rum</h3>
                <div className="w-[320px] h-[1px] bg-g my-2 "></div>
                <div className="flex justify-between">
                  <span className="text-xl font-bold text-white ">Bacardi</span>
                  <span>
                    <span className="text-white">40ml</span> 12zł{" "}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white py-2">Likier</h3>
                <div className="w-[320px] h-[1px] bg-g my-2 "></div>
                <div>
                  {" "}
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-white ">
                      Jagermeister
                    </span>
                    <div>
                      <span>
                        <span className="text-white">40ml</span> 12zł{" "}
                      </span>
                      <span>
                        <span className="text-white">0,5L</span> 150zł{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    {" "}
                    <span className="text-xl font-bold text-white ">
                      Wiśniówka
                    </span>
                    <div>
                      <span>
                        <span className="text-white">40ml</span> 10zł{" "}
                      </span>
                      <span>
                        <span className="text-white">0,5L</span> 130zł{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white py-2">Gin</h3>
                <div className="w-[320px] h-[1px] bg-g my-2 "></div>
                <div className="flex justify-between">
                  {" "}
                  <span className="text-xl font-bold text-white ">
                    Beefeater
                  </span>{" "}
                  <span>
                    <span className="text-white">40ml</span> 15zł{" "}
                  </span>{" "}
                  <span>
                    <span className="text-white">0,7L</span> 199zł{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="premium-drink" className="flex flex-col w-[320px]">
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <h2 className="text-3xl font-bold font-serif py-2">Premium</h2>
            <div className="w-[320px] h-[1px] bg-g my-2"></div>
            <div>
              <div className="flex justify-between">
                {" "}
                <h2 className="text-2xl font-bold text-white py-2">
                  Wina musujące
                </h2>
                <Image src="/wine.svg" width={30} height={30} alt="wine" />
              </div>

              <div className="w-[320px] h-[1px] bg-g my-2"></div>
              <div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold text-white ">
                    Moet&Chandon
                  </h3>
                  <span className="text-white">
                    0,75L <span className="text-g">349zł</span>
                  </span>
                </div>

                <span className="text-white text-xs opacity-70">
                  Brut Imperial,France
                </span>
              </div>
              <div>
                {" "}
                <div className="flex justify-between">
                  {" "}
                  <h3 className="text-xl font-bold text-white ">
                    Moet&Chandon
                  </h3>
                  <span className="text-white ">
                    0,75L <span className="text-g">399zł</span>
                  </span>
                </div>
                <span className="text-white text-xs opacity-70">
                  Rose Imperial,France
                </span>
              </div>
              <div>
                {" "}
                <div className="flex justify-between">
                  {" "}
                  <h3 className="text-xl font-bold text-white ">
                    Dom Perignon
                  </h3>
                  <span className="text-white ">
                    0,75L <span className="text-g">3499zł</span>
                  </span>
                </div>
                <span className="text-white text-xs opacity-70">
                  Chempion 2000,France
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;
