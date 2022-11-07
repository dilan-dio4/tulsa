import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes, useRef } from "react";
import { nanoid } from 'nanoid'

interface IFormControl extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    status?: "neutral" | "success" | "error";
    label: string;
    caption: string;
    id?: string;
}

function _FormControl({
    status = "neutral",
    label,
    caption,
    id,
    ...props
}: IFormControl) {
    const formId = useRef<string>(id || `form-control-${nanoid()}`);

    return (
        <div className={clsx("flex flex-col", props.className)}>

        </div>
    )
}
