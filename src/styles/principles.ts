import { tv } from 'tailwind-variants'

export const principlesVariants = tv({
  slots: {
    listItem: "text-balance font-extralight text-dracula-dark/75 before:bg-dracula-dark after:bg-dracula-dark",
    content: "font-medium pl-6 relative before:absolute after:absolute before:bg-dracula-main after:bg-dracula-dark/10 before:top-0 before:left-0 before:h-6 before:w-px after:top-8 after:bottom-0 after:left-0 after:w-px",
    title: "text-dracula-main",
  }
})
