import { registerPlugin } from '@capacitor/core';

import type { CapacitorPlayIntegrityPlugin } from './definitions';

const CapacitorPlayIntegrity = registerPlugin<CapacitorPlayIntegrityPlugin>(
  'CapacitorPlayIntegrity',
  {
    web: () => import('./web').then(m => new m.CapacitorPlayIntegrityWeb()),
  },
);

export * from './definitions';
export { CapacitorPlayIntegrity };
