import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { professores as staticProfessores, getProfessorBySlug as staticGetProfessorBySlug } from '@/data/professores'
import type { Professor } from '@/types/database'

export async function getProfessores() {
  // Use static data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return staticProfessores
  }

  try {
    const { data, error } = await supabase
      .from('professores')
      .select('*')
      .order('nome')
    
    if (error) throw error
    return data as Professor[]
  } catch {
    // Fallback to static data on error
    return staticProfessores
  }
}

export async function getProfessorBySlug(slug: string) {
  // Use static data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return staticGetProfessorBySlug(slug)
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
    return data
  } catch {
    // Fallback to static data on error
    return staticGetProfessorBySlug(slug)
  }
}

export async function getProfessorDisciplinas(professorId: string) {
  // Use static data if Supabase is not configured
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
    return []
  }
}
