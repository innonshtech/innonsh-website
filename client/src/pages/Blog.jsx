import { Link, useParams } from 'react-router-dom';
import LucideIcon from '../components/common/IconMap';

// Structured blog posts data
const blogPosts = [
  {
    slug: "hidden-cost-of-excel-when-spreadsheets-hold-your-business-back",
    title: "The Hidden Cost of Excel: When Spreadsheets Start Holding Your Business Back",
    excerpt: "Why spreadsheets hold your business back and how migrating to a modern, real-time enterprise ERP changes everything.",
    author: "Innonsh Technologies",
    tags: "Enterprise Solutions · Digital Transformation · AI",
    icon: "FileText",
    glow: "rgba(34, 211, 238, 0.35)",
    iconBg: "bg-cyan-500/10 border-cyan-400/20",
    iconColor: "#67e8f9",
    content: (
      <>
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
          <li><strong>Intelligent alerts - before problems become crises.</strong> Modern ERP platforms don't just store information. They surface insights. They flag anomalies. They predict shortfalls before they happen, and automate repetitive workflows that used to take days.</li>
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
      </>
    )
  },
  {
    slug: "legacy-system-trap-is-your-5-year-old-software-quietly-slowing-down-your-business",
    title: "The Legacy System Trap: Is Your 5-Year-Old Software Quietly Slowing Down Your Business?",
    excerpt: "You upgraded your tools years ago to solve a problem. But here is the hard truth: your old software is not growing with you. Learn how to escape the legacy trap.",
    author: "Innonsh Technologies",
    tags: "Legacy Systems · Custom Software · ERP",
    icon: "Cpu",
    glow: "rgba(139, 92, 246, 0.35)",
    iconBg: "bg-violet-500/10 border-violet-400/20",
    iconColor: "#c4b5fd",
    content: (
      <>
        <h2>You remember the day it went live.</h2>
        <p>It was four or five years ago. You finally moved your operations away from messy spreadsheets and invested in a custom software system or a standard desktop ERP. There was a sense of achievement. The team celebrated. For the first two years, it felt like the business had finally found its rhythm.</p>
        <p>But lately, Mondays don't feel the same anymore.</p>
        <p>You sit in your leadership meetings, and while you aren't fighting with raw Excel files like before, you are noticing a new kind of friction:</p>
        <ul>
          <li>"The system is too slow when we pull the quarter-end reports."</li>
          <li>"We can’t access that data on our phones; we have to be on the office desktop."</li>
          <li>"The software doesn't talk to our new CRM, so the sales team is still manually entering data twice."</li>
        </ul>
        <p>You upgraded your tools years ago to solve a problem. But here is the hard truth about business technology: Your business is growing, adapting, and scaling. Your old software is not.</p>
        <p>This is the Legacy System Trap. And it’s quietly chipping away at your efficiency.</p>

        <div className="my-10 rounded-xl overflow-hidden border border-white/10">
          <img src="/blog/legacy-stress.jpg" alt="Stressed businessman looking at outdated desktop computer system" className="w-full h-auto object-cover" />
        </div>

        <h2>The Silent Weight of "It Still Works"</h2>
        <p>The most dangerous thing about a 5-year-old software system is that it doesn't crash. It still opens. It still saves data. It still prints invoices.</p>
        <p>Because it doesn't break down completely, it doesn't show up as an urgent problem on your desk. But "it works" is a very low bar for a business that wants to scale.</p>
        <p>Here is what that legacy system is actually costing you behind the scenes:</p>
        
        <h3>1. The Mobile Blindspot (The Desktop Dependency)</h3>
        <p>If your managers or sales teams on the field have to call someone back at the office just to check inventory levels, order statuses, or client histories, your system is holding you back. Modern business happens on the move. A system that locks your data inside an office desktop or a rigid VPN is a bottleneck.</p>
        
        <h3>2. The Fragmented Ecosystem (The \"Silo\" Problem)</h3>
        <p>Five years ago, you just needed a system to handle billing or basic inventory. Today, you have a separate tool for sales leads, another for HR, and another for customer support. If your core software cannot easily integrate with modern apps and APIs, your employees are spending hours doing manual "data-bridging"—copying information from one screen and pasting it into another.</p>
        
        <h3>3. The \"Waiting on the Developer\" Bottleneck</h3>
        <p>Every time your business processes change—say, you launch a new product line or change your approval workflows—you have to call the original developer who built the system years ago. If they are unavailable, or if modifying the old code takes weeks and costs a fortune, your software is dictating your business strategy instead of supporting it.</p>

        <h2>What a Modern Enterprise Platform Looks Like</h2>
        <p>When we talk about upgrading a legacy system, we don’t mean just buying a shinier version of what you already have. The baseline of enterprise technology has fundamentally shifted.</p>

        <div className="my-10 rounded-xl overflow-hidden border border-white/10">
          <img src="/blog/legacy-boardroom.jpg" alt="Modern business boardroom meeting with global digital connections" className="w-full h-auto object-cover" />
        </div>

        <p>A modern, cloud-native platform (like an integrated ERP or custom automation suite) changes the playground entirely:</p>
        <ul>
          <li><strong>Real-Time, Anywhere Access:</strong> Whether you are visiting a client across the country, traveling internationally for a conference, or working remotely, you have the exact same live dashboard on your phone or laptop.</li>
          <li><strong>Seamless Integration:</strong> Your sales pipeline, inventory, dispatch, and finance flow into each other automatically. One trigger in sales updates inventory and alerts finance instantly.</li>
          <li><strong>AI-First Capabilities:</strong> Modern systems don't just store past data; they help you look ahead. They can flag anomalous transactions, predict inventory run-outs before they happen, and automate repetitive workflows that used to take days.</li>
          <li><strong>Elastic Scalability:</strong> It adapts as you grow. Whether you open three new global branches or double your team size, a modern cloud system scales seamlessly without requiring massive hardware overhauls.</li>
        </ul>

        <h2>The Invoice You Can't See</h2>
        <p>Staying on an outdated system isn't a cost-saving strategy; it’s an invisible tax. You are paying for it in lost speed, frustrated employees, and delayed customer deliveries. While your competitors are making decisions based on live morning data, your team is still waiting for reports to compile.</p>
        <p>If you find yourself saying, "Our software is okay, but it’s a pain to change anything," you are already standing in the trap.</p>
        <p>The goal of technology was never to just give you a digital ledger. The goal is to give your business speed, agility, and a clear view of the horizon.</p>

        <h2>Let’s Build for Where You Are Going, Not Where You Were</h2>
        <p>At Innonsh Technologies, we don’t believe in one-size-fits-all software or rigid systems that age out in a few years. We engineer modern, integrated ERPs, CRMs, and AI-first platforms designed around your current operational logic and future scale—built to power operations across regions and borders.</p>
        <p>If your business has outgrown its old software and you want to understand what a modern, unified system can do for your efficiency, let's connect.</p>
        <p>No heavy jargon. Just a clear roadmap for your next phase of growth.</p>

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
      </>
    )
  }
];

export default function Blog() {
  const { slug } = useParams();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  // 1. Grid listing view (if no slug in URL)
  if (!slug) {
    return (
      <div id="blogListView">
        <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-[#050507] text-white">
          {/* subtle background */}
          <div className="absolute inset-0 bg-grid-fine mask-radial opacity-50"></div>
          <div className="orb" style={{ top: '-180px', left: '30%', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 60%)' }}></div>
          <div className="orb" style={{ bottom: '-120px', right: '-80px', width: '440px', height: '440px', background: 'radial-gradient(circle, rgba(245,158,11,0.14), transparent 60%)' }}></div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-5 mb-8">
              <Link to="/" className="back-to-home inline-flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-0.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to home
              </Link>
              <div className="chip"><span className="chip-dot" style={{ background: '#22d3ee', boxShadow: '0 0 12px #22d3ee' }}></span> Blog</div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogPosts.map((post, idx) => (
                <Link
                  key={idx}
                  to={`/blog/${post.slug}`}
                  onMouseMove={handleMouseMove}
                  className="block gradient-border p-7 cursor-pointer hover:-translate-y-1 transition-transform relative z-20"
                  style={{ '--glow': post.glow }}
                >
                  <div className={`w-11 h-11 rounded-xl grid place-items-center border ${post.iconBg} mb-6`}>
                    <LucideIcon name={post.icon} color={post.iconColor} />
                  </div>
                  <h3 className="display text-xl font-semibold mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[14.5px] text-white/55 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center text-[13px] text-white/70 group">
                    <span>Learn more</span>
                    <svg className="ml-1.5 transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 2. Blog detail view (if slug matches one of our posts)
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    // Fallback: If slug is invalid, redirect back to blog index
    return (
      <div className="pt-40 text-center">
        <h2 className="text-xl mb-4">Post not found</h2>
        <Link to="/blog" className="text-cyan-400 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div id="blogView">
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-[#050507] text-white">
        {/* subtle background */}
        <div className="absolute inset-0 bg-grid-fine mask-radial opacity-50"></div>
        <div className="orb" style={{ top: '-180px', left: '30%', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 60%)' }}></div>
        <div className="orb" style={{ bottom: '-120px', right: '-80px', width: '440px', height: '440px', background: 'radial-gradient(circle, rgba(245,158,11,0.14), transparent 60%)' }}></div>

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-5 mb-8">
            <Link to="/blog" className="back-to-home inline-flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-0.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to articles
            </Link>
            <div className="chip">
              <span className="chip-dot" style={{ background: post.iconColor, boxShadow: `0 0 12px ${post.iconColor}` }}></span> Blog
            </div>
          </div>
          
          <h1 className="display text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.05] mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3 text-[14px] text-white/55 mb-10">
            <span className="font-medium text-white/80">By {post.author}</span>
            <span className="text-white/25">·</span>
            <span>{post.tags}</span>
          </div>

          <article className="prose-doc mt-14">
            {post.content}
          </article>
        </div>
      </section>
    </div>
  );
}
