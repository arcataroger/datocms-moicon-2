import { TestimonialRecord } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import { StructuredText } from 'react-datocms/structured-text';
import { Image as DatoImage } from 'react-datocms';
import { useState } from 'react';
import Highlighter from '@/components/Common/Highlighter';

type Props = {
  reviews: TestimonialRecord[];
  header: string;
  subheader: Maybe<string>;
};

const MinimalReviewCards = ({ reviews, header, subheader }: Props) => {
  return (
    <div className="bg-menugray py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-6">
        <h2 className="mb-8 lowercase text-3xl font-light !leading-tight text-h1title dark:text-white sm:text-4xl md:text-4xl">
          {header}
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-8">
          {reviews.map((review) => {
            return (
              <div
                key={review.id}
                className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray2splitbg px-8 py-6 md:gap-6"
              >
                <div className="max-w-md text-center text-white lg:text-lg">
                  <StructuredText
                    data={review.review.value}
                    renderNode={Highlighter}
                  />
                </div>

                <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                    <DatoImage
                      layout="fill"
                      objectFit="cover"
                      objectPosition="80% 20%"
                      data={review.reviewerPicture.responsiveImage}
                    />
                  </div>

                  <div>
                    <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                      {review.reviewerName}
                    </div>
                    <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                      {review.reviewerTitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MinimalReviewCards;
