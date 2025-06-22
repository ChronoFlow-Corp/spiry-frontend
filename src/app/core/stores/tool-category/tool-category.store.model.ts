import {Signal} from '@angular/core';

export type ToolCategory = 'text-content' | 'visual-creation' | 'automation';

export interface ToolCategoryState {
  readonly currentCategory: Signal<ToolCategory | null>;
  readonly currentToolName: Signal<string | null>;
  readonly currentToolNameReadable: Signal<string | null>;
  readonly isTextContentToolSelected: Signal<boolean>;
  readonly isVisualCreationToolSelected: Signal<boolean>;
  readonly isAutomationToolSelected: Signal<boolean>;
  readonly isAnyToolSelected: Signal<boolean>;
}

export const AVAILABLE_TOOL_CATEGORIES: readonly ToolCategory[] = [
  'text-content',
  'visual-creation',
  'automation',
];

export const TEXT_CONTENT_TOOLS: Record<string, string> = {
  'ai-caption-generator': 'AI Caption Generator',
  'ai-blog-post-generator': 'AI Blog Post Generator',
  'content-idea-generator': 'Content Idea Generator',
};

export const VISUAL_CREATION_TOOLS: Record<string, string> = {};

export const AUTOMATION_TOOLS: Record<string, string> = {};
