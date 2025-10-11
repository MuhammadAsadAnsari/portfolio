import SectionTitle from "./SectionTitle";
import Socials from "./Socials";

export default function Availability() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get in <span className="text-purple-400">Touch</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Left Side - Availability Status */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-6 backdrop-blur-sm border border-slate-500/30 shadow-2xl shadow-slate-500/20">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">🚀 Available for Work</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Open to Opportunities</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <h4 className="text-white font-semibold mb-2">💼 Freelance Projects</h4>
                <p className="text-gray-300 text-sm">
                  Available for exciting freelance projects in web development, mobile apps, and full-stack solutions. Ready to bring your ideas to life with modern technologies.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <h4 className="text-white font-semibold mb-2">🌍 Remote Opportunities</h4>
                <p className="text-gray-300 text-sm">
                  Seeking full-time remote positions with companies that value innovation, growth, and meaningful impact through technology.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <h4 className="text-white font-semibold mb-2">🚀 Startup Collaborations</h4>
                <p className="text-gray-300 text-sm">
                  Open to collaborating with startups and early-stage companies looking to build scalable, user-focused digital products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 rounded-2xl p-6 backdrop-blur-sm border border-indigo-500/30 shadow-2xl shadow-indigo-500/20">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                I'm actively seeking opportunities to join a <span className="text-purple-400 font-semibold">collaborative</span> team 
                that values improving people's lives through accessible design, innovative technology solutions, and meaningful digital experiences.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h4 className="text-white font-semibold mb-4">📬 Get In Touch</h4>
              <p className="text-gray-300 text-sm mb-4">
                Ready to discuss your project, explore opportunities, or just have a chat about technology? I'd love to hear from you!
              </p>
              <div className="mt-6">
                <Socials />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-purple-400 font-semibold text-lg">24 Hours</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-purple-400 font-semibold text-lg">Available</div>
                <div className="text-gray-400 text-sm">For New Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
