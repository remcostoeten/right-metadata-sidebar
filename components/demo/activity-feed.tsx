'use client'

import { Activity, MessageSquare, GitCommit, Package } from 'lucide-react'
import { cn } from '@/lib/utils'

const activities = [
  {
    id: 1,
    type: 'comment',
    user: 'Sarah Chen',
    action: 'commented on',
    target: 'Design System Updates',
    time: '2 hours ago',
    icon: MessageSquare,
  },
  {
    id: 2,
    type: 'commit',
    user: 'Alex Kim',
    action: 'pushed',
    target: '3 commits to main',
    time: '4 hours ago',
    icon: GitCommit,
  },
  {
    id: 3,
    type: 'deployment',
    user: 'CI/CD Bot',
    action: 'deployed',
    target: 'v2.1.0 to production',
    time: '6 hours ago',
    icon: Package,
  },
]

export function ActivityFeed() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Activity className="w-4 h-4 text-[#3ECF8E]" />
        <h3 className="text-sm font-medium text-white">Recent Activity</h3>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2E2E2E] flex items-center justify-center">
              <activity.icon className="w-4 h-4 text-[#3ECF8E]" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm">
                <span className="font-medium text-white">{activity.user}</span>{' '}
                <span className="text-[#4E4E4E]">{activity.action}</span>{' '}
                <span className="text-white">{activity.target}</span>
              </p>
              <p className="text-xs text-[#4E4E4E]">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}