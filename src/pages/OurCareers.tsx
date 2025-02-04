import { careersData } from '../datas'

export const OurCareers = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="max-w-4xl">
          <p className="font-semibold text-dracula-main">{careersData.section}</p>
          <h1 className="mt-2 text-4xl/tight font-semibold tracking-tight text-pretty text-dracula-dark">
            {careersData.title}
          </h1>
          <div className="mt-6 space-y-2 max-w-3xl text-xl/8 text-balance font-extralight text-dracula-dark">
            {careersData.subtitle.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="absolute top-0 right-0 text-dracula-main/25 h-full">
            <svg aria-hidden="true" width="628" height="628" viewBox="0 0 689 683" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-full'>
              <path d="M595.462 402.743C570.042 402.743 543.718 410.549 519.165 423.956L554.547 320.984C578.648 250.841 550.959 190.387 488.885 184.519C461.371 181.917 431.763 189.916 404.047 205.242L430.869 134.186C458.844 60.0761 428.212 0 362.439 0C296.667 0 218.027 60.0761 186.778 134.195L11.9736 548.805C-19.2757 622.915 15.4508 683 89.5433 683C131.068 683 175.479 664.122 211.349 634.476C224.539 664.113 254.506 683 296.03 683C337.554 683 381.329 664.122 416.185 634.476C430.38 664.122 460.983 683 502.508 683C576.591 683 655.258 622.924 678.206 548.805L681.877 536.939C704.826 462.829 666.142 402.753 595.462 402.753V402.743Z" fill="currentColor" />
            </svg>
          </div>
          <img src="/images/palin-martins-careers.jpg" alt="Team working" className="rounded-lg shadow-lg shadow-dracula-main/25 rotate-3" />
        </div>
      </div>
    </section>
  )
}
