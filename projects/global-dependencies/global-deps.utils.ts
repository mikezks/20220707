
const globalDeps: Record<string, unknown> = {};
(window as any)['myCompanyNamespace'] = { globalDeps };

export function addGlobalDeps(deps: { name: string, package: unknown }[]): void {
  deps.forEach(
    dep => globalDeps[dep.name] = dep.package
  );
}
