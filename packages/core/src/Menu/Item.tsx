import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, DetailedHTMLProps, ElementType, HTMLAttributes } from 'react';

export interface IItemProps<T extends ElementType> {
    variant?: 'default' | 'dangerous' | 'success';
    disabled?: boolean;
    selected?: boolean;
    onSelect?(): any;
    children?: string | React.ReactElement;
    leadingVisual?: string | React.ReactElement;
    leadingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    trailingVisual?: string | React.ReactElement;
    trailingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    description?: string;
    as?: T;
}

export function Item<T extends ElementType = 'li'>({
    variant = 'default',
    disabled,
    selected,
    onSelect,
    children,
    leadingVisual,
    leadingVisualProps,
    trailingVisual,
    trailingVisualProps,
    description,
    as,
    ...props
}: IItemProps<T> & ComponentPropsWithoutRef<T>) {
    function getPseudoClassNames() {
        switch (variant) {
            case 'default':
                return ['hover:bg-gray-100', 'active:bg-gray-200', 'focus:bg-gray-200', 'group-[.dropdown-active]:bg-gray-200'].join(' ');
            case 'dangerous':
                return ['hover:bg-red-50', 'active:bg-red-100', 'focus:bg-red-100', 'group-[.dropdown-active]:bg-red-100'].join(' ');
            default:
                break;
        }
    }

    function getSelectedClassNames() {
        switch (variant) {
            case 'default':
                return ['bg-gray-200', 'hover:!bg-gray-200'].join(' ');
            case 'dangerous':
                return ['bg-red-100', 'hover:!bg-red-100'].join(' ');
            default:
                break;
        }
    }

    function getTextColor() {
        switch (variant) {
            case 'default':
                return ['text-gray-900'].join(' ');
            case 'dangerous':
                return ['text-red-600'].join(' ');
            default:
                break;
        }
    }

    const Component = as || 'li';

    return (
        <Component
            {...(Component === 'li'
                ? {
                      role: 'listitem',
                      tabIndex: 0,
                  }
                : {})}
            {...props}
            className={clsx(
                'flex flex-col py-[6px] pl-2 pr-4 mx-2 rounded-md transition-colors duration-100 cursor-pointer',
                getPseudoClassNames(),
                selected && getSelectedClassNames(),
                props.className,
            )}
        >
            <div className={clsx('flex items-center justify-between text-sm tracking-tight', getTextColor())}>
                <div className='flex items-center'>
                    {leadingVisual && (
                        <span {...leadingVisualProps} className={clsx('w-[14px] mr-2 opacity-75', leadingVisualProps?.className)}>
                            <span className='mx-auto'>{leadingVisual}</span>
                        </span>
                    )}
                    <span>{children}</span>
                </div>
                {trailingVisual && (
                    <span {...trailingVisualProps} className={clsx('opacity-75', trailingVisualProps?.className)}>
                        {trailingVisual}
                    </span>
                )}
            </div>
            {description && (
                <span className={clsx('text-xs tracking-tight leading-tight text-gray-600 mr-[20px]', leadingVisual && 'ml-[22px]')}>{description}</span>
            )}
        </Component>
    );
}
