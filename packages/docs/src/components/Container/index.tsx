import React from "react"
import clsx from "clsx"

export default function Container({ children, components, vertical }) {
    return (
        <div className="mt-4 mb-14">
            <div
                className={clsx(
                    "grid gap-4 py-10 px-8 rounded-t-lg border z-20 relative bg-white items-center",
                    vertical ? "grid-rows-1" : "grid-flow-col auto-cols-max"
                )}
            >
                {components}
            </div>
            <div className="-mt-4 z-10 [&>.language-jsx]:pt-5 [&>.language-jsx]:rounded-t-0 [&>.language-jsx]:shadow-none [&>.language-jsx]:border">
                {children}
            </div>
        </div>
    )
}