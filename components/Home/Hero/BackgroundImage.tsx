import { ButtonRecord, FileField } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

type Props = {
  heroTitle: string;
  heroSubtitle: Maybe<string>;
  buttons: ButtonRecord[];
  image: Maybe<FileField> | undefined;
};

const BackgroundImageHero = ({
  heroTitle,
  heroSubtitle,
  buttons,
  image,
}: Props) => {
  return (
    <div
      className="mt-12 h-[24rem] w-full bg-cover bg-center object-cover bg-custom-gradient">
      <div className="flex h-full w-full flex-col items-start justify-center px-8 lg:px-64 bg-center object-cover absolute top-0 z-10"
           style={{
             backgroundSize: 'contain',
             backgroundRepeat: 'no-repeat',
             backgroundImage: `url('${image?.responsiveImage?.src}')`,
           }}
      >
        <div className="flex flex-col gap-6 relative bottom-24">
          <h1 className="text-7-5xl font-medium text-hero custom-filter tracking-widester relative top-10">{heroTitle}</h1>
          <div className="leading-relaxed text-gray-300 xl:text-3xl max-w-md lowercase">
            <ReactMarkdown>{heroSubtitle || ''}</ReactMarkdown>
          </div>
          <div className="flex gap-4">
            {buttons.map((button) => {
              const primary =
                'inline-block rounded-lg bg-primary/90 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base';
              const secondary =
                'inline-block rounded-lg bg-secondarybtn px-8 py-3 text-center text-sm font-semibold text-h1title outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base';
              return (
                <a
                  key={button.id}
                  className={button.primary ? primary : secondary}
                  href={button.url || '#'}
                >
                  {button.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImageHero;
