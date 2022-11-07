import { flexCenter } from '../utilities';
import React, { DetailedHTMLProps, ElementType, HTMLAttributes, ComponentPropsWithoutRef } from "react";
import clsx from 'clsx';

const rootButtonClassName = "rounded-md border text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

export type Variant = "Primary" | "Secondary" | "Invisible";

function getColorScheme(variant: Variant) {
    switch (variant) {
        case "Primary":
            return "text-gray-700 border-gray-300 bg-white hover:bg-gray-50 focus:ring-indigo-500 focus:ring-offset-gray-100";
        case "Secondary":
            return "text-white border-transparent bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-gray-100";
        case "Invisible":
            return "font-bold text-indigo-500 border-transparent bg-transparent shadow-none hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-gray-100";
        default:
            break;
    }
}

export interface IButtonProps<T extends ElementType> {
    leadingVisual?: React.ReactElement;
    leadingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    trailingVisual?: React.ReactElement;
    trailingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    size?: "xs" | "sm" | "md" | "lg";
    variant?: Variant;
    as?: T;
}

function _Button<T extends ElementType = "button">({
    leadingVisual,
    leadingVisualProps,
    trailingVisual,
    trailingVisualProps,
    children,
    size = "md",
    variant = "Primary",
    as,
    ...props
}: IButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, "size">) {

    function getFontSize() {
        switch (size) {
            case "xs":
                return "text-[10px]";
            case "sm":
                return "text-[12px]";
            case "md":
                return "text-[14px]";
            case "lg":
                return "text-[18px]";
            default:
                return "text-[14px]";
        }
    }

    function getPadding() {
        switch (size) {
            case "xs":
                return "px-1 py-0.5";
            case "sm":
                return "px-2 py-1";
            case "md":
                return "px-4 py-2";
            case "lg":
                return "px-5 py-4";
            default:
                return "px-4 py-2";
        }
    }

    const Component = as || "button";

    return (
        <Component
            role={Component === "button" ? "button" : undefined}
            {...props}
            className={clsx(flexCenter, rootButtonClassName, getFontSize(), getPadding(), getColorScheme(variant), props.className)}
        >
            {leadingVisual && <span {...leadingVisualProps} className={clsx(size === "lg" ? "mr-3" : size === "xs" ? "mr-0.5" : 'mr-1.5', leadingVisualProps?.className)}>{leadingVisual}</span>}
            {children}
            {trailingVisual && <span {...trailingVisualProps} className={clsx(size === "lg" ? "ml-3" : size === "xs" ? "ml-0.5" : 'ml-1.5', trailingVisualProps?.className)}>{trailingVisual}</span>}
        </Component>
    )
}


export interface IButtonCounter extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children: string;
}

function Counter({ children, ...props }: IButtonCounter) {
    return (
        <span
            {...props}
            className={clsx("ml-0.5 text-[0.95em] px-[0.35em] py-[0.05em] font-semibold leading-none rounded-[0.95em] bg-gray-200", props.className)}
        >
            {children}
        </span>
    )
}

export const Button = Object.assign(_Button, {
    Counter
})

export interface IIconButtonProps<T extends ElementType> {
    icon: React.ReactElement;
    size?: "xs" | "sm" | "lg";
    circle?: boolean;
    variant?: Variant;
    as?: T;
}


export function IconButton<T extends ElementType = "button">({
    icon,
    size = "sm",
    variant = "Primary",
    circle,
    as,
    ...props
}: IIconButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, "size">) {

    function getRootHeight() {
        switch (size) {
            case "xs":
                return 22;
            case "sm":
                return 28;
            case "lg":
                return 40;
            default:
                return 0;
        }
    }

    function getFontSize() {
        switch (size) {
            case "xs":
                return 14;
            case "sm":
                return 14;
            case "lg":
                return 18;
            default:
                return 0;
        }
    }

    const Component = as || "button";

    return (
        <Component
            role={Component === "button" ? "button" : undefined}
            {...props}
            className={clsx(flexCenter, rootButtonClassName, "!p-0", circle && "rounded-full", getColorScheme(variant), props.className)}
            style={{
                minHeight: getRootHeight(),
                minWidth: getRootHeight(),
                maxHeight: getRootHeight(),
                maxWidth: getRootHeight(),
                fontSize: getFontSize(),
                ...props.style
            }}
        >
            {icon}
        </Component>
    )
}