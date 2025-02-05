import { tv } from 'tailwind-variants'

export const careersVariants = tv({
  slots: {
    section: "py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8",
    gridContainer: "flex flex-col lg:flex-row space-x-24 space-y-24 items-center justify-between",
    textContainer: "relative",
    sectionLabel: "text-lg/7 font-semibold text-dracula-main",
    title: "mt-2 lg:max-w-lg text-4xl font-semibold tracking-tight text-pretty text-dracula-dark",
    subtitleContainer: "mt-6 space-y-2 lg:max-w-lg text-xl/8 text-balance font-extralight text-dracula-dark",
    imageContainer: "relative flex items-center justify-center",
    imageBackground: "absolute text-dracula-main/25 w-full",
    image: "mx-auto w-full max-w-2xl rounded-xl shadow-xl shadow-dracula-dark/10 rotate-3"
  }
})
