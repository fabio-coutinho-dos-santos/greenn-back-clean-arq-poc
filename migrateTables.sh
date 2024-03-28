#!/bin/bash
export MYSQL_PWD=$MYSQL_PASSWORD
files=(/database_source/*.sql)
total=${#files[@]}
current=0
for file in "${files[@]}"; do
    current=$((current+1))
    echo "$(date) - Iniciando a importação do arquivo $file ($current de $total)"
    mysql --force -u $MYSQL_USER $MYSQL_DATABASE < "$file"
    if [ $? -eq 0 ]; then
        echo "$(date) - Importação do arquivo $file concluída com sucesso"
    else
        echo "$(date) - Erro durante a importação do arquivo $file"
    fi
done
unset MYSQL_PWD