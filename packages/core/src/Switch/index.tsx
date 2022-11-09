import clsx from "clsx";
import { nanoid } from "nanoid";
import React, { useRef } from "react";
import type { IToggleBox } from '../ToggleBox';
// Related to ToggleBox

export function Switch({
    id,
    label,
    labelProps,
    size = "md",
    ...props
}: { size?: "sm" | "md" | "lg" } & IToggleBox) {
    const formId = useRef<string>(id || `switch-${nanoid()}`);

    function getSwitchSize() {
        switch (size) {
            case "lg":
                return "w-[52px] h-7";
            case "md":
                return "w-11 h-6";
            case "sm":
                return "w-[36px] h-[20px]";
            default:
                return "w-11 h-6";
        }
    }

    function getSwitchKnobSize() {
        switch (size) {
            case "lg":
                return "after:h-6 after:w-6";
            case "md":
                return "after:h-5 after:w-5";
            case "sm":
                return "after:h-[16px] after:w-[16px]";
            default:
                return "after:h-5 after:w-5";
        }
    }

    const rootPseudoClassNames = [
        "peer-focus:ring-2", 
        "peer-focus:ring-offset-2", 
        "peer-focus:ring-offset-gray-100", 
        "peer-focus:ring-indigo-500",
        "peer-active:ring-2", 
        "peer-active:ring-offset-2", 
        "peer-active:ring-offset-gray-100", 
        "peer-active:ring-indigo-500",
    ].join(" ");

    return (
        <label htmlFor={formId.current} className="flex items-center cursor-pointer relative">
            <input
                type="checkbox"
                value=""
                id={formId.current}
                {...props}
                className={clsx("sr-only peer", props.className)}
            />
            <div
                className={clsx(
                    getSwitchSize(),
                    getSwitchKnobSize(),
                    rootPseudoClassNames,
                    "bg-gray-200 rounded-full peer peer-checked:bg-indigo-500",
                    "peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:transition-all"
                )}
            />
            {label && <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>}
        </label>
    )
}