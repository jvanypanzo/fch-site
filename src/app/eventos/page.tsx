import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { getEventosFuturos, getEventosRealizados } from '@/lib/queries/eventos'

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Conferências, seminários, workshops e eventos culturais da FCSH.',
}

export default async function EventosPage() {
  const eventosFuturos = getEventosFuturos()
  const eventosRealizados = getEventosRealizados()

  return (
    <>
      <PageHeader
        title="Eventos"
        description="Conferências, seminários, workshops e eventos culturais promovidos pela FCSH."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <SectionTitle title="Próximos Eventos" className="mb-0" />
              <Link href="/eventos/futuros" className="text-primary hover:text-secondary font-medium inline-flex items-center">
                Ver todos <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventosFuturos.slice(0, 3).map((evento) => (
                <Card key={evento.id} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-secondary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(evento.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <CardTitle className="text-lg">{evento.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{evento.descricao}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {evento.hora}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {evento.local}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-8">
              <SectionTitle title="Eventos Realizados" className="mb-0" />
              <Link href="/eventos/realizados" className="text-primary hover:text-secondary font-medium inline-flex items-center">
                Ver todos <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventosRealizados.slice(0, 3).map((evento) => (
                <Card key={evento.id} className="h-full opacity-90">
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(evento.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <CardTitle className="text-lg">{evento.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{evento.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
