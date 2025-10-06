import Image from "next/image";
import { US, EU, JP } from "country-flag-icons/react/3x2";

interface CardType {
  title: string;
  extra: string;
  children: React.ReactNode
}

interface countryCardType {
  countryFlag: React.ComponentType<{ className: string }>;
  currency: string;
  currencyName: string;
  budget: string;
  z: number;
}

const CountryCards: countryCardType[] = [
  { countryFlag: JP, currency: "JPY", currencyName: "Japanese Yen", budget: "+¥1500.00", z: 30 },
  { countryFlag: US, currency: "USD", currencyName: "US Dollar", budget: "+$290.99", z: 20 },
  { countryFlag: EU, currency: "EUR", currencyName: "Euro", budget: "-€20.99", z: 10 },
];

function Card({ title, extra, children }: CardType) {
  return (
    <div className="bg-[#F6F6F6] flex flex-col space-y-2 sm:space-y-4 w-full md:max-w-md h-[32rem] md:h-[41rem] rounded-3xl lg:rounded-4xl px-4 md:px-3 lg:px-6 py-4 md:py-5 lg:py-7">
      <div className="px-2 space-y-1">
        <p className="font-semibold text-lg md:text-xl lg:text-2xl">{title}</p>
        <p className="text-[#A0A0A0] font-medium text-sm md:text-base">Experience the freedom of hassle free modern transactions and say
          goodbye to unnecessary fears and enjoy seamless transactions.</p>

        <div className="bg-black w-fit rounded-full px-3 py-2 flex items-center justify-center my-3">
          <span className="font-medium text-xs text-[#9F9F9F]">{extra}</span>
        </div>
      </div>

      {children}
    </div>
  );
}

export default function Investment() {
  return (
    <section className="flex flex-col items-center space-y-20 py-16 sm:py-20 px-2 lg:px-12 my-20">

      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md bg-white shadow-lg shadow-[#bebebe]/40">
          <div className="w-1 h-1 rounded-full bg-[#058E00] ring-1 ring-[#2dd327] animate-ping"></div>
          <span className="font-medium text-xs sm:text-sm text-[#058E00]">Investments</span>
        </div>

        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl sm:max-w-3xl text-center">
          Spend, save and manage your money, all in one place.
        </h2>

        <p className="font-medium text-[#A0A0A0] text-xs sm:text-sm md:text-base">
          Open a full bank account from your phone, for free.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-10">
        <Card
          title={"Security that never sleeps"}
          extra={"Explore security"}
        >
          <div className="relative flex items-end justify-center h-full px-2 mt-4 sm:mt-0">
            <Image
              src={"/black-card.svg"}
              width={250}
              height={100}
              alt={"card"}
              className="absolute w-[155px] md:w-[200px] lg:w-[230px] lg:top-[103px] md:top-[136px] top-[67.5px] left-2 "
            />

            <Image
              src={"/green-card.svg"}
              width={232}
              height={100}
              alt={"card"}
              className="absolute w-[130px] md:w-[180px] lg:w-[210px] left-[110px] md:left-32 md:top-[194px] lg:top-[165.5px] top-[125px] lg:left-37 "
            />
          </div>
        </Card>

        <Card
          title={"Free global transfers"}
          extra={"Explore transfers"}
        >
          <div className="relative flex flex-col items-center justify-center mt-2 lg:mt-5">
            {CountryCards.map((card, i) => {
              const Flag = card.countryFlag;

              return (
                <div
                  key={i}
                  className={`bg-white rounded-full flex items-center px-4 lg:px-6 py-2 shadow-lg shadow-[#A0A0A0] w-fit h-fit absolute transition-transform duration-300 hover:translate-y-2`}
                  style={{ top: `${i * 40}px`, zIndex: card.z }}
                >
                  <Flag className="w-3 h-3 md:w-5 md:h-5 lg:w-9 lg:h-9" />
                  <div className="flex justify-between gap-10 md:gap-18 lg:gap-22">
                    <div className="flex flex-col px-4">
                      <p className="font-medium text-xs md:text-sm lg:text-base">{card.currencyName}</p>
                      <p className="font-normal text-[10px] sm:text-xs text-[#B5B5B5]">{card.currency}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-medium text-[10px] sm:text-xs">{card.budget}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            <Image
              src={"/earth.svg"}
              width={500}
              height={100}
              alt={"earth"}
              className="absolute mt-4 sm:mt-0 w-[250px] md:w-[310px] lg:w-[500px] top-[177.5px] md:top-[280px] lg:top-[239px]"
            />

          </div>
        </Card>
      </div >

    </section >
  );
}