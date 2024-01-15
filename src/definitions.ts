export interface CapacitorPlayIntegrityPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
