import { aboutData } from '../datas'
import { aboutVariants } from '../styles'

export const AboutUs = () => {
  const aboutStyle = aboutVariants()

  return (
    <section className={aboutStyle.section()}>
      <p className={aboutStyle.sectionLabel()}>{aboutData.section}</p>
      <h1 className={aboutStyle.title()}>{aboutData.title}</h1>
      <div className={aboutStyle.subtitleContainer()}>
        {aboutData.subtitle.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className={aboutStyle.missionContainer()}>
        <div className={aboutStyle.missionText()}>
          <h2 className={aboutStyle.missionTitle()}>{aboutData.missionTitle}</h2>
          <div className={aboutStyle.missionParagraphs()}>
            {aboutData.missionParagraphs.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className={aboutStyle.imageGrid()}>
          {aboutData.images.map((item, index) => (
            <div key={index} className={`${aboutStyle.imageWrapper()} ${index % 2 !== 0 ? aboutStyle.imageOffset() : ""}`}>
              <img alt={`Imagem ${index + 1} sobre nós`} src={item} className={aboutStyle.image()} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
