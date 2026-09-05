import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "neon" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
    let baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 ";
    
    let variantStyles = "";
    if (variant === "default") {
      variantStyles = "bg-primary text-primary-foreground hover:bg-primary/90 ";
    } else if (variant === "outline") {
      variantStyles = "border border-primary/50 text-primary hover:bg-primary/10 ";
    } else if (variant === "neon") {
      variantStyles = "btn-neon ";
    } else if (variant === "ghost") {
      variantStyles = "hover:bg-primary/10 text-foreground ";
    }

    let sizeStyles = "";
    if (size === "default") sizeStyles = "h-10 px-4 py-2 ";
    if (size === "sm") sizeStyles = "h-9 rounded-md px-3 text-xs ";
    if (size === "lg") sizeStyles = "h-11 rounded-md px-8 text-base ";
    if (size === "icon") sizeStyles = "h-10 w-10 ";

    return (
      <button
        ref={ref}
        className={`${baseStyles}${variantStyles}${sizeStyles}${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
