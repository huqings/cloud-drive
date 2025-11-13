import React from "react"

const Container = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="pt-[80px] pb-[160px]">
            {children}
        </div>
    )
}

export { Container }