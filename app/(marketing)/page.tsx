import { Button } from '@/components/ui/button';
import { Medal } from 'lucide-react';
import Link from 'next/link';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2',
});

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm bg-amber-100 text-amber-700 p-4 rounded-full capitalize ">
          <Medal className="h-6 w-6 mr-2"></Medal>
          Top G Task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Squad up. Get things done
        </h1>
        <div
          className="text-3xl md:text-6xl
        bg-gradient-to-r from-amber-600 to-red-500 px-4 p-2 pb-4 rounded-md w-fit text-white 
        "
        >
          Power through tasks together.
        </div>
      </div>
      <div
        className={cn(
          'text-sm md:text-xl text-neutral-500 mt-4 max-w-xs md:w-2xl text-center mx-auto',
          textFont.className
        )}
      >
        No distractions, no excuses—just pure execution. Taskify is built for
        doers like you.
      </div>
      <Button className="mt-6 " size={'lg'} asChild>
        <Link href={'/sign-up'}>Get Taskify for Free!</Link>
      </Button>
    </div>
  );
};
export default MarketingPage;
