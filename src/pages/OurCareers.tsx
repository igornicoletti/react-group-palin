import { careersData } from '../datas'
import { careersVariants } from '../styles'

export const OurCareers = () => {
  const careersStyle = careersVariants()

  return (
    <section className={careersStyle.section()}>
      <div className={careersStyle.gridContainer()}>
        <div className={careersStyle.textContainer()}>
          <p className={careersStyle.sectionLabel()}>{careersData.section}</p>
          <h1 className={careersStyle.title()}>{careersData.title}</h1>
          <div className={careersStyle.subtitleContainer()}>
            {careersData.subtitle.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className={careersStyle.imageContainer()}>
          <img src="/images/palin-martins-bg.svg" alt='' className={careersStyle.imageBackground()} />
          <img src="/images/palin-martins-careers.jpg" alt='' className={careersStyle.image()} />
        </div>
      </div>
    </section>
  )
}
