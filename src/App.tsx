import { AboutUs, ContactUs, Footer, HeaderNav, HeroBanner, OurCareers, OurCulture, OurPartners } from './pages'

export const App = () => {
  return (
    <div className='min-h-screen bg-dracula-white'>
      <HeaderNav />
      <HeroBanner />
      <AboutUs />
      <OurPartners />
      <OurCulture />
      <OurCareers />
      <ContactUs />
      <Footer />
    </div>
  )
}
