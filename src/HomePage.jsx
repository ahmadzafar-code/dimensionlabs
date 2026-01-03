import React from 'react';

export default function HomePage() {
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
        <h1 className="text-4xl font-semibold mb-3 flex items-center gap-3" style={{ color: '#37352F' }}>
          <svg width="40" height="40" viewBox="0 0 375 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M 223.765625 205.296875 L 292.875 167.28125 L 220.335938 129.242188 L 149.371094 169.316406 L 218.546875 205.234375 C 219.351562 205.695312 220.21875 205.929688 221.148438 205.941406 C 222.074219 205.953125 222.949219 205.738281 223.765625 205.296875 Z" fillOpacity="1" fillRule="nonzero"/>
            <path fill="#000000" d="M 144.121094 76.398438 C 143.683594 76.636719 143.285156 76.929688 142.929688 77.277344 C 142.574219 77.625 142.269531 78.015625 142.019531 78.445312 C 141.769531 78.875 141.582031 79.332031 141.457031 79.8125 C 141.332031 80.296875 141.273438 80.785156 141.28125 81.285156 L 142.183594 160.710938 L 214.644531 119.761719 L 213.71875 38.214844 Z" fillOpacity="1" fillRule="nonzero"/>
            <path fill="#000000" d="M 298.242188 79.667969 C 298.238281 79.167969 298.167969 78.675781 298.03125 78.195312 C 297.894531 77.714844 297.695312 77.257812 297.4375 76.832031 C 297.175781 76.402344 296.867188 76.015625 296.5 75.671875 C 296.136719 75.332031 295.734375 75.042969 295.292969 74.808594 L 224.761719 38.089844 L 225.6875 119.636719 L 299.132812 158.15625 Z" fillOpacity="1" fillRule="nonzero"/>
            <path fill="#000000" d="M 151.234375 169.699219 L 82.125 207.714844 L 154.664062 245.753906 L 225.628906 205.679688 L 156.453125 169.761719 C 155.648438 169.300781 154.78125 169.066406 153.851562 169.054688 C 152.925781 169.042969 152.050781 169.257812 151.234375 169.699219 Z" fillOpacity="1" fillRule="nonzero"/>
            <path fill="#000000" d="M 230.878906 298.597656 C 231.316406 298.359375 231.710938 298.0625 232.070312 297.714844 C 232.425781 297.371094 232.730469 296.980469 232.980469 296.550781 C 233.230469 296.121094 233.417969 295.664062 233.542969 295.179688 C 233.667969 294.699219 233.726562 294.210938 233.71875 293.710938 L 232.816406 214.285156 L 160.355469 255.230469 L 161.28125 336.78125 Z" fillOpacity="1" fillRule="nonzero"/>
            <path fill="#000000" d="M 76.757812 295.328125 C 76.761719 295.828125 76.832031 296.320312 76.96875 296.800781 C 77.105469 297.28125 77.304688 297.738281 77.5625 298.164062 C 77.824219 298.59375 78.132812 298.976562 78.5 299.320312 C 78.863281 299.664062 79.265625 299.953125 79.707031 300.1875 L 150.234375 336.90625 L 149.3125 255.359375 L 75.867188 216.839844 Z" fillOpacity="1" fillRule="nonzero"/>
          </svg>
          Dimension Labs
        </h1>

        {/* Intro */}
        <div className="mb-10">
          <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
            Dimension Labs is bringing product and growth expertise into the startup world. We are a group of 
            engineers, operators, and company builders developing programs and initiatives to power the startups 
            of today and the founders of the future.
          </p>
        </div>

        {/* Fellowship Section */}
        <div className="mb-10">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#10b981', color: 'white' }}>New</span>
            <div>
              <a href="/fellowship" className="block">
                <h3 className="text-base font-semibold mb-1">Venture Growth Fellowship 2026</h3>
                <p className="text-sm" style={{ color: '#787774' }}>Jan 3, 2026</p>
              </a>
            </div>
          </div>
          <p className="text-base leading-relaxed ml-20" style={{ color: '#37352F' }}>
            A spring program leading to summer internships for students who want to be close to founders, 
            product, and deals. Fellows scout early-stage startups, identify pain points, and bring them 
            into Dimension Labs' product studio.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">What We Do</h2>
          <div className="space-y-2">
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              We work with early-stage startups to identify their real technical and design pain 
              points, and bring them into our product studio so we can help them build before they raise.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              Our approach combines deep founder discovery, technical scoping, and execution 
              support—turning uncertainty into structure and helping startups move from idea to 
              product faster.
            </p>
          </div>
        </div>

        {/* About */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <div className="space-y-2">
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              Dimension Labs is proudly built as an initiative of ACube Tech, a global talent partner 
              for early-stage startups. At ACube Tech, our mission is simple but ambitious: to empower 
              startups with exceptional offshore talent—builders and operators—who help founders scale 
              faster, smarter, and more affordably.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              We work with early-stage and growth-stage startups to provide top-tier engineers, designers, 
              and operators, helping them save up to 70% in costs without compromising on quality, 
              ownership, or execution.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              <a href="https://acube-tech.com" target="_blank" rel="noopener noreferrer">
                Visit ACube Tech →
              </a>
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Team</h2>
          <div className="space-y-2">
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              Dimension Labs is built on the foundation of ACube Tech's global talent ecosystem and 
              network of experienced operators, engineers, and founders.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
              If you are interested in joining, please{' '}
              <a href="mailto:team@dimensionlabs.org">
                get in touch
              </a>.
            </p>
          </div>
        </div>

        {/* Partners */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Partners</h2>
          <p className="text-base leading-relaxed" style={{ color: '#37352F' }}>
            We are grateful for the support of ACube Tech and our network of portfolio startups, 
            partner companies, and hackerhouses.
          </p>
        </div>
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
              <a href="/fellowship" style={{ color: '#37352F' }}>Fellowship</a>
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
