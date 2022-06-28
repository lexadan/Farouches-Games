ifndef APP_ENV
	include .env
endif

init-env:
	echo '# Never push this file\n' >> .env.local
build-dev:
	@$(CONSOLE) docker-compose up --build
.PHONY: build-dev

build-prod:
	@$(CONSOLE) docker-compose -f docker-compose.prod.yml up --build
.PHONY: build-prod