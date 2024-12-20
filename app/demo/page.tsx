'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RightSidebarContent } from '@/components/layout/right-sidebar-content'
import { ActivityFeed } from '@/components/demo/activity-feed'
import { MetadataView } from '@/components/demo/metadata-view'
import {cn} from '@/lib/utils';
const metadata = {
  created: 'March 20, 2024',
  updated: 'March 21, 2024',
  status: 'Active',
  owner: 'John Doe',
  tags: ['Documentation', 'Design System', 'UI'],
}

export default function DemoPage() {
  const [activeView, setActiveView] = useState<'metadata' | 'activity'>('metadata')
  const [isOpen, setIsOpen] = useState(false)
  const [sidebarMode, setSidebarMode] = useState<'drawer' | 'layout'>('drawer')
  
  const toggleView = (view: 'metadata' | 'activity') => {
    if (activeView === view && isOpen) {
      setIsOpen(false)
    } else {
      setActiveView(view)
      setIsOpen(true)
    }
  }
  
  return (
    <div className="min-h-screen bg-[#000000] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">Right Sidebar Demo</h1>
          <p className="text-[#4E4E4E] mb-4">
            This demo showcases different use cases for the right sidebar component.
            Click the buttons below to toggle different views.
          </p>
          
          <div className="flex gap-4 mb-6">
            <Button
              variant="outline"
              onClick={() => setSidebarMode('drawer')}
              className={cn(
                "bg-[#2E2E2E] text-white hover:bg-[#3ECF8E] hover:text-black",
                sidebarMode === 'drawer' && "bg-[#3ECF8E] text-black"
              )}
            >
              Drawer Mode
            </Button>
            <Button
              variant="outline"
              onClick={() => setSidebarMode('layout')}
              className={cn(
                "bg-[#2E2E2E] text-white hover:bg-[#3ECF8E] hover:text-black",
                sidebarMode === 'layout' && "bg-[#3ECF8E] text-black"
              )}
            >
              Layout Mode
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <Button
              variant={activeView === 'metadata' && isOpen ? 'default' : 'outline'}
              onClick={() => toggleView('metadata')}
              className="bg-[#2E2E2E] text-white hover:bg-[#3ECF8E] hover:text-black"
            >
              Toggle Metadata
            </Button>
            <Button
              variant={activeView === 'activity' && isOpen ? 'default' : 'outline'}
              onClick={() => toggleView('activity')}
              className="bg-[#2E2E2E] text-white hover:bg-[#3ECF8E] hover:text-black"
            >
              Toggle Activity
            </Button>
          </div>

          <div className="p-8 border border-[#2E2E2E] rounded-lg bg-[#181818]">
            <h2 className="text-xl font-semibold text-white mb-4">Main Content Area</h2>
            <p className="text-[#4E4E4E]">
              This is the main content area of your application. The right sidebar
              will {sidebarMode === 'drawer' ? 'slide in from the right' : 'push the content'} when toggled.
            </p>
          </div>
        </div>
      </div>

      <RightSidebarContent
        title={activeView === 'metadata' ? 'Item Details' : 'Recent Activity'}
        show={isOpen}
        mode={sidebarMode}
      >
        <Tabs value={activeView} className="w-full">
          <TabsList className="w-full bg-[#2E2E2E]">
            <TabsTrigger
              value="metadata"
              onClick={() => setActiveView('metadata')}
              className="flex-1 data-[state=active]:bg-[#3ECF8E] data-[state=active]:text-black"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              onClick={() => setActiveView('activity')}
              className="flex-1 data-[state=active]:bg-[#3ECF8E] data-[state=active]:text-black"
            >
              Activity
            </TabsTrigger>
          </TabsList>
          <div className="mt-4">
            <TabsContent value="metadata">
              <MetadataView data={metadata} />
            </TabsContent>
            <TabsContent value="activity">
              <ActivityFeed />
            </TabsContent>
          </div>
        </Tabs>
      </RightSidebarContent>
    </div>
  )
}