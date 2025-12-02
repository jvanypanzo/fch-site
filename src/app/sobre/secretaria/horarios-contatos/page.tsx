import { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Horários e Contatos da Secretaria',
  description: 'Horário de funcionamento e formas de contato da Secretaria Académica da FCSH.',
}

const horarios = [
  { dia: 'Segunda-feira', horario: '08:00 - 12:00 | 14:00 - 17:00' },
  { dia: 'Terça-feira', horario: '08:00 - 12:00 | 14:00 - 17:00' },
  { dia: 'Quarta-feira', horario: '08:00 - 12:00 | 14:00 - 17:00' },
  { dia: 'Quinta-feira', horario: '08:00 - 12:00 | 14:00 - 17:00' },
  { dia: 'Sexta-feira', horario: '08:00 - 12:00' },
  { dia: 'Sábado', horario: 'Fechado' },
  { dia: 'Domingo', horario: 'Fechado' },
]

export default function HorariosContatosPage() {
  return (
    <>
      <PageHeader
        title="Horários e Contatos"
        description="Saiba quando e como contactar a Secretaria Académica."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Horário de Funcionamento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {horarios.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between py-2 ${
                        index < horarios.length - 1 ? 'border-b border-gray-100' : ''
                      }`}
                    >
                      <span className="font-medium text-gray-700">{item.dia}</span>
                      <span className={item.horario === 'Fechado' ? 'text-gray-400' : 'text-gray-600'}>
                        {item.horario}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  * Horários especiais durante feriados e períodos de férias académicas.
                </p>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <CardTitle>Telefones</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Geral:</strong> +244 222 123 456</li>
                    <li><strong>Matrículas:</strong> +244 222 123 457</li>
                    <li><strong>Documentos:</strong> +244 222 123 458</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <strong>Geral:</strong>{' '}
                      <a href="mailto:secretaria@fcsh.edu" className="text-primary hover:text-secondary">
                        secretaria@fcsh.edu
                      </a>
                    </li>
                    <li>
                      <strong>Matrículas:</strong>{' '}
                      <a href="mailto:matriculas@fcsh.edu" className="text-primary hover:text-secondary">
                        matriculas@fcsh.edu
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <CardTitle>Localização</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Edifício Principal, Piso Térreo<br />
                    Av. Principal, 1234<br />
                    Campus Universitário
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
