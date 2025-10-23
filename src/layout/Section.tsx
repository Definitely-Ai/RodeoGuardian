import type { ReactNode } from 'react';

type ISectionProps = {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <section
    id={props.id}
    className={`mx-auto max-w-screen-lg px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl text-gray-600 md:px-20">
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </section>
);

export { Section };
