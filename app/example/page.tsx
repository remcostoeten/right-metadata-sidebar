'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RightSidebarContent } from '@/components/layout/right-sidebar-content'

export default function ExamplePage() {
  const [showDetails, setShowDetails] = useState(false)
  
  return (
    <div className="p-8">
      <Button 
        variant="outline"
        onClick={() => setShowDetails(!showDetails)}
      >
        Toggle Details
      </Button>

      <RightSidebarContent
        title="Item Details"
        show={showDetails}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white">Metadata</h3>
            <div className="text-sm text-[#4E4E4E]">
              <p>Created: 2024-03-20</p>
              <p>Modified: 2024-03-21</p>
              <p>Status: Active</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white">Description</h3>
            <p className="text-sm text-[#4E4E4E]">
              This is an example of dynamic content that can be shown in the right sidebar.
              You can customize this content per page while maintaining consistent styling.
            </p>
          </div>
        </div>
      </RightSidebarContent>
    </div>
  )
}