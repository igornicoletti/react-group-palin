import { tv } from 'tailwind-variants'

export const contactVariants = tv({
  slots: {
    section: "py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8 text-center",
    sectionLabel: "text-lg/7 font-semibold text-dracula-main",
    title: "mt-4 mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-pretty text-dracula-dark",
    subtitleContainer: "mt-8 space-y-4 mx-auto max-w-5xl text-lg/7 text-balance font-extralight text-dracula-dark",
    buttonContainer: "mt-20 mx-auto max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-4",
    buttonBase: "px-6 py-2 font-medium text-center border-2 border-dracula-main rounded-lg",
    buttonPrimary: "text-dracula-white bg-dracula-main",
    buttonSecondary: "text-dracula-main bg-dracula-white",
  }
})
