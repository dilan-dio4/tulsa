import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    leadingVisual?: string | React.ReactElement;
    leadingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    trailingVisual?: string | React.ReactElement;
    trailingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    rootProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
}

export function TextInput({ leadingVisual, trailingVisual, rootProps, leadingVisualProps, trailingVisualProps, ...props }: IInput) {
    const coreStyle = "inline-flex border border-gray-300 group-[.is-error]:border-red-300 group-[.is-success]:border-green-400 px-3";
    const visualBaseStyle = "items-center bg-gray-50 text-sm text-gray-500";
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

            <input
                type="text"
                {...props}
                className={clsx(
                    coreStyle,
                    "z-10 appearance-none bg-white py-2 rounded-md shadow-sm",
                    "focus:outline-none focus:ring-1 focus:border-indigo-500 focus:ring-indigo-500",
                    "group-[.is-error]:text-red-500 focus:group-[.is-error]:border-red-300 focus:group-[.is-error]:ring-red-500",
                    "group-[.is-success]:text-green-600 focus:group-[.is-success]:border-green-300 focus:group-[.is-success]:ring-green-500",
                    leadingVisual && "rounded-l-none",
                    trailingVisual && "rounded-r-none",
                    props.className
                )}
            />


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