import { LUGAR, PHOTO_1 } from "~/placeholder/placeholder";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Has sido invitado!" },
    { name: "description", content: "Ven a nuestra boda!" },
  ];
}

export default function Home() {
  return (
    <div
      className="bg-[url(../assets/img/bg3.jpg)] s:black font-[Libre_Baskerville] md:text-red-500"
    >
      {/* <!-- FOTO --> */}
      <div>
        <div className="flex justify-center md:bg-blue-700 md:justify-end">
          <img
            src={PHOTO_1}
            alt="FOTO"
            className="h-100 m-5 mt-0 rounded-b-full md:h-120"
          />
        </div>
      </div>
      {/* <!-- Titulo y texto --> */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col text-center gap-5">
          <div className="text-[15px]">LA BODA DE</div>
          <div className="text-6xl font-[Pinyon_Script] font-medium">
            Leslie & Héctor
          </div>
          <div>
            <div className="text-[13px] strong font-medium">
              TE INVITAMOS A CELEBRAR NUESTRA
            </div>
            <div className="text-[13px] strong font-medium">UNIÓN ETERNA</div>
          </div>
        </div>
        {/* <!-- Fecha --> */}
        <div className="text-center flex flex-row justify-center gap-6">
          <div className="flex text-[13px] h-15 items-center">OCT</div>
          <div className="flex text-2xl h-15 items-center">|</div>
          <div className="flex flex-col text-[16px] font-[450] h-15 justify-center">
            <div className="flex items-center">SAB</div>
            <div className="flex justify-center items-center">17</div>
          </div>
          <div className="flex text-2xl h-15 items-center">|</div>
          <div className="flex text-[13px] h-15 items-center">2026</div>
        </div>
        {/* <!-- UBICACION --> */}
        <div className="text-center text-[13px]">
          <div>{LUGAR}</div>
        </div>
        {/* <!-- contador --> */}
        <div className="flex justify-center text-3xl">
          <p id="demo"></p>
        </div>
      </div>
    </div>
  );
}
