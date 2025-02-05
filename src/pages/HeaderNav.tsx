import { Dialog, DialogPanel } from '@headlessui/react'
import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { headerVariants } from '../styles'

const navigation = [
  { name: 'Empresa', href: '#' },
  { name: 'Ecossistema', href: '#' },
]

export const HeaderNav = () => {
  const headerStyle = headerVariants()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={headerStyle.header()}>
      <nav aria-label="Global" className={headerStyle.nav()}>
        <div className={headerStyle.logoContainer()}>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Grupo Palin & Martins</span>
            <img src="/images/palin-martins-black.png" alt="Logo" className={headerStyle.logo()} />
          </a>
          <div className={headerStyle.navLinks()}>
            {navigation.map(({ name, href }) => (
              <a key={name} href={href} className={headerStyle.navLink()}>
                {name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className={headerStyle.mobileButton()}>
            <span className="sr-only">Open main menu</span>
            <List aria-hidden className={headerStyle.mobileIcon()} weight="duotone" />
          </button>
        </div>
        <div className={headerStyle.ctaContainer()}>
          <a href="#" className={headerStyle.ctaOutlined()}>Trabalhe conosco</a>
          <a href="#" className={headerStyle.ctaFilled()}>Entre em contato</a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className={headerStyle.dialog()}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className={headerStyle.dialogPanel()}>
          <div className={headerStyle.dialogHeader()}>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Grupo Palin & Martins</span>
              <img src="/images/palin-martins-black.png" alt="Logo" className={headerStyle.logo()} />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className={headerStyle.mobileButton()}>
              <span className="sr-only">Close menu</span>
              <X aria-hidden className={headerStyle.mobileIcon()} weight="duotone" />
            </button>
          </div>
          <div className={headerStyle.menuLinksContainer()}>
            <div className={headerStyle.menuLinksWrapper()}>
              <div className={headerStyle.menuLinks()}>
                {navigation.map(({ name, href }) => (
                  <a key={name} href={href} className={headerStyle.menuLink()}>
                    {name}
                  </a>
                ))}
              </div>
              <div className={headerStyle.menuCtaContainer()}>
                <a href="#" className={headerStyle.menuCtaOutlined()}>Trabalhe conosco</a>
                <a href="#" className={headerStyle.menuCtaFilled()}>Entre em contato</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
