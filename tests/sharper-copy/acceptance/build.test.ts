import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';

describe('Build verification', () => {
  it('site builds successfully', () => {
    const result = execSync('npx astro build 2>&1', {
      encoding: 'utf-8',
      timeout: 120000,
      cwd: process.cwd(),
    });
    expect(result).toBeDefined();
  });
}, 120000);
