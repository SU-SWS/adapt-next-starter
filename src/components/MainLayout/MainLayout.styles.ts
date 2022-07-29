import { dcnb } from 'cnbuilder';

export const bgColors = {
  white: 'su-bg-white',
  grey: 'su-bg-foggy-light',
};
export type BgColorType = keyof typeof bgColors;

export const root = ({ bgColor }) => dcnb('su-grow su-rs-pt-3', bgColors[bgColor]);
export const headerIcon = 'su-w-[4rem] md:su-w-[6rem] su-text-black-80 children:su-stroke-1 md:children:su-stroke-[0.7] su-rs-mt-6';
export const heading = ({ icon }) => dcnb('su-mb-02em', {
  'su-rs-mt-6': !icon,
  'su-rs-mt-1': icon,
});
export const contentWidth = {
  default: 'su-max-w-[100rem]',
  inset: 'su-max-w-[74rem]',
  large: 'su-max-w-[120rem]',
};
export const wrapper = 'su-mx-auto';
export const contentWrapper = 'su-rs-pb-8';
