'use client'

import { useEffect } from 'react'
import { useRightSidebarStore } from '@/store/right-sidebar-store'

interface RightSidebarContentProps {
  title?: string
  children: React.ReactNode
  show?: boolean
  mode?: 'drawer' | 'layout'
}

export function RightSidebarContent({ 
  title,
  children,
  show = true,
  mode = 'drawer'
}: RightSidebarContentProps) {
  const { setContent, setMode } = useRightSidebarStore()

  useEffect(() => {
    setMode(mode)
    
    if (show) {
      setContent({ title, content: children })
    } else {
      setContent(null)
    }
    
    return () => setContent(null)
  }, [title, children, show, mode, setContent, setMode])

  return null
}