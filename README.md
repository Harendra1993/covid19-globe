
`covid19-globe` is a [JAMStack][jamstack] application that visualizes Covid19 Data on an interactive React + ThreeJS globe. Data is fetched during build time using the [`corona-tab-api`][corona-tab-api] library. Globe visualizations are rendered using the [`react-globe`][react-globe-github] component.


## 🚀 Quick start

1.  **Clone covid19-globe**

    ```shell
     git clone https://github.com/harendra1993/covid19-globe.git
    ```

2.  **Install node_modules**
  Navigate into your new site’s directory and install dependencies.
    ```shell
    cd covid19-globe && npm install
    ```

3.  **Start Development Server**
    ```shell
    cd my-default-starter/
    gatsby develop
    ```

Your site is now running at `http://localhost:8000`!


## 💫 Deploy

[![Deploy to Github](https://pages.github.com/images/logo.svg)](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/#deploying-to-a-path-on-github-pages)


[corona-tab-api]: https://github.com/PotentialWeb/CoronaTab/wiki/RESTful-API-documentation
[jamstack]: https://jamstack.org/
[react-globe-github]: https://github.com/chrisrzhou/react-globe