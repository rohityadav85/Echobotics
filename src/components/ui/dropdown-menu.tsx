'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Content
        ref={ref}
        className={cn('bg-popover text-popover-foreground rounded-md border p-2 shadow-md', className)}
        {...props}
    />
));

const DropdownMenuItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(
            'cursor-pointer rounded-sm px-2 py-1 text-sm outline-none focus:bg-accent focus:text-accent-foreground select-none',
            className
        )}
        {...props}
    />
));

DropdownMenuContent.displayName = 'DropdownMenuContent';
DropdownMenuItem.displayName = 'DropdownMenuItem';

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };
