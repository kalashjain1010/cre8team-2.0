"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { Divide, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { UserContext } from "@/hooks/userUser";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useModal from "@/hooks/useModal";
import { type } from "os";

const Navbar = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { setOpen } = useModal();
  const SignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out");
    }
  };
  const userData = useContext(UserContext);
  const path = usePathname();
  const onClickDashboard = () => {
    if (userData?.user) {
      router.push("dashboard");
    } else {
      setOpen("auth-modal");
    }
  };
  return (
    <div className="flex flex-row items-center justify-between border border-[#ECECEC] rounded-[20px] px-6 py-4">
      <div className="flex flex-row items-center gap-x-10">
        <Image src={"/logo.svg"} alt="logo" width={150} height={40} />
        <div className="hidden md:flex flex-row items-center border border-slate-200 rounded-xl bg-[rgba(250, 250, 250, 0.50)] text-muted-foreground px-2 gap-x-1 ">
          <Search className="h-4 w-4" />
          <Input
            className="focus:outline-none bg-none active:outline-none border-none p-0"
            placeholder="search"
          />
        </div>
        <Link
          className={cn(
            path === "/projects" && "text-[#0671E0]",
            "hidden md:block text-[20px] font-medium"
          )}
          href={"/projects"}
        >
          Projects
        </Link>
        <p
          className={cn(
            path === "/dashboard" && "text-[#0671E0]",
            " hidden md:block text-[20px]  font-medium cursor-pointer"
          )}
          onClick={onClickDashboard}
        >
          Dashboard
        </p>
        <Link
          className={cn(
            path === "/about" && "text-[#0671E0]",
            " hidden md:block text-[20px]  font-medium"
          )}
          href={"/about"}
        >
          About
        </Link>
      </div>
      {userData?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="z-10" asChild>
            <div className="rounded-full w-[50px] h-[50px] hover:cursor-pointer relative">
              <Image
                src={userData.user.imageUrl || "/public/user.png"}
                alt="avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" className="space-y-2 p-2">
            <DropdownMenuItem className="bg-gray-50 hover:bg-blue-50 cursor-pointer hover:text-[#0671E0] text-[#0671E0]">
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator className="md:hidden" />
            <DropdownMenuItem className="md:hidden">Project</DropdownMenuItem>
            <DropdownMenuItem className="md:hidden">Dashboard</DropdownMenuItem>
            <DropdownMenuItem className="md:hidden">About</DropdownMenuItem>
            <DropdownMenuSeparator className="md:hidden" />

            <DropdownMenuItem
              onClick={() => SignOut()}
              className="bg-gray-50 hover:bg-rose-50 cursor-pointer hover:text-rose-600 text-rose-600"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div>
          <Button onClick={() => setOpen("auth-modal")}>Login</Button>
        </div>
      )}
    </div>
  );
};
export default Navbar;
