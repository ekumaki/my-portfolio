
﻿"use client"

import useEmblaCarousel from "embla-carousel-react"
import Link from "next/link"
import Image from "next/image"
import React, { useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/data/projects"

type Props = {
  projects: Project[]
  includeDummy?: boolean
}

export function WorksCarousel({ projects, includeDummy = false }: Props) {
  const items: (Project & { __dummy__?: boolean })[] = React.useMemo(() => {
    if (!includeDummy) return projects
    const dummy: Project & { __dummy__?: boolean } = {
      __dummy__: true,
      slug: "__dummy__",
      title: "Dummy (Preview)",
      subtitle: "",
      summary: "Temporary card to stabilize the top carousel.",
      description: "",
      tags: [],
      tech: [],
      links: {},
      cover:
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
          "<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>" +
            "<rect width='100%' height='100%' fill='#f2f2f2'/>" +
            "<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='#999'>Dummy</text>" +
          "</svg>"
        ),
      featured: false,
    }
    return [...projects, dummy]
  }, [projects, includeDummy])

  const startIndex = items.length > 3 ? 1 : 0
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: items.length > 3,
    align: "center",
    slidesToScroll: 1,
        containScroll: "trimSnaps",
    startIndex,
  })

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const ensureCentered = () => {
      const snaps = emblaApi.scrollSnapList()
      if (snaps.length > 1 && emblaApi.selectedScrollSnap() === 0 && startIndex === 1) {
        emblaApi.scrollTo(1, true)
      }
    }
    emblaApi.on('init', ensureCentered)
    emblaApi.on('reInit', ensureCentered)
    ensureCentered()
    return () => {
      emblaApi.off('init', ensureCentered)
      emblaApi.off('reInit', ensureCentered)
    }
  }, [emblaApi, startIndex])

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((project) => (
            <div className="embla__slide" key={project.slug}>
              {project.__dummy__ ? (
                <div className="group block cursor-default">
                  <Card className="bg-white dark:bg-black">
                    <CardContent className="p-0">
                      <div className="relative aspect-[19/10] overflow-hidden rounded-t-lg bg-white dark:bg-black">
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          className="object-contain p-4 opacity-70"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="pl-8 pr-4 pt-2 pb-5">
                        <h3 className="text-left font-medium text-muted-foreground">
                          {project.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Link href={`/works/${project.slug}`} className="group block cursor-pointer">
                  <Card className="bg-white dark:bg-black">
                    <CardContent className="p-0">
                      <div className="relative aspect-[19/10] overflow-hidden rounded-t-lg bg-white dark:bg-black">
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="pl-8 pr-4 pt-2 pb-5">
                        <h3 className="text-left font-medium transition-colors group-hover:text-primary relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[0.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                          {project.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Click blockers over peek areas (prevent clicking hidden slides) */}
      <div aria-hidden className="pointer-events-auto absolute left-0 top-0 h-full embla__peek-block z-10" />
      <div aria-hidden className="pointer-events-auto absolute right-0 top-0 h-full embla__peek-block z-10" />

      {/* Arrows (hidden on mobile) */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="蜑阪∈"
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full border bg-background/80 shadow"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="谺｡縺ｸ"
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full border bg-background/80 shadow"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
