import { AboutUs, ContactUs, HeaderNav, OurCulture, OurPartners } from './pages'

export const App = () => {
  return (
    <div className='min-h-screen bg-dracula-white'>
      <HeaderNav />
      <AboutUs />
      <OurPartners />
      <OurCulture />
      <ContactUs />
    </div>

  )
}
