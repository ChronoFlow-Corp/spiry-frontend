import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

import {
  AUTOMATION_TOOLS,
  TEXT_CONTENT_TOOLS,
  ToolCategory,
  VISUAL_CREATION_TOOLS,
} from '@store/tool-category/tool-category.store.type';

interface CategoryState {
  readonly currentCategory: Signal<ToolCategory | null>;
  readonly currentToolName: Signal<string | null>;
  readonly currentToolNameReadable: Signal<string | null>;
}

@Injectable({providedIn: 'root'})
export class ToolCategoryStore {
  readonly #$currentCategory: WritableSignal<ToolCategory | null> =
    signal(null);
  readonly #$currentToolName: WritableSignal<string | null> = signal(null);
  readonly #$currentToolNameReadable: Signal<string | null> = computed(() =>
    this.#getReadableToolName(),
  );

  readonly state: CategoryState = {
    currentCategory: this.#$currentCategory.asReadonly(),
    currentToolName: this.#$currentToolName.asReadonly(),
    currentToolNameReadable: this.#$currentToolNameReadable,
  } as const;

  selectCategory = (category: ToolCategory | null): void =>
    this.#$currentCategory.set(category);

  selectTool = (toolName: string | null): void =>
    this.#$currentToolName.set(toolName);

  // #createToolSelectedSignal = (category: Category): Signal<boolean> =>
  //   computed(
  //     () =>
  //       this.state.currentCategory() === category &&
  //       !!this.state.currentToolName(),
  //   );
  //
  // readonly $isTextContentToolSelected =
  //   this.#createToolSelectedSignal('text-content');
  // readonly $isVisualCreationToolSelected =
  //   this.#createToolSelectedSignal('visual-creation');
  // readonly $isAutomationToolSelected =
  //   this.#createToolSelectedSignal('automation');
  //
  // readonly $isAnyToolSelected: Signal<boolean> = computed(
  //   () =>
  //     this.$isTextContentToolSelected() ||
  //     this.$isVisualCreationToolSelected() ||
  //     this.$isAutomationToolSelected(),
  // );

  #getReadableToolName = (): string | null => {
    const currentToolName = this.state.currentToolName();

    switch (this.state.currentCategory()) {
      case 'text-content':
        return currentToolName ? TEXT_CONTENT_TOOLS[currentToolName] : null;
      case 'visual-creation':
        return currentToolName ? VISUAL_CREATION_TOOLS[currentToolName] : null;
      case 'automation':
        return currentToolName ? AUTOMATION_TOOLS[currentToolName] : null;
      default:
        return null;
    }
  };
}
