import React from 'react';

function cx(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  impact?: 'bold' | 'light' | 'none';
  size?: 'small' | 'medium' | 'large';
  shape?: 'square' | 'rounded' | 'pill';
  tone?: 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'light';
  full?: boolean;
}

export default function Button({
  children,
  onClick,
  impact = 'none',
  size = 'medium',
  shape = 'rounded',
  tone = 'primary',
  full = false,
}: ButtonProps) {
  const baseClasses =
    'font-semibold focus-visible:outline-none flex items-center justify-center focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50';

  const impactClasses = {
    primary: {
      bold: 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90 focus-visible:ring-primary',
      light: 'bg-primary/20 text-primary hover:bg-primary/30 focus-visible:ring-primary',
      none: 'bg-transparent text-primary hover:bg-primary/10 focus-visible:ring-primary',
    },
    danger: {
      bold: 'bg-destructive text-white shadow-md hover:bg-destructive/90 focus-visible:ring-destructive',
      light: 'bg-destructive/20 text-destructive hover:bg-destructive/30 focus-visible:ring-destructive',
      none: 'bg-transparent text-destructive hover:bg-destructive/10 focus-visible:ring-destructive',
    },
    success: {
      bold: 'bg-green-500 text-green-950 shadow-md hover:bg-green-600 focus-visible:ring-green-500',
      light: 'bg-green-500/20 text-green-600 hover:bg-green-500/30 focus-visible:ring-green-500',
      none: 'bg-transparent text-green-600 hover:bg-green-500/10 focus-visible:ring-green-500',
    },
    warning: {
      bold: 'bg-yellow-500 text-yellow-950 shadow-md hover:bg-yellow-600 focus-visible:ring-yellow-500',
      light: 'bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/30 focus-visible:ring-yellow-500',
      none: 'bg-transparent text-yellow-600 hover:bg-yellow-500/10 focus-visible:ring-yellow-500',
    },
    info: {
      bold: 'bg-violet-500 text-white shadow-md hover:bg-violet-600 focus-visible:ring-violet-500',
      light: 'bg-violet-500/20 text-violet-600 hover:bg-violet-500/30 focus-visible:ring-violet-500',
      none: 'bg-transparent text-violet-600 hover:bg-violet-500/10 focus-visible:ring-violet-500',
    },
    light: {
      bold: 'bg-muted text-muted-foreground shadow-md hover:bg-muted/90 focus-visible:ring-muted',
      light: 'bg-muted/20 text-muted-foreground hover:bg-muted focus-visible:ring-muted',
      none: 'bg-transparent text-muted-foreground hover:bg-muted focus-visible:ring-muted',
    },
  };

  const sizeClasses = {
    small: 'px-3 py-1 text-xs',
    medium: 'px-5 py-2 text-sm',
    large: 'px-7 py-2.5 text-lg',
  };

  const shapeClasses = {
    square: 'rounded-none',
    rounded: 'rounded-lg',
    pill: 'rounded-full',
  };

  const classes = cx(
    baseClasses,
    impactClasses[tone][impact],
    sizeClasses[size],
    shapeClasses[shape],
    full ? 'w-full' : '',
  );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
