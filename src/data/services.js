export const servicesData = [
  {
    id: 1,
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    tagline: 'Smart Moves, AI Proves!',
    shortDescription: 'AI brings the spark—you get the superpowers. From brainy bots to predictive engines, we build intelligent systems that automate the grind, amplify decisions, and launch your business straight into the future.',
    fullDescription: 'Our Artificial Intelligence and Machine Learning services are designed to transform your business operations. By leveraging cutting-edge algorithms and neural networks, we build intelligent solutions that learn, adapt, and scale. Whether you need predictive analytics or autonomous agents, our AI systems seamlessly integrate into your workflow to deliver measurable ROI.',
    icon: 'BiBrain',
    color: '#ffffff',
    gradient: 'from-gray-700 to-gray-900',
    bgGradient: 'from-gray-800 to-black',
    features: ['Custom Algorithm Development', 'Seamless API Integration', 'Scalable Cloud Deployment', 'Continuous Model Training'],
    caseStudies: [
      {
        title: 'Predictive Inventory Optimization',
        client: 'GlobalRetail Corp',
        result: 'Reduced stockouts by 45% and improved forecasting accuracy by 92%.',
        image: '/assets/images/case-study-ai-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'ai-strategy',
        name: 'AI Strategy & Roadmap Consulting',
        description: 'Strategic AI planning and implementation roadmaps tailored to your business goals.',
        features: ['AI readiness assessment', 'Custom AI strategy', 'Implementation planning', 'ROI analysis'],
        benefits: ['Clear execution path', 'Risk mitigation', 'Maximized ROI', 'Competitive advantage'],
        process: ['Discovery', 'Assessment', 'Strategy Design', 'Implementation Plan'],
        technologies: ['OpenAI', 'Azure AI', 'Google Cloud AI'],
        useCases: ['Digital Transformation', 'Operational Efficiency']
      },
      {
        id: 2,
        slug: 'generative-ai',
        name: 'Generative AI & LLM Solutions',
        description: 'Harness the power of GPT, Claude, and custom LLMs for content generation and automation.',
        features: ['Custom chatbots', 'Content generation', 'LLM integration', 'Prompt engineering'],
        benefits: ['Automated support', 'Creative scaling', 'Cost reduction', '24/7 availability'],
        process: ['Model Selection', 'Fine-tuning', 'Prompt Engineering', 'Deployment'],
        technologies: ['GPT-4', 'Claude 3', 'LangChain', 'Llama 2'],
        useCases: ['Customer Support', 'Content Creation', 'Code Generation']
      },
      {
        id: 3,
        slug: 'predictive-ai',
        name: 'Predictive AI & Deep Learning',
        description: 'Build predictive models using neural networks and deep learning frameworks.',
        features: ['Forecasting models', 'Pattern recognition', 'Neural networks', 'Time series analysis'],
        benefits: ['Proactive decisions', 'Trend anticipation', 'Fraud prevention', 'Resource optimization'],
        process: ['Data Collection', 'Model Training', 'Validation', 'Integration'],
        technologies: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn'],
        useCases: ['Sales Forecasting', 'Predictive Maintenance']
      },
      {
        id: 4,
        slug: 'ai-automation',
        name: 'AI-Powered Automation',
        description: 'Automate repetitive tasks and workflows with intelligent AI systems.',
        features: ['Process automation', 'RPA integration', 'Workflow optimization', 'Smart bots'],
        benefits: ['Reduced manual effort', 'Lower error rates', 'Faster processing', 'Cost savings'],
        process: ['Workflow Analysis', 'Bot Design', 'Development', 'Monitoring'],
        technologies: ['UiPath', 'Automation Anywhere', 'Python', 'Make'],
        useCases: ['Invoice Processing', 'Data Entry Automation']
      },
      {
        id: 5,
        slug: 'ai-agents',
        name: 'AI Agent Development',
        description: 'Create autonomous AI agents that can perform complex tasks independently.',
        features: ['Autonomous agents', 'Multi-agent systems', 'Agent orchestration', 'Task automation'],
        benefits: ['Task autonomy', 'Complex problem solving', 'Continuous operation', 'Scalable workforce'],
        process: ['Task Definition', 'Agent Architecture', 'Training', 'Deployment'],
        technologies: ['AutoGPT', 'LangGraph', 'CrewAI', 'OpenAI API'],
        useCases: ['Research Automation', 'Personal Assistants']
      },
      {
        id: 6,
        slug: 'ai-integration',
        name: 'AI Integration & Implementation',
        description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
        features: ['API integration', 'Legacy system modernization', 'Cloud AI services', 'Model deployment'],
        benefits: ['Enhanced legacy systems', 'No workflow disruption', 'Quick time-to-market', 'Scalable infrastructure'],
        process: ['Architecture Review', 'API Development', 'Integration', 'Testing'],
        technologies: ['AWS SageMaker', 'Docker', 'Kubernetes', 'FastAPI'],
        useCases: ['ERP Enhancement', 'CRM Automation']
      },
      {
        id: 7,
        slug: 'computer-vision',
        name: 'Computer Vision Development',
        description: 'Advanced image and video analysis solutions for real-world applications.',
        features: ['Object detection', 'Facial recognition', 'OCR solutions', 'Video analytics'],
        benefits: ['Visual automation', 'Enhanced security', 'Quality control', 'Real-time analysis'],
        process: ['Dataset Creation', 'Model Training', 'Optimization', 'Deployment'],
        technologies: ['OpenCV', 'YOLO', 'MediaPipe', 'AWS Rekognition'],
        useCases: ['Quality Inspection', 'Security Surveillance']
      }
    ]
  },
  
  {
    id: 2,
    slug: 'data-analytics',
    title: 'Data & Analytics',
    tagline: 'Patterns Speak, Insights Peak!',
    shortDescription: 'Data doesn\'t lie—and we make it talk loud and clear. With clean pipelines, sharp insights, and dashboards that decode the chaos, we turn scattered information into smart moves.',
    fullDescription: 'Unlock the true potential of your data with our comprehensive Data & Analytics solutions. We build robust data pipelines, implement modern data warehousing, and create interactive business intelligence dashboards that provide actionable insights and drive strategic decision-making.',
    icon: 'BiBarChart',
    color: '#e5e5e5',
    gradient: 'from-gray-600 to-gray-800',
    bgGradient: 'from-gray-700 to-dark',
    features: ['Real-time Data Processing', 'Interactive Dashboards', 'Predictive Modeling', 'Data Governance'],
    caseStudies: [
      {
        title: 'Enterprise BI Transformation',
        client: 'FinTech Solutions',
        result: 'Unified 15 data sources and reduced reporting time from days to minutes.',
        image: '/assets/images/case-study-data-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'data-engineering',
        name: 'Data Engineering & ETL',
        description: 'Build robust data pipelines that extract, transform, and load data efficiently.',
        features: ['ETL pipeline design', 'Data warehousing', 'Real-time processing', 'Data quality management'],
        benefits: ['Data reliability', 'Faster processing', 'Scalable storage', 'Single source of truth'],
        process: ['Architecture Design', 'Pipeline Creation', 'Testing', 'Deployment'],
        technologies: ['Apache Spark', 'Snowflake', 'dbt', 'Airflow'],
        useCases: ['Data Consolidation', 'Real-time Analytics']
      },
      {
        id: 2,
        slug: 'bi-visualization',
        name: 'BI & Data Visualization',
        description: 'Transform raw data into actionable insights with interactive dashboards.',
        features: ['Dashboard development', 'Power BI/Tableau', 'Custom visualizations', 'Report automation'],
        benefits: ['Visual insights', 'Self-service analytics', 'Data democratization', 'Executive reporting'],
        process: ['Requirements Gathering', 'Data Modeling', 'Dashboard Design', 'User Training'],
        technologies: ['Power BI', 'Tableau', 'Looker', 'D3.js'],
        useCases: ['Sales Dashboards', 'Financial Reporting']
      },
      {
        id: 3,
        slug: 'data-science',
        name: 'Data Science & Analysis',
        description: 'Uncover hidden patterns and insights using advanced statistical analysis.',
        features: ['Statistical modeling', 'Exploratory analysis', 'A/B testing', 'Predictive analytics'],
        benefits: ['Data-driven decisions', 'Pattern discovery', 'Market forecasting', 'Risk assessment'],
        process: ['Data Exploration', 'Modeling', 'Evaluation', 'Insights Delivery'],
        technologies: ['Python', 'R', 'Jupyter', 'SQL'],
        useCases: ['Customer Churn Prediction', 'Market Basket Analysis']
      }
    ]
  },

  {
    id: 3,
    slug: 'saas-products',
    title: 'SaaS Product Development',
    tagline: 'Systems that Scale, Success Sets Sail!',
    shortDescription: 'We\'re here for all your SaaS product needs! Imagine cloud-ready platforms that keep pace with your users, ready to grow as they grow, with security and reliability as rock-solid as our code.',
    fullDescription: 'Build scalable, secure, and multi-tenant SaaS applications from the ground up. Our end-to-end development approach ensures your product is architected for rapid growth, high availability, and exceptional user experiences, helping you accelerate time-to-market and maximize MRR.',
    icon: 'BiCloud',
    color: '#cccccc',
    gradient: 'from-gray-500 to-gray-700',
    bgGradient: 'from-gray-600 to-dark',
    features: ['Multi-tenant Architecture', 'Subscription Billing', 'Cloud Native', 'API First Design'],
    caseStudies: [
      {
        title: 'B2B SaaS Platform Launch',
        client: 'WorkFlow Pro',
        result: 'Successfully launched MVP in 3 months, scaling to 10k MRR in quarter one.',
        image: '/assets/images/case-study-saas-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'saas-development',
        name: 'SaaS Development Services',
        description: 'End-to-end SaaS product development from concept to launch.',
        features: ['Multi-tenant architecture', 'Subscription management', 'API development', 'Cloud deployment'],
        benefits: ['Rapid market entry', 'Scalable codebase', 'Secure infrastructure', 'Seamless updates'],
        process: ['Discovery', 'Prototyping', 'Development', 'Launch'],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        useCases: ['B2B Platforms', 'Productivity Tools']
      },
      {
        id: 2,
        slug: 'saas-consulting',
        name: 'SaaS Consulting',
        description: 'Expert guidance on SaaS business models, architecture, and growth strategies.',
        features: ['Product strategy', 'Monetization planning', 'Tech stack selection', 'Go-to-market strategy'],
        benefits: ['Validated ideas', 'Optimized pricing', 'Reduced technical debt', 'Growth alignment'],
        process: ['Audit', 'Strategy Formulation', 'Roadmap Creation', 'Execution Advisory'],
        technologies: ['Figma', 'Miro', 'Jira', 'Notion'],
        useCases: ['MVP Planning', 'Scaling Strategies']
      },
      {
        id: 3,
        slug: 'saas-architecture',
        name: 'SaaS Architecture',
        description: 'Design scalable, secure, and performant SaaS architectures.',
        features: ['Microservices design', 'Cloud architecture', 'Scalability planning', 'Security architecture'],
        benefits: ['High availability', 'Global scale', 'Data isolation', 'Cost optimization'],
        process: ['Requirements Analysis', 'System Design', 'Proof of Concept', 'Implementation'],
        technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
        useCases: ['Global Expansions', 'Enterprise Security']
      }
    ]
  },

  {
    id: 4,
    slug: 'software-solutions',
    title: 'Advanced Software Solutions',
    tagline: 'Smartly Designed, Perfectly Aligned!',
    shortDescription: 'We are your software sorcerers—turning your brainchild into seamless systems. Whether it\'s automating tasks or building complex programs, we innovate tools that work hard.',
    fullDescription: 'From custom enterprise applications to legacy system modernization, our advanced software solutions are tailored to your unique business challenges. We leverage modern tech stacks and agile methodologies to deliver software that enhances productivity, ensures security, and drives digital transformation.',
    icon: 'BiCodeAlt',
    color: '#ffffff',
    gradient: 'from-gray-400 to-gray-600',
    bgGradient: 'from-gray-500 to-dark',
    features: ['Custom ERP/CRM', 'Legacy Modernization', 'Agile Methodology', 'Enterprise Security'],
    caseStudies: [
      {
        title: 'Legacy System Modernization',
        client: 'Global Logistics Inc',
        result: 'Migrated 15-year-old monolithic system to microservices with zero downtime.',
        image: '/assets/images/case-study-software-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'custom-software',
        name: 'Custom Software Development',
        description: 'Bespoke software solutions tailored to your unique business requirements.',
        features: ['Custom applications', 'Business automation', 'System integration', 'Legacy modernization'],
        benefits: ['Perfect fit', 'Competitive edge', 'Ownership', 'Scalability'],
        process: ['Requirements Gathering', 'Design', 'Development', 'Deployment'],
        technologies: ['Java', '.NET', 'React', 'Node.js'],
        useCases: ['Internal Tools', 'Customer Portals']
      },
      {
        id: 2,
        slug: 'software-product',
        name: 'Software Product Development',
        description: 'Transform your product idea into market-ready software.',
        features: ['MVP development', 'Product roadmap', 'Iterative development', 'Product launch'],
        benefits: ['Faster time to market', 'User-centric design', 'Iterative feedback', 'High quality'],
        process: ['Ideation', 'MVP Build', 'Testing', 'Scaling'],
        technologies: ['Next.js', 'NestJS', 'MongoDB', 'AWS'],
        useCases: ['Startups', 'Enterprise Innovations']
      },
      {
        id: 3,
        slug: 'strategy-consulting',
        name: 'Strategy Consulting',
        description: 'Technology consulting to align your digital initiatives with business goals.',
        features: ['Digital strategy', 'Technology roadmap', 'Vendor selection', 'Process optimization'],
        benefits: ['Aligned goals', 'Cost savings', 'Reduced risk', 'Clear roadmap'],
        process: ['Assessment', 'Strategy Design', 'Planning', 'Execution'],
        technologies: ['Enterprise Architecture', 'ITIL', 'Agile', 'Scrum'],
        useCases: ['Digital Transformation', 'IT Restructuring']
      },
      {
        id: 4,
        slug: 'enterprise-software',
        name: 'Enterprise Software',
        description: 'Robust enterprise-grade solutions for large organizations.',
        features: ['ERP systems', 'CRM solutions', 'Workflow automation', 'Integration platforms'],
        benefits: ['Streamlined operations', 'Unified data', 'Enhanced collaboration', 'Compliance'],
        process: ['Business Analysis', 'Customization', 'Integration', 'Training'],
        technologies: ['SAP', 'Salesforce', 'Oracle', 'Microsoft Dynamics'],
        useCases: ['Supply Chain Management', 'HR Portals']
      },
      {
        id: 5,
        slug: 'software-outsourcing',
        name: 'Software Development Outsourcing',
        description: 'Dedicated development teams to augment your in-house capabilities.',
        features: ['Team augmentation', 'Offshore development', 'Dedicated teams', 'Flexible engagement'],
        benefits: ['Access to talent', 'Cost efficiency', 'Faster scaling', 'Focus on core business'],
        process: ['Requirements', 'Team Selection', 'Onboarding', 'Delivery'],
        technologies: ['Full-stack', 'DevOps', 'QA', 'UI/UX'],
        useCases: ['Staff Augmentation', 'Project Outsourcing']
      },
      {
        id: 6,
        slug: 'digital-transformation',
        name: 'Digital Transformation',
        description: 'Modernize your business with cutting-edge digital technologies.',
        features: ['Cloud migration', 'Process digitization', 'Legacy modernization', 'Change management'],
        benefits: ['Increased agility', 'Better customer experience', 'Operational efficiency', 'Innovation'],
        process: ['Assessment', 'Strategy', 'Implementation', 'Optimization'],
        technologies: ['Cloud', 'AI/ML', 'IoT', 'Big Data'],
        useCases: ['Paperless Operations', 'Cloud Migration']
      },
      {
        id: 7,
        slug: 'maintenance-support',
        name: 'Maintenance and Support',
        description: 'Ongoing support and maintenance to keep your systems running smoothly.',
        features: ['24/7 support', 'Bug fixes', 'Performance monitoring', 'Security updates'],
        benefits: ['System uptime', 'Security compliance', 'Performance optimization', 'User satisfaction'],
        process: ['Monitoring', 'Issue Resolution', 'Updates', 'Reporting'],
        technologies: ['New Relic', 'Datadog', 'Jira Service Desk', 'PagerDuty'],
        useCases: ['SLA Support', 'Legacy Maintenance']
      }
    ]
  },

  {
    id: 5,
    slug: 'ecommerce',
    title: 'eCommerce Development',
    tagline: 'Stunning Stores, Sales Soar!',
    shortDescription: 'Your online store\'s visitors should be stocking their carts, right? Our eCommerce offerings turn window shoppers into loyal buyers, with marketplaces so irresistibly shoppable.',
    fullDescription: 'Create high-converting, blazing-fast online stores with our complete eCommerce development services. We specialize in D2C, B2B, and complex multi-vendor marketplaces, integrating advanced features like headless commerce, omnichannel experiences, and personalized shopping journeys.',
    icon: 'BiCart',
    color: '#e5e5e5',
    gradient: 'from-gray-700 to-gray-900',
    bgGradient: 'from-gray-800 to-dark',
    features: ['Headless Commerce', 'Multi-channel Integration', 'Conversion Optimization', 'Secure Payments'],
    caseStudies: [
      {
        title: 'D2C Brand Relaunch',
        client: 'StyleHub',
        result: 'Increased conversion rate by 150% and reduced page load times by 3s.',
        image: '/assets/images/case-study-ecommerce-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'd2c-ecommerce',
        name: 'D2C eCommerce',
        description: 'Direct-to-consumer stores that build strong brand relationships.',
        features: ['Brand storytelling', 'Customer engagement', 'Subscription models', 'Loyalty programs'],
        benefits: ['Direct relationships', 'Higher margins', 'Brand control', 'Customer data ownership'],
        process: ['Brand Strategy', 'UX Design', 'Development', 'Launch'],
        technologies: ['Shopify Plus', 'Magento', 'WooCommerce', 'BigCommerce'],
        useCases: ['Fashion Brands', 'FMCG Startups']
      },
      {
        id: 2,
        slug: 'b2b-ecommerce',
        name: 'B2B eCommerce',
        description: 'Enterprise-grade B2B platforms with complex pricing and workflows.',
        features: ['Bulk ordering', 'Custom pricing', 'Quote management', 'Multi-buyer accounts'],
        benefits: ['Streamlined sales', 'Self-service ordering', 'Complex catalog management', 'ERP integration'],
        process: ['Requirements Gathering', 'Architecture', 'Development', 'Integration'],
        technologies: ['Adobe Commerce', 'Salesforce B2B', 'VTEX', 'commercetools'],
        useCases: ['Wholesale Distributors', 'Manufacturers']
      },
      {
        id: 3,
        slug: 'marketplace-development',
        name: 'Marketplace Development',
        description: 'Multi-vendor marketplaces connecting buyers and sellers.',
        features: ['Vendor management', 'Commission systems', 'Multi-store admin', 'Payment splitting'],
        benefits: ['New revenue streams', 'Scalable catalog', 'Network effects', 'Centralized management'],
        process: ['Marketplace Strategy', 'Platform Setup', 'Vendor Onboarding', 'Launch'],
        technologies: ['Mirakl', 'Sharetribe', 'Custom Node.js', 'Stripe Connect'],
        useCases: ['B2C Marketplaces', 'Service Marketplaces']
      },
      {
        id: 4,
        slug: 'omnichannel-solutions',
        name: 'Omnichannel Solutions',
        description: 'Seamless shopping experience across all channels and devices.',
        features: ['Unified inventory', 'Cross-channel orders', 'POS integration', 'Click & collect'],
        benefits: ['Consistent experience', 'Increased sales', 'Customer loyalty', 'Operational efficiency'],
        process: ['Channel Mapping', 'Integration Strategy', 'Implementation', 'Testing'],
        technologies: ['MuleSoft', 'Shopify POS', 'Square', 'Custom APIs'],
        useCases: ['Retail Chains', 'Global Brands']
      },
      {
        id: 5,
        slug: 'quick-commerce',
        name: 'Quick Commerce',
        description: 'Ultra-fast delivery platforms for instant gratification.',
        features: ['Real-time tracking', 'Route optimization', 'Dark store management', 'Rapid fulfillment'],
        benefits: ['Competitive edge', 'High customer satisfaction', 'Impulse purchases', 'Local dominance'],
        process: ['Logistics Planning', 'App Development', 'Store Setup', 'Launch'],
        technologies: ['React Native', 'Node.js', 'Google Maps API', 'Redis'],
        useCases: ['Grocery Delivery', 'Pharmacy Delivery']
      },
      {
        id: 6,
        slug: 'subscription-commerce',
        name: 'Subscription Commerce',
        description: 'Recurring revenue models with subscription management.',
        features: ['Subscription plans', 'Auto-renewals', 'Member portals', 'Churn prevention'],
        benefits: ['Predictable revenue', 'Customer retention', 'Inventory forecasting', 'LTV increase'],
        process: ['Model Design', 'Platform Integration', 'Customer Portal', 'Launch'],
        technologies: ['ReCharge', 'Bold Subscriptions', 'Stripe Billing', 'Chargebee'],
        useCases: ['Meal Kits', 'Software Subscriptions']
      },
      {
        id: 7,
        slug: 'ecommerce-consulting',
        name: 'eCommerce Consulting',
        description: 'Strategic guidance to optimize your online store performance.',
        features: ['Conversion optimization', 'UX audits', 'Platform selection', 'Growth strategy'],
        benefits: ['Higher conversion rates', 'Better UX', 'Optimized tech stack', 'Scalable growth'],
        process: ['Audit', 'Analysis', 'Recommendations', 'Implementation Plan'],
        technologies: ['Google Analytics', 'Hotjar', 'Optimizely', 'VWO'],
        useCases: ['Store Optimization', 'Replatforming Strategy']
      },
      {
        id: 8,
        slug: 'ecommerce-migration',
        name: 'eCommerce Migration',
        description: 'Seamlessly migrate your store to modern platforms without data loss.',
        features: ['Platform migration', 'Data transfer', 'SEO preservation', 'Zero downtime'],
        benefits: ['Modern features', 'Better performance', 'No lost traffic', 'Data integrity'],
        process: ['Audit & Planning', 'Data Mapping', 'Migration', 'Launch & QA'],
        technologies: ['Cart2Cart', 'LitExtension', 'Custom Scripts', 'API Migration'],
        useCases: ['Magento to Shopify', 'Legacy to Headless']
      }
    ]
  },

  {
    id: 6,
    slug: 'ui-ux',
    title: 'UI/UX Design & Engineering',
    tagline: 'Visual Treat, Flows that Beat!',
    shortDescription: 'Looks matter, but so does the user experience! We create designs that are as functional and engaging as they are jaw-dropping—where the audience clicks, scrolls, and slides down the sales path!',
    fullDescription: 'Our design philosophy merges aesthetics with deep user psychology. We don\'t just design screens; we craft intuitive journeys that reduce friction, elevate brand perception, and maximize user engagement and conversions across web and mobile platforms.',
    icon: 'BiPalette',
    color: '#ffffff',
    gradient: 'from-gray-600 to-gray-800',
    bgGradient: 'from-gray-700 to-dark',
    features: ['User-Centered Design', 'Interactive Prototypes', 'Design Systems', 'Accessibility Compliance'],
    caseStudies: [
      {
        title: 'App Redesign & UX Audit',
        client: 'HealthTrack App',
        result: 'Improved user retention by 40% through a simplified onboarding flow.',
        image: '/assets/images/case-study-uiux-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'ui-ux-design',
        name: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that users love to interact with.',
        features: ['User interface design', 'Prototyping', 'Wireframing', 'Visual design'],
        benefits: ['Higher engagement', 'Brand consistency', 'Intuitive flows', 'Lower bounce rates'],
        process: ['Research', 'Wireframing', 'Visual Design', 'Prototyping'],
        technologies: ['Figma', 'Sketch', 'Adobe XD', 'Framer'],
        useCases: ['Web Apps', 'Mobile Apps']
      },
      {
        id: 2,
        slug: 'user-research',
        name: 'User Research',
        description: 'Deep understanding of your users through comprehensive research.',
        features: ['User interviews', 'Surveys', 'Persona development', 'Journey mapping'],
        benefits: ['Data-driven design', 'Reduced risk', 'Targeted solutions', 'Empathy building'],
        process: ['Planning', 'Recruiting', 'Conducting', 'Analysis'],
        technologies: ['UserTesting', 'Optimal Workshop', 'Typeform', 'Miro'],
        useCases: ['New Product Validation', 'Feature Enhancement']
      },
      {
        id: 3,
        slug: 'ux-consulting',
        name: 'UX Consulting',
        description: 'Expert guidance to improve your product\'s user experience.',
        features: ['UX audits', 'Heuristic evaluation', 'Accessibility review', 'Best practices'],
        benefits: ['Identified bottlenecks', 'Improved conversions', 'Expert insights', 'Actionable recommendations'],
        process: ['Heuristic Evaluation', 'Competitor Analysis', 'Report Generation', 'Strategy Workshop'],
        technologies: ['Lighthouse', 'WAVE', 'Hotjar', 'Google Analytics'],
        useCases: ['Conversion Optimization', 'Usability Improvement']
      },
      {
        id: 4,
        slug: 'design-system',
        name: 'Design System',
        description: 'Scalable design systems for consistent brand experience.',
        features: ['Component libraries', 'Style guides', 'Design tokens', 'Documentation'],
        benefits: ['Consistency', 'Faster development', 'Scalability', 'Easy maintenance'],
        process: ['Audit', 'Token Creation', 'Component Design', 'Documentation'],
        technologies: ['Storybook', 'Figma Variants', 'Zeroheight', 'Tokens Studio'],
        useCases: ['Enterprise Products', 'Multi-platform Apps']
      },
      {
        id: 5,
        slug: 'design-audit',
        name: 'Design Audit',
        description: 'Comprehensive analysis of your current design and recommendations.',
        features: ['Visual audit', 'Usability review', 'Competitor analysis', 'Improvement roadmap'],
        benefits: ['Clear improvement path', 'Objective evaluation', 'Quick wins identified', 'Strategic alignment'],
        process: ['Review', 'Analysis', 'Report', 'Presentation'],
        technologies: ['Figma', 'FigJam', 'Notion', 'Loom'],
        useCases: ['Pre-redesign', 'Performance Issues']
      },
      {
        id: 6,
        slug: 'usability-testing',
        name: 'Usability Testing',
        description: 'Validate your designs with real users before launch.',
        features: ['User testing', 'A/B testing', 'Heat mapping', 'Session recording'],
        benefits: ['Validated assumptions', 'Reduced development rework', 'User satisfaction', 'Confident launch'],
        process: ['Test Script Creation', 'Recruitment', 'Testing', 'Analysis'],
        technologies: ['Maze', 'Lookback', 'Hotjar', 'Google Optimize'],
        useCases: ['Prototype Validation', 'Live Product Testing']
      },
      {
        id: 7,
        slug: 'interaction-design',
        name: 'Interaction Design',
        description: 'Create engaging interactions that delight users.',
        features: ['Micro-interactions', 'Animation design', 'Gesture design', 'Feedback systems'],
        benefits: ['Delightful experience', 'Clear feedback', 'Modern feel', 'Increased engagement'],
        process: ['Concept', 'Storyboarding', 'Prototyping', 'Handoff'],
        technologies: ['Framer', 'Protopie', 'Lottie', 'After Effects'],
        useCases: ['Onboarding Flows', 'Gamification']
      }
    ]
  },

  {
    id: 7,
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    tagline: 'Features Pop, Downloads Don\'t Stop!',
    shortDescription: 'We brew apps that tap into trends and keep people coming back for more. From mind-blowing interfaces to buttery-smooth flows, our apps don\'t just sit pretty.',
    fullDescription: 'Build native and cross-platform mobile applications that dominate the app stores. We combine elegant UI/UX design with robust, scalable backend architectures to deliver high-performance apps for iOS and Android that users love to engage with daily.',
    icon: 'BiMobile',
    color: '#e5e5e5',
    gradient: 'from-gray-500 to-gray-700',
    bgGradient: 'from-gray-600 to-dark',
    features: ['Native & Cross-Platform', 'Offline Capabilities', 'Push Notifications', 'App Store Optimization'],
    caseStudies: [
      {
        title: 'Fitness Tracking App',
        client: 'FitLife',
        result: 'Achieved 1M+ downloads and 4.8 star rating on App Store.',
        image: '/assets/images/case-study-mobile-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'android-development',
        name: 'Android App Development',
        description: 'Native Android apps built with Kotlin and Java for optimal performance.',
        features: ['Native Android', 'Material Design', 'Google Play', 'Kotlin expertise'],
        benefits: ['High performance', 'Deep OS integration', 'Broad reach', 'Custom hardware features'],
        process: ['Design', 'Development', 'Testing', 'Play Store Launch'],
        technologies: ['Kotlin', 'Java', 'Android Studio', 'Jetpack Compose'],
        useCases: ['Consumer Apps', 'Enterprise Mobility']
      },
      {
        id: 2,
        slug: 'ios-development',
        name: 'iOS App Development',
        description: 'Premium iOS applications using Swift for iPhone and iPad.',
        features: ['Native iOS', 'Swift/SwiftUI', 'App Store', 'Human Interface'],
        benefits: ['Premium user base', 'High security', 'Consistent UI', 'Optimal performance'],
        process: ['Design', 'Development', 'Testing', 'App Store Launch'],
        technologies: ['Swift', 'Objective-C', 'Xcode', 'SwiftUI'],
        useCases: ['Premium Consumer Apps', 'Creative Tools']
      },
      {
        id: 3,
        slug: 'cross-platform',
        name: 'Cross-Platform App Development',
        description: 'Build once, deploy everywhere with React Native or Flutter.',
        features: ['React Native', 'Flutter', 'Code reusability', 'Faster time-to-market'],
        benefits: ['Cost effective', 'Faster development', 'Single codebase', 'Native-like performance'],
        process: ['Architecture', 'Development', 'Testing', 'Multi-platform Launch'],
        technologies: ['React Native', 'Flutter', 'Dart', 'Expo'],
        useCases: ['Startups', 'Content Apps']
      },
      {
        id: 4,
        slug: 'app-modernization',
        name: 'Application Modernization',
        description: 'Update legacy mobile apps with modern technologies and designs.',
        features: ['App redesign', 'Technology upgrade', 'Performance optimization', 'Feature enhancement'],
        benefits: ['Improved performance', 'Modern UX', 'Reduced technical debt', 'Better security'],
        process: ['Code Audit', 'Refactoring', 'Redesign', 'Deployment'],
        technologies: ['Swift', 'Kotlin', 'React Native', 'GraphQL'],
        useCases: ['Legacy App Updates', 'Performance Fixes']
      }
    ]
  },

  {
    id: 8,
    slug: 'web-development',
    title: 'Website Development',
    tagline: 'Swift Loads, Drive Your Goals!',
    shortDescription: 'Your website is your first impression online, and we are here to make it a pixel-perfect, power-packed stunner. Our web wonders do more than dazzle—they convert!',
    fullDescription: 'We build blazing-fast, secure, and accessible websites that serve as the digital foundation for your brand. Utilizing modern frameworks like React, Next.js, and headless CMS architectures, we ensure your site is optimized for performance, SEO, and ultimate scalability.',
    icon: 'BiWindow',
    color: '#ffffff',
    gradient: 'from-gray-400 to-gray-600',
    bgGradient: 'from-gray-500 to-dark',
    features: ['Responsive Design', 'SEO Optimized', 'Lightning Fast', 'Secure Architecture'],
    caseStudies: [
      {
        title: 'Corporate Website Redesign',
        client: 'TechNova',
        result: 'Increased organic traffic by 200% and reduced bounce rate to 25%.',
        image: '/assets/images/case-study-web-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'custom-web',
        name: 'Custom Website Development',
        description: 'Fully customized websites built from scratch to match your vision.',
        features: ['Custom design', 'Responsive layouts', 'SEO optimized', 'Fast loading'],
        benefits: ['Unique brand identity', 'High performance', 'Scalability', 'No platform limitations'],
        process: ['Discovery', 'Design', 'Development', 'Launch'],
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
        useCases: ['Corporate Sites', 'Complex Web Apps']
      },
      {
        id: 2,
        slug: 'cms-development',
        name: 'CMS Development',
        description: 'Content management systems for easy website updates.',
        features: ['WordPress', 'Headless CMS', 'Custom CMS', 'Content workflow'],
        benefits: ['Easy content updates', 'SEO friendly', 'Scalable content', 'Role-based access'],
        process: ['Platform Selection', 'Customization', 'Data Migration', 'Training'],
        technologies: ['WordPress', 'Sanity', 'Strapi', 'Contentful'],
        useCases: ['Blogs', 'News Portals']
      },
      {
        id: 3,
        slug: 'interactive-web',
        name: 'Interactive Website Development',
        description: 'Engaging websites with animations and interactive elements.',
        features: ['Scroll animations', 'Interactive UI', 'WebGL', '3D elements'],
        benefits: ['High engagement', 'Memorable experience', 'Brand differentiation', 'Longer time on site'],
        process: ['Storyboard', 'Design', 'Animation Implementation', 'Optimization'],
        technologies: ['Three.js', 'GSAP', 'Framer Motion', 'WebGL'],
        useCases: ['Marketing Campaigns', 'Creative Portfolios']
      },
      {
        id: 4,
        slug: 'webflow-development',
        name: 'WebFlow Development',
        description: 'Visual development on WebFlow for marketing and content sites.',
        features: ['WebFlow design', 'No-code solution', 'CMS integration', 'Animation'],
        benefits: ['Rapid development', 'Easy client handover', 'Built-in hosting', 'Visual editing'],
        process: ['Design', 'WebFlow Build', 'CMS Setup', 'Launch'],
        technologies: ['WebFlow', 'Figma to WebFlow', 'Relume', 'GSAP'],
        useCases: ['Marketing Sites', 'Landing Pages']
      }
    ]
  },

  {
    id: 9,
    slug: 'qa-testing',
    title: 'Quality Assurance & Testing',
    tagline: 'Busted Bugs with Zero Fuss!',
    shortDescription: 'Think of us as your technology\'s guardian angels—keeping bugs at bay and ironing out every glitch with an eagle eye on perfection and performance.',
    fullDescription: 'Ensure your software is flawless, secure, and performs beautifully under pressure. Our comprehensive QA and testing services combine automated frameworks with rigorous manual testing to identify vulnerabilities and bugs before they ever reach your end-users.',
    icon: 'BiCheckShield',
    color: '#e5e5e5',
    gradient: 'from-gray-700 to-gray-900',
    bgGradient: 'from-gray-800 to-dark',
    features: ['Automated Testing CI/CD', 'Security Audits', 'Load & Stress Testing', 'Cross-Browser QA'],
    caseStudies: [
      {
        title: 'E-commerce Load Testing',
        client: 'ShopFest',
        result: 'Ensured 100% uptime during Black Friday with 50,000 concurrent users.',
        image: '/assets/images/case-study-qa-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'lifecycle-testing',
        name: 'Lifecycle Testing',
        description: 'Comprehensive testing throughout the entire development lifecycle.',
        features: ['Test planning', 'Test strategy', 'Defect management', 'Quality metrics'],
        benefits: ['Early bug detection', 'Reduced cost of fixing', 'Higher quality releases', 'Continuous feedback'],
        process: ['Planning', 'Test Design', 'Execution', 'Reporting'],
        technologies: ['Jira', 'TestRail', 'Zephyr', 'Confluence'],
        useCases: ['Enterprise Projects', 'Agile Development']
      },
      {
        id: 2,
        slug: 'functional-testing',
        name: 'Functional Testing',
        description: 'Verify that your software functions according to requirements.',
        features: ['Manual testing', 'Regression testing', 'Integration testing', 'UAT support'],
        benefits: ['Meets business requirements', 'Stable releases', 'User satisfaction', 'Edge case coverage'],
        process: ['Requirement Analysis', 'Test Case Creation', 'Execution', 'Bug Tracking'],
        technologies: ['Postman', 'BrowserStack', 'Selenium IDE', 'SoapUI'],
        useCases: ['New Feature Releases', 'Web Applications']
      },
      {
        id: 3,
        slug: 'automation-testing',
        name: 'Automation Testing',
        description: 'Accelerate testing with automated test scripts and frameworks.',
        features: ['Test automation', 'CI/CD integration', 'Selenium/Cypress', 'API testing'],
        benefits: ['Faster release cycles', 'Reliable regression', 'Cost effective over time', 'Broader coverage'],
        process: ['Framework Selection', 'Script Writing', 'CI Integration', 'Maintenance'],
        technologies: ['Cypress', 'Selenium', 'Playwright', 'Appium'],
        useCases: ['Continuous Deployment', 'Regression Suites']
      },
      {
        id: 4,
        slug: 'security-testing',
        name: 'Security Testing',
        description: 'Identify vulnerabilities and ensure your application is secure.',
        features: ['Penetration testing', 'Vulnerability scanning', 'Security audits', 'OWASP compliance'],
        benefits: ['Data protection', 'Regulatory compliance', 'Risk mitigation', 'Customer trust'],
        process: ['Vulnerability Scan', 'Penetration Testing', 'Reporting', 'Remediation Verification'],
        technologies: ['OWASP ZAP', 'Burp Suite', 'Nessus', 'SonarQube'],
        useCases: ['Fintech Apps', 'Healthcare Portals']
      },
      {
        id: 5,
        slug: 'performance-testing',
        name: 'Performance Testing',
        description: 'Ensure your application performs under expected and peak loads.',
        features: ['Load testing', 'Stress testing', 'Performance tuning', 'Scalability testing'],
        benefits: ['High availability', 'Fast response times', 'Scalability verification', 'Prevent crashes'],
        process: ['Load Modeling', 'Script Creation', 'Execution', 'Analysis'],
        technologies: ['JMeter', 'k6', 'Gatling', 'LoadRunner'],
        useCases: ['E-commerce Events', 'High Traffic Launches']
      }
    ]
  },

  {
    id: 10,
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Buzz That Sticks, Ads That Click!',
    shortDescription: 'We get it. You\'re not just looking for ads—you want clever solutions that boost the buzz around your brand with viral campaigns, click-worthy content, and ROI-driven strategies.',
    fullDescription: 'Accelerate your growth with data-driven digital marketing strategies. From viral social media campaigns to highly optimized SEO and performance marketing, we help you acquire, engage, and retain customers efficiently across all digital touchpoints.',
    icon: 'BiTrendingUp',
    color: '#ffffff',
    gradient: 'from-gray-600 to-gray-800',
    bgGradient: 'from-gray-700 to-dark',
    features: ['Data-Driven Strategy', 'Omnichannel Campaigns', 'Performance Tracking', 'Creative Content'],
    caseStudies: [
      {
        title: 'B2B Lead Generation',
        client: 'SaaS Innovators',
        result: 'Generated 500+ qualified leads and decreased CPA by 35% in 6 months.',
        image: '/assets/images/case-study-marketing-1.jpg'
      }
    ],
    subServices: [
      {
        id: 1,
        slug: 'social-media',
        name: 'Social Media Marketing',
        description: 'Build your brand presence and engage audiences on social platforms.',
        features: ['Social strategy', 'Content creation', 'Community management', 'Paid social ads'],
        benefits: ['Brand awareness', 'Customer engagement', 'Direct communication', 'Viral potential'],
        process: ['Strategy', 'Content Calendar', 'Execution', 'Analytics'],
        technologies: ['Hootsuite', 'Sprout Social', 'Buffer', 'Canva'],
        useCases: ['Brand Building', 'Community Engagement']
      },
      {
        id: 2,
        slug: 'seo',
        name: 'Search Engine Optimisation',
        description: 'Improve your website\'s visibility in search engine results.',
        features: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'Keyword research'],
        benefits: ['Organic traffic', 'Higher credibility', 'Long-term ROI', 'Targeted leads'],
        process: ['Audit', 'Keyword Research', 'On-page Opt', 'Link Building'],
        technologies: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog'],
        useCases: ['Organic Growth', 'Local SEO']
      },
      {
        id: 3,
        slug: 'aso',
        name: 'App Store Optimisation',
        description: 'Increase your app\'s visibility and downloads on app stores.',
        features: ['ASO strategy', 'Keyword optimization', 'Visual assets', 'Conversion optimization'],
        benefits: ['Higher app ranking', 'More organic downloads', 'Lower user acquisition cost', 'Better reviews'],
        process: ['Keyword Research', 'Asset Creation', 'A/B Testing', 'Monitoring'],
        technologies: ['AppTweak', 'Sensor Tower', 'SplitMetrics', 'StoreMaven'],
        useCases: ['App Launches', 'User Acquisition']
      },
      {
        id: 4,
        slug: 'digital-strategy',
        name: 'Digital Strategy',
        description: 'Comprehensive digital marketing strategy aligned with business goals.',
        features: ['Marketing strategy', 'Channel planning', 'Campaign design', 'Analytics setup'],
        benefits: ['Aligned marketing efforts', 'Optimized budget', 'Measurable results', 'Clear direction'],
        process: ['Market Research', 'Goal Setting', 'Channel Selection', 'Execution Plan'],
        technologies: ['Google Analytics 4', 'Mixpanel', 'HubSpot', 'Tableau'],
        useCases: ['Market Entry', 'Growth Scaling']
      },
      {
        id: 5,
        slug: 'content-marketing',
        name: 'Content Marketing',
        description: 'Create and distribute valuable content to attract your audience.',
        features: ['Content strategy', 'Blog writing', 'Video content', 'Lead magnets'],
        benefits: ['Thought leadership', 'SEO benefits', 'Lead generation', 'Customer education'],
        process: ['Content Strategy', 'Creation', 'Distribution', 'Measurement'],
        technologies: ['WordPress', 'HubSpot', 'Mailchimp', 'YouTube'],
        useCases: ['Inbound Marketing', 'B2B Lead Gen']
      },
      {
        id: 6,
        slug: 'content-writing',
        name: 'Content Writing',
        description: 'Professional copywriting services for all your content needs.',
        features: ['Web copy', 'Blog posts', 'Technical writing', 'Product descriptions'],
        benefits: ['Persuasive messaging', 'Brand voice consistency', 'SEO optimization', 'Professional image'],
        process: ['Briefing', 'Research', 'Drafting', 'Revision'],
        technologies: ['Grammarly', 'Hemingway', 'Google Docs', 'SurferSEO'],
        useCases: ['Website Redesigns', 'Email Campaigns']
      }
    ]
  }
];

export default servicesData;
