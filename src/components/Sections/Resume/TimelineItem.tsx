import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-6 sm:pb-8 text-left last:pb-0">
      <div className="flex flex-col pb-2 sm:pb-4">
        <h1 className="text-sm sm:text-xl font-bold">{title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
          <span className="text-xs sm:text-sm font-medium italic">{location}</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-xs sm:text-sm">{date}</span>
        </div>
      </div>
      <div className="text-xs sm:text-base">{content}</div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
