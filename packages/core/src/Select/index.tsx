import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { Button } from '../Button';

interface ISelect extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {

}

function _Select({}: ISelect) {
    return (
        <Button />
    )
}