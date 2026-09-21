import { useSearchParams } from "react-router";
import { LUGAR, BG, PHOTO_1, PHOTO_2, LAURELES, FRASE, FRASE2, FRASE3, FRASE4 } from "~/placeholder/placeholder";
import { INVITADOS } from "~/placeholder/invitados";
import type { Route } from "./+types/home";
import Cronometro from "~/components/Cronometro";
import BotonCalendario from "~/components/BotonCalendario";
import BotonAsistencia from "~/components/BotonAsistencia";
import bgHero from "~/assets/img/real1.jpg";
import bgTexture from "~/assets/img/bg3.jpg";
import cactusSvg from "~/assets/img/cactus.svg";
import picado2Svg from "~/assets/img/picado2.svg";
import picado3Svg from "~/assets/img/picado3.svg";
import sombrerosSvg from "~/assets/img/sombreros.svg";
import tacosSvg from "~/assets/img/tacos.svg";
import photoReal2 from "~/assets/img/real2.jpg";
import photoReal3 from "~/assets/img/real3.jpg";




export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ven a nuestra boda!" },
    { name: "description", content: "Ven a nuestra boda!" },
  ];
}

export default function Home() {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key");
  const nombreInvitado = key ? INVITADOS[key] : null;

  return (
    <div className="min-h-screen w-full bg-[#302b29] flex justify-center sm:py-6 sm:px-4">
      {/* Contenedor formato de celular / móvil */}
      <div className="w-full max-w-[440px] min-h-screen bg-[#b3a8a5] sm:rounded-3xl shadow-2xl overflow-x-hidden flex flex-col font-[Roboto_Slab] relative">

        {/* Portada / Hero con formato móvil */}
        <div
          className="flex flex-col relative bg-cover bg-top min-h-[100dvh] w-full"
          style={{ backgroundImage: `url(${photoReal3})` }}
        >


          {/* Degradado inferior para legibilidad sin cortar contenido */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/10 pointer-events-none" />

          {/* Contenido distribuido verticalmente en el alto de la pantalla del celular */}
          <div className="relative z-20 flex flex-col justify-between min-h-[100dvh] w-full p-6 pt-12 pb-10 text-white text-shadow-lg/40 text-center">

            <div className="flex flex-col items-center gap-1">
              {nombreInvitado && (
                <div className="text-3xl md:text-4xl leading-tight">
                  {nombreInvitado},
                </div>
              )}
              <div className="text-[1.1rem] tracking-widest uppercase">
                TE INVITAMOS A CELEBRAR
              </div>
            </div>

            {/* Espacio flexible que deja ver las caras de los novios sin empujar el texto fuera de pantalla */}
            <div className="flex-1 min-h-20"></div>

            <div className="flex flex-col gap-4 w-full pb-2">
              <div className="text-[1rem] tracking-wider uppercase opacity-95">
                LA BODA DE
              </div>

              <div className="text-6xl font-[Pinyon_Script] font-medium leading-none">
                Leslie & Héctor
              </div>

              <div className="flex flex-row justify-center items-center gap-6 text-[1rem] my-1">
                <span className="font-light">OCT</span>
                <span className="text-2xl font-thin opacity-60">|</span>
                <div className="flex flex-col text-[1.2rem] font-medium justify-center leading-tight">
                  <span className="text-xs uppercase opacity-80">SAB</span>
                  <span className="text-2xl font-bold">17</span>
                </div>
                <span className="text-2xl font-thin opacity-60">|</span>
                <span className="font-light">2026</span>
              </div>

              <div className="text-[0.85rem] tracking-wide uppercase opacity-90">
                {LUGAR}
              </div>
            </div>

          </div>

        </div>

        {/* Sección principal de contenido con textura */}
        <div
          className="flex flex-col relative font-[Inter] min-h-screen w-full bg-cover bg-repeat"
          style={{ backgroundImage: `url(${bgTexture})` }}
        >


          <div className="mt-12 text-amber-900 text-shadow-xs/20">
            <Cronometro deadline={new Date("October 17, 2026 00:00:00")} />
          </div>

          <div className="flex-col mt-8 px-6 text-center text-amber-900 text-shadow-xs/20">
            <p className="italic leading-relaxed">"{FRASE}</p>
            <p className="italic leading-relaxed"><strong>Leslie y Héctor</strong></p>
            <p className="italic leading-relaxed">{FRASE2}"</p>
          </div>

        {/* Secciones previas comentadas (no borrar) */}
        {/*
        <div className="flex flex-col w-full mt-10 mb-4">

          <div className="text-center">SPOTIFY</div>

          <div>

            <div className="text-center">UBICACIÓN</div>

            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.4264844453328!2d-103.75872629051327!3d19.239390234936103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84254507da444291%3A0xa3feb2c0d0691861!2sSal%C3%B3n%20y%20Terraza%20Calinda%20Eventos!5e0!3m2!1ses-419!2smx!4v1772761048764!5m2!1ses-419!2smx" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

          <div>a</div>

        </div>
        */}

        {/* Títulos y secciones del README */}
        <div className="flex flex-col w-full px-4 gap-16 mt-12 mb-16 text-amber-900 text-shadow-xs/20">

          {/* Fotos de los que se van a casar (Nosotros) */}
          <section className="flex flex-col items-center justify-center text-center gap-3 w-full">
            <h2 className="text-5xl md:text-6xl font-[Pinyon_Script] font-medium">
              Nosotros
            </h2>
            {/* <div className="text-xs tracking-widest uppercase font-[Roboto_Slab] opacity-75">
              Nuestra Historia
            </div> */}

            <div className="grid grid-cols-2 gap-3 w-full mt-2">
              <div className="overflow-hidden rounded-2xl shadow-md border border-amber-900/20 aspect-[4/5]">
                <img
                  src={bgHero}
                  alt="Leslie y Héctor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md border border-amber-900/20 aspect-[4/5]">
                <img
                  src={photoReal2}
                  alt="Leslie y Héctor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Decoración papel picado */}
          <div className="w-full flex justify-center py-1 pointer-events-none">
            <img
              src={picado2Svg}
              alt="Papel picado decorativo"
              className="w-full max-w-xs object-contain"
            />
          </div>

          {/* Elemento Spotify (canción de ambos) */}
          <section className="flex flex-col items-center justify-center text-center gap-3 w-full">
            <h2 className="text-5xl md:text-6xl font-[Pinyon_Script] font-medium">
              Nuestra Canción
            </h2>
            <div className="text-sm font-semibold tracking-wider font-[Roboto_Slab] uppercase opacity-90">
              Si Nos Dejan
            </div>

            <div className="w-full mt-2 rounded-2xl overflow-hidden shadow-md">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/4UL5vyI2NyX4EkvQeA17i5?utm_source=generator&si=26c218a47b2c404b"
                width="100%"
                height="152"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify - Si Nos Dejan"
              />
            </div>
          </section>

          {/* Decoración sombreros */}
          {/* <div className="w-full flex justify-center py-1 pointer-events-none">
            <img
              src={sombrerosSvg}
              alt="Sombreros decorativos"
              className="w-40 max-w-[55%] object-contain drop-shadow-sm"
            />
          </div> */}

          {/* Localización Maps (recepción y ceremonia) */}
          <section className="flex flex-col items-center justify-center text-center gap-3 w-full">
            <h2 className="text-5xl md:text-6xl font-[Pinyon_Script] font-medium">
              Ubicación
            </h2>
            <div className="text-sm font-semibold tracking-wider font-[Roboto_Slab] uppercase opacity-90">
              Jardín De Eventos La Felicidad
            </div>

            <div className="w-full mt-2 rounded-2xl overflow-hidden shadow-md border border-amber-900/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7533.692379704722!2d-103.66892365300387!3d19.245533976185634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255bacd05ee5fd%3A0x75b5c96f18c5eb88!2sJard%C3%ADn%20de%20Eventos%20La%20Felicidad!5e0!3m2!1sen!2smx!4v1789884947936!5m2!1sen!2smx"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación - Jardín De Eventos La Felicidad"
              />
            </div>
          </section>

          {/* Botón de agendar en calendario */}
          <section className="flex flex-col items-center justify-center text-center gap-3">
            <h2 className="text-5xl md:text-6xl font-[Pinyon_Script] font-medium">
              Agendar Fecha
            </h2>
            <div className="text-sm font-semibold tracking-wider font-[Roboto_Slab] uppercase opacity-90">
              Guarda este día en tu calendario
            </div>
            <BotonCalendario />
          </section>

          {/* Decoración papel picado */}
          <div className="w-full flex justify-center py-1 pointer-events-none">
            <img
              src={picado3Svg}
              alt="Papel picado decorativo"
              className="w-full max-w-xs object-contain"
            />
          </div>

          {/* Itinerario */}
          <section className="flex flex-col items-center justify-center text-center gap-3 w-full">
            <h2 className="text-5xl md:text-6xl font-[Pinyon_Script] font-medium">
              Itinerario
            </h2>

            <div className="flex flex-col gap-3 w-full max-w-xs mt-2">
              <div className="flex justify-between items-center py-3 px-5 bg-white/30 backdrop-blur-xs rounded-2xl border border-amber-900/15 shadow-xs">
                <span className="text-sm font-semibold font-[Roboto_Slab] uppercase opacity-100">
                  Ceremonia civil
                </span>
                <span className="text-sm font-bold font-[Roboto_Slab]">
                  5:00 pm
                </span>
              </div>

              <div className="flex justify-between items-center py-3 px-5 bg-white/30 backdrop-blur-xs rounded-2xl border border-amber-900/15 shadow-xs">
                <span className="text-sm font-semibold font-[Roboto_Slab] uppercase opacity-100">
                  Recepción
                </span>
                <span className="text-sm font-bold font-[Roboto_Slab]">
                  6:00 pm
                </span>
              </div>
            </div>
          </section>

          {/* Dress code */}
          <section className="flex flex-col items-center justify-center text-center gap-3 w-full">
            <h2 className="text-5xl md:text-6xl font-[Pinyon_Script] font-medium">
              Código de Vestimenta
            </h2>
            {/* <div className="text-xs tracking-widest uppercase font-[Roboto_Slab] opacity-75">
              Dress Code
            </div> */}

            <div className="flex items-center justify-center w-full max-w-xs mt-2 py-3.5 px-5 bg-white/30 backdrop-blur-xs rounded-2xl border border-amber-900/15 shadow-xs">
              <span className="text-sm md:text-base font-bold font-[Roboto_Slab] tracking-wider uppercase">
                Elegancia Mexicana o Cóctel
              </span>
            </div>
          </section>

          {/* Decoración tacos */}
          {/* <div className="w-full flex justify-center py-1 pointer-events-none">
            <img
              src={tacosSvg}
              alt="Tacos decorativos"
              className="w-36 max-w-[50%] object-contain drop-shadow-sm"
            />
          </div> */}

          {/* Nuestros padres */}
          {/* <section className="flex flex-col items-center justify-center text-center gap-3">
            <h2 className="text-5xl md:text-6xl font-[Pinyon_Script] font-medium">
              Nuestros Padres
            </h2>
            <div className="text-xs tracking-widest uppercase font-[Roboto_Slab] opacity-75">
              Con la bendición de nuestras familias
            </div>
          </section> */}

          {/* Regalos y Apadrinaje */}
          <section className="flex flex-col items-center justify-center text-center gap-3 w-full">
            <h2 className="text-5xl md:text-6xl font-[Pinyon_Script] font-medium">
              LLuvia de Sobres
            </h2>
            <div className="text-xs font-semibold tracking-wider font-[Roboto_Slab] uppercase opacity-90">
              Ya tenemos todo para nuestro hogar!
            </div>
            <div className="text-xs font-semibold tracking-wider font-[Roboto_Slab] uppercase opacity-90">
              deposita tus regalos a esta cuenta:
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-xs mt-2 py-3.5 px-5 bg-white/30 backdrop-blur-xs rounded-2xl border border-amber-900/15 shadow-xs text-center gap-1">
              <span className="text-sm md:text-base font-bold font-[Roboto_Slab] tracking-wider uppercase">
                CUENTA BBVA
              </span>
              <span className="text-xs sm:text-sm md:text-base font-bold font-[Roboto_Slab] tracking-wider uppercase select-all">
                CLABE 0120 9001 5834 475302
              </span>
              <span className="text-sm md:text-base font-bold font-[Roboto_Slab] tracking-wider uppercase">
                LESLIE LOPEZ LOZANO
              </span>
            </div>
          </section>

          {/* Botón de asistencia */}
          <section className="flex flex-col items-center justify-center text-center gap-3">
            <h2 className="text-5xl md:text-6xl font-[Pinyon_Script] font-medium">
              Confirmación de Asistencia
            </h2>
            {/* <div className="text-xs tracking-widest uppercase font-[Roboto_Slab] opacity-75">
              RSVP • WhatsApp & QR
            </div> */}
            <div className="text-xs font-semibold tracking-wider font-[Roboto_Slab] uppercase opacity-90">
              {FRASE3}
            </div>
            <div className="text-xs font-semibold tracking-wider font-[Roboto_Slab] uppercase opacity-90">
              {FRASE4}
            </div>
            <BotonAsistencia nombreInvitado={nombreInvitado} />
          </section>

          {/* Cactus al fondo de la invitación (de un solo color café) */}
          {/* <div className="w-full flex justify-center -mb-16 mt-2 pointer-events-none overflow-hidden">
            <img
              src={cactusSvg}
              alt="Cactus decorativo"
              className="w-full max-w-[440px] object-contain"
            />
          </div> */}



        </div>

      </div>

    </div>

  </div>
  );
}

