'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { decana } from '@/data/decana'

export function MensagemDecana() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mensagem da Decana"
          subtitle="Palavras de boas-vindas da nossa Decana"
          centered
        />
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white">
                    {decana.nome.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-center text-primary dark:text-primary">
                  {decana.nome}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {decana.titulo}
                </p>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="prose dark:prose-invert max-w-none">
                  {decana.mensagem.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
