import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  output,
  OutputEmitterRef,
  Signal,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {debounceTime, skip, tap} from 'rxjs';

@Component({
  selector: '.shared-ai-input',
  imports: [FormsModule],
  templateUrl: './ai-input.component.html',
  styleUrl: './ai-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiInputComponent {
  readonly #destroyRef = inject(DestroyRef);

  readonly #MIN_HEIGHT_PX = 22;
  readonly #MAX_HEIGHT_PX = 88;

  submit: OutputEmitterRef<string> = output();

  protected readonly inputEl: Signal<ElementRef | undefined> =
    viewChild('input');

  protected readonly $inputValue: WritableSignal<string> = signal('');
  protected readonly $webSearchEnabled: WritableSignal<boolean> = signal(false);
  protected readonly $showWebSearchTooltip: WritableSignal<boolean> =
    signal(false);
  protected readonly $showDictationTooltip: WritableSignal<boolean> =
    signal(false);

  constructor() {
    toObservable(this.$inputValue)
      .pipe(
        skip(1),
        debounceTime(100),
        tap(() => this.#changeTextAreaHeight()),
        takeUntilDestroyed(this.#destroyRef),
      )
      .subscribe();
  }

  submitMessage(): void {
    const message = this.$inputValue().trim();
    if (!message) return;

    this.submit.emit(message);
    this.$inputValue.set('');
  }

  toggleWebSearch(): void {
    this.$webSearchEnabled.update((enabled) => !enabled);
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.submitMessage();
    }
  }

  #changeTextAreaHeight(): void {
    const textareaElement = this.inputEl()?.nativeElement;
    if (!textareaElement) return;

    textareaElement.style.height = '0';

    if (!textareaElement.value.trim()) {
      textareaElement.style.height = `${this.#MIN_HEIGHT_PX}px`;
      return;
    }

    const scrollHeight = textareaElement.scrollHeight;
    const newHeight = Math.max(
      this.#MIN_HEIGHT_PX,
      Math.min(scrollHeight, this.#MAX_HEIGHT_PX),
    );
    textareaElement.style.height = `${newHeight}px`;
  }
}
