/**
 * Domain events emitted by the service.
 */

export type DomainEvent =
  | { kind: 'created'; id: string; createdAt: string }
  | { kind: 'updated'; id: string; updatedAt: string; fields: string[] }
  | { kind: 'deleted'; id: string; deletedAt: string };
