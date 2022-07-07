import { addGlobalDeps } from 'external-deps';

Promise.all([
  // import('global-deps').then(esm => addGlobalDeps(esm.globalDeps)),
  // import('custom-deps').then(esm => addGlobalDeps(esm.customDeps))
]).then(
  () => import('./bootstrap')
	  .catch(err => console.error(err))
);
