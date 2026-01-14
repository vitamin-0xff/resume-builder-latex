/**
 * Content Suggestions and Templates for CV Creation
 * Use these as inspiration when writing your CV content
 */

export const actionVerbs = {
  leadership: [
    "Led", "Directed", "Managed", "Coordinated", "Supervised", "Mentored",
    "Guided", "Orchestrated", "Spearheaded", "Championed", "Facilitated"
  ],
  technical: [
    "Developed", "Built", "Designed", "Implemented", "Architected", "Engineered",
    "Programmed", "Deployed", "Optimized", "Integrated", "Automated", "Configured"
  ],
  analytical: [
    "Analyzed", "Evaluated", "Assessed", "Investigated", "Researched", "Identified",
    "Diagnosed", "Examined", "Measured", "Quantified", "Forecasted"
  ],
  creative: [
    "Created", "Designed", "Crafted", "Conceptualized", "Innovated", "Pioneered",
    "Established", "Launched", "Initiated", "Introduced", "Transformed"
  ],
  collaborative: [
    "Collaborated", "Partnered", "Cooperated", "Contributed", "Participated",
    "Engaged", "Interfaced", "Liaised", "Coordinated", "Worked with"
  ],
  improvement: [
    "Enhanced", "Improved", "Optimized", "Streamlined", "Upgraded", "Refined",
    "Strengthened", "Increased", "Reduced", "Accelerated", "Boosted"
  ],
};

export const experienceTemplates = {
  achievement: [
    "Built [system/feature] that [result], improving [metric] by [X%]",
    "Led development of [project] serving [X] users, resulting in [outcome]",
    "Reduced [negative metric] by [X%] through [action/technology]",
    "Architected [system] processing [X amount] of data using [technologies]",
    "Implemented [solution] that increased [positive metric] from [X] to [Y]",
  ],
  responsibility: [
    "Managed team of [X] engineers working on [project/product]",
    "Owned end-to-end development of [feature/system] for [audience]",
    "Collaborated with [teams] to deliver [outcome]",
    "Designed and deployed [number] production services handling [scale]",
  ],
  technical: [
    "Developed [type] using [technologies] to solve [problem]",
    "Integrated [technology/service] with [system] to enable [capability]",
    "Automated [process] using [tools], saving [X] hours per [timeframe]",
    "Migrated [system] from [old tech] to [new tech], improving [metric]",
  ],
};

export const skillCategories = {
  frontend: [
    "React", "Vue.js", "Angular", "Next.js", "Svelte", "TypeScript", "JavaScript",
    "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Redux", "GraphQL"
  ],
  backend: [
    "Node.js", "Python", "Java", "Go", "Ruby", "PHP", "C#", ".NET",
    "Express", "FastAPI", "Django", "Flask", "Spring Boot", "Laravel", "NestJS"
  ],
  mobile: [
    "React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic",
    "Android SDK", "iOS Development", "Jetpack Compose", "SwiftUI"
  ],
  data: [
    "Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn",
    "Scikit-learn", "TensorFlow", "PyTorch", "Keras", "Apache Spark", "Hadoop"
  ],
  cloud: [
    "AWS", "Azure", "Google Cloud Platform", "Docker", "Kubernetes",
    "Terraform", "Jenkins", "GitHub Actions", "CircleCI", "Heroku", "Vercel"
  ],
  database: [
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra",
    "DynamoDB", "Neo4j", "SQLite", "Oracle", "SQL Server"
  ],
  tools: [
    "Git", "VS Code", "IntelliJ IDEA", "Jira", "Confluence", "Slack",
    "Postman", "Figma", "Docker", "Linux", "Bash", "Vim"
  ],
};

export const summaryTemplates = [
  "[Role] with [X] years of experience in [industry/domain], specializing in [key skills]",
  "Passionate [role] focused on building [type of systems] that [value proposition]",
  "[Adjective] [role] with proven track record in [achievement area] and expertise in [technologies]",
  "[Role] experienced in [domains], skilled at [key abilities], and committed to [value/goal]",
];

export const educationAchievements = [
  "Graduated with honors, GPA: [X.X]/4.0",
  "Graduated Summa Cum Laude (top [X]% of class)",
  "Dean's List all semesters",
  "Recipient of [scholarship name] for academic excellence",
  "Thesis: '[title]' (published in [conference/journal])",
  "Teaching Assistant for [course name]",
  "President/Member of [club/organization]",
  "Completed capstone project on [topic] using [technologies]",
];

export const projectDescriptionTemplates = [
  "[Brief description] built with [technologies] that [value/impact]",
  "[Type] application featuring [key features] using [tech stack]",
  "Open-source [project type] for [purpose], with [X]+ stars on GitHub",
  "[Description] that helps users [benefit] through [key feature]",
];

export const certificationSuggestions = {
  aws: [
    "AWS Certified Solutions Architect",
    "AWS Certified Developer",
    "AWS Certified Machine Learning",
  ],
  google: [
    "Google Cloud Professional Cloud Architect",
    "Google Cloud Associate Cloud Engineer",
    "TensorFlow Developer Certificate",
  ],
  microsoft: [
    "Microsoft Certified: Azure Developer Associate",
    "Microsoft Certified: Azure Solutions Architect",
    "Microsoft Certified: Azure Data Scientist",
  ],
  general: [
    "Certified Kubernetes Administrator (CKA)",
    "Certified Scrum Master (CSM)",
    "PMP (Project Management Professional)",
    "CompTIA Security+",
  ],
};

export const tips = {
  experience: [
    "Start bullet points with strong action verbs",
    "Quantify achievements with numbers and percentages",
    "Focus on impact and results, not just responsibilities",
    "Use the STAR method: Situation, Task, Action, Result",
    "Tailor content to the job description",
    "Keep bullet points concise (1-2 lines max)",
  ],
  skills: [
    "List most relevant skills first",
    "Group skills by category for readability",
    "Include proficiency levels if relevant",
    "Keep the list updated with current technologies",
    "Don't list skills you're not comfortable being interviewed on",
  ],
  projects: [
    "Highlight projects relevant to target role",
    "Include links to live demos and GitHub repos",
    "Mention technologies and your specific contributions",
    "Emphasize the problem solved and impact created",
    "Add metrics (users, performance improvements, stars)",
  ],
  general: [
    "Keep CV to 1-2 pages (2 pages if 5+ years experience)",
    "Use consistent formatting throughout",
    "Proofread multiple times for typos and errors",
    "Save as PDF to preserve formatting",
    "Update regularly, even when not job hunting",
    "Get feedback from peers and mentors",
  ],
};

// Common phrases to avoid (replace with action-oriented language)
export const phrasesToAvoid = [
  "Responsible for...", // Replace with specific actions
  "Helped with...", // Be more specific about your contribution
  "Worked on...", // What exactly did you do?
  "Assisted in...", // Quantify your specific role
  "Participated in...", // Describe your actual contributions
  "Familiar with...", // Either you know it or you don't
  "Some experience with...", // Be confident or leave it out
];

// Examples of strong vs weak bullet points
export const bulletPointExamples = {
  weak: [
    "Worked on the company website",
    "Helped improve application performance",
    "Responsible for database maintenance",
  ],
  strong: [
    "Built responsive company website using React and Next.js, increasing mobile traffic by 45%",
    "Optimized application queries and implemented Redis caching, reducing page load time from 3s to 400ms",
    "Automated database backup and monitoring system using Python and AWS RDS, ensuring 99.9% uptime",
  ],
};

export default {
  actionVerbs,
  experienceTemplates,
  skillCategories,
  summaryTemplates,
  educationAchievements,
  projectDescriptionTemplates,
  certificationSuggestions,
  tips,
  phrasesToAvoid,
  bulletPointExamples,
};
