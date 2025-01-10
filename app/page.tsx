import Image from 'next/image'
import { BriefcaseIcon, ScaleIcon, UserGroupIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary/10 to-secondary/10 pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Quelly Honorato
              </h1>
              <h2 className="text-3xl font-semibold mb-4 text-gray-700">
                Advogada Especialista em Direito Civil e Empresarial
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Defendendo seus direitos com excelência e dedicação há mais de 10 anos
              </p>
              <div className="flex gap-4">
                <a href="#contato" className="btn">
                  Entre em Contato
                </a>
                <a href="#servicos" className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all">
                  Ver Serviços
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-[95%] mx-auto aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                <Image
                  src="/images/foto.png"
                  alt="Quelly Honorato"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 mb-6">
              Com mais de uma década de experiência na advocacia, dedico-me a oferecer soluções jurídicas personalizadas e eficientes para meus clientes.
            </p>
            <p className="text-xl text-gray-600">
              Formada pela renomada Faculdade de Direito, com especializações em Direito Civil e Empresarial, atuo com ética, comprometimento e excelência em cada caso.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Casos Ganhos' },
              { number: '10+', label: 'Anos de Experiência' },
              { number: '300+', label: 'Clientes Satisfeitos' },
              { number: '50+', label: 'Empresas Atendidas' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                <h3 className="text-4xl font-bold text-secondary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Áreas de Atuação</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Especialização e excelência em diversas áreas do direito</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ScaleIcon,
                title: 'Direito Civil',
                desc: 'Especialização em contratos, família e sucessões',
                items: ['Contratos', 'Família', 'Sucessões', 'Responsabilidade Civil']
              },
              {
                icon: BriefcaseIcon,
                title: 'Direito Empresarial',
                desc: 'Suporte jurídico completo para sua empresa',
                items: ['Contratos', 'Societário', 'Tributário', 'Recuperação Judicial']
              },
              {
                icon: UserGroupIcon,
                title: 'Direito Trabalhista',
                desc: 'Defendendo os direitos dos trabalhadores',
                items: ['Reclamatórias', 'Acordos', 'Consultoria', 'Compliance']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <service.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-secondary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Depoimentos</h2>
          <p className="text-xl text-gray-600 text-center mb-16">O que nossos clientes dizem sobre nosso trabalho</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'João Silva',
                role: 'Empresário',
                text: 'A Dra. Quelly é uma excelente profissional. Resolveu meu caso com muita competência e agilidade.'
              },
              {
                name: 'Maria Oliveira',
                role: 'Cliente',
                text: 'Muito atenciosa e profissional. Recomendo fortemente os serviços da Dra. Quelly Honorato.'
              },
              {
                name: 'Pedro Santos',
                role: 'Executivo',
                text: 'Conhecimento jurídico excepcional e atendimento personalizado. Profissional altamente qualificada.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="min-h-screen flex items-center bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Precisa de Assistência Jurídica?
          </h2>
          <p className="text-xl mb-12">
            Entre em contato para uma consulta e descubra como posso ajudar você
          </p>
          <form className="max-w-md mx-auto">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Seu Nome"
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                placeholder="Seu Email"
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <textarea
                placeholder="Sua Mensagem"
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              ></textarea>
              <button type="submit" className="btn bg-white text-primary hover:bg-gray-100 w-full">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
