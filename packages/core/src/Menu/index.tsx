import clsx from "clsx"
import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Item } from "./Item"
import { Divider } from "./Divider"

export interface IMenuProps extends ComponentPropsWithoutRef<"ul"> {

}

const _Menu = forwardRef<HTMLUListElement, IMenuProps>((
    {
        ...props
    },
    ref
) => {
    return (
        <ul
            role="list"
            {...props}
            className={clsx("m-0 list-none py-2 max-w-xs", props.className)}
            ref={ref}
        />
    )
})

export const Menu = Object.assign(_Menu, {
    Item,
    Divider
})
