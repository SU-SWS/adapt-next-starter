import { dcnb } from 'cnbuilder';

export const root = 'su-z-10 md:su-relative';
export const button = 'su-group su-flex su-items-center su-leading-display hocus:su-no-underline focus:su-outline-none';
export const greeting = 'su-hidden xl:su-inline-block su-text-18';
export const circle = ({ menuOpened }) => dcnb('su-shrink-0 su-w-[3.6rem] su-h-[3.6rem] su-leading-[3.2rem] su-ml-10 su-text-24 group-hover:su-text-white group-focus-visible:su-text-white su-font-regular su-uppercase su-rounded-full group-hover:su-bg-digital-red group-focus-visible:su-bg-digital-red su-border-2 su-border-solid group-hover:su-border-digital-red-xlight group-focus-visible:su-border-digital-red-xlight su-transition-colors', {
  'su-text-digital-red su-bg-white su-border-black-20': !menuOpened,
  'su-text-white su-bg-digital-red su-border-digital-red-xlight': menuOpened,
});
export const chevron = ({ menuOpened }) => dcnb('su-ml-6 su-text-digital-red group-hover:su-text-black group-focus:su-text-black su-transition-colors', {
  'su-rotate-180': menuOpened,
});
export const menuWrapper = ({ menuOpened }) => dcnb('su-absolute su-right-0 su-cc su-w-full md:su-w-[38rem] su-transform-gpu su-transition su-origin-top md:su-origin-top-right su-bg-cardinal-red-dark su-shadow-lg md:su-rounded-[4px] su-rs-px-0 su-rs-py-1 su-mt-[2.8rem] sm:su-mt-12 md:su-mt-[2.3rem]', {
  'su-scale-y-0 md:su-scale-x-0 su-opacity-0 su-invisible': !menuOpened,
  'su-scale-y-100 md:su-scale-x-100 su-opacity-100 su-visible': menuOpened,
});
export const menu = 'su-relative su-list-unstyled su-pb-16 children:su-mb-02em';
export const menu2 = 'su-relative su-list-unstyled su-border-t su-border-digital-red-xlight su-pt-16 children:su-mb-02em';
