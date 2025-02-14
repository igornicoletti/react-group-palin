import { tv } from 'tailwind-variants'

export const headerVariants = tv({
  slots: {
    header: "absolute w-full z-10 bg-gradient-to-b from-black to-transparent text-sm/6 font-medium",
    nav: "mx-auto max-w-7xl flex items-center justify-between w-full p-6 lg:px-8",
    logoContainer: "flex items-center justify-between gap-x-16",
    logo: "h-auto w-full max-w-52 md:max-w-72",
    dialogLogo: "sm:opacity-0 h-auto w-full max-w-52 md:max-w-72",
    navLinks: "hidden lg:flex gap-x-16",
    navLink: "px-4 py-1.5 text-dracula-white",
    mobileButton: "-m-2.5 p-2.5",
    mobileIcon: "size-8 text-dracula-main",
    ctaContainer: "hidden lg:flex items-center gap-x-12",
    ctaOutlined: "px-4 py-1.5 text-dracula-white",
    ctaFilled: "px-4 py-1.5 border border-dracula-main  bg-dracula-main rounded-lg text-dracula-white",
    dialog: "lg:hidden text-lg/7",
    dialogPanel: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dracula-dark text-dracula-white p-6 sm:max-w-sm sm:ring-1 sm:ring-dracula-dark/10",
    dialogHeader: "flex items-center justify-between",
    menuLinksContainer: "mt-4 flow-root",
    menuLinksWrapper: "divide-y divide-dracula-white/10",
    menuLinks: "py-6",
    menuLink: "-mx-3 block rounded-lg px-3 py-2",
    menuCtaContainer: "flex flex-col gap-x-6 py-6",
    menuCtaOutlined: "-mx-3 block rounded-lg px-3 py-2.5",
    menuCtaFilled: "-mx-3 block rounded-lg px-3 py-2.5",
  }
})
