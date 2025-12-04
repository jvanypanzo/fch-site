import { supabase } from '@/lib/supabase'

export async function getEventos(limit?: number) {
  let query = supabase
    .from('eventos')
    .select('*')
    .gte('data', new Date().toISOString())
    .order('data')
  
  if (limit) query = query.limit(limit)
  
  const { data, error } = await query
  if (error) throw error
  return data
}
