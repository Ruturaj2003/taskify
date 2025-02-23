'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const path = usePathname();

  const routes = [
    {
      label: 'Boards',
      icon: <Layout className="h-4 w-4 mr-2"></Layout>,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity ',
      icon: <Activity className="h-4 w-4 mr-2"></Activity>,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <Settings className="h-4 w-4 mr-2"></Settings>,
      href: `/organization/${organization.id}/setting`,
    },

    {
      label: 'Billing',
      icon: <CreditCard className="h-4 w-4 mr-2"></CreditCard>,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-sky-700/10  transition text-start no-underline hover:no-underline ',
          isActive && !isExpanded && 'bg-teal-600/10 text-sky-700   '
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="Org Image"
              className="rounded-sm object-cover"
            ></Image>
          </div>
          <span className="font-medium text-small">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((route) => {
          return (
            <Button
              key={route.href}
              onClick={() => onClick(route.href)}
              size={'sm'}
              className={cn(
                'w-full font-normal justify-start pl-10 mb-1',
                path === route.href && 'bg-amber-500/10 text-rose-700'
              )}
              variant={'ghost'}
            >
              {route.icon}
              {route.label}
            </Button>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};
