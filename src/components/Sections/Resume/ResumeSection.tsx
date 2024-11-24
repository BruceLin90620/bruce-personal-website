import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-2 py-3 sm:py-8 first:pt-0 last:pb-0">
      <div className="col-span-1 mb-3 sm:mb-0">
        <div className="relative h-max">
          <h2 className="text-lg sm:text-xl font-bold uppercase text-neutral-800">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="col-span-1 sm:col-span-3">{children}</div>
    </div>
  );
});


ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
