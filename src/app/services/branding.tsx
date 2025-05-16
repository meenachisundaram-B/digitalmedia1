// app/services/branding.tsx

export default function BrandingService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Branding</h1>
      <p className="text-lg text-gray-700 mb-4">
        We help brands build identity, voice, and recognition through powerful design and strategy.
      </p>
      <ul className="list-disc ml-6 text-gray-600 space-y-2">
        <li>Logo Design</li>
        <li>Brand Guidelines</li>
        <li>Color Palettes & Typography</li>
        <li>Brand Voice Development</li>
      </ul>
    </div>
  )
}
