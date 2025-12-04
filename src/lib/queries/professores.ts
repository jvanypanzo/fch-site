import { supabase } from '@/lib/supabase'
import type { Professor, Formacao, Publicacao } from '@/types/database'

export async function getProfessores() {
  const { data, error } = await supabase
    .from('professores')
    .select('*')
    .order('nome')
  
  if (error) throw error
  return data as Professor[]
}

export async function getProfessorBySlug(slug: string) {
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
  return data
}

export async function getProfessorDisciplinas(professorId: string) {
  const { data, error } = await supabase
    .from('disciplinas')
    .select(`
      *,
      curso:cursos(nome, slug)
    `)
    .eq('professor_id', professorId)
  
  if (error) throw error
  return data
}
