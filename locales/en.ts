export const en = {
  navbar: {
    menu: {
      home: 'Home',
      services: 'Services',
      process: 'Process',
      about: 'About',
      faq: 'FAQ',
    },
    cta: 'Book a Discovery Call',
    switchLanguage: 'العربية',
    switchLanguageCode: 'AR',
  },
  buttons: {
    primaryCta: 'Book a Discovery Call',
    secondaryCta: 'Get a Free Audit',
  },
  hero: {
    badge: 'Digital Product Engineering & Automation Agency',
    titleWords: ['Custom', 'software,', 'automation', '&', 'cloud', 'systems', 'that', 'work', 'for', 'you'],
    gradientStartWordIndex: 5,
    subtitle: 'Lames is one engineering team for the whole system: we design your product, build it for web and mobile, automate your operations with AI and n8n, and run it on secure, scalable cloud infrastructure.',
    marquee: [
      'UI/UX Design',
      'Web Engineering',
      'Mobile Apps',
      'Headless CMS',
      'n8n Automation',
      'API Integrations',
      'Cloud & DevOps',
      'CI/CD Pipelines',
      'Cybersecurity',
    ],
  },
  services: {
    eyebrow: 'Our Expertise',
    titleMain: 'End-to-End',
    titleAccent: 'Technical Capabilities',
    description: 'From product strategy and experience design to engineering, automation, and infrastructure, one team takes your system from idea to reliable operation.',
    watchFullWorkflow: 'Watch the full workflow run live below',
    workflowPreview: 'Workflow preview',
    aiAgent: {
      title: 'Operations Agent',
      status: 'Working with human oversight',
      disclaimer: 'Every agent ships with guardrails and human-in-the-loop controls.',
      messages: [
        { from: 'system', text: 'New support ticket #4821 received' },
        { from: 'agent', text: 'Classified as billing · priority high. Suggested reply drafted.' },
        { from: 'system', text: 'Routed to finance team with full context' },
        { from: 'agent', text: 'Follow-up scheduled. Human approval requested for refund.' },
      ]
    },
    capabilities: [
      {
        key: 'engineering',
        label: 'Engineering',
        title: 'Digital Product Engineering',
        description: 'We design and build high-performance web platforms, mobile applications, custom systems, and flexible headless CMS experiences.',
        features: [
          'Custom web applications',
          'iOS & Android development',
          'Headless CMS architecture',
          'Scalable backend systems',
          'Performance-focused delivery',
        ],
      },
      {
        key: 'automation',
        label: 'Automation',
        title: 'Business Process Automation',
        description: 'We turn repetitive work into reliable automated workflows with n8n and custom API integrations, so information moves between your tools without manual effort.',
        features: [
          'n8n workflow design & operation',
          'API integrations between your tools',
          'Automated reporting & alerts',
          'Fewer manual tasks, fewer errors',
          'Monitored, recoverable workflows',
        ],
      },
      {
        key: 'infrastructure',
        label: 'Infrastructure',
        title: 'Cloud, DevOps & Security',
        description: 'We create secure, resilient infrastructure that keeps your systems available, deployable, and ready to scale under pressure.',
        features: [
          'Cloud infrastructure design',
          'Server management',
          'CI/CD pipelines',
          'Security best practices',
          'Scalable and stable environments',
        ],
      },
      {
        key: 'design',
        label: 'Design',
        title: 'UI/UX Design',
        description: 'We study the complete user journey and design polished interfaces that make complex products clear, intuitive, and true to your brand.',
        features: [
          'User journey mapping',
          'Interface and interaction design',
          'Responsive product experiences',
          'Design systems',
          'Developer-ready handoff',
        ],
      },
      {
        key: 'ai',
        label: 'AI',
        title: 'AI Agents & Intelligent Systems',
        description: 'We put AI to work inside your operations: agents that handle routine decisions, assistants that support your customers, and AI steps wired directly into your workflows — always with guardrails.',
        features: [
          'AI agents for routine operations',
          'Customer & support assistants',
          'Document and data extraction',
          'AI steps inside n8n workflows',
          'Human-in-the-loop controls',
        ],
      },
    ],
  },
  visuals: {
    productEngineering: {
      tryIt: 'Try it',
      subtitle: 'Switch the product surface',
      web: 'Web',
      mobile: 'Mobile',
      api: 'API',
      buildPassing: 'Build passing',
      uptime: '99.9% uptime',
      live: 'Live',
    },
    cloudDevops: {
      productionCloud: 'Production Cloud',
      deploy: 'Deploy',
      deploying: 'Deploying',
      redeploy: 'Redeploy',
      build: 'Build',
      deployStage: 'Deploy',
      scale: 'Scale',
      apiCluster: 'API Cluster',
      dataCluster: 'Data Cluster',
      healthy: 'Healthy',
      standby: 'Standby',
      protected: 'Protected',
      awaitingDeploy: 'Awaiting deploy',
    },
    uiUx: {
      playground: 'Design playground',
      subtitle: 'Compare and customize',
      wireframe: 'Wireframe',
      finalUi: 'Final UI',
      compareWireframe: 'Wireframe',
      compareFinal: 'Final',
    }
  },
  automation: {
    badge: 'Automation that works',
    titleMain: 'Automate',
    titleAccent: 'Business Workflows',
    description: 'We turn repetitive work into reliable automated workflows and connect your tools so information moves smoothly across your business.',
    features: [
      { key: 'crm', title: 'Workflow Automation', desc: 'Build smart workflows with n8n and custom logic.' },
      { key: 'notify', title: 'API Integrations', desc: 'Connect any tool or service using powerful APIs.' },
      { key: 'ai', title: 'AI Agents', desc: 'Automate tasks and decisions with intelligent agents.' },
      { key: 'email', title: 'Reporting & Alerts', desc: 'Get real-time insights and instant notifications.' },
    ],
    status: 'Workflow Status',
    running: 'Running',
    liveDemo: 'Live demo',
    runsThisSession: 'Runs this session',
    nodes: {
      lead: 'New Lead',
      ai: 'AI Qualification',
      crm: 'CRM Update',
      notify: 'Notification',
      email: 'Send Email',
      db: 'Database',
    },
    logTitle: 'Execution log',
    waitingTrigger: 'Waiting for trigger…',
    logMessages: [
      'Trigger · new lead from website form',
      'AI scored the lead — qualified',
      'Contact created in CRM',
      'Team notified in Slack',
      'Welcome email sent',
      'Record stored in database',
      '✓ Run completed in 4.2s',
    ],
    connectTools: 'Connect your favorite tools',
  },
  process: {
    eyebrow: 'How We Work',
    titleMain: 'From first conversation to a',
    titleAccent: 'running system',
    description: 'One connected process. No handoffs between agencies, no gaps between design, code, and operations.',
    typicalDuration: 'Typical duration:',
    steps: [
      {
        number: '01',
        title: 'Discover',
        tagline: 'Understand before we build',
        description: 'We study your goals, workflows, and bottlenecks to find where technology creates the most value.',
        deliverables: ['Technical audit', 'Roadmap', 'Success metrics'],
        duration: '1–2 weeks',
      },
      {
        number: '02',
        title: 'Design',
        tagline: 'The experience takes shape',
        description: 'We map the full user journey and craft modern interfaces that carry the weight of your brand.',
        deliverables: ['User journeys', 'UI prototypes', 'Design system'],
        duration: '2–3 weeks',
      },
      {
        number: '03',
        title: 'Engineer',
        tagline: 'Built to production standards',
        description: 'We build secure, high-performance web and mobile products on architectures made to last.',
        deliverables: ['Web & mobile apps', 'Scalable backend', 'Code reviews'],
        duration: '4–8 weeks',
      },
      {
        number: '04',
        title: 'Automate',
        tagline: 'Your tools start working together',
        description: 'We wire your systems together with n8n workflows and API integrations that remove repetitive work.',
        deliverables: ['n8n workflows', 'API integrations', 'Fewer manual tasks'],
        duration: '1–3 weeks',
      },
      {
        number: '05',
        title: 'Operate & Scale',
        tagline: 'Stable today, ready for tomorrow',
        description: 'Cloud infrastructure, CI/CD, and security keep your system stable as your business grows.',
        deliverables: ['Cloud infrastructure', 'CI/CD pipelines', 'Monitoring & security'],
        duration: 'Ongoing',
      },
    ],
  },
  ctaSection: {
    title: 'Not sure where to start?',
    description: 'Tell us about your product or process — we’ll map the practical next step together.',
  },
  about: {
    eyebrow: 'Who We Are',
    titleMain: 'We are more than just',
    titleAccent: 'a Development Vendor',
    description: 'Lames is an integrated digital agency specializing in product engineering and business automation. We don’t hand you code and walk away — we deliver a complete system: an experience that attracts customers, engineering that keeps it stable, automation that runs your routine operations, and infrastructure ready to grow with you.',
    imageBadge: {
      tagline: 'One Integrated Team',
      text: 'Strategy, design, engineering, automation, and operations — working as one.',
    },
    floatingBadge: {
      title: 'Security-first delivery',
      subtitle: 'Built for performance & flexibility',
    },
    capabilities: [
      {
        title: 'Product Engineering',
        description: 'Web, mobile, and custom systems built to production standards.',
      },
      {
        title: 'Business Automation',
        description: 'n8n workflows and integrations that remove repetitive work.',
      },
      {
        title: 'Cloud & DevOps',
        description: 'Secure infrastructure, CI/CD, and zero-drama deployments.',
      },
      {
        title: 'UI/UX Design',
        description: 'Journey-mapped interfaces that carry the weight of your brand.',
      },
    ],
    facts: [
      { value: '5', label: 'Disciplines: UI/UX, frontend, backend, mobile & DevOps' },
      { value: 'EN · AR', label: 'We work with clients in English and Arabic' },
      { value: 'One team', label: 'Strategy to operations — no handoffs' },
    ],
  },
  whyLames: {
    eyebrow: 'Why Lames',
    titleMain: 'We don’t hand over code.',
    titleSub: 'We hand over a',
    titleAccent: 'complete system.',
    description: 'Traditional vendors deliver features. We connect the product, the workflows behind it, and the infrastructure that keeps it running.',
    proofStats: [
      { value: 'End-to-end', label: 'Design, build, automation & cloud under one team' },
      { value: '100% custom', label: 'Purpose-built systems — no templates, no lock-in' },
      { value: 'Security-first', label: 'Best practices applied from architecture to deployment' },
      { value: '5 disciplines', label: 'UI/UX · Frontend · Backend · Mobile · DevOps' },
    ],
    advantages: [
      {
        title: 'Design That Attracts',
        description: 'Interfaces crafted around the real user journey, polished enough to carry the weight of your brand and win your customers over.',
      },
      {
        title: 'Engineering That Endures',
        description: 'Strong, secure code and stable architectures that keep your business running — performance and security are requirements, not afterthoughts.',
      },
      {
        title: 'Automation That Works for You',
        description: 'Intelligent workflows quietly run your routine operations, freeing hundreds of hours so your team can focus on what actually grows the business.',
      },
      {
        title: 'Infrastructure Ready to Scale',
        description: 'Cloud foundations and flexible architecture built to grow with your users, your data, and the ambitions of your business.',
      },
    ],
  },
  faq: {
    eyebrow: 'Working With Lames',
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about working with us.',
    items: [
      {
        question: 'What can Lames build for my business?',
        answer: 'We build custom web platforms, iOS and Android applications, headless CMS experiences, internal systems, dashboards, and the backend services that power them.',
      },
      {
        question: 'Can you automate our existing processes and tools?',
        answer: 'Yes. We use n8n and custom API integrations to connect the systems you already use and automate workflows across sales, marketing, customer service, and internal operations.',
      },
      {
        question: 'Do you handle cloud infrastructure and deployment?',
        answer: 'Yes. We design and manage secure cloud infrastructure, servers, and CI/CD pipelines so your product can be deployed reliably, updated without unnecessary downtime, and scaled as demand grows.',
      },
      {
        question: 'How do design and engineering work together?',
        answer: 'Our UI/UX designers map the complete user journey and work directly with frontend, backend, and mobile engineers. This keeps the experience polished, technically practical, and consistent through delivery.',
      },
      {
        question: 'Can you review our product before we commit to a project?',
        answer: 'Yes. You can request a free initial UI/UX or automation audit. We will identify practical opportunities to improve the experience, reduce manual work, or connect disconnected systems.',
      },
    ],
  },
  idea: {
    eyebrow: 'We don’t just build apps — we build systems that work for you',
    titleMain: 'Ready to build a system that',
    titleAccent: 'works for you',
    titleSuffix: '?',
    subtitle: 'Tell us where your business is losing time. We’ll help you turn the bottleneck into a secure, scalable solution.',
    expectations: [
      'A 30-minute discovery call — no commitment',
      'We reply within one business day',
      'A written summary with practical next steps',
    ],
  },
  contact: {
    headingMain: 'Let’s Solve What’s',
    headingAccent: 'Slowing You Down',
    subtitle: 'Tell us about the product you want to build, the process you want to automate, or the system you need to strengthen. We’ll review the opportunity and suggest a practical next step.',
    details: [
      'Free initial audit',
      'One end-to-end technical team',
      'Security and scalability by design',
    ],
    form: {
      fullName: 'Full Name',
      fullNamePlaceholder: 'John Doe',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      serviceLabel: 'What service do you need?',
      services: [
        'Digital Product Engineering',
        'Business Automation',
        'Cloud & DevOps',
        'UI/UX Design',
        'Free Audit',
      ],
      message: 'Message',
      messagePlaceholder: 'Tell us about the product, workflow, or technical challenge...',
      submit: 'Send Your Request',
      submitting: 'Sending...',
      success: 'Message sent! We’ll be in touch soon.',
      error: 'Something went wrong.',
      whatsappFallback: 'Message us on WhatsApp instead',
      errors: {
        fullNameRequired: 'Full name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Message is required',
      }
    }
  },
  footer: {
    description: 'Lames engineers digital products, automated workflows, and secure cloud systems that help businesses operate efficiently and scale with confidence.',
    sloganMain: 'We don’t just build apps.',
    sloganAccent: 'We build systems that work for you.',
    companyTitle: 'Company',
    companyLinks: [
      { label: 'About', href: '/#about' },
      { label: 'How We Work', href: '/#process' },
      { label: 'Why Lames', href: '/#why-lames' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/contact' },
    ],
    servicesTitle: 'Services',
    servicesLinks: [
      { label: 'Digital Product Engineering', href: '/#services' },
      { label: 'Business Process Automation', href: '/#automation' },
      { label: 'Cloud, DevOps & Security', href: '/#services' },
      { label: 'UI/UX Design', href: '/#services' },
      { label: 'AI Agents & Intelligent Systems', href: '/#services' },
    ],
    contactTitle: 'Start a Conversation',
    contactDescription: 'Have a product idea, an operational bottleneck, or disconnected systems? Let’s find the right technical path forward.',
    rights: `© ${new Date().getFullYear()} Lames. All rights reserved.`,
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
  floatingWhatsApp: {
    tooltip: 'Chat with us',
    defaultMessage: 'Hi Lames, I’d like to talk about a project.',
  },
  legal: {
    legalTag: 'Legal',
    lastUpdated: 'Last updated:',
    questions: 'Questions? Reach us at',
    orVia: 'or via our',
    contactPage: 'contact page',
    privacy: {
      title: 'Privacy Policy',
      updated: 'July 8, 2026',
      intro: 'This Privacy Policy explains how Lames collects, uses, and protects the personal information you share with us when you use our website or contact our team.',
      sections: [
        {
          heading: '1. Information We Collect',
          body: [
            'When you contact us through our website, WhatsApp, or email, we collect the information you provide — such as your name, email address, phone number, and any details about your project or inquiry.',
            'We also collect limited technical information automatically, such as your IP address, browser type, and pages visited, to keep the site secure and understand how it is used.',
          ],
        },
        {
          heading: '2. How We Use Your Information',
          body: [
            'We use the information you provide to respond to your inquiries, deliver our services, send project-related communications, and improve our website and offerings.',
            'We do not sell your personal information to third parties.',
          ],
        },
        {
          heading: '3. Sharing of Information',
          body: [
            'We may share information with trusted service providers who help us operate our business — for example, hosting, email, and analytics providers — strictly to perform services on our behalf and under confidentiality obligations.',
            'We may also disclose information where required by law or to protect our legal rights.',
          ],
        },
        {
          heading: '4. Data Retention & Security',
          body: [
            'We retain your information only for as long as necessary to fulfill the purposes described in this policy or as required by law.',
            'We apply appropriate technical and organizational measures to protect your data, though no method of transmission or storage is completely secure.',
          ],
        },
        {
          heading: '5. Your Rights',
          body: [
            'You may request access to, correction of, or deletion of your personal information at any time by contacting us at hello@lames.io.',
          ],
        },
        {
          heading: '6. Changes to This Policy',
          body: [
            'We may update this Privacy Policy from time to time. The latest version will always be available on this page with the updated date shown above.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      updated: 'July 8, 2026',
      intro: 'These Terms of Service govern your access to and use of the Lames website and services. Please read them carefully.',
      sections: [
        {
          heading: '1. Acceptance of Terms',
          body: [
            'By accessing or using the Lames website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.',
          ],
        },
        {
          heading: '2. Our Services',
          body: [
            'Lames provides digital product engineering, business process automation, cloud and DevOps, and UI/UX design services. The specific scope, deliverables, timelines, and fees for any engagement are defined in a separate written agreement or proposal.',
          ],
        },
        {
          heading: '3. Use of the Website',
          body: [
            'You agree to use this website lawfully and not to attempt to disrupt, damage, or gain unauthorized access to any part of it or its underlying systems.',
          ],
        },
        {
          heading: '4. Intellectual Property',
          body: [
            'All content on this website — including text, graphics, logos, and code — is owned by Lames or its licensors and is protected by applicable intellectual property laws. Ownership of deliverables produced during a client engagement is governed by the terms of the relevant project agreement.',
          ],
        },
        {
          heading: '5. Limitation of Liability',
          body: [
            'This website and its content are provided on an "as is" basis. To the fullest extent permitted by law, Lames is not liable for any indirect or consequential damages arising from your use of the website.',
          ],
        },
        {
          heading: '6. Changes to These Terms',
          body: [
            'We may update these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
          ],
        },
        {
          heading: '7. Contact',
          body: [
            'For any questions about these terms, contact us at hello@lames.io.',
          ],
        },
      ],
    },
  }
};
