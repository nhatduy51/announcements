FROM node:14.17-stretch

ARG UID=1000
ARG GID=1000

ENV APP_HOME=/home/app

# Create group "app" and user "app".
RUN useradd --system --create-home --home ${APP_HOME} --shell /sbin/nologin --no-log-init app

WORKDIR $APP_HOME
USER app

COPY --chown=app:app package.json yarn.lock $APP_HOME/

# Install dependencies
RUN yarn

# Copy the main application.
COPY --chown=app:app . $APP_HOME

RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]
