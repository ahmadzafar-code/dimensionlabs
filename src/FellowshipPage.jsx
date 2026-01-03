import React from 'react';

export default function FellowshipPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F6F3' }}>
      <style>{`
        body {
          font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          color: #37352F;
        }
        
        .max-w-900 {
          max-width: 900px;
        }
        
        a {
          color: #37352F;
          text-decoration: none;
          border-bottom: 1px solid rgba(55, 53, 47, 0.16);
          transition: border-color 0.2s ease;
        }
        
        a:hover {
          border-bottom-color: rgba(55, 53, 47, 0.4);
        }
        
        h1, h2, h3 {
          font-weight: 600;
          color: #37352F;
        }
      `}</style>

      {/* Top Navigation */}
      <nav style={{ backgroundColor: '#F7F6F3' }}>
        <div className="max-w-900 mx-auto px-14 py-6">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 375 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000000" d="M 223.765625 205.296875 L 292.875 167.28125 L 220.335938 129.242188 L 149.371094 169.316406 L 218.546875 205.234375 C 219.351562 205.695312 220.21875 205.929688 221.148438 205.941406 C 222.074219 205.953125 222.949219 205.738281 223.765625 205.296875 Z" fillOpacity="1" fillRule="nonzero"/>
                <path fill="#000000" d="M 144.121094 76.398438 C 143.683594 76.636719 143.285156 76.929688 142.929688 77.277344 C 142.574219 77.625 142.269531 78.015625 142.019531 78.445312 C 141.769531 78.875 141.582031 79.332031 141.457031 79.8125 C 141.332031 80.296875 141.273438 80.785156 141.28125 81.285156 L 142.183594 160.710938 L 214.644531 119.761719 L 213.71875 38.214844 Z" fillOpacity="1" fillRule="nonzero"/>
                <path fill="#000000" d="M 298.242188 79.667969 C 298.238281 79.167969 298.167969 78.675781 298.03125 78.195312 C 297.894531 77.714844 297.695312 77.257812 297.4375 76.832031 C 297.175781 76.402344 296.867188 76.015625 296.5 75.671875 C 296.136719 75.332031 295.734375 75.042969 295.292969 74.808594 L 224.761719 38.089844 L 225.6875 119.636719 L 299.132812 158.15625 Z" fillOpacity="1" fillRule="nonzero"/>
                <path fill="#000000" d="M 151.234375 169.699219 L 82.125 207.714844 L 154.664062 245.753906 L 225.628906 205.679688 L 156.453125 169.761719 C 155.648438 169.300781 154.78125 169.066406 153.851562 169.054688 C 152.925781 169.042969 152.050781 169.257812 151.234375 169.699219 Z" fillOpacity="1" fillRule="nonzero"/>
                <path fill="#000000" d="M 230.878906 298.597656 C 231.316406 298.359375 231.710938 298.0625 232.070312 297.714844 C 232.425781 297.371094 232.730469 296.980469 232.980469 296.550781 C 233.230469 296.121094 233.417969 295.664062 233.542969 295.179688 C 233.667969 294.699219 233.726562 294.210938 233.71875 293.710938 L 232.816406 214.285156 L 160.355469 255.230469 L 161.28125 336.78125 Z" fillOpacity="1" fillRule="nonzero"/>
                <path fill="#000000" d="M 76.757812 295.328125 C 76.761719 295.828125 76.832031 296.320312 76.96875 296.800781 C 77.105469 297.28125 77.304688 297.738281 77.5625 298.164062 C 77.824219 298.59375 78.132812 298.976562 78.5 299.320312 C 78.863281 299.664062 79.265625 299.953125 79.707031 300.1875 L 150.234375 336.90625 L 149.3125 255.359375 L 75.867188 216.839844 Z" fillOpacity="1" fillRule="nonzero"/>
              </svg>
              <span className="text-sm">Dimension Labs</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/fellowship" className="text-sm">
                Venture Growth Fellowship 2026
              </a>
              <a href="mailto:team@dimensionlabs.org" className="text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-900 mx-auto px-14 pt-8 pb-20">
        
        {/* Title */}
        <h1 className="text-4xl font-semibold mb-3" style={{ color: '#37352F' }}>
          Venture Growth Fellowship 2026
          </h1>
          
        {/* Hero Section */}
        <div className="mb-10">
          <p className="text-base leading-relaxed mb-4" style={{ color: '#37352F' }}>
            <em>"To get a great internship, you're supposed to already have one???"</em> We're dismantling 
            that paradox with the Venture Growth Fellowship—<strong>a spring program leading to summer 
            internships</strong> for students who want to be close to founders, product, and deals.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
            <a href="https://form.typeform.com/to/aJJBintZ" target="_blank" rel="noopener noreferrer">Apply for Spring 2026 fellowship →</a> Applications closing on Jan 21st 11:59 PM.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-10 p-4 rounded" style={{ backgroundColor: '#F7F6F0' }}>
          <p className="text-base leading-relaxed mb-2" style={{ color: '#37352F' }}>
            <strong>50 shortlisted fellows</strong> will scout early-stage startups, identify their real technical 
          and design pain points, and bring them into Dimension Labs' product studio so we can 
          help them build before they raise.
        </p>
          <p className="text-base leading-relaxed mb-2" style={{ color: '#37352F' }}>
            Top performing fellow(s) get <strong>Summer 2026 internships/full-time roles</strong> either at Dimension 
          Labs or openings at our portfolio startups, partner companies, and hackerhouses.
        </p>
          <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
            All the fellows, on successful graduation, will gain access to our <strong>global Dimension Fellows Club, 
            exclusive recruiting events/referrals, mentorship events with top PMs/VCs</strong>, and our network 
            of portfolio startups.
          </p>
      </div>
        
        {/* Navigation Outline */}
        <div className="mb-10 pb-6" style={{ borderBottom: '1px solid rgba(55, 53, 47, 0.09)' }}>
          <h2 className="text-sm mb-4" style={{ color: '#787774' }}>Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-base">
            <a href="#what-you-do">What you'll do</a>
            <a href="#what-you-learn">What you'll learn</a>
            <a href="#benefits">Benefits</a>
            <a href="#program-details">Program details</a>
            <a href="#who-we-look-for">Who are we looking for</a>
            <a href="#how-to-apply">How to apply</a>
          </div>
        </div>
        
        {/* What You'll Do */}
        <section id="what-you-do" className="mb-10 pt-10" style={{ borderTop: '1px solid rgba(55, 53, 47, 0.09)' }}>
          <h2 className="text-3xl font-semibold mb-3 uppercase">What you'll do</h2>
          <p className="text-base leading-relaxed mb-2" style={{ color: '#37352F' }}>
            Forget case studies and endless coffee chats. You'll learn the real job: finding builders, 
            diagnosing bottlenecks, bridging founders with engineers, and staying in the room while 
            all these decisions get made.
          </p>
          <p className="text-base leading-relaxed font-semibold" style={{ color: '#37352F' }}>
            This is exactly what PMs/VCs do for which they are valued and paid for… you'll learn 
            that in 16 weeks.
          </p>
        </section>

        {/* 4 Steps Section */}
        <div className="mb-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Find founders where they actually are</h3>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                An unstructured problem. Unleash your creativity to attract the high value signals 
                early. For example, through Startup clubs, hackerhouses, Discords, GitHub, and X 
                (whatever). You'll source from places where people are building — not just talking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2. Diagnose real problems (signal &gt; noise)</h3>
              <p className="text-base leading-relaxed mb-2" style={{ color: '#37352F' }}>You'll learn to ask:</p>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                What are you building? Where are you stuck? Helping them find what exactly can be 
                easily outsourced? What must the founders themselves focus on more? This is the core 
                PM/VC instinct: spotting what matters fast.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">3. Turn uncertainty into structure &amp; communicate with clarity</h3>
              <p className="text-base leading-relaxed mb-2" style={{ color: '#37352F' }}>
                Take "we need help/we're not sure" and turn it into something buildable/outsourceable:
              </p>
              <div className="pl-6 space-y-1 text-base leading-relaxed" style={{ color: '#37352F' }}>
                <p>"Design an MVP dashboard with 3 core integrations"</p>
                <p>"Build a RAG pipeline"</p>
                <p>"Ship a landing page + waitlist + analytics loop"</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">4. Stay in the room</h3>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                You won't just make intros. You'll learn the art of selling, which is crucial for 
                a PM, VC or any founder. You'll sit in on scoping calls, learn how decisions get made, 
                and see how early-stage teams actually operate. Your performance evaluation depends on 
                how much you get involved &amp; prove yourself valuable.
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <section id="what-you-learn" className="mb-10 pt-10" style={{ borderTop: '1px solid rgba(55, 53, 47, 0.09)' }}>
          <h2 className="text-3xl font-semibold mb-3 uppercase">What you'll learn</h2>
          <div className="space-y-2">
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              • Technical + product jargon (enough to sound credible and ask good questions)
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              • How to run founder discovery conversations
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              • How to qualify opportunities (and kill weak ones fast)
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              • How to write clean scopes + handoffs for engineers/designers
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              • How to build and maintain founder relationships
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mb-10 pt-10" style={{ borderTop: '1px solid rgba(55, 53, 47, 0.09)' }}>
          <h2 className="text-3xl font-semibold mb-3 uppercase">Benefits</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Skills that transfer everywhere</h3>
              <div className="space-y-2">
                <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                  • Source and qualify opportunities (not chase noise)
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                  • Scope work under real constraints
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                  • Bridge technical and non-technical conversations
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                  • Build founder relationships that last
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">A real founder network</h3>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                Dozens of conversations with early-stage founders making real decisions — not simulations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Two paths to Summer 2026 internships</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-base font-semibold mb-1" style={{ color: '#37352F' }}>Path 1: Startups we're building with</p>
                  <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                    Top fellows get internship opportunities at our portfolio openings/partner companies 
                    (at teams actively hiring for product, ops, growth, or founder-right-hand roles).
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold mb-1" style={{ color: '#37352F' }}>Path 2: Dimension Labs</p>
                  <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                    The best performing fellow(s) receives a direct offer to work as an Analyst/Associate 
                    at Dimension Labs, or a guaranteed Summer 2026 internship (if they haven't graduated yet).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Cohort that stays high-signal</h3>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                You'll be placed into small pods (8–12) with consistent feedback and clear weekly targets.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Dimension Fellows Club (on graduation)</h3>
              <div className="space-y-2">
                <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                  • Private network + intros
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                  • Invite-only recruiting/referral drops (when available)
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                  • Mentorship sessions with experienced PMs/VCs/founders
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                  • Access to our startup + operator community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="program-details" className="mb-10 pt-10" style={{ borderTop: '1px solid rgba(55, 53, 47, 0.09)' }}>
          <h2 className="text-3xl font-semibold mb-3 uppercase">Program details</h2>
          <div className="space-y-2">
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              <span className="font-semibold">Timeline:</span> Mid-January to late April 2026 (~14 weeks)
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              <span className="font-semibold">Time commitment:</span> 5–8 hours/week (flexible around classes)
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              <span className="font-semibold">Format:</span> Remote-first (US time zones; optional city meetups)
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              <span className="font-semibold">Who it's for:</span> US-based students or deeply plugged into US startup ecosystems
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              <span className="font-semibold">Confidentiality:</span> You'll be expected to keep founder info private
            </p>
          </div>
        </section>

        {/* Who We Look For */}
        <section id="who-we-look-for" className="mb-10 pt-10" style={{ borderTop: '1px solid rgba(55, 53, 47, 0.09)' }}>
          <h2 className="text-3xl font-semibold mb-3 uppercase">Who are we looking for?</h2>
          <p className="text-lg font-semibold mb-4" style={{ color: '#37352F' }}>
            You don't need to be technical. You do need to care.
          </p>

          <div className="mb-6">
            <p className="text-base font-semibold mb-2" style={{ color: '#37352F' }}>You're a fit if you:</p>
            <div className="space-y-2">
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Love early-stage energy and founder conversations
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Communicate clearly (writing + calls)
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Can reach out cold and handle "no"
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Want to learn by doing
              </p>
            </div>
          </div>

          <div>
            <p className="text-base font-semibold mb-2" style={{ color: '#37352F' }}>Bonus points if you:</p>
            <div className="space-y-2">
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Are active in startup clubs, accelerators, or hacker communities
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Have helped a friend build something
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Have built anything yourself (even if it failed)
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Are considering product, venture, or founding
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section id="how-to-apply" className="mb-10 pt-10" style={{ borderTop: '1px solid rgba(55, 53, 47, 0.09)' }}>
          <h2 className="text-3xl font-semibold mb-3 uppercase">How to apply</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">The challenge</h3>
            <p className="text-base leading-relaxed mb-2" style={{ color: '#37352F' }}>
              Record a 1-minute (max) video convincing us you belong in this cohort.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              You yourself are the 'product' here. We want to test how you 'sell yourself' and 
              convince us to select you. Be as creative as you want. (but note that we are not 
              testing for editing/filmmaking skills but if you think that can help you tell your 
              story better than feel free to do so)
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Timeline</h3>
            <div className="space-y-2">
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Rolling review: seats fill as we find great people
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Applications close: Jan 21st, 2026 — 11:59 PM PT
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
                • Final round: 15-minute Zoom conversation (short, direct)
              </p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              <a href="https://form.typeform.com/to/aJJBintZ" target="_blank" rel="noopener noreferrer" className="font-semibold">→ Start your application</a>
            </p>
          </div>

          <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
            Questions? Contact at{' '}
            <a href="mailto:team@dimensionlabs.org">team@dimensionlabs.org</a>
          </p>
        </section>

        {/* About */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About Dimension Labs</h2>
          <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
            Dimension Labs is proudly built as an initiative of ACube Tech, a global talent partner 
            for early-stage startups. At ACube Tech, our mission is simple but ambitious: to empower 
            startups with exceptional offshore talent—builders and operators—who help founders scale 
            faster, smarter, and more affordably.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 pt-10 pb-16">
        <div className="max-w-900 mx-auto px-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm font-medium mb-1" style={{ color: '#37352F' }}>Dimension Labs</p>
              <p className="text-xs" style={{ color: '#787774' }}>An initiative by ACube Tech</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="mailto:team@dimensionlabs.org" style={{ color: '#37352F' }}>Contact</a>
              <a href="https://acube-tech.com" target="_blank" rel="noopener noreferrer" style={{ color: '#37352F' }}>
                ACube Tech
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
