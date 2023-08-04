FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@24.8.0 -g
RUN npm i @learnpack/learnpack@2.1.26 -g && learnpack plugins:install @learnpack/node@1.1.1 && learnpack plugins:install learnpack-html@0.0.20
