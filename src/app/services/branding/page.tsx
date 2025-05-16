import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/app/ui/card"

export default function BrandingServicesPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <section className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Branding Services</h1>
            <p className="text-lg text-gray-700 text-justify mb-4">
              We help businesses build unforgettable brands through strategic design, naming,
              identity systems, and brand storytelling. Elevate your presence with consistent,
              powerful branding.
            </p>
            <p className="text-lg text-gray-700 text-justify">
              Our approach blends creativity and strategy to create brands that resonate.
              From logo design to voice development, we craft your identity for maximum impact.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/image/thoughts1.jpg"
              alt="Branding strategy visual"
              width={400}
              height={600}
              className="rounded-xl object-cover  bg-gray-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Logo Design</CardTitle>
            </CardHeader>
            <CardContent>
              Custom logos that reflect your vision and make a lasting first impression.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Brand Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              Consistent rules for logo use, color, fonts, and messaging to maintain brand integrity.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Color Palettes & Typography</CardTitle>
            </CardHeader>
            <CardContent>
              Curated colors and typefaces to visually distinguish and unify your brand.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Brand Voice Development</CardTitle>
            </CardHeader>
            <CardContent>
              Create a clear, consistent tone for all communications that resonates with your audience.
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
