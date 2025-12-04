import { supabase } from '@/lib/supabase'

export async function getNoticias(limit?: number) {
  let query = supabase
    .from('noticias')
    .select('*')
    .order('data_publicacao', { ascending: false })
  
  if (limit) query = query.limit(limit)
  
  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getNoticiaBySlug(slug: string) {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) throw error
  return data
}
