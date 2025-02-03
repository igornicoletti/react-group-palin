import { contactData } from '../datas'

export const ContactUs = () => {
  return (
    <section className="overflow-hidden py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-4xl text-center mx-auto">
        <p className="font-semibold text-dracula-main">{contactData.section}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-dracula-dark">{contactData.title}</h1>
        <div className="mt-6 space-y-2">
          {contactData.subtitle.map((item, index) => (
            <p className={`mt-2 text-xl text-balance text-dracula-dark/75 ${index % 2 !== 0 ? 'font-semibold' : ''}`} key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-center space-x-4">
        <a className="px-6 h-12 flex items-center border border-dracula-main bg-dracula-main text-white rounded-full" href={contactData.emailLink} target="_blank">{contactData.buttons.emailText}</a>
        <a className="px-6 h-12 flex items-center border border-dracula-main text-dracula-main rounded-full" href={contactData.whatsappLink} target="_blank">{contactData.buttons.whatsappText}</a>
      </div>
    </section>
  )
}
