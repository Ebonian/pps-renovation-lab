import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://renovation-lab-web-server.herokuapp.com/documents/sync"
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

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(
    "https://renovation-lab-web-server.herokuapp.com/document/" + id
  );
  const data = await res.json();

  return {
    props: { document: data },
  };
};

interface Props {
  document: any;
}

const Document: NextPage<Props> = ({ document }) => {
  return (
    <div>
      <h1>Document Page of: {document._id}</h1>
    </div>
  );
};

export default Document;
