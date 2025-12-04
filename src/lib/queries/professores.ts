import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Professor } from '@/types/database'

// Extended professor type for frontend display with additional fields
export interface ProfessorDisplay {
  id: string
  slug: string
  nome: string
  titulacao: string
  areas: string[]
  email: string
  foto?: string
  foto_url?: string | null
  departamento: string
  biografia: string
  formacao: string[]
  disciplinas: string[]
  publicacoes: {
    titulo: string
    ano: number
    tipo: 'artigo' | 'livro' | 'capitulo'
    revista?: string
  }[]
  telefone?: string
  gabinete?: string
}

// Fallback data when Supabase is not configured
const fallbackProfessores: ProfessorDisplay[] = [
  {
    id: '1',
    slug: 'antonio-silva',
    nome: 'Prof. Dr. António Silva',
    titulacao: 'Doutor em Psicologia',
    areas: ['Psicologia Clínica', 'Psicoterapia', 'Avaliação Psicológica'],
    email: 'antonio.silva@FCH.edu',
    departamento: 'Psicologia Clínica',
    biografia: 'António Silva é Professor Catedrático de Psicologia na FCH, com mais de 20 anos de experiência em docência e investigação. Especialista em Psicologia Clínica, tem desenvolvido trabalho relevante na área da avaliação e intervenção psicológica.',
    formacao: [
      'Doutoramento em Psicologia - Universidade de Lisboa (2005)',
      'Mestrado em Psicologia Clínica - Universidade de Coimbra (2000)',
      'Licenciatura em Psicologia - Universidade do Porto (1997)'
    ],
    disciplinas: ['Introdução à Psicologia Clínica', 'Psicologia Clínica I', 'Avaliação Psicológica'],
    publicacoes: [
      { titulo: 'Intervenção Psicológica em Contexto Clínico', ano: 2022, tipo: 'livro' },
      { titulo: 'Avaliação Psicológica: Métodos e Instrumentos', ano: 2020, tipo: 'artigo', revista: 'Revista Portuguesa de Psicologia' }
    ],
    telefone: '+244 923 456 789',
    gabinete: 'Sala 201, Bloco A'
  },
  {
    id: '2',
    slug: 'teresa-oliveira',
    nome: 'Prof.ª Dr.ª Teresa Oliveira',
    titulacao: 'Doutora em Psicologia Clínica',
    areas: ['Neuropsicologia', 'Psicopatologia', 'Intervenção Clínica'],
    email: 'teresa.oliveira@FCH.edu',
    departamento: 'Psicologia Clínica',
    biografia: 'Teresa Oliveira é Professora Associada e Coordenadora do Mestrado em Psicologia Clínica. Especialista em neuropsicologia, desenvolve investigação sobre avaliação neuropsicológica e intervenção clínica.',
    formacao: [
      'Doutoramento em Psicologia Clínica - Universidade de Lisboa (2007)',
      'Mestrado em Neuropsicologia - Universidade de Coimbra (2002)',
      'Licenciatura em Psicologia - Universidade do Porto (1998)'
    ],
    disciplinas: ['Neuropsicologia', 'Psicopatologia', 'Intervenção Clínica'],
    publicacoes: [
      { titulo: 'Avaliação Neuropsicológica: Fundamentos e Aplicações', ano: 2021, tipo: 'livro' },
      { titulo: 'Psicopatologia do Desenvolvimento', ano: 2019, tipo: 'artigo', revista: 'Análise Psicológica' }
    ],
    telefone: '+244 923 456 793',
    gabinete: 'Sala 205, Bloco A'
  },
  {
    id: '3',
    slug: 'miguel-sousa',
    nome: 'Prof. Dr. Miguel Sousa',
    titulacao: 'Doutor em Psicologia',
    areas: ['Psicologia Organizacional', 'Recursos Humanos', 'Liderança'],
    email: 'miguel.sousa@FCH.edu',
    departamento: 'Psicologia do Trabalho e das Organizações',
    biografia: 'Miguel Sousa é Professor Catedrático de Psicologia, especializado em psicologia organizacional e gestão de recursos humanos. Coordenador do curso de Psicologia do Trabalho e das Organizações.',
    formacao: [
      'Doutoramento em Psicologia Organizacional - ISCTE (2015)',
      'Mestrado em Gestão de Recursos Humanos - Universidade do Minho (2010)',
      'Licenciatura em Psicologia - Universidade de Lisboa (2006)'
    ],
    disciplinas: ['Psicologia Organizacional', 'Gestão de Recursos Humanos', 'Liderança'],
    publicacoes: [
      { titulo: 'Psicologia Organizacional: Fundamentos e Aplicações', ano: 2023, tipo: 'livro' },
      { titulo: 'Liderança e Motivação nas Organizações', ano: 2021, tipo: 'artigo', revista: 'Psychologica' }
    ],
    telefone: '+244 923 456 799',
    gabinete: 'Sala 209, Bloco A'
  },
  {
    id: '4',
    slug: 'pedro-martins',
    nome: 'Prof. Dr. Pedro Martins',
    titulacao: 'Doutor em Psicologia Social',
    areas: ['Psicologia Social', 'Psicologia Comunitária', 'Dinâmicas de Grupo'],
    email: 'pedro.martins@FCH.edu',
    departamento: 'Psicologia do Trabalho e das Organizações',
    biografia: 'Pedro Martins é Professor Auxiliar de Psicologia, especializado em psicologia social e comunitária. Desenvolve projetos de intervenção comunitária e investigação sobre dinâmicas de grupo.',
    formacao: [
      'Doutoramento em Psicologia Social - Universidade de Lisboa (2012)',
      'Mestrado em Psicologia Comunitária - ISPA (2007)',
      'Licenciatura em Psicologia - Universidade do Porto (2003)'
    ],
    disciplinas: ['Psicologia Social', 'Psicologia Comunitária', 'Dinâmicas de Grupo'],
    publicacoes: [
      { titulo: 'Intervenção Comunitária: Fundamentos e Práticas', ano: 2021, tipo: 'livro' },
      { titulo: 'Dinâmicas de Grupo em Contextos Organizacionais', ano: 2019, tipo: 'artigo', revista: 'Psicologia: Teoria e Pesquisa' }
    ],
    telefone: '+244 923 456 795',
    gabinete: 'Sala 207, Bloco A'
  },
  {
    id: '5',
    slug: 'ana-rodrigues',
    nome: 'Prof.ª Dr.ª Ana Rodrigues',
    titulacao: 'Doutora em Linguística',
    areas: ['Linguística Aplicada', 'Tradução', 'Ensino de Línguas'],
    email: 'ana.rodrigues@FCH.edu',
    departamento: 'Línguas',
    biografia: 'Ana Rodrigues é Professora Associada e Coordenadora do curso de Línguas. Especialista em linguística aplicada e tradução, desenvolve investigação sobre ensino de línguas e comunicação intercultural.',
    formacao: [
      'Doutoramento em Linguística - Universidade do Minho (2010)',
      'Mestrado em Tradução - Universidade de Coimbra (2005)',
      'Licenciatura em Línguas e Literaturas Modernas - Universidade Nova de Lisboa (2001)'
    ],
    disciplinas: ['Teoria da Tradução', 'Linguística Aplicada', 'Português'],
    publicacoes: [
      { titulo: 'Tradução e Comunicação Intercultural', ano: 2022, tipo: 'livro' },
      { titulo: 'Ensino de Línguas no Contexto Africano', ano: 2020, tipo: 'artigo', revista: 'Linguística & Ensino' }
    ],
    telefone: '+244 923 456 792',
    gabinete: 'Sala 203, Bloco C'
  },
  {
    id: '6',
    slug: 'ricardo-almeida',
    nome: 'Prof. Dr. Ricardo Almeida',
    titulacao: 'Doutor em Estudos Literários',
    areas: ['Literatura Comparada', 'Literaturas Africanas', 'Língua Inglesa'],
    email: 'ricardo.almeida@FCH.edu',
    departamento: 'Línguas',
    biografia: 'Ricardo Almeida é Professor Auxiliar de Línguas, especializado em literatura comparada e literaturas africanas de expressão inglesa.',
    formacao: [
      'Doutoramento em Estudos Literários - Universidade Nova de Lisboa (2013)',
      'Mestrado em Literatura Comparada - ISCTE (2008)',
      'Licenciatura em Línguas e Literaturas - Universidade Lusófona (2004)'
    ],
    disciplinas: ['Literatura Inglesa', 'Língua Inglesa', 'Literatura Africana'],
    publicacoes: [
      { titulo: 'Literaturas Africanas de Expressão Inglesa', ano: 2023, tipo: 'livro' },
      { titulo: 'Identidade e Literatura no Contexto Pós-Colonial', ano: 2021, tipo: 'artigo', revista: 'Revista de Estudos Literários' }
    ],
    telefone: '+244 923 456 797',
    gabinete: 'Sala 205, Bloco C'
  },
  {
    id: '7',
    slug: 'carlos-ferreira',
    nome: 'Prof. Dr. Carlos Ferreira',
    titulacao: 'Doutor em Gestão',
    areas: ['Gestão Social', 'Políticas Públicas', 'Empreendedorismo'],
    email: 'carlos.ferreira@FCH.edu',
    departamento: 'Psicologia do Trabalho e das Organizações',
    biografia: 'Carlos Ferreira é Professor Associado e Coordenador do Mestrado em Gestão Social. Especializado em gestão de organizações do terceiro setor e empreendedorismo social.',
    formacao: [
      'Doutoramento em Gestão - ISCTE (2009)',
      'Mestrado em Administração Pública - Universidade do Minho (2004)',
      'Licenciatura em Gestão - Universidade Católica (2000)'
    ],
    disciplinas: ['Gestão de Organizações', 'Políticas Públicas', 'Empreendedorismo Social'],
    publicacoes: [
      { titulo: 'Gestão Social: Teoria e Prática', ano: 2022, tipo: 'livro' },
      { titulo: 'Empreendedorismo Social em África', ano: 2020, tipo: 'artigo', revista: 'Revista de Gestão Social' }
    ],
    telefone: '+244 923 456 794',
    gabinete: 'Sala 108, Bloco B'
  },
  {
    id: '8',
    slug: 'maria-fernandes',
    nome: 'Prof.ª Dr.ª Maria Fernandes',
    titulacao: 'Doutora em Psicologia',
    areas: ['Saúde Ocupacional', 'Stress e Burnout', 'Bem-estar no Trabalho'],
    email: 'maria.fernandes@FCH.edu',
    departamento: 'Psicologia do Trabalho e das Organizações',
    biografia: 'Maria Fernandes é Professora Auxiliar de Psicologia, com investigação nas áreas de saúde ocupacional, stress e bem-estar no trabalho.',
    formacao: [
      'Doutoramento em Psicologia - Universidade de Coimbra (2011)',
      'Mestrado em Psicologia da Saúde - Universidade do Porto (2006)',
      'Licenciatura em Psicologia - ISCTE (2002)'
    ],
    disciplinas: ['Saúde Ocupacional', 'Psicologia da Saúde no Trabalho', 'Bem-estar Organizacional'],
    publicacoes: [
      { titulo: 'Saúde Mental no Trabalho', ano: 2022, tipo: 'livro' },
      { titulo: 'Stress e Burnout em Organizações Africanas', ano: 2020, tipo: 'artigo', revista: 'Psicologia: Saúde & Doenças' }
    ],
    telefone: '+244 923 456 796',
    gabinete: 'Sala 304, Bloco A'
  },
  {
    id: '9',
    slug: 'joao-santos',
    nome: 'Prof. Dr. João Santos',
    titulacao: 'Doutor em Línguas e Literaturas',
    areas: ['Língua Francesa', 'Tradução Literária', 'Francofonia'],
    email: 'joao.santos@FCH.edu',
    departamento: 'Línguas',
    biografia: 'João Santos é Professor Auxiliar de Línguas, especializado em língua e literatura francesa, com foco na tradução literária e estudos francófonos.',
    formacao: [
      'Doutoramento em Línguas e Literaturas - Universidade de Lisboa (2014)',
      'Mestrado em Tradução Literária - Universidade de Coimbra (2009)',
      'Licenciatura em Línguas e Literaturas - Universidade Nova de Lisboa (2005)'
    ],
    disciplinas: ['Língua Francesa', 'Literatura Francesa', 'Tradução Literária'],
    publicacoes: [
      { titulo: 'Tradução Literária: Teoria e Prática', ano: 2023, tipo: 'livro' },
      { titulo: 'A Francofonia Africana na Literatura', ano: 2021, tipo: 'artigo', revista: 'Estudos Francófonos' }
    ],
    telefone: '+244 923 456 800',
    gabinete: 'Sala 207, Bloco C'
  }
]

function getFallbackProfessorBySlug(slug: string): ProfessorDisplay | undefined {
  return fallbackProfessores.find(p => p.slug === slug)
}

export async function getProfessores(): Promise<ProfessorDisplay[]> {
  // Use fallback data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return fallbackProfessores
  }

  try {
    const { data, error } = await supabase
      .from('professores')
      .select('*')
      .order('nome')
    
    if (error) throw error
    // Transform database result to display format
    return (data as Professor[]).map(p => {
      // Try to find fallback data for additional fields not in the database
      const fallback = fallbackProfessores.find(f => f.slug === p.slug)
      return {
        id: p.id,
        slug: p.slug,
        nome: p.nome,
        titulacao: p.titulo || fallback?.titulacao || '',
        areas: p.areas_investigacao || fallback?.areas || [],
        email: p.email || fallback?.email || '',
        foto_url: p.foto_url || fallback?.foto_url,
        departamento: p.departamento || fallback?.departamento || '',
        biografia: p.biografia || fallback?.biografia || '',
        formacao: fallback?.formacao || [],
        disciplinas: fallback?.disciplinas || [],
        publicacoes: fallback?.publicacoes || [],
        telefone: p.telefone || fallback?.telefone,
        gabinete: p.gabinete || fallback?.gabinete
      }
    })
  } catch {
    return fallbackProfessores
  }
}

export async function getProfessorBySlug(slug: string): Promise<ProfessorDisplay | null> {
  // Use fallback data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return getFallbackProfessorBySlug(slug) || null
  }

  try {
    const { data, error } = await supabase
      .from('professores')
      .select(`
        *,
        formacoes:formacao(*),
        publicacoes:publicacao(*)
      `)
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    
    // Transform to display format
    // Get fallback data for fields that may not be in the database
    const fallback = getFallbackProfessorBySlug(slug)
    const professor = data as Professor & { formacoes?: Array<{ grau: string; instituicao: string; ano?: string }>; publicacoes?: Array<{ titulo: string; ano?: string; revista?: string }> }
    
    // Parse formacao from database or use fallback
    const formacao = professor.formacoes && professor.formacoes.length > 0
      ? professor.formacoes.map(f => `${f.grau} - ${f.instituicao}${f.ano ? ` (${f.ano})` : ''}`)
      : (fallback?.formacao || [])
    
    // Parse publicacoes from database or use fallback
    const publicacoes = professor.publicacoes && professor.publicacoes.length > 0
      ? professor.publicacoes.map(p => ({
          titulo: p.titulo,
          ano: p.ano ? parseInt(p.ano, 10) || new Date().getFullYear() : new Date().getFullYear(),
          tipo: 'artigo' as const,
          revista: p.revista
        }))
      : (fallback?.publicacoes || [])
    
    return {
      id: professor.id,
      slug: professor.slug,
      nome: professor.nome,
      titulacao: professor.titulo || fallback?.titulacao || '',
      areas: professor.areas_investigacao || fallback?.areas || [],
      email: professor.email || fallback?.email || '',
      foto_url: professor.foto_url || fallback?.foto_url,
      departamento: professor.departamento || fallback?.departamento || '',
      biografia: professor.biografia || fallback?.biografia || '',
      formacao,
      disciplinas: fallback?.disciplinas || [],
      publicacoes,
      telefone: professor.telefone || fallback?.telefone,
      gabinete: professor.gabinete || fallback?.gabinete
    }
  } catch {
    return getFallbackProfessorBySlug(slug) || null
  }
}

export async function getProfessorDisciplinas(professorId: string) {
  // Return empty array if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        curso:cursos(nome, slug)
      `)
      .eq('professor_id', professorId)
    
    if (error) throw error
    return data
  } catch {
    // Silently return empty array on error - disciplinas are supplementary data
    // This is intentional - we prioritize showing content over error logging
    return []
  }
}

// Export fallback data for generateStaticParams
export function getAllProfessorSlugs(): string[] {
  return fallbackProfessores.map(p => p.slug)
}
