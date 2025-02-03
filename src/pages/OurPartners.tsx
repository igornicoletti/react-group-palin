import { partnersData } from '../datas'

export const OurPartners = () => {
  return (
    <div className="py-24 mx-auto max-w-full px-6 lg:px-8 bg-dracula-main/5">
      <div className="overflow-hidden relative">
        <ul className="flex animate-marquee space-x-48">
          {partnersData.concat(partnersData).map((partner, index) => (
            <li key={index} className="flex-shrink-0">
              <img className="max-h-14 w-full object-contain" src={partner.src} alt={partner.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
