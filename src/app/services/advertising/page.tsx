import { Card, CardHeader, CardTitle, CardContent } from "@/app/ui/card"
import Image from "next/image"

export default function AdvertisingPage() {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-8">
        <Card className="shadow-xl rounded-2xl border border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Advertising Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-700 text-justify">
              We provide cutting-edge advertising solutions tailored for your brand.
              From digital campaigns to traditional media, we help you connect with
              your audience in meaningful ways.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                <li>Digital Ad Campaigns (Meta, Google, YouTube)</li>
                <li>Outdoor and Print Advertising</li>
                <li>Media Buying Strategy</li>
                <li>Ad Copywriting and Visual Design</li>
                <li>Performance Tracking & Optimization</li>
              </ul>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/public/images/thoughts1.jpg"
                  alt="Advertising Illustration"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
