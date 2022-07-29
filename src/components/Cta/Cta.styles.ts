export const cta = 'su-group su-font-regular hocus:su-underline';

export const ctaVariants = {
  primary: 'su-no-underline su-leading-display su-bg-lagunita hover:su-bg-lagunita-dark focus-visible:su-bg-lagunita-dark active:su-bg-lagunita su-text-white hocus:su-text-white su-border su-border-solid su-rounded su-border-lagunita-light hocus:su-border-lagunita-light active:su-border-lagunita-light hocus:su-shadow-md active:su-ring-2 focus:su-ring-2 active:su-ring-lagunita-light focus:su-ring-lagunita-light hocus:su-decoration-1 focus:su-outline-none',
  secondary: 'su-no-underline su-leading-display su-bg-white hocus:su-bg-white su-text-lagunita hocus:su-text-lagunita-dark su-border hocus:su-border su-border-solid su-rounded su-border-lagunita-light hocus:su-border-lagunita-light active:su-border-lagunita-light hover:su-shadow-md focus:su-ring-2 active:su-ring-2 focus:su-ring-lagunita-light active:su-ring-lagunita-light hocus:su-decoration-1 focus:su-outline-none',
  link: 'su-underline su-leading-display su-text-lagunita hocus:su-text-black focus-within:su-ring-2 focus-within:su-ring-lagunita-light focus-within:su-ring-offset-4 su-rounded-[0.1px] focus:su-outline-none  su-decoration-1 hocus:su-decoration-2',
  back: 'su-no-underline su-leading-none group-hover:su-underline group-focus:su-underline su-text-black hover:su-text-lagunita focus:su-text-lagunita focus-visible:su-ring-1 focus-visible:su-ring-lagunita-light focus-visible:su-ring-offset-2 focus:su-outline-none su-rounded-[0.1px]',
  masthead: 'su-no-underline su-text-white hocus:su-text-white md:su-text-black md:hocus:su-text-black',
  footer: 'su-font-regular su-leading-display su-underline-offset-[3px] su-text-black-20 hocus:su-text-black-20 su-decoration-digital-red-xlight hocus:su-decoration-digital-red-xlight',
  'footer-featured': 'su-font-semibold su-leading-display su-no-underline su-underline-offset-[3px] su-text-black-20 hocus:su-text-black-20 su-decoration-digital-red-xlight hocus:su-decoration-digital-red-xlight',
  ghost: 'su-bg-transparent su-leading-display hocus:su-bg-transparent su-text-white hocus:su-text-white su-border-2 su-border-white su-border-solid hocus:su-decoration-1 focus:su-outline-none',
  cancel: 'su-leading-display su-text-lagunita su-underline hocus:su-text-black su-decoration-1 hocus:su-decoration-2',
  close: 'su-font-semibold su-leading-none su-text-lagunita hocus:su-text-lagunita-dark focus:su-outline-none',
  dismiss: 'su-font-bold su-uppercase su-tracking-widest su-leading-none su-text-black hocus:su-text-black  focus:su-outline-none',
  user: 'su-flex su-items-baseline su-justify-between su-leading-display su-text-left su-font-semibold su-text-white hocus:su-text-white su-no-underline hocus:su-bg-cardinal-red-xxdark su-rounded su-decoration-digital-red-xlight hocus:su-decoration-digital-red-xlight su-underline-offset-[2px]',
  'user-light': 'su-flex su-leading-display su-text-left su-text-white hocus:su-text-white su-no-underline hocus:su-bg-cardinal-red-xxdark su-rounded su-decoration-digital-red-xlight hocus:su-decoration-digital-red-xlight su-underline-offset-[2px]',
  disabled: 'su-leading-display su-border su-rounded su-border-black-20 su-bg-black-20 su-text-black hocus:su-no-underline',
  unset: '',
};
export type CtaVariantType = keyof typeof ctaVariants;

export const ctaSizes = {
  default: 'su-px-26 su-py-14 md:su-px-30 md:su-py-20 su-text-16 md:su-text-20',
  small: 'su-px-13 su-py-9 md:su-px-15 md:su-py-10 su-text-16',
  masthead: 'su-text-14 md:su-text-17 xl:su-text-18',
  footer: '',
  'footer-featured': 'su-text-19 md:su-text-20 xl:su-text-21',
  user: 'su-w-full su-text-20 su-px-20 su-py-12',
  card: 'su-ma-card',
  back: 'su-text-16 su-p-4',
  close: 'su-text-16 md:su-text-21',
  dismiss: 'su-text-17',
  unset: '',
};
export type CtaSizeType = keyof typeof ctaSizes;

export const icon = 'su-inline-block';

export const iconStyles = {
  'footer-featured': 'su-text-digital-red-xlight group-hover:su-text-black-20 group-focus:su-text-black-20',
  masthead: 'su-text-white group-hover:su-text-white group-focus:su-text-white md:su-text-digital-red md:group-hover:su-text-digital-red md:group-focus:su-text-digital-red',
  user: 'su-text-digital-red-xlight group-hover:su-text-white group-focus:su-text-white',
  back: 'su-text-lagunita-light !su-w-[2.2rem]',
  close: 'su-text-lagunita-light group-hover:su-text-lagunita-dark group-focus:su-text-lagunita-dark !su-w-[2.2rem] su--mt-4',
  dismiss: 'su-text-black !su-w-[2.2rem] su--mt-4',
};

export const iconAnimation = {
  'top-right': 'group-hover:su-translate-x-01em group-focus:su-translate-x-01em group-hover:su--translate-y-01em group-focus:su--translate-y-01em',
  down: 'group-hover:su-translate-y-02em group-focus:su-translate-y-02em',
  up: 'group-hover:su--translate-y-02em group-focus:su--translate-y-02em',
  right: 'group-hover:su-translate-x-02em group-focus:su-translate-x-02em',
  left: 'group-hover:su--translate-x-02em group-focus:su--translate-x-02em',
};
export type IconAnimationType = keyof typeof iconAnimation;

// Leading icons have right margins
// Only add to this map if right margin is different from default class su-mr-02em
export const iconRightMargin = {
  default: 'su-mr-02em',
  'arrow-left': 'su-mr-03em',
  back: 'su-mr-03em',
  'chevron-down': 'su-mr-01em',
};

// Trailing icons have left margins
// Only add to this map if left margin is different from default class su-ml-02em
export const iconLeftMargin = {
  default: 'su-ml-02em',
  'arrow-right': 'su-ml-03em',
  back: 'su-ml-03em',
  'chevron-down': 'su-ml-01em',
};
