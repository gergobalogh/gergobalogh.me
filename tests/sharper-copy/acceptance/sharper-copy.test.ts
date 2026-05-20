import { describe, it, expect } from 'vitest';
import { translations } from '../../../src/i18n/ui';

const en = translations.en;
const ro = translations.ro;
const hu = translations.hu;

describe('i18n completeness', () => {
  it('every EN translation key exists in RO', () => {
    const enKeys = Object.keys(en);
    const roKeys = Object.keys(ro);
    for (const key of enKeys) {
      expect(roKeys).toContain(key);
      expect(ro[key as keyof typeof ro]).toBeDefined();
      expect((ro[key as keyof typeof ro] as string).length).toBeGreaterThan(0);
    }
  });

  it('every EN translation key exists in HU', () => {
    const enKeys = Object.keys(en);
    const huKeys = Object.keys(hu);
    for (const key of enKeys) {
      expect(huKeys).toContain(key);
      expect(hu[key as keyof typeof hu]).toBeDefined();
      expect((hu[key as keyof typeof hu] as string).length).toBeGreaterThan(0);
    }
  });
});
