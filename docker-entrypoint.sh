#!/bin/sh
set -e

PORT="${PORT:-8080}"
sed "s/PORT_PLACEHOLDER/${PORT}/g" /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec nginx -g 'daemon off;'
