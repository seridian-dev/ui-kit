import { describe, expect, test } from "bun:test"
import React from "react"
import { renderToString } from "react-dom/server"

import { Combobox, ComboboxTrigger } from "../src/components/ui/combobox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "../src/components/ui/dropdown-menu"
import { Input } from "../src/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../src/components/ui/select"

describe("Form control SSR contracts", () => {
  test("Input exposes its slot and preserves explicit input types", () => {
    const html = renderToString(
      <Input
        aria-label="Email address"
        autoComplete="email"
        type="email"
      />
    )

    expect(html).toContain('data-slot="input"')
    expect(html).toContain('type="email"')
    expect(html).toContain('aria-label="Email address"')
    expect(html).toContain('autoComplete="email"')
    expect(html).toContain("h-11")
  })

  test("Input leaves the browser default type untouched when omitted", () => {
    const html = renderToString(<Input aria-label="Search" />)

    expect(html).toContain('data-slot="input"')
    expect(html).not.toContain("type=")
  })

  test("SelectTrigger exposes an accessible closed combobox in both sizes", () => {
    const defaultSizeHtml = renderToString(
      <Select defaultValue="home">
        <SelectTrigger aria-label="Where would you like to live?" size="default">
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
      </Select>
    )
    const smallSizeHtml = renderToString(
      <Select>
        <SelectTrigger aria-label="Timing" size="sm">
          <SelectValue placeholder="Choose timing" />
        </SelectTrigger>
      </Select>
    )

    expect(defaultSizeHtml).toContain('data-slot="select-trigger"')
    expect(defaultSizeHtml).toContain('data-size="default"')
    expect(defaultSizeHtml).toContain('role="combobox"')
    expect(defaultSizeHtml).toContain('aria-expanded="false"')
    expect(defaultSizeHtml).toContain('aria-autocomplete="none"')
    expect(defaultSizeHtml).toContain('data-state="closed"')
    expect(defaultSizeHtml).toContain("data-[size=default]:h-11")
    expect(smallSizeHtml).toContain('data-size="sm"')
    expect(smallSizeHtml).toContain('aria-expanded="false"')
  })

  test("SelectTrigger reflects an explicitly open state for assistive technology", () => {
    const html = renderToString(
      <Select open>
        <SelectTrigger aria-label="Next step" size="default">
          <SelectValue placeholder="Choose a next step" />
        </SelectTrigger>
      </Select>
    )

    expect(html).toContain('data-slot="select-trigger"')
    expect(html).toContain('role="combobox"')
    expect(html).toContain('aria-expanded="true"')
    expect(html).toContain('data-state="open"')
  })

  test("DropdownMenuTrigger exposes menu state and preserves touch-target markers", () => {
    const closedHtml = renderToString(
      <DropdownMenu>
        <DropdownMenuTrigger aria-label="Open actions">
          Actions
        </DropdownMenuTrigger>
      </DropdownMenu>
    )
    const openHtml = renderToString(
      <DropdownMenu open>
        <DropdownMenuTrigger aria-label="Close actions">
          Actions
        </DropdownMenuTrigger>
      </DropdownMenu>
    )

    expect(closedHtml).toContain('data-slot="dropdown-menu-trigger"')
    expect(closedHtml).toContain('aria-haspopup="menu"')
    expect(closedHtml).toContain('aria-expanded="false"')
    expect(closedHtml).toContain('data-state="closed"')
    expect(closedHtml).toContain("min-h-11")
    expect(openHtml).toContain('aria-haspopup="menu"')
    expect(openHtml).toContain('aria-expanded="true"')
    expect(openHtml).toContain('data-state="open"')
  })

  test("ComboboxTrigger exposes a labeled dialog trigger and placeholder state", () => {
    const html = renderToString(
      <Combobox
        options={[{ value: "home", label: "Stay in my home" }]}
        placeholder="Choose a path"
      >
        <ComboboxTrigger aria-label="What would you like help with?" />
      </Combobox>
    )

    expect(html).toContain('data-slot="combobox-trigger"')
    expect(html).toContain('type="button"')
    expect(html).toContain('aria-haspopup="dialog"')
    expect(html).toContain('aria-expanded="false"')
    expect(html).toContain('data-placeholder="true"')
    expect(html).toContain('aria-label="What would you like help with?"')
    expect(html).toContain("min-h-11")
    expect(html).toContain("Choose a path")
  })
})
