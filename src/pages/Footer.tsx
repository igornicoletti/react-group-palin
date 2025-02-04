import { footerData } from '../datas'

export const Footer = () => {
  return (
    <footer className="relative bg-dracula-dark">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-24 lg:px-8">
        <img alt="" src="/images/palin-martins-white.png" className="h-20 w-auto mx-auto" />
        <nav aria-label="Footer" className="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {footerData.main.map((item) => (
            <a key={item.name} href={item.href} className="text-dracula-white/75 hover:text-dracula-white">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-10 flex justify-center gap-x-10">
          {footerData.social.map((item) => (
            <a key={item.name} href={item.href} className="text-dracula-white/75 hover:text-dracula-white" target='_blank'>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" weight="duotone" className="size-6 text-dracula-white/75 hover:text-dracula-main" />
            </a>
          ))}
        </div>
        <p className="mt-16 text-center text-sm/6 text-dracula-white/25">&copy; {footerData.copy}</p>
      </div>
    </footer>
  )
}
