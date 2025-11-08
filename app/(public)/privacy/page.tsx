const Privacy = () => {
  return (
    <div className="min-h-screen bg-background px-12">
      <div className="container max-w-4xl py-12 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-3">
              We collect information to provide better services to our users.
              The types of information we collect include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>
                <strong>Account Information:</strong> Name, email address,
                password, and organization details
              </li>
              <li>
                <strong>Project Data:</strong> Projects, tasks, documents, and
                team collaboration data
              </li>
              <li>
                <strong>Usage Information:</strong> How you interact with our
                services, including pages visited and features used
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, IP address,
                and device identifiers
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>
                Respond to comments, questions, and customer service requests
              </li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>
                Detect, prevent, and address technical issues and fraudulent
                activity
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. Data Storage and Security
            </h2>
            <p className="text-muted-foreground">
              We take security seriously and implement appropriate technical and
              organizational measures to protect your personal data against
              unauthorized or unlawful processing, accidental loss, destruction,
              or damage.
            </p>
            <p className="text-muted-foreground mt-3">
              Your data is stored on secure servers with encryption at rest and
              in transit. We use industry-standard SSL/TLS protocols to protect
              data transmission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-muted-foreground mb-3">
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>
                <strong>With your consent:</strong> When you explicitly agree to
                share information
              </li>
              <li>
                <strong>Team members:</strong> Data you share within your
                organization is visible to team members
              </li>
              <li>
                <strong>Service providers:</strong> With vendors who perform
                services on our behalf
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business transfers:</strong> In connection with a
                merger, acquisition, or sale of assets
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. Your Rights and Choices
            </h2>
            <p className="text-muted-foreground mb-3">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data
              </li>
              <li>
                <strong>Export:</strong> Export your project data in a portable
                format
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. Cookies and Tracking
            </h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to track activity
              on our service and hold certain information. Cookies are files
              with small amounts of data that are stored on your device. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              7. Third-Party Services
            </h2>
            <p className="text-muted-foreground">
              Our service may contain links to third-party websites or services
              that are not owned or controlled by ProjectFlow. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-muted-foreground">
              Our service is not directed to individuals under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you become aware that a child has provided us with personal
              data, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              9. International Data Transfers
            </h2>
            <p className="text-muted-foreground">
              Your information may be transferred to and maintained on servers
              located outside of your state, province, country, or other
              governmental jurisdiction. We ensure appropriate safeguards are in
              place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-muted-foreground mt-3">
              Email: privacy@projectflow.com
              <br />
              Address: 123 Project Street, Suite 100, Tech City, TC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
