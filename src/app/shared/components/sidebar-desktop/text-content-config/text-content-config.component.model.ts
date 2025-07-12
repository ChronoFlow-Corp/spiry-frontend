import {TextContentAICaptionGeneratorConfigStyle} from '@store/text-content-config/ai-caption-generator.type';
import {TextContentConfigLanguage} from '@store/text-content-config/text-content-config.store.type';

export const LANGUAGES: readonly {
  code: TextContentConfigLanguage;
  name: string;
}[] = [
  {code: 'en', name: 'English'},
  {code: 'es', name: 'Spanish'},
  {code: 'de', name: 'German'},
  {code: 'ru', name: 'Russian'},
  {code: 'zh', name: 'Chinese'},
  {code: 'ko', name: 'Korean'},
  {code: 'ja', name: 'Japanese'},
];

export const STYLES: readonly TextContentAICaptionGeneratorConfigStyle[] = [
  'Auto',
  'Educational',
  'Friendly',
  'Confident',
  'Gen Zer',
  'Gen Xer',
];
