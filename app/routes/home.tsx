import { LUGAR, BG, PHOTO_1, PHOTO_2, LAURELES } from "~/placeholder/placeholder";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ven a nuestra boda!" },
    { name: "description", content: "Ven a nuestra boda!" },
  ];
}

export default function Home() {
  return (
    <div className="flex h-full w-full font-[Roboto_Slab] bg-[url(./app/assets/img/bg3.jpg)]">

      <div className="z-10 absolute h-full w-full bg-cover"></div>

      <div className="z-20 absolute w-full h-full md:flex md:flex-row-reverse md:bg-green-600">

        <div className="flex justify-center h-full w-full md:hidden">

          <img
            src={PHOTO_1}
            alt="FOTO POTRAIT"
            className="h-[75vh] rounded-b-full md:hidden"
          />

          {/* <div className="z-12 md:w-full md:flex md:justify-end md:h-full">
            <img
              src={LAURELES}
              alt="LAURELES"
            />
          </div> */}
        </div>


        <div className="hidden md:w-full md:flex md:justify-end md:h-full">

          <img
            src={PHOTO_2}
            alt="FOTO LANDSCAPE"
          />
          
        </div>



      </div>


      <div className="flex absolute flex-col z-20 h-full w-full">

        <div className="h-full"></div>

        <div className="h-6/8 backdrop-filter-[blur(8px)] mask-t-from-70%"></div>

      </div>

      <div className="flex absolute flex-col z-30 h-full w-full text-white text-shadow-lg/23">

        <div className="flex mt-2 h-full w-full justify-center">

          <div className="text-[1.2rem] text-shadow-lg/40">

            TE INVITAMOS A CELEBRAR

          </div>

          {/* <div className="text-[0.8rem]">UNIÓN ETERNA</div> */}

        </div>

        <div className="h-full"></div>

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

        <div className="h-full flex flex-col">

          <div className="flex h-full"></div>

          <div className="flex h-full justify-around">

            <div className="flex h-full justify-around gap-7">

              <div className="text-center">

                <div className="text-4xl">00</div>

                <div>DD</div>

              </div>

              <div className="flex text-center justify-center items-center-safe">

                <div className="text-4xl">:</div>

              </div>

              <div className="text-center">

                <div className="text-4xl">00</div>

                <div>HH</div>

              </div>

              <div className="flex text-center justify-center items-center-safe">

                <div className="text-4xl">:</div>

              </div>

              <div className="text-center">

                <div className="text-4xl">00</div>

                <div>MM</div>

              </div>

              <div className="flex text-center justify-center items-center-safe">

                <div className="text-4xl">:</div>

              </div>

              <div className="text-center">

                <div className="text-4xl">00</div>

                <div>SS</div>

              </div>

            </div>

          </div>

          <div className=" flex h-full"></div>

        </div>

      </div>

    </div>
  );
}
