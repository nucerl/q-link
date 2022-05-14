import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import LoadableButton from 'components/LoadableButton';
import Link from 'next/link';

const demoUrl: string = process.env.NEXT_PUBLIC_DEMO_URL as string;

function Index() {
  const { t } = useTranslation('main');
  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="hero min-h-screen">
        <div className="hero-content w-full text-center mb-24">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-base-content ">
              <Link href="/">
                <a>
                  <span className="text-primary">Q.</span>Link
                </a>
              </Link>
            </h1>
            <p className="py-6 whitespace-pre-line">{t('description')}</p>
            <div className="flex w-full">
              <Link href="/links/new">
                <a className="btn btn-primary flex-1">{t('button.create')}</a>
              </Link>
              <Link href="/intro">
                <a className="btn flex-1 ml-3">{t('button.what')}</a>
              </Link>
              <Link href={demoUrl} passHref>
                <LoadableButton className="btn-outline flex-1 ml-3">
                  {t('button.demo')}
                </LoadableButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'ko',
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
};

export default Index;
