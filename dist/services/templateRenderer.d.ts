import { TemplateRendererConfig, RenderTemplateOptions, RenderResult } from '../types/template.types';
export declare function configureTemplateRenderer(userConfig: TemplateRendererConfig): void;
export declare function renderTemplate(options: RenderTemplateOptions): Promise<RenderResult>;
export declare const templateRenderer: {
    configure: typeof configureTemplateRenderer;
    render: typeof renderTemplate;
};
