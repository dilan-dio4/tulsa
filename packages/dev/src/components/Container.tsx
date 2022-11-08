import React from "react"

interface IContainer {
    children: React.ReactElement | React.ReactElement[];
}

export default function Container({ children }: IContainer) {
    return (
        <div className="not-prose my-4">
            {children}
        </div>
    )
}