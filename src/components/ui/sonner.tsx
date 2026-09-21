"use client"

import { Toaster } from "sonner"
import { type ToasterProps } from "sonner"

const CustomToaster = (props: ToasterProps) => {
  return (
    <Toaster
      {...props}
      richColors
      position="top-right"
    />
  )
}

export { CustomToaster as Toaster }
