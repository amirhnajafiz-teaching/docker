<h1 align="center">
Docker
</h1>

<br />

Let's talk about Docker and Containers, what are containers?
why are we using them? what is Docker? How does Docker manage
containers? And how we can create our own containers with Docker?

<br />

## What are containers?

Containers are lightweight packages of your application code 
together with dependencies such as specific versions of 
programming language runtimes and libraries required to run 
your software services.

<p align="center">
    <img src="assets/containers.png" width="500" alt="containers" />
</p>

<br />

Containers require less system resources than traditional or 
hardware virtual machine environments because they don't 
include operating system images. 
Applications running in containers can be deployed easily 
to multiple different operating systems and hardware platforms.

## What is Docker?

Docker is an open source platform that enables developers 
to build, deploy, run, update and manage containers—standardized, 
executable components that combine application source code with 
the operating system (OS) libraries and dependencies required to 
run that code in any environment.

<p align="center">
    <img src="assets/docker.jpeg" width="296" alt="docker" />
</p>

### Principles

- **Image**: A Docker image is a file used to execute code 
in a Docker container. Docker images act as a set of 
instructions to build a Docker container, like a template.
- **Dockerfile**: Is used to create docker images.
- **Container**: Each container is build from a docker image.
- **Registry**: A simple example is Dockerhub.

### Image layers

Layers allow you to work with Docker images faster. 
This is because the builds avoid unnecessary steps, 
and the pulling and pushing of images skips the transfer 
of a large unchanged amount of data already available in 
the intended destination.

<p align="center">
    <img src="assets/layers.png" width="300" alt="layer" />
</p>

### Where are containers on my system stored?

#### Linux

```shell
/var/lib/docker
```

#### MacOS

```shell
~/Library/Containers/com.docker.docker/Data/vms/0/data/Docker.raw
```