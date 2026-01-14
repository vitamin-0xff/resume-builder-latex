export type TemplateStyle = "classic" | "banking" | "modern" | "casual";
export type ColorScheme = "blue" | "orange" | "green" | "red" | "purple" | "grey" | "black";

export interface CVConfig {
    template: TemplateStyle;
    color: ColorScheme;
    outputDirectory: string;
    outputFileName: string;
    fontSize: string; // e.g., "11pt", "12pt"
    paperSize: string; // e.g., "a4paper", "letterpaper"
}

export const defaultConfig: CVConfig = {
    template: "classic",
    color: "blue",
    outputDirectory: "output",
    outputFileName: "resume.tex",
    fontSize: "11pt",
    paperSize: "a4paper",
};

// Template descriptions for users
export const templateDescriptions: Record<TemplateStyle, string> = {
    classic: "Traditional CV format with timeline and detailed sections",
    banking: "Clean, professional style suitable for corporate positions",
    modern: "Contemporary design with emphasis on visual hierarchy",
    casual: "Relaxed, creative layout for startups and creative roles",
};
