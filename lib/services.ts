export type ServiceInclude = {
  title: string;
  description: string;
};

export type ServiceStep = {
  step: string;
  title: string;
  description: string;
};

export type NamedBlurb = {
  name: string;
  description: string;
};

export type WhenToUse = {
  title: string;
  whatWeDo: string;
  result: string;
};

export type CaseStudy = {
  before: string;
  after: string;
  maintenance: string;
};

export type ServiceProblem = {
  problem: string;
  impact: string;
  fix: string;
};

export type PricingFactor = {
  title: string;
  description: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  heroSubtitle: string;
  intro: string;
  includes: ServiceInclude[];
  understanding: string[];
  process: ServiceStep[];
  tools: NamedBlurb[];
  methods: NamedBlurb[];
  whenToUse: WhenToUse[];
  caseStudies: CaseStudy[];
  problems: ServiceProblem[];
  benefits: NamedBlurb[];
  pricingRange: string;
  pricingNote: string;
  pricingFactors: PricingFactor[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "search-engine-optimization-seo",
    title: "Search Engine Optimization SEO",
    summary:
      "SEO services that enhance your website's visibility on search engines and drive organic traffic, helping businesses increase their online presence.",
    image: "/services/seo.jpg",
    imageAlt: "Group of colleagues discussing digital marketing strategies in an office setting.",
    heroSubtitle: "Boost your online visibility",
    intro:
      "SEO is crucial for any business looking to enhance its online presence. These SEO services are tailored to meet unique business needs, ensuring you reach your target audience effectively.",
    includes: [
      {
        title: "Keyword Research",
        description:
          "Thorough keyword research to identify the best opportunities for your business, ensuring your content targets the right audience.",
      },
      {
        title: "On-Page Optimization",
        description:
          "Optimization of your website's structure, meta tags, and content to improve search engine visibility and user experience.",
      },
      {
        title: "Link Building",
        description:
          "Ethical link-building strategies to enhance your site's authority and improve its ranking on search engines.",
      },
      {
        title: "Local SEO Strategies",
        description:
          "Local SEO so your business is visible in nearby searches — important for attracting customers who are ready to convert.",
      },
    ],
    understanding: [
      "Search Engine Optimization (SEO) involves optimizing your website to rank higher in search engine results. This includes keyword research, on-page optimization, link building, and content creation, all aimed at improving your site's visibility and attracting organic traffic.",
      "Businesses need effective SEO strategies to stand out in a competitive market. With SEO services, you can address common challenges like low website traffic and poor conversion rates, ensuring your business is easily found by potential customers searching online.",
    ],
    process: [
      { step: "01", title: "Audit", description: "Review your site, rankings, competitors, and technical health to find the highest-impact opportunities." },
      { step: "02", title: "Strategy", description: "Map keywords, content, and technical fixes to a clear plan aligned with your business goals." },
      { step: "03", title: "Implement", description: "Ship on-page, technical, and off-page work with clean, measurable changes." },
      { step: "04", title: "Grow", description: "Track rankings and traffic, then keep optimizing so results compound over time." },
    ],
    tools: [
      { name: "Google Analytics", description: "Tracking website performance and user behavior to make data-driven decisions." },
      { name: "SEMrush", description: "Keyword research, competitor analysis, and site audits." },
      { name: "Ahrefs", description: "Backlink analysis and monitoring your site's authority." },
      { name: "Hootsuite", description: "Managing social accounts so brand messaging stays consistent across platforms." },
    ],
    methods: [
      { name: "On-Page SEO", description: "Optimize individual pages to rank higher and earn more relevant traffic, focusing on content quality and keyword placement." },
      { name: "Local SEO", description: "Target nearby customers by optimizing business profiles and citations." },
      { name: "Content Marketing", description: "Create valuable content that addresses audience needs, improving engagement and search rankings." },
    ],
    whenToUse: [
      {
        title: "Your business is new to the market.",
        whatWeDo: "Establish your online presence through targeted SEO strategies so customers can find you.",
        result: "Increased visibility and brand awareness in a competitive market.",
      },
      {
        title: "You're not ranking for key terms.",
        whatWeDo: "Analyze your current strategy and implement changes to improve rankings for essential keywords.",
        result: "An uptick in organic traffic and potential sales.",
      },
      {
        title: "Your website has high bounce rates.",
        whatWeDo: "Optimize the site for a better user experience so visitors find what they need quickly.",
        result: "Lower bounce rates, better engagement, and higher conversions.",
      },
    ],
    caseStudies: [
      {
        before: "A cafe had fewer than 500 monthly visitors.",
        after: "After SEO, traffic increased to over 2,000 visitors monthly within six months.",
        maintenance: "Regular content updates and ongoing optimization maintain this growth.",
      },
      {
        before: "The site ranked on the third page for key terms.",
        after: "It now ranks on the first page for multiple competitive keywords.",
        maintenance: "Continued backlink building and content marketing keep the rankings stable.",
      },
      {
        before: "Conversion rates were below 2%.",
        after: "After optimizing the site, conversion rates improved to over 5%.",
        maintenance: "Ongoing A/B testing and user feedback ensure continued improvement.",
      },
    ],
    problems: [
      {
        problem: "Low website traffic affecting sales",
        impact: "Without adequate traffic, potential customers can't discover your business, limiting growth opportunities.",
        fix: "SEO strategies focused on increasing organic traffic through targeted keyword optimization and content marketing.",
      },
      {
        problem: "Poor conversion rates",
        impact: "If visitors aren't converting, marketing efforts are wasted and revenue is lost.",
        fix: "Optimize user experience and calls-to-action to enhance conversion rates.",
      },
      {
        problem: "Negative online reviews hurting reputation",
        impact: "Negative reviews can deter potential customers and impact credibility.",
        fix: "Pair SEO with reputation management to improve your brand image.",
      },
    ],
    benefits: [
      { name: "Increased Website Traffic", description: "Effective SEO often increases website traffic by 50% or more within a few months, supporting higher sales and revenue." },
      { name: "Improved Search Rankings", description: "Higher rankings elevate brand visibility. Many clients reach first-page rankings for competitive keywords." },
      { name: "Enhanced User Experience", description: "SEO also improves site speed and mobile responsiveness, keeping visitors engaged and reducing bounce rates." },
      { name: "Local Market Reach", description: "Local SEO helps your business appear in nearby searches so ready-to-buy customers can find you." },
    ],
    pricingRange: "$500 - $2,500 depending on scope",
    pricingNote:
      "Pricing varies based on the scope of work and competition. Factors like the number of keywords targeted and the current state of your site can affect costs. Flexible packages fit different budgets.",
    pricingFactors: [
      { title: "Scope of services", description: "More extensive services, such as ongoing content creation, increase costs." },
      { title: "Competition level", description: "Industries with higher competition may require more investment for effective SEO." },
      { title: "Current website condition", description: "Sites needing significant technical improvements may incur higher initial costs." },
    ],
    faqs: [
      { q: "What is SEO?", a: "SEO is the process of optimizing your website to improve its visibility in search engine results, so people searching for your services can find you." },
      { q: "How does SEO work for businesses?", a: "SEO uses techniques like keyword optimization, content creation, and link building to enhance your website's ranking and attract more traffic." },
      { q: "How much does SEO cost?", a: "Cost varies based on scope of work and competition in your industry, typically ranging from $500 to $2,500 per month." },
      { q: "What are affordable SEO services?", a: "Affordable SEO provides effective strategies tailored to your budget, so smaller businesses can compete and grow without overspending." },
    ],
    related: [
      "payperclick-advertising-ppc",
      "social-media-marketing",
      "content-marketing",
      "email-marketing",
      "web-design-and-development",
    ],
  },
  {
    slug: "payperclick-advertising-ppc",
    title: "PayPerClick Advertising PPC",
    summary:
      "Maximize your ROI with targeted PPC campaigns. Ads that reach your ideal customers, ensuring you get the most out of your advertising budget.",
    image: "/services/ppc.jpg",
    imageAlt: "Three women collaborating on digital advertising strategies around a table with laptops.",
    heroSubtitle: "Boost your business with targeted ads",
    intro:
      "PPC is a powerful advertising tool for businesses looking to enhance online visibility. Attract more customers and increase sales with advertising strategies that work.",
    includes: [
      { title: "Keyword Research", description: "Identify the most effective terms for your ads, ensuring maximum visibility and relevance." },
      { title: "Ad Creation", description: "Creative, compelling ad copy and visuals designed to attract clicks and drive traffic to your website." },
      { title: "Campaign Management", description: "Ongoing management including monitoring performance and making adjustments to improve results." },
      { title: "Performance Analytics", description: "Detailed reporting to track campaign effectiveness and inform future strategies." },
    ],
    understanding: [
      "Pay-Per-Click Advertising (PPC) is a digital marketing model where advertisers pay a fee each time their ad is clicked. You only pay for actual traffic to your website, making it a cost-effective way to drive potential customers. Campaigns can be tailored to target specific audiences so your business gets the visibility it deserves.",
      "Businesses can greatly benefit from PPC, especially in a competitive market. Reach your target audience based on demographics, location, and interests — particularly useful for small businesses looking for affordable PPC to enhance brand awareness and drive sales.",
    ],
    process: [
      { step: "01", title: "Discover", description: "Clarify goals, audience, and budget, then research keywords and competitors." },
      { step: "02", title: "Build", description: "Write ads, set targeting, and launch campaigns with tracking in place." },
      { step: "03", title: "Optimize", description: "Watch performance daily and shift budget toward the ads and keywords that convert." },
      { step: "04", title: "Scale", description: "Expand winning campaigns and keep reporting transparent so you see the return." },
    ],
    tools: [
      { name: "Google Analytics", description: "Track website traffic and analyze user behavior to optimize PPC campaigns." },
      { name: "SEMrush", description: "Keyword research and competitive analysis for effective ad targeting." },
      { name: "Hootsuite", description: "Manage social campaigns that complement PPC and enhance overall marketing." },
      { name: "Mailchimp", description: "Email campaigns that retarget users who engage with PPC ads, nurturing leads." },
    ],
    methods: [
      { name: "A/B Testing", description: "Test ad variations to determine which performs best." },
      { name: "Conversion Rate Optimization", description: "Improve the percentage of visitors who complete desired actions on your website." },
      { name: "Remarketing", description: "Target users who previously interacted with your ads to encourage conversions." },
    ],
    whenToUse: [
      { title: "Launching a new product", whatWeDo: "Create targeted PPC campaigns to generate buzz and attract early adopters.", result: "A successful product launch with immediate sales and customer feedback." },
      { title: "Seasonal promotions or events", whatWeDo: "Develop time-sensitive PPC ads to promote special offers during peak seasons.", result: "Increased traffic and sales during promotional periods." },
      { title: "Expanding your customer base", whatWeDo: "Reach new demographics and markets with paid search and social ads.", result: "A broader customer base and increased brand recognition." },
    ],
    caseStudies: [
      { before: "A restaurant had minimal online visibility and struggled with low foot traffic.", after: "A targeted PPC campaign increased web traffic by 75% and sales by 40% within three months.", maintenance: "Continue to optimize ads and refresh content regularly." },
      { before: "A new boutique had trouble attracting customers and was virtually unknown.", after: "Brand awareness grew, with a 60% increase in searches and a stronger social following.", maintenance: "Ongoing PPC and social integration keep the brand fresh." },
      { before: "An e-commerce store had a high bounce rate and low conversion from PPC traffic.", after: "Refined ad copy and landing pages improved conversion rates by 50%.", maintenance: "Regular A/B testing keeps performance high." },
    ],
    problems: [
      { problem: "Low website traffic affecting sales", impact: "Without sufficient traffic, businesses struggle to generate leads and conversions.", fix: "Targeted PPC campaigns drive immediate traffic, increasing visibility and potential sales." },
      { problem: "Poor conversion rates from ads", impact: "Ineffective ads waste budget and miss growth opportunities.", fix: "Compelling ads that resonate with your audience improve click-through rates and conversions." },
      { problem: "Lack of brand awareness", impact: "Without recognition, attracting new customers is harder.", fix: "PPC increases brand visibility so potential customers actually see you." },
    ],
    benefits: [
      { name: "Immediate Traffic Boost", description: "PPC can generate traffic within hours of launching — an essential tool when you need results now." },
      { name: "Targeted Advertising", description: "Target specific demographics and locations so ads reach the right audience." },
      { name: "Cost Control", description: "Set a budget, control spending, and adjust bids based on performance for a better return." },
      { name: "Measurable Results", description: "Detailed analytics let you track performance and refine strategy with data." },
    ],
    pricingRange: "$150 - $850 depending on scope",
    pricingNote:
      "Cost varies based on competition and campaign goals. Typical monthly investment for effective PPC management sits in this range, plus ad spend. Transparent pricing so you know what you're paying for.",
    pricingFactors: [
      { title: "Keyword competitiveness", description: "Highly competitive keywords can drive up costs, while niche keywords may be more affordable." },
      { title: "Ad placement", description: "Prime positions may cost more, but they often yield better results." },
      { title: "Campaign complexity", description: "Multiple ads and targeting options may require higher budgets for effective management." },
    ],
    faqs: [
      { q: "What is PPC?", a: "PPC is pay-per-click advertising: you pay for clicks on ads that lead to your website, a cost-effective way to attract new customers." },
      { q: "How does PPC work for businesses?", a: "You bid on keywords relevant to your products or services. When users search those keywords, your ads may appear and drive traffic to your site." },
      { q: "How much does PPC cost?", a: "It varies with competition, keywords, and budget. Management often ranges from $150 to $850 per month, plus media spend." },
      { q: "What are the benefits of PPC services?", a: "Immediate traffic, targeted ads, cost control, and measurable results — a vital part of a modern marketing mix." },
    ],
    related: [
      "search-engine-optimization-seo",
      "social-media-marketing",
      "content-marketing",
      "email-marketing",
      "web-design-and-development",
      "branding-and-identity",
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    summary:
      "Engage with your audience through tailored social media strategies. Build a strong online community and improve brand awareness.",
    image: "/services/social.jpg",
    imageAlt: "A diverse team discussing business strategy around a conference table in a modern office.",
    heroSubtitle: "Social media marketing that drives results",
    intro:
      "Social media marketing is essential for businesses looking to enhance online visibility and engage customers. Impactful campaigns that resonate with your audience and drive conversions.",
    includes: [
      { title: "Content Creation", description: "High-quality, engaging content tailored to your brand's voice and audience preferences." },
      { title: "Social Media Management", description: "Consistent posting and engagement across your social accounts." },
      { title: "Targeted Advertising", description: "Ad campaigns on platforms like Facebook and Instagram to reach your ideal customers." },
      { title: "Performance Analytics", description: "Detailed reports to track campaign success and inform future strategies." },
    ],
    understanding: [
      "Social media marketing involves creating and managing content on social platforms to achieve marketing and branding goals. That includes engaging posts, targeted ads, and performance analysis to refine strategy.",
      "Businesses need social media marketing to navigate a competitive landscape and reach potential customers where they spend time online. Increase visibility, enhance engagement, and address challenges like low website traffic and poor conversion rates.",
    ],
    process: [
      { step: "01", title: "Listen", description: "Review your current presence, audience, and competitors to find the right platforms and tone." },
      { step: "02", title: "Plan", description: "Build a content calendar, creative direction, and paid strategy that matches your goals." },
      { step: "03", title: "Publish", description: "Post consistently, engage with comments, and run ads that actually convert." },
      { step: "04", title: "Measure", description: "Report on reach, engagement, and leads, then iterate what works." },
    ],
    tools: [
      { name: "Hootsuite", description: "Scheduling and managing posts across multiple platforms." },
      { name: "Google Analytics", description: "Track website traffic and user behavior to inform social strategy." },
      { name: "Canva", description: "Create visually appealing social content." },
      { name: "Mailchimp", description: "Email campaigns that complement social efforts." },
    ],
    methods: [
      { name: "Content Calendar Planning", description: "A calendar keeps posting consistent and aligned with marketing goals." },
      { name: "A/B Testing", description: "Test ads to find the most effective messaging and visuals." },
      { name: "Engagement Tracking", description: "Monitor engagement metrics to refine future campaigns." },
    ],
    whenToUse: [
      { title: "Launching a new product", whatWeDo: "Create buzz through engaging posts and targeted ads.", result: "Increased awareness and sales as customers find your store or website." },
      { title: "Rebranding your business", whatWeDo: "Communicate your new brand identity and values to your audience.", result: "A rebrand that resonates with existing and new customers." },
      { title: "Running a seasonal promotion", whatWeDo: "Design a campaign that highlights your promotion across multiple platforms.", result: "Increased foot traffic and online sales during the promotional period." },
    ],
    caseStudies: [
      { before: "A restaurant had only 200 followers and low engagement.", after: "Followers grew to 1,500, with engagement rates increasing by 250%.", maintenance: "Regular posting and engagement maintained this growth." },
      { before: "A store averaged $1,000 per month in online sales with low foot traffic.", after: "Sales surged to $3,500 per month, driven by targeted ads and promotions.", maintenance: "Ongoing promotions and seasonal campaigns keep sales strong." },
      { before: "A new business had no established online presence.", after: "Over 5,000 impressions in the first month, establishing a foundation for growth.", maintenance: "Regular updates and community engagement continue to build the brand." },
    ],
    problems: [
      { problem: "Low website traffic affecting sales", impact: "Without sufficient traffic, businesses struggle to convert leads into customers.", fix: "Social strategies drive targeted traffic to your website, increasing conversion chances." },
      { problem: "Negative online reviews hurting reputation", impact: "Negative reviews can deter customers and damage credibility.", fix: "Manage reputation, address feedback promptly, and promote positive reviews." },
      { problem: "Lack of brand awareness", impact: "Potential customers may not even know your business exists.", fix: "Targeted campaigns increase visibility and help you grow your customer base." },
    ],
    benefits: [
      { name: "Enhanced Brand Awareness", description: "Social can increase visibility significantly. Engaging content shared by followers amplifies your reach." },
      { name: "Improved Customer Engagement", description: "Meaningful interactions lead to higher loyalty and retention." },
      { name: "Targeted Advertising", description: "Facebook and Instagram ads reach specific demographics so spend hits the right audience." },
      { name: "Cost-Effective Marketing", description: "Compared with traditional advertising, social campaigns can run at a fraction of the cost." },
    ],
    pricingRange: "$500 - $2,500 depending on scope",
    pricingNote:
      "Pricing varies with content creation, advertising budget, and management time. Focus is on delivering value through strategies that drive results.",
    pricingFactors: [
      { title: "Content creation frequency", description: "More frequent content requires more production resources." },
      { title: "Advertising budget", description: "A larger ad budget allows broader reach and more effective targeting." },
      { title: "Management complexity", description: "Campaigns across multiple platforms take more management time." },
    ],
    faqs: [
      { q: "What is social media marketing?", a: "Creating and managing content on platforms like Facebook, Instagram, and Twitter to engage audiences and promote businesses." },
      { q: "How can social media marketing help my business?", a: "It can boost brand awareness, improve engagement, and drive website traffic — leading to higher conversions and sales." },
      { q: "What are the benefits?", a: "Enhanced visibility, targeted advertising, better customer interactions, and cost-effective marketing." },
      { q: "How do I get started?", a: "Reach out with your goals and current channels. We'll map a plan for content, ads, and reporting." },
    ],
    related: [
      "search-engine-optimization-seo",
      "payperclick-advertising-ppc",
      "content-marketing",
      "email-marketing",
      "web-design-and-development",
      "branding-and-identity",
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    summary:
      "Content marketing focused on creating valuable content that resonates with your audience — helping you establish authority in your niche.",
    image: "/services/content.jpg",
    imageAlt: "Group of professionals collaborating on a project with graphs in an office setting.",
    heroSubtitle: "Content marketing for business growth",
    intro:
      "Content marketing is essential for businesses looking to enhance online visibility and engagement. Attract, engage, and convert your target audience so you stay ahead in a competitive market.",
    includes: [
      { title: "Content Strategy Development", description: "A tailored strategy aligned with your business objectives and target audience." },
      { title: "High-Quality Content Creation", description: "Engaging blogs, articles, and social updates that stay relevant to your audience." },
      { title: "Content Distribution", description: "Get your content in front of the right people across the right platforms." },
      { title: "Performance Tracking and Analysis", description: "Regular reports so you understand impact and what to do next." },
    ],
    understanding: [
      "Content marketing involves creating and distributing valuable, relevant content to attract and engage a clearly defined audience. That means focusing on trends, interests, and needs so your brand message is communicated clearly, driving traffic and boosting conversions.",
      "Customers increasingly turn to online platforms for information and services. By leveraging content creation, you can enhance brand awareness and establish authority in your niche — especially useful for smaller businesses competing with larger ones.",
    ],
    process: [
      { step: "01", title: "Research", description: "Study your audience, keywords, and competitors to find content that will actually rank and convert." },
      { step: "02", title: "Plan", description: "Build a content calendar covering blogs, landing pages, and distribution channels." },
      { step: "03", title: "Create", description: "Write and design content that is useful, on-brand, and optimized for search." },
      { step: "04", title: "Distribute", description: "Publish, promote, and measure so each piece earns traffic over time." },
    ],
    tools: [
      { name: "Google Analytics", description: "Track traffic and user behavior to optimize content strategy." },
      { name: "SEMrush", description: "Keyword research and competitive analysis to inform creation." },
      { name: "Mailchimp", description: "Email campaigns that distribute content to subscribers." },
      { name: "Hootsuite", description: "Schedule social posts for consistent engagement." },
    ],
    methods: [
      { name: "SEO Optimization", description: "Apply SEO best practices so content ranks and visibility grows." },
      { name: "Content Calendar Planning", description: "A structured calendar keeps delivery timely and consistent." },
      { name: "Audience Segmentation", description: "Tailor content to demographics and interests so it resonates with each group." },
    ],
    whenToUse: [
      { title: "Launching a new product", whatWeDo: "Create a campaign that highlights features and benefits for the right audience.", result: "Buzz and initial sales, establishing a strong market presence." },
      { title: "Rebranding your business", whatWeDo: "Communicate your new identity through consistent messaging.", result: "Your audience understands the new direction and stays engaged." },
      { title: "Increasing customer engagement", whatWeDo: "Produce interactive content such as polls and quizzes.", result: "Higher engagement rates and stronger loyalty." },
    ],
    caseStudies: [
      { before: "A restaurant struggled with low online visibility and minimal engagement.", after: "Website traffic increased by 60%, and online reservations doubled within three months.", maintenance: "Regular content updates and seasonal promotions." },
      { before: "A boutique had little recognition, resulting in low foot traffic and sales.", after: "Brand awareness rose, leading to a 40% increase in store visits and a loyal customer base.", maintenance: "Ongoing social engagement and community content." },
      { before: "A startup had trouble connecting with its audience, leading to low engagement.", after: "Engagement rates improved by 50%, fostering a stronger online community.", maintenance: "Newsletters and social interaction keep the audience engaged." },
    ],
    problems: [
      { problem: "Low website traffic affecting sales", impact: "Without sufficient traffic, sales opportunities are missed.", fix: "Drive organic traffic through SEO-optimized content that attracts your target audience." },
      { problem: "Poor brand visibility online", impact: "Limited visibility means low awareness and weaker sales.", fix: "Valuable content that resonates with your audience enhances presence and visibility." },
      { problem: "Ineffective social media presence", impact: "An inactive presence misses engagement opportunities.", fix: "Engaging social content that encourages interaction and builds community." },
    ],
    benefits: [
      { name: "Increased Website Traffic", description: "Quality content drives organic traffic. Businesses often see around a 30% increase in visits within six months." },
      { name: "Improved Conversion Rates", description: "Engaging content leads to more leads — often around a 20% increase after consistent publishing." },
      { name: "Enhanced Brand Awareness", description: "Regular valuable content helps establish your brand as an authority and builds trust." },
      { name: "Better Customer Engagement", description: "Relevant content boosts loyalty and retention — essential for long-term success." },
    ],
    pricingRange: "$300 - $2,500 depending on scope",
    pricingNote:
      "Pricing varies with content type, update frequency, and goals. Packages are designed to fit different budgets while delivering high-quality results.",
    pricingFactors: [
      { title: "Content type", description: "Blogs, videos, and social posts have different production costs." },
      { title: "Frequency of content", description: "Regular updates increase cost but also engagement and SEO." },
      { title: "Customization level", description: "Highly tailored content may need more research and development." },
    ],
    faqs: [
      { q: "What is content marketing?", a: "Creating tailored content — blogs, social posts, and videos — designed to engage and convert potential customers." },
      { q: "How can content marketing improve my business?", a: "It can boost online presence, increase website traffic, and enhance engagement, leading to higher conversions and sales." },
      { q: "What types of content marketing do you offer?", a: "Blog writing, social content, email marketing, and video production, tailored to your business needs." },
      { q: "Can you help with local content?", a: "Yes. Content is written to resonate with the people you actually want to reach, aligned with your business objectives." },
    ],
    related: [
      "search-engine-optimization-seo",
      "payperclick-advertising-ppc",
      "social-media-marketing",
      "email-marketing",
      "web-design-and-development",
      "branding-and-identity",
    ],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    summary:
      "Reach your customers directly with effective email campaigns. Messages that convert and boost engagement.",
    image: "/services/email.jpg",
    imageAlt: "A diverse team discussing business strategy around a conference table in a modern office.",
    heroSubtitle: "Email marketing that drives results",
    intro:
      "Email marketing is a powerful way to connect with your audience and drive sales. Engage customers, improve retention, and increase conversions.",
    includes: [
      { title: "Campaign Strategy Development", description: "A customized strategy that aligns with your business goals and target audience." },
      { title: "Content Creation", description: "Engaging copy and design so your messages resonate." },
      { title: "List Management", description: "Segmented lists to maximize engagement and conversion rates." },
      { title: "Performance Tracking", description: "Analytics that show what works and what needs improvement." },
    ],
    understanding: [
      "Email marketing means sending targeted messages to potential and existing customers. Communicate directly, promoting products, services, and offers. Segmentation and personalization significantly enhance engagement rates.",
      "Stand out in a competitive market by reaching your audience where they already check messages. Email campaigns help address low website traffic and poor conversion rates, and they foster stronger client relationships.",
    ],
    process: [
      { step: "01", title: "Define", description: "Clarify goals, offers, and audience segments before writing a single email." },
      { step: "02", title: "Build", description: "Set up lists, templates, automation, and tracking." },
      { step: "03", title: "Send", description: "Launch campaigns and flows with clear CTAs and on-brand design." },
      { step: "04", title: "Improve", description: "Use open, click, and conversion data to refine every send." },
    ],
    tools: [
      { name: "Mailchimp", description: "Create and manage campaigns with design and automation." },
      { name: "Google Analytics", description: "Track performance and engagement for optimization." },
      { name: "Hootsuite", description: "Coordinate social promotions that complement email." },
      { name: "Canva", description: "Design email graphics and layouts that enhance engagement." },
    ],
    methods: [
      { name: "Segmentation", description: "Segment by behavior and preferences to deliver tailored content." },
      { name: "A/B Testing", description: "Test subject lines and content to see what resonates." },
      { name: "Personalization", description: "Personalized emails based on customer data lead to higher engagement." },
    ],
    whenToUse: [
      { title: "Launching a new product", whatWeDo: "A targeted campaign announcing the launch, highlighting key features and benefits.", result: "Increased awareness and initial sales from interested customers." },
      { title: "Seasonal promotions", whatWeDo: "Design a campaign to promote seasonal specials.", result: "Boosted traffic and sales during the promotional period." },
      { title: "Re-engaging past customers", whatWeDo: "Reconnect with previous clients using exclusive discounts.", result: "Higher conversion as former customers return." },
    ],
    caseStudies: [
      { before: "A cafe struggled with low customer retention and engagement.", after: "Engagement increased by 60%, and repeat visits rose by 30%.", maintenance: "Regular updates and promotions to maintain interest." },
      { before: "A retail store had stagnant sales and a minimal online presence.", after: "Online sales increased by 50%, and foot traffic improved.", maintenance: "Keep the list updated and engage with new promotions." },
      { before: "Many past customers had not returned for over a year.", after: "A re-engagement campaign resulted in a 40% return rate.", maintenance: "Follow-up emails about new products keep them informed." },
    ],
    problems: [
      { problem: "Low customer engagement rates", impact: "Declining sales and weaker brand loyalty.", fix: "Personalized content that resonates with your audience." },
      { problem: "Ineffective communication with clients", impact: "Missed opportunities without clear communication.", fix: "Campaigns that deliver the right message to the right audience." },
      { problem: "Difficulty measuring marketing effectiveness", impact: "Without tracking, ROI is unclear.", fix: "Detailed analytics so you can measure success and refine strategy." },
    ],
    benefits: [
      { name: "Increased Customer Engagement", description: "Personalized content delivered directly can boost engagement significantly." },
      { name: "Cost-Effective Communication", description: "Reach larger audiences without the cost of traditional marketing." },
      { name: "Measurable Results", description: "Track opens, clicks, and conversions, then refine campaigns over time." },
      { name: "Builds Brand Loyalty", description: "Regular, useful email keeps your brand top of mind so customers return and refer." },
    ],
    pricingRange: "$300 - $1,500 depending on scope",
    pricingNote:
      "Pricing depends on campaign complexity and list size. A cost-effective way to reach your audience and drive sales.",
    pricingFactors: [
      { title: "Campaign complexity", description: "Advanced segmentation and automation increase costs." },
      { title: "Email list size", description: "Larger lists need more resources to manage well." },
      { title: "Frequency of campaigns", description: "Regular sends require ongoing management and content creation." },
    ],
    faqs: [
      { q: "What is email marketing?", a: "Sending targeted emails to potential and existing customers to promote products and services, engage your audience, and drive sales." },
      { q: "How can email marketing benefit my business?", a: "It can boost engagement, increase loyalty, and provide measurable results that improve outreach and conversions." },
      { q: "What email marketing services are included?", a: "Strategy, content creation, campaign management, and performance analysis." },
      { q: "What strategies do you use?", a: "Understand the audience, create personalized content, and use analytics to optimize campaigns." },
    ],
    related: [
      "search-engine-optimization-seo",
      "payperclick-advertising-ppc",
      "social-media-marketing",
      "content-marketing",
      "web-design-and-development",
      "branding-and-identity",
    ],
  },
  {
    slug: "web-design-and-development",
    title: "Web Design and Development",
    summary:
      "Stunning, user-friendly websites that not only look great but also drive conversions — optimized for performance.",
    image: "/services/web.jpg",
    imageAlt: "A diverse team of young professionals working on a business strategy in an urban office setting.",
    heroSubtitle: "Web design that drives results",
    intro:
      "Web design is crucial for businesses aiming to stand out. Visually appealing, functional websites tailored to your needs so your brand gets the attention it deserves.",
    includes: [
      { title: "Custom Website Design", description: "Unique designs that reflect your brand and engage your audience." },
      { title: "Responsive Design", description: "Sites that work seamlessly on all devices." },
      { title: "SEO Optimization", description: "SEO best practices built into the design to improve search visibility." },
      { title: "Ongoing Maintenance", description: "Post-launch support to keep your website updated and running smoothly." },
    ],
    understanding: [
      "Web design and development means creating visually engaging, user-friendly websites that attract visitors and convert them into customers. Aesthetics plus functionality, optimized for performance, so the site resonates with your target audience.",
      "Whether you're a small business or a startup, a strong online presence matters. Responsive design ensures your site looks great on all devices, enhancing experience and engagement.",
    ],
    process: [
      { step: "01", title: "Discover", description: "Understand your brand, users, and goals, then map pages and features." },
      { step: "02", title: "Design", description: "Wireframes and UI that look sharp and convert, reviewed with you before build." },
      { step: "03", title: "Build", description: "Modern, fast, accessible frontends with solid backend when the product needs it." },
      { step: "04", title: "Launch", description: "Ship, monitor, and iterate — with SEO and performance baked in." },
    ],
    tools: [
      { name: "Google Analytics", description: "Track performance and user behavior to optimize designs and strategy." },
      { name: "SEMrush", description: "Keyword research and competitive analysis to enhance SEO." },
      { name: "Next.js / React", description: "Flexible, scalable website development with modern performance." },
      { name: "Mailchimp", description: "Email campaigns that drive traffic back to your website." },
    ],
    methods: [
      { name: "Agile Development", description: "Flexibility throughout the process, with ongoing feedback and improvements." },
      { name: "User-Centered Design", description: "Focus on audience needs so the final product meets expectations." },
      { name: "SEO Best Practices", description: "SEO from the outset so the site attracts organic traffic." },
    ],
    whenToUse: [
      { title: "Launching a new business", whatWeDo: "A comprehensive website that reflects your brand and attracts customers.", result: "Immediate online presence and visibility." },
      { title: "Redesigning an outdated website", whatWeDo: "Modern design and functionality with current best practices.", result: "Better engagement and improved conversion rates." },
      { title: "Expanding to eCommerce", whatWeDo: "A robust storefront that meets customer needs and checkout expectations.", result: "Tap into online shopping and boost sales." },
    ],
    caseStudies: [
      { before: "A dated website with poor UX and low conversions.", after: "150% increase in traffic and 50% increase in conversions within three months.", maintenance: "Regular updates and SEO checks." },
      { before: "Not mobile-friendly, leading to high bounce rates from mobile users.", after: "Mobile engagement improved by 70%, with lower bounce rates.", maintenance: "Ongoing testing keeps mobile performance optimized." },
      { before: "Lacked SEO, resulting in low search visibility.", after: "First-page rankings for several key terms and 200% more organic traffic.", maintenance: "Continued SEO and content updates." },
    ],
    problems: [
      { problem: "Low website traffic affecting sales", impact: "Without traffic, you struggle to reach customers and lose revenue.", fix: "SEO-informed design to enhance visibility and drive more traffic." },
      { problem: "Poor user experience leading to high bounce rates", impact: "A confusing site drives visitors away.", fix: "User-friendly designs that engage visitors and improve retention." },
      { problem: "Inconsistent branding across platforms", impact: "Inconsistency confuses customers and weakens identity.", fix: "A cohesive look and feel that solidifies your brand." },
    ],
    benefits: [
      { name: "Increased Online Visibility", description: "A well-designed site plus SEO best practices improves search ranking and organic traffic." },
      { name: "Enhanced User Experience", description: "Intuitive navigation and fast loading times reduce bounce rates." },
      { name: "Higher Conversion Rates", description: "Optimizing for user actions helps turn visitors into paying customers." },
      { name: "Mobile Responsiveness", description: "The site performs well on every screen size." },
    ],
    pricingRange: "$1,500 - $10,000 depending on scope",
    pricingNote:
      "Cost varies with project complexity: number of pages, custom features, and ongoing support. Quality and expertise without cutting corners.",
    pricingFactors: [
      { title: "Scope of the project", description: "More complex projects with extra features cost more. Detailed quotes after consultation." },
      { title: "Customization level", description: "Custom designs cost more than template-based work." },
      { title: "Ongoing maintenance", description: "Support and updates factor into overall pricing." },
    ],
    faqs: [
      { q: "What is web design and development?", a: "Creating and maintaining websites — visual design, user experience, and technical development — so your site meets visitor needs." },
      { q: "How much does web design cost?", a: "It varies with complexity. Generally $1,500 to $10,000 depending on features and design requirements." },
      { q: "What web development services are offered?", a: "Custom website design, eCommerce, responsive design, and redesigns that improve user experience." },
      { q: "Do you build full stack applications?", a: "Yes. Alongside marketing-ready sites, I build full stack apps with modern frontend and backend stacks." },
    ],
    related: [
      "search-engine-optimization-seo",
      "payperclick-advertising-ppc",
      "social-media-marketing",
      "content-marketing",
      "email-marketing",
      "branding-and-identity",
    ],
  },
  {
    slug: "branding-and-identity",
    title: "Branding and Identity",
    summary:
      "Build a strong brand presence with identity design services. Memorable brands that stand out in a competitive market.",
    image: "/services/branding.jpg",
    imageAlt: "Group of colleagues discussing digital marketing strategies in an office setting.",
    heroSubtitle: "Elevate your business identity",
    intro:
      "Branding is crucial for businesses aiming to establish a strong identity. Comprehensive branding services help you stand out — whether you're a startup or an established company.",
    includes: [
      { title: "Brand Strategy", description: "A strategy that outlines mission, vision, and values, aligned with your business goals." },
      { title: "Visual Identity Design", description: "Logo, color schemes, and typography that reflect your brand's personality." },
      { title: "Brand Messaging", description: "Compelling messaging that communicates your value proposition." },
      { title: "Brand Guidelines", description: "Guidelines so every platform stays consistent." },
    ],
    understanding: [
      "Branding and identity means creating a unique image and presence: logo, color, typography, and messaging that resonate with your audience. Effective branding differentiates you from competitors and builds trust and loyalty.",
      "Businesses face unique challenges, from competing with established brands to standing out in crowded markets. Branding services help you develop an identity that connects and drives engagement.",
    ],
    process: [
      { step: "01", title: "Discover", description: "Interview you, study competitors, and define who the brand is for." },
      { step: "02", title: "Position", description: "Lock messaging, personality, and the space you should own." },
      { step: "03", title: "Design", description: "Create logo, palette, type, and visual system that feel unmistakably yours." },
      { step: "04", title: "Apply", description: "Roll the identity onto web, social, and print with clear guidelines." },
    ],
    tools: [
      { name: "Google Analytics", description: "Track performance and user behavior to refine branding." },
      { name: "SEMrush", description: "Competitive analysis and keyword research so branding aligns with market trends." },
      { name: "Canva / Figma", description: "Design branding materials quickly and consistently." },
      { name: "Mailchimp", description: "Email campaigns that reinforce branding and engage your audience." },
    ],
    methods: [
      { name: "Brand Positioning", description: "Define how your brand is perceived relative to competitors." },
      { name: "Customer Persona Development", description: "Personas help tailor branding to real audience needs." },
      { name: "Visual Identity Framework", description: "Cohesive visual elements across all platforms." },
    ],
    whenToUse: [
      { title: "Launching a new business", whatWeDo: "Create a strong identity from the ground up.", result: "A defined brand that attracts initial customers." },
      { title: "Rebranding an existing business", whatWeDo: "Analyze the current brand and refresh the identity.", result: "A revitalized brand that attracts new customers." },
      { title: "Expanding into new markets", whatWeDo: "Tailor branding to new demographics while staying recognizable.", result: "Smoother market entry and a stronger presence." },
    ],
    caseStudies: [
      { before: "A generic logo and inconsistent messaging, leading to low recognition.", after: "A unique logo and cohesive message, with a 40% increase in inquiries.", maintenance: "Regular brand audits and updates." },
      { before: "Negative reviews affecting reputation and sales.", after: "A reputation strategy improved customer sentiment by 60%.", maintenance: "Ongoing monitoring and customer engagement." },
      { before: "Minimal customer engagement and weak visibility.", after: "50% increase in website traffic and social engagement after a branding overhaul.", maintenance: "Consistent marketing and messaging keep momentum." },
    ],
    problems: [
      { problem: "Low brand awareness", impact: "Potential customers overlook you, leading to lost sales.", fix: "Targeted branding that increases visibility and recognition." },
      { problem: "Inconsistent messaging across platforms", impact: "Confusion weakens identity and trust.", fix: "Cohesive messaging that reinforces identity." },
      { problem: "Negative reviews affecting brand perception", impact: "Reputation damage deters new customers.", fix: "Reputation management alongside branding to promote better experiences." },
    ],
    benefits: [
      { name: "Increased Brand Awareness", description: "A well-defined identity makes you easier to recognize and remember." },
      { name: "Stronger Customer Loyalty", description: "When your brand resonates, customers return and recommend you." },
      { name: "Enhanced Market Positioning", description: "A unique identity helps you compete and stand out." },
      { name: "Improved Perception of Value", description: "Customers often pay more for brands they trust." },
    ],
    pricingRange: "$1,500 - $10,000 depending on scope",
    pricingNote:
      "Costs vary with scope, complexity, and services required. Designed to be affordable while delivering high-quality results.",
    pricingFactors: [
      { title: "Scope of services", description: "More comprehensive strategy requires more resources." },
      { title: "Design complexity", description: "Custom logo and design elements cost more than template-based work." },
      { title: "Market research needs", description: "Deeper research into customer preferences can add to cost." },
    ],
    faqs: [
      { q: "What is branding?", a: "Creating a unique identity that resonates with consumers — logo, messaging, and overall brand strategy." },
      { q: "How can branding help my business?", a: "It enhances visibility and reputation, builds trust and loyalty, and can lead to higher sales." },
      { q: "What branding services are offered?", a: "Brand strategy, logo design, visual identity, and ongoing brand management." },
      { q: "Is branding only for large companies?", a: "No. Clear identity helps businesses of every size compete without looking generic." },
    ],
    related: [
      "search-engine-optimization-seo",
      "payperclick-advertising-ppc",
      "social-media-marketing",
      "content-marketing",
      "email-marketing",
      "web-design-and-development",
    ],
  },
  {
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    summary:
      "Protect and enhance your online reputation. Manage reviews and feedback so you keep a positive online image.",
    image: "/services/reputation.jpg",
    imageAlt: "A diverse team of young professionals working on a business strategy in an urban office setting.",
    heroSubtitle: "Protect and enhance your online presence",
    intro:
      "Online reputation management is crucial for businesses looking to safeguard their reputation. Monitor, manage, and improve your online image to attract more customers.",
    includes: [
      { title: "Review Monitoring", description: "Monitor reviews across platforms so you stay informed and can respond promptly." },
      { title: "Social Media Management", description: "Engage with customers and promote positive interactions." },
      { title: "Content Creation", description: "Positive content that enhances your brand image and counters negative reviews." },
      { title: "Crisis Management", description: "Strategies to mitigate damage and restore your brand's image if a crisis hits." },
    ],
    understanding: [
      "Online reputation management involves monitoring, influencing, and managing your brand's online presence — responding to reviews, managing social interactions, and ensuring you appear positively in search results. Build trust and credibility with your audience.",
      "Businesses face unique challenges such as negative reviews or a lack of visibility. Reputation services help you combat negative feedback and enhance presence, leading to increased trust and sales.",
    ],
    process: [
      { step: "01", title: "Audit", description: "Map where you appear online — reviews, search, and social — and flag risks." },
      { step: "02", title: "Respond", description: "Set up monitoring and a response playbook for every review and mention." },
      { step: "03", title: "Improve", description: "Generate genuine positive reviews and publish content that ranks for your brand." },
      { step: "04", title: "Protect", description: "Keep watching, report monthly, and step in fast if a crisis appears." },
    ],
    tools: [
      { name: "Google Analytics", description: "Track website traffic and understand customer behavior." },
      { name: "SEMrush", description: "Monitor online presence and analyze competitors." },
      { name: "Hootsuite", description: "Manage and schedule social posts." },
      { name: "Mailchimp", description: "Email campaigns to solicit reviews and engage customers." },
    ],
    methods: [
      { name: "Crisis Communication Plan", description: "A plan to address negative feedback effectively." },
      { name: "Proactive Engagement", description: "Engage through social and review responses to foster a positive image." },
      { name: "Content Marketing Strategy", description: "High-quality content that positions your brand positively." },
    ],
    whenToUse: [
      { title: "After receiving negative reviews", whatWeDo: "Respond to reviews and create a strategy to improve future feedback.", result: "More positive reviews and improved customer perception." },
      { title: "Launching a new product or service", whatWeDo: "Create buzz and positive content to support the launch.", result: "Higher initial sales and positive brand recognition." },
      { title: "Facing a public relations crisis", whatWeDo: "Implement strategies to address the issue and restore reputation.", result: "Faster recovery and regained customer trust." },
    ],
    caseStudies: [
      { before: "A restaurant had a 2-star rating due to multiple negative reviews.", after: "A 4.5-star rating and a significant increase in foot traffic.", maintenance: "Continual engagement and review monitoring." },
      { before: "A retail store faced backlash after a product recall.", after: "Rating improved from 1.5 to 4 stars after a crisis strategy.", maintenance: "Ongoing communication and transparency." },
      { before: "A tech startup struggled with low visibility and negative press.", after: "First-page ranking for brand terms and 70% more positive reviews.", maintenance: "Regular content updates and proactive review management." },
    ],
    problems: [
      { problem: "Negative online reviews impacting sales", impact: "Ignoring reviews can lose customers and damage reputation.", fix: "Monitor and respond to reviews, encouraging positive feedback." },
      { problem: "Low visibility in search results", impact: "Customers can't find you — or only find the wrong story.", fix: "Improve presence so positive content ranks higher." },
      { problem: "Inconsistent branding across platforms", impact: "Confusion weakens identity.", fix: "A cohesive brand message across platforms." },
    ],
    benefits: [
      { name: "Increased Customer Trust", description: "A positive reputation attracts more clients — businesses with good reviews often see around a 20% sales lift." },
      { name: "Improved Search Visibility", description: "Active reputation work can improve visibility by around 30%." },
      { name: "Crisis Management", description: "Quick, effective responses can reduce negative impact by up to 50%." },
      { name: "Enhanced Brand Awareness", description: "A strong presence helps you reach a wider audience." },
    ],
    pricingRange: "$300 - $2,000 depending on scope",
    pricingNote:
      "Pricing varies with complexity and monitoring level. Options for different business sizes.",
    pricingFactors: [
      { title: "Scope of services", description: "Basic monitoring is more affordable than full-service management." },
      { title: "Frequency of monitoring", description: "Regular reporting costs more than occasional check-ins." },
      { title: "Type of business", description: "Different industries may need different strategies." },
    ],
    faqs: [
      { q: "What is online reputation management?", a: "Monitoring and influencing how your business is perceived online — reviews, social, and search results." },
      { q: "How can reputation management improve my business?", a: "It can enhance trust, improve search visibility, and lead to increased sales and engagement." },
      { q: "What services are included?", a: "Review monitoring, response management, content creation, and social management." },
      { q: "What strategies do you use?", a: "Proactive review monitoring, social engagement, and positive content to counteract negative feedback." },
    ],
    related: [
      "search-engine-optimization-seo",
      "payperclick-advertising-ppc",
      "social-media-marketing",
      "content-marketing",
      "email-marketing",
      "web-design-and-development",
    ],
  },
  {
    slug: "affiliate-marketing",
    title: "Affiliate Marketing",
    summary:
      "Leverage affiliate marketing to expand your reach. Connect with affiliates that can drive traffic and sales, maximizing your marketing efforts.",
    image: "/services/affiliate.jpg",
    imageAlt: "Colleagues engage in a lively discussion during a team meeting in a modern office setting.",
    heroSubtitle: "Drive traffic and increase sales with expert strategies",
    intro:
      "Affiliate marketing is essential for businesses looking to expand reach and increase sales. Connect with the right partners to drive traffic and conversions.",
    includes: [
      { title: "Program Setup", description: "A customized affiliate program including commission structures and promotional guidelines." },
      { title: "Affiliate Recruitment", description: "Identify and recruit affiliates who align with your brand and audience." },
      { title: "Performance Tracking", description: "Analytics to track affiliate performance and maximize ROI." },
      { title: "Ongoing Support", description: "Continuous support so affiliates have the resources to promote effectively." },
    ],
    understanding: [
      "Affiliate marketing means partnering with individuals or companies to promote your products or services, earning a commission for each sale through their referral. Tap into new customer bases and increase brand visibility.",
      "Create mutually beneficial relationships with influencers and publishers who can promote your offerings. This increases brand awareness and focuses on community engagement.",
    ],
    process: [
      { step: "01", title: "Design", description: "Define offers, commissions, and rules that attract the right partners." },
      { step: "02", title: "Recruit", description: "Find affiliates and creators whose audiences match your customers." },
      { step: "03", title: "Enable", description: "Give them assets, tracking, and support so promotions actually convert." },
      { step: "04", title: "Optimize", description: "Pay for performance, cut waste, and scale the partners who deliver." },
    ],
    tools: [
      { name: "Google Analytics", description: "Track website traffic and affiliate performance metrics." },
      { name: "SEMrush", description: "Analyze competitors and identify potential affiliates." },
      { name: "Hootsuite", description: "Manage social campaigns related to affiliate promotions." },
      { name: "Mailchimp", description: "Email campaigns to engage affiliates and customers." },
    ],
    methods: [
      { name: "Performance-Based Marketing", description: "Affiliates are paid based on actual sales, optimizing your budget." },
      { name: "Targeted Recruitment", description: "Recruit affiliates who align with your brand and demographic." },
      { name: "Data-Driven Optimization", description: "Continuously optimize campaigns based on performance data." },
    ],
    whenToUse: [
      { title: "Launching a new product", whatWeDo: "Establish an affiliate program promoted through relevant influencers.", result: "Buzz and initial sales that establish the product in the market." },
      { title: "Expanding your customer base", whatWeDo: "Partner with affiliates to reach new audiences.", result: "Increased brand awareness and customer acquisition." },
      { title: "Boosting seasonal sales", whatWeDo: "Targeted affiliate campaigns aligned with seasonal trends.", result: "Higher sales during peak seasons." },
    ],
    caseStudies: [
      { before: "A clothing retailer struggled with low foot traffic and online sales.", after: "60% increase in online sales within three months.", maintenance: "Continued affiliate engagement and regular promotions." },
      { before: "A new restaurant had limited visibility.", after: "200 new customers in the first month through targeted partnerships.", maintenance: "Ongoing promotions and seasonal offers." },
      { before: "An e-commerce store had stagnant growth and minimal traffic.", after: "Website traffic increased by 150% in two months.", maintenance: "Regular analysis and optimization of affiliate strategies." },
    ],
    problems: [
      { problem: "Low website traffic and visibility", impact: "Without traffic, you lose sales opportunities.", fix: "Connect with influencers who drive targeted traffic." },
      { problem: "Poor conversion rates", impact: "Traffic without sales impacts revenue.", fix: "Optimize the program so affiliates promote effectively." },
      { problem: "Ineffective marketing spend", impact: "Wasted budget without results.", fix: "Pay for performance — you only pay for successful sales." },
    ],
    benefits: [
      { name: "Increased Online Visibility", description: "Partners expose your brand to new audiences — traffic lifts of around 30% are common." },
      { name: "Cost-Effective Marketing", description: "Pay-for-performance means you only pay for actual sales." },
      { name: "Enhanced Credibility", description: "Reputable affiliates lend trust, which can raise conversion rates." },
      { name: "Access to Analytics", description: "Track campaign performance and refine strategy with data." },
    ],
    pricingRange: "$500 - $5,000 depending on scope",
    pricingNote:
      "Pricing varies with program size and number of affiliates. You pay for performance, so spend follows successful sales.",
    pricingFactors: [
      { title: "Program complexity", description: "More affiliates generally mean higher management costs." },
      { title: "Commission rates", description: "Higher commissions can motivate affiliates but affect profitability." },
      { title: "Recruitment efforts", description: "Recruiting top affiliates varies with their influence and reach." },
    ],
    faqs: [
      { q: "What is affiliate marketing?", a: "Partnering with affiliates to promote your products. They earn a commission for each sale they generate — a performance-based strategy." },
      { q: "How can affiliate marketing benefit my business?", a: "Increased brand awareness, targeted traffic, and sales without large upfront media costs." },
      { q: "What affiliate marketing services are provided?", a: "Program setup, recruitment, onboarding, campaign management, and performance analytics." },
      { q: "Do I only pay for results?", a: "Yes. The model is built around commissions and performance, so budget follows actual sales." },
    ],
    related: [
      "search-engine-optimization-seo",
      "payperclick-advertising-ppc",
      "social-media-marketing",
      "content-marketing",
      "email-marketing",
      "web-design-and-development",
    ],
  },
  {
    slug: "conversion-rate-optimization-cro",
    title: "Conversion Rate Optimization CRO",
    summary:
      "Improve your website's performance with CRO services. Analyze user behavior and implement strategies that increase conversions.",
    image: "/services/cro.jpg",
    imageAlt: "Colleagues engage in a lively discussion during a team meeting in a modern office setting.",
    heroSubtitle: "Turn your website into a conversion powerhouse",
    intro:
      "Conversion rate optimization is essential for businesses looking to maximize their online presence. Turn visitors into customers, enhance website performance, and increase profitability with strategies that yield measurable results.",
    includes: [
      { title: "Website Audit", description: "A thorough analysis of strengths and weaknesses using tools like Google Analytics and SEMrush." },
      { title: "Strategy Development", description: "Customized CRO strategies tailored to your goals and audience." },
      { title: "Implementation Support", description: "Hands-on support so changes align with conversion best practices." },
      { title: "Performance Monitoring", description: "Ongoing KPI monitoring to assess impact and adjust as needed." },
      { title: "Reporting and Insights", description: "Regular reports with actionable insights for future optimization." },
    ],
    understanding: [
      "CRO means analyzing your website's performance to improve the percentage of visitors who take desired actions — a purchase, a signup, a quote request. Data-driven strategies identify barriers and optimize for a better user experience.",
      "Common challenges include low traffic quality and poor conversion rates. Targeted strategies enhance presence so your site meets audience needs and expectations.",
    ],
    process: [
      { step: "01", title: "Measure", description: "Audit funnels, heatmaps, and analytics to see where visitors drop off." },
      { step: "02", title: "Hypothesize", description: "Prioritize tests on copy, layout, speed, and CTAs with the biggest expected lift." },
      { step: "03", title: "Test", description: "Run A/B tests and ship winning variants without guessing." },
      { step: "04", title: "Repeat", description: "Keep a testing cadence so conversion rate keeps climbing." },
    ],
    tools: [
      { name: "Google Analytics", description: "Track performance and user behavior for data-driven decisions." },
      { name: "SEMrush", description: "Competitor analysis and keyword opportunities." },
      { name: "Ahrefs", description: "Backlink analysis and external factors affecting performance." },
      { name: "Mailchimp", description: "Email campaigns that engage users and drive conversions." },
    ],
    methods: [
      { name: "A/B Testing", description: "Test page versions to see which elements drive higher conversions." },
      { name: "User Surveys", description: "Feedback that reveals needs and preferences." },
      { name: "Heat Mapping", description: "See which areas attract attention and which are ignored." },
    ],
    whenToUse: [
      { title: "High traffic but low sales", whatWeDo: "Analyze behavior, remove checkout obstacles, and streamline the path to purchase.", result: "Sales increase by maximizing the traffic you already have." },
      { title: "New product with low page engagement", whatWeDo: "Optimize the product page with compelling content and strong CTAs.", result: "Higher engagement and more conversions for the new product." },
      { title: "Visitors bouncing without taking action", whatWeDo: "Adjust design and content to improve retention.", result: "Lower bounce rate and more desired actions." },
    ],
    caseStudies: [
      { before: "An e-commerce site had a 1.5% conversion rate and stagnant sales.", after: "Conversion rate increased to 4.5%, resulting in a significant sales boost.", maintenance: "Regular performance reviews and site updates." },
      { before: "A service provider had high bounce rates, with only 10% of visitors engaging further.", after: "Engagement increased to 30%, with visitors exploring more offerings.", maintenance: "Ongoing A/B testing and user feedback." },
      { before: "Newsletter sign-up rate of only 2%.", after: "Sign-up rate increased to 8% after optimizing the process.", maintenance: "Refresh content and offers to keep rates high." },
    ],
    problems: [
      { problem: "Low website traffic affecting sales", impact: "Stagnant revenue and missed opportunities.", fix: "Drive more relevant traffic and make sure visitors are more likely to convert." },
      { problem: "High bounce rates on landing pages", impact: "Visitors leave without finding what they need.", fix: "Improve landing page design and content to keep users engaged." },
      { problem: "Poor user experience", impact: "Frustration deters customers and decreases conversions.", fix: "Enhance usability and navigation so users can easily find what they need." },
    ],
    benefits: [
      { name: "Increased Sales", description: "Businesses often see a sales increase of 20% or more by optimizing product pages and checkout." },
      { name: "Improved User Experience", description: "A seamless experience reduces bounce rates and keeps visitors engaged longer." },
      { name: "Better ROI on Marketing", description: "Higher conversion rates make every traffic channel more effective without necessarily increasing budget." },
      { name: "Data-Driven Insights", description: "Analytics reveal user behavior so the site can keep improving." },
    ],
    pricingRange: "$500 - $2,000 depending on scope",
    pricingNote:
      "Pricing varies with website size, complexity, and required analysis. Solutions for different budgets.",
    pricingFactors: [
      { title: "Website size", description: "Larger sites may need more extensive analysis and implementation." },
      { title: "Complexity of changes", description: "Redesigning landing pages costs more than minor adjustments." },
      { title: "Ongoing support", description: "Continuous monitoring adds cost but is crucial for long-term success." },
    ],
    faqs: [
      { q: "What is conversion rate optimization?", a: "Enhancing your website so more visitors complete desired actions — a purchase, a newsletter signup, or a contact form." },
      { q: "How can CRO improve my business?", a: "By increasing sales and improving user experience, turning more visitors into customers and raising revenue." },
      { q: "What CRO services are offered?", a: "Website analysis, strategy, implementation, and ongoing monitoring and optimization." },
      { q: "Is CRO only for e-commerce?", a: "No. Any site with a goal — leads, bookings, or signups — can benefit from conversion work." },
    ],
    related: [
      "search-engine-optimization-seo",
      "payperclick-advertising-ppc",
      "social-media-marketing",
      "content-marketing",
      "email-marketing",
      "web-design-and-development",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is Service => Boolean(item));
}
