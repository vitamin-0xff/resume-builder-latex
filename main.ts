import nunjucks from "npm:nunjucks@3.2.4";
import {  exampleResumeData_alex, TechUsed } from "./types/format.ts";


const outputDirectory = "output";

const env = nunjucks.configure("templates", {
  autoescape: false,
  tags: {
    blockStart: "<%",
    blockEnd: "%>",
    variableStart: "<=",
    variableEnd: "=>",
    commentStart: "{#",
    commentEnd: "#}",
  }
});

env.addFilter('escape_latex', (str: any) => {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\textbackslash{}')
});

function latexEscape(input: string) {
  return input.replace(/[#$%&_{}~^\\]/g, "\\$&");
}

function techUsedToString(array: TechUsed[]) {
  return array.map(it => it.name).join(", ");
}

env.addFilter("techUsedToString", techUsedToString);
env.addFilter("tex", latexEscape);



const tex = env.render("generator.tex.njk", exampleResumeData_alex);
Deno.writeTextFileSync(`${outputDirectory}/try.tex`, tex);