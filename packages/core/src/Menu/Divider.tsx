import clsx from "clsx";
import React from 'react';

export interface IDividerProps {
    isRowDivider?: boolean;
}

function Divider({ isRowDivider }: IDividerProps) {
    return (
        <li className={clsx("h-[1px] bg-gray-200 mr-2.5", isRowDivider ? "ml-[38px] my-2" : "ml-2.5 my-2")} />
    )
}

Divider.displayName = "Divider";

export { Divider };