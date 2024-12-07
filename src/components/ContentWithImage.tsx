import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ContentWithImageProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  imageOnRight?: boolean;
}

export const ContentWithImage: React.FC<ContentWithImageProps> = ({
  title,
  description,
  imageUrl,
  features,
  imageOnRight = false
}) => {
  const content = (
    <div className="flex-1">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const image = (
    <div className="flex-1">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg shadow-lg w-full h-full object-cover"
      />
    </div>
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {imageOnRight ? (
            <>
              {content}
              {image}
            </>
          ) : (
            <>
              {image}
              {content}
            </>
          )}
        </div>
      </div>
    </section>
  );
};