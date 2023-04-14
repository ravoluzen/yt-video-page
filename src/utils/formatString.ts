export function formatString(input: string): string {
    return input.replace(/\/\/(.*)/g, (group) => `//${group}\n`);
  }
  