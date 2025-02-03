import { Dialog, DialogPanel } from '@headlessui/react'
import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Empresa', href: '#' },
  { name: 'Ecossistema', href: '#' },
]

export const HeaderNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = 0
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY <= lastScrollY || window.scrollY <= 100)
      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`z-10 bg-dracula-white fixed top-0 left-0 shadow-md shadow-dracula-main/5 w-full transition-transform duration-300 ${!isHeaderVisible ? '-translate-y-full' : 'translate-y-0'}`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-x-16">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Grupo Palin & Martins</span>
            <img alt="" src="/images/palin-martins-black.png" className="h-14 w-auto" />
          </a>
          <div className="hidden lg:flex gap-x-16 -mb-1">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-medium text-dracula-dark/75 hover:text-dracula-dark">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 p-2.5">
            <span className="sr-only">Open main menu</span>
            <List aria-hidden="true" className="size-6 text-dracula-main" weight="duotone" />
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-x-16 -mb-1">
          <a href="#" className="text-sm/6 font-semibold text-dracula-main">
            Trabalhe conosco
          </a>
          <a href="#" className="px-4 py-1.5 text-sm/6 font-semibold border border-dracula-main text-dracula-main rounded-lg">
            Entre em contato
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dracula-white p-6 sm:max-w-sm sm:ring-1 sm:ring-dracula-dark/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Grupo Palin & Martins</span>
              <img alt="" src="/images/palin-martins-black.png" className="h-14 w-auto" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5">
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="size-6 text-dracula-main" weight="duotone" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="divide-y divide-dracula-dark/10">
              <div className="py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-sm/6 font-medium text-dracula-dark hover:bg-dracula-dark/5" >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-x-6 py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-sm/6 font-semibold text-dracula-dark hover:bg-dracula-dark/5">
                  Trabalhe conosco
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-sm/6 font-semibold text-dracula-main hover:bg-dracula-dark/5">
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
