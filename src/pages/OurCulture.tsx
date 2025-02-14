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

      <div className={cultureStyle.biblicalSection()}>
        {cultureData.biblicalPrinciples.map((item, index) => (
          <div key={index} className={cultureStyle.biblicalItem()}>
            <h3 className={cultureStyle.biblicalTitle()}>{item.reference}</h3>
            <p className={cultureStyle.biblicalText()}>{item.verse}</p>
          </div>
        ))}
      </div>

      <div className={cultureStyle.philosophy()}>
        {cultureData.philosophy.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <ul role="list" className={cultureStyle.list()}>
        {cultureData.pillars.map((item) => (
          <CulturePrinciples key={item.name} {...item} />
        ))}
      </ul>

      <ul role="list" className={cultureStyle.list()}>
        {cultureData.integrationMechanisms.map((item) => (
          <CulturePrinciples key={item.name} {...item} />
        ))}
      </ul>

      <ul role="list" className={cultureStyle.list()}>
        {cultureData.valueRitualization.map((item) => (
          <CulturePrinciples key={item.name} {...item} />
        ))}
      </ul>

      <ul role="list" className={cultureStyle.list()}>
        {cultureData.organizationalIndicators.map((item) => (
          <CulturePrinciples key={item.name} {...item} />
        ))}
      </ul>

      <ul role="list" className={cultureStyle.list()}>
        {cultureData.successCases.map((item) => (
          <CulturePrinciples key={item.name} {...item} />
        ))}
      </ul>

      <ul role="list" className={cultureStyle.list()}>
        {cultureData.socialResponsibility.map((item) => (
          <CulturePrinciples key={item.name} {...item} />
        ))}
      </ul>
    </section>
  )
}
