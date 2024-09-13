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

# Mental modal session 2

### CRUD exercise

You are tasked with creating a basic Node.js server using Express. The server should allow you to perform basic **CRUD** operations (Create, Read, Update, and Delete) on a collection of items stored in a file (`data.json`). You are required to implement the following endpoints:

1. **GET Request**: Fetch all items from the `data.json` file and return them as a response.
2. **POST Request**: Create a new item by sending data in the request body and appending it to the list of items in `data.json`. Each item should have an `id` field, which should be unique.
3. **PUT Request**: Update an existing item by specifying its `id` in the URL and sending the updated data in the request body.
4. **DELETE Request**: Delete an item by specifying its `id` in the URL, and remove it from `data.json`.

You are free to implement the file operations (reading, writing, and updating) using the standard Node.js `fs` (File System) module. If the file doesn't exist, create it as part of the process.

**Requirements:**

- Create a server using Express.
- Implement CRUD operations as described above.
- Use the `fs` module to handle reading, writing, updating, and deleting from the `data.json` file.
- Ensure each item in `data.json` has a unique `id` (you can generate the id using UUID or by incrementing a counter).
- Return appropriate status codes (200, 201, 404, etc.) based on the outcome of the operations.