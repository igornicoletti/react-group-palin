export const HeroBanner = () => {
  return (
    <div className="relative h-full min-h-screen flex items-center justify-end shadow-xl sm:overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt=""
          src="/images/palin-martins-banner.png"
          className="size-full object-cover"
        />
      </div>
      <div className="relative mx-auto w-full max-w-7xl p-6 lg:px-8">
        <h1 className="text-right tracking-tight text-5xl text-dracula-white pb-6">
          Tranformando a Saúde <br /> com Inovação e <br /> Excelência
        </h1>
        <h1 className="text-right font-bold tracking-tight text-7xl text-dracula-main uppercase">
          <span className="block ">Cuidando de <br /> quem faz a <br /> diferença</span>
        </h1>
      </div>
    </div>
  )
}
