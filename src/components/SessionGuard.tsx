'use client'

import { useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

// sessionStorage se borra en hard refresh y al cerrar la pestaña.
// Si no hay flag, borramos la sesión de Supabase para mantener consistencia.
export default function SessionGuard({ children }: { children: React.ReactNode }) {
  const supabase = createClient()

  useEffect(() => {
    const hasFlag = sessionStorage.getItem('ng_session')
    if (!hasFlag) {
      supabase.auth.signOut()
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        sessionStorage.setItem('ng_session', '1')
      } else {
        sessionStorage.removeItem('ng_session')
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return <>{children}</>
}
