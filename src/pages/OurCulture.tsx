import { CulturePrinciples } from '../components'
import { cultureData } from '../datas'
import { cultureVariants } from '../styles'

export const OurCulture = () => {
  const cultureStyle = cultureVariants()

  return (
    <section className={cultureStyle.section()}>
      <p className={cultureStyle.sectionText()}>{cultureData.section}</p>
      <h1 className={cultureStyle.title()}>{cultureData.title}</h1>
      <div className={cultureStyle.subtitle()}>
        {cultureData.subtitle.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <ul role="list" className={cultureStyle.list()}>
        {cultureData.principles.map((item) => (
          <CulturePrinciples key={item.name} {...item} />
        ))}
      </ul>
    </section>
  )
}
