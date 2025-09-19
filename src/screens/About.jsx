import { FaHeart, FaUsers, FaGraduationCap, FaHandsHelping, FaPhone, FaEnvelope, FaChurch, FaCross, FaHandHoldingHeart, FaBookOpen, FaShieldAlt, FaGlobe, FaLightbulb, FaHome, FaSmile, FaStar, FaPrayingHands, FaArrowRight, FaPlay, FaHandshake } from "react-icons/fa";

// FaCalendarAlt

const achievements = [
  {
    number: "500+",
    label: "Children Helped",
    description: "Access to quality education, healthcare, and emotional support"
  },
  {
    number: "50+",
    label: "Elderly Supported",
    description: "Healthcare, social activities, and basic needs provided"
  },
  {
    number: "100+",
    label: "Women Empowered",
    description: "Through skills training and economic opportunities"
  },
  {
    number: "4",
    label: "Years of Service",
    description: "Transforming lives since 2020"
  }
];

const team = [
  {
    name: "Joyce Katiiti",
    role: "CEO",
    phone: "+781 3302611",
    email: "joyce@hopechildrenuganda.org",
    description: "Founded the organization in 2020 during COVID-19 to bring hope to the hopeless through the Gospel of Jesus Christ."
  },
  {
    name: "Nakimera Lilian",
    role: "Head of Human Resources",
    phone: "+256 701 342803",
    email: "lilian@hopechildrenuganda.org",
    description: "Oversees team development and community outreach programs."
  },
  {
    name: "Edith Mbekeka",
    role: "Coordinator",
    phone: "+256 766613051",
    email: "edith@hopechildrenuganda.org",
    description: "Coordinates educational and empowerment initiatives across Uganda."
  }
];

const visionGoals = [
  {
    title: "Vocational Schools",
    description: "Set up vocational schools to empower women with skills for their own businesses",
    icon: <FaGraduationCap className="text-3xl" />,
    color: "from-primary-500 to-primary-600"
  },
  {
    title: "Rehabilitation Center",
    description: "Build a rehabilitation center for girls who are mentally, physically and sexually abused",
    icon: <FaShieldAlt className="text-3xl" />,
    color: "from-secondary-500 to-secondary-600"
  },
  {
    title: "Addiction Center",
    description: "Set up an Advanced Addiction center to help youth break free from drugs and alcohol",
    icon: <FaHandHoldingHeart className="text-3xl" />,
    color: "from-accent-500 to-accent-600"
  },
  {
    title: "Global Gospel Outreach",
    description: "Spread the Gospel of our Lord Jesus Christ all over the world through various ministries",
    icon: <FaChurch className="text-3xl" />,
    color: "from-success-500 to-success-600"
  }
];

const services = [
  {
    title: "Gospel Preaching",
    description: "Preach the Gospel of our Lord Jesus Christ through support Crusades, supporting of churches and door to door",
    icon: <FaCross className="text-3xl" />
  },
  {
    title: "Healthcare",
    description: "Provide good quality Health care for the children and elders who are in needy families and to orphans",
    icon: <FaHeart className="text-3xl" />
  },
  {
    title: "Education",
    description: "Provide good quality education to orphans and children from needy families",
    icon: <FaBookOpen className="text-3xl" />
  },
  {
    title: "Clothing",
    description: "Provide clothing's to children and elders in needy families",
    icon: <FaHome className="text-3xl" />
  }
];

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-shimmer { animation: shimmer 2s infinite; }
      `}</style>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: 'url(/assests/child1.jpg)'}} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-secondary-900/90 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl animate-pulse z-10"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-pulse z-10" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-500/15 rounded-full blur-xl animate-pulse z-10" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-success-500/15 rounded-full blur-2xl animate-pulse z-10" style={{animationDelay: '0.5s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-2xl mb-6">
              About <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent animate-gradient">Hope Children</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Bringing hope to the hopeless by changing lives through the Gospel of our Lord Jesus Christ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#our-story"
                className="bg-white text-primary-600 py-4 px-8 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105 flex items-center gap-2"
              >
                <FaPlay className="text-sm" />
                Our Story
              </a>
              <a
                href="#team"
                className="bg-transparent text-white py-4 px-8 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60 flex items-center gap-2"
              >
                Meet Our Team
                <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div id="our-story" className="relative z-20 -mt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-primary-100 p-8 md:p-12 lg:p-16 transform hover:scale-[1.02] transition-all duration-500">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6 shadow-large">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            </div>
            <div className="prose prose-lg max-w-none text-dark-600 leading-relaxed space-y-6">
              <p className="text-xl mb-8">
                <strong className="text-primary-600">Hope Children & Elderly Christian Foundation Uganda</strong> is a Christian founded organization which started with the purpose of bringing hope to the hopeless by changing their lives through preaching the Gospel of our Lord Jesus Christ, helping the orphans, children, elders and empowering women.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center gap-2">
                    <FaPlay className="text-lg" />
                    How it started
                  </h3>
                  <p className="text-lg">
                    The organization started in 2020 during the COVID-19 epidemic. During the lockdown which was caused by the pandemic, I used to see people on social media crying of hunger, children who were malnourished because they were penniless they couldn't afford to buy food. So when I saw this, I got touched, then I called my colleague in Uganda (Africa) we discussed on it and we come up with an idea of buying food and supply it to families which were in need.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold text-secondary-600 mb-4 flex items-center gap-2">
                    <FaHeart className="text-lg" />
                    The turning point
                  </h3>
                  <p className="text-lg">
                    During the process of supplying food we met an elderly woman (70+ years old). She narrated that she had lost a daughter due to a motor accident and left her with four younger children. The elder was 10 years old, and the youngest was 2½ years. They were sleeping in one bedroom rented house with no mattresses, food, and medicine and there was no hope of returning to school even if schools reopen.
                  </p>
                </div>
              </div>
              <p className="text-xl mt-8">
                As a woman I was so touched when I heard this and I decided to do all what I can so that I change and save these people's lives. I thank God that their lives changed and as per they are Glorifying the name of our Lord Jesus Christ.
              </p>
              <p className="text-xl">
                In 2022 we added on other two (2) children and for this case they have parents but the father of these two children is blind, no job and the mother cannot afford the tuition and take care of the family. When we started supporting this family, these children went back to school and one of them graduated from high school and another one is still in high school.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">Our Core Values</h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            The foundation of everything we do is built on these three pillars
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up group">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-8 shadow-large group-hover:scale-110 transition-transform duration-300">
              <FaChurch className="text-3xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-dark-800 mb-6">Our Mission</h3>
            <p className="text-dark-600 leading-relaxed text-lg">
              We preach the Gospel of our Lord Jesus Christ through support Crusades, supporting of churches and door to door. We provide good quality Health care for the children and elders who are in needy families and to orphans. We also provide good quality education to orphans and children from needy families. We provide clothing's to children and elders in needy families.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up group" style={{animationDelay: '0.2s'}}>
            <div className="w-20 h-20 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mb-8 shadow-large group-hover:scale-110 transition-transform duration-300">
              <FaLightbulb className="text-3xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-dark-800 mb-6">Our Vision</h3>
            <p className="text-dark-600 leading-relaxed text-lg">
              In future we want Hope Children and Elderly Christian foundation to be a role model in Africa. We are planning to set up vocational schools or career schools which we know that they will empower women by acquiring skills which will enable them to set up their own businesses rather than to look for jobs hence they improve on their standards of living.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up group" style={{animationDelay: '0.4s'}}>
            <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-8 shadow-large group-hover:scale-110 transition-transform duration-300">
              <FaHandsHelping className="text-3xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-dark-800 mb-6">Our Values</h3>
            <p className="text-dark-600 leading-relaxed text-lg">
              We started all these with no resources, just because I was so touched when I saw these children and women suffering. Am a woman and I know that there is power in women when we support each other, and in our support we raise the younger generation's future. This inspires me.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">What We Do</h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Our comprehensive approach to serving the vulnerable communities in Uganda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-2xl shadow-large p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-dark-800 mb-4">{service.title}</h3>
                <p className="text-dark-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Goals Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">Our Future Vision</h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            We have ambitious plans to expand our impact and reach even more communities in need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionGoals.map((goal, index) => (
            <div key={goal.title} className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up group" style={{animationDelay: `${index * 0.2}s`}}>
              <div className={`text-${goal.color.split('-')[1]}-600 mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {goal.icon}
              </div>
              <h3 className="text-3xl font-bold text-dark-800 mb-6">{goal.title}</h3>
              <p className="text-dark-600 leading-relaxed text-lg">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Achievements</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              When we saw potential in these children we decided to transform their lives and right now they have access to good quality health, good quality education, food, and clothing.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center animate-fade-in-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">{achievement.number}</div>
                  <div className="text-xl font-semibold text-white/90 mb-3">{achievement.label}</div>
                  <div className="text-sm text-white/80 leading-relaxed">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="bg-gradient-to-br from-dark-50 to-dark-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">Our Administrative Team</h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              The organization administrative structure comprises of dedicated leaders committed to bringing hope and transformation to Uganda's most vulnerable communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up group" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-large group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl text-white font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-3xl font-bold text-dark-800 mb-3">{member.name}</h3>
                <p className="text-primary-600 font-semibold text-lg mb-6">{member.role}</p>
                <p className="text-dark-600 mb-8 leading-relaxed text-lg">{member.description}</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-dark-500 hover:text-primary-600 transition-colors duration-300">
                    <FaPhone className="text-lg" />
                    <span className="text-lg">{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-dark-500 hover:text-primary-600 transition-colors duration-300">
                    <FaEnvelope className="text-lg" />
                    <span className="text-lg">{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
            Ever since we started, there is a great change in these children. They were hopeless but now they can tell that their future is bright. I can testify on this through their academics because they are coming out with very good grades.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/donate"
              className="bg-white text-primary-600 py-5 px-10 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaHandHoldingHeart className="text-lg" />
              Donate Now
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white py-5 px-10 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60 flex items-center justify-center gap-3"
            >
              Get Involved
              <FaArrowRight className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}