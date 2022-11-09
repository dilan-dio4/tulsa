import clsx from 'clsx';
import { nanoid } from 'nanoid';
import FormControlContext from './Context';
import React, { DetailedHTMLProps, HTMLAttributes, useContext, useRef, LabelHTMLAttributes, ElementType, ComponentPropsWithoutRef } from 'react';

export interface IFormControl<T extends ElementType> {
    /**
     * Controls the look and feel of the form.
     * 
     * @default "neutral"
     */
    status?: 'neutral' | 'success' | 'error';
    /**
     * Manually sets the id and accessibility of the `for` attribute of the form.
     */
    id?: string;
    /**
     * Controls the root element that is used by the FormControl. Can be an HTML element string or a React component.
     * @default "div"
     */
    as?: T;
}

function _FormControl<T extends ElementType = 'div'>({ status = 'neutral', id, children, as, ...props }: IFormControl<T> & ComponentPropsWithoutRef<T>) {
    const formId = useRef<string>(id || `form-control-${nanoid()}`);
    const Component = as || 'div';
    return (
        <FormControlContext.Provider
            value={{
                formId: formId.current,
            }}
        >
            <Component className={clsx('flex flex-col', status === 'error' && 'group is-error', status === 'success' && 'group is-success', props.className)}>
                {children}
            </Component>
        </FormControlContext.Provider>
    );
}

interface ILabel extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    children: string | React.ReactElement;
}

function Label({ children, ...props }: ILabel) {
    const { formId } = useContext(FormControlContext);

    return (
        <label
            htmlFor={formId}
            {...props}
            className={clsx(
                'text-sm font-semibold text-gray-700 mb-2',
                'group-[.is-error]:text-red-500',
                'group-[.is-success]:text-green-600',
                props.className,
            )}
        >
            {children}
        </label>
    );
}

interface ICaption extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children: string | React.ReactElement;
}

function Caption({ children, ...props }: ICaption) {
    return (
        <span
            {...props}
            className={clsx('text-xs font-font text-gray-700 mt-1.5', 'group-[.is-error]:text-red-500', 'group-[.is-success]:text-green-600', props.className)}
        >
            {children}
        </span>
    );
}

export const FormControl = Object.assign(_FormControl, {
    Label,
    Caption,
});
