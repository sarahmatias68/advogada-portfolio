import { Home as HomeComponent } from '../components/home'
import { About } from '@/components/about'
import { ServiceAdv } from '@/components/serviceAdv'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <HomeComponent />
      <About />
      <ServiceAdv />  
      <Contact />
    </>
  )
}
