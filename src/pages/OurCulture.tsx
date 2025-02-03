import { CulturePrinciples } from '../components'
import { cultureData } from '../datas'

export const OurCulture = () => {
  return (
    <section className="overflow-hidden py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-5xl">
        <p className="font-semibold text-dracula-main">{cultureData.section}</p>
        <h1 className="mt-2 text-4xl/tight font-semibold tracking-tight text-pretty text-dracula-dark">{cultureData.title}</h1>
        <div className="mt-6 space-y-2">
          {cultureData.subtitle.map((item, index) => (
            <p className="mt-2 text-xl/8 text-balance text-dracula-dark/75" key={index}>{item}</p>
          ))}
        </div>
      </div>
      <ul role="list" className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {cultureData.principles.map((item) => (
          <CulturePrinciples key={item.name} {...item} />
        ))}
      </ul>
    </section>
  )
}
