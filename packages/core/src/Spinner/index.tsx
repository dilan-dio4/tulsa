import clsx from "clsx";
import { SVGProps } from "react";

interface ISpinner extends SVGProps<SVGSVGElement> {
    size?: "sm" | "md" | "lg";
}

export function Spinner({
    size = "sm",
    ...props
}: ISpinner) {
    function getSize() {
        switch (size) {
            case "sm":
                return 16;
            case "md":
                return 32;
            case "lg":
                return 64;
            default:
                return 32;
        }
    }
    return (
        <svg
            height={`${getSize()}px`}
            width={`${getSize()}px`}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
            className={clsx("animate-spin", props.className)}
        >
            <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
            />
            <path
                d="M15 8a7.002 7.002 0 00-7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    )
}