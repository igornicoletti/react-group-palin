import { aboutData } from '../datas'

export const AboutUs = () => {
  return (
    <section className="overflow-hidden py-24 sm:pt-48 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-4xl">
        <p className="font-semibold text-dracula-main">{aboutData.section}</p>
        <h1 className="mt-2 text-4xl/tight font-semibold tracking-tight text-pretty text-dracula-dark sm:text-5xl">{aboutData.title}</h1>
        <p className="mt-6 text-xl/8 text-balance text-dracula-dark/75">{aboutData.subtitle}</p>
      </div>
      <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
        <div className="lg:pr-8">
          <h2 className="text-2xl font-semibold tracking-tight text-pretty text-dracula-dark">{aboutData.missionTitle}</h2>
          {aboutData.missionParagraphs.map((paragraph, index) => (
            <p key={index} className="mt-6 text-dracula-dark/75">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto -mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
          {aboutData.images.map((src, index) => (
            <div key={index} className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-dracula-dark/10 ${index % 2 !== 0 ? '-mt-8 lg:-mt-40' : ''}`}>
              <img alt="" src={src} className="block size-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
