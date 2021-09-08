import React, { forwardRef, FC } from 'react';

interface IPage {
    className?: string;
    title?: string
}

const Page: FC<IPage> = forwardRef(({
    className,
    children,
    title,
    ...rest
}, ref) => (
    <div
        className={className}
        ref={ref as React.RefObject<HTMLDivElement>}
        {...rest}
    >
        {children}
    </div>
));

export default Page;
