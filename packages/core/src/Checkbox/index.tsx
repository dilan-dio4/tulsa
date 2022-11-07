import clsx from "clsx";
import { nanoid } from "nanoid";
import { DetailedHTMLProps, InputHTMLAttributes, LabelHTMLAttributes, useRef } from "react";

interface ICheckbox extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id?: string;
    label?: string;
    labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
}

export function Checkbox({ id, label, labelProps, ...props }: ICheckbox) {
    const formId = useRef<string>(id || `checkbox-${nanoid()}`);

    return (
        <span className={clsx("flex items-center", props.className)}>
            <input
                id={formId.current}
                type="checkbox"
                {...props}
                className={clsx(
                    "appearance-none w-4 h-4 rounded ring-1 focus:ring-2 focus:ring-offset-2",
                    "bg-gray-100 ring-gray-300 focus:ring-indigo-500",
                    "checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyNmZmYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTEyLjIwNyA0Ljc5M2ExIDEgMCAwIDEgMCAxLjQxNGwtNSA1YTEgMSAwIDAgMS0xLjQxNCAwbC0yLTJhMSAxIDAgMCAxIDEuNDE0LTEuNDE0TDYuNSA5LjA4Nmw0LjI5My00LjI5M2ExIDEgMCAwIDEgMS40MTQgMHonLz48L3N2Zz4=')]",
                    "checked:bg-indigo-600 checked:ring-indigo-600"
                )}
            />
            {label && (
                <label
                    htmlFor={formId.current}
                    {...labelProps}
                    className={clsx(
                        "ml-2 text-sm font-semibold text-gray-700",
                        labelProps?.className
                    )}
                >
                    {label}
                </label>
            )}
        </span>
    )
}