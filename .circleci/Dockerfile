FROM cimg/node:16.13.0

RUN sudo apt install unzip

RUN sudo npm update

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    sudo ./aws/install && aws --version