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
          <header className="sticky top-0 z-50 flex justify-between items-center px-[60px] py-[25px] bg-[#C8B094]/50 backdrop-blur-md">
            <a
              href="#"
              className="w-[114px] h-[50px] bg-[url('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vercel.svg')] bg-contain bg-no-repeat cursor-pointer hover:brightness-0 hover:invert transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Top"
            />
            <nav className="flex gap-12">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="[font-family:'Baskervville',Helvetica] text-black text-sm hover:text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          {/* Hero */}
          <section className="relative h-[600px] md:h-[800px] lg:h-[947px] bg-[#777]">
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=2000&auto=format&fit=crop')",
              }}
            />
            <div className="absolute bottom-12 right-12 md:right-40">
              <h1 className="[font-family:'Ballet',Helvetica] text-white text-[42px] md:text-[64px]">
                View your forever.
              </h1>
            </div>
          </section>

          {/* Chi siamo */}
          <section id="chi-siamo" className="px-4 md:px-8 lg:px-[267px] py-24 pt-32">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 lg:ml-[92px]">
                <h2 className="[font-family:'Baskervville_SC',Helvetica] text-black text-[40px] mb-8">
                  Chi siamo
                </h2>
              </div>
              <div className="flex-1">
                <div className="[font-family:'Montserrat',Helvetica] text-black text-base">
                  <p>
                    Wederview è uno studio specializzato nella produzione visiva per il settore wedding.
                  </p>
                  <br />
                  <p>
                    Offriamo servizi integrati di fotografia, videografia e wedding identity, con un approccio curato,
                    coerente e su misura.
                  </p>
                  <br />
                  <p>
                    Dall&apos;immagine coordinata agli elementi stampati, dalle riprese al montaggio, progettiamo ogni
                    contenuto visivo in linea con lo stile e l&apos;identità dell&apos;evento.
                  </p>
                  <br />
                  <p className="[font-family:'Baskervville',Helvetica] italic text-xl">
                    Lavoriamo con precisione, senso estetico e attenzione al dettaglio, per garantire un risultato di
                    qualità e perfettamente armonico.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex justify-center relative">
              <img
                className="w-[1194px] max-w-full h-auto object-cover"
                alt="Wedding sample"
                src="https://images.pexels.com/photos/10074149/pexels-photo-10074149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <img
                className="absolute top-0 left-0 w-24 md:w-40"
                alt="Overlay"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Red.svg"
                style={{ marginTop: "-25px", marginLeft: "72px" }}
              />
            </div>
          </section>

          {/* I nostri servizi */}
          <section id="nostri-servizi" className="px-4 md:px-8 lg:px-[267px] py-16">
            <div className="flex flex-col lg:flex-row gap-8 mb-16">
              <div className="flex-1 lg:ml-[92px]">
                <h2 className="[font-family:'Baskervville_SC',Helvetica] text-black text-[40px] mb-8">
                  I nostri servizi
                </h2>
              </div>
              <div className="flex-1 space-y-4">
                {servicesList.map((service) => (
                  <div key={service} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-black rounded-md" />
                    <span className="[font-family:'Baskervville_SC',Helvetica] text-black text-2xl">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Produzione video */}
          <section className="relative">
            <div id="wedding-identity" className="relative h-[700px] md:h-[994px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background"
                src="https://images.pexels.com/photos/9551812/pexels-photo-9551812.jpeg?auto=compress&cs=tinysrgb&w=1766&h=994&dpr=2"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10 grid md:grid-cols-2 gap-8 px-6 md:px-[267px] py-[80px]">
                <div>
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] text-white text-[32px] mb-6">
                    WEDDING IDENTITY
                  </h3>
                  <div className="[font-family:'Montserrat',Helvetica] text-white text-base max-w-[510px]">
                    <p>Diamo forma e stile al vostro giorno speciale…</p>
                    <p className="[font-family:'Baskervville',Helvetica] italic text-xl mt-4">
                      La Wedding Identity renderà ogni dettaglio unico e coordinato.
                    </p>
                  </div>
                </div>
                <div className="grid place-items-center">
                  <img
                    className="w-[581px] max-w-full h-auto object-cover"
                    alt="Portrait"
                    src="https://images.pexels.com/photos/1082024/pexels-photo-1082024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                </div>
              </div>
            </div>

            {/* Video cinematografica */}
            <div id="video-cinematografica" className="relative bg-white flex items-center justify-center py-16">
              <div className="relative z-10">
                <div className="w-[546px] h-[390px] grid place-items-center bg-[#777] text-white rounded">
                  FRAME 1
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] text-white text-[24px] mb-4 text-center">
                    PRODUZIONE VIDEO CINEMATOGRAFICA
                  </h3>
                  <p className="[font-family:'Baskervville',Helvetica] text-white text-base text-center max-w-[400px]">
                    Realizzeremo per voi un vero film d&apos;amore.
                  </p>
                </div>
              </div>
            </div>

            {/* Servizio fotografico */}
            <div id="servizio-fotografico" className="bg-white px-[267px] py-16">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 md:mt-[60px]">
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] text-black text-[32px] mb-6">
                    SERVIZIO FOTOGRAFICO
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-black text-base max-w-[510px]">
                    Il nostro team di due fotografi professionisti…
                  </p>
                </div>
                <div className="flex-1">
                  <CarouselPlaceholder />
                </div>
              </div>
            </div>
          </section>

          {/* …resto delle sezioni… */}
        </div>
      </div>
    </div>
  );
}
