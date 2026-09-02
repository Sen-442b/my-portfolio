"use client";

import Image from "next/image";
import { socialLinks } from "./config";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("floatingButton", {
        calLink: "shubhendu-sen/15min",
        config: { layout: "month_view", theme: "dark" },
        buttonPosition: "bottom-right",
        buttonText: "Let's Talk",
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section>
      <a href={socialLinks.bluesky} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
       GRC Professional | Risk, Compliance & Controls.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a dual-qualified legal and technology professional specializing in
          data privacy and enterprise GRC. With a background spanning full-stack
          engineering and cyber law, I bridge the gap between regulatory
          requirements and technical implementation — building ISMS programs
          that actually work in practice, not just on paper.
        </p>

        <div>
          <h2 className="text-3xl font-bold mb-4">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold">GRC</h3>
              <p className="text-gray-600">
                ISO/IEC 27001 ISMS design, gap analysis, risk assessment &
                treatment, Statement of Applicability, and SOC 2 readiness.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Data Privacy</h3>
              <p className="text-gray-600">
                GDPR and DPDP Act 2023 advisory, privacy-by-design reviews, and
                data subject rights implementation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Security Frameworks</h3>
              <p className="text-gray-600">
        NIST CSF 2.0, ITGC, CMMI, control mapping, risk assessment, and compliance activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
