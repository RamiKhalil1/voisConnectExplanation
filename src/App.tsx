import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Team } from './components/Team'
import { Features } from './components/Features'
import { Benefits } from './components/Benefits'
import { PlatformFeatures } from './components/PlatformFeatures'
import { Architecture } from './components/Architecture'
import { WorkflowGuide } from './components/WorkflowGuide'
import { Challenges } from './components/Challenges'
import { UseCases } from './components/UseCases'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-darkblue-900 overflow-x-hidden max-w-full">
      <Header />
      <Hero />
      <Team />
      <Features />
      <Benefits />
      <PlatformFeatures />
      <Architecture />
      <WorkflowGuide />
      <Challenges />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
