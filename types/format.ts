export type ProfionnalExperienceItem = {
    worksDone: string;
    bolteNumber: number;
};

export type TechUsed = {
    name: string,
    bolteNumber: number
}

export type ProfionnalExperience = {
    years: string;
    position: string;
    company: string;
    location: string;
    details: ProfionnalExperienceItem[];
};

export type EducationItem = {
    whatYouhaveDoneOrLeant: string;
    bolteNumber: number;
};

export type EducationSection = {
    years: string;
    title: string;
    where: string;
    details: EducationItem[];
}

export type SkillItem = {
    skillName: string;
    listOfSkills: string[];
}

export type SkillSet = {
    name: string,
    skills: SkillItem[];
}

export type ProjectItem = {
    projectName: string;
    description: string;
    githubLink: string;
    techUsed: TechUsed[];
}

export type Projects = {
    name: string;
    projects: ProjectItem[];
}

export type LanguageItem = {
    languageName: string;
    proficiencyLevel: string;
}

export type Languages = {
    name: string;
    languages: LanguageItem[];
}

export type PersonalDataItem = {
    name: {
        first: string;
        last: string;
    };
    title: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
    mobile?: string;
    email?: string;
    homepage?: string;
    social?: {
        linkedin?: string;
        github?: string;
        facebook?: string;
        [key: string]: string | undefined;
    };
    photo?: {
        size?: string; // e.g., "64pt"
        frame?: string; // e.g., "0.4pt"
        path: string; // image filename or path
    };
    quote?: string;
};

export type PersonalData = {
    name: string;
    personalData: PersonalDataItem;
}

export type ResumeData = {
    personalData: PersonalDataItem;
    experience:  {
        name: string;
        experience: ProfionnalExperience[];
    };

    education: { name: string; education: EducationSection[]; };
    skills?: SkillSet;
    projects?:  { name: string; projects: ProjectItem[]; };
    languages?:  { name: string; languages: LanguageItem[]; };
};

/**
 * @abstract example
 */
export const exampleResumeData: ResumeData = {
    personalData: {
        name: {
            first: "John",
            last: "Doe",
        },
        title: "Curriculum Vitae",
        address: {
            street: "1234 Innovation Drive",
            city: "San Francisco, CA 94103",
            country: "USA",
        },
        mobile: "+1 (123) 456-7890",
        email: "john.doe@example.com",
        homepage: "johndoe.dev",
        social: {
            linkedin: "johndoe",
            github: "johndoe",
        },
        photo: {
            size: "64pt",
            frame: "0.4pt",
            path: "john_doe_photo.jpg",
        },
        quote: "Full-stack developer with a passion for building reliable and scalable systems.",
    },
    experience: {
        name: "Experience",
         experience: [
        {
            years: "2021--Present",
            position: "Senior Developer",
            company: "Tech Inc.",
            location: "Remote",
            details: [
                {
                    worksDone: "Built scalable microservices in Node.js.",
                    bolteNumber: 52,
                },
                {
                    worksDone: "Designed GraphQL APIs for internal tools.",
                    bolteNumber: 52,
                },
                {
                    worksDone: "Mentored junior team members.",
                    bolteNumber: 52,
                },
            ],
            
        },
        {
            years: "2021--Present",
            position: "Senior Developer",
            company: "Tech Inc.",
            location: "Remote",
            details: [
                {
                    worksDone: "Built scalable microservices in Node.js.",
                    bolteNumber: 52,
                },
                {
                    worksDone: "Designed GraphQL APIs for internal tools.",
                    bolteNumber: 52,
                },
                {
                    worksDone: "Mentored junior team members.",
                    bolteNumber: 52,
                },
            ],
            
        }
    ]
    },
    education: {
        name: "Education",
        education: [
        {
            years: "2016--2020",
            title: "B.Sc. Computer Science",
            where: "University of Somewhere",
            details: [
                {
                    whatYouhaveDoneOrLeant: "Graduated with honors, GPA: 3.8/4.0",
                    bolteNumber: 52,
                },
            ],
        },
        {
            years: "2016--2020",
            title: "B.Sc. Computer Science",
            where: "University of Somewhere",
            details: [
                {
                    whatYouhaveDoneOrLeant: "Graduated with honors, GPA: 3.8/4.0",
                    bolteNumber: 52,
                },
                {
                    whatYouhaveDoneOrLeant: "Graduated with honors, GPA: 3.8/4.0",
                    bolteNumber: 52,
                },
            ],
        },
    ]},
    skills: {
        name: "Technical Skills",
        skills: [
                {
                    skillName: "Programming Languages",
                    listOfSkills: ["TypeScript", "Python", "Go"],
                },
                {
                    skillName: "Frameworks Frontend",
                    listOfSkills: ["React", "Vue", "Angular"],
                },
                {
                    skillName: "Frameworks Backend",
                    listOfSkills: ["Node.js", "Django", "Spring"],
                },
                {
                    skillName: "Tools & devops",
                    listOfSkills: ["Docker", "Kubernetes", "Github Actions"],
                },
            ],
        },
    projects:{
            name: "Personal Projects",
            projects: [
                {
                    projectName: "DevPortfolio",
                    description: "A polished developer portfolio powered by Next.js and TailwindCSS.",
                    githubLink: "https://github.com/johndoe/devportfolio",
                    techUsed: [
                        {
                            name: "Next.js",
                            bolteNumber: 52
                        },
                        {
                            name: "TailwindCSS",
                            bolteNumber: 52
                        },
                        {
                            name: "ReactJs",
                            bolteNumber: 52
                        }
                    ],

                },
            ],
        },
    languages: 
        {
            name: "Spoken Languages",
            languages: [
                {
                    languageName: "English",
                    proficiencyLevel: "Native",
                },
                {
                    languageName: "French",
                    proficiencyLevel: "Conversational",
                },
            ],
        }
}


/**
 * dummy data
 */
export const exampleResumeData_alex: ResumeData = {
  personalData: {
    name: {
      first: "Alexandra",
      last: "Rusu"
    },
    title: "Senior Full-Stack Engineer • Ex-Meta • Remote",
    address: {
      street: "Strada Viitorului 42",
      city: "Bucharest",
      country: "Romania"
    },
    mobile: "+40 723 456 789",
    email: "alexandra.rusu@proton.me",
    homepage: "alexrusu.dev",
    social: {
      linkedin: "alexandrarusu",
      github: "alexrusu"
    },
    photo: {
      size: "70pt",
      frame: "0.4pt",
      path: "alexandra.jpg"
    },
    quote: "I turn coffee into production-ready systems."
  },

  experience: {
    name: "Professional Experience",
    experience: [
      {
        years: "2022–Present",
        position: "Senior Software Engineer",
        company: "Meta",
        location: "London, UK (Remote)",
        details: [
          {
            worksDone: "Led the complete rewrite of Instagram Direct’s real-time messaging backend using Hack + GraphQL + TAO",
            bolteNumber: 52
          },
          {
            worksDone: "Reduced message delivery latency from 800ms → 90ms (P99) for 1.8B daily users",
            bolteNumber: 52
          },
          {
            worksDone: "Owned E2E reliability — achieved 99.999% uptime for 3 consecutive quarters",
            bolteNumber: 52
          },
          {
            worksDone: "Mentored 5 engineers and established the team’s TypeScript migration strategy",
            bolteNumber: 52
          }
        ]
      },
      {
        years: "2020–2022",
        position: "Full-Stack Engineer",
        company: "Revolut",
        location: "Kraków, Poland (Remote)",
        details: [
          {
            worksDone: "Built the crypto trading engine (Kotlin + PostgreSQL) handling €2B+ monthly volume",
            bolteNumber: 52
          },
          {
            worksDone: "Designed and shipped the in-app Stock Trading feature (React Native + Node.js)",
            bolteNumber: 52
          },
          {
            worksDone: "Reduced payment processing failures by 68% via intelligent retry + circuit breaking",
            bolteNumber: 52
          }
        ]
      }
    ]
  },

  education: {
    name: "Education",
    education: [
      {
        years: "2016–2020",
        title: "B.Sc. Computer Science & Mathematics",
        where: "University Politehnica of Bucharest",
        details: [
          {
            whatYouhaveDoneOrLeant: "Graduated Summa Cum Laude • GPA 9.92/10.00 (ranked 1st/380)",
            bolteNumber: 52
          },
          {
            whatYouhaveDoneOrLeant: "President of the ACM Student Chapter • Organized national programming contests",
            bolteNumber: 52
          },
          {
            whatYouhaveDoneOrLeant: "Published paper on distributed consensus algorithms at IEEE conference",
            bolteNumber: 52
          }
        ]
      }
    ]
  },

  skills: {
    name: "Technical Skills",
    skills: [
      {
        skillName: "Languages",
        listOfSkills: ["TypeScript", "Python", "Go", "Rust", "Kotlin", "Hack/PHP"]
      },
      {
        skillName: "Frontend",
        listOfSkills: ["React", "Next.js", "React Native", "GraphQL", "Tailwind", "Framer Motion"]
      },
      {
        skillName: "Backend & Infrastructure",
        listOfSkills: ["Node.js", "PostgreSQL", "Redis", "Kubernetes", "Terraform", "gRPC"]
      },
      {
        skillName: "Tools & Platforms",
        listOfSkills: ["Docker", "GitHub Actions", "Datadog", "Sentry", "Vercel", "AWS"]
      }
    ]
  },

  projects: {
    name: "Selected Projects",
    projects: [
      {
        projectName: "BoltCV – Dynamic Resume Builder",
        description: "The very tool you're using right now — generates stunning LaTeX CVs from JSON in <100ms",
        githubLink: "https://github.com/alexrusu/boltcv",
        techUsed: [
          { name: "Next.js 14", bolteNumber: 52 },
          { name: "TypeScript", bolteNumber: 52 },
          { name: "TailwindCSS", bolteNumber: 52 },
          { name: "Nunjucks + XeLaTeX", bolteNumber: 52 }
        ]
      },
      {
        projectName: "NanoStore – Distributed Key-Value Store",
        description: "Raft-based KV store in Go that passes all Jepsen tests • 42k+ stars",
        githubLink: "https://github.com/alexrusu/nanostore",
        techUsed: [
          { name: "Go", bolteNumber: 52 },
          { name: "Raft Consensus", bolteNumber: 52 },
          { name: "gRPC", bolteNumber: 52 }
        ]
      }
    ]
  },

  languages: {
    name: "Languages",
    languages: [
      { languageName: "English", proficiencyLevel: "Fluent (C2)" },
      { languageName: "Romanian", proficiencyLevel: "Native" },
      { languageName: "French", proficiencyLevel: "Professional working proficiency" }
    ]
  }
};