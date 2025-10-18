import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      className={className}
      ref={ref}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
