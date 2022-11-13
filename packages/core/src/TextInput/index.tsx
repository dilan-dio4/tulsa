import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, DetailedHTMLProps, ElementType, HTMLAttributes } from 'react';
import { Spinner } from '../Spinner';

export interface IInput<T extends ElementType> {
    /**
     * An element that will appear on the left side of the input
     */
    leadingVisual?: string | React.ReactElement;
    /**
     * Props that will be applied to the root component of the leading visual
     * 
     * Operates _similarly_ to this diagram:
     * ```
     * <span {...tulsaDefaultProps} {...leadingVisualProps}>{leadingVisual}</span>
     * ```
     */
    leadingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    /**
     * An element that will appear on the right side of the input
     */
    trailingVisual?: string | React.ReactElement;
    /**
     * Props that will be applied to the root component of the trailing visual
     * 
     * Operates _similarly_ to this diagram:
     * ```
     * <span {...tulsaDefaultProps} {...trailingVisualProps}>{trailingVisual}</span>
     * ```
     */
    trailingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    /**
     * An element that will appear before the input's content
     */
    leadingAddon?: React.ReactElement;
    /**
     * An element that will appear after the button's content
     */
    trailingAddon?: React.ReactElement;
    /**
     * Props that are applied to the root of the input.
     */
    rootProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    /**
     * Controls whether a spinner is displayed
     */
    loading?: boolean;
    /**
     * Controls the root element that is used by the input. Can be an HTML element string or a React component.
     * @default "input"
     */
    as?: T;
}

export function TextInput<T extends ElementType = 'input'>({
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
    const coreStyle = 'inline-flex items-center border border-gray-300 group-[.is-error]:border-red-300 group-[.is-success]:border-green-400 px-3';
    const visualBaseStyle = 'bg-gray-50 text-sm text-gray-500';

    const Component = as || 'input';

    return (
        <span {...rootProps} className={clsx('flex sm:text-sm', rootProps?.className)}>
            {leadingVisual && (
                <span {...leadingVisualProps} className={clsx(coreStyle, visualBaseStyle, 'border-r-0 rounded-l-md', leadingVisualProps?.className)}>
                    {leadingVisual}
                </span>
            )}

            <span
                className={clsx(
                    coreStyle,
                    'focus-within:z-10 bg-white rounded-md shadow-sm',
                    'focus-within:ring-1 focus-within:border-tulsa-500 focus-within:ring-tulsa-500',
                    'focus-within:group-[.is-error]:border-red-500 focus-within:group-[.is-error]:ring-red-500',
                    'focus-within:group-[.is-success]:border-green-400 focus-within:group-[.is-success]:ring-green-400',
                    leadingVisual && '!rounded-l-none',
                    trailingVisual && '!rounded-r-none',
                )}
            >
                {leadingAddon && <span className='mr-2'>{leadingAddon}</span>}
                <Component type='text' className={clsx(props.className, 'py-2 appearance-none focus:outline-none ')} {...props} />
                {trailingAddon && <span className='ml-2'>{trailingAddon}</span>}
                {loading && (
                    <span className='ml-2 text-gray-500'>
                        <Spinner />
                    </span>
                )}
            </span>

            {trailingVisual && (
                <span {...trailingVisualProps} className={clsx(coreStyle, visualBaseStyle, 'border-l-0 rounded-r-md', trailingVisualProps?.className)}>
                    {trailingVisual}
                </span>
            )}
        </span>
    );
}
