import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Router} from '@angular/router';
import {filter, fromEvent, tap} from 'rxjs';

import {
  LANGUAGES,
  STYLES,
} from '@components/sidebar-desktop/text-content-config/text-content-config.component.model';
import {
  TextContentAICaptionGeneratorConfig,
  TextContentAICaptionGeneratorConfigStyle,
} from '@store/text-content-config/ai-caption-generator.type';
import {TextContentConfigStore} from '@store/text-content-config/text-content-config.store';
import {TextContentConfigLanguage} from '@store/text-content-config/text-content-config.store.type';
import {ToolCategoryStore} from '@store/tool-category/tool-category.store';

@Component({
  selector: '.shared-sidebar-desktop-text-content-config',
  templateUrl: './text-content-config.component.html',
  styleUrl: './text-content-config.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextContentConfigComponent implements OnInit {
  readonly #router = inject(Router);
  readonly #toolCategoryStore = inject(ToolCategoryStore);
  readonly #textContentConfigStore = inject(TextContentConfigStore);
  readonly #destroy = inject(DestroyRef);

  protected readonly languageSelectRef =
    viewChild<ElementRef<HTMLDivElement>>('languageSelect');

  protected readonly styleSelectRef =
    viewChild<ElementRef<HTMLDivElement>>('styleSelect');

  protected readonly toolName =
    this.#toolCategoryStore.state.currentToolNameReadable;

  protected readonly config =
    this.#textContentConfigStore.AICaptionGeneratorConfig;

  protected readonly languages = LANGUAGES;
  protected readonly styles = STYLES;

  protected readonly isLanguageSelectDropdownOpen: WritableSignal<boolean> =
    signal(false);

  protected readonly isStyleSelectDropdownOpen: WritableSignal<boolean> =
    signal(false);

  protected readonly selectedLanguage = computed(
    () =>
      this.languages.find((lang) => lang.code === this.config().language) ||
      this.languages[0],
  );

  protected readonly selectedStyle = computed(
    () =>
      this.styles.find((style) => style === this.config().style) ||
      this.styles[0],
  );

  ngOnInit(): void {
    this.#listenClicksToCloseSelects();
  }

  back(): void {
    this.#router.navigateByUrl('/category/text-content').then();
  }

  updateConfig(updates: Partial<TextContentAICaptionGeneratorConfig>): void {
    this.#textContentConfigStore.updateAICaptionGeneratorConfig(updates);
  }

  updateLanguage(code: TextContentConfigLanguage): void {
    this.updateConfig({language: code});
    this.isLanguageSelectDropdownOpen.set(false);
  }

  updateDescription = (event: Event): void => {
    this.#textContentConfigStore.updateAICaptionGeneratorConfig({
      prompt: (event.target as HTMLTextAreaElement).value,
    });
  };

  updateStyle(style: TextContentAICaptionGeneratorConfigStyle): void {
    this.updateConfig({style});
    this.isStyleSelectDropdownOpen.set(false);
  }

  toggleLanguageSelectDropdown(): void {
    this.isLanguageSelectDropdownOpen.set(!this.isLanguageSelectDropdownOpen());
  }

  toggleStyleSelectDropdown(): void {
    this.isStyleSelectDropdownOpen.set(!this.isStyleSelectDropdownOpen());
  }

  generateText(): void {
    console.log('generateText', this.config());
  }

  #listenClicksToCloseSelects(): void {
    fromEvent(document, 'click')
      .pipe(
        filter(
          () =>
            this.isLanguageSelectDropdownOpen() ||
            this.isStyleSelectDropdownOpen(),
        ),
        tap((event) => {
          const isLanguageSelectOpened = this.isLanguageSelectDropdownOpen();
          const isStyleSelectOpened = this.isStyleSelectDropdownOpen();

          isLanguageSelectOpened &&
            !this.languageSelectRef()?.nativeElement.contains(
              event.target as Node,
            ) &&
            this.isLanguageSelectDropdownOpen.set(false);

          isStyleSelectOpened &&
            !this.styleSelectRef()?.nativeElement.contains(
              event.target as Node,
            ) &&
            this.isStyleSelectDropdownOpen.set(false);
        }),
        takeUntilDestroyed(this.#destroy),
      )
      .subscribe();
  }
}
