import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {FilterComponent} from '@category/tool-select/text-content/filter/filter.component';
import {
  RAW_TEXT_CONTENT_ALL_TOOLS,
  RAW_TEXT_CONTENT_MOST_POPULAR_TOOLS,
  TextContentTool,
  ToolCategory,
} from '@category/tool-select/text-content/text-content.component.type';
import {DividerWithTextComponent} from '@components/divider-with-text/divider-with-text.component';
import {ToolCardComponent} from '@components/tool-card/tool-card.component';
import {TextContentConfigStore} from '@store/text-content-config/text-content-config.store';
import {
  FILTERS,
  TextContentFilterType,
} from '@store/text-content-config/text-content-config.store.type';

@Component({
  selector: '.page-web-category-text-content',
  imports: [DividerWithTextComponent, ToolCardComponent, FilterComponent],
  templateUrl: './text-content.component.html',
  styleUrl: './text-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextContentComponent {
  readonly #textContentConfigsStore = inject(TextContentConfigStore);
  readonly #sanitizer = inject(DomSanitizer);

  protected readonly currentFilter =
    this.#textContentConfigsStore.currentFilter$;

  readonly #TEXT_CONTENT_MOST_POPULAR_TOOLS: TextContentTool[] =
    RAW_TEXT_CONTENT_MOST_POPULAR_TOOLS.map((tool) => ({
      ...tool,
      svgIcon: this.#sanitizer.bypassSecurityTrustHtml(tool.svgIcon as string),
    }));

  readonly #TEXT_CONTENT_ALL_TOOLS: TextContentTool[] =
    RAW_TEXT_CONTENT_ALL_TOOLS.map((tool) => ({
      ...tool,
      svgIcon: this.#sanitizer.bypassSecurityTrustHtml(tool.svgIcon as string),
    }));

  getToolCategories(): ToolCategory[] {
    const currentFilter = this.currentFilter();

    if (currentFilter !== 'all')
      return [
        {
          title: this.#getCategoryTitle(currentFilter),
          tools: this.#TEXT_CONTENT_ALL_TOOLS.filter((tool) =>
            this.#isToolVisible(tool),
          ),
        },
      ];

    const categories: ToolCategory[] = [
      {
        title: 'Most Popular Text Tools',
        tools: this.#TEXT_CONTENT_MOST_POPULAR_TOOLS,
      },
    ];

    FILTERS.forEach(
      (filter) =>
        filter.type !== 'all' &&
        categories.push({
          title: this.#getCategoryTitle(filter.type),
          tools: this.#getToolsByCategory(filter.type),
        }),
    );

    return categories;
  }

  #isToolVisible(tool: TextContentTool): boolean {
    const currentFilter = this.currentFilter();
    if (currentFilter === 'all') return true;

    if (Array.isArray(tool.category))
      return tool.category.includes(currentFilter);

    return tool.category === currentFilter;
  }

  #getToolsByCategory = (category: TextContentFilterType): TextContentTool[] =>
    this.#TEXT_CONTENT_ALL_TOOLS.filter((tool) =>
      Array.isArray(tool.category)
        ? tool.category.includes(category)
        : tool.category === category,
    );

  #getCategoryTitle(filterType: TextContentFilterType): string {
    const filter = FILTERS.find((f) => f.type === filterType);
    return filter ? `${filter.name} Tools` : 'Tools';
  }
}
