'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GripVertical, X } from 'lucide-react'
import { useRightSidebarStore } from '@/store/right-sidebar-store'
import { cn } from '@/lib/utils'

export function RightSidebar() {
  const { isOpen, mode, width, content, setWidth, toggle } = useRightSidebarStore()
  const [isResizing, setIsResizing] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return
      const newWidth = window.innerWidth - e.clientX
      setWidth(Math.max(280, Math.min(newWidth, 480)))
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing, setWidth])

  if (!content) return null

  const isDrawer = mode === 'drawer'

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop for mobile and drawer mode */}
          {isDrawer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggle}
            />
          )}

          {/* Sidebar */}
          <motion.aside
            initial={isDrawer ? { x: '100%' } : { width: 0 }}
            animate={isDrawer ? { x: 0 } : { width }}
            exit={isDrawer ? { x: '100%' } : { width: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
            style={isDrawer ? { width: `${width}px` } : undefined}
            className={cn(
              'h-screen bg-[#181818] border-l border-[#2E2E2E]',
              'flex flex-col overflow-hidden transition-all duration-300 ease-in-out',
              'dark:bg-[#181818] dark:border-[#2E2E2E]',
              isDrawer ? 'fixed top-0 right-0 z-50' : 'relative'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#2E2E2E]">
              <h2 className="text-sm font-medium text-white">
                {content.title || 'Details'}
              </h2>
              <button
                onClick={toggle}
                className="p-2 rounded-md text-[#4E4E4E] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-4">
              {content.content}
            </div>

            {/* Resize Handle */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize group"
              onMouseDown={() => setIsResizing(true)}
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 -ml-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical className="w-4 h-4 text-[#4E4E4E]" />
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}