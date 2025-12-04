import { supabase, isSupabaseConfigured } from '@/lib/supabase'

// Evento display interface
export interface EventoDisplay {
  id: string
  titulo: string
  data: string
  hora: string
  local: string
  descricao: string
  tipo: 'conferencia' | 'seminario' | 'workshop' | 'cultural'
  status: 'futuro' | 'realizado'
  imagem?: string
}

// Fallback events data
const fallbackEventos: EventoDisplay[] = [
  {
    id: '1',
    titulo: 'Conferência Internacional de Psicologia Clínica',
    data: '2024-03-15',
    hora: '09:00',
    local: 'Auditório Principal - FCH',
    descricao: 'Conferência com especialistas internacionais sobre as mais recentes abordagens em Psicologia Clínica e Psicoterapia.',
    tipo: 'conferencia',
    status: 'futuro',
  },
  {
    id: '2',
    titulo: 'Seminário: Políticas Sociais em Tempos de Crise',
    data: '2024-03-20',
    hora: '14:00',
    local: 'Sala de Conferências B',
    descricao: 'Debate sobre os desafios das políticas sociais em contextos de crise económica e social.',
    tipo: 'seminario',
    status: 'futuro',
  },
  {
    id: '3',
    titulo: 'Workshop de Comunicação Digital',
    data: '2024-04-05',
    hora: '10:00',
    local: 'Laboratório de Informática',
    descricao: 'Workshop prático sobre estratégias de comunicação em plataformas digitais e redes sociais.',
    tipo: 'workshop',
    status: 'futuro',
  },
  {
    id: '4',
    titulo: 'Jornadas de Sociologia Urbana',
    data: '2024-04-15',
    hora: '09:30',
    local: 'Auditório Principal',
    descricao: 'Jornadas dedicadas à reflexão sobre os desafios das cidades contemporâneas.',
    tipo: 'seminario',
    status: 'futuro',
  },
  {
    id: '5',
    titulo: 'Semana Cultural FCH',
    data: '2024-05-10',
    hora: '18:00',
    local: 'Campus FCH',
    descricao: 'Evento cultural com exposições, apresentações artísticas e atividades diversas promovidas pela Associação de Estudantes.',
    tipo: 'cultural',
    status: 'futuro',
  },
  {
    id: '6',
    titulo: 'Conferência de Abertura do Ano Letivo',
    data: '2023-09-15',
    hora: '10:00',
    local: 'Auditório Principal',
    descricao: 'Conferência inaugural do ano letivo 2023/2024 com a presença do Reitor.',
    tipo: 'conferencia',
    status: 'realizado',
  },
  {
    id: '7',
    titulo: 'Seminário de Metodologia de Investigação',
    data: '2023-10-20',
    hora: '14:30',
    local: 'Sala de Conferências A',
    descricao: 'Seminário sobre métodos qualitativos e quantitativos em investigação social.',
    tipo: 'seminario',
    status: 'realizado',
  },
  {
    id: '8',
    titulo: 'Workshop: Elaboração de Projetos Sociais',
    data: '2023-11-08',
    hora: '09:00',
    local: 'Sala de Formação',
    descricao: 'Workshop prático sobre a elaboração e gestão de projetos de intervenção social.',
    tipo: 'workshop',
    status: 'realizado',
  },
  {
    id: '9',
    titulo: 'Feira de Estágios FCH',
    data: '2023-11-25',
    hora: '10:00',
    local: 'Átrio Principal',
    descricao: 'Feira com presença de empresas e instituições parceiras para apresentação de oportunidades de estágio.',
    tipo: 'cultural',
    status: 'realizado',
  },
  {
    id: '10',
    titulo: 'Colóquio de Natal',
    data: '2023-12-15',
    hora: '16:00',
    local: 'Auditório Principal',
    descricao: 'Evento de encerramento do primeiro semestre com confraternização da comunidade académica.',
    tipo: 'cultural',
    status: 'realizado',
  },
]

export function getEventosFuturos(): EventoDisplay[] {
  return fallbackEventos.filter(e => e.status === 'futuro')
}

export function getEventosRealizados(): EventoDisplay[] {
  return fallbackEventos.filter(e => e.status === 'realizado')
}

export async function getEventos(limit?: number): Promise<EventoDisplay[]> {
  // Return fallback data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    const futuros = getEventosFuturos()
    return limit ? futuros.slice(0, limit) : futuros
  }

  try {
    let query = supabase
      .from('eventos')
      .select('*')
      .gte('data', new Date().toISOString())
      .order('data')
    
    if (limit) query = query.limit(limit)
    
    const { data, error } = await query
    if (error) throw error
    return data as EventoDisplay[]
  } catch {
    // Silently return fallback data on error - eventos are supplementary data
    // This is intentional - we prioritize showing content over error logging
    const futuros = getEventosFuturos()
    return limit ? futuros.slice(0, limit) : futuros
  }
}
