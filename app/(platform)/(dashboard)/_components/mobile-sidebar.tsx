'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sidebar } from './sidebar';

const MobileSidebar = () => {
  const { onOpen, onClose, isOpen } = useMobileSidebar();

  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // manually calling on Close is avoided
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Always keep Component Returns at last
  if (!isMounted) {
    return <h1> Loading</h1>;
  }
  return (
    <>
      <Button onClick={onOpen} className="block md:hidden" variant={'ghost'}>
        <Menu className="h-4 w-4 mr-2 "></Menu>
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side={'left'} className="p2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state"></Sidebar>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default MobileSidebar;
