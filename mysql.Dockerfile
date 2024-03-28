FROM mysql:8.0.28

COPY resources/docker/mysql/my.cnf /etc/mysql/conf.d/z.cnf

COPY migrateTables.sh /migrateTables.sh

RUN chmod +x /migrateTables.sh