'use client'

import { Info, Calendar, Tag, User } from 'lucide-react'

interface MetadataViewProps {
  data: {
    created: string
    updated: string
    status: string
    owner: string
    tags: string[]
  }
}

export function MetadataView({ data }: MetadataViewProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Info className="w-4 h-4 text-[#3ECF8E]" />
        <h3 className="text-sm font-medium text-white">Metadata</h3>
      </div>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Calendar className="w-4 h-4 text-[#4E4E4E] mt-0.5" />
          <div className="space-y-1">
            <p className="text-xs text-[#4E4E4E]">Created</p>
            <p className="text-sm text-white">{data.created}</p>
            <p className="text-xs text-[#4E4E4E] mt-2">Updated</p>
            <p className="text-sm text-white">{data.updated}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <User className="w-4 h-4 text-[#4E4E4E] mt-0.5" />
          <div>
            <p className="text-xs text-[#4E4E4E]">Owner</p>
            <p className="text-sm text-white">{data.owner}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Tag className="w-4 h-4 text-[#4E4E4E] mt-0.5" />
          <div>
            <p className="text-xs text-[#4E4E4E]">Tags</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-[#2E2E2E] text-[#3ECF8E]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}