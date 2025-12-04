import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { decana as staticDecana } from '@/data/decana'

export async function getDecana() {
  // Use static data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return staticDecana
  }

  try {
    const { data, error } = await supabase
      .from('decana')
      .select('*')
      .single()
    
    if (error) throw error
    return data
  } catch {
    // Fallback to static data on error
    return staticDecana
  }
}
