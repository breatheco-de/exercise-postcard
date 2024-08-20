FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
RUN npm i @learnpack/learnpack@4.0.8 -g && learnpack plugins:install @learnpack/node@1.1.12 && learnpack plugins:install @learnpack/html@1.1.7
