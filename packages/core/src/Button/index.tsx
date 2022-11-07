import { flexCenter } from '../utilities';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from 'clsx';

const rootButtonClassName = "rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100";

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    leadingVisual?: React.ReactElement;
    trailingVisual?: React.ReactElement;
    size?: "xs" | "sm" | "md" | "lg";
}

export function Button({ leadingVisual, trailingVisual, children, size, ...props }: IButtonProps) {

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

    return (
        <button
            {...props}
            role="button"
            className={clsx(flexCenter, rootButtonClassName, getFontSize(), getPadding(), props.className)}
        >
            {leadingVisual && <span className={clsx(size === "lg" ? "mr-3" : 'mr-1.5')}>{leadingVisual}</span>}
            {children}
            {trailingVisual && <span className={clsx(size === "lg" ? "ml-3" : 'ml-1.5')}>{trailingVisual}</span>}
        </button>
    )
}

interface IIconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: React.ReactElement;
    size: "xs" | "sm" | "lg";
    circle?: boolean;
}


export function IconButton({ icon, size, circle, ...props }: IIconButtonProps) {

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

    return (
        <button
            role="button"
            className={clsx(flexCenter, rootButtonClassName, "!p-0", circle && "rounded-full", props.className)}
            style={{
                minHeight: getRootHeight(),
                minWidth: getRootHeight(),
                maxHeight: getRootHeight(),
                maxWidth: getRootHeight(),
                fontSize: getFontSize()
            }}
            {...props}
        >
            {icon}
        </button>
    )
}