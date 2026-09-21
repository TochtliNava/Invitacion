import { useState, useEffect } from "react";

export default function BotonCalendario() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor || "";
      const isApple =
        /iPad|iPhone|iPod|Macintosh/.test(ua) &&
        !/Windows|Android/.test(ua);
      setIsAppleDevice(isApple);
    }
  }, []);

  // Datos del evento
  const title = "Boda Hector y Leslie";
  const location = "Jardín De Eventos La Felicidad";
  const description =
    "Celebración de la Boda de Leslie & Héctor.\n\n• Ceremonia civil: 5:00 pm\n• Recepción: 6:00 pm\n\nLugar: Jardín De Eventos La Felicidad\n¡Esperamos contar con tu presencia!";
  
  // Enlace para Google Calendar
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=20261017T170000/20261018T020000&details=${encodeURIComponent(
    description
  )}&location=${encodeURIComponent(location)}`;

  // Enlace para Outlook Web
  const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(
    title
  )}&startdt=2026-10-17T17:00:00&enddt=2026-10-18T02:00:00&body=${encodeURIComponent(
    description
  )}&location=${encodeURIComponent(location)}`;

  // Función para descargar / abrir el archivo .ics
  const handleIcsDownload = () => {
    const link = document.createElement("a");
    link.href = "/boda.ics";
    link.download = "boda-hector-y-leslie.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Botón principal */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 mt-2 bg-gradient-to-r from-amber-800 via-amber-900 to-amber-950 text-white rounded-2xl font-[Roboto_Slab] text-sm md:text-base font-medium tracking-wider uppercase shadow-lg shadow-amber-950/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer border border-amber-700/40"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>Agendar en mi Calendario</span>
      </button>

      {/* Modal / Diálogo para elegir aplicación */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-[#fcf9f6] text-amber-950 rounded-3xl p-6 shadow-2xl border border-amber-900/20 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-900/10 hover:bg-amber-900/20 flex items-center justify-center text-amber-900 transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Encabezado del modal */}
            <div className="text-center mb-5">
              <span className="text-[0.7rem] uppercase tracking-widest text-amber-800 font-semibold font-[Roboto_Slab]">
                Guardar fecha
              </span>
              <h3 className="text-2xl font-[Pinyon_Script] font-medium text-amber-950 mt-0.5">
                Boda Hector & Leslie
              </h3>
              <p className="text-xs text-amber-900/75 mt-1 font-[Roboto_Slab]">
                Sábado 17 de Octubre de 2026 • 5:00 PM
              </p>
            </div>

            {/* Opciones de calendario */}
            <div className="flex flex-col gap-2.5">
              {/* Google Calendar */}
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-all duration-150 ${
                  !isAppleDevice
                    ? "bg-amber-100/70 border-amber-900/30 shadow-xs ring-1 ring-amber-900/10"
                    : "bg-white/80 hover:bg-amber-50 border-amber-900/15"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs text-blue-600 shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold font-[Roboto_Slab] text-amber-950">
                      Google Calendar
                    </span>
                    {!isAppleDevice && (
                      <span className="text-[0.65rem] bg-amber-900 text-white px-1.5 py-0.5 rounded-full font-sans">
                        Sugerido
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-amber-800/70 font-[Inter]">
                    Android, Gmail o navegador
                  </span>
                </div>
              </a>

              {/* Apple Calendar (iPhone / Mac / iPad) */}
              <a
                href="/boda.ics"
                download="boda-hector-y-leslie.ics"
                onClick={() => {
                  handleIcsDownload();
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-all duration-150 ${
                  isAppleDevice
                    ? "bg-amber-100/70 border-amber-900/30 shadow-xs ring-1 ring-amber-900/10"
                    : "bg-white/80 hover:bg-amber-50 border-amber-900/15"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs text-stone-800 shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2.03.62-2.67 1.37-.56.64-1.06 1.7-0.93 2.72 1.02.08 2.06-.5 2.68-1.24z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold font-[Roboto_Slab] text-amber-950">
                      Apple Calendar
                    </span>
                    {isAppleDevice && (
                      <span className="text-[0.65rem] bg-amber-900 text-white px-1.5 py-0.5 rounded-full font-sans">
                        Sugerido
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-amber-800/70 font-[Inter]">
                    iPhone, iPad o Mac
                  </span>
                </div>
              </a>

              {/* Outlook */}
              <a
                href={outlookCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/80 hover:bg-amber-50 border border-amber-900/15 transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs text-sky-700 shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 5v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-2 0H5v3l7 4.5L19 8V5zm0 5.2l-7 4.5-7-4.5V19h14v-8.8z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold font-[Roboto_Slab] text-amber-950">
                    Outlook
                  </span>
                  <span className="text-xs text-amber-800/70 font-[Inter]">
                    Outlook Web o aplicación
                  </span>
                </div>
              </a>

              {/* Descargar archivo .ics genérico */}
              <button
                type="button"
                onClick={() => {
                  handleIcsDownload();
                  setIsOpen(false);
                }}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/80 hover:bg-amber-50 border border-amber-900/15 transition-all duration-150 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs text-amber-800 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold font-[Roboto_Slab] text-amber-950">
                    Descargar archivo .ICS
                  </span>
                  <span className="text-xs text-amber-800/70 font-[Inter]">
                    Para cualquier otra aplicación
                  </span>
                </div>
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-900/10 text-center">
              <span className="text-[0.7rem] text-amber-900/60 font-[Inter]">
                El evento incluye recordatorio automático
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
