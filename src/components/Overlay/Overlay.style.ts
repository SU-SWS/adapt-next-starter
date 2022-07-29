import { dcnb } from 'cnbuilder';

export const backdrop = 'su-bg-poppy su-opacity-60';
export const root = ({ className }: { className: string }) => dcnb(
  'su-flex su-flex-col su-justify-center su-mx-auto su-items-center su-cc',
  className
);
