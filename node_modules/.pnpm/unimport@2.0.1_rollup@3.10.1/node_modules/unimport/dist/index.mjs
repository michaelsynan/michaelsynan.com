export { b as builtinPresets, e as createUnimport, a as resolveBuiltinPresets, r as resolvePreset, c as scanDirExports, d as scanExports, s as scanFilesFromDir } from './shared/unimport.87335e20.mjs';
export { k as addImportToCode, b as dedupeImports, d as defineUnimportPreset, e as excludeRE, j as getMagicString, h as getString, i as importAsRE, m as matchRE, n as normalizeImports, r as resolveIdAbsolute, s as separatorRE, a as stripCommentsAndStrings, c as toExports, t as toImports, g as toTypeDeclarationFile, f as toTypeDeclarationItems } from './shared/unimport.4a496dde.mjs';
import 'mlly';
import 'fs';
import 'local-pkg';
import 'os';
import 'pkg-types';
import 'pathe';
import 'fast-glob';
import 'scule';
import 'magic-string';
import 'strip-literal';

async function installGlobalAutoImports(imports, options = {}) {
  const {
    globalObject = globalThis,
    overrides = false
  } = options;
  imports = Array.isArray(imports) ? imports : await imports.getImports();
  await Promise.all(
    imports.map(async (i) => {
      if (i.disabled) {
        return;
      }
      const as = i.as || i.name;
      if (overrides || !(as in globalObject)) {
        const module = await import(i.from);
        globalObject[as] = module[i.name];
      }
    })
  );
  return globalObject;
}

export { installGlobalAutoImports };
