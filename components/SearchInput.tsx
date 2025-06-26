'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get(name: 'topic') || '';

    const [searchQuery, setSearchQuery] = useState(initialState: '');

  useEffect(() => {
    if(searchQuery) {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "topic",
            value: searchQuery,
        });
        router.push(newUrl);
    }
    }, [searchQuery, router, searchParams, pathname]);
  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fill">
      <Image src="/icons/search.svg" alt="search" width={15} height={15}/>
  
        <input placeholder="Search companions..."
        className="outline-none"
        value={searchQuery} 
        onchange={(e) => setSearchQuery(e.target.value)}/>
  
    </div>
  )
}

export default SearchInput
