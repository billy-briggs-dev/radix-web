// AccordionStore.js
import { signal } from '@lit-labs/signals';

export class AccordionStore {
  allowMultiple = false;
  openItems = signal(new Set());

  setAllowMultiple(value: boolean) {
    this.allowMultiple = value;
  }

  toggleItem(itemId: string) {
    const currentOpenItems = new Set(this.openItems.get());
    if (currentOpenItems.has(itemId)) {
      currentOpenItems.delete(itemId);
    } else {
      if (!this.allowMultiple) {
        currentOpenItems.clear();
      }
      currentOpenItems.add(itemId);
    }
    this.openItems.set(currentOpenItems);
  }

  isOpen(itemId: string) {
    return this.openItems.get().has(itemId);
  }

  closeAll() {
    this.openItems.set(new Set());
  }

  getDataState(itemId: string): string {
    return this.openItems.get().has(itemId) ? 'opened' : 'closed';
  }
}
