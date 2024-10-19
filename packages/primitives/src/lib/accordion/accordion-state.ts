import { signal } from '@lit-labs/signals';

export const accordionState = signal<Set<string>>(new Set());
