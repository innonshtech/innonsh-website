import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div id="termsView">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#050507] text-white">
        {/* subtle background */}
        <div className="absolute inset-0 bg-grid-fine mask-radial opacity-50"></div>
        <div className="orb" style={{ top: '-180px', left: '30%', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 60%)' }}></div>
        <div className="orb" style={{ bottom: '-120px', right: '-80px', width: '440px', height: '440px', background: 'radial-gradient(circle, rgba(245,158,11,0.14), transparent 60%)' }}></div>

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">

          <Link to="/" className="back-to-home inline-flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition mb-10 group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="transition-transform group-hover:-translate-x-0.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to home
          </Link>

          <div className="chip mb-6"><span className="chip-dot" style={{ background: '#22d3ee', boxShadow: '0 0 12px #22d3ee' }}></span> Legal</div>
          <h1 className="display text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02]">
            Terms of <span className="serif-italic glow-accent">Service</span>
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-white/45">
            <span>Effective date: 9 June 2026</span>
            <span className="hidden sm:inline text-white/25">·</span>
            <span>Last updated: 9 June 2026</span>
          </div>

          <article className="prose-doc mt-14">

            <h2>1. Introduction</h2>
            <p>Welcome to Innonsh Technologies ("Innonsh," "we," "us," or "our"). These Terms of Service (the "Terms") govern your access to and use of the website located at <strong>innonsh.com</strong> (the "Site"). By accessing or using the Site, you agree to be bound by these Terms and by our <Link to="/privacy">Privacy Policy</Link>.</p>
            <p>If you do not agree with any part of these Terms, please do not use the Site.</p>
            <p>These Terms apply only to the Site. They do not govern:</p>
            <ul>
              <li><strong>Services we deliver to clients,</strong> which are covered by separate Master Service Agreements and Statements of Work signed with each client.</li>
              <li><strong>Our consumer products</strong> (Aaharly and Abhinnati), each of which is governed by its own terms of service published on the relevant product website.</li>
              <li><strong>Our ERP platforms</strong> (Construction ERP, Doctor ERP, HRM ERP, PrePrimary School ERP, Salon Management ERP), each of which is governed by its own subscription agreement.</li>
            </ul>
            <p>Where there is any conflict between these Terms and a specific service, product, or subscription agreement, that specific agreement will prevail.</p>

            <h2>2. About Innonsh</h2>
            <p>Innonsh Technologies is a software services and products company based in Pune, Maharashtra, India. The Site serves as our public-facing presence and provides information about our company, services, products, and platforms.</p>
            <p><strong>Contact:</strong><br/>Email: <a href="mailto:info@innonsh.com">info@innonsh.com</a><br/>Address: Pune, Maharashtra, India</p>

            <h2>3. Eligibility</h2>
            <p>You must be at least 18 years of age, or the age of majority in your jurisdiction (whichever is higher), to use this Site. By using the Site, you represent and warrant that you meet this requirement and have the legal capacity to enter into binding agreements under applicable law.</p>
            <p>If you are using the Site on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms, and references to "you" include both you and that entity.</p>

            <h2>4. Use of the Site</h2>
            <p>You may use the Site for lawful, personal, and business-evaluation purposes in accordance with these Terms. In using the Site, you agree not to:</p>
            <ul>
              <li>Use the Site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to any part of the Site, our servers, networks, or systems</li>
              <li>Interfere with or disrupt the operation of the Site, including through denial-of-service attacks, malware, or excessive automated requests</li>
              <li>Scrape, harvest, copy, or extract data from the Site without our prior written permission, except as needed for public search-engine indexing</li>
              <li>Use the Site to transmit harmful or malicious code or content</li>
              <li>Reverse engineer, decompile, or attempt to derive the source code of the Site, except to the extent permitted by applicable law</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
              <li>Use the Site to collect or harvest personal data of other users or visitors</li>
            </ul>
            <p>We reserve the right to suspend, restrict, or terminate your access to the Site at any time, with or without notice, if we believe you have violated these Terms or any applicable law.</p>

            <h2>5. Intellectual Property</h2>

            <h3>5.1 Our content</h3>
            <p>All content on the Site, including but not limited to text, graphics, logos, icons, images, audio, video, software, design, layout, code, animations, and the structure and selection of the Site (collectively, the "Site Content") is owned by Innonsh Technologies or its licensors and is protected by Indian and international copyright, trademark, and other intellectual property laws.</p>
            <p>The names and marks <strong>Innonsh</strong>, the Innonsh logo, <strong>Innonsh OS</strong>, <strong>Aaharly</strong>, <strong>Abhinnati</strong>, <strong>Construction ERP</strong>, <strong>Doctor ERP</strong>, <strong>HRM ERP</strong>, <strong>PrePrimary School ERP</strong>, and <strong>Salon Management ERP</strong> are trademarks of Innonsh Technologies. You may not use them without our prior written consent.</p>

            <h3>5.2 Limited licence to use the Site</h3>
            <p>We grant you a limited, non-exclusive, non-transferable, revocable licence to access and view the Site for personal and business-evaluation purposes only. You may not copy, modify, distribute, sell, lease, sublicense, or create derivative works of the Site Content, except as expressly permitted by these Terms or by applicable law.</p>

            <h3>5.3 Feedback</h3>
            <p>If you send us feedback, ideas, comments, or suggestions about the Site, our services, or our products (collectively, "Feedback"), you grant Innonsh a perpetual, irrevocable, royalty-free, worldwide licence to use, modify, and incorporate that Feedback for any purpose, without obligation to you. Feedback is not treated as confidential.</p>

            <h2>6. Submissions and Communications</h2>
            <p>When you submit information to us through the Site, for example by contacting us, subscribing to our newsletter, or completing a form, you represent that the information you provide is accurate, that you have the right to share it, and that your submission does not violate the rights of any third party.</p>
            <p>You agree not to submit any content that is unlawful, defamatory, obscene, threatening, harassing, or that infringes any third party's intellectual property, privacy, or other rights.</p>
            <p>We may use the information you submit to respond to your enquiries, deliver requested services, send communications you have asked for, and improve the Site, as described in our <Link to="/privacy">Privacy Policy</Link>.</p>

            <h2>7. Services, Products, and ERP Platforms</h2>
            <p>The Site describes the services we offer, the products we operate, and our ERP platforms. The descriptions on the Site are for informational purposes only and do not constitute a binding offer, warranty, or contract.</p>
            <p>Specifically:</p>
            <ul>
              <li><strong>Professional services</strong> (software development, design, AI solutions, consulting, and similar) are delivered under a separate Master Service Agreement and Statement of Work signed by both parties. Pricing, timelines, scope, and deliverables are agreed in those documents.</li>
              <li><strong>Aaharly and Abhinnati</strong> are operated under their own terms of service available on the respective product websites.</li>
              <li><strong>Innonsh ERP platforms</strong> are made available under separate subscription agreements signed between Innonsh and the deploying business.</li>
            </ul>
            <p>Nothing on this Site constitutes professional, legal, financial, medical, or other regulated advice.</p>

            <h2>8. Third-Party Links and Resources</h2>
            <p>The Site may contain links to third-party websites, applications, or resources. We provide these links for your convenience only. We do not endorse, control, monitor, or take responsibility for the content, accuracy, availability, privacy practices, or terms of any third-party site. Your access to and use of any third-party site is entirely at your own risk and subject to the terms and policies of that third party.</p>

            <h2>9. Disclaimer of Warranties</h2>
            <p>To the maximum extent permitted by applicable law, the Site and the Site Content are provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis, without any warranties, representations, or conditions of any kind, whether express, implied, or statutory, including but not limited to any warranties of merchantability, fitness for a particular purpose, accuracy, completeness, non-infringement, or quiet enjoyment.</p>
            <p>Without limiting the foregoing, Innonsh does not warrant that:</p>
            <ul>
              <li>The Site will be uninterrupted, secure, error-free, or virus-free</li>
              <li>The Site Content is complete, accurate, current, or reliable</li>
              <li>Defects in the Site will be corrected within a particular timeframe, or at all</li>
              <li>The Site will meet your specific requirements or expectations</li>
            </ul>
            <p>You are responsible for verifying any information on the Site before relying on it for any decision.</p>
            <p>Nothing in this Section excludes or limits warranties or liability that cannot be excluded or limited under applicable law.</p>

            <h2>10. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, in no event shall Innonsh Technologies, its directors, officers, employees, agents, partners, or licensors be liable to you for any indirect, incidental, special, consequential, punitive, or exemplary damages, including without limitation loss of profits, loss of revenue, loss of data, loss of business, loss of goodwill, or business interruption, arising out of or in connection with your use of, or inability to use, the Site, even if Innonsh has been advised of the possibility of such damages.</p>
            <p>Innonsh's total aggregate liability to you for any and all claims arising out of or in connection with the Site or these Terms shall not exceed <strong>₹10,000 (Indian Rupees Ten Thousand)</strong> or the equivalent in your local currency.</p>
            <p>This limitation applies regardless of the basis of the claim, whether in contract, tort (including negligence), statute, or otherwise, and even if the remedy fails of its essential purpose.</p>
            <p>Nothing in this Section limits liability that cannot be limited under applicable law, including liability for fraud, gross negligence, wilful misconduct, or death or personal injury caused by negligence.</p>

            <h2>11. Indemnity</h2>
            <p>You agree to indemnify, defend, and hold harmless Innonsh Technologies and its directors, officers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with:</p>
            <ul>
              <li>Your access to or use of the Site</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of any third party, including intellectual property, publicity, or privacy rights</li>
              <li>Any content you submit to or through the Site</li>
            </ul>
            <p>Innonsh reserves the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defence of such claims.</p>

            <h2>12. Privacy</h2>
            <p>Your use of the Site is also governed by our <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference. By using the Site, you acknowledge that you have read and understood our Privacy Policy and consent to the collection and use of your information as described in it.</p>

            <h2>13. Modifications to These Terms</h2>
            <p>We may update these Terms from time to time to reflect changes in our practices, services, or applicable law. When we do, we will revise the "Last updated" date at the top of this page. Where the change is significant, we will provide additional notice on the Site or, where appropriate, by email.</p>
            <p>Your continued use of the Site after the updated Terms take effect constitutes your acceptance of the updated Terms. If you do not agree with the updated Terms, please stop using the Site.</p>

            <h2>14. Termination</h2>
            <p>We may suspend, restrict, or terminate your access to all or part of the Site at any time, with or without notice, for any reason, including if we believe you have violated these Terms or any applicable law.</p>
            <p>You may stop using the Site at any time.</p>
            <p>Provisions of these Terms that by their nature should survive termination, including without limitation Sections 5 (Intellectual Property), 9 (Disclaimer of Warranties), 10 (Limitation of Liability), 11 (Indemnity), 15 (Governing Law and Dispute Resolution), and 17 (General), shall continue to apply after termination.</p>

            <h2>15. Governing Law and Dispute Resolution</h2>
            <p>These Terms and any dispute, claim, or matter arising out of or in connection with these Terms or your use of the Site shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.</p>
            <p><strong>Amicable resolution.</strong> The parties shall first attempt to resolve any dispute amicably through good-faith negotiation. Either party may initiate this process by sending written notice to the other party at the contact details set out in these Terms.</p>
            <p><strong>Arbitration.</strong> If a dispute cannot be resolved through negotiation within thirty (30) days of the written notice referred to above, the parties agree to submit the dispute to arbitration in accordance with the Arbitration and Conciliation Act, 1996, as amended. The arbitration shall be conducted by a sole arbitrator appointed by Innonsh. The seat and venue of arbitration shall be <strong>Pune, Maharashtra, India</strong>, and the proceedings shall be conducted in English. The award of the arbitrator shall be final and binding on the parties.</p>
            <p><strong>Jurisdiction.</strong> Subject to the arbitration provision above, the courts at <strong>Pune, Maharashtra, India</strong> shall have exclusive jurisdiction over any matter arising out of or in connection with these Terms.</p>

            <h2>16. Force Majeure</h2>
            <p>Innonsh shall not be liable for any failure or delay in performance under these Terms caused by events beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, civil unrest, government action, epidemic or pandemic, internet or telecommunications failures, power outages, or labour disputes.</p>

            <h2>17. General</h2>

            <h3>17.1 Entire agreement</h3>
            <p>These Terms, together with our Privacy Policy and any specific service, product, or subscription agreement between you and Innonsh, constitute the entire agreement between you and Innonsh regarding your use of the Site and supersede any prior agreements on this subject.</p>

            <h3>17.2 Severability</h3>
            <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect, and the invalid provision shall be replaced by an enforceable provision that comes closest to the parties' original intent.</p>

            <h3>17.3 No waiver</h3>
            <p>Our failure to enforce any right or provision of these Terms shall not be considered a waiver of that right or provision. A waiver of any provision will be effective only if made in writing and signed by Innonsh.</p>

            <h3>17.4 Assignment</h3>
            <p>You may not assign, transfer, or delegate any of your rights or obligations under these Terms without our prior written consent. Innonsh may freely assign these Terms, in whole or in part, in connection with a merger, acquisition, corporate reorganisation, or sale of all or substantially all of its assets.</p>

            <h3>17.5 No agency or partnership</h3>
            <p>Nothing in these Terms creates any partnership, joint venture, employment, agency, or franchise relationship between you and Innonsh.</p>

            <h3>17.6 Notices</h3>
            <p>Notices to Innonsh under these Terms should be sent to <a href="mailto:info@innonsh.com">info@innonsh.com</a> with a copy to our registered office address. Notices to you may be sent to the email address you have provided or by posting on the Site.</p>

            <h2>18. Contact Us</h2>
            <p>For questions about these Terms, please contact:</p>
            <p>
              <strong>Innonsh Technologies</strong><br/>
              Email: <a href="mailto:info@innonsh.com">info@innonsh.com</a><br/>
              Address: Pune, Maharashtra, India
            </p>

            <p className="governing-law"><em>By using the Site, you acknowledge that you have read, understood, and agreed to be bound by these Terms.</em></p>

          </article>
        </div>
      </section>
    </div>
  );
}
