import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Decana } from '@/types/database'

// Fallback data when Supabase is not configured
const fallbackDecana: Decana = {
  id: 'fallback',
  nome: 'Prof.ª Dr.ª Helena Fernandes',
  titulo: 'Decana da Faculdade de Ciências Sociais e Humanas',
  mensagem: `É com imenso orgulho que dou as boas-vindas a todos os visitantes do nosso site institucional. A Faculdade de Ciências Sociais e Humanas tem como missão formar profissionais competentes, éticos e comprometidos com a transformação social.

Ao longo dos anos, a nossa instituição tem-se destacado pela excelência académica, pela investigação de qualidade e pelo impacto positivo na comunidade. Os nossos cursos de Psicologia do Trabalho e das Organizações, Psicologia Clínica e Línguas preparam os estudantes para enfrentar os desafios do mundo contemporâneo com conhecimento, sensibilidade e responsabilidade social.

Acreditamos que a educação superior deve ser transformadora, não apenas para os indivíduos, mas para toda a sociedade. Por isso, investimos continuamente na qualificação do nosso corpo docente, na atualização dos nossos programas curriculares e na criação de oportunidades de desenvolvimento para os nossos estudantes.

Convido-vos a conhecer melhor a nossa Faculdade, os nossos cursos, as nossas atividades de investigação e extensão. Juntos, podemos construir um futuro mais justo, inclusivo e sustentável.`
}

export async function getDecana(): Promise<Decana> {
  // Use fallback data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return fallbackDecana
  }

  try {
    const { data, error } = await supabase
      .from('decana')
      .select('*')
      .single()
    
    if (error) throw error
    return data
  } catch {
    // Silently fall back to inline data on error to ensure the page still renders
    // This is intentional - we prioritize showing content over error logging
    return fallbackDecana
  }
}
