import { tv } from 'tailwind-variants'

export const footerVariants = tv({
  slots: {
    footer: "relative bg-dracula-dark",
    container: "mx-auto max-w-7xl overflow-hidden px-6 py-24 lg:px-8",
    logo: "h-16 w-auto mx-auto",
    nav: "mt-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6",
    navItem: "text-dracula-white/75 hover:text-dracula-white",
    socialContainer: "mt-10 flex justify-center gap-x-12",
    socialItem: "text-dracula-white/75 hover:text-dracula-white",
    socialIcon: "size-6 text-dracula-white/50 hover:text-dracula-main",
    copyright: "mt-24 text-center text-sm/6 text-dracula-white/50"
  }
})
