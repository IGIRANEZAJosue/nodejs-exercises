# Nodejs Practical question

---

**Question:**

You are tasked with creating a basic Node.js server using the `http` module. The server should be capable of handling two types of requests:

1. **GET Request:** When a user sends a `GET` request to the server, the server should read the contents of a file named `input.txt` located in the same directory as your server script and send its contents as the response.
2. **POST Request:** When a user sends a `POST` request to the server with data in the body, the server should write that data into a file named `output.txt` in the same directory.

You can choose to implement the file operations (reading and writing) either using the standard Node.js `fs` (File System) module or by using streams for handling large files more efficiently.

**Requirements:**

- Create a server using the `http` module.
- Handle `GET` and `POST` requests as described.
- Use the `fs` module to read from and write to files.
- Implement the functionality using streams if you want to handle large files more efficiently.

**Bonus:**

- Ensure that the server returns appropriate status codes and error messages in case of any file operation failures.

---
