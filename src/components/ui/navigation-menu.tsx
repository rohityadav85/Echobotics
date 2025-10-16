'use client';

import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';

const NavigationMenu = NavigationMenuPrimitive.Root;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;
const NavigationMenuContent = NavigationMenuPrimitive.Content;

const NavigationMenuLink = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Link>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Link ref={ref} className={cn('px-3 py-2 text-sm', className)} {...props} />
));

NavigationMenuLink.displayName = 'NavigationMenuLink';

export {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink
};
