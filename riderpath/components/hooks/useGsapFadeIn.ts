'use client'

import { useEffect, RefObject } from 'react'
import gsap from 'gsap'

interface FadeInConfig {
  delay?:    number
  y?:        number
  duration?: number
}

export function useGsapFadeIn<T extends Element>(
  ref: RefObject<T | null>,
  { delay = 0, y = 24, duration = 0.8 }: FadeInConfig = {},
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y },
      { opacity: 1, y: 0, duration, delay, ease: 'power3.out' },
    )

    return () => { tween.kill() }
  }, [ref, delay, y, duration])
}
