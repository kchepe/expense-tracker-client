import { ComponentProps, FC } from 'react';

const Check: FC<ComponentProps<'svg'>> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height={16} width={16} {...props}>
    <rect width="256" height="256" fill="none" />
    <polyline
      points="40 144 96 200 224 72"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
  );

export default Check;
