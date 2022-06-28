ifndef APP_ENV
	include .env
endif

build-dev:
	@$(CONSOLE) echo '\n' >> .env && cat .env.local >> .env
	@$(CONSOLE) docker-compose up --build
.PHONY: build-dev

build-prod:
	@$(CONSOLE) echo '\n' >> .env && cat .env.local >> .env
	@$(CONSOLE) docker-compose -f docker-compose.prod.yml up --build
.PHONY: build-prod