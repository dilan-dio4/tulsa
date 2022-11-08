import clsx from "clsx";
import React, { ComponentPropsWithoutRef, DetailedHTMLProps, HTMLAttributes } from "react";

export interface IItemProps extends ComponentPropsWithoutRef<"li"> {
    variant?: "default" | "dangerous" | "success";
    disabled?: boolean;
    selected?: boolean;
    onSelect?(): any;
    children?: string | React.ReactElement;
    leadingVisual?: string | React.ReactElement;
    leadingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    trailingVisual?: string | React.ReactElement;
    trailingVisualProps?: Partial<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    description?: string;
}

export function Item({
    variant = "default",
    disabled,
    selected,
    onSelect,
    children,
    leadingVisual,
    leadingVisualProps,
    trailingVisual,
    trailingVisualProps,
    description,
    ...props
}: IItemProps) {

    function getPseudoClassNames() {
        switch (variant) {
            case "default":
                return [
                    "hover:bg-gray-100",
                    "active:bg-gray-200",
                    "focus:bg-gray-200",
                ].join(" ");
            case "dangerous":
                return [
                    "hover:bg-red-50",
                    "active:bg-red-100",
                    "focus:bg-red-100",
                ].join(" ")
            default:
                break;
        }
    }

    function getSelectedClassNames() {
        switch (variant) {
            case "default":
                return [
                    "bg-gray-200",
                    "hover:!bg-gray-200",
                ].join(" ");
            case "dangerous":
                return [
                    "bg-red-100",
                    "hover:!bg-red-100",
                ].join(" ")
            default:
                break;
        }
    }

    function getTextColor() {
        switch (variant) {
            case "default":
                return [
                    "text-gray-900"
                ].join(" ");
            case "dangerous":
                return [
                    "text-red-600"
                ].join(" ")
            default:
                break;
        }
    }

    return (
        <li
            role={"listitem"}
            tabIndex={0}
            {...props}
            className={clsx(
                "flex flex-col w-full py-[6px] pl-2 pr-4 mx-2 rounded-md transition-colors duration-100 cursor-pointer",
                getPseudoClassNames(),
                selected && getSelectedClassNames(),
                props.className,
            )}
        >
            <div className={clsx("flex items-center justify-between text-sm tracking-tight", getTextColor())}>
                <div className="flex items-center">
                    {leadingVisual && <span {...leadingVisualProps} className={clsx("w-[14px] mr-2 opacity-75", leadingVisualProps?.className)}><span className="mx-auto">{leadingVisual}</span></span>}
                    <span>{children}</span>
                </div>
                {trailingVisual && <span {...trailingVisualProps} className={clsx("opacity-75", trailingVisualProps?.className)}>{trailingVisual}</span>}
            </div>
            {description && <span className={clsx("text-xs tracking-tight leading-tight text-gray-600 mr-[20px]", leadingVisual && "ml-[22px]")}>{description}</span>}
        </li>
    )
}