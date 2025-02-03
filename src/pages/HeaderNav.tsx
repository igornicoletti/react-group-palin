import { Dialog, DialogPanel } from '@headlessui/react'
import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'

const navigation = [
  { name: 'Empresa', href: '#' },
  { name: 'Ecossistema', href: '#' },
]

export const HeaderNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-dracula-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <a href="#" className="">
          <span className="sr-only">Grupo Palin & Martins</span>
          <img alt="" src="/images/palin-martins-black.png" className="h-12 w-auto" />
        </a>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dracula-dark/75" >
            <span className="sr-only">Open main menu</span>
            <List aria-hidden="true" className="size-6 text-dracula-main" weight="duotone" />
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-x-12">
          <div className="flex gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-medium text-dracula-dark/75">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex gap-x-6">
            <a href="#" className="px-4 py-1.5 text-sm/6 font-medium border border-dracula-main text-dracula-main rounded-full">
              Trabalhe conosco
            </a>
            <a href="#" className="px-4 py-1.5 text-sm/6 font-medium bg-dracula-main text-dracula-white rounded-lg">
              Entre em contato
            </a>
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dracula-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-dracula-dark/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Grupo Palin & Martins</span>
              <img alt="" src="/images/palin-martins-black.png" className="h-12 w-auto" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-dracula-dark" >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="size-6 text-dracula-dark" weight="duotone" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-dracula-dark/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-dracula-dark hover:bg-dracula-dark/5" >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-dracula-dark hover:bg-dracula-dark/5">
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
