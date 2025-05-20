export type ToolCategory = 'text-content' | 'visual-creation' | 'automation';

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
