import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

export function ButtonGroup({ ...props }: ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={clsx('flex group tulsa-button-group', props.className)} />;
}
