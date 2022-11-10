import React from 'react';

interface IPropsTable {
    data: {
        name: string;
        isRequired?: boolean;
        type: string;
        description: string;
        default: string;
    }[]
}

export default function PropsTable({ data }: IPropsTable) {
    return (
        <div className='max-w-full overflow-auto'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(ele => (
                        <tr key={ele.name}>
                            <td>
                                {ele.isRequired ? (
                                    <strong><code>{ele.name}</code>*</strong>
                                ) :
                                    (
                                        <code>{ele.name}</code>
                                    )}
                            </td>
                            <td><code>{ele.type}</code></td>
                            <td>{ele.description}</td>
                            <td>{ele.default}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}