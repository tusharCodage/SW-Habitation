import Image from "next/image";
import { useBlogs } from "../../hooks/useBlogs";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import NextImage from "../NextImage";

const Search = () => {
  const router = useRouter();
  const { setSearchValue } = useMemo(() => useBlogs(), []);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchInput = useRef();

  const [opneInput, setOpenInput] = useState(false);

  function handleSearchInput(e) {
    setOpenInput(true);
    setSearchValue(searchTerm
    .trim()
    .replace(/\s+/g, "")
    .split(/ +/)
    .join(" ")
    .toLowerCase());
    e.preventDefault();
  }

  useEffect(() => {
    if (searchTerm == "") {
      setSearchValue("");
    }
  }, [searchTerm]);

  return (
    <>
      {!router?.query?.slug && !router?.pathname?.includes("/thankyou") && !router?.pathname?.includes("/privacy-policy") && !router?.pathname?.includes("/contact") && (
        <div className={`searchWrap ${opneInput && "active"}`}>
          <form onSubmit={handleSearchInput}>
            <input
              type="search"
              placeholder="Search"
              onChange={handleChange}
              value={searchTerm}
              ref={searchInput}
              onBlur={() => setOpenInput(false)}
            />
            <NextImage
              src="/assets/images/search.webp"
              width={500}
              height={500}
              className={`search`}
              alt="search"
              onClick={(e) => {
                !router.query.slug && handleSearchInput(e);
                searchInput?.current?.focus();
              }}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default memo(Search);
