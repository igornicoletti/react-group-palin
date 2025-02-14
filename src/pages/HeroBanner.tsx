export const HeroBanner = () => {
  return (
    <div className="relative h-full min-h-screen grid items-center justify-center shadow-xl sm:overflow-hidden">
      <div className="absolute inset-0">
        <img alt="" src="/images/palin-martins-banner.png" className="size-full object-cover object-left" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto p-6">
        <h1 className="tracking-tight text-3xl md:text-5xl lg:text-6xl text-dracula-white">
          Tranformando a Saúde <br /> com Inovação e <br /> Excelência
        </h1>
        <h1 className="font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl text-dracula-main uppercase">
          <span className="block ">Cuidando de <br /> quem faz a <br /> diferença</span>
        </h1>
      </div>
    </div>
  )
}
