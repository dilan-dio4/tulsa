import clsx from 'clsx';
import { DetailedHTMLProps, FC, HTMLProps, PropsWithChildren, SelectHTMLAttributes } from 'react';
import { Button, IButtonProps } from '../Button';

interface ISelect extends Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "size"> {
}

function _Select({
    placeholder,
    required,
    children,
    ...props
}: ISelect & IButtonProps<"select">) {
    return (
        <Button
            as="select"
            defaultValue={placeholder}
            {...props}
            className={clsx(
                "appearance-none", 
                "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9J25vbmUnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggc3Ryb2tlPScjNkI3MjgwJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMS41JyBkPSdtNiA4IDQgNCA0LTQnLz48L3N2Zz4=')]",
                "bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] pr-10",
                props.className
            )}
        >
            {placeholder && (
                <option value="" disabled={required} hidden={required}>
                    {placeholder}
                </option>
            )}
            {children}
        </Button>
    )
}

const Option: FC<PropsWithChildren<HTMLProps<HTMLOptionElement> & { value: string }>> = props => (
    <option {...props} />
)

const OptGroup: FC<PropsWithChildren<HTMLProps<HTMLOptGroupElement>>> = props => (
    <optgroup {...props} />
)

export const Select = Object.assign(_Select, {
    Option,
    OptGroup
})