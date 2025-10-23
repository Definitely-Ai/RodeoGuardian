import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '../utils/AppConfig';

const trimTrailingSlash = (value?: string) => {
  if (!value) {
    return undefined;
  }

  return value.endsWith('/') ? value.slice(0, -1) : value;
};

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  const siteUrl = trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL);
  const currentPath = router.asPath.split('?')[0];

  let computedCanonical = props.canonical;
  if (!computedCanonical && siteUrl) {
    computedCanonical = `${siteUrl}${currentPath}`;
  }

  const ogImageUrl = props.ogImage ?? AppConfig.ogImage;
  let ogImageAbsolute = ogImageUrl;
  if (!ogImageUrl.startsWith('http')) {
    if (siteUrl) {
      ogImageAbsolute = `${siteUrl}${ogImageUrl}`;
    } else {
      ogImageAbsolute = `${router.basePath}${ogImageUrl}`;
    }
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${router.basePath}/favicon.svg`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={computedCanonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: computedCanonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: ogImageAbsolute,
              width: 1200,
              height: 630,
              alt: props.title,
            },
          ],
        }}
        twitter={{
          cardType: AppConfig.twitterCard,
        }}
      />
    </>
  );
};

export { Meta };
