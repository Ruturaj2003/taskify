'use client';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';
import { NavItem, Organization } from './nav-item';

interface SidebarProps {
  storageKey?: string;
}
// 2:19
export const Sidebar = ({ storageKey = 't-sidebar-state' }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  // This function was needed as it is what the accordion component expects
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <div className="p-4">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-6 w-[50%]" />
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
          {/* List Skeleton */}
          <div className="space-y-2">
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton key={index} className="h-8 w-full" />
            ))}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">WorkSpaces</span>
        <Button
          asChild
          type="button"
          size={'icon'}
          variant={'ghost'}
          className="ml-auto"
        >
          <Link href={'/select-org'}>
            <Plus className="h4 w-4"></Plus>
          </Link>
        </Button>
      </div>
      {/* List */}
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => {
          return (
            <NavItem
              key={organization.id}
              isActive={activeOrganization?.id === organization.id}
              isExpanded={expanded[organization.id]}
              onExpand={onExpand}
              organization={organization as Organization}
            ></NavItem>
          );
        })}
      </Accordion>
    </>
  );
};
