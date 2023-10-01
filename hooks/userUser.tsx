import { Prisma, User } from "@prisma/client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createContext, useEffect, useState } from "react";
import client from "@/lib/db";
import axios from "axios";
type userContextType = {
  user: User | null;
};

export const UserContext = createContext<userContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const UserContextProvider = (props: Props) => {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<User | null>(null);
  //   const createNewUser = async (
  //     uid: string,
  //     email: string,
  //     name?: string,
  //     imageUrl?: string
  //   ) => {
  //     try {
  //       const newUser = await client.user.create({
  //         data: {
  //           authId: uid,
  //           email: email,
  //           name: name,
  //           imageUrl: imageUrl,
  //         },
  //       });

  //       return newUser;
  //     } catch (error) {
  //       console.log(error);
  //       return null;
  //     }
  //   };
  //   const checkExistingUser = async (uid: string) => {
  //     try {
  //       const existingUser = await client.user.findUnique({
  //         where: {
  //           authId: uid,
  //         },
  //       });
  //       return existingUser || null;
  //     } catch (error) {
  //       console.log(error);
  //       return null;
  //     }
  //   };
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
      } else if(event === 'SIGNED_IN') {
        try{
          const data = {
            authId: session?.user.id,
            email: session?.user.email,
            name: session?.user.user_metadata["name"],
            imageUrl: session?.user.user_metadata["avatar_url"],
          };
          const res = await axios.post("/api/get-user", data);
          if (res.status === 200) {
            setUser(res.data);
          }
        }
        catch(error){
          setUser(null)
        }
        
      }
    });
  }, [supabase.auth]);

  const value = { user };

  return <UserContext.Provider value={value} {...props} />;
};
