import { aboutData } from '../datas'

export const AboutUs = () => {
  return (
    <section className="py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
      <p className="text-lg/7 font-semibold text-dracula-main">
        {aboutData.section}
      </p>
      <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-pretty text-dracula-dark">
        {aboutData.title}
      </h1>
      <div className="mt-6 space-y-2 max-w-3xl text-xl/8 text-balance font-extralight text-dracula-dark">
        {aboutData.subtitle.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-pretty text-dracula-dark">
            {aboutData.missionTitle}
          </h2>
          <div className="mt-6 space-y-4 text-balance font-extralight text-dracula-dark/75">
            {aboutData.missionParagraphs.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="lg:row-span-2 lg:-mr-16 xl:mr-auto -mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
          {aboutData.images.map((item, index) => (
            <div key={index} className={`aspect-square overflow-hidden rounded-xl shadow-xl shadow-dracula-dark/10 outline-1 -outline-offset-1 outline-dracula-dark/10 ${index % 2 !== 0 ? '-mt-8 lg:-mt-40' : ''}`}>
              <img alt={`Imagem ${index + 1} sobre nós`} src={item} className="block size-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
