DB_HOST=${DB_HOST}
DB_PORT=${DB_PORT:-3306}
MAX_ATTEMPTS=10
attempt=0
until mysqladmin ping -h"$DB_HOST" -P"$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD"; do
    if [ $attempt -ge $MAX_ATTEMPTS ]; then
        echo "Error: Unable to connect to database at $DB_HOST:$DB_PORT"
        exit 1
    fi
    echo "Waiting for database at $DB_HOST:$DB_PORT to be ready..."
    sleep 5
    attempt=$((attempt + 1))
done

# Execute schema.sql to set up the database
echo "Initializing database schema..."
mysql -u "${DB_USER}" -p"${DB_PASSWORD}" -h "${DB_HOST}" -P "${DB_PORT}" "${DB_NAME}" < /home/node/workspace/db/schema.sql

yarn