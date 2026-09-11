import type { DomainEvent } from './events.js';

/** Render a one-line, human-readable description of an event. */
export function describeEvent(event: DomainEvent): string {
  switch (event.kind) {
    case 'created':
      return `created ${event.id} at ${event.createdAt}`;
    case 'updated':
      return `updated ${event.id} (${event.fields.join(', ')})`;
    case 'deleted':
      return `deleted ${event.id} at ${event.deletedAt}`;
    case 'archived':
      return `archived ${event.id} at ${event.archivedAt}`;
    case 'restored':
      return `restored ${event.id} at ${event.restoredAt}`;
    case 'purged':
      return `purged ${event.id} at ${event.purgedAt}`;
    default: {
      const unreachable: never = event;
      return String(unreachable);
    }
  }
}
