type TPrompt = {
  title: string;
  description: string;
  prompt: string;
  id: string;
  inputs?: { replaceString: string; description?: string }[];
};

type TCategory = {
  title: string;
  prompts: TPrompt[];
};

export const professionalCommunications: TCategory[] = [
  {
    title: "Emails, Reports, and Proposals",
    prompts: [
      {
        title: "Automating Routine Updates and Communications",
        id: "1",
        description:
          "AI can draft regular update emails or communications, saving time and ensuring consistency in updates sent to team members or stakeholders.",
        prompt:
          "Compose a weekly update email for the project team, summarising the progress made on the main tasks, any upcoming deadlines, and key issues to address.",
      },
      {
        title: "Enhancing Business Proposals",
        id: "2",
        description:
          "AI can assist in crafting persuasive and clear business proposals, ensuring they are well-structured and tailored to the recipient's interests and needs.",
        prompt:
          "Generate a business proposal outline for a potential client interested in our web design services, focusing on customisation, efficiency, and post-launch support.",
      },
      {
        title: "Streamlining Report Generation",
        id: "3",
        description:
          "AI can help create comprehensive reports, such as market analysis or project status reports, by organising and presenting data in a clear and accessible manner.",
        prompt:
          "Create a summary report from the attached spreadsheet data, highlighting key trends, performance metrics, and areas for improvement.",
      },
      {
        title: "Drafting Executive Summaries",
        id: "4",
        description:
          "AI can condense lengthy reports into concise executive summaries, making them easier for busy professionals to quickly grasp the essential information.",
        prompt:
          "Write an executive summary for the attached 30-page research report on renewable energy trends, focusing on main findings and strategic recommendations.",
      },
      {
        title: "Personalising Sales Proposals",
        id: "5",
        description:
          "AI can tailor sales proposals to individual clients, incorporating their specific needs and preferences to increase the proposal's effectiveness.",
        prompt:
          "Customise a sales proposal for a client interested in our cloud storage solutions, emphasising scalability, security features, and cost-effectiveness based on their business size.",
      },
    ],
  },
  {
    title: "Enhancing Clarity and Precision",
    prompts: [
      {
        title: "Refining Technical Documents for Broader Audiences",
        id: "1",
        description:
          "AI can translate complex technical jargon into simpler language, making documents like technical guides or research papers more accessible to non-specialist audiences.",
        prompt:
          "Rewrite the abstract of this technical paper on machine learning algorithms in layman's terms while retaining the key concepts and findings.",
      },
      {
        title: "Improving Email Communication Clarity",
        id: "2",
        description:
          "AI can help edit emails to ensure clear and precise communication, particularly in situations where details are crucial, such as in project management or client interactions.",
        prompt:
          "Edit this project update email to make it more concise and clear, ensuring that the objectives, deadlines, and responsibilities are unmistakably outlined.",
      },
      {
        title: "Optimising Presentation Scripts",
        id: "3",
        description:
          "AI can assist in crafting presentation scripts or talking points that are clear and engaging, enhancing the effectiveness of public speaking or pitches.",
        prompt:
          "Refine this speech script for a product launch, focusing on clarity of the product's features and its benefits to the audience.",
      },
      {
        title: "Enhancing Report Summaries for Executives",
        id: "4",
        description:
          "AI can distil complex reports into brief, clear summaries for executives or stakeholders, emphasising key points and conclusions without oversimplifying.",
        prompt:
          "Summarise this detailed financial report into a one-page executive summary, highlighting the main insights and decisions needed.",
      },
      {
        title: "Clarifying Policy Documents or Guidelines",
        id: "5",
        description:
          "AI can help rephrase policy documents, guidelines, or procedures to ensure they are easily understandable and unambiguous, reducing misinterpretation.",
        prompt:
          "Revise the company's remote work policy to be more straightforward and clear, ensuring all guidelines are easy to understand and follow.",
      },
    ],
  },
];

export const marketing: TCategory[] = [
  {
    title: "Crafting Vibrant and Engaging Messages",
    prompts: [
      {
        title: "Creating Captivating Product Descriptions",
        id: "1",
        description:
          "AI can generate compelling and descriptive text for products, highlighting unique features and benefits to attract and engage potential customers.",
        prompt:
          "Write a vibrant and engaging description for a new high-tech fitness tracker, focusing on its innovative features and health benefits.",
      },
      {
        title: "Developing Interactive Social Media Campaigns",
        id: "2",
        description:
          "AI can help devise creative and interactive social media campaigns that resonate with audiences, encouraging engagement through questions, challenges, or interactive content.",
        prompt:
          "Design an interactive social media campaign for an eco-friendly clothing brand, incorporating themes of sustainability and fashion that encourage audience participation.",
      },
      {
        title: "Crafting Engaging Email Marketing Content",
        id: "3",
        description:
          "AI can assist in creating email content that captures attention, using persuasive language and storytelling to increase open rates and click-throughs.",
        prompt:
          "Compose an engaging and persuasive email for a holiday sales campaign, showcasing exclusive deals and urging prompt action.",
      },
      {
        title: "Writing Scripts for Promotional Videos",
        id: "4",
        description:
          "AI can draft scripts for promotional or explainer videos, ensuring they are lively, informative, and hold the viewer's interest.",
        prompt:
          "Create a script for a promotional video introducing a new smart home device, focusing on how it simplifies everyday life.",
      },
      {
        title: "Enhancing Blog Posts with Creative Storytelling",
        id: "5",
        description:
          "AI can infuse blog posts with creative storytelling elements, making them more engaging and relatable to readers, thereby increasing readership and shareability.",
        prompt:
          "Transform this standard blog post about healthy eating into a more engaging narrative, incorporating personal stories and vivid descriptions.",
      },
    ],
  },
  {
    title: "Tailoring Content to Target Audiences",
    prompts: [
      {
        title: "Customising Newsletters for Different Subscriber Segments",
        id: "1",
        description:
          "AI can help personalise newsletter content based on subscriber interests, demographics, or past engagement, making the content more relevant and engaging.",
        prompt:
          "Adapt the general newsletter content to appeal specifically to subscribers aged 25-35 who have shown interest in outdoor activities.",
      },
      {
        title: "Localising Content for Different Regions",
        id: "2",
        description:
          "AI can modify content to resonate with audiences in different geographical regions, considering local languages, cultural nuances, and preferences.",
        prompt:
          "Localise the marketing copy for our new skincare product for audiences in Japan, focusing on local beauty standards and cultural references.",
      },
      {
        title: "Adjusting Social Media Posts for Various Platforms",
        id: "3",
        description:
          "AI can tweak the tone, style, and format of social media posts to suit the unique audience and norms of different social media platforms.",
        prompt:
          "Adapt this Instagram post for LinkedIn, focusing on a more professional tone and highlighting industry-relevant aspects of our service.",
      },
      {
        title: "Creating Age-appropriate Educational Content",
        id: "4",
        description:
          "AI can tailor educational or informative content to be suitable for different age groups, ensuring the language and presentation are age-appropriate.",
        prompt:
          "Rewrite this article on renewable energy for a middle school audience, using simpler language and more engaging examples.",
      },
      {
        title: "Segmenting Marketing Messages for Diverse Customer Groups",
        id: "5",
        description:
          "AI can help in segmenting marketing messages according to customer profiles such as new users, loyal customers, or those at risk of churning.",
        prompt:
          "Develop a marketing message for long-term customers, emphasising loyalty rewards and advanced features not available to new users.",
      },
    ],
  },
];

export const hr: TCategory[] = [
  {
    title: "Job Descriptions and Candidate Communication",
    prompts: [
      {
        title: "Drafting Clear and Inclusive Job Descriptions",
        id: "1",
        description:
          "AI can help create job descriptions that are not only clear and detailed but also inclusive, ensuring they appeal to a diverse range of candidates.",
        prompt:
          "Generate a job description for a Senior Software Engineer position, emphasising inclusivity, essential qualifications, and company culture.",
      },
      {
        title: "Personalising Candidate Response Emails",
        id: "2",
        description:
          "AI can assist in crafting personalised response emails to job applicants, providing a more engaging and considerate recruitment process.",
        prompt:
          "Compose a personalised email response to an applicant who was not selected for the position, encouraging them to apply for future opportunities.",
      },
      {
        title: "Creating Role-specific Interview Guides",
        id: "3",
        description:
          "AI can develop tailored interview guides with relevant questions and topics that align with the specific requirements and responsibilities of a job role.",
        prompt:
          "Create an interview guide for a Digital Marketing Manager position, including questions that assess both technical skills and creative thinking.",
      },
      {
        title: "Enhancing Employer Branding in Job Advertisements",
        id: "4",
        description:
          "AI can enrich job advertisements with elements that highlight the employer's brand, culture, and values, attracting candidates who are a good cultural fit.",
        prompt:
          "Revise this job advertisement for a Project Manager role to better reflect our company’s focus on innovation and employee development.",
      },
      {
        title: "Automating Initial Candidate Screening Communications",
        id: "5",
        description:
          "AI can handle the initial stages of candidate communication, such as acknowledging application receipts and providing status updates, ensuring timely and consistent communication.",
        prompt:
          "Draft an automated response for new applicants, confirming receipt of their application and outlining the next steps in the recruitment process.",
      },
    ],
  },
  {
    title: "Fostering Organisational Culture",
    prompts: [
      {
        title: "Developing Internal Newsletters Highlighting Company Values",
        id: "1",
        description:
          "AI can assist in creating internal newsletters that regularly update employees about company events, successes, and stories that reinforce the company's core values and culture.",
        prompt:
          "Compose a monthly internal newsletter that includes employee success stories, upcoming events, and reminders about our core values of teamwork and innovation.",
      },
      {
        title: "Crafting Messages for Cultural Change Initiatives",
        id: "2",
        description:
          "AI can help draft communications for initiatives aimed at cultural change within the organisation, ensuring the messaging is consistent, clear, and aligns with the desired cultural shift.",
        prompt:
          "Write an announcement for a new initiative focused on enhancing diversity and inclusion within our company, outlining the goals and expected outcomes.",
      },
      {
        title: "Personalising Onboarding Content for New Employees",
        id: "3",
        description:
          "AI can tailor onboarding materials for new employees, making them feel welcomed and aligned with the company’s culture from day one.",
        prompt:
          "Create a personalised welcome package for new hires that introduces them to our company culture, values, and key contacts in a friendly and engaging manner.",
      },
      {
        title: "Generating Content for Internal Training Programs",
        id: "4",
        description:
          "AI can develop training materials that not only educate employees about their roles but also integrate aspects of the company's culture and ethics.",
        prompt:
          "Develop an interactive training module for new managers that includes our leadership principles and case studies demonstrating those principles in action.",
      },
      {
        title: "Creating Employee Engagement Surveys",
        id: "5",
        description:
          "AI can design surveys to gauge employee satisfaction and engagement, providing insights into how well the organisational culture is being embraced and areas for improvement.",
        prompt:
          "Draft an employee engagement survey focusing on aspects of our work culture, such as collaboration, work-life balance, and professional development opportunities.",
      },
    ],
  },
];

export const presenting: TCategory[] = [
  {
    title: "Sculpting Compelling Narratives",
    prompts: [
      {
        title: "Creating Story-Driven Presentation Content",
        id: "1",
        description:
          "AI can help develop presentations that use storytelling to make complex information more relatable and memorable, weaving in narratives that resonate with the audience.",
        prompt:
          "Develop a presentation for a tech conference, using a narrative style to explain our new AI technology's impact on everyday life.",
      },
      {
        title: "Enhancing Business Pitches with Persuasive Storytelling",
        id: "2",
        description:
          "AI can assist in crafting business pitches that use storytelling to create a compelling case for a product, service, or investment, connecting with investors or clients on an emotional level.",
        prompt:
          "Create a business pitch narrative for potential investors that tells the story of our startup's journey and the problem we're solving in an engaging way.",
      },
      {
        title: "Incorporating User Stories in Product Demos",
        id: "3",
        description:
          "AI can script product demonstrations that include user stories, showing how real people benefit from the product, thereby enhancing the product's appeal and relatability.",
        prompt:
          "Write a script for a product demo that includes real-life user stories to showcase the benefits and practical applications of our smart home devices.",
      },
      {
        title: "Building Narrative Arcs for Educational Lectures",
        id: "4",
        description:
          "AI can structure educational content into a narrative arc, making lectures more engaging and helping students better retain information.",
        prompt:
          "Outline an educational lecture on climate change, structuring the information around a narrative arc that highlights the human impact on the environment.",
      },
      {
        title: "Developing Inspirational Talks for Team Meetings",
        id: "5",
        description:
          "AI can assist in writing speeches or talks for internal team meetings that inspire and motivate employees, using narratives to connect company goals with individual efforts.",
        prompt:
          "Compose an inspirational talk for the next all-hands meeting that weaves our company’s vision and recent successes into a narrative that motivates the team.",
      },
    ],
  },
  {
    title: "Enhancing Speaker Confidence and Clarity",
    prompts: [
      {
        title: "Providing Feedback on Speech Delivery",
        id: "1",
        description:
          "AI can analyse practice recordings of speeches or presentations and offer constructive feedback on aspects like pacing, clarity, tone, and enunciation to enhance speaker effectiveness.",
        prompt:
          "Analyse this practice video of my presentation and provide feedback on how I can improve my clarity and delivery style.",
      },
      {
        title: "Developing Clear and Concise Talking Points",
        id: "2",
        description:
          "AI can help condense complex topics into clear, concise talking points, aiding speakers in communicating their message effectively and confidently without overwhelming their audience.",
        prompt:
          "Summarise the key points of this technical report into simple, clear talking points for a non-specialist audience presentation.",
      },
      {
        title: "Customising Speech Scripts for Personal Style",
        id: "3",
        description:
          "AI can tailor speech scripts to match a speaker's personal style and tone, making it easier for them to deliver the speech naturally and confidently.",
        prompt:
          "Rewrite this draft speech to fit my conversational and informal speaking style, while maintaining its professional tone.",
      },
      {
        title: "Simulating Q&A Sessions for Preparation",
        id: "4",
        description:
          "AI can simulate potential questions and answers for a Q&A session following a presentation, helping speakers prepare and feel more confident in handling audience queries.",
        prompt:
          "Generate a list of potential questions that might be asked after my presentation on renewable energy, along with concise, informative answers.",
      },
      {
        title: "Enhancing Language and Vocabulary for Impact",
        id: "5",
        description:
          "AI can suggest improvements in language and vocabulary to make speeches more impactful and memorable, helping speakers express their ideas more effectively.",
        prompt:
          "Review this keynote speech and suggest changes in language and vocabulary to make it more engaging and impactful for an international audience.",
      },
    ],
  },
];

export const education: TCategory[] = [
  {
    title: "Creating and Enhancing Learning Materials",
    prompts: [
      {
        title: "Designing Interactive Educational Content",
        id: "1",
        description:
          "AI can assist in creating interactive and engaging learning materials, such as quizzes, interactive diagrams, or simulations, to enhance student understanding and interest.",
        prompt:
          "Create an interactive quiz on the fundamentals of photosynthesis for high school biology students, including diagrams and explanatory feedback for each answer.",
      },
      {
        title: "Adapting Textbooks into Engaging Digital Formats",
        id: "2",
        description:
          "AI can help convert traditional textbook content into more engaging digital formats, like e-books with embedded videos, animations, or self-assessment tools.",
        prompt:
          "Transform chapter three of this history textbook into an interactive digital format, incorporating multimedia elements to enhance student engagement.",
      },
      {
        title: "Personalising Learning Modules for Different Learning Styles",
        id: "3",
        description:
          "AI can tailor educational content to suit various learning styles (visual, auditory, kinesthetic, etc.), making learning more effective and inclusive.",
        prompt:
          "Adapt this lesson on algebraic equations to cater to auditory learners, including spoken explanations and audio-based exercises.",
      },
      {
        title: "Enhancing Language Learning with Conversational Scenarios",
        id: "4",
        description:
          "AI can generate realistic and culturally relevant conversational scenarios for language learning, aiding in the development of practical communication skills.",
        prompt:
          "Create a series of conversational scenarios in French for beginner learners, focusing on common situations like ordering in a restaurant or asking for directions.",
      },
      {
        title:
          "Developing Customised Revision Guides Based on Student Performance",
        id: "5",
        description:
          "AI can analyse student performance data to create customised revision guides that focus on areas where individual students or groups need more practice.",
        prompt:
          "Generate a personalised revision guide for a student struggling with the concepts of molecular biology, based on their recent test results and homework assignments.",
      },
    ],
  },
  {
    title: "Customising Educational Content",
    prompts: [
      {
        title: "Tailoring Lesson Plans to Individual Student Needs",
        id: "1",
        description:
          "AI can help create lesson plans that are tailored to the learning pace and style of individual students, helping to address their specific strengths and weaknesses.",
        prompt:
          "Create a customised lesson plan for a student who excels in visual learning but struggles with mathematical concepts, focusing on visual methods to teach algebra.",
      },
      {
        title: "Adapting Course Material for Different Grade Levels",
        id: "2",
        description:
          "AI can modify existing course materials to make them appropriate for different grade levels, ensuring the content is challenging yet accessible.",
        prompt:
          "Adapt this high school-level material on the solar system for use in a 5th-grade classroom, simplifying the concepts and language.",
      },
      {
        title:
          "Creating Accessible Learning Materials for Students with Disabilities",
        id: "3",
        description:
          "AI can assist in developing learning materials that are accessible to students with disabilities, such as converting text to speech or creating Braille-ready formats.",
        prompt:
          "Convert this written science curriculum into a format accessible for visually impaired students, including descriptions suitable for text-to-speech software.",
      },
      {
        title: "Designing Culturally Relevant Educational Content",
        id: "4",
        description:
          "AI can help in incorporating cultural relevance into educational materials, ensuring that content resonates with students from diverse backgrounds.",
        prompt:
          "Revise this standard American history curriculum to include more content on Native American history and culture, ensuring cultural sensitivity and relevance.",
      },
      {
        title: "Customising Content for E-Learning Platforms",
        id: "5",
        description:
          "AI can tailor educational content to be more suitable for e-learning platforms, focusing on engagement and interactivity suitable for online learning environments.",
        prompt:
          "Transform this traditional lecture-based biology course into an interactive e-learning module, with engaging activities and self-assessment quizzes.",
      },
    ],
  },
];

export const cs: TCategory[] = [
  {
    title: "Crafting Thoughtful and Helpful Responses",
    prompts: [
      {
        title: "Responding to Customer Inquiries with Detailed Information",
        id: "1",
        description:
          "AI can assist in providing detailed and accurate responses to customer inquiries, ensuring that customers receive comprehensive information that addresses their specific questions.",
        prompt:
          "Draft a response to a customer asking about the specifications and compatibility of our latest software product, including detailed technical information.",
      },
      {
        title: "Personalising Responses to Customer Feedback",
        id: "2",
        description:
          "AI can help personalise responses to customer feedback, whether positive or negative, showing customers that their opinions are valued and considered.",
        prompt:
          "Compose a personalised thank-you response to a customer who left a positive review, mentioning specific aspects they enjoyed and inviting further feedback.",
      },
      {
        title: "Handling Complaints with Empathy and Solutions",
        id: "3",
        description:
          "AI can be used to craft empathetic responses to customer complaints, offering solutions or alternatives, and thereby turning potentially negative experiences into positive ones.",
        prompt:
          "Write a thoughtful response to a customer complaint about delayed shipping, apologising for the inconvenience and offering a discount on their next purchase.",
      },
      {
        title: "Providing Step-by-Step Assistance for Customer Queries",
        id: "4",
        description:
          "AI can generate clear and easy-to-follow instructions in response to customers needing assistance with product setup, usage, or troubleshooting.",
        prompt:
          "Create a step-by-step guide in response to a customer query about setting up and using our smart home thermostat.",
      },
      {
        title: "Following Up on Customer Service Interactions",
        id: "5",
        description:
          "AI can help in crafting follow-up messages post-customer service interactions, ensuring customers are satisfied with the service and addressing any unresolved issues.",
        prompt:
          "Develop a follow-up email to send to customers after a support call, asking for feedback on the service received and if their issue was resolved satisfactorily.",
      },
    ],
  },
  {
    title: "Building Customer Relationships",
    prompts: [
      {
        title: "Creating Personalised Product Recommendations",
        id: "1",
        description:
          "AI can analyse customer purchase history and preferences to generate personalised product recommendations, enhancing the shopping experience and fostering customer loyalty.",
        prompt:
          "Generate a personalised email for a customer who recently purchased a digital camera, recommending accessories based on their purchase history and browsing behaviour.",
      },
      {
        title: "Sending Customised Follow-up Communications",
        id: "2",
        description:
          "AI can craft follow-up messages after purchases or interactions, checking in with customers and offering additional support or information, thereby deepening the customer relationship.",
        prompt:
          "Compose a follow-up message for customers who bought a fitness tracker three months ago, inquiring about their experience and offering tips for maximising the device’s use.",
      },
      {
        title: "Developing Birthday and Anniversary Messages",
        id: "3",
        description:
          "AI can help in sending out personalised birthday or anniversary greetings to customers, including special offers or discounts, making them feel valued and recognised.",
        prompt:
          "Create a warm and personalised birthday greeting email for customers, including a special one-time discount code as a gift.",
      },
      {
        title: "Crafting Seasonal or Holiday-Specific Messages",
        id: "4",
        description:
          "AI can assist in creating seasonal or holiday-specific communications, which resonate with the spirit of the occasion and help maintain a warm connection with customers.",
        prompt:
          "Write a festive holiday season newsletter for our customers, highlighting special offers and expressing appreciation for their continued support.",
      },
      {
        title: "Responding to Social Media Interactions",
        id: "5",
        description:
          "AI can be used to respond promptly and engagingly to customer interactions on social media platforms, such as comments, likes, or direct messages, enhancing online engagement.",
        prompt:
          "Develop a friendly and engaging response to a customer’s positive comment on our latest social media post, encouraging further interaction and feedback.",
      },
    ],
  },
];

export const projects: TCategory[] = [
  {
    title: "Drafting and Enhancing Project Documents",
    prompts: [
      {
        title: "Creating Comprehensive Project Plans",
        id: "1",
        description:
          "AI can assist in drafting detailed project plans, including timelines, milestones, resource allocation, and risk assessments, ensuring a thorough and practical approach to project execution.",
        prompt:
          "Generate a project plan for launching a new mobile application, including key phases, resource allocation, and risk mitigation strategies.",
      },
      {
        title: "Enhancing Project Proposals for Stakeholders",
        id: "2",
        description:
          "AI can help refine project proposals, making them more persuasive and clear for stakeholders, and ensuring that all critical aspects are compellingly presented.",
        prompt:
          "Revise this draft proposal for a renewable energy project, focusing on enhancing its clarity and the impact of its benefits to gain stakeholder approval.",
      },
      {
        title: "Developing Project Status Reports",
        id: "3",
        description:
          "AI can assist in creating concise and informative status reports, updating stakeholders on progress, challenges, and next steps in an easily digestible format.",
        prompt:
          "Create a monthly project status report for the website redesign project, highlighting completed milestones, current challenges, and the plan for the coming month.",
      },
      {
        title: "Drafting Risk Management Documents",
        id: "4",
        description:
          "AI can help in identifying potential risks in a project and drafting risk management plans, ensuring that proactive measures are in place to handle uncertainties.",
        prompt:
          "Identify potential risks for the upcoming product launch and draft a risk management plan outlining mitigation and contingency strategies.",
      },
      {
        title: "Preparing Post-Project Evaluation Reports",
        id: "5",
        description:
          "AI can be used to compile and analyse data post-project completion, creating evaluation reports that provide insights on successes, areas for improvement, and lessons learned.",
        prompt:
          "Generate a post-project evaluation report for the digital marketing campaign, analysing its performance against objectives and providing recommendations for future campaigns.",
      },
    ],
  },
  {
    title: "Strategic Planning and Execution",
    prompts: [
      {
        title: "Developing Long-term Business Strategies",
        id: "1",
        description:
          "AI can assist in formulating long-term strategic plans for a business, taking into account market trends, competitive analysis, and company goals.",
        prompt:
          "Create a comprehensive five-year strategic plan for a mid-sized tech company focusing on growth in the artificial intelligence sector, considering market trends and potential challenges.",
      },
      {
        title: "Analysing Market Trends for Strategic Decisions",
        id: "2",
        description:
          "AI can be utilised to analyse current market trends and consumer behaviour, providing insights that inform strategic decisions and help identify new opportunities.",
        prompt:
          "Analyse recent market trends in the renewable energy sector and suggest strategic directions for our company to expand its market share.",
      },
      {
        title: "Optimising Resource Allocation Plans",
        id: "3",
        description:
          "AI can help optimise the allocation of resources, including budget, personnel, and technology, ensuring they are used effectively to meet strategic objectives.",
        prompt:
          "Develop a resource allocation plan for the upcoming fiscal year that aligns with our strategic objectives of expanding into European markets.",
      },
      {
        title: "Crafting Risk Mitigation Strategies",
        id: "4",
        description:
          "AI can assist in identifying potential risks in strategic plans and suggest mitigation strategies to ensure successful plan execution.",
        prompt:
          "Identify key risks associated with our global expansion strategy and propose effective risk mitigation strategies.",
      },
      {
        title: "Setting and Tracking Strategic Milestones",
        id: "5",
        description:
          "AI can help set realistic and achievable milestones for strategic initiatives and provide tools for tracking progress against these milestones.",
        prompt:
          "Outline key milestones for the launch of our new e-commerce platform and suggest a framework for tracking progress and performance metrics.",
      },
    ],
  },
];

export const socials: TCategory[] = [
  {
    title: "Enhancing Online Presence",
    prompts: [
      {
        title: "Optimising Website Content for SEO",
        id: "1",
        description:
          "AI can assist in optimising website content, including blog posts and product descriptions, to improve search engine rankings and attract more organic traffic.",
        prompt:
          "Rewrite the main landing page content for our online store, focusing on SEO optimisation with relevant keywords for organic skincare products.",
      },
      {
        title: "Developing Engaging Social Media Profiles",
        id: "2",
        description:
          "AI can help craft engaging and informative social media profiles, ensuring they effectively communicate the brand's personality and values to attract followers.",
        prompt:
          "Create an engaging bio for our company’s Instagram profile that reflects our brand's focus on sustainability and innovation in fashion.",
      },
      {
        title: "Creating Regular Blog Content to Engage Audience",
        id: "3",
        description:
          "AI can generate ideas and draft regular blog posts on topics relevant to the brand's audience, keeping the content fresh and engaging to encourage repeat visits.",
        prompt:
          "Write a blog post on the benefits of using renewable energy in homes, targeting homeowners interested in sustainability.",
      },
      {
        title: "Personalising Email Newsletters",
        id: "4",
        description:
          "AI can personalise email newsletters for different segments of the audience, ensuring that the content is relevant and engaging for each group.",
        prompt:
          "Customise our monthly email newsletter for subscribers interested in vegan lifestyle, featuring new vegan products and lifestyle tips.",
      },
      {
        title: "Automating Responses to Online Inquiries",
        id: "5",
        description:
          "AI can automate initial responses to online inquiries, providing quick and helpful information to customers and enhancing their online experience with the brand.",
        prompt:
          "Draft an automated response for common inquiries received through our website’s contact form, providing helpful information and a friendly tone.",
      },
    ],
  },
  {
    title: "Crafting Captivating Online Content",
    prompts: [
      {
        title: "Creating Viral Social Media Posts",
        id: "1",
        description:
          "AI can assist in generating creative and shareable social media posts that have the potential to go viral, thus increasing brand visibility and engagement.",
        prompt:
          "Design a captivating and visually appealing social media post for our new fitness app that includes a call-to-action, encouraging users to share their workout successes.",
      },
      {
        title: "Developing Interactive Online Quizzes and Polls",
        id: "2",
        description:
          "AI can help create engaging and interactive content like quizzes and polls, which can drive engagement and provide valuable insights into audience preferences.",
        prompt:
          "Create an interactive quiz for our travel website that helps users discover their next vacation destination based on their preferences and travel style.",
      },
      {
        title: "Writing Informative and Engaging Blog Articles",
        id: "3",
        description:
          "AI can be used to write compelling blog articles on topics relevant to the brand’s audience, providing valuable information in an engaging way to keep readers returning.",
        prompt:
          "Write an informative yet engaging blog post on 'Top 10 Sustainable Living Practices for Urban Dwellers' for our environmental blog.",
      },
      {
        title: "Crafting Eye-catching Email Marketing Campaigns",
        id: "4",
        description:
          "AI can assist in designing email marketing campaigns that stand out in subscribers' inboxes, using engaging content and visuals to increase open rates and click-throughs.",
        prompt:
          "Develop a visually appealing and persuasive email campaign for our upcoming summer fashion collection, highlighting key pieces and exclusive offers.",
      },
      {
        title: "Producing Engaging Video Content Scripts",
        id: "5",
        description:
          "AI can help script videos for platforms like YouTube or Instagram, ensuring the content is engaging, informative, and suitable for the platform's audience.",
        prompt:
          "Write a script for a short, informative video on 'The Future of Renewable Energy', to be published on our YouTube channel, targeting a general audience.",
      },
    ],
  },
];

export const allPrompts = [
  {
    title: "Professional Communications",
    id: "professional-communications",
    categories: professionalCommunications,
  },
  {
    title: "Marketing and Creative Content",
    id: "marketing-and-creative-content",
    categories: marketing,
  },
  {
    title: "Human Resources and Recruitment",
    id: "human-resources-and-recruitment",
    categories: hr,
  },
  {
    title: "Presentations and Public Speaking",
    id: "presentations-and-public-speaking",
    categories: presenting,
  },
  {
    title: "Education and Training",
    id: "education-and-training",
    categories: education,
  },
  {
    title: "Customer Service and Support",
    id: "customer-service-and-support",
    categories: cs,
  },
  {
    title: "Project Management and Strategy",
    id: "project-management-and-strategy",
    categories: projects,
  },
  {
    title: "Social Media and Online Engagement",
    id: "social-media-and-online-engagement",
    categories: socials,
  },
];

export const getPromptCategoriesById = (id: string) => {
  return allPrompts.find((prompt) => prompt.id === id);
};

export const getPromptByCategoryAndId = (category: string, id: string) => {
  const promptCategory = getPromptCategoriesById(category);
  let prompt: TPrompt | undefined;
  let subTitle: string | undefined;

  promptCategory?.categories.forEach((category) => {
    const anyPrompt = category.prompts.find((prompt) => prompt.id === id);
    if (anyPrompt) {
      subTitle = category.title;
      prompt = anyPrompt;
    }
  });

  return {
    prompt,
    subTitle,
    category: promptCategory,
  };
};
