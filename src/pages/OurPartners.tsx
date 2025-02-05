import { partnersData } from '../datas'
import { partnersVariants } from '../styles'

export const OurPartners = () => {
  const partnersStyle = partnersVariants()

  return (
    <div className={partnersStyle.section()}>
      <div className={partnersStyle.container()}>
        <ul className={partnersStyle.list()}>
          {partnersData.concat(partnersData).map((partner, index) => (
            <li key={index} className={partnersStyle.listItem()}>
              <img className={partnersStyle.image()} src={partner.src} alt={partner.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
