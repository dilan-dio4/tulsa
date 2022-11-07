import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";
import { Spinner } from '../Spinner';

interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    leadingVisual?: string | React.ReactElement;
    leadingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    trailingVisual?: string | React.ReactElement;
    trailingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    leadingAddon?: React.ReactElement;
    trailingAddon?: React.ReactElement;
    rootProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    loading?: boolean;
}

export function TextInput({ 
    leadingAddon,
    trailingAddon,
    leadingVisual, 
    trailingVisual, 
    rootProps, 
    leadingVisualProps, 
    trailingVisualProps, 
    loading,
    ...props 
}: IInput) {
    const coreStyle = "inline-flex items-center border border-gray-300 group-[.is-error]:border-red-300 group-[.is-success]:border-green-400 px-3";
    const visualBaseStyle = "bg-gray-50 text-sm text-gray-500";
    return (
        <span {...rootProps} className={clsx("flex sm:text-sm", rootProps?.className)}>
            {leadingVisual && (
                <span
                    {...leadingVisualProps}
                    className={clsx(
                        coreStyle,
                        visualBaseStyle,
                        "border-r-0 rounded-l-md",
                        leadingVisualProps?.className
                    )}
                >
                    {leadingVisual}
                </span>
            )}

            <span
                className={clsx(
                    coreStyle,
                    "z-10 bg-white rounded-md shadow-sm",
                    "focus-within:ring-1 focus-within:border-indigo-500 focus-within:ring-indigo-500",
                    "focus-within:group-[.is-error]:border-red-500 focus-within:group-[.is-error]:ring-red-500",
                    "focus-within:group-[.is-success]:border-green-400 focus-within:group-[.is-success]:ring-green-400",
                    leadingVisual && "rounded-l-none",
                    trailingVisual && "rounded-r-none",
                )}
            >
                {leadingAddon && <span className="mr-2">{leadingAddon}</span>}
                <input
                    type="text"
                    className={clsx(
                        props.className,
                        "py-2 appearance-none focus:outline-none "
                    )}
                    {...props}
                />
                {trailingAddon && <span className="ml-2">{trailingAddon}</span>}
                {loading && <span className="ml-2 text-gray-500"><Spinner /></span>}
            </span>


            {trailingVisual && (
                <span
                    {...trailingVisualProps}
                    className={clsx(
                        coreStyle,
                        visualBaseStyle,
                        "border-l-0 rounded-r-md",
                        trailingVisualProps?.className
                    )}
                >
                    {trailingVisual}
                </span>
            )}
        </span>
    )
}