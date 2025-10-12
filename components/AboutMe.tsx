"use client";
import { useState, useEffect, memo } from "react";
import SectionTitle from "./SectionTitle";
import Stepper, { Step } from "./Stepper";

function AboutMe() {
  const [currentStep, setCurrentStep] = useState(1);



  return (
    <section id="aboutMe" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 scroll-mt-20">
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          About <span className="text-purple-400">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 mt-6 sm:mt-8">
        {/* Left Side - Clean Basic Info */}
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col backdrop-blur-sm border border-slate-500/30 shadow-2xl shadow-slate-500/20 animate-attention-grab animate-vibrant-pulse">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-indigo-500 to-slate-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-slate-400 to-purple-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="text-center space-y-5 sm:space-y-6 md:space-y-8 relative z-10">
            <div>
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
                 Asad Raza
               </h2>
               <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-200 font-medium drop-shadow-md">
                 Full Stack Developer
               </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <p className="text-white leading-relaxed text-center max-w-lg mx-auto text-sm sm:text-base md:text-lg drop-shadow-sm">
                I'm a passionate developer with over 2.5 years of experience building modern, scalable, and user-focused web applications. I work with technologies like React, Node.js, NestJS, Express, MongoDB, PostgreSQL, TypeORM, and Redis, and have integrated APIs such as Stripe and Zoom to deliver real-world functionality. I enjoy transforming ideas into clean, efficient systems that provide seamless user experiences.
              </p>
              <p className="text-white leading-relaxed text-center max-w-lg mx-auto text-sm sm:text-base md:text-lg drop-shadow-sm">
                I'm constantly learning and exploring new tools to improve my craft and stay ahead in the ever-evolving tech world. Beyond coding, I'm fitness-focused, faith-driven, and believe in keeping life simple, balanced, and meaningful. I perform namaz regularly and live by the mindset that with hard work, consistency, and trust in Allah, everything falls into place.
              </p>
            </div>


          </div>
        </div>

        {/* Right Side - Enhanced Education Stepper */}
        <div className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col backdrop-blur-sm border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 animate-attention-grab animate-vibrant-pulse">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-0 right-0 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-indigo-500 to-slate-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-slate-400 to-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-purple-500 to-slate-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          </div>

          <div className="relative z-10 flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
              🎓 Education Journey
            </h3>

            <div className="flex flex-col">
              <Stepper
                initialStep={1}
                onStepChange={(step) => {
                  setCurrentStep(step);
                  console.log(`Education step: ${step}`);
                }}
                onFinalStepCompleted={() => console.log("Education journey completed!")}
                backButtonText="Previous"
                nextButtonText="Next"
                hideCompleteButtonOnLastStep
                stepCircleContainerClassName="bg-transparent border-transparent"
                stepContainerClassName="bg-transparent"
                contentClassName="bg-transparent"
                footerClassName="bg-transparent mt-auto"
                backButtonProps={{
                  className: "text-purple-300/70 hover:text-purple-300 transition-colors bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 rounded-lg"
                }}
                nextButtonProps={{
                  className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                }}
              >
                {/* <Step>
                  <div className="text-center space-y-3 sm:space-y-4 animate-fade-in-scale">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">🎓 High School</h3>
                    <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-400/40 backdrop-blur-sm">
                      <h4 className="text-white font-semibold text-sm sm:text-base">Sun Flower</h4>
                      <p className="text-purple-300 text-xs sm:text-sm">Completed in 2017</p>
                      <p className="text-white/90 text-xs sm:text-sm mt-2">
                        Completed matriculation in 2017, where I developed a strong academic foundation and built an early interest in science and technology.
                      </p>
                    </div>

                  </div>
                </Step> */}

                <Step>
                  <div className="text-center space-y-3 sm:space-y-4 animate-fade-in-scale">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">🎓 Intermediate</h3>
                    <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-400/40 backdrop-blur-sm">
                      <h4 className="text-white font-semibold text-sm sm:text-base">Govt. Degree College, Nazimabad</h4>
                      <p className="text-purple-300 text-xs sm:text-sm">2017 - 2019</p>
                      <p className="text-white/90 text-xs sm:text-sm mt-2">
                        Completed Intermediate with a focus on Mathematics, Physics, and Chemistry, strengthening my analytical skills and logical thinking for higher studies in computer science.
                      </p>
                    </div>
                  </div>
                </Step>

                <Step>
                  <div className="text-center space-y-3 sm:space-y-4 animate-fade-in-scale">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">💻 Advanced Diploma in Software Engineering</h3>
                    <div className="bg-gradient-to-r from-green-500/30 to-purple-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-green-400/40 backdrop-blur-sm relative">
                      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">Aptech Learning Institute</h4>
                      <p className="text-green-300 text-xs sm:text-sm">2020 - 2023</p>
                      <p className="text-white/90 text-xs sm:text-sm mt-2">
                        Completed an advanced diploma focused on full stack software development, covering modern web technologies, database management, cloud integration, and project-based learning. Built strong foundations in both frontend and backend development through practical, hands-on projects.
                      </p>

                    </div>
                  </div>

                </Step>

                <Step>
                  <div className="text-center space-y-3 sm:space-y-4 animate-fade-in-scale">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">🎓 Bachelor's in Computer Science</h3>
                    <div className="bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-400/40 backdrop-blur-sm">
                      <h4 className="text-white font-semibold text-sm sm:text-base">University of Karachi (UBIT)</h4>
                      <p className="text-blue-300 text-xs sm:text-sm">2020 - 2024</p>
                      <p className="text-white/90 text-xs sm:text-sm mt-2">
                        Completed a Bachelor's in Computer Science from UBIT, University of Karachi. Gained deep knowledge of programming, algorithms, data structures, and software engineering principles.
                        Learned to think critically, work smartly under deadlines, and collaborate effectively in team environments through multiple academic and project-based experiences.
                      </p>
                    </div>
                  </div>
                </Step>
          
              </Stepper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutMe);