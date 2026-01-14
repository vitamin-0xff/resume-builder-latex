deno fmt
# CV Maker Template

A TypeScript/Deno-based LaTeX CV generator that transforms structured data into professional resumes.

## Features

- Multiple templates: Classic, Banking, Modern
- Seven color schemes
- Rich sections: Experience, Education, Skills, Projects, Certifications, Awards, Publications, Volunteer, Languages
- Type-safe definitions
- Simple configuration
- Content suggestions and best practices
- LaTeX output ready for PDF build

## Project Structure

```
cv-maker-template/
├── config.ts              # Configuration (template, colors, output settings)
├── data.ts               # Your CV data
├── examples.ts           # Complete CV examples for reference
├── suggestions.ts        # Content templates and writing tips
├── main.ts              # Main generator script
├── types/
│   └── format.ts        # TypeScript type definitions
├── templates/
│   ├── generator.tex.njk  # Classic template
│   ├── banking.tex.njk    # Banking/Corporate template
│   └── modern.tex.njk     # Modern/Casual template
└── output/              # Generated .tex files
```

## Quick Start

### Prerequisites

- Deno installed

### Usage

1. Configure your CV in `config.ts`:
```typescript
const config: CVConfig = {
  template: "classic",     // "classic", "banking", or "modern"
  color: "blue",          // "blue", "orange", "green", "red", "purple", "grey", "black"
  outputFileName: "resume.tex",
};
```

  You can override these from the command line:
  ```bash
  deno run --allow-env --allow-read --allow-write --allow-net main.ts \
    --template=banking --color=green --out=my-resume.tex --outDir=dist
  ```

  2. Add your data in `data.ts` (or create a new file).

  3. Generate your CV:
```bash
deno task dev
```

4. Compile to PDF:
```bash
cd output
pdflatex resume.tex
```

## CLI Help

Show available options and examples:

```bash
deno run --allow-env --allow-read --allow-write --allow-net main.ts --help
```

## Available Sections

- Personal Information (name, contact, social links)
- Professional Experience
- Education
- Technical Skills
- Projects
- Certifications
- Awards and Honors
- Publications
- Volunteer Experience
- Languages

## Templates

### Classic
Traditional CV format with timeline and detailed sections. Professional and widely accepted.

### Banking
Clean, corporate style suitable for finance, consulting, and traditional industries. Emphasizes professionalism and clarity.

### Modern
Contemporary design with visual hierarchy. Good for technology and creative roles.

## Content Suggestions

See `suggestions.ts` for:
- Action verbs grouped by category
- Experience templates for common achievement patterns
- Skill categories with common technologies
- Writing tips for each section
- Examples of strong vs weak bullet points

### Example Usage

```typescript
// Action verbs for technical roles
import { actionVerbs } from "./suggestions.ts";
console.log(actionVerbs.technical);

// Common skill categories
import { skillCategories } from "./suggestions.ts";
console.log(skillCategories.frontend);
```

## Examples

See `examples.ts` for a comprehensive CV example using all available sections.

## Customization

### Adding New Sections

1. Add types in `types/format.ts`.
2. Update `ResumeData` type.
3. Add section to the relevant template file.
4. Update your data file.

### Creating Custom Templates

1. Create a new `.njk` file in `templates/`.
2. Add the template option to `config.ts`.
3. Update template selection logic in `main.ts` if needed.

## Tips for Strong CVs

1. Quantify achievements with clear metrics.
2. Start bullet points with action verbs.
3. Focus on impact, not only responsibilities.
4. Keep it concise (one to two pages).
5. Tailor content to the target role.
6. Proofread to remove errors.

## Development

Run tests
```bash
deno test
```

Format code
```bash
deno fmt
```

Lint code
```bash
deno lint
```

## License

MIT

## Contributing

Contributions are welcome. You can add templates, improve existing ones, or enhance the type system.

---

Built with Deno, TypeScript, and LaTeX.
