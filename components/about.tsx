import { BriefcaseIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export function About() {
  return (
    <section id="sobre" className="min-h-screen flex items-center bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Sobre mim</h2>
        
        <div className="text-lg text-gray-600 space-y-6 max-w-3xl mx-auto mb-16">
          <p>
            Com mais de uma década de experiência na advocacia, dedico-me a oferecer soluções jurídicas personalizadas e eficientes para meus clientes.
          </p>
          <p>
            Formada pela renomada Faculdade de Direito, com especializações em Direito Civil e Empresarial, atuo com ética, comprometimento e excelência em cada caso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Formação Acadêmica */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <AcademicCapIcon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold">Formação Acadêmica</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-secondary pl-4">
                <p className="font-semibold">Mestrado em Direito Empresarial</p>
                <p className="text-gray-600">Universidade XYZ - 2018</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <p className="font-semibold">Especialização em Direito Civil</p>
                <p className="text-gray-600">Faculdade ABC - 2015</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <p className="font-semibold">Bacharelado em Direito</p>
                <p className="text-gray-600">Universidade XYZ - 2013</p>
              </div>
            </div>
          </div>

          {/* Experiência Profissional */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <BriefcaseIcon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold">Experiência</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-secondary pl-4">
                <p className="font-semibold">Advogada Sênior</p>
                <p className="text-gray-600">Escritório Próprio - 2018 até o presente</p>
                <ul className="text-gray-600 mt-2 list-disc list-inside text-sm">
                  <li>Gestão de equipe jurídica</li>
                  <li>Consultoria empresarial</li>
                  <li>Direito Civil e Empresarial</li>
                </ul>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <p className="font-semibold">Advogada Associada</p>
                <p className="text-gray-600">Escritório ABC Advogados - 2015 a 2018</p>
                <ul className="text-gray-600 mt-2 list-disc list-inside text-sm">
                  <li>Contencioso cível</li>
                  <li>Contratos empresariais</li>
                  <li>Direito do consumidor</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificações e Cursos */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <BookOpenIcon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold">Certificações</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-secondary pl-4">
                <p className="font-semibold">Mediação e Arbitragem</p>
                <p className="text-gray-600">Câmara de Mediação - 2022</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <p className="font-semibold">Direito Digital e LGPD</p>
                <p className="text-gray-600">Instituto Legal Tech - 2021</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <p className="font-semibold">Compliance Empresarial</p>
                <p className="text-gray-600">Compliance Academy - 2020</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <p className="font-semibold">Proteção de Dados</p>
                <p className="text-gray-600">Data Privacy Institute - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}