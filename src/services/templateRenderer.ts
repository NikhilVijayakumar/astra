import handlebars from "handlebars";
import fs from "fs/promises";
import path from "path";
import type {
  TemplateRendererConfig,
  RenderTemplateOptions,
  RenderResult,
} from "../types/template.types";

let config: TemplateRendererConfig | null = null;

export function configureTemplateRenderer(userConfig: TemplateRendererConfig): void {
  config = userConfig;
}

export async function renderTemplate(
  options: RenderTemplateOptions,
): Promise<RenderResult> {
  if (!config) {
    return {
      success: false,
      error: "Template renderer not configured. Call configureTemplateRenderer first.",
    };
  }

  const { templateName, data } = options;
  const filePath = path.join(config.basePath, `${templateName}.hbs`);

  try {
    const source = await fs.readFile(filePath, "utf-8");
    const compiled = handlebars.compile(source);
    const html = compiled(data);

    return {
      success: true,
      html,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Unknown error rendering template",
    };
  }
}

export const templateRenderer = {
  configure: configureTemplateRenderer,
  render: renderTemplate,
};