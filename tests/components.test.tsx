import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { Button } from "../src/components/ui/button";
import { Badge } from "../src/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { Flag } from "../src/components/ui/flag";
import { Input } from "../src/components/ui/input";

describe("Component Quality & SSR Rendering Tests", () => {
  test("Button renders with default and custom variants", () => {
    const html = renderToString(<Button variant="destructive">Delete Account</Button>);
    expect(html).toContain("Delete Account");
    expect(html).toContain("data-variant=\"destructive\"");
  });

  test("Badge renders with text", () => {
    const html = renderToString(<Badge variant="secondary">Verified</Badge>);
    expect(html).toContain("Verified");
    expect(html).toContain("data-variant=\"secondary\"");
  });

  test("Card renders nested header and content", () => {
    const html = renderToString(
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>Seridian UI</CardContent>
      </Card>
    );
    expect(html).toContain("Welcome");
    expect(html).toContain("Seridian UI");
  });

  test("Flag renders 4x3 ratio with accessible label override", () => {
    const html = renderToString(<Flag country="us" alt="United States" />);
    expect(html).toContain("role=\"img\"");
    expect(html).toContain("aria-label=\"United States\"");
    expect(html).toContain("aspect-[4/3]");
    expect(html).toContain("https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg");
  });

  test("Flag renders 1x1 ratio and rounded corners", () => {
    const html = renderToString(<Flag country="ca" ratio="1x1" rounded />);
    expect(html).toContain("aspect-square");
    expect(html).toContain("rounded-sm");
    expect(html).toContain("flags/1x1/ca.svg");
  });

  test("Flag handles invalid country code without throwing exception", () => {
    expect(() => {
      renderToString(<Flag country="invalid-code" />);
    }).not.toThrow();
  });

  test("Input renders correctly with placeholder", () => {
    const html = renderToString(<Input placeholder="Search..." />);
    expect(html).toContain("placeholder=\"Search...\"");
  });
});
