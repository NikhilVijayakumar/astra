import { TemplateRendererConfig, TemplateRendererService } from '../types/template.types';
export declare function createTemplateRenderer(cfg?: TemplateRendererConfig & {
    templates?: Record<string, string>;
}): TemplateRendererService;
export declare const templateRenderer: TemplateRendererService;
