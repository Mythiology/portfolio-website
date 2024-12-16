import { Suspense, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Providers } from '@providers/Providers';
import Loading from './loading';
import '../globals.css';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale = 'en' } }: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('Index.title'),
    description: t('Index.description'),
    keywords: t('Index.keywords'),
    openGraph: {
      title: t('Index.title'),
      description: t('Index.description'),
      images: [
        {
          url: '',
        },
      ],
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const messages = await getMessages();
  return (
    <html lang={params.locale}>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
