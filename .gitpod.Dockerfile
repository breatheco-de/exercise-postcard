FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@24.8.0 -g
RUN npm i @learnpack/learnpack@2.1.18 -g && learnpack plugins:install learnpack-node@0.0.19 && learnpack plugins:install learnpack-html@0.0.20
