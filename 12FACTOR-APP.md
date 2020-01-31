# 12-Factor App
In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:
- Use declarative formats for setup automation, to minimize time and cost for new developers joining the project.
- Have a clean contract with the underlying operating system, offering maximum portability between execution environments.
- Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration.
- Minimize divergence between development and production, enabling continuous deployment for maximum agility.
- And can scale up without significant changes to tooling, architecture, or development practices.

The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).
## 12-Factor App Methodology
1. Codebase
2. Dependencies
3. Configuration
4. Backing Services
5. Build, release, run
6. Processes
7. Port Binding
8. Concurrency
9. Disposability
10. Dev/prod parity
11. Logs
12. Admin Processes
### 1. Codebase
There is only one codebase per app, but there will be many deploys of the app. This means that you might have deployed your application to production and to staging, for example. Both environments share the same codebase, but might be in a different state. Staging could have some commits not yet deployed to production for testing. 
### 2. Dependencies
Your application might rely on external libraries and packages to run. You should never assume that these packages exist on the target system. Instead, your application must declare all dependencies and their correct version explicitly.
When working with PHP and Joomlatools Platform, we can rely on Composer to install dependencies for us. All we have to do is declare them in the composer.json manifest. 
### 3. Configuration
Configuration options should never be hardcoded, for two reasons:
- You do not want sensitive information like database credentials or API keys to be committed into the repository to prevent security leaks.
- Your configuration varies per environment. For example, you might want to enable debugging on your local environment while this would be overkill on production.

Instead of hardcoding this information, we rely on environment variables to handle this sensitive information.
### 4. Backing Services
A backing service is one that requires a network connection to run, like MySQL or Memcached. If the location or connection details of such a service changes, you should not have to make code changes. Instead, these details should be available in the configuration.

For example, your development environment talks to a MySQL server on your local machine. On production, your database runs on another server. The only difference will be the URL to connect to in the configuration. 
### 5. Build, release, run
Build, release, and run stages should be treated as completely distinct from one another:
- The build stage is fully controlled by the developer. This is where we tag a new release and fix bugs.
- The release stage prepares the build for execution in the target environment. In this stage, you can run tests to verify if the code behaves as intented.
- The run stage executes the application and should not need any intervention.

For example, it's now impossible to make changes to the runtime. Instead, you make changes to the code in the build stage where you have total control. This reduces risk and ensures your team that everything is running well. 
### 6. Processes
Stateless applications are designed to degrade gracefully. That means if a part of your application stack fails, the app itself does not become a failure. In other words, the state of your system is completely defined by your databases and shared storage, and not by each individual running application instance.
### 7. Port Binding
Your application service should also be accessible via a URL, just as your backing services are. This enables your application to be fully self-contained.
### 8. Concurrency
Every process inside your application should be treated as a first-class citizen. That means that each process should be able to scale, restart, or clone itself when needed. This approach will improve the sustainability and scalability of your application as a whole.
### 9. Disposability
When you deploy new code, you want the new version to start right away and be able to deal with incoming traffic. This principle is a natural result of the backing services and concurrency principles: after a crash or new deployment, your app should have everything it needs waiting in databases or caches. Reloading the code should only take a few seconds max.
### 10. Dev/prod parity
Your development environment should resemble production as close as possible. That means working on the same operating system, using the same backing services and the same dependencies, and so on. This reduces the number of bugs and downtime and allows your organisation to have a much more rapid development cycle. 
### 11. Logs
Logging is important for debugging and checking up on the general health of your application. However, your application should not be concerned with the storage and management of these logs. Instead, log entries should be treated as an event stream that is routed to a separate service for archival and analysis.
### 12. Admin Processes
Once your application is running in production, you'll want to do a lot of simple administrative tasks from time to time. You could need to run a database migration or fetch analytical data to gather business insights.
One-off admin processes are long-running processes that should be run in an identical environment as the regular long-running processes of the app. They run against the same live release, using the same codebase, configuration and database.