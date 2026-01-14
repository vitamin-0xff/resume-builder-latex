import nunjucks from "npm:nunjucks@3.2.4";
import { TechUsed } from "./types/format.ts";
import { essidSData } from "./data.ts";
import { defaultConfig, CVConfig, TemplateStyle, ColorScheme } from "./config.ts";

export function latexEscape(input: string): string {
  return input.replace(/[#$%&_{}~^\\]/g, "\\$&");
}

export function techUsedToString(array: TechUsed[]): string {
  return array.map((item) => item.name).join(", ");
}

export function selectTemplate(template: TemplateStyle): string {
  switch (template) {
    case "classic":
      return "generator.tex.njk";
    case "banking":
      return "banking.tex.njk";
    case "modern":
      return "modern.tex.njk";
    case "casual":
      return "generator.tex.njk";
    default:
      return "generator.tex.njk";
  }
}

const allowedTemplates: TemplateStyle[] = ["classic", "banking", "modern", "casual"];
const allowedColors: ColorScheme[] = ["blue", "orange", "green", "red", "purple", "grey", "black"];

function isTemplate(value: string): value is TemplateStyle {
  return allowedTemplates.includes(value as TemplateStyle);
}

function isColor(value: string): value is ColorScheme {
  return allowedColors.includes(value as ColorScheme);
}

export function parseArgs(args: string[]): Partial<CVConfig> {
  const overrides: Partial<CVConfig> = {};

  for (const arg of args) {
    if (arg.startsWith("--template=")) {
      const value = arg.split("=")[1];
      if (!isTemplate(value)) {
        throw new Error(`Invalid template: ${value}`);
      }
      overrides.template = value;
      continue;
    }

    if (arg.startsWith("--color=")) {
      const value = arg.split("=")[1];
      if (!isColor(value)) {
        throw new Error(`Invalid color: ${value}`);
      }
      overrides.color = value;
      continue;
    }

    if (arg.startsWith("--out=") || arg.startsWith("--output=")) {
      const value = arg.split("=")[1];
      if (!value) {
        throw new Error("Output file name must not be empty");
      }
      overrides.outputFileName = value;
      continue;
    }

    if (arg.startsWith("--outDir=") || arg.startsWith("--outputDir=")) {
      const value = arg.split("=")[1];
      if (!value) {
        throw new Error("Output directory must not be empty");
      }
      overrides.outputDirectory = value;
      continue;
    }

    throw new Error(`Unknown option: ${arg}`);
  }

  return overrides;
}

export function getHelpText(): string {
  return [
    "Usage: deno run --allow-env --allow-read --allow-write --allow-net main.ts [options]",
    "",
    "Options:",
    "  --template=classic|banking|modern|casual   Select template style",
    "  --color=blue|orange|green|red|purple|grey|black   Select color scheme",
    "  --out=<file.tex>                          Set output file name",
    "  --outDir=<directory>                      Set output directory",
    "  --help, -h                                Show this help and exit",
    "",
    "Examples:",
    "  deno run --allow-env --allow-read --allow-write --allow-net main.ts \\",
    "    --template=banking --color=green --out=resume.tex --outDir=dist",
    "",
    "  deno task dev                              # Uses defaults from config.ts",
  ].join("\n");
}

function buildEnv() {
  const env = nunjucks.configure("templates", {
    autoescape: false,
    tags: {
      blockStart: "<%",
      blockEnd: "%>",
      variableStart: "<=",
      variableEnd: "=>",
      commentStart: "{#",
      commentEnd: "#}",
    },
  });

  env.addFilter("techUsedToString", techUsedToString);
  env.addFilter("tex", latexEscape);
  return env;
}

async function ensureOutputDirectory(path: string) {
  try {
    await Deno.mkdir(path, { recursive: true });
  } catch (error) {
    if (!(error instanceof Deno.errors.AlreadyExists)) {
      throw error;
    }
  }
}

async function main() {
  if (Deno.args.includes("--help") || Deno.args.includes("-h")) {
    console.log(getHelpText());
    return;
  }
  const config: CVConfig = {
    ...defaultConfig,
    ...parseArgs(Deno.args),
  };

  const env = buildEnv();
  const templateFile = selectTemplate(config.template);
  const tex = env.render(templateFile, { ...essidSData, config });

  await ensureOutputDirectory(config.outputDirectory);
  await Deno.writeTextFile(`${config.outputDirectory}/${config.outputFileName}`, tex);

  console.log("CV generated successfully.");
  console.log(`Template: ${config.template}`);
  console.log(`Color: ${config.color}`);
  console.log(`Output: ${config.outputDirectory}/${config.outputFileName}`);
}

if (import.meta.main) {
  await main();
}