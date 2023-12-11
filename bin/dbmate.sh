# Load environment variables based on NODE_ENV
if [ -z "${NODE_ENV}" ]; then
  source env/development.env
else 
  source env/${NODE_ENV}.env
fi

# Check if DB credentials are set
if [ -z "${DB_NAME}" ] || [ -z "${DB_HOST}" ] || [ -z "${DB_PORT}" ] || [ -z "${DB_USER}" ] || [ -z "${DB_PASSWORD}" ]; then
  echo "Database migration credentials are not set"
  exit 1
fi

# Construct and export DB_MIGRATION_CREDS
export DB_MIGRATION_CREDS="mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"

# Run dbmate
exec dbmate --url "$DB_MIGRATION_CREDS" "$@"
