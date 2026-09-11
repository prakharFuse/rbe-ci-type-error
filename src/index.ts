import type { DomainEvent } from './events.js';
import { describeEvent } from './describe-event.js';

const recent: DomainEvent[] = [
  { kind: 'created', id: 'a1', createdAt: '2026-01-01T00:00:00Z' },
  { kind: 'updated', id: 'a1', updatedAt: '2026-01-02T00:00:00Z', fields: ['title'] },
];

export function summarize(): string {
  return recent.map(describeEvent).join('\n');
}
