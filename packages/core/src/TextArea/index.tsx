import clsx from 'clsx';
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import React from 'react'; // Needed

export interface ITextArea extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export function TextArea({ ...props }: ITextArea) {
    return (
        <textarea
            rows={3}
            {...props}
            className={clsx(
                'min-h-[38px] w-full py-2 px-3 appearance-none rounded-md border shadow-sm sm:text-sm',
                'border-gray-300 group-[.is-error]:border-red-300 group-[.is-success]:border-green-400',
                'focus:outline-none focus:ring-1 focus:border-indigo-500 focus:ring-indigo-500',
                'focus:group-[.is-error]:border-red-500 focus:group-[.is-error]:ring-red-500',
                'focus:group-[.is-success]:border-green-400 focus:group-[.is-success]:ring-green-400',
                props.className,
            )}
        />
    );
}
