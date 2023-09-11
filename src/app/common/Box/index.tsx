import React, { FC, forwardRef, ComponentPropsWithRef } from "react";

interface BoxProps extends ComponentPropsWithRef<"div"> {}

// eslint-disable-next-line react/display-name
const Box: FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...divProps }, ref) => (
    <div ref={ref} {...divProps}>
      {children}
    </div>
  )
);

export default Box;
