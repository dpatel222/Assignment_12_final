# Deep Patel UI Garden

This is a Dockerized Node.js project set up for running Storybook. Below are the steps to get started with this project.

## Prerequisites

- Docker installed on your machine

## Getting Started

To set up and run this project, follow these steps:

1. **Clone the repository**

    ```sh
    git clone https://github.com/your-username/deep_patel_ui_garden.git
    cd deep_patel_ui_garden
    ```

2. **Build the Docker image**

    ```sh
    docker build -t deep_patel_ui_garden .
    ```

3. **Run the Docker container**

    ```sh
    docker run -p 8083:8083 deep_patel_ui_garden
    ```

After running the above commands, Storybook should be accessible at `http://localhost:8083`.

## Dockerfile Breakdown

Here's a brief explanation of the Dockerfile:

- **Base Image**

    ```dockerfile
    FROM node:20.12.2-alpine
    ```

    We use the official Node.js base image with Alpine Linux for a lightweight container.

- **Set Working Directory**

    ```dockerfile
    WORKDIR deep_patel_ui_garden
    ```

    Set the working directory inside the container.

- **Update PATH**

    ```dockerfile
    ENV PATH /app/node_modules/.bin:$PATH
    ```

    Add `/app/node_modules/.bin` to the PATH for easier npm script execution.

- **Install Dependencies**

    ```dockerfile
    COPY package.json ./
    COPY package-lock.json ./
    RUN npm ci
    ```

    Copy the `package.json` and `package-lock.json` files to the container and install dependencies using `npm ci` for a clean and reproducible install.

- **Copy Application Code**

    ```dockerfile
    COPY . ./
    ```

    Copy the rest of the application code to the container.

- **Expose Port**

    ```dockerfile
    EXPOSE 8083
    ```

    Expose port 8083 to be accessible outside the container.

- **Start Application**

    ```dockerfile
    CMD ["npm", "run", "storybook"]
    ```

    Start the application using the `storybook` script defined in `package.json`.



