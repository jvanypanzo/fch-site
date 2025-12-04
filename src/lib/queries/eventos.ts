import { supabase, isSupabaseConfigured } from '@/lib/supabase'

export async function getEventos(limit?: number) {
  // Return empty array if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return []
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
    return data
  } catch {
    return []
  }
}
