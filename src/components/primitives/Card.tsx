import {cva, type VariantProps} from 'class-variance-authority';
import {twMerge} from 'tailwind-merge';

const card = cva(
  [
    'bg-white',
    'gap-4',
    'overflow-hidden',
    'rounded-sm',
    'border-2',
    'border-black',
    'hover:shadow-[3px_3px_0px_1px_black]',
    'hover:cursor-pointer',
    'hover:translate-x-[2px]',
    'hover:translate-y-[2px]',
    'transition-all',
    'duration-300',
  ],
  {
    variants: {
      size: {
        sm: ['w-80'],
        md: ['w-[640px]'],
        lg: ['w-[800px]'],
      },
    },
  },
);

const pill = cva(['rounded-full'], {
  variants: {
    intent: {
      red: ['bg-red-500'],
      green: ['bg-teal-500'],
      yellow: ['bg-amber-500'],
    },
    size: {
      sm: ['h-2', 'w-2'],
      md: ['h-4', 'w-4'],
      lg: ['h-6', 'w-6'],
    },
  },
  defaultVariants: {
    intent: 'red',
    size: 'sm',
  },
});

const pillHeader = cva(['bg-gray-950', 'flex', 'items-center', 'justify-end'], {
  variants: {
    size: {
      sm: ['gap-2', 'p-2'],
      md: ['gap-4', 'p-4'],
      lg: ['gap-6', 'p-6'],
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

type CardHeaderPillProps = VariantProps<typeof pill>;

type CardHeaderProps = VariantProps<typeof pillHeader>;

type CardContentProps = {
  title: string;
  text: string;
};

type CardProps = VariantProps<typeof pill>;

const CardHeaderPill = ({intent, size}: CardHeaderPillProps) => {
  return <div className={twMerge(pill({intent, size}))}></div>;
};

const CardHeader = ({size}: CardHeaderProps) => {
  return (
    <div className={twMerge(pillHeader({size}))}>
      <CardHeaderPill intent="red" size={size} />
      <CardHeaderPill intent="yellow" size={size} />
      <CardHeaderPill intent="green" size={size} />
    </div>
  );
};

const CardContent = ({title, text}: CardContentProps) => {
  return (
    <div className="flex flex-col items-start gap-4 py-4 px-8">
      <h1>{title}</h1>
      <h2>{text}</h2>
    </div>
  );
};

const Card = ({size}: CardProps) => {
  return (
    <div className={twMerge(card({size}))}>
      <CardHeader size={size} />
      <CardContent title="Card title" text="Card content" />
    </div>
  );
};

export default Card;
