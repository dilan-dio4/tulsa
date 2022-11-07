import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes, useContext, useRef, LabelHTMLAttributes, ReactText, Children } from "react";
import { nanoid } from 'nanoid'
import FormControlContext from './Context';

interface IFormControl extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    status?: "neutral" | "success" | "error";
    id?: string;
}

function _FormControl({
    status = "neutral",
    id,
    children,
    ...props
}: IFormControl) {
    const formId = useRef<string>(id || `form-control-${nanoid()}`);

    return (
        <FormControlContext.Provider
            value={{
                formId: formId.current,
            }}
        >
            <div className={clsx(
                "flex flex-col",
                status === "error" && "group is-error",
                status === "success" && "group is-success",
                props.className
            )}>
                {children}
            </div>
        </FormControlContext.Provider>
    )
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
                "text-sm font-semibold text-gray-700 mb-2", 
                "group-[.is-error]:text-red-500",
                "group-[.is-success]:text-green-600",
                props.className
            )}
        >
            {children}
        </label>
    )
}

interface ICaption extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children: string | React.ReactElement;
}

function Caption({ children, ...props }: ICaption) {
    return (
        <span
            {...props}
            className={clsx(
                "text-xs font-font text-gray-700 mt-1.5", 
                "group-[.is-error]:text-red-500",
                "group-[.is-success]:text-green-600",
                props.className
            )}
        >
            {children}
        </span>
    )
}

export const FormControl = Object.assign(_FormControl, {
    Label,
    Caption
})