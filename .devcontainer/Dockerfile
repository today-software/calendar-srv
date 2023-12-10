FROM node:latest

WORKDIR /home/node/workspace

# Update the package list and install git, vim, and default-mysql-client
RUN apt-get update && \
    apt-get install -y git vim default-mysql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Download and install dbmate
RUN curl -fsSL https://github.com/amacneil/dbmate/releases/download/v1.12.1/dbmate-linux-amd64 -o /usr/local/bin/dbmate && \
    chmod +x /usr/local/bin/dbmate

RUN chown -R node:node /home/node/workspace

USER node

CMD ["yarn", "start"]
