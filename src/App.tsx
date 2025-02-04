import { AboutUs, ContactUs, Footer, HeaderNav, OurCareers, OurCulture, OurPartners } from './pages'

export const App = () => {
  return (
    <div className='min-h-screen bg-dracula-white'>
      <HeaderNav />
      <OurPartners />
      <AboutUs />
      <OurCulture />
      <OurCareers />
      <ContactUs />
      <Footer />
    </div>

  )
}
