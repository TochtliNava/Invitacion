import { LUGAR, BG, PHOTO_1, PHOTO_2, LAURELES } from "~/placeholder/placeholder";
import type { Route } from "./+types/home";
import Cronometro from "~/components/Cronometro";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ven a nuestra boda!" },
    { name: "description", content: "Ven a nuestra boda!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full font-[Roboto_Slab] ">

      <div className="flex flex-col relative bg-[url(./app/assets/img/placeholder1.png)] bg-cover bg-green-600 w-full md:flex md:flex-row-reverse md:bg-green-600">

        {/* <img
          src={PHOTO_1}
          alt="FOTO POTRAIT"
          className="md:hidden flex absolute"
        /> */}


        <div className="flex flex-col absolute z-20 h-full w-full">

          <div className="h-1/2"></div>

          <div className="h-1/2 mask backdrop-filter-[blur(8px)] mask-t-from-70%"></div>

        </div>


        <div className="flex flex-col z-30 h-full w-full">

          <div className="flex flex-col w-full items-center justify-center text-center text-white text-shadow-lg/40">

            <div className="flex w-full mt-3 h-100 justify-center">

              <div className="text-[1.2rem] text-shadow-lg/40">

                TE INVITAMOS A CELEBRAR

              </div>

              {/* <div className="text-[0.8rem]">UNIÓN ETERNA</div> */}

            </div>

            {/* <div className="h-full"></div> */}

            <div className="font-norma w-full pb-4">

              <div className="flex flex-col gap-5">

                <div className="flex flex-col text-center gap-5">

                  <div className="">

                    <div className="text-[1rem] mb-2">LA BODA DE</div>

                    <div className="text-6xl font-[Pinyon_Script] font-medium">Leslie & Héctor</div>

                  </div>

                  <div className="flex flex-col gap-3">

                    <div className="text-center text-[1rem] flex flex-row justify-center gap-6">

                      <div className="flex h-auto items-center">OCT</div>

                      <div className="flex text-2xl h-auto items-center">|</div>

                      <div className="flex flex-col text-[1.2rem] font-[450] h-auto justify-center">

                        <div className="flex items-center">SAB</div>

                        <div className="flex justify-center items-center">17</div>

                      </div>

                      <div className="flex text-2xl h-auto items-center">|</div>

                      <div className="flex h-auto items-center">2026</div>

                    </div>

                  </div>

                  <div className="text-center text-[0.8rem]">

                    <div className="">{LUGAR}</div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="flex flex-col h-full w-full bg-[url(./app/assets/img/bg3.jpg)] bg-cover bg-repeat">

        <div className="w-full flex z-30 absolute flex-col text-white text-shadow-lg/40">

            <Cronometro deadline={new Date("October 17, 2026 00:00:00")} />

          </div>

      </div>



    </div>
  );
}
