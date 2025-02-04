import { CulturePrinciples } from '../components'
import { cultureData } from '../datas'

export const OurCulture = () => {
  return (
    <section className="py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
      <p className="text-lg/7 font-semibold text-dracula-main">
        {cultureData.section}
      </p>
      <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-pretty text-dracula-dark">
        {cultureData.title}
      </h1>
      <div className="mt-6 space-y-2 max-w-5xl text-xl/8 text-balance font-extralight text-dracula-dark">
        {cultureData.subtitle.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <ul role="list" className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {cultureData.principles.map((item) => (
          <CulturePrinciples key={item.name} {...item} />
        ))}
      </ul>
    </section >
  )
}
