import clsx from 'clsx';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import Box from '../Box';

interface AvatarProps {
  imageSrc?: string;
  children?: string | ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: FC<AvatarProps> = ({ imageSrc, children, className, size = 'medium' }) => {
  const avatarSize = {
    small: 'w-5 h-5',
    medium: 'w-10 h-10',
    large: 'w-14 h-14 text-xl',
  };
  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt="3state-profile"
        width="0"
        height="0"
        sizes="100vw"
        className={clsx('rounded-full', avatarSize[size])}
      />
    );
  }

  return (
    <Box
      className={clsx(
        className,
        avatarSize[size],
        'rounded-full inline-flex bg-primary text-white items-center justify-center font-bold',
      )}
    >
      {children}
    </Box>
  );
};

export default Avatar;
