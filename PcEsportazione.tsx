import React from "react";

const navigationItems = [
  { label: "CHI SIAMO", href: "#chi-siamo" },
  { label: "I NOSTRI SERVIZI", href: "#nostri-servizi" },
  { label: "DOVE SIAMO", href: "#dove-siamo" },
  { label: "CONTATTACI", href: "#contattaci" },
];

const servicesList = [
  "WEDDING IDENTITY",
  "PRODUZIONE VIDEO CINEMATOGRAFICA",
  "SERVIZIO FOTOGRAFICO",
  "FOTO BOOTH PERSONALIZZATO",
  "VIDEO TRAILER SUL MOMENTO",
  "OPERATORE DRONE",
  "SOCIAL MEDIA WEDDING",
];

const footerServices = [
  { name: "Wedding Identity", href: "#wedding-identity" },
  { name: "Produzione video cinematografica", href: "#video-cinematografica" },
  { name: "Servizio fotografico", href: "#servizio-fotografico" },
  { name: "Foto Booth personalizzato", href: "#foto-booth" },
  { name: "Video trailer sul momento", href: "#video-trailer" },
  { name: "Operatore drone", href: "#operatore-drone" },
  { name: "Social media wedding", href: "#social-media-wedding" },
];

// Placeholder provvisorio al posto del Carousel
function CarouselPlaceholder() {
  return (
    <div className="w-[546px] h-[390px] grid place-items-center bg-gray-200 border border-gray-300 rounded">
      <span className="text-gray-600">Carousel</span>
    </div>
  );
}

export function PcEsportazione(): JSX.Element {
  return (
    <div className="aspect-16-9">
      <div className="relative">
        <div className="bg-white w-full h-full">
          {/* Header */}
          <header className="sticky top-0 z-50 flex justify-between items-center px-[60px] py-[25px] bg-[#C8B094] bg-opacity-50 backdrop-blur-md transition-all duration-300">
            <a
              href="#"
              className="w-[114px] h-[50px] bg-[url(/vector.svg)] bg-cover cursor-pointer hover:brightness-0 hover:invert transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Torna in cima"
            />
            <nav className="flex gap-12">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="[font-family:'Baskervville',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal] hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          {/* Hero */}
          <section className="relative h-[947px] bg-[#777777]">
            <div className="absolute inset-0 bg-[url(/frame-4.svg)] bg-cover" />
            <div className="absolute bottom-[49px] right-[450px]">
              <h1 className="[font-family:'Ballet',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal]">
                View your forever.
              </h1>
            </div>
          </section>

          {/* Chi siamo */}
          <section id="chi-siamo" className="px-4 md:px-8 lg:px-[267px] py-24 pt-32">
            <div className="flex gap-12">
              <div className="flex-1" style={{ marginLeft: "92px" }}>
                <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] mb-8">
                  Chi siamo
                </h2>
              </div>
              <div className="flex-1">
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                  <span>
                    Wederview è uno studio specializzato nella produzione visiva per
                    il settore wedding.
                    <br />
                    <br />
                    Offriamo servizi integrati di fotografia, videografia e wedding
                    identity, con un approccio curato, coerente e su misura.
                    <br />
                    <br />
                    Dall&apos;immagine coordinata agli elementi stampati, dalle riprese
                    al montaggio, progettiamo ogni contenuto visivo in linea con lo
                    stile e l&apos;identità dell&apos;evento.
                    <br />
                  </span>
                  <br />
                  <span className="[font-family:'Baskervville',Helvetica] italic text-xl">
                    Lavoriamo con precisione, senso estetico e attenzione al
                    dettaglio, per garantire un risultato di qualità e perfettamente
                    armonico.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-16 flex justify-center relative">
              <img
                className="w-[1194px] h-[796px] object-cover"
                alt="Wedding sample"
                src="https://images.pexels.com/photos/10074149/pexels-photo-10074149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <img
                className="absolute top-0 left-0 w-auto h-auto"
                alt="Overlay"
                src="/Livello_1.png"
                style={{ marginTop: "-25px", marginLeft: "72px" }}
              />
            </div>
          </section>

          {/* I nostri servizi */}
          <section id="nostri-servizi" className="px-4 md:px-8 lg:px-[267px] py-16">
            <div className="flex gap-8 mb-16">
              <div className="flex-1" style={{ marginLeft: "92px" }}>
                <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] mb-8">
                  I nostri servizi
                </h2>
              </div>
              <div className="flex-1 space-y-4">
                {servicesList.map((service) => (
                  <div key={service} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-black rounded-md flex-shrink-0" />
                    <span className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WEDDING IDENTITY */}
          <section className="relative">
            <div id="wedding-identity" className="relative h-[994px] bg-cover pr-0">
              <img
                className="absolute inset-0 w-full h-[994px] object-cover"
                alt="Wedding identity background"
                src="https://images.pexels.com/photos/9551812/pexels-photo-9551812.jpeg?auto=compress&cs=tinysrgb&w=1766&h=994&dpr=2"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 flex">
                <div className="flex-1 pl-[267px] pr-0 py-[153px]">
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] mb-6">
                    WEDDING IDENTITY
                  </h3>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-base tracking-[0] leading-[normal] max-w-[510px] text-white">
                    <p>
                      Diamo forma e stile al vostro giorno speciale: dalla creazione
                      delle partecipazioni, ai menù, ai segnaposto, fino alla
                      realizzazione di tableau mariage personalizzati.
                    </p>
                    <br />
                    <p className="[font-family:'Baskervville',Helvetica] italic text-xl">
                      La Wedding Identity è ciò che renderà ogni dettaglio del
                      vostro matrimonio unico e coordinato.
                    </p>
                    <p className="mt-4">
                      Ogni progetto è completamente su misura e costruito insieme a
                      voi, in base ai materiali, alla tipologia di carte, alle
                      finiture e alla complessità grafica. Il prezzo verrà definito
                      con un preventivo personalizzato.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    className="w-[581px] h-[727px] object-cover"
                    alt="Wedding portrait"
                    src="https://images.pexels.com/photos/1082024/pexels-photo-1082024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                </div>
              </div>
            </div>

            {/* PRODUZIONE VIDEO */}
            <div id="video-cinematografica" className="relative bg-white flex items-center justify-center" style={{ width: "1754px", height: "987px" }}>
              <div className="absolute bg-[#777777]" style={{ width: "1194px", height: "672px", marginLeft: "100px" }} />
              <div className="relative z-10" style={{ marginLeft: "-500px" }}>
                <img className="w-[546px] h-[390px]" alt="Frame 1" src="/frame-1.svg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal] mb-4 text-center">
                    PRODUZIONE VIDEO CINEMATOGRAFICA
                  </h3>
                  <div className="[font-family:'Baskervville',Helvetica] font-normal text-base tracking-[0] leading-[normal] text-center max-w-[400px] text-white">
                    <p className="italic">Realizzeremo per voi un vero film d&apos;amore.</p>
                    <p className="mt-2 text-xs">
                      Due operatori professionisti vi accompagneranno per tutta la giornata cogliendo ogni emozione con uno stile narrativo
                      cinematografico.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVIZIO FOTOGRAFICO */}
            <div id="servizio-fotografico" className="bg-white px-[267px] py-16">
              <div className="flex gap-12">
                <div className="flex-1" style={{ marginTop: "140px" }}>
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] mb-6">
                    SERVIZIO FOTOGRAFICO
                  </h3>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] max-w-[510px]">
                    <p>Il nostro team di due fotografi professionisti sarà al vostro fianco per tutta la giornata.</p>
                    <br />
                    <p className="[font-family:'Baskervville',Helvetica] italic text-xl">
                      Discreti ma presenti, immortaleremo sguardi, abbracci e ogni momento unico.
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  {/* Sostituisci con il tuo Carousel quando sarà pronto */}
                  <CarouselPlaceholder />
                </div>
              </div>
            </div>
          </section>

          {/* …(il resto delle tue sezioni rimane invariato, assicurati solo che /frame-3.svg, /frame-4.svg, /Livello_1.png esistano in /public) */}

          {/* Footer (invariato) */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
