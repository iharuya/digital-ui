import { Italic } from "lucide-react"

import { Toggle } from "@/registry/digital/ui/toggle"

export function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}
