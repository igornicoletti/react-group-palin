import { contactData } from '../datas'

export const ContactUs = () => {
  return (
    <section className="py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <p className="text-lg/7 font-semibold text-dracula-main">
        {contactData.section}
      </p>
      <h1 className="mt-2 max-w-3xl mx-auto text-4xl font-semibold tracking-tight text-pretty text-dracula-dark">
        {contactData.title}
      </h1>
      <div className="mt-6 space-y-2 max-w-5xl mx-auto text-xl/8 text-balance text-dracula-dark/75">
        {contactData.subtitle.map((item, index) => (
          <p key={index} className={index % 2 !== 0 ? 'font-semibold' : ''}>
            {item}
          </p>
        ))}
      </div>
      <div className="mt-16 grid max-w-md mx-auto gap-4 sm:grid-cols-2">
        {contactData.buttons.map((item, index) => (
          <a key={index} role="button" target="_blank" href={item.link} className={`px-6 py-2 font-medium text-center border-2 border-dracula-main rounded-lg ${index % 2 !== 0 ? 'text-dracula-main bg-dracula-white' : 'text-dracula-white bg-dracula-main'}`}>
            {item.text}
          </a>
        ))}
      </div>
    </section >
  )
}
