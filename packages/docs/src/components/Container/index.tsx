import React from 'react';
import clsx from 'clsx';

export default function Container({ children, components, vertical, allowOverflow }) {
    return (
        <div className='mt-4 mb-14'>
            <div
                className={clsx(
                    'grid gap-4 py-10 px-8 rounded-t-lg border z-20 relative bg-white items-center max-w-full',
                    vertical ? 'grid-rows-1' : 'grid-flow-col auto-cols-max',
                    allowOverflow ? '' : "overflow-scroll"
                )}
            >
                {components}
            </div>
            <div className='z-10 [&>.language-jsx]:overflow-hidden [&>.language-jsx]:rounded-b-lg [&>.language-jsx]:rounded-t-none  [&>.language-jsx]:shadow-none [&>.language-jsx]:border [&>.language-jsx]:border-t-0 [&>.language-jsx]:bg-slate-100'>
                {children}
            </div>
        </div>
    );
}
