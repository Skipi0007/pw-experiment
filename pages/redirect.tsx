import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * redirect - page witch is making redirection for 
 * avoiding bacend renders
 */
const redirect: NextPage = () => {
  const router = useRouter();
  const id = router.asPath.slice(10)
  
  useEffect(() => {
    if (true) {
      router.push(`/${id}`);
    }
  
  })
  return (
   <a></a>
  );
};

export default redirect;
