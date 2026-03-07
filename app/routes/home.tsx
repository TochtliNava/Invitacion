import { LUGAR, BG, PHOTO_1, PHOTO_2, LAURELES, FRASE } from "~/placeholder/placeholder";
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
    <div className="flex flex-col bg-[#b3a8a5] h-full w-full font-[Roboto_Slab] ">

      <div className="flex flex-col relative bg-[url(./app/assets/img/placeholder1.png)] bg-cover bg-green-600 w-full md:flex md:flex-row-reverse md:bg-green-600">

        <div className="flex flex-col absolute z-20 h-full w-full">

          <div className="h-full"></div>

          <div className="h-full backdrop-filter-[blur(10px)] mask-t-from-50%"></div>

        </div>


        <div className="flex flex-col abs z-30 h-full w-full">

          <div className="flex flex-col w-full items-center justify-center text-center text-white text-shadow-lg/40">

            <div className="flex w-full mt-3 h-100 justify-center">

              <div className="text-[1.2rem] text-shadow-lg/40">

                TE INVITAMOS A CELEBRAR

              </div>

            </div>

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


      <div className="flex flex-col relative font-[Inter] bg-amber-400 h-full w-full bg-[url(./app/assets/img/bg3.jpg)] bg-cover bg-repeat backdrop-filter-[blur(10px)] mask-t-from-80%">

        <div className="mt-15 text-amber-900 text-shadow-xs/20">

          <Cronometro deadline={new Date("October 17, 2026 00:00:00")} />

        </div>

        <div className="flex mt-10 pl-2 pr-2 text-center text-amber-900 text-shadow-xs/20">

          <p className="italic">"{FRASE}"</p>

        </div>

        <div className="flex flex-col w-full mt-10 mb-4">

          <div className="text-center">SPOTIFY</div>

          <div>

            <div className="text-center">UBICACIÓN</div>

            <div>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.4264844453328!2d-103.75872629051327!3d19.239390234936103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84254507da444291%3A0xa3feb2c0d0691861!2sSal%C3%B3n%20y%20Terraza%20Calinda%20Eventos!5e0!3m2!1ses-419!2smx!4v1772761048764!5m2!1ses-419!2smx" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>

          </div>

          <div>a</div>

        </div>

      </div>



    </div>
  );
}
