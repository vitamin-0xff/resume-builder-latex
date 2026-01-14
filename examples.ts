import { ResumeData } from "./types/format.ts";

/**
 * Enhanced resume example with all available sections
 */
export const comprehensiveExample: ResumeData = {
    personalData: {
        name: {
            first: "Sarah",
            last: "Chen",
        },
        title: "Senior Data Scientist & ML Engineer",
        address: {
            street: "789 Innovation Blvd",
            city: "Seattle, WA 98101",
            country: "USA",
        },
        mobile: "+1 (206) 555-0199",
        email: "sarah.chen@email.com",
        homepage: "sarahchen.ai",
        social: {
            linkedin: "sarahchen",
            github: "sarah-chen-ml",
        },
        quote: "Transforming data into actionable insights through advanced machine learning and statistical analysis.",
    },
    experience: {
        name: "Professional Experience",
        experience: [
            {
                years: "2021--Present",
                position: "Senior Data Scientist",
                company: "Amazon Web Services",
                location: "Seattle, WA (Hybrid)",
                details: [
                    {
                        worksDone: "Led development of recommendation engine serving 50M+ users, improving conversion by 28%",
                        bolteNumber: 52,
                    },
                    {
                        worksDone: "Built real-time fraud detection system using XGBoost and TensorFlow, reducing false positives by 45%",
                        bolteNumber: 52,
                    },
                    {
                        worksDone: "Architected data pipeline processing 5TB daily using Apache Spark and AWS EMR",
                        bolteNumber: 52,
                    },
                    {
                        worksDone: "Mentored 4 junior data scientists and conducted workshops on MLOps best practices",
                        bolteNumber: 52,
                    },
                ],
            },
            {
                years: "2019--2021",
                position: "Machine Learning Engineer",
                company: "Microsoft",
                location: "Redmond, WA",
                details: [
                    {
                        worksDone: "Developed NLP models for Azure Cognitive Services with 94% accuracy on sentiment analysis",
                        bolteNumber: 52,
                    },
                    {
                        worksDone: "Implemented AutoML pipeline reducing model training time from weeks to hours",
                        bolteNumber: 52,
                    },
                    {
                        worksDone: "Collaborated with product teams to deploy 12 production ML models serving 10M requests/day",
                        bolteNumber: 52,
                    },
                ],
            },
            {
                years: "2017--2019",
                position: "Data Analyst",
                company: "Spotify",
                location: "New York, NY",
                details: [
                    {
                        worksDone: "Analyzed user behavior patterns across 200M+ users to optimize content recommendations",
                        bolteNumber: 52,
                    },
                    {
                        worksDone: "Created interactive dashboards using Tableau and Python for C-level executives",
                        bolteNumber: 52,
                    },
                    {
                        worksDone: "Conducted A/B tests resulting in 15% increase in user engagement metrics",
                        bolteNumber: 52,
                    },
                ],
            },
        ],
    },
    education: {
        name: "Education",
        education: [
            {
                years: "2015--2017",
                title: "M.S. in Computer Science (Machine Learning)",
                where: "Stanford University",
                details: [
                    {
                        whatYouhaveDoneOrLeant: "GPA: 3.9/4.0, Specialized in Deep Learning and Natural Language Processing",
                        bolteNumber: 52,
                    },
                    {
                        whatYouhaveDoneOrLeant: "Thesis: 'Attention Mechanisms for Time Series Forecasting' (published in NeurIPS 2017)",
                        bolteNumber: 52,
                    },
                    {
                        whatYouhaveDoneOrLeant: "Teaching Assistant for CS229 (Machine Learning) and CS224N (NLP with Deep Learning)",
                        bolteNumber: 52,
                    },
                ],
            },
            {
                years: "2011--2015",
                title: "B.S. in Mathematics & Computer Science",
                where: "UC Berkeley",
                details: [
                    {
                        whatYouhaveDoneOrLeant: "Graduated Summa Cum Laude, GPA: 3.95/4.0",
                        bolteNumber: 52,
                    },
                    {
                        whatYouhaveDoneOrLeant: "President of Women in Computer Science club (2014-2015)",
                        bolteNumber: 52,
                    },
                ],
            },
        ],
    },
    skills: {
        name: "Technical Skills",
        skills: [
            {
                skillName: "Programming Languages",
                listOfSkills: ["Python", "R", "SQL", "Scala", "Java", "C++"],
            },
            {
                skillName: "ML/DL Frameworks",
                listOfSkills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "Keras", "Hugging Face"],
            },
            {
                skillName: "Big Data & Cloud",
                listOfSkills: ["Apache Spark", "Hadoop", "AWS (SageMaker, EMR, S3)", "Azure ML", "GCP", "Databricks"],
            },
            {
                skillName: "Data Tools",
                listOfSkills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "PowerBI", "Airflow"],
            },
            {
                skillName: "MLOps & DevOps",
                listOfSkills: ["Docker", "Kubernetes", "MLflow", "Kubeflow", "Git", "CI/CD", "Terraform"],
            },
        ],
    },
    certifications: {
        name: "Certifications",
        certifications: [
            {
                name: "AWS Certified Machine Learning - Specialty",
                issuer: "Amazon Web Services",
                year: "2023",
                credentialId: "AWS-MLS-2023-001234",
            },
            {
                name: "TensorFlow Developer Certificate",
                issuer: "Google",
                year: "2022",
                credentialId: "TF-DEV-2022-5678",
            },
            {
                name: "Deep Learning Specialization",
                issuer: "Coursera (deeplearning.ai)",
                year: "2021",
            },
        ],
    },
    projects: {
        name: "Selected Projects",
        projects: [
            {
                projectName: "OpenHealth Predictor",
                description: "Open-source ML framework for healthcare predictions using federated learning to preserve patient privacy. Featured in Healthcare AI Summit 2023.",
                githubLink: "https://github.com/sarah-chen-ml/openhealth",
                techUsed: [
                    { name: "PyTorch", bolteNumber: 52 },
                    { name: "Federated Learning", bolteNumber: 52 },
                    { name: "FastAPI", bolteNumber: 52 },
                    { name: "Docker", bolteNumber: 52 },
                ],
            },
            {
                projectName: "FinanceML Toolkit",
                description: "Python library for financial time series analysis and algorithmic trading strategies. 3.2k+ stars on GitHub.",
                githubLink: "https://github.com/sarah-chen-ml/financeml",
                techUsed: [
                    { name: "Python", bolteNumber: 52 },
                    { name: "Pandas", bolteNumber: 52 },
                    { name: "scikit-learn", bolteNumber: 52 },
                    { name: "LSTM", bolteNumber: 52 },
                ],
            },
            {
                projectName: "Climate Change Visualizer",
                description: "Interactive dashboard analyzing global temperature trends and climate patterns using NASA data.",
                githubLink: "https://github.com/sarah-chen-ml/climate-viz",
                techUsed: [
                    { name: "React", bolteNumber: 52 },
                    { name: "D3.js", bolteNumber: 52 },
                    { name: "Python", bolteNumber: 52 },
                    { name: "Flask", bolteNumber: 52 },
                ],
            },
        ],
    },
    awards: {
        name: "Awards & Honors",
        awards: [
            {
                title: "AWS Innovation Award",
                issuer: "Amazon Web Services",
                year: "2023",
                description: "Recognized for outstanding contribution to AWS ML services and customer impact",
            },
            {
                title: "Best Paper Award",
                issuer: "NeurIPS Conference",
                year: "2017",
                description: "For research on attention mechanisms in time series forecasting",
            },
            {
                title: "Grace Hopper Scholarship",
                issuer: "Anita Borg Institute",
                year: "2016",
            },
        ],
    },
    publications: {
        name: "Publications",
        publications: [
            {
                title: "Attention-Based Mechanisms for Time Series Forecasting in Financial Markets",
                authors: ["Sarah Chen", "Dr. Michael Zhang", "Prof. Lisa Wang"],
                venue: "NeurIPS 2017",
                year: "2017",
                doi: "10.5555/3294996.3295074",
            },
            {
                title: "Federated Learning for Healthcare: Privacy-Preserving Disease Prediction",
                authors: ["Sarah Chen", "Dr. Robert Smith"],
                venue: "Journal of Medical AI, Vol. 15",
                year: "2023",
                url: "https://jmai.org/papers/chen-2023",
            },
        ],
    },
    volunteer: {
        name: "Volunteer Experience",
        volunteer: [
            {
                years: "2020--Present",
                role: "AI Ethics Committee Member",
                organization: "Partnership on AI",
                location: "Remote",
                description: "Contributing to guidelines for responsible AI development and deployment in industry",
            },
            {
                years: "2018--2020",
                role: "Mentor",
                organization: "Girls Who Code",
                location: "Seattle, WA",
                description: "Mentored 15+ high school students in programming and data science fundamentals",
            },
        ],
    },
    languages: {
        name: "Languages",
        languages: [
            {
                languageName: "English",
                proficiencyLevel: "Native",
            },
            {
                languageName: "Mandarin Chinese",
                proficiencyLevel: "Native",
            },
            {
                languageName: "Spanish",
                proficiencyLevel: "Professional working proficiency",
            },
        ],
    },
};
