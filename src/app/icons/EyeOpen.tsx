import { ComponentProps, FC } from 'react';

const EyeOpen: FC<ComponentProps<'svg'>> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height={16} width={16} {...props}>
    <rect width="256" height="256" fill="none" />
    <path
      d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

export default EyeOpen;
