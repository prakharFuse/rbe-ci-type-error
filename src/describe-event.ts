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
    default: {
      const unreachable: never = event;
      return String(unreachable);
    }
  }
}
