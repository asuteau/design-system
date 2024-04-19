import type {ComponentPropsWithoutRef, ElementType} from 'react';
import React from 'react';

type ButtonsProps<C extends ElementType = 'button'> = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  color?: 'primary';
  fullWidth?: boolean;
  as?: C;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<C>;

export const Button = <C extends ElementType = 'button'>({
  variant = 'primary',
  color = 'primary',
  as,
  fullWidth = false,
  children,
  ...props
}: ButtonsProps<C>) => {
  const Component = as || 'button';
  const colorClasses = {
    primary: {
      primary:
        'text-white bg-primary-dark hover:bg-primary-darker active:bg-primary-darkest disabled:text-primary-darker disabled:bg-primary-light disabled:opacity-50 hover:no-underline',
      secondary:
        'text-primary-dark border-2 border-primary-dark hover:bg-primary-lightest active:bg-primary-light disabled:bg-white disabled:opacity-50 hover:no-underline',
      tertiary: 'text-primary-dark underline hover:text-primary-darker active:text-primary-darkest',
    },
  };

  const paddingClasses = {
    primary: 'px-xl py-s',
    secondary: 'px-md py-xs',
    tertiary: '',
  };

  return (
    <Component
      className={`h-xl text-sm md:text-base font-bold rounded-xl ${paddingClasses[variant]} ${
        colorClasses[color][variant]
      } ${fullWidth && 'w-fulltext-center'}`}
      {...props}
    >
      {children}
    </Component>
  );
};
