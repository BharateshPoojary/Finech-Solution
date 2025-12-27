import { Globe, Building2, Maximize2, Lock } from "lucide-react"
import { FeatureCard } from "./common/feature-card"
import { GlobalPaymentsMockup } from "../components/mockups/global-payments"
import { BaasMockup } from "../components/mockups/baas"
import { ScalabilityMockup } from "../components/mockups/scalability"
import { SecurityMockup } from "../components/mockups/security"
import BlueText from "./common/blue-text"
import Heading from "./common/heading"

export default function FintechFeatures() {
    return (
        <main className="min-h-screen bg-white py-24 px-4">
            <div className="mx-auto max-w-7xl">

                <Heading
                    description="Unlock seamless transactions, secure financial services, and limitless scalability with our powerful,
                        API-driven infrastructure."
                    heading="Powering the Future of Finance"
                    text="Why Choose Finech?"
                    type="light"
                />


                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-12 lg:grid-rows-2">
                    {/* Global Payments */}
                    <FeatureCard
                        icon={<Globe className="h-5 w-5" />}
                        title="Global Payments"
                        description="Accept payments in 100+ currencies with instant settlement, ensuring smooth transactions across borders."
                        className="lg:col-span-5 lg:row-span-1"
                    >
                        <GlobalPaymentsMockup />
                    </FeatureCard>

                    {/* Banking as a Service */}
                    <FeatureCard
                        icon={<Building2 className="h-5 w-5" />}
                        title="Banking as a Service"
                        description="Issue virtual and physical cards effortlessly, securely hold and manage funds, and seamlessly provide a wide range of financial services."
                        className="lg:col-span-7 lg:row-span-1"
                    >
                        <BaasMockup />
                    </FeatureCard>

                    {/* Scalability */}
                    <FeatureCard
                        icon={<Maximize2 className="h-5 w-5" />}
                        title="Scalability"
                        description="A robust, API-driven system built to seamlessly support startups and enterprises, providing the flexibility, scalability, and security."
                        className="lg:col-span-7 lg:row-span-1"
                    >
                        <ScalabilityMockup />
                    </FeatureCard>

                    {/* Compliance & Security */}
                    <FeatureCard
                        icon={<Lock className="h-5 w-5" />}
                        title="Compliance & Security"
                        description="Built-in KYC, AML, and fraud prevention measures to keep every transaction safe and compliant."
                        className="lg:col-span-5 lg:row-span-1"
                    >
                        <SecurityMockup />
                    </FeatureCard>
                </div>
            </div>
        </main>
    )
}
