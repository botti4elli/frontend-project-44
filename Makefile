NPM = npm

install:
	$(NPM) ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
