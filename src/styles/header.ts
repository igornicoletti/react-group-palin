import { tv } from 'tailwind-variants'

export const headerVariants = tv({
  slots: {
    header: "relative",
    nav: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8",
    logoContainer: "flex items-center gap-x-16",
    logo: "h-12 w-auto",
    navLinks: "hidden lg:flex gap-x-16 -mb-1",
    navLink: "text-sm/6 font-medium text-dracula-dark/75 hover:text-dracula-dark",
    mobileButton: "-m-2.5 p-2.5",
    mobileIcon: "size-6 text-dracula-main",
    ctaContainer: "hidden lg:flex items-center gap-x-4 -mb-1",
    ctaOutlined: "px-4 py-1.5 text-sm/6 font-semibold border border-dracula-main text-dracula-main rounded-lg",
    ctaFilled: "px-4 py-1.5 text-sm/6 font-semibold border border-dracula-main text-dracula-white bg-dracula-main rounded-lg",
    dialog: "lg:hidden",
    dialogPanel: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dracula-white p-6 sm:max-w-sm sm:ring-1 sm:ring-dracula-dark/10",
    dialogHeader: "flex items-center justify-between",
    menuLinksContainer: "mt-6 flow-root",
    menuLinksWrapper: "divide-y divide-dracula-dark/10",
    menuLinks: "py-6",
    menuLink: "-mx-3 block rounded-lg px-3 py-2 text-sm/6 font-medium text-dracula-dark hover:bg-dracula-dark/5",
    menuCtaContainer: "flex flex-col gap-x-6 py-6",
    menuCtaOutlined: "-mx-3 block rounded-lg px-3 py-2.5 text-sm/6 font-semibold text-dracula-dark hover:bg-dracula-dark/5",
    menuCtaFilled: "-mx-3 block rounded-lg px-3 py-2.5 text-sm/6 font-semibold text-dracula-main hover:bg-dracula-dark/5",
  }
})
