import Link from 'next/link';

import { Background } from '../background/Background';
import { siteContent } from '../content/site';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { HeaderNav } from '../templates/HeaderNav';
import { AppConfig } from '../utils/AppConfig';

const Contact = () => (
  <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
    <Meta
      title={`Contact ${AppConfig.site_name}`}
      description={siteContent.contact.description}
    />
    <header className="bg-gray-100">
      <Section yPadding="py-6">
        <HeaderNav />
      </Section>
    </header>
    <main className="grow">
      <Background color="bg-gray-100">
        <Section yPadding="py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              {siteContent.contact.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {siteContent.contact.description}
            </p>
            <form
              className="mt-10 space-y-6"
              action={siteContent.contact.placeholderEndpoint}
              method="post"
            >
              {/* Replace the placeholder endpoint above with your production form handler. */}
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col text-sm font-medium text-gray-700">
                  Full name
                  <input
                    className="mt-2 rounded-md border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-gray-700">
                  Company or organization
                  <input
                    className="mt-2 rounded-md border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    required
                  />
                </label>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col text-sm font-medium text-gray-700">
                  Email
                  <input
                    className="mt-2 rounded-md border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-gray-700">
                  Phone (optional)
                  <input
                    className="mt-2 rounded-md border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                  />
                </label>
              </div>
              <label className="flex flex-col text-sm font-medium text-gray-700">
                What would you like to explore?
                <textarea
                  className="mt-2 min-h-[140px] rounded-md border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  name="message"
                  required
                />
              </label>
              <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
                <button
                  className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                  type="submit"
                >
                  {siteContent.contact.submitLabel}
                </button>
                <Link
                  className="text-sm font-medium text-primary-700 transition hover:text-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                  href={siteContent.contact.mailto}
                >
                  Or email us directly
                </Link>
              </div>
            </form>
          </div>
        </Section>
      </Background>
    </main>
    <Footer />
  </div>
);

export default Contact;
