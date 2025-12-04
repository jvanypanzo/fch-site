import { Metadata } from 'next'
import { Calendar, MapPin } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { getEventosRealizados } from '@/lib/queries/eventos'

export const metadata: Metadata = {
  title: 'Eventos Realizados',
  description: 'Histórico de eventos realizados pela FCSH.',
}

export default async function EventosRealizadosPage() {
  const eventosRealizados = getEventosRealizados()

  return (
    <>
      <PageHeader
        title="Eventos Realizados"
        description="Confira o histórico de eventos realizados pela FCSH."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {eventosRealizados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventosRealizados.map((evento) => (
                <Card key={evento.id} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs px-2 py-1 rounded opacity-75 ${
                        evento.tipo === 'conferencia' ? 'bg-blue-100 text-blue-700' :
                        evento.tipo === 'seminario' ? 'bg-green-100 text-green-700' :
                        evento.tipo === 'workshop' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(evento.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <CardTitle className="text-lg text-gray-700">{evento.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{evento.descricao}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {evento.local}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Não há eventos registrados.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
