"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useContext } from 'react';
import { UserContext } from '@/hooks/userUser';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useModal from '@/hooks/useModal';

const Navbar = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { setOpen } = useModal();
  const SignOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.refresh();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Logged out');
    }
  };
  const userData = useContext(UserContext);
  const path = usePathname();
  const onClickDashboard = () => {
    if (userData?.user) {
      router.push('dashboard');
    } else {
      setOpen('auth-modal');
    }
  };

  // State to track whether the user has scrolled
  const [hasScrolled, setHasScrolled] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        hasScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''
      } bg-white border border-[#ECECEC] rounded-[20px] px-6 py-4 transition-all`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-10">
          <Image
            onClick={() => router.push('/projects')}
            src={'/logo.svg'}
            alt="logo"
            width={150}
            height={40}
            className="cursor-pointer"
          />
          <div className="hidden md:flex flex-row items-center border border-slate-200 rounded-xl bg-[rgba(250, 250, 250, 0.50)] text-muted-foreground px-2 gap-x-1 ">
            <Search className="h-4 w-4" />
            <Input
              className="focus:outline-none bg-none active:outline-none border-none p-0 "
              placeholder="search"
              disabled={path === '/about'}
            />
          </div>
          <Link
            className={cn(
              path === '/projects' && 'text-[#0671E0]',
              'hidden md:block text-[20px] font-medium hover:opacity-80 transition'
            )}
            href="/projects"
          >
            Projects
          </Link>
          <p
            className={cn(
              path === '/dashboard' && 'text-[#0671E0]',
              ' hidden md:block text-[20px]  font-medium cursor-pointer hover:opacity-80 transition'
            )}
            onClick={onClickDashboard}
          >
            Dashboard
          </p>
          <Link
            className={cn(
              path === '/about' && 'text-[#0671E0]',
              ' hidden md:block text-[20px]  font-medium hover:opacity-80 transition'
            )}
            href="/about"
          >
            About
          </Link>
        </div>
        {userData?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="z-10" asChild>
              <div className="rounded-full w-[50px] h-[50px] hover:cursor-pointer relative">
                <Image
                  src={userData.user.imageUrl || '/public/user.png'}
                  alt="avatar"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" className="space-y-2 p-2">
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuSeparator className="md:hidden" />
              <DropdownMenuItem className="md:hidden cursor-pointer">Project</DropdownMenuItem>
              <DropdownMenuItem className="md:hidden cursor-pointer">Dashboard</DropdownMenuItem>
              <DropdownMenuItem className="md:hidden cursor-pointer">About</DropdownMenuItem>
              <DropdownMenuSeparator className="md:hidden" />
              <DropdownMenuItem onClick={() => SignOut()} className="cursor-pointer">
                <p className="text-rose-600">Logout</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div>
            <Button onClick={() => setOpen('auth-modal')} className="bg-[#0671E0] text-white">
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
