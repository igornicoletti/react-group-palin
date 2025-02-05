import { footerData } from '../datas'
import { footerVariants } from '../styles'

export const Footer = () => {
  const footerStyle = footerVariants()

  return (
    <footer className={footerStyle.footer()}>
      <div className={footerStyle.container()}>
        <img alt="" src="/images/palin-martins-white.png" className={footerStyle.logo()} />
        <nav aria-label="Footer" className={footerStyle.nav()}>
          {footerData.main.map((item) => (
            <a key={item.name} href={item.href} className={footerStyle.navItem()}>
              {item.name}
            </a>
          ))}
        </nav>
        <div className={footerStyle.socialContainer()}>
          {footerData.social.map((item) => (
            <a key={item.name} href={item.href} className={footerStyle.socialItem()} target='_blank'>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" weight="duotone" className={footerStyle.socialIcon()} />
            </a>
          ))}
        </div>
        <p className={footerStyle.copyright()}>&copy; {footerData.copy}</p>
      </div>
    </footer>
  )
}
