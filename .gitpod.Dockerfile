FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@24.8.0 -g
RUN npm i learnpack@0.0.96 -g && learnpack plugins:install learnpack-node && learnpack plugins:install learnpack-html@0.0.17

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && \
#     sudo apt-get install -yq bastet && \
#     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/
