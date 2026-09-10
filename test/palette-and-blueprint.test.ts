import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Architectural Palette Harmonies & CAD Blueprint Mode', () => {
  beforeEach(async () => {
    const html = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
    document.documentElement.innerHTML = html;
    window.alert = () => {};
    delete (window as any).__appController;

    // Load bundle code into global window
    const distAssets = fs.readdirSync(path.resolve('./dist/assets'));
    const jsBundle = distAssets.find(f => f.endsWith('.js'));
    if (jsBundle) {
      const code = fs.readFileSync(path.resolve(`./dist/assets/${jsBundle}`), 'utf-8');
      window.eval(code);
      document.dispatchEvent(new Event('DOMContentLoaded'));
      await new Promise(r => setTimeout(r, 60));
    }
  });

  it('initializes with Auric Obsidian as the canonical default palette theme', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    expect(theme).toBe('auric');

    const activeName = document.getElementById('palette-active-name');
    expect(activeName?.textContent).toBe('Auric');

    const hudLabel = document.getElementById('hud-theme-label');
    expect(hudLabel?.textContent).toBe('AURIC OBSIDIAN');
  });

  it('switches palette harmonies cleanly via the dropdown and updates HUD', async () => {
    const dialBtn = document.getElementById('palette-dial-btn') as HTMLButtonElement;
    const dropdown = document.getElementById('palette-dropdown');
    expect(dialBtn).not.toBeNull();
    expect(dropdown).not.toBeNull();

    // Click dial to open
    dialBtn.click();
    await new Promise(r => setTimeout(r, 30));
    expect(dropdown?.classList.contains('active')).toBe(true);
    expect(dialBtn.getAttribute('aria-expanded')).toBe('true');

    // Click Signal Amber option
    const amberOpt = dropdown?.querySelector('.palette-opt[data-theme="amber"]') as HTMLButtonElement;
    expect(amberOpt).not.toBeNull();
    amberOpt.click();
    await new Promise(r => setTimeout(r, 30));

    expect(document.documentElement.getAttribute('data-theme')).toBe('amber');
    expect(document.getElementById('palette-active-name')?.textContent).toBe('Amber');
    expect(document.getElementById('hud-theme-label')?.textContent).toBe('SIGNAL AMBER');
    expect(dropdown?.classList.contains('active')).toBe(false);

    // Switch to Titanium Swiss
    const titaniumOpt = dropdown?.querySelector('.palette-opt[data-theme="titanium"]') as HTMLButtonElement;
    titaniumOpt.click();
    await new Promise(r => setTimeout(r, 30));

    expect(document.documentElement.getAttribute('data-theme')).toBe('titanium');
    expect(document.getElementById('palette-active-name')?.textContent).toBe('Titanium');
    expect(document.getElementById('hud-theme-label')?.textContent).toBe('TITANIUM SWISS');
  });

  it('toggles CAD Blueprint mode on and off with state persistence and accessible labels', async () => {
    const blueprintBtn = document.getElementById('blueprint-toggle-btn') as HTMLButtonElement;
    expect(blueprintBtn).not.toBeNull();
    expect(blueprintBtn.getAttribute('aria-pressed')).toBe('false');
    expect(document.body.classList.contains('blueprint-mode')).toBe(false);

    // Toggle ON
    blueprintBtn.click();
    await new Promise(r => setTimeout(r, 30));

    expect(document.body.classList.contains('blueprint-mode')).toBe(true);
    expect(blueprintBtn.getAttribute('aria-pressed')).toBe('true');
    expect(blueprintBtn.classList.contains('active')).toBe(true);

    // Toggle OFF
    blueprintBtn.click();
    await new Promise(r => setTimeout(r, 30));

    expect(document.body.classList.contains('blueprint-mode')).toBe(false);
    expect(blueprintBtn.getAttribute('aria-pressed')).toBe('false');
    expect(blueprintBtn.classList.contains('active')).toBe(false);
  });

  it('renders Architectural Telemetry HUD with verifiable coordinate metadata', () => {
    const hud = document.getElementById('arch-telemetry-hud');
    expect(hud).not.toBeNull();
    expect(hud?.textContent).toContain('47.592°N 122.035°W');
    expect(hud?.textContent).toContain('SAMMAMISH, WA');
    expect(hud?.textContent).toContain('DETERMINISTIC');
  });
});
