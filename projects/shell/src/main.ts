import('global-deps').then(esm => esm.registerGlobalDeps());

import('./bootstrap')
	.catch(err => console.error(err));
