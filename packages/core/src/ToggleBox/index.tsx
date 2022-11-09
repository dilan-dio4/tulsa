import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, { DetailedHTMLProps, InputHTMLAttributes, LabelHTMLAttributes, useRef } from 'react';

export interface IToggleBox extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
    id?: string;
    label?: string;
    labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
}

const ToggleBox =
    (type: 'radio' | 'checkbox') =>
    ({ id, label, labelProps, ...props }: IToggleBox) => {
        const formId = useRef<string>(id || `toggle-box-${nanoid()}`);

        const checkedEle =
            type === 'checkbox'
                ? "checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyNmZmYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTEyLjIwNyA0Ljc5M2ExIDEgMCAwIDEgMCAxLjQxNGwtNSA1YTEgMSAwIDAgMS0xLjQxNCAwbC0yLTJhMSAxIDAgMCAxIDEuNDE0LTEuNDE0TDYuNSA5LjA4Nmw0LjI5My00LjI5M2ExIDEgMCAwIDEgMS40MTQgMHonLz48L3N2Zz4=')]"
                : "checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyNmZmYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nOCcgY3k9JzgnIHI9JzMnLz48L3N2Zz4=')]";

        const rootPseudoClassNames = [
            'focus:ring-2',
            'focus:ring-offset-2',
            'focus:ring-indigo-500',
            'active:ring-2',
            'active:ring-offset-2',
            'active:ring-indigo-500',
            'checked:bg-indigo-600',
            'checked:ring-indigo-600',
        ].join(' ');

        return (
            <span className={clsx('flex items-center', props.className)}>
                <input
                    id={formId.current}
                    type={type}
                    {...props}
                    className={clsx(
                        'appearance-none w-4 h-4 ring-1',
                        'bg-gray-100 ring-gray-300',
                        rootPseudoClassNames,
                        checkedEle,
                        type === 'checkbox' ? 'rounded' : 'rounded-full',
                    )}
                />
                {label && (
                    <label
                        htmlFor={formId.current}
                        {...labelProps}
                        className={clsx('ml-3 text-sm font-semibold', props.disabled ? 'text-gray-500' : 'text-gray-700', labelProps?.className)}
                    >
                        {label}
                    </label>
                )}
            </span>
        );
    };

export const Checkbox = ToggleBox('checkbox');
export const Radio = ToggleBox('radio');
