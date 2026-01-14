import { assertEquals, assertThrows } from "@std/assert";
import { latexEscape, techUsedToString, selectTemplate, parseArgs, getHelpText } from "./main.ts";

Deno.test("latexEscape escapes LaTeX characters", () => {
  const input = "#$%&_{}~^\\";
  const expected = "\\#\\$\\%\\&\\_\\{\\}\\~\\^\\\\";
  assertEquals(latexEscape(input), expected);
});

Deno.test("techUsedToString joins names", () => {
  const tech = [
    { name: "TypeScript", bolteNumber: 1 },
    { name: "Deno", bolteNumber: 2 },
  ];
  assertEquals(techUsedToString(tech), "TypeScript, Deno");
});

Deno.test("selectTemplate returns matching template file", () => {
  assertEquals(selectTemplate("classic"), "generator.tex.njk");
  assertEquals(selectTemplate("banking"), "banking.tex.njk");
  assertEquals(selectTemplate("modern"), "modern.tex.njk");
  assertEquals(selectTemplate("casual"), "generator.tex.njk");
});

Deno.test("parseArgs applies overrides", () => {
  const overrides = parseArgs([
    "--template=banking",
    "--color=green",
    "--out=custom.tex",
    "--outDir=dist",
  ]);

  assertEquals(overrides.template, "banking");
  assertEquals(overrides.color, "green");
  assertEquals(overrides.outputFileName, "custom.tex");
  assertEquals(overrides.outputDirectory, "dist");
});

Deno.test("parseArgs rejects invalid values", () => {
  assertThrows(() => parseArgs(["--template=unknown"]));
  assertThrows(() => parseArgs(["--color=teal"]));
  assertThrows(() => parseArgs(["--out="]));
  assertThrows(() => parseArgs(["--outDir="]));
  assertThrows(() => parseArgs(["--flag=1"]));
});

Deno.test("getHelpText contains usage and options", () => {
  const help = getHelpText();
  const lines = help.split("\n");
  assertEquals(lines[0].startsWith("Usage:"), true);
  // Spot-check a few documented options
  const hasTemplate = help.includes("--template=classic|banking|modern|casual");
  const hasColor = help.includes("--color=blue|orange|green|red|purple|grey|black");
  const hasOut = help.includes("--out=<file.tex>");
  const hasOutDir = help.includes("--outDir=<directory>");
  const hasHelp = help.includes("--help, -h");
  assertEquals(hasTemplate && hasColor && hasOut && hasOutDir && hasHelp, true);
});
