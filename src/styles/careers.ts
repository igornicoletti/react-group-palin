import { tv } from 'tailwind-variants'

export const careersVariants = tv({
  slots: {
    section: "py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8",
    gridContainer: "grid lg:grid-cols-2 gap-24 items-center",
    textContainer: "relative",
    sectionLabel: "text-lg/7 font-semibold text-dracula-main",
    title: "mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-pretty text-dracula-dark",
    subtitleContainer: "mt-6 space-y-2 max-w-3xl text-xl/8 text-balance font-extralight text-dracula-dark",
    imageContainer: "relative",
    imageBackground: "absolute -top-1/3 right-0 text-dracula-main/25 w-full",
    image: "mx-auto max-w-xl rounded-xl shadow-xl shadow-dracula-dark/10 rotate-3"
  }
})
