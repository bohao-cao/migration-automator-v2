# migration-automator-v2

An upgrade of the MigrationAutomationRunner, using docker and Angular2 CLI. UI side plan to use Bootstrap + Angular Material(still in beta). The functionalities are largely the same, but plan to add more logging and a few functionalities (to be determined). The ultimate goal is to push the code into my company's private rancher stack.

# Useful docker commands

`dock-compose logs -f ` Follow log output (useful after the terminal that launch the containers are closed);

`docker-compsoe build` Services are built once and then tagged as project_service, e.g., composetest_db. If you change a service’s Dockerfile or the contents of its build directory, run docker-compose build to rebuild it.

`docker-compose up` Builds, (re)creates, starts, and attaches to containers for a service.

`docker exec -it <container ID> bash` execute commands in the container, user `docker ps` to get the container ID.
