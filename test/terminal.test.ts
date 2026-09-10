import { describe, it, expect } from 'vitest';
import { terminalResponses, getTerminalHelp, executeTerminalCommand } from '../src/data/terminal';

describe('Interactive Terminal Shell & Command Parser', () => {
  const expectedCommands = [
    '--why-not-langchain',
    '--tilldone-loop',
    '--fabric-migration',
    '--business-automation',
    '--privacy-vaults',
    '--benchmark',
    '--bio',
    '--manifesto',
    '--skills',
    '--contact'
  ];

  it('contains all required production response scripts', () => {
    for (const cmd of expectedCommands) {
      expect(terminalResponses).toHaveProperty(cmd);
      const res = terminalResponses[cmd];
      expect(res.command).toBe(cmd);
      expect(res.executionTimeMs).toBeGreaterThan(0);
      expect(res.executionTimeMs).toBeLessThan(100);
      expect(res.output.en.trim().length).toBeGreaterThan(50);
      expect(res.output.tr.trim().length).toBeGreaterThan(50);
    }
  });

  it('executes predefined commands with pure parser', () => {
    for (const cmd of expectedCommands) {
      const enResult = executeTerminalCommand(cmd, 'en');
      expect(enResult.success).toBe(true);
      expect(enResult.command).toBe(cmd);
      expect(enResult.output).toBe(terminalResponses[cmd].output.en);

      const trResult = executeTerminalCommand(cmd, 'tr');
      expect(trResult.success).toBe(true);
      expect(trResult.output).toBe(terminalResponses[cmd].output.tr);
    }
  });

  it('resolves intuitive terminal aliases seamlessly', () => {
    const whoami = executeTerminalCommand('whoami', 'en');
    expect(whoami.success).toBe(true);
    expect(whoami.output).toBe(terminalResponses['--bio'].output.en);

    const manifesto = executeTerminalCommand('manifesto', 'en');
    expect(manifesto.success).toBe(true);
    expect(manifesto.output).toBe(terminalResponses['--manifesto'].output.en);

    const skills = executeTerminalCommand('skills', 'en');
    expect(skills.success).toBe(true);
    expect(skills.output).toBe(terminalResponses['--skills'].output.en);

    const contact = executeTerminalCommand('contact', 'en');
    expect(contact.success).toBe(true);
    expect(contact.output).toBe(terminalResponses['--contact'].output.en);
  });

  it('handles help command in both locales', () => {
    const enHelp = executeTerminalCommand('help', 'en');
    expect(enHelp.success).toBe(true);
    expect(enHelp.output).toContain('AVAILABLE COMMANDS:');
    expect(enHelp.output).toContain('--tilldone-loop');
    expect(enHelp.output).toContain('--manifesto');
    expect(enHelp.output).toContain('--skills');
    expect(enHelp.output).toContain('--contact');

    const trHelp = executeTerminalCommand('help', 'tr');
    expect(trHelp.success).toBe(true);
    expect(trHelp.output).toContain('KULLANILABİLİR KOMUTLAR:');
    expect(trHelp.output).toContain('--tilldone-loop');
    expect(trHelp.output).toContain('--manifesto');
  });

  it('handles clear command cleanly', () => {
    const clearRes = executeTerminalCommand('clear', 'en');
    expect(clearRes.success).toBe(true);
    expect(clearRes.command).toBe('clear');
    expect(clearRes.output).toBe('');
  });

  it('handles unknown commands with informative error messages', () => {
    const enUnknown = executeTerminalCommand('--foo-bar', 'en');
    expect(enUnknown.success).toBe(false);
    expect(enUnknown.output).toContain("Command not recognized: '--foo-bar'");

    const trUnknown = executeTerminalCommand('--foo-bar', 'tr');
    expect(trUnknown.success).toBe(false);
    expect(trUnknown.output).toContain("Komut bulunamadı: '--foo-bar'");
  });

  it('verifies --benchmark response contains zero-jank metrics', () => {
    const res = executeTerminalCommand('--benchmark', 'en');
    expect(res.output).toContain('Website LCP');
    expect(res.output).toContain('CLS (Cumulative Layout Shift)');
    expect(res.output).toContain('Bilingual Switch Latency');
    expect(res.output).toContain('0ms (In-Memory)');
  });
});
