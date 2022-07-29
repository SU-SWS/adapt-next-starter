import { dcnb } from 'cnbuilder';

export const sizes = {
  full: 'su-w-full',
  // NOTE: Expand this as needed
};
export type SizeType = keyof typeof sizes;
export const colors = {
  'digital-red': {
    fill: 'su-fill-digital-red',
    border: 'su-border-digital-red',
  },
};
export type ColorType = keyof typeof colors;
export const root = 'su-relative su-aspect-w-1 su-aspect-h-1';
export const circle = ({
  size = 'full',
  color = 'digital-red',
  border = true,
}: {
  size?: SizeType;
  color?: ColorType;
  border?: boolean;
} = {}) => dcnb(
  'su-rounded-full su-overflow-hidden',
  sizes[size],
  border ? `su-border-4 ${colors[color].border}` : ''
);
export const img = 'su-object-cover';
export const initialText = (color: ColorType = 'digital-red') => colors[color]?.fill;
