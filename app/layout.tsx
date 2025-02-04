import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { MenuBar } from '@/components/menubar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quelly Honorato | Advocacia Especializada',
  description: 'Advocacia especializada em direito civil, empresarial e trabalhista com Quelly Honorato',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
          <MenuBar /> 
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-primary text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Quelly Honorato</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Advocacia especializada com compromisso e excelência
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contato</h3>
                  <div className="space-y-4">
                    <p className="text-gray-400 flex items-center">
                      <span className="mr-2">📧</span>
                      Email: contato@exemplo.com
                    </p>
                    <p className="text-gray-400 flex items-center">
                      <span className="mr-2">📱</span>
                      Telefone: (11) 1234-5678
                    </p>
                    <p className="text-gray-400 flex items-center">
                      <span className="mr-2">📍</span>
                      Endereço: Rua Exemplo, 123
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Redes Sociais</h3>
                  <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <FaLinkedinIn className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <FaWhatsapp className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <FaEnvelope className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-secondary mt-12 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Quelly Honorato - Todos os direitos reservados</p>
              </div>
            </div>
          </footer>
      </body>
    </html>
  )
}
