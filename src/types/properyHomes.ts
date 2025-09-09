import { ReactNode } from "react"

export type PropertyHomes = {
  name: string
  slug: string
  location: string
  rate: string
  beds: ReactNode
  baths: number
  area: number
  images: PropertyImage[]
}

interface PropertyImage {
  src: string;
}
