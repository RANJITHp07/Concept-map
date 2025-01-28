import React from "react";
import ListPage from "./components/ListPage";
import Header from "@repo/ui/components/Header";

function page() {
  return (
    <>
      <section className="px-[10px] md:px-[30px] lg:px-[60px]">
        <Header />
        <ListPage />
      </section>
    </>
  );
}

export default page;
