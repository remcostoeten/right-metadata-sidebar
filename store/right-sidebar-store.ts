import { create } from 'zustand'

type RightSidebarMode = 'drawer' | 'layout'

type RightSidebarContent = {
  title?: string
  content: React.ReactNode
}

interface RightSidebarStore {
  isOpen: boolean
  mode: RightSidebarMode
  width: number
  content: RightSidebarContent | null
  setContent: (content: RightSidebarContent | null) => void
  setWidth: (width: number) => void
  setMode: (mode: RightSidebarMode) => void
  toggle: () => void
}

export const useRightSidebarStore = create<RightSidebarStore>((set) => ({
  isOpen: false,
  mode: 'drawer',
  width: 320,
  content: null,
  setContent: (content) => set({ content, isOpen: !!content }),
  setWidth: (width) => set({ width }),
  setMode: (mode) => set({ mode }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))