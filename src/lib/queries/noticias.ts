import { supabase, isSupabaseConfigured } from '@/lib/supabase'

export async function getNoticias(limit?: number) {
  // Return empty array if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    let query = supabase
      .from('noticias')
      .select('*')
      .order('data_publicacao', { ascending: false })
    
    if (limit) query = query.limit(limit)
    
    const { data, error } = await query
    if (error) throw error
    return data
  } catch {
    return []
  }
}

export async function getNoticiaBySlug(slug: string) {
  // Return null if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return null
  }

  try {
    const { data, error } = await supabase
      .from('noticias')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    return data
  } catch {
    return null
  }
}
