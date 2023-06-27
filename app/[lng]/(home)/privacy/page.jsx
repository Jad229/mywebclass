import React from "react";
import Card from "@/components/Card";

export const metadata = {
  title: "Privacy",
  description: "Privacy Page",
};

function PrivacyPage() {
  return (
    <div className="my-24 flex flex-row items-center justify-center">
      <Card>
        <section
          className=" flex flex-col md:items-center space-y-3 lg:p-10 p-5"
          id="hero-text"
        >
          <div id="privacy-policy" className="space-y-2">
            <h1 className="text-xl md:text-4xl font-extrabold tracking-tight text-mwc-blue md:mb-1">
              Privacy Policy
            </h1>
            <p>
              <strong>Last Updated: </strong> 05/01/2023
            </p>

            <p>
              At MyWebClass, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines the types of information we collect, how we use
              it, and the steps we take to safeguard your data. By using our
              platform, you agree to the terms and conditions outlined in this
              Privacy Policy.
            </p>

            <h2 className="font-semibold text-2xl text-mwc-blue">
              1. Information We Collect
            </h2>
            <p>
              We collect two types of information: Personal Information and
              Non-Personal Information.
            </p>

            <h3>Personal Information:</h3>
            <ul className="list-disc ml-10">
              <li>Name</li>
              <li>Email address</li>
              <li>Billing information</li>
              <li>Telephone number</li>
              <li>User-generated content (e.g., comments, feedback, etc.)</li>
            </ul>

            <h3>Non-Personal Information:</h3>
            <ul className="list-disc ml-10">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Device information</li>
              <li>Pages viewed and time spent on our platform</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="font-semibold text-2xl text-mwc-blue">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-10">
              <li>Provide, maintain, and improve our platform and services</li>
              <li>Process transactions and send you related information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Personalize your experience on our platform</li>
              <li>
                Send promotional materials, newsletters, and other information
              </li>
              <li>
                Monitor and analyze trends and usage to improve our platform
              </li>
              <li>
                Detect, investigate, and prevent fraudulent transactions and
                other illegal activities
              </li>
              <li>
                Comply with legal obligations and enforce our terms and policies
              </li>
            </ul>

            <h2 className="font-semibold text-2xl text-mwc-blue">
              3. Information Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with trusted third-party
              service providers who assist us in operating our platform,
              conducting our business, or providing services to you, so long as
              those parties agree to keep this information confidential.
            </p>

            <p>
              We may also disclose your information if required by law or to
              enforce our site policies and protect our rights or the rights of
              others.
            </p>

            <h2 className="font-semibold text-2xl text-mwc-blue">
              4. Security
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. We use industry-standard encryption
              technologies and secure servers to protect your data from
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-semibold text-2xl text-mwc-blue">
              5. Third-Party Links
            </h2>
            <p>
              Our platform may contain links to external websites that are not
              operated by us. We have no control over the content or practices
              of these sites and cannot accept responsibility for their privacy
              policies. Please review the privacy policies of any third-party
              sites you visit.
            </p>

            <h2 className="font-semibold text-2xl text-mwc-blue">
              6. Children&apos;s Privacy
            </h2>
            <p>
              Our platform is not intended for use by children under the age of
              13. We do not knowingly collect personal information from children
              under 13. If we become aware that a child under 13 has provided us
              with personal information, we will take steps to remove such
              information and terminate the child&apos;s account.
            </p>

            <h2 className="font-semibold text-2xl text-mwc-blue">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date at the top of this
              policy. You are advised to review this Privacy Policy periodically
              for any changes.
            </p>

            <h2 className="font-semibold text-2xl text-mwc-blue">
              8. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our privacy practices, please contact us at:
            </p>
            <p>[Your Company Name]</p>
            <p>[Street Address]</p>
            <p>[Street Address]</p>
            <p>[Email Address]</p>
            <p>[Phone Number]</p>
          </div>
        </section>
      </Card>
    </div>
  );
}

export default PrivacyPage;
