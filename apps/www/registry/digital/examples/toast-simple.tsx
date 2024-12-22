"use client"

import { useToast } from "@/registry/digital/hooks/use-toast"
import { Button } from "@/registry/digital/ui/button"

export default function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
