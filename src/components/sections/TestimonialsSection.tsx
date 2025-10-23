import { motion } from 'framer-motion';

import { siteContent } from '../../content/site';
import { FadeIn } from '../animations/FadeIn';

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      <div className="section-container">
        <FadeIn className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Trusted by Industry Professionals
          </h2>
          <p className="text-xl text-gray-600">
            Real results from stock contractors, veterinarians, and insurance
            partners
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {siteContent.testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.author}
              delay={index * 0.15}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="text-primary-200"
                  >
                    <path
                      d="M9.5 19.5C9.5 14.5 12 10 17 7.5L18.5 9.5C15.5 11.5 14 14 14 17H18V26.5H9.5V19.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M23 19.5C23 14.5 25.5 10 30.5 7.5L32 9.5C29 11.5 27.5 14 27.5 17H31.5V26.5H23V19.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Quote */}
                <p className="italic text-lg leading-relaxed text-gray-700 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                  {/* Avatar placeholder */}
                  <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-accent-400">
                    <span className="text-lg font-bold text-white">
                      {testimonial.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
