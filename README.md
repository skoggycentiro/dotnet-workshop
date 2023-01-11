# dotnet workshop

## Prerequisites

* A computer with `Windows 🪟`, `Mac OS 🍎` or `linux 🐧`
* 🧑‍💻 [dotnet 7 SDK from Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
* 📃 Text editor | IDE - (choose your favourite)
  * [VS Code](https://code.visualstudio.com/) (also install the C# extension)
  * [Visual Studio](https://visualstudio.microsoft.com/)
  * [Rider](https://www.jetbrains.com/rider/)
  * CLI and any text editor also works
* 🌿 [GIT](https://git-scm.com/)
* 💻 Command console (to setup project)
  * cmd
  * cmder
  * powershell
  * git bash
  * terminal
  * xterm

> 🙏 Please make sure everything is installed before the workshop 



## Tasks

### 1. WebAPI

> dotnet new webapi -n MyCoolApp

*Creates a small web application that returns weather information*

Ideas to expand on: 

* [Easy] Add an endpoint to get the weather for a specific day
* [Easy] Add additional information in the data model about the weather
* [Intermediate] Add data-file with weather data instead of hardcoding
* [Hard] Add database support instead of hardcoding weather data
* [Hard] Integrate a public weather API [List of public APIs](https://github.com/public-api-lists/public-api-lists)

### 2. Console application

> dotnet new console -n MyConsoleApp

*Creates a console application that prints `hello world`*

Ideas to expand on: 

* [Easy] Read user input
* [Intermediate] Make a full command line interface (CLI) application
* [Intermediate] Use a public api to get data based on user query - [List of public APIs](https://github.com/public-api-lists/public-api-lists)
* [Hard] Add database support

### 3. Frontend application

> dotnet new angular -n MyWeatherApp

*Creates an angular application that shows weather information*

Ideas to expand on: 

* [Easy] Read user input
* [Intermediate] Show weather based on user input
* [Hard] Simulate on map based on user input


## Guides

Get started with Visual Studio Code
https://learn.microsoft.com/sv-se/shows/dotnet/get-started-vscode-csharp-net-core-windows