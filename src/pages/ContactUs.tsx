import { contactData } from '../datas'

export const ContactUs = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-4xl text-center mx-auto">
        <p className="font-semibold text-dracula-main">{contactData.section}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-dracula-dark">{contactData.title}</h1>
        <div className="mt-6 space-y-2">
          {contactData.subtitle.map((item, index) => (
            <p className={`mt-2 text-xl text-balance text-dracula-dark/75 ${index % 2 !== 0 ? 'font-semibold' : ''}`} key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div className="max-w-md mx-auto mt-16 grid sm:grid-cols-2 gap-2 sm:gap-4">
        <a className="px-6 py-2 font-medium text-center border-2 border-dracula-main text-dracula-main bg-dracula-white rounded-lg" href={contactData.emailLink} target="_blank">{contactData.buttons.emailText}</a>
        <a className="px-6 py-2 font-medium text-center border-2 border-dracula-main text-dracula-white bg-dracula-main rounded-lg" href={contactData.whatsappLink} target="_blank">{contactData.buttons.whatsappText}</a>
      </div>
    </section>
  )
}
