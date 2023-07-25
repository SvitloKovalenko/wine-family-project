import { FC, PropsWithChildren } from "react";
import { IMeta } from "./meta.interface";
import Head from "next/head";

const getTitle = (title: string) => `${title} | WINE`;

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta name='description' content={description} />
          </>
        ) : (
          <meta name='robots' content='noindex, nofollow' />
        )}
      </Head>
    </>
  );
};

export default Meta;
