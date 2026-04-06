import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

type FieldProps = React.ComponentProps<"div"> & {
  label?: string
  htmlFor?: string
  error?: string
  description?: string
}

function Field({
  className,
  label,
  htmlFor,
  error,
  description,
  children,
  ...props
}: FieldProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      {children}
      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && (
        <p className="text-sm font-medium text-destructive">{error}</p>
      )}
    </div>
  )
}

export { Field }
export type { FieldProps }
