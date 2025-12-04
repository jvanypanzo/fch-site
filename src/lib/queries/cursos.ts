import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { cursos as staticCursos } from '@/data/cursos'
import { getEstruturaByCursoSlug as staticGetEstruturaByCursoSlug } from '@/data/estrutura-curricular'

export async function getCursos() {
  // Use static data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return staticCursos
  }

  try {
    const { data, error } = await supabase
      .from('cursos')
      .select('*')
      .order('nome')
    
    if (error) throw error
    return data
  } catch {
    // Fallback to static data on error
    return staticCursos
  }
}

export async function getCursoBySlug(slug: string) {
  // Use static data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return staticCursos.find(c => c.slug === slug)
  }

  try {
    const { data, error } = await supabase
      .from('cursos')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    return data
  } catch {
    // Fallback to static data on error
    return staticCursos.find(c => c.slug === slug)
  }
}

export async function getEstruturaCurricular(cursoId: string) {
  // Use static data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    // For static data, cursoId would be the slug
    return staticGetEstruturaByCursoSlug(cursoId)
  }

  try {
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        professor:professores(nome, slug)
      `)
      .eq('curso_id', cursoId)
      .order('ano')
      .order('semestre')
    
    if (error) throw error
    return data
  } catch {
    // Fallback to static data on error
    return staticGetEstruturaByCursoSlug(cursoId)
  }
}
