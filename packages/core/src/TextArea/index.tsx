import clsx from "clsx";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

interface ITextArea extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {

}

export function TextArea({ ...props }: ITextArea) {
    return (
        <textarea
            rows={3}
            {...props}
            className={clsx(
                "w-full py-2 px-3 appearance-none rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                props.className
            )}
        />
    )
}