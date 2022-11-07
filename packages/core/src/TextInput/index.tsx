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
    const visualBaseStyle = "inline-flex items-center border border-gray-300 bg-gray-50 px-3 text-sm text-gray-500";
    return (
        <span {...rootProps} className={clsx("flex sm:text-sm", rootProps?.className)}>
            {leadingVisual && (
                <span
                    {...leadingVisualProps}
                    className={clsx(
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
                    "inline-flex z-10 appearance-none bg-white border py-2 px-3 rounded-md border-gray-300 shadow-sm focus:outline focus:border-indigo-500 focus:ring-indigo-500",
                    leadingVisual && "rounded-l-none",
                    trailingVisual && "rounded-r-none",
                    props.className
                )}
            />


            {trailingVisual && (
                <span
                    {...trailingVisualProps}
                    className={clsx(
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