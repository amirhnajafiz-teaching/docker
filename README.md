# Docker-for-my-Mac
Settting up the a docker + building a simple project on my Mac-book

## Installing Docker
Well, installing docker is the easiest part of the project.<br />
Visit the link below and download the **docker.dmg** file.<br />
- [Docker website](https://www.docker.com/products/docker-desktop)

> If your using Macbook with Apple chip, make sure to download the file that matches your system requirements.

Once you downloaded the file, click on it to begin the installation.<br />
Since docker needs to edit some of the root files of your computer, make sure to give the access when running the docker.dmg file.<br />

After the installation is completed you can enter the following command in the terminal:
```shell
docker -v
```

And you should get a result like this:
```shell
Docker version 20.10.10, build b485636
```

And you can work with the docker desktop with the installed application, besides of working with docker in terminal.

## Using sail
Now we are going to create a project with **laravel sail**.
