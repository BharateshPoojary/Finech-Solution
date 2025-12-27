"use client"

import FintechFeatures from "./components/fintech-features"
import HeroSection from "./components/hero-section"
import SuccessStory from "./components/success-story"
import TargetAudience from "./components/target-audience"


const page = () => {
  return (
    <div>
      <HeroSection />
      <FintechFeatures />
      <TargetAudience />
      <SuccessStory />
    </div>
  )
}

export default page