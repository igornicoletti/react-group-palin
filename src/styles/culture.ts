import { tv } from 'tailwind-variants'

export const cultureVariants = tv({
  slots: {
    section: 'py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8',
    sectionText: 'text-lg/7 font-semibold text-dracula-main',
    title: 'mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-pretty text-dracula-dark',
    subtitle: 'mt-6 space-y-2 max-w-5xl text-xl/8 text-balance font-extralight text-dracula-dark',
    list: 'mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3',
  },
})
