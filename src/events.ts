/**
 * Domain events emitted by the service.
 */

export type DomainEvent =
  | { kind: 'created'; id: string; createdAt: string }
  | { kind: 'updated'; id: string; updatedAt: string; fields: string[] }
  | { kind: 'deleted'; id: string; deletedAt: string }
  | { kind: 'archived'; id: string; archivedAt: string }
  | { kind: 'restored'; id: string; restoredAt: string }
  | { kind: 'purged'; id: string; purgedAt: string };
