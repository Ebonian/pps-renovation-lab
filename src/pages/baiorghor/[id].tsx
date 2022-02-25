import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
        ? process.env.NEXT_PUBLIC_PRODUCTION_API
        : process.env.NEXT_PUBLIC_DEVELOPMENT_API
    }/baiorghor/get`
  );
  const data = await res.json();

  const paths = data.map((data: any) => {
    return {
      params: { id: data._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
        ? process.env.NEXT_PUBLIC_PRODUCTION_API
        : process.env.NEXT_PUBLIC_DEVELOPMENT_API
    }/baiorghor/get/${id}`
  );
  const data = await res.json();

  return {
    props: { document: data },
  };
};

interface Props {
  document: any;
}

const EachBaiorghor: NextPage<Props> = ({ document }) => {
  // copy function
  const [copyState, setCopyState] = useState("not copy");
  const copyHandler = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopyState("copied");
    setTimeout(() => {
      setCopyState("not copy");
    }, 2500);
  };

  return (
    <div>
      <p>{window.location.href}</p>
      <p onClick={copyHandler}>copy!</p>
      <p>{document.members}</p>
    </div>
  );
};

export default EachBaiorghor;
