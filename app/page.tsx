"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sidebar, Layout, Layers, LinkIcon, Link2OffIcon, LucideLink, ArrowUpRightIcon } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Next.js Sidebar Navigation Demo</h1>
          <p className="text-lg text-muted-foreground">
            Explore different implementations of responsive sidebar navigation patterns
            built with Next.js, Tailwind CSS, and shadcn/ui components.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/example">
            <Button variant="outline" className="w-full h-24 text-lg flex items-center justify-center">
              <span className="underline flex items-center">
                <LucideLink className="w-6 h-6 mr-2" />
                Multiple Sidebar
              </span>
              <ArrowUpRightIcon className="w-6 h-6 ml-2" />
            </Button>
          </Link>

          <Link href="/demo">
            <Button variant="outline" className="w-full h-24 text-lg flex items-center justify-center">
              <span className="underline flex items-center">
                <LinkIcon className="w-6 h-6 mr-2" />
                Single demo v2
              </span>
              <ArrowUpRightIcon className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            A nice right side dashboard which is going to serve as a extra toggleable sidebar for example vesrioning history metadata, you name it. By <Link href='https://github.com/remcostoeten' className="underline hover:text-primary">Remco Stoeten</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
