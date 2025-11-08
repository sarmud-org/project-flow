const Terms = () => {
  return (
    <div className="min-h-screen bg-background px-12">
      <div className="container max-w-4xl py-12 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing and using ProjectFlow, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not
              agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
            <p className="text-muted-foreground mb-3">
              Permission is granted to temporarily access ProjectFlow for
              personal or commercial use. This is the grant of a license, not a
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose without
                authorization
              </li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>
                Transfer the materials to another person or mirror on any other
                server
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
            <p className="text-muted-foreground">
              When you create an account with us, you must provide accurate,
              complete, and current information. Failure to do so constitutes a
              breach of the Terms, which may result in immediate termination of
              your account.
            </p>
            <p className="text-muted-foreground mt-3">
              You are responsible for safeguarding the password and for all
              activities that occur under your account. You agree not to
              disclose your password to any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Service Availability
            </h2>
            <p className="text-muted-foreground">
              We strive to maintain 99.9% uptime, but we do not guarantee that
              the service will be uninterrupted, timely, secure, or error-free.
              We reserve the right to modify or discontinue the service at any
              time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. Content and Intellectual Property
            </h2>
            <p className="text-muted-foreground">
              Your content remains yours. By uploading content to ProjectFlow,
              you grant us a license to store, process, and display it as
              necessary to provide the service. We do not claim ownership of
              your projects, tasks, or documents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Prohibited Uses</h2>
            <p className="text-muted-foreground mb-3">
              You may not use ProjectFlow:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>
                For any unlawful purpose or to solicit others to perform
                unlawful acts
              </li>
              <li>
                To violate any international, federal, provincial or state
                regulations, rules, laws, or local ordinances
              </li>
              <li>
                To infringe upon or violate our intellectual property rights or
                the intellectual property rights of others
              </li>
              <li>
                To harass, abuse, insult, harm, defame, slander, disparage,
                intimidate, or discriminate
              </li>
              <li>
                To upload or transmit viruses or any other type of malicious
                code
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms. Upon termination, your
              right to use the service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              8. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              In no event shall ProjectFlow, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will try to provide at least 30
              days&apos; notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              10. Contact Information
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at
              support@projectflow.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
