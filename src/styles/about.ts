import { tv } from 'tailwind-variants'

export const aboutVariants = tv({
  slots: {
    section: "py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8",
    sectionLabel: "text-lg/7 font-semibold text-dracula-main",
    title: "mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-pretty text-dracula-dark",
    subtitleContainer: "mt-6 space-y-2 max-w-3xl text-xl/8 text-balance font-extralight text-dracula-dark",
    missionContainer: "mt-20 grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-8",
    missionText: "lg:max-w-lg",
    missionTitle: "text-2xl font-semibold tracking-tight text-pretty text-dracula-dark",
    missionParagraphs: "mt-6 space-y-4 text-balance font-extralight text-dracula-dark/75",
    imageGrid: "-mx-6 grid grid-cols-2 gap-4 sm:-mx-6 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8",
    imageWrapper: "aspect-square overflow-hidden rounded-xl shadow-xl shadow-dracula-dark/10 outline-1 -outline-offset-1 outline-dracula-dark/10",
    imageOffset: "-mt-8 lg:-mt-40",
    image: "block size-full object-cover"
  }
})
