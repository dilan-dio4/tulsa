import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, Fragment } from 'react';
import { Button, IButtonProps } from '../Button';
import { Menu as TulsaMenu } from '../Menu';

interface IDropdownProps {
    children: React.ReactElement[];
    /**
     * Controls the side that the dropdown is justified
     * @default "right"
     */
    justify?: 'left' | 'right';
    /**
     * Controls the side that the dropdown is aligned
     * @default "bottom"
     */
    align?: 'top' | 'bottom';
    /**
     * Controls the anchor of the dropdown
     * @example
     * 
     * ```jsx
     * (props) => <Button as='button' {...triggerProps} {...props} />
     * ```
     */
    customTrigger?: React.ReactElement;
    /**
     * Props that are passed to the default anchor of the dropdown. Only applies if a no custom trigger is applied.
     */
    triggerProps?: IButtonProps<'button'>;
    /**
     * Label of the anchor of the dropdown. Only applies if no custom trigger is applied.
     */
    label: string;
    /**
     * Props that are applied to the `<Menu />` of the dropdown.
     */
    menuProps?: ComponentPropsWithoutRef<'ul'>;
    /**
     * Props that are applied to the root `<Menu.Item />` of every item.
     * 
     * Functions _similarly_ to the following diagram:
     * ```jsx
     * <li {...tulsaItemProps} {...itemRootProps}>{child}</li>
     * ```
     */
    itemRootProps?: ComponentPropsWithoutRef<'li'>;
}

export function Dropdown({ children, justify = 'right', align = 'bottom', customTrigger, label, triggerProps, menuProps, itemRootProps }: IDropdownProps) {
    return (
        <Menu as='div' className={'relative inline-block text-left'}>
            {customTrigger ? (
                <Menu.Button>{customTrigger}</Menu.Button>
            ) : (
                <Menu.Button as={((props) => <Button as='button' {...triggerProps} {...props} />) as unknown as 'button'}>
                    {label}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                        className='ml-2 -mr-1 h-5 w-5 text-gray-300'
                    >
                        <path
                            fill-rule='evenodd'
                            d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                            clip-rule='evenodd'
                        ></path>
                    </svg>
                </Menu.Button>
            )}
            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
            >
                <Menu.Items
                    as={TulsaMenu}
                    {...menuProps}
                    className={clsx(
                        'absolute z-50 bg-white mt-2 w-56 origin-top-right rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
                        justify === 'right' ? 'right-0' : 'left-0',
                        align === 'top' && '-translate-y-full top-[-14px]',
                        menuProps?.className,
                    )}
                >
                    {React.Children.map(children, (child) =>
                        (child.type as any)?.displayName === 'Divider' ? (
                            child
                        ) : (
                            <Menu.Item as={React.Fragment}>
                                {({ active }) => (
                                    <li {...itemRootProps} className={clsx('group', active && 'dropdown-active', itemRootProps?.className)}>
                                        {child}
                                    </li>
                                )}
                            </Menu.Item>
                        ),
                    )}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
