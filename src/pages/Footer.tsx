import { FacebookLogo, IconProps, InstagramLogo, LinkedinLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

const navigation = {
  main: [
    { name: 'Empresa', href: '#' },
    { name: 'Ecossistema', href: '#' },
    { name: 'Trabalhe conosco', href: '#' },
    { name: 'Entre em contato', href: '#' },
  ],
  social: [

    {
      name: 'Facebook',
      href: 'https://web.facebook.com/PalineMartins?locale=pt_BR',
      icon: (props: IconProps) => <FacebookLogo {...props} />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/palin.martins/',
      icon: (props: IconProps) => <InstagramLogo {...props} />
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/palinemartins/',
      icon: (props: IconProps) => <LinkedinLogo {...props} />
    },

    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@PalineMartins',
      icon: (props: IconProps) => <YoutubeLogo {...props} />
    },
    {
      name: 'Whatsapp',
      href: 'https://api.whatsapp.com/message/SQ5ZTTC2UWRHN1?autoload=1&app_absent=0',
      icon: (props: IconProps) => <WhatsappLogo {...props} />
    },
  ],
}

export const Footer = () => {
  return (
    <footer className="relative bg-dracula-dark">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <img alt="" src="/images/palin-martins-white.png" className="h-20 w-auto mx-auto" />
        <nav aria-label="Footer" className="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {navigation.main.map((item) => (
            <a key={item.name} href={item.href} className="text-dracula-white/75 hover:text-dracula-white">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-10 flex justify-center gap-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-dracula-white/75 hover:text-dracula-white" target='_blank'>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" weight="duotone" className="size-6 text-dracula-white/75 hover:text-dracula-main" />
            </a>
          ))}
        </div>
        <p className="mt-20 text-center text-sm/6 text-dracula-white/50">&copy; 2025 Palin & Martins. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
