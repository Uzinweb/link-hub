import React from 'react';
import { LinkCard } from './LinkCard';

export const LinksList = ({ links }) => {
  return (
    <div className="w-full flex flex-col gap-3 px-4 my-2">
      {links.map((link, index) => (
        <LinkCard key={link.id || index} item={link} index={index} />
      ))}
    </div>
  );
};
