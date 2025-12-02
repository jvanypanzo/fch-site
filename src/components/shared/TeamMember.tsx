import { Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

interface TeamMemberProps {
  nome: string
  cargo?: string
  titulacao?: string
  areas?: string[]
  email?: string
  foto?: string
  departamento?: string
}

export function TeamMember({ nome, cargo, titulacao, areas, email, departamento }: TeamMemberProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4 mx-auto">
          <span className="text-2xl font-bold text-gray-500">
            {nome.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-center text-primary mb-1">{nome}</h3>
        {cargo && <p className="text-sm text-secondary text-center font-medium">{cargo}</p>}
        {titulacao && <p className="text-sm text-gray-600 text-center">{titulacao}</p>}
        {departamento && <p className="text-sm text-gray-500 text-center">Departamento de {departamento}</p>}
        {areas && areas.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 text-center mb-1">Áreas de atuação:</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {areas.map((area, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
        {email && (
          <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <a href={`mailto:${email}`} className="hover:text-primary">{email}</a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
