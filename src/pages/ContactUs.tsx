import { contactData } from '../datas'
import { contactVariants } from '../styles'

export const ContactUs = () => {
  const contactStyle = contactVariants()

  return (
    <section className={contactStyle.section()}>
      <p className={contactStyle.sectionLabel()}>{contactData.section}</p>
      <h1 className={contactStyle.title()}>{contactData.title}</h1>
      <div className={contactStyle.subtitleContainer()}>
        {contactData.subtitle.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className={contactStyle.buttonContainer()}>
        {contactData.buttons.map((item, index) => (
          <a key={index} role="button" target="_blank" href={item.link} className={`${contactStyle.buttonBase()} ${index % 2 !== 0 ? contactStyle.buttonSecondary() : contactStyle.buttonPrimary()}`}>
            {item.text}
          </a>
        ))}
      </div>
    </section>
  )
}
