import { describe, expect, test } from "bun:test"
import React from "react"
import { renderToString } from "react-dom/server"

import { RatingInput } from "../src/components/ui/rating-input"
import { Slider } from "../src/components/ui/slider"

const thumbs = (html: string) => html.match(/<span[^>]*role="slider"[^>]*>/g) ?? []

describe("component accessibility contracts", () => {
  test("Slider forwards aria-label to its thumb (the role=slider element)", () => {
    const html = renderToString(<Slider aria-label="Volume" defaultValue={[40]} />)
    const [thumb, ...rest] = thumbs(html)
    expect(rest).toHaveLength(0)
    expect(thumb).toContain('aria-label="Volume"')
  })

  test("Slider names each thumb of a range", () => {
    const html = renderToString(<Slider aria-label="Price" defaultValue={[10, 90]} />)
    const [min, max] = thumbs(html)
    expect(min).toContain('aria-label="Price, minimum"')
    expect(max).toContain('aria-label="Price, maximum"')
  })

  test("Slider getAriaLabel / getAriaValueText / aria-labelledby reach the thumbs", () => {
    const html = renderToString(
      <Slider
        aria-labelledby="budget-label"
        getAriaLabel={(i) => (i === 0 ? "From" : "To")}
        getAriaValueText={(v) => `$${v}`}
        defaultValue={[20, 80]}
      />
    )
    const [from, to] = thumbs(html)
    expect(from).toContain('aria-label="From"')
    expect(from).toContain('aria-valuetext="$20"')
    expect(from).toContain('aria-labelledby="budget-label"')
    expect(to).toContain('aria-label="To"')
    expect(to).toContain('aria-valuetext="$80"')
  })

  test("RatingInput radios are named by their label, emoji hidden", () => {
    const html = renderToString(<RatingInput />)
    expect(html).toContain('aria-label="Angry"')
    expect(html).toContain('aria-label="Laughing"')
    expect(html).toContain('<span aria-hidden="true">😠</span>')
  })
})
