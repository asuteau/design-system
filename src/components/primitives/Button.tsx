import React from 'react';
import {twMerge} from 'tailwind-merge';
import {cva, type VariantProps} from 'class-variance-authority';

const button = cva(['font-medium', 'rounded-[12px]'], {
  variants: {
    intent: {
      primary: ['bg-sky-500', 'hover:bg-sky-600', 'active:bg-sky-700', 'text-amber-200'],
      secondary: ['bg-amber-200', 'hover:bg-amber-300', 'active:bg-amber-400', 'text-sky-500'],
      ghost: ['text-sky-500', 'hover:text-sky-600', 'active:text-sky-700'],
    },
    size: {
      sm: ['text-sm', 'py-1.5', 'px-2.5'],
      md: ['text-base', 'py-2.5', 'px-3.5'],
      lg: ['text-2xl', 'py-4', 'px-6'],
    },
    variant: {
      button: '',
      icon: ['p-0', 'rounded-full', 'flex', 'items-center', 'justify-center'],
    },
  },
  compoundVariants: [
    {
      intent: ['primary', 'secondary'],
      className: [
        'border-2',
        'border-black',
        'shadow-[3px_3px_0px_1px_black]',
        'hover:shadow-none',
        'hover:translate-x-[2px]',
        'hover:translate-y-[2px]',
        'transition-all',
        'duration-300',
      ],
    },
    {
      variant: 'icon',
      size: 'sm',
      className: 'h-10 w-10',
    },
    {
      variant: 'icon',
      size: 'md',
      className: 'h-11 w-11',
    },
    {
      variant: 'icon',
      size: 'lg',
      className: 'h-12 w-12',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'md',
    variant: 'button',
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

export const Button = ({className, intent, size, variant, ...props}: ButtonProps) => {
  return <button className={twMerge(button({intent, size, variant, className}))} {...props} />;
};
