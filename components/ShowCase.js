import React from "react";
import { Title } from "./common/Title";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const Om = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Selected cases" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Om;
