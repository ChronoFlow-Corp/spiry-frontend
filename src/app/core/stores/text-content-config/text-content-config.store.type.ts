export type TextContentFilterType =
  | 'all'
  | 'idea-generation'
  | 'writing-editing'
  | 'formatting'
  | 'seo-optimization';

export const FILTERS: readonly Filter[] = [
  {
    name: 'All',
    type: 'all',
  },
  {
    name: 'Idea Generation',
    type: 'idea-generation',
  },
  {
    name: 'Writing & Editing',
    type: 'writing-editing',
  },
  {
    name: 'Formatting',
    type: 'formatting',
  },
  {
    name: 'SEO Optimization',
    type: 'seo-optimization',
  },
];

export type TextContentConfigLanguage =
  | 'en'
  | 'es'
  | 'de'
  | 'ru'
  | 'zh'
  | 'ko'
  | 'ja';

interface Filter {
  name: string;
  type: TextContentFilterType;
}
