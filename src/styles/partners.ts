import { tv } from 'tailwind-variants'

export const partnersVariants = tv({
  slots: {
    section: "py-24 mx-auto max-w-full px-6 lg:px-8 bg-dracula-main/5",
    container: "overflow-hidden relative",
    list: "flex animate-marquee space-x-48",
    listItem: "flex-shrink-0",
    image: "h-24 w-full object-contain"
  }
})
