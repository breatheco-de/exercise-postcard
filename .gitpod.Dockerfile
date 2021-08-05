FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@24.8.0 -g
RUN npm i learnpack@0.1.14 -g && learnpack plugins:install learnpack-node@0.0.18 && learnpack plugins:install learnpack-html@0.0.20
