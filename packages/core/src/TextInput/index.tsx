import clsx from "clsx";
import React, { ComponentPropsWithoutRef, DetailedHTMLProps, ElementType, HTMLAttributes } from "react";
import { Spinner } from '../Spinner';

export interface IInput<T extends ElementType>{
    leadingVisual?: string | React.ReactElement;
    leadingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    trailingVisual?: string | React.ReactElement;
    trailingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    leadingAddon?: React.ReactElement;
    trailingAddon?: React.ReactElement;
    rootProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    loading?: boolean;
    as?: T;
}

export function TextInput<T extends ElementType = "input">({ 
    leadingAddon,
    trailingAddon,
    leadingVisual, 
    trailingVisual, 
    rootProps, 
    leadingVisualProps, 
    trailingVisualProps, 
    loading,
    as,
    ...props 
}: IInput<T> & ComponentPropsWithoutRef<T>) {
    const coreStyle = "inline-flex items-center border border-gray-300 group-[.is-error]:border-red-300 group-[.is-success]:border-green-400 px-3";
    const visualBaseStyle = "bg-gray-50 text-sm text-gray-500";

    const Component = as || "input";

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
                    "focus-within:z-10 bg-white rounded-md shadow-sm",
                    "focus-within:ring-1 focus-within:border-indigo-500 focus-within:ring-indigo-500",
                    "focus-within:group-[.is-error]:border-red-500 focus-within:group-[.is-error]:ring-red-500",
                    "focus-within:group-[.is-success]:border-green-400 focus-within:group-[.is-success]:ring-green-400",
                    leadingVisual && "rounded-l-none",
                    trailingVisual && "rounded-r-none",
                )}
            >
                {leadingAddon && <span className="mr-2">{leadingAddon}</span>}
                <Component
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