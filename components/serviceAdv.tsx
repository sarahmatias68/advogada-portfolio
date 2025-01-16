import { BriefcaseIcon, ScaleIcon, UserGroupIcon, CheckCircleIcon} from '@heroicons/react/24/outline'

export function ServiceAdv() {
    return (
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
    )
}