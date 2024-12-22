export const styles = [
  {
    name: "new-york",
    label: "New York",
  },
  {
    name: "default",
    label: "Default",
  },
  {
    name: "digital",
    label: "デジタル庁",
  },
] as const

export type Style = (typeof styles)[number]
