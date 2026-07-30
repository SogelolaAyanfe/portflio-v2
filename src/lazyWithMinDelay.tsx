import type { ComponentType } from "react";

export function lazyWithMinDelay<T extends { default: ComponentType<unknown> }>(
  importFn: () => Promise<T>,
  minDelayMs = 3000,
): () => Promise<T> {
  return () =>
    Promise.all([
      importFn(),
      new Promise((resolve) => setTimeout(resolve, minDelayMs)),
    ]).then(([moduleExports]) => moduleExports);
}
