import { FacebookLogo, IconProps, InstagramLogo, LinkedinLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

export const footerData = {
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
  copy: '2025 Palin & Martins. Todos os direitos reservados.'
}
