import * as React from "react"
import { cn } from "@/lib/utils"

type InputGroupProps = React.ComponentProps<"div"> & {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

function InputGroup({
  className,
  prefix,
  suffix,
  children,
  ...props
}: InputGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center rounded-md border border-border bg-background text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className,
      )}
      {...props}
    >
      {prefix && (
        <span className="flex items-center border-r border-border bg-muted px-3 py-2 text-muted-foreground rounded-l-md">
          {prefix}
        </span>
      )}
      <div className="flex-1 [&>input]:border-0 [&>input]:bg-transparent [&>input]:ring-0 [&>input]:ring-offset-0 [&>input]:focus-visible:ring-0 [&>input]:focus-visible:ring-offset-0">
        {children}
      </div>
      {suffix && (
        <span className="flex items-center border-l border-border bg-muted px-3 py-2 text-muted-foreground rounded-r-md">
          {suffix}
        </span>
      )}
    </div>
  )
}

export { InputGroup }
export type { InputGroupProps }
