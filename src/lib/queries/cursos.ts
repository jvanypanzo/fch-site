import { supabase } from '@/lib/supabase'

export async function getCursos() {
  const { data, error } = await supabase
    .from('cursos')
    .select('*')
    .order('nome')
  
  if (error) throw error
  return data
}

export async function getCursoBySlug(slug: string) {
  const { data, error } = await supabase
    .from('cursos')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) throw error
  return data
}

export async function getEstruturaCurricular(cursoId: string) {
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
}
