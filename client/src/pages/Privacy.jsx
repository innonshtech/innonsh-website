import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div id="privacyView">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#050507] text-white">
        {/* subtle background */}
        <div className="absolute inset-0 bg-grid-fine mask-radial opacity-50"></div>
        <div className="orb" style={{ top: '-180px', left: '30%', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(139,92,246,0.20), transparent 60%)' }}></div>
        <div className="orb" style={{ bottom: '-120px', right: '-80px', width: '440px', height: '440px', background: 'radial-gradient(circle, rgba(34,211,238,0.14), transparent 60%)' }}></div>

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">

          <Link to="/" className="back-to-home inline-flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition mb-10 group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="transition-transform group-hover:-translate-x-0.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to home
          </Link>

          <div className="chip mb-6"><span className="chip-dot"></span> Legal</div>
          <h1 className="display text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02]">
            Privacy <span className="serif-italic glow-accent">Policy</span>
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-white/45">
            <span>Effective date: 9 June 2026</span>
            <span className="hidden sm:inline text-white/25">·</span>
            <span>Last updated: 9 June 2026</span>
          </div>

          <article className="prose-doc mt-14">

            <h2>Introduction</h2>
            <p>Innonsh Technologies ("Innonsh," "we," "us," or "our") respects your privacy and is committed to protecting the personal data we collect from you. This Privacy Policy explains what information we collect when you visit our website at <strong>innonsh.com</strong> (the "Site"), how we use it, who we share it with, and the choices and rights you have.</p>
            <p>This Policy applies only to the Site. It does <strong>not</strong> apply to our products (such as Aaharly and Abhinnati) or to our ERP platforms (Construction ERP, Doctor ERP, HRM ERP, PrePrimary School ERP, and Salon Management ERP), each of which has its own privacy notice. Where Innonsh acts as a data processor on behalf of a business customer using one of our ERP platforms, that customer's privacy notice and our Data Processing Agreement govern the handling of end-user data.</p>
            <p>If you do not agree with this Policy, please do not use the Site.</p>

            <h2>1. Who We Are</h2>
            <p>The data controller for the Site is:</p>
            <p><strong>Innonsh Technologies</strong><br/>Pune, Maharashtra, India<br/>Email: <a href="mailto:info@innonsh.com">info@innonsh.com</a></p>
            <p>If you have any questions about this Policy or about how we handle your personal data, please write to us at the email address above.</p>

            <h2>2. Information We Collect</h2>
            <p>We collect personal data in three ways: information you give us directly, information we collect automatically when you visit the Site, and information we receive from third parties.</p>

            <h3>2.1 Information you give us directly</h3>
            <ul>
              <li><strong>Contact enquiries.</strong> When you write to us at info@innonsh.com, use the contact options on the Site, or otherwise initiate a conversation with our team, we receive the information you choose to share: typically your name, email address, company, phone number (if you provide it), and the contents of your message.</li>
              <li><strong>Newsletter sign-up.</strong> When you subscribe to our newsletter, we collect your email address.</li>
              <li><strong>Service engagements.</strong> If you become a prospective or active client, we collect business contact details, information about your project, and any documents, designs, code, or materials you share with us during the engagement.</li>
            </ul>

            <h3>2.2 Information we collect automatically</h3>
            <p>When you visit the Site, our servers and the third-party services we use to operate the Site may automatically log:</p>
            <ul>
              <li>IP address and approximate location derived from it</li>
              <li>Browser type and version, device type, and operating system</li>
              <li>Pages visited, the time of your visit, the referring URL, and the URL you go to next</li>
              <li>Performance and error data needed to keep the Site secure and reliable</li>
            </ul>
            <p>We currently do not set any cookies of our own on the Site. If we introduce analytics, advertising, or similar cookies in the future, we will update this Policy and seek your consent where required.</p>

            <h3>2.3 Information from third parties</h3>
            <p>If you reach us through a referral, a public form, or a social platform (such as LinkedIn), we may receive limited information about you from that source, such as your name, role, and contact details.</p>
            <p>We do not collect or process <strong>sensitive personal data</strong> (such as health, biometric, financial, or government identifiers) through this Site. Sensitive data is only collected, where strictly necessary, through specific product or ERP interfaces under separate notices.</p>

            <h2>3. How We Use Your Information</h2>
            <p>We use personal data only for the purposes for which it was collected, including to:</p>
            <ul>
              <li>Respond to your enquiries and requests</li>
              <li>Send you our newsletter when you have asked for it</li>
              <li>Provide, manage, and deliver our services to clients</li>
              <li>Issue invoices, take payment, and meet our accounting and tax obligations</li>
              <li>Keep the Site secure, stable, and free of fraud and abuse</li>
              <li>Understand how the Site is used so we can improve it</li>
              <li>Communicate operational updates, for example, changes to this Policy or our terms</li>
              <li>Comply with our legal obligations and respond to lawful requests from authorities</li>
            </ul>
            <p>We do <strong>not</strong> use your personal data for automated decision-making or profiling that produces legal or similarly significant effects.</p>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process personal data only when we have a lawful basis to do so. Depending on the context, that basis is:</p>
            <ul>
              <li><strong>Your consent.</strong> For example, when you sign up for our newsletter. You can withdraw this consent at any time.</li>
              <li><strong>Performance of a contract.</strong> When we are delivering services to you or to your organisation.</li>
              <li><strong>Legitimate interests.</strong> For example, to keep the Site secure, to understand basic site usage, and to communicate with prospective clients who have made contact with us. We weigh these interests against your rights and only proceed where it is reasonable to do so.</li>
              <li><strong>Legal obligation.</strong> For example, to maintain financial records or to respond to lawful requests.</li>
            </ul>

            <h2>5. Cookies and Third-Party Scripts</h2>
            <p>The Site does not currently set cookies of its own. To deliver the Site, however, we load resources from the following third parties, which may receive your IP address, user agent, and basic request information when your browser fetches those resources:</p>
            <ul>
              <li><strong>Google Fonts</strong>, to serve typefaces</li>
              <li><strong>Fontshare</strong> (Indian Type Foundry), to serve typefaces</li>
              <li><strong>cdnjs</strong> (Cloudflare), to serve animation libraries</li>
              <li><strong>jsDelivr</strong>, to serve a smooth-scrolling library</li>
              <li><strong>Tailwind CDN</strong>, to serve styling utilities</li>
            </ul>
            <p>Each of these providers operates under its own privacy policy. We use them only to render the Site and not to track you. If we introduce analytics or marketing technologies (such as Google Analytics, Meta Pixel, or similar) in the future, we will update this Policy, surface a cookie banner where required, and seek your consent before activating non-essential cookies.</p>
            <p>You can control cookies through your browser settings and clear them at any time.</p>

            <h2>6. Sharing Your Information</h2>
            <p>We do <strong>not sell</strong> your personal data to anyone.</p>
            <p>We share personal data only with the following categories of recipients, and only to the extent necessary:</p>
            <ul>
              <li><strong>Service providers</strong> who help us operate the Site and our business, including hosting and content-delivery providers, email and productivity software, customer-communications and CRM platforms, newsletter-delivery services, and accounting and invoicing tools.</li>
              <li><strong>Professional advisors</strong>, including our lawyers, auditors, and accountants, where required.</li>
              <li><strong>Authorities and third parties</strong>, when we are required to do so by law, court order, or other legal process, or where necessary to protect our rights, safety, or property.</li>
              <li><strong>Successors</strong>, if Innonsh is involved in a merger, acquisition, or asset transfer, in which case personal data may transfer to the successor entity, subject to the protections of this Policy.</li>
            </ul>
            <p>We require all our service providers to handle personal data with appropriate confidentiality and security safeguards.</p>

            <h2>7. International Data Transfers</h2>
            <p>Some of our service providers (for example, hosting, email, and CDN providers) may store or process personal data outside of India. Where this happens, we rely on the providers' contractual safeguards and on applicable lawful transfer mechanisms. We will update this Policy if the Central Government of India notifies specific restrictions on transfers under the DPDP Act.</p>

            <h2>8. How Long We Keep Your Information</h2>
            <p>We keep personal data only as long as we need it for the purposes set out in this Policy, or as required by law. Typical retention periods are:</p>
            <ul>
              <li><strong>Contact form and email enquiries:</strong> up to 24 months from your last interaction, unless we are in an active conversation or commercial relationship.</li>
              <li><strong>Newsletter subscribers:</strong> until you unsubscribe, after which we keep a record of your unsubscribe request to honour it.</li>
              <li><strong>Server and security logs:</strong> up to 12 months.</li>
              <li><strong>Client engagement records and contracts:</strong> for the duration of the engagement and for up to 8 years thereafter to meet tax, accounting, and legal obligations.</li>
            </ul>
            <p>After these periods, we delete or anonymise the data.</p>

            <h2>9. How We Protect Your Information</h2>
            <p>We use reasonable technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction. These measures include:</p>
            <ul>
              <li>HTTPS encryption for data in transit between your browser and our servers</li>
              <li>Access controls and authentication on the systems where personal data is stored</li>
              <li>Restricting access to personal data on a need-to-know basis within our team</li>
              <li>Periodic reviews of our security practices and providers</li>
              <li>Confidentiality obligations on every team member and contractor who handles data</li>
            </ul>
            <p>No method of transmission or storage is perfectly secure. While we work hard to protect your information, we cannot guarantee absolute security.</p>

            <h2>10. Your Rights</h2>
            <p>Subject to applicable law, you have the following rights in relation to your personal data:</p>
            <ul>
              <li><strong>Access.</strong> To know what personal data we hold about you and to receive a copy.</li>
              <li><strong>Correction.</strong> To ask us to correct inaccurate or incomplete data.</li>
              <li><strong>Erasure.</strong> To ask us to delete your personal data, subject to our legal retention obligations.</li>
              <li><strong>Withdrawal of consent.</strong> Where we rely on your consent, you can withdraw it at any time.</li>
              <li><strong>Restriction and objection.</strong> To ask us to limit how we use your data, or to object to processing based on legitimate interests.</li>
              <li><strong>Portability.</strong> To receive certain data in a structured, commonly used format.</li>
              <li><strong>Grievance redressal.</strong> To escalate any unresolved concern through our Grievance Officer (see Section 13).</li>
              <li><strong>Complaint to a regulator.</strong> Under the DPDP Act, you may also lodge a complaint with the Data Protection Board of India.</li>
            </ul>
            <p>To exercise any of these rights, please write to us at <a href="mailto:info@innonsh.com">info@innonsh.com</a>. We will respond within 30 days of receiving your request, in line with applicable law. We may need to verify your identity before acting on a request.</p>

            <h2>11. Children's Privacy</h2>
            <p>The Site is intended for an adult audience and is not directed at children under the age of 18. We do not knowingly collect personal data of children through the Site. If you believe a child has provided us with personal data via the Site, please contact us at <a href="mailto:info@innonsh.com">info@innonsh.com</a> and we will delete it promptly.</p>
            <p>Our PrePrimary School ERP, which operates separately from this Site and is provided to educational institutions, handles data relating to children under stricter terms and controls described in its own privacy notice and the contract with each institution.</p>

            <h2>12. Our Products and ERP Platforms</h2>
            <p>This Site is our public website. Personal data processed through our products and platforms is governed by separate notices:</p>
            <ul>
              <li><strong>Aaharly</strong> (health-tech and meal planning): see the privacy notice on aaharly.com.</li>
              <li><strong>Abhinnati</strong> (local services marketplace): see the privacy notice on abhinnati.com.</li>
              <li><strong>Construction ERP, Doctor ERP, HRM ERP, PrePrimary School ERP, Salon Management ERP:</strong> for users of these platforms, the deploying business is the data controller and Innonsh acts as a data processor. The deploying business's privacy notice applies, and our handling is governed by the Data Processing Agreement signed with that business.</li>
            </ul>

            <h2>13. Grievance Officer</h2>
            <p>In accordance with India's Digital Personal Data Protection Act, 2023, the contact details of our Grievance Officer are:</p>
            <p>
              <strong>Name:</strong> <em>To be appointed</em><br/>
              <strong>Designation:</strong> Grievance Officer, Innonsh Technologies<br/>
              <strong>Email:</strong> <a href="mailto:info@innonsh.com">info@innonsh.com</a><br/>
              <strong>Address:</strong> Pune, Maharashtra, India<br/>
              <strong>Hours:</strong> Monday to Friday, 10:00 to 18:00 IST (excluding public holidays)
            </p>
            <p>The Grievance Officer will acknowledge your concern within 48 hours and resolve it within 30 days of receipt, in line with applicable law.</p>

            <h2>14. Changes to This Policy</h2>
            <p>We may update this Policy from time to time to reflect changes in our practices, services, or applicable law. When we do, we will revise the "Last updated" date at the top of this page and, where the change is significant, give a clearer notice on the Site or by email. Please review this Policy periodically.</p>

            <h2>15. Contact Us</h2>
            <p>For any questions, requests, or concerns about this Policy or about how we handle your personal data, please contact:</p>
            <p>
              <strong>Innonsh Technologies</strong><br/>
              Email: <a href="mailto:info@innonsh.com">info@innonsh.com</a><br/>
              Address: Pune, Maharashtra, India
            </p>

            <p className="governing-law"><em>This Policy is governed by the laws of India. Any disputes arising out of or in connection with this Policy will be subject to the exclusive jurisdiction of the courts at Pune, Maharashtra.</em></p>

          </article>
        </div>
      </section>
    </div>
  );
}
