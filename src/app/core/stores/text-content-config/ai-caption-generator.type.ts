import {TextContentConfigLanguage} from '@store/text-content-config/text-content-config.store.type';

export type TextContentAICaptionGeneratorConfigStyle =
  | 'Auto'
  | 'Educational'
  | 'Friendly'
  | 'Confident'
  | 'Gen Zer'
  | 'Gen Xer';

export type TextContentAICaptionGeneratorConfigNetwork =
  | 'instagram'
  | 'x'
  | 'facebook'
  | 'linkedin';

export interface TextContentAICaptionGeneratorConfig {
  social_network: TextContentAICaptionGeneratorConfigNetwork;
  language: TextContentConfigLanguage;
  prompt: string;
  style: TextContentAICaptionGeneratorConfigStyle;
}
