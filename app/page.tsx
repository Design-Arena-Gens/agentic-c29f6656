import Image from "next/image"

import { Card } from "@/components/ui/card"
import { SplineSceneBasic } from "@/components/ui/demo"
import { Spotlight as HoverSpotlight } from "@/components/ui/ibelick/spotlight"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-6 py-16 space-y-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 text-sm text-muted-foreground">
            <HoverSpotlight size={240} className="hidden md:block" />
            Powered by Spline
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Craft Immersive 3D Interfaces
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Drop a fully interactive 3D canvas into your shadcn/ui project. This
            hero layout demonstrates how Spline integrates seamlessly with
            Tailwind CSS and modern React patterns.
          </p>
        </div>

        <SplineSceneBasic />

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="flex flex-col items-start gap-4 bg-card/60 p-6 backdrop-blur">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
              alt="Design sketching"
              width={160}
              height={160}
              className="h-24 w-24 rounded-full object-cover"
              priority
            />
            <h2 className="text-xl font-semibold">Design First</h2>
            <p className="text-sm text-muted-foreground">
              Iterate in Spline, then hand off responsive components that feel
              custom-built.
            </p>
          </Card>
          <Card className="flex flex-col items-start gap-4 bg-card/60 p-6 backdrop-blur">
            <Image
              src="https://images.unsplash.com/photo-1557754897-ca12c5049c88?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              width={160}
              height={160}
              className="h-24 w-24 rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold">Team Friendly</h2>
            <p className="text-sm text-muted-foreground">
              Share scenes, collaborate live, and keep motion design in sync
              with your product team.
            </p>
          </Card>
          <Card className="flex flex-col items-start gap-4 bg-card/60 p-6 backdrop-blur">
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80"
              alt="Abstract 3D art"
              width={160}
              height={160}
              className="h-24 w-24 rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold">Lightning Fast</h2>
            <p className="text-sm text-muted-foreground">
              Lazy loading keeps initial payloads lean while delivering stunning
              visuals.
            </p>
          </Card>
        </div>
      </section>
    </main>
  )
}
