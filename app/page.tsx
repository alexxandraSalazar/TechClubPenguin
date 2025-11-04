"use client"

import { Mail, Phone, MapPin, Zap, Settings, HardDrive, Wrench, Download, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  const services = [
    {
      icon: Zap,
      title: "Optimización de Windows",
      description: "Limpieza profunda y optimización del rendimiento de tu sistema operativo.",
    },
    {
      icon: Clock,
      title: "Mantenimiento Preventivo",
      description: "Cuidado regular para mantener tu PC en perfectas condiciones.",
    },
    {
      icon: Settings,
      title: "Instalación de Office",
      description: "Instalación e instalación completa de Microsoft Office y otras herramientas.",
    },
    {
      icon: Download,
      title: "Actualización de Drivers",
      description: "Actualización automática de drivers para máximo rendimiento.",
    },
    {
      icon: HardDrive,
      title: "Instalación de Drivers",
      description: "Instalación correcta de drivers de hardware y periféricos.",
    },
    {
      icon: Wrench,
      title: "Instalación de SO",
      description: "Instalación profesional de Windows, Linux y otros sistemas operativos.",
    },
    {
      icon: Shield,
      title: "Activación de Windows",
      description: "Activación legal y segura de Windows con garantía.",
    },
  ]

  const features = [
    {
      title: "Soporte Rápido y Confiable",
      description: "Respuesta inmediata a tus necesidades técnicas.",
    },
    {
      title: "Experiencia Técnica",
      description: "Especialistas en hardware y software de nivel universitario.",
    },
    {
      title: "Atención Personalizada",
      description: "Soluciones adaptadas a tus necesidades específicas.",
    },
    {
      title: "Garantía de Satisfacción",
      description: "Garantizamos tu satisfacción en cada servicio.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10¿ rounded-full flex items-center justify-center">
              <img src="/vercel.svg" alt="Vercel" className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-black">Tech Club Penguin</h1>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Servicios
            </a>
            <a href="#why" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Por qué nosotros
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden circuit-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 text-balance">
              Tu PC como nueva con Tech Club Penguin 🧊
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance">
              Expertos en hardware y software — optimizamos, reparamos e instalamos todo lo que tu equipo necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg">
                  Solicitar servicio
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold rounded-lg border-2 border-black text-black hover:bg-gray-100 bg-transparent"
                >
                  Contáctanos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 text-lg">Soluciones completas para tu equipo</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <Card className="p-8 border border-gray-200 hover-lift cursor-pointer group bg-white">
                    <div className="mb-4 inline-flex p-3 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">¿Por qué elegirnos?</h2>
            <p className="text-gray-600 text-lg">Experiencia, confiabilidad y profesionalismo</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Contáctanos</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold rounded-lg"
                >
                  Enviar mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-black mb-6">Información de Contacto</h2>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black">Email</p>
                  <a
                    href="mailto:alexandra.rodriguez63u@std.uni.edu.ni"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    alexandra.rodriguez63u@std.uni.edu.ni
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black">WhatsApp</p>
                  <a href="https://wa.me/50588759686" className="text-gray-600 hover:text-orange-500 transition-colors">
                    +505 88759686
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black">Ubicación</p>
                  <p className="text-gray-600">
                    Universidad Nacional de Ingeniería (UNI)
                    <br />
                    Managua, Nicaragua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Tech Club Penguin – Todos los derechos reservados.</p>
          <p className="text-gray-500 text-sm mt-2">Universidad Nacional de Ingeniería (UNI)</p>
        </div>
      </footer>
    </main>
  )
}
