import { partnersData } from '../datas'

export const OurPartners = () => {
  return (
    <div className="py-24 sm:py-32 mx-auto max-w-full px-6 lg:px-8 bg-dracula-main/5">
      <div className="overflow-hidden relative">
        <ul className="flex animate-marquee space-x-64">
          {partnersData.concat(partnersData).map((partner, index) => (
            <li key={index} className="flex-shrink-0 w-1/8">
              <img className="max-w-full h-auto" src={partner.src} alt={partner.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
