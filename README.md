📦 Event-Driven Microservices (Practice)
🚀 Overview

A simple implementation of event-driven architecture using multiple microservices communicating asynchronously via an event bus.

🧩 Services
Post Service – creates posts
Comment Service – handles comments
Moderation Service – filters/approves comments
Query Service – builds read-optimized data
Event Bus – enables async communication
🔄 Flow

Post → Comment → Moderation → Query
(All communication happens via events)

⚙️ Concepts Used
Event-Driven Architecture
Microservices
Async Communication
Loose Coupling
CQRS
Eventual Consistency
🛠️ Tech Stack

Node.js, Express, JavaScript

⚠️ Note
This is a learning project with an in-memory event bus (no persistence).
