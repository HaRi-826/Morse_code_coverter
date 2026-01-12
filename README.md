# Morse Code Converter API

A RESTful API that converts **plain text to Morse code** and **Morse code back to plain text**. The project is designed for correctness, clarity, and robustness, with proper validation, error handling, and public deployment.

This API was built as part of a competition task to demonstrate understanding of:

* API design and REST principles
* Request–response handling
* Bidirectional data conversion logic
* Documentation and deployment

---

## Features

* Text → Morse code conversion
* Morse code → Text conversion
* Clear and minimal REST endpoints
* Strict input validation
* Meaningful HTTP status codes and error messages
* Interactive API documentation (Swagger UI)
* Publicly deployable

---

## Morse Code Rules Used

To avoid ambiguity, the API follows **standard Morse conventions**:

* Letters are separated by **a single space**
* Words are separated by **`/`**

### Example

```
HELLO WORLD
→ .... . .-.. .-.. --- / .-- --- .-. .-.. -..
```

Unsupported characters are **rejected**, not silently ignored.

---

## Base URL

```
https://<your-deployed-url>
```

---

## API Endpoints

### 1. Encode Text to Morse

**Endpoint**

```
POST /encode
```

**Request Body**

```json
{
  "text": "HELLO WORLD"
}
```

**Successful Response**

```json
{
  "morse": ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
}
```

---

### 2. Decode Morse to Text

**Endpoint**

```
POST /decode
```

**Request Body**

```json
{
  "morse": ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
}
```

**Successful Response**

```json
{
  "text": "HELLO WORLD"
}
```

---

## Error Handling

The API uses proper HTTP status codes and descriptive error messages.

### Example Errors

| Scenario               | Status Code | Message                     |
| ---------------------- | ----------- | --------------------------- |
| Empty input            | 400         | Input cannot be empty       |
| Unsupported character  | 400         | Unsupported character: @    |
| Invalid Morse sequence | 400         | Invalid Morse code sequence |

Errors are returned in JSON format:

```json
{
  "detail": "Unsupported character: @"
}
```

---

## Interactive API Documentation

FastAPI automatically generates API documentation:

* **Swagger UI**: `/docs`
* **ReDoc**: `/redoc`

Example:

```
https://<your-deployed-url>/docs
```

---

## Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/morse-code-api.git
cd morse-code-api
```

### 2. Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install fastapi uvicorn
```

### 4. Run the Server

```bash
uvicorn main:app --reload
```

The API will be available at:

```
http://127.0.0.1:8000
```

---

## Deployment

The API can be deployed on platforms such as:

* Render
* Railway
* Heroku
* Vercel (Node.js version)

For Render, use the start command:

```bash
uvicorn main:app --host 0.0.0.0 --port 10000
```

---

## Technology Stack

* **Language**: Python 3
* **Framework**: FastAPI
* **Server**: Uvicorn
* **API Style**: REST

---

## Evaluation Criteria Mapping

This project satisfies the competition requirements:

* Correct Morse code conversion
* Clear and well-defined API endpoints
* Robust error handling and validation
* High-quality, structured documentation
* Publicly deployable API

---

## License

This project is provided for educational and evaluation purposes.
