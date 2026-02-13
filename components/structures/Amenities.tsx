import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export default function Amenities() {
  const features = [
    {
      icon: "📘",
      title: "girls-Only Accommondation",
      description: "Exclusively for women. No exceptions. Your comfort and privacy guaranteed",
    },
    {
      icon: "🏠",
      title: "24/7 Security & CCTV",
      description: "Round-the-clock security personnel and surveillance for complete peace of mind.",
    },

    {
      icon: "🤝",
      title: "Verified PG Owner",
      description: "Background-verified owner with 3+ years of trusted operation and excellent reviews",
    },
    {
      icon: "🛡️",
      title: "Clean & Maintained",
      description: "professional housekeeping, regular sanitizationm and well-maintained facilities.",
    },
  ]

  return (
    <section id="amenities" className="max-w-7xl mx-auto px-1 py-8 text-center">
        <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
<p className="text-gray mb-10"> We understand the importance of safety for women living away from home. Every aspect of our PG is designed with your security in mind.</p>
</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="hover:scale-105 cursor-pointer transition-transform duration-300 shadow"
          >
            <CardHeader>
              <div className="text-3xl mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
