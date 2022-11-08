import clsx from "clsx";

export interface IDividerProps {
    isRowDivider?: boolean;
}

export function Divider({ isRowDivider }: IDividerProps) {
    return (
        <li className={clsx("h-[1px] bg-gray-200", isRowDivider ? "ml-[38px]" : "ml-2.5 my-2")} />
    )
}