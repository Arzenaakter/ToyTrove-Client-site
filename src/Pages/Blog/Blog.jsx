import useTitle from "../../Hook/useTitle";

const Blog = () => {
  useTitle("ToyTrove || Blog");
  return (
    <div className="my-10 container  m-auto px-10 lg:px-10">
      <div className="rounded p-6 mb-10 bg-info">
        <h1 className="text-2xl font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <br />
        <div className="flex gap-10 justify-evenly">
          <p>
            <span className="font-bold"> Access Token: </span>
            <br />
            1. An access token is a credential that is used to access protected
            resources on behalf of a user or an application. <br />
            2. It is usually a string of characters, generated by an
            authentication server, and is issued to a client after a successful
            authentication. <br />
            3. The access token contains information such as the user or
            application identity and any associated permissions or scopes.{" "}
            <br />
            4. This token is typically short-lived and has an expiration time.
            Once it expires, it can no longer be used to access protected
            resources.
          </p>
          <p>
            <span className="font-bold"> Refresh Token: </span>
            <br />
            1. A refresh token is a credential used to obtain a new access token
            when the current one expires. <br />
            2. Unlike access tokens, refresh tokens are typically long-lived and
            can be used to obtain new access tokens without requiring the user
            to reauthenticate. <br />
            3. Refresh tokens are securely stored on the client-side and are
            sent to the authentication server to obtain a fresh access token.
          </p>
        </div>
        <br />
        <br />
        <div>
          <span className="font-bold">
            {" "}
            How do they work and where should we store them on the client-side{" "}
          </span>
          <br />
          <br />
          User logs in or an application authenticates itself by providing valid
          credentials to an authentication server. If the credentials are valid,
          the server generates an access token and a refresh token. The access
          token is returned to the client-side, which can now include it in
          subsequent requests to access protected resources. The client-side
          securely stores the refresh token (usually in a secure cookie or local
          storage) for future use. When the access token expires, the
          client-side can send the refresh token to the authentication server.
          The authentication server verifies the refresh token and, if valid,
          issues a new access token. The new access token is returned to the
          client-side, and the process continues. <br />
          <br />
          <br />
          Regarding where to store access and refresh tokens on the client-side,
          it depends on the security requirements and the nature of your
          application. Here are a few common options: <br />
          1. Secure HTTP-only cookies: Storing the tokens in HTTP-only cookies
          ensures that they are not accessible to JavaScript code, reducing the
          risk of cross-site scripting (XSS) attacks. <br />
          2. Local storage or session storage: These are browser-based storage
          mechanisms that allow storing data on the client-side. However, they
          may be vulnerable to XSS attacks. <br />
          3. HTML5 Web Storage API: The Web Storage API includes localStorage
          and sessionStorage, which can be used to store tokens. Similar to
          local storage, they may be vulnerable to XSS attacks. <br />
          4. In-memory storage: Tokens can be stored in memory on the
          client-side, but this approach is suitable only for specific scenarios
          and can be less secure.
        </div>
      </div>
      <div className="rounded p-6 mb-10 bg-success">
        <h1 className="text-2xl font-bold">Compare SQL and NoSQL databases?</h1>
        <br />
        <br />
        <p>
          SQL and NoSQL databases are two different types of database management
          systems that have different approaches to storing and retrieving data.
          Here is a comparison between SQL and NoSQL databases:
        </p>
        <br />
        <div className="flex gap-10 justify-evenly">
          <p>
            <span className="font-bold">SQL Databases:</span>
            <br />
            1.Structure: SQL databases are based on a structured schema that
            defines the tables, columns, and relationships between them. They
            follow a fixed schema, where data is organized into rows and
            columns. <br />
            2. Data Model: SQL databases use the relational data model and store
            data in tables. The relationships between tables are defined using
            foreign keys. <br />
            3. Query Language: SQL databases use SQL (Structured Query Language)
            for defining and manipulating data. SQL provides a standardized way
            to query and manipulate data, making it easy to perform complex
            joins, filtering, and aggregations. 4. Scalability: SQL databases
            typically scale vertically by increasing the hardware resources of a
            single server. However, some SQL databases also support horizontal
            scalability through sharding or replication.
          </p>
          <p>
            <span className="font-bold">NoSQL Databases:</span>
            <br />
            1.Structure: NoSQL databases are schema-less or have a flexible
            schema. They allow for dynamic and unstructured data, where each
            record can have a different structure. <br />
            2. Data Model: NoSQL databases use various data models, including
            key-value stores, document stores, columnar stores, and graph
            databases. Each data model is optimized for specific use cases.{" "}
            <br />
            3. Query Language: NoSQL databases often have their own query
            languages or APIs for data retrieval and manipulation. These query
            languages may be less expressive than SQL but offer high performance
            and flexibility for specific data models. <br />
            4. Scalability: NoSQL databases are designed for horizontal
            scalability and can distribute data across multiple servers,
            allowing for high scalability and performance.
          </p>
        </div>
      </div>
      <div className="rounded p-6 mb-10 bg-red-300">
        <h1 className="text-2xl font-bold">
          What is express js? What is Nest JS ?
        </h1>
        <br />
        <p>
          <span className="font-bold">express js</span>
          <br />
          Express.js is a popular web application framework for Node.js, which
          is a JavaScript runtime environment. Express.js provides a
          minimalistic and flexible set of features for building web
          applications and APIs.
        </p>
        <br />
        <p>
          <span className="font-bold">Nest JS</span>
          <br />
          NestJS is a powerful, scalable, and extensible framework for building
          server-side applications with Node.js. It is designed to make the
          development of efficient and maintainable applications easier by
          providing a structured and opinionated approach.
        </p>
      </div>
      <div className="rounded p-6 mb-10 bg-fuchsia-300">
        <h1 className="text-2xl font-bold">
          What is MongoDB aggregate and how does it work ?
        </h1>{" "}
        <br />
        <p>
          In MongoDB, the aggregate function is a powerful tool used to perform
          advanced data aggregation operations on collections. It allows you to
          process and analyze data within the database, transforming and
          combining documents to produce meaningful results. <br />
          <br />
          The aggregate function in MongoDB works by accepting an array of
          stages, where each stage represents a specific operation or
          transformation to be applied to the documents. The stages are
          processed sequentially, with the output of each stage becoming the
          input for the next stage.
        </p>
      </div>
    </div>
  );
};

export default Blog;
