FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
RUN npm i @learnpack/learnpack@2.1.47 -g && learnpack plugins:install @learnpack/node@1.1.11 && learnpack plugins:install @learnpack/html@1.1.17
