'use client';

import type { ButtonProps } from '../ui/button';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

interface ITooltipBotton extends ButtonProps {
    wrapperClassName?: string;
    tooltipContant?: string;
    children?: React.ReactNode;
}

export const TooltipButton = ({
    wrapperClassName,
    tooltipContant,
    children,
    variant,
    onClick,
    className,
    disabled,
    ...props
}: ITooltipBotton) => {
    return (
        <TooltipProvider disableHoverableContent={!tooltipContant} delayDuration={100}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span className={wrapperClassName}>
                        <Button disabled={disabled} className={className} variant={variant} onClick={onClick}>
                            {children}
                        </Button>
                    </span>
                </TooltipTrigger>
                {tooltipContant && (
                    <TooltipContent className="border-none text-main-green">
                        <p>{tooltipContant}</p>
                    </TooltipContent>
                )}
            </Tooltip>
        </TooltipProvider>
    );
};
