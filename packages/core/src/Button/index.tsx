import { flexCenter } from '../utilities';
import React, { DetailedHTMLProps, ElementType, HTMLAttributes, ComponentPropsWithoutRef } from "react";
import clsx from 'clsx';

const rootPseudoSelectors = [
    "focus:ring-2",
    "focus:ring-offset-2",
    "focus:z-10",
    "active:ring-2",
    "active:ring-offset-2",
    "active:z-10"
].join(" ");

const rootButtonGroupHelpers = [
    "group-[.tulsa-button-group]:rounded-none",
    "group-[.tulsa-button-group]:first:rounded-l",
    "group-[.tulsa-button-group]:last:rounded-r",
    "group-[.tulsa-button-group]:border-x-[0.5px]",
    "group-[.tulsa-button-group]:first:border-l",
    "group-[.tulsa-button-group]:last:border-r",
    "group-[.tulsa-button-group]:ring-offset-0",
    "group-[.tulsa-button-group]:shadow-none"
].join(" ");

const rootButtonClassNames = "outline-none rounded-md border text-sm font-medium shadow-sm " + rootButtonGroupHelpers + " " + rootPseudoSelectors;

export type Variant = "Primary" | "Secondary" | "Invisible";

function getColorScheme(variant: Variant) {
    switch (variant) {
        case "Primary":
            return [
                "text-gray-700",
                "border-gray-300",
                "bg-white",
                "hover:bg-gray-50",
                "focus:ring-indigo-500",
                "focus:ring-offset-gray-100",
                "active:ring-indigo-500",
                "active:ring-offset-gray-100",
            ].join(" ");
        case "Secondary":
            return [
                "text-white", 
                "border-transparent", 
                "bg-indigo-600", 
                "hover:bg-indigo-700", 
                "focus:ring-indigo-500", 
                "focus:ring-offset-gray-100",
                "active:ring-indigo-500", 
                "active:ring-offset-gray-100"
            ].join(" ");
        case "Invisible":
            return [
                "font-bold", 
                "text-indigo-500", 
                "border-transparent", 
                "bg-transparent", 
                "shadow-none", 
                "hover:bg-gray-100", 
                "focus:ring-indigo-500", 
                "focus:ring-offset-gray-100",
                "active:ring-indigo-500", 
                "active:ring-offset-gray-100"
            ].join(" ");
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
    selected?: boolean;
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
    selected,
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
            className={clsx(
                flexCenter,
                rootButtonClassNames,
                getFontSize(),
                getPadding(),
                getColorScheme(variant),
                selected && "opacity-70 border-[rgba(118, 118, 118, 0.3)] bg-gray-200",
                props.className
            )}
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
    selected?: boolean;
}


export function IconButton<T extends ElementType = "button">({
    icon,
    size = "sm",
    variant = "Primary",
    circle,
    as,
    selected,
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
            className={clsx(
                flexCenter,
                rootButtonClassNames,
                "!p-0",
                circle && "rounded-full",
                getColorScheme(variant),
                selected && "opacity-70 border-[rgba(118, 118, 118, 0.3)] bg-gray-200",
                props.className
            )}
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