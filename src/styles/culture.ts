import { tv } from 'tailwind-variants'

export const cultureVariants = tv({
  slots: {
    section: 'py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8',
    sectionText: 'text-lg/7 font-medium text-dracula-main',
    title: 'mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-pretty text-dracula-dark',
    subtitle: 'mt-8 space-y-4 max-w-5xl text-lg/7 text-balance font-extralight text-dracula-dark',
    list: 'mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2',
    biblicalSection: 'pl-12 mt-16 space-y-6',
    biblicalItem: 'border-l-4 border-dracula-main pl-4',
    biblicalTitle: 'text-lg/7 font-semibold text-dracula-main',
    biblicalText: 'text-lg/7 font-medium text-dracula-dark text-balance',
    philosophy: 'mt-16 space-y-4 text-lg/7 text-dracula-dark text-balance font-extralight'
  },
})
