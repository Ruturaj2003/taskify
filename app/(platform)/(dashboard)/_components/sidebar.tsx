'use client';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';

interface SidebarProps {
  storageKey?: string;
}
// 2:19
export const Sidebar = ({ storageKey }: SidebarProps) => {
  return <div className="">Sidebar</div>;
};
