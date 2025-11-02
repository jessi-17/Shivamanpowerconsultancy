// import { Header } from "@radix-ui/react-accordion";
import React from "react";
import Header from "../src/components/own/Header";

const page = () => {
  return (
    <>
      <div id="mainWrapper">
        <Header />
        <div className="content-wrapper">
          <section>
          <div>success page</div>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;

