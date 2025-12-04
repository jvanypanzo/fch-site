import { supabase } from '@/lib/supabase'

export async function getDecana() {
  const { data, error } = await supabase
    .from('decana')
    .select('*')
    .single()
  
  if (error) throw error
  return data
}
