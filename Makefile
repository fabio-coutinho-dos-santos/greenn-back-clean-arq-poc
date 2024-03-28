DC=docker-compose --file docker-compose.dev.yml --env-file ./app/.env.dev

.PHONY: up down migrate logs

up:
	$(DC) up -d

setup:
	$(DC) up --build

down:
	$(DC) down

migrate: 
	$(DC) exec mysql /migrateTables.sh

reset: 
	$(DC) down --volumes
	$(DC) up -d --build

logs: 
	$(DC) logs -f -n 10

help: # mostra essa ajuda
	@echo "----------------------- HELP ----------------------------"
	@echo "up:      Sobe todos os serviços e mantém terminal com logs do NestJS"
	@echo "down:    derruba todos os serviços"
	@echo "migrate: reseta as tabelas baseada nos dumps"
	@echo "logs:    Observa os logs de todo o ambiente"

	@echo "--------------------------------------------------------"
