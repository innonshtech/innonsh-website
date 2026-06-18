import { Link, useParams } from 'react-router-dom';

export default function Blog() {
  const { slug } = useParams();

  // For now, we only have one blog post
  // The Hidden Cost of Excel Blog (1).docx

  return (
    <div id="blogView">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#050507] text-white">
        {/* subtle background */}
        <div className="absolute inset-0 bg-grid-fine mask-radial opacity-50"></div>
        <div className="orb" style={{ top: '-180px', left: '30%', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 60%)' }}></div>
        <div className="orb" style={{ bottom: '-120px', right: '-80px', width: '440px', height: '440px', background: 'radial-gradient(circle, rgba(245,158,11,0.14), transparent 60%)' }}></div>

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">

          <Link to="/" className="back-to-home inline-flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition mb-10 group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-0.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to home
          </Link>

          <div className="chip mb-6"><span className="chip-dot" style={{ background: '#22d3ee', boxShadow: '0 0 12px #22d3ee' }}></span> Blog</div>
          <h1 className="display text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.05] mb-6">
            The Hidden Cost of Excel: When Spreadsheets Start Holding Your Business <span className="serif-italic glow-accent">Back</span>
          </h1>
          <div className="flex items-center gap-3 text-[14px] text-white/55 mb-10">
            <span className="font-medium text-white/80">By Innonsh Technologies</span>
            <span className="text-white/25">·</span>
            <span>Enterprise Solutions · Digital Transformation · AI</span>
          </div>

          <article className="prose-doc mt-14">
            <h2>You've Probably Lived This.</h2>
            <p>Monday morning. 9 AM. Leadership meeting.</p>
            <p>You ask one question.</p>
            <p><strong>"How are we doing this week?"</strong></p>
            <p>The room shifts. Laptops open. Someone fires a WhatsApp to a colleague not in the room. Two minutes pass. Then three.</p>
            <p><strong>"Around 340 orders pending but the data from the other branch isn't updated yet."</strong></p>
            <p><em>Around.</em></p>
            <p><em>Isn't updated yet.</em></p>
            <p>You paid for software. You hired smart people. You built systems.</p>
            <p>And yet the answer to your most basic business question arrives five minutes late, incomplete, and hedged with an asterisk.</p>
            <p>This is not a people problem. This is not a process problem.</p>
            <p>This is what happens when a business quietly outgrows the tools it was built on.</p>
            <p>The hidden cost of Excel isn't loud. It doesn't show up on a balance sheet. It shows up in delayed decisions, invisible errors, and Monday mornings where someone is still manually compiling what should already be in front of you.</p>

            <div className="my-10 rounded-xl overflow-hidden border border-white/10">
              <img src="/blog/Picture1.jpg" alt="Business team in a meeting struggling with outdated Excel data representing the hidden operational cost of spreadsheet dependency in growing companies" className="w-full h-auto object-cover" />
            </div>

            <h2>The Sign Every Business Misses</h2>
            <p>There's a pattern that shows up in almost every business before the breaking point.</p>
            <p>It sounds like this:</p>
            <ul>
              <li>"Which version of the file is correct?"</li>
              <li>"Can you pull the numbers before the meeting?"</li>
              <li>"The data from the other team isn't in yet."</li>
            </ul>
            <p>And the most dangerous sign of all: the one person who built the master spreadsheet three years ago, and what happens to your entire operation if they resign tomorrow.</p>
            <p>If any of that is familiar, you're already paying the hidden cost.</p>
            <p>You just haven't seen the invoice yet.</p>

            <div className="my-10 rounded-xl overflow-hidden border border-white/10">
              <img src="/blog/picture2.png" alt="Split illustration contrasting spreadsheet chaos on the left with a modern ERP dashboard on the right showing the impact of digital transformation on business operations" className="w-full h-auto object-cover" />
            </div>

            <h2>What Modern ERP Systems Actually Do</h2>
            <p>The businesses outpacing yours right now didn't just switch tools.</p>
            <p>They switched the way their entire organisation sees information and that changes everything.</p>
            <p>A modern ERP system is not a digital filing cabinet. It is a living, breathing command centre for your business. Here is what it actually does that Excel never could:</p>
            <ul>
              <li><strong>One source of truth - across every department.</strong> Finance, operations, sales, HR everyone sees the same data, live and updated in real time. No version chaos. No "which file is right?" No waiting for someone to compile the weekly report.</li>
              <li><strong>Automated data flow - end to end.</strong> Data moves automatically from your operations into the system. No manual entry. No copy-paste. No human error baked into the foundation of every decision.</li>
              <li><strong>Real-time visibility - not last Tuesday's snapshot.</strong> See your business as it is right now inventory levels, revenue, team performance, pending orders in a single dashboard that updates the moment something changes.</li>
              <li><strong>Intelligent alerts - before problems become crises.</strong> Modern ERP platforms don't just store information. They surface insights. They flag anomalies. They predict shortfalls before they become expensive surprises.</li>
              <li><strong>Scalable infrastructure - that grows with you.</strong> Whether you have 50 employees or 500, one city or ten, one product line or fifty a well-built ERP scales without adding complexity or admin overhead.</li>
            </ul>
            <p>This is not a technology upgrade.</p>
            <p>This is the difference between running your business and your business running you.</p>

            <div className="my-10 rounded-xl overflow-hidden border border-white/10">
              <img src="/blog/Picture3.jpg" alt="Business executive reviewing a live enterprise ERP dashboard showing how modern enterprise software replaces Excel with real-time business intelligence" className="w-full h-auto object-cover" />
            </div>

            <h2>A Real-World Picture: The Manufacturing Business That Almost Drowned in Its Own Data</h2>
            <p>Picture a mid-sized manufacturing company - 120 employees, three production lines, suppliers across five states.</p>
            <p>Every purchase order was tracked in Excel. Inventory was managed across four separate sheets maintained by three different people. Payroll was handled in another file. Customer orders lived in a shared drive folder that nobody could agree on.</p>
            <p>When a key raw material ran short, nobody knew until production had already stopped.</p>
            <p>When a client called to ask about their order status, the sales team had to chase the operations team, who had to check the sheet, who had to verify with the warehouse.</p>
            <p>The delay didn't just cost time. It cost the client relationship.</p>
            <p>The root cause wasn't the team. It wasn't the process.</p>
            <p>It was the complete absence of a connected system that gave everyone the right information at the right moment.</p>
            <p>After implementing an integrated ERP system connecting procurement, inventory, production, and sales on one platform the same company could see live stock levels the moment a purchase order was raised. Sales teams could check order status in real time without chasing anyone. Management had a live dashboard instead of a Friday afternoon report.</p>
            <p>The production stoppage problem? Eliminated. The client communication delay? Gone.</p>
            <p>The data was always there. The system just finally made it impossible to ignore.</p>
            <p>This is what ERP does for businesses that have outgrown spreadsheets not just for manufacturing, but for logistics, retail, healthcare, professional services, and every industry carrying the invisible weight of disconnected data.</p>

            <h2>At Innonsh Technologies, We Help Organisations Go Beyond the Spreadsheet</h2>
            <p>At Innonsh Technologies, we help organisations replace fragmented spreadsheets with integrated ERP, CRM, HRMS, and AI-powered business automation solutions that provide a single source of truth across every department.</p>
            <p>We don't hand you a platform and wish you luck.</p>
            <p>We engineer enterprise systems built around your specific business logic, your team structure, and where you're headed not just where you are today.</p>
            <p>Whether you're a logistics company that needs live operational visibility, a manufacturer managing complex supply chains, a growing services firm with HR and finance data scattered across a dozen files we build systems that connect the dots.</p>
            <p>Systems that don't just hold your data.</p>
            <p>They work with it.</p>
            <p>Because the goal was never to replace Excel with something complicated.</p>
            <p>The goal is simple:</p>
            <p>Walk into Monday's meeting. Ask how the business is doing. Get the answer in seconds.</p>
            <p>Not <em>around</em> 340. Not <em>the data isn't updated yet.</em></p>
            <p>Exactly 312. Updated 8 seconds ago.</p>

            <h2>Ready for That Monday Morning?</h2>
            <p>If you're still running critical decisions on spreadsheets and want to understand what an integrated enterprise system could look like for your business. Let's have an honest conversation.</p>
            <p>No jargon. No pressure. Just clarity.</p>

            <div className="mt-8 flex flex-col gap-3 p-6 bg-white/5 border border-white/10 rounded-xl">
              <a href="mailto:info@innonsh.com" className="flex items-center gap-3 text-white/80 hover:text-white transition">
                <span>📧</span> info@innonsh.com
              </a>
              <a href="https://innonsh.com" className="flex items-center gap-3 text-white/80 hover:text-white transition">
                <span>🌐</span> innonsh.com
              </a>
              <a href="tel:7620301874" className="flex items-center gap-3 text-white/80 hover:text-white transition">
                <span>📞</span> 7620301874
              </a>
            </div>

          </article>
        </div>
      </section>
    </div>
  );
}
