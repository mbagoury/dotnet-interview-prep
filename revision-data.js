// ============================================================================
// Senior .NET / Backend Interview Revision Dataset
// 25 Chapters — 75 Important Questions & Answers + Final Checklist & Formula
// ============================================================================

const REVISION_DATA = {
  metadata: {
    title: "Senior .NET / Backend Interview Revision",
    subtitle: "25 Chapters — 75 Important Questions & Answers",
    totalChapters: 25,
    totalQuestions: 75
  },

  chapters: [
    { id: 1, num: "01", name: "Chapter 01 — .NET Architecture", subtitle: "Clean Architecture, N-Tier, Onion, Vertical Slice, CQRS, SOLID", category: "Architecture", icon: "🏛️", qRange: "1–3" },
    { id: 2, num: "02", name: "Chapter 02 — C# Advanced", subtitle: "Class vs Record vs Struct, Generics, Async/Await Internals", category: "Language & Runtime", icon: "⚡", qRange: "4–6" },
    { id: 3, num: "03", name: "Chapter 03 — ASP.NET Core", subtitle: "Middleware Pipeline, Global Exceptions, Dependency Injection", category: "Web APIs", icon: "🌐", qRange: "7–9" },
    { id: 4, num: "04", name: "Chapter 04 — Database Performance", subtitle: "Query Optimization, Indexing Strategies, ACID Transactions", category: "Database", icon: "🗄️", qRange: "10–12" },
    { id: 5, num: "05", name: "Chapter 05 — Entity Framework Core", subtitle: "DbContext Lifetime, Change Tracking, N+1 Problem Prevention", category: "Data Access", icon: "📦", qRange: "13–15" },
    { id: 6, num: "06", name: "Chapter 06 — RESTful APIs", subtitle: "HTTP Semantics, PUT vs PATCH, Idempotency & Keys", category: "Web APIs", icon: "🔗", qRange: "16–18" },
    { id: 7, num: "07", name: "Chapter 07 — Authentication & Authorization", subtitle: "AuthN vs AuthZ, JWT Security Flow, RBAC vs Policy-based", category: "Security", icon: "🔒", qRange: "19–21" },
    { id: 8, num: "08", name: "Chapter 08 — Security", subtitle: "OWASP API Top 10, SQL Injection Defense, CORS vs CSRF", category: "Security", icon: "🛡️", qRange: "22–24" },
    { id: 9, num: "09", name: "Chapter 09 — Caching & Redis", subtitle: "Cache-Aside Pattern, Distributed vs In-Memory, Invalidation", category: "Distributed Systems", icon: "🚀", qRange: "25–27" },
    { id: 10, num: "10", name: "Chapter 10 — Messaging & RabbitMQ", subtitle: "Queues vs Exchanges, Acknowledgements, Dead Letter Queues", category: "Messaging", icon: "📬", qRange: "28–30" },
    { id: 11, num: "11", name: "Chapter 11 — Kafka & Event Streaming", subtitle: "Partitions, Consumer Groups, Offsets vs AMQP ACKs", category: "Messaging", icon: "📊", qRange: "31–33" },
    { id: 12, num: "12", name: "Chapter 12 — Microservices", subtitle: "Service Autonomy, Database-per-Service, Monolith vs Microservices", category: "Architecture", icon: "🧩", qRange: "34–36" },
    { id: 13, num: "13", name: "Chapter 13 — Distributed Systems", subtitle: "CAP Theorem, Consistency Models, Distributed Transactions & Sagas", category: "Distributed Systems", icon: "🌐", qRange: "37–39" },
    { id: 14, num: "14", name: "Chapter 14 — Resilience & Fault Tolerance", subtitle: "Retry vs Circuit Breaker, Timeouts, Rate Limiting Algorithms", category: "Resilience", icon: "🛡️", qRange: "40–42" },
    { id: 15, num: "15", name: "Chapter 15 — Design Patterns", subtitle: "Strategy vs Factory, Adapter Pattern, Decorator Pattern", category: "Design Patterns", icon: "⚙️", qRange: "43–45" },
    { id: 16, num: "16", name: "Chapter 16 — Domain-Driven Design", subtitle: "Entities vs Value Objects, Aggregates & Roots, Domain Events", category: "Architecture", icon: "📐", qRange: "46–48" },
    { id: 17, num: "17", name: "Chapter 17 — CQRS & Event-Driven Architecture", subtitle: "Commands vs Queries, Event-Driven Decoupling, Outbox Pattern", category: "Architecture", icon: "🔄", qRange: "49–51" },
    { id: 18, num: "18", name: "Chapter 18 — Docker & Containers", subtitle: "Images vs Containers, Multi-Stage Builds, Volumes vs Storage", category: "DevOps & Cloud", icon: "🐳", qRange: "52–54" },
    { id: 19, num: "19", name: "Chapter 19 — Kubernetes", subtitle: "Pods vs Deployments, Services vs Pods, ConfigMaps vs Secrets", category: "DevOps & Cloud", icon: "☸️", qRange: "55–57" },
    { id: 20, num: "20", name: "Chapter 20 — CI/CD & DevOps", subtitle: "Pipeline Stages, .NET Build/Test Automation, Deployment Strategies", category: "DevOps & Cloud", icon: "🔁", qRange: "58–60" },
    { id: 21, num: "21", name: "Chapter 21 — Observability & Monitoring", subtitle: "Logs vs Metrics vs Traces, OpenTelemetry, Health Checks", category: "Observability", icon: "📈", qRange: "61–63" },
    { id: 22, num: "22", name: "Chapter 22 — Cloud & Azure", subtitle: "Azure Key Vault, App Service vs AKS, Cloud-Ready Architecture", category: "Cloud & Azure", icon: "☁️", qRange: "64–66" },
    { id: 23, num: "23", name: "Chapter 23 — System Design", subtitle: "High-Traffic API Design, Database Scaling, Async Order Workflow", category: "System Design", icon: "🏗️", qRange: "67–69" },
    { id: 24, num: "24", name: "Chapter 24 — Performance & Scalability", subtitle: "Profiling Bottlenecks, API Scaling, Async Performance Traps", category: "Performance", icon: "⚡", qRange: "70–72" },
    { id: 25, num: "25", name: "Chapter 25 — Senior-Level Architecture & Real-World Scenarios", subtitle: "Unreliable Vendor APIs, Production Incident Response, Explaining to C-Level", category: "Executive Leadership", icon: "👑", qRange: "73–75" }
  ],

  questions: [
    // -------------------------------------------------------------
    // CHAPTER 01 — .NET Architecture
    // -------------------------------------------------------------
    {
      id: "REV-Q1",
      num: 1,
      chapterId: 1,
      chapterTitle: "Chapter 01 — .NET Architecture",
      q: "What is Clean Architecture and why would you use it?",
      shortAnswer: "Clean Architecture separates business rules from infrastructure and frameworks. Dependencies point inward toward the Domain/Application layers, making the system easier to test, maintain, and evolve.",
      detailedAnswer: `<p>Typical layers:</p>
<pre><code class="language-text">Presentation
    ↓
Application
    ↓
Domain

Infrastructure → implements Application interfaces</code></pre>
<ul>
  <li><strong>Domain:</strong> entities, value objects, domain rules</li>
  <li><strong>Application:</strong> use cases, commands, queries, interfaces</li>
  <li><strong>Infrastructure:</strong> EF Core, Redis, external APIs, messaging</li>
  <li><strong>Presentation:</strong> Controllers/endpoints, authentication, HTTP concerns</li>
</ul>
<p>The key principle is <strong>Dependency Inversion</strong>: business logic should not depend directly on infrastructure.</p>`,
      bestPractice: "Keep interfaces needed by the application in Application, and their implementations in Infrastructure.",
      commonMistake: "Putting business logic inside Controllers or EF Core repositories."
    },
    {
      id: "REV-Q2",
      num: 2,
      chapterId: 1,
      chapterTitle: "Chapter 01 — .NET Architecture",
      q: "Clean Architecture vs Vertical Slice Architecture?",
      shortAnswer: "Clean Architecture organizes primarily by technical layers, while Vertical Slice organizes code around business features/use cases.",
      detailedAnswer: `<p><strong>Clean:</strong></p>
<pre><code class="language-text">Application/
  Commands/
  Queries/
Domain/
Infrastructure/
Presentation/</code></pre>
<p><strong>Vertical Slice:</strong></p>
<pre><code class="language-text">Features/
  CreateUser/
    Command.cs
    Handler.cs
    Validator.cs
    Endpoint.cs</code></pre>
<p>Vertical Slice can still use Clean Architecture principles. They are not necessarily competing architectures.</p>`,
      bestPractice: "For large systems, organize features vertically while keeping dependency boundaries clean.",
      commonMistake: "Assuming Vertical Slice means abandoning architecture boundaries."
    },
    {
      id: "REV-Q3",
      num: 3,
      chapterId: 1,
      chapterTitle: "Chapter 01 — .NET Architecture",
      q: "When should you use CQRS?",
      shortAnswer: "Use CQRS when read and write responsibilities have significantly different requirements, complexity, performance characteristics, or scaling needs.",
      detailedAnswer: `<p>CQRS separates:</p>
<pre><code class="language-text">Command → changes state
Query   → reads state</code></pre>
<p>Example:</p>
<pre><code class="language-text">CreateOrderCommand
GetOrderDetailsQuery</code></pre>
<p>CQRS can be implemented without Event Sourcing or separate databases.</p>`,
      bestPractice: "Don't introduce CQRS simply because the application has CRUD operations.",
      commonMistake: "Creating a separate architecture and handler for every trivial CRUD operation without a real benefit."
    },

    // -------------------------------------------------------------
    // CHAPTER 02 — C# Advanced
    // -------------------------------------------------------------
    {
      id: "REV-Q4",
      num: 4,
      chapterId: 2,
      chapterTitle: "Chapter 02 — C# Advanced",
      q: "Class vs Record vs Struct?",
      shortAnswer: "Classes are reference types commonly used for entities; records provide value-based equality and are useful for immutable data; structs are value types suitable for small value objects.",
      detailedAnswer: `<pre><code class="language-csharp">class User
{
}

record UserDto(string Name);

struct Point
{
    public int X { get; set; }
}</code></pre>
<p>Records compare based on values by default.<br>Structs are copied by value and should generally remain small.</p>`,
      bestPractice: "Use records for DTOs/value-oriented data and classes for entities with identity/lifecycle.",
      commonMistake: "Using large mutable structs, which can cause unnecessary copying and confusing behavior."
    },
    {
      id: "REV-Q5",
      num: 5,
      chapterId: 2,
      chapterTitle: "Chapter 02 — C# Advanced",
      q: "Why use generics?",
      shortAnswer: "Generics provide type safety and reusable code without unnecessary boxing or casts.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-csharp">public interface IRepository&lt;T&gt;
{
    Task&lt;T?&gt; GetAsync(Guid id);
}</code></pre>
<p>Instead of:</p>
<pre><code class="language-csharp">object Get(...);</code></pre>
<p>Generics are resolved at compile time and can be highly efficient.</p>`,
      bestPractice: "Use generic abstractions when behavior is genuinely shared.",
      commonMistake: "Making everything generic even when the abstraction doesn't add value."
    },
    {
      id: "REV-Q6",
      num: 6,
      chapterId: 2,
      chapterTitle: "Chapter 02 — C# Advanced",
      q: "Explain async/await.",
      shortAnswer: "async/await allows asynchronous operations without blocking the executing thread while waiting for I/O.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-csharp">public async Task&lt;User&gt; GetUserAsync()
{
    return await db.Users.FirstAsync();
}</code></pre>
<p>While the database is processing the request, the thread can return to the thread pool.</p>`,
      bestPractice: `<code>Task</code>, <code>ValueTask</code> (only when justified), and <code>CancellationToken</code>.<br>Propagate cancellation through application layers.`,
      commonMistake: `<pre><code class="language-csharp">var result = GetAsync().Result;</code></pre>This blocks the thread and can cause scalability problems.`
    },

    // -------------------------------------------------------------
    // CHAPTER 03 — ASP.NET Core
    // -------------------------------------------------------------
    {
      id: "REV-Q7",
      num: 7,
      chapterId: 3,
      chapterTitle: "Chapter 03 — ASP.NET Core",
      q: "How does ASP.NET Core middleware work?",
      shortAnswer: "Middleware forms a pipeline where each component can process the request, call the next middleware, and process the response.",
      detailedAnswer: `<pre><code class="language-text">Request
 ↓
Exception
 ↓
Authentication
 ↓
Authorization
 ↓
Endpoint
 ↓
Response</code></pre>
<p>Example:</p>
<pre><code class="language-csharp">app.UseAuthentication();
app.UseAuthorization();</code></pre>`,
      bestPractice: "Order middleware according to its dependencies.",
      commonMistake: "Putting authentication/authorization middleware in the wrong order."
    },
    {
      id: "REV-Q8",
      num: 8,
      chapterId: 3,
      chapterTitle: "Chapter 03 — ASP.NET Core",
      q: "How do you implement global exception handling?",
      shortAnswer: "Use centralized exception handling rather than repeating try/catch blocks in every controller.",
      detailedAnswer: `<p>Example concept:</p>
<pre><code class="language-text">Exception
   ↓
Global Handler
   ↓
Map exception
   ↓
ProblemDetails</code></pre>
<p>Expected API response:</p>
<pre><code class="language-json">{
  "status": 400,
  "title": "Validation Error"
}</code></pre>`,
      bestPractice: "Use ProblemDetails and consistent error codes.",
      commonMistake: "Returning stack traces or internal exception details to clients."
    },
    {
      id: "REV-Q9",
      num: 9,
      chapterId: 3,
      chapterTitle: "Chapter 03 — ASP.NET Core",
      q: "How does Dependency Injection work in ASP.NET Core?",
      shortAnswer: "ASP.NET Core has a built-in IoC container that resolves registered dependencies and manages their lifetimes.",
      detailedAnswer: `<p>Three common lifetimes:</p>
<pre><code class="language-text">Transient → new instance each resolution
Scoped    → one instance per request
Singleton → one instance for application lifetime</code></pre>
<p>Example:</p>
<pre><code class="language-csharp">services.AddScoped&lt;IUserService, UserService&gt;();</code></pre>`,
      bestPractice: "Use scoped services for request-oriented business services and DbContext.",
      commonMistake: "Injecting a scoped dependency into a singleton."
    },

    // -------------------------------------------------------------
    // CHAPTER 04 — Database Performance
    // -------------------------------------------------------------
    {
      id: "REV-Q10",
      num: 10,
      chapterId: 4,
      chapterTitle: "Chapter 04 — Database Performance",
      q: "How do you optimize a slow SQL query?",
      shortAnswer: "I would inspect the execution plan, indexes, joins, filtering, returned columns, data volume, N+1 problems, and locking/blocking.",
      detailedAnswer: `<ol>
  <li>Execution plan</li>
  <li>Indexes</li>
  <li>Joins</li>
  <li>Filtering</li>
  <li>Returned columns</li>
  <li>Data volume</li>
  <li>N+1 problems</li>
  <li>Locking/blocking</li>
</ol>`,
      bestPractice: "Measure first; don't blindly add indexes.",
      commonMistake: "Assuming the database is slow without checking the execution plan."
    },
    {
      id: "REV-Q11",
      num: 11,
      chapterId: 4,
      chapterTitle: "Chapter 04 — Database Performance",
      q: "When should you create an index?",
      shortAnswer: "Indexes are useful for columns frequently used in filtering, joins, sorting, or uniqueness constraints.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-sql">CREATE INDEX IX_Users_Email
ON Users(Email);</code></pre>
<p>But indexes increase:</p>
<ul>
  <li>Storage</li>
  <li>Insert/update cost</li>
  <li>Maintenance cost</li>
</ul>`,
      bestPractice: "Create indexes based on actual query patterns.",
      commonMistake: "Creating indexes on every column."
    },
    {
      id: "REV-Q12",
      num: 12,
      chapterId: 4,
      chapterTitle: "Chapter 04 — Database Performance",
      q: "What is a database transaction?",
      shortAnswer: "A transaction groups operations into one atomic unit following ACID principles.",
      detailedAnswer: `<pre><code class="language-text">Begin
  Update A
  Update B
Commit</code></pre>
<p>If something fails:</p>
<pre><code class="language-text">Rollback</code></pre>`,
      bestPractice: "Keep transactions short and define the correct isolation level.",
      commonMistake: "Keeping transactions open while calling external services."
    },

    // -------------------------------------------------------------
    // CHAPTER 05 — Entity Framework Core
    // -------------------------------------------------------------
    {
      id: "REV-Q13",
      num: 13,
      chapterId: 5,
      chapterTitle: "Chapter 05 — Entity Framework Core",
      q: "What is DbContext?",
      shortAnswer: "DbContext represents a unit of work with the database and manages entity tracking, queries, and persistence.",
      detailedAnswer: `<p>It handles:</p>
<pre><code class="language-text">Query
Tracking
Change detection
SaveChanges
Transactions</code></pre>`,
      bestPractice: "Normally use one scoped DbContext per request/unit of work.",
      commonMistake: "Registering DbContext as Singleton."
    },
    {
      id: "REV-Q14",
      num: 14,
      chapterId: 5,
      chapterTitle: "Chapter 05 — Entity Framework Core",
      q: "Tracking vs AsNoTracking?",
      shortAnswer: "Tracking allows EF Core to monitor entities for changes. AsNoTracking() is useful for read-only queries.",
      detailedAnswer: `<pre><code class="language-csharp">db.Users
   .AsNoTracking()
   .ToListAsync();</code></pre>`,
      bestPractice: "Use AsNoTracking() for read-only queries where change tracking isn't needed.",
      commonMistake: "Using tracking for every large read query."
    },
    {
      id: "REV-Q15",
      num: 15,
      chapterId: 5,
      chapterTitle: "Chapter 05 — Entity Framework Core",
      q: "How do you avoid EF Core N+1 problems?",
      shortAnswer: "Avoid executing one query for the parent and another query for every child by using Include() or projecting directly with .Select().",
      detailedAnswer: `<p>Instead use <code>Include()</code> or preferably project directly:</p>
<pre><code class="language-csharp">.Select(x =&gt; new UserDto
{
    Id = x.Id,
    Name = x.Name
});</code></pre>`,
      bestPractice: "Prefer projection for API read models.",
      commonMistake: "Calling database queries inside a loop."
    },

    // -------------------------------------------------------------
    // CHAPTER 06 — RESTful APIs
    // -------------------------------------------------------------
    {
      id: "REV-Q16",
      num: 16,
      chapterId: 6,
      chapterTitle: "Chapter 06 — RESTful APIs",
      q: "What makes an API RESTful?",
      shortAnswer: "REST uses resource-oriented URLs, HTTP semantics, stateless requests, and standard methods/status codes.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-text">GET    /users/10
POST   /users
PUT    /users/10
DELETE /users/10</code></pre>`,
      bestPractice: "Use HTTP semantics consistently.",
      commonMistake: `<pre><code class="language-text">POST /GetUser
POST /DeleteUser</code></pre>for everything.`
    },
    {
      id: "REV-Q17",
      num: 17,
      chapterId: 6,
      chapterTitle: "Chapter 06 — RESTful APIs",
      q: "PUT vs PATCH?",
      shortAnswer: "PUT generally represents replacing the complete resource representation. PATCH represents partial modification.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-http">PATCH /users/10</code></pre>
<pre><code class="language-json">{
  "email": "new@email.com"
}</code></pre>`,
      bestPractice: "Use PATCH when partial updates are required.",
      commonMistake: "Calling an endpoint PATCH while actually requiring the complete resource."
    },
    {
      id: "REV-Q18",
      num: 18,
      chapterId: 6,
      chapterTitle: "Chapter 06 — RESTful APIs",
      q: "What is idempotency?",
      shortAnswer: "An operation is idempotent if repeating the same request produces the same intended final state.",
      detailedAnswer: `<p>Examples:</p>
<pre><code class="language-text">GET → idempotent
PUT → normally idempotent
DELETE → normally idempotent
POST → normally not idempotent</code></pre>
<p>For payments/orders, use an idempotency key:</p>
<pre><code class="language-http">Idempotency-Key: abc123</code></pre>`,
      bestPractice: "Persist the key and resulting operation state.",
      commonMistake: "Assuming every POST is safe to retry."
    },

    // -------------------------------------------------------------
    // CHAPTER 07 — Authentication & Authorization
    // -------------------------------------------------------------
    {
      id: "REV-Q19",
      num: 19,
      chapterId: 7,
      chapterTitle: "Chapter 07 — Authentication & Authorization",
      q: "Authentication vs Authorization?",
      shortAnswer: "Authentication verifies who you are. Authorization determines what you are allowed to do.",
      detailedAnswer: `<pre><code class="language-text">Authentication → Who are you?
Authorization  → What are you allowed to do?</code></pre>
<p>Example:</p>
<pre><code class="language-text">JWT authentication
        ↓
Claims
        ↓
Authorization policy</code></pre>`,
      bestPractice: "Keep authentication and authorization separate.",
      commonMistake: "Treating possession of a valid JWT as permission to perform every action."
    },
    {
      id: "REV-Q20",
      num: 20,
      chapterId: 7,
      chapterTitle: "Chapter 07 — Authentication & Authorization",
      q: "JWT authentication flow?",
      shortAnswer: "The client logs in, receives an Access Token from the Identity Provider, sends it via Authorization: Bearer <token>, and the API validates signature, issuer, audience, and expiration.",
      detailedAnswer: `<pre><code class="language-text">Login
 ↓
Identity Provider
 ↓
Access Token
 ↓
Client
 ↓
Authorization: Bearer &lt;token&gt;
 ↓
API validates token
 ↓
Claims</code></pre>
<p>The API validates signature, issuer, audience, expiration, etc.</p>`,
      bestPractice: "Use short-lived access tokens and secure refresh-token handling.",
      commonMistake: "Putting sensitive secrets or unnecessary personal data inside JWT claims."
    },
    {
      id: "REV-Q21",
      num: 21,
      chapterId: 7,
      chapterTitle: "Chapter 07 — Authentication & Authorization",
      q: "RBAC vs Policy-based authorization?",
      shortAnswer: "RBAC grants permissions based on roles. Policy-based authorization evaluates explicit requirements/claims/context.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-text">Role: Admin
Permission: USERS.DELETE</code></pre>
<p>Policy:</p>
<pre><code class="language-csharp">RequireClaim("permission", "USERS.DELETE");</code></pre>`,
      bestPractice: "For complex enterprise systems, policy/permission-based authorization is usually more flexible than hardcoding roles everywhere.",
      commonMistake: `<pre><code class="language-csharp">if (user.Role == "Admin")</code></pre>throughout business code.`
    },

    // -------------------------------------------------------------
    // CHAPTER 08 — Security
    // -------------------------------------------------------------
    {
      id: "REV-Q22",
      num: 22,
      chapterId: 8,
      chapterTitle: "Chapter 08 — Security",
      q: "What are common OWASP API vulnerabilities?",
      shortAnswer: "Important examples: Broken authorization, Injection, Security misconfiguration, Sensitive data exposure, Broken authentication, and Unrestricted resource consumption.",
      detailedAnswer: `<ul>
  <li>Broken authorization</li>
  <li>Injection</li>
  <li>Security misconfiguration</li>
  <li>Sensitive data exposure</li>
  <li>Broken authentication</li>
  <li>Unrestricted resource consumption</li>
</ul>`,
      bestPractice: `<pre><code class="language-text">Input validation
Authentication
Authorization
Rate limiting
Secure headers
Secret management
Logging</code></pre>`,
      commonMistake: "Thinking authentication alone makes an API secure."
    },
    {
      id: "REV-Q23",
      num: 23,
      chapterId: 8,
      chapterTitle: "Chapter 08 — Security",
      q: "How do you prevent SQL Injection?",
      shortAnswer: "Use parameterized queries/ORM APIs rather than concatenating user input into SQL.",
      detailedAnswer: `<p>Bad:</p>
<pre><code class="language-csharp">$"SELECT * FROM Users WHERE Name = '{name}'"</code></pre>
<p>Good:</p>
<pre><code class="language-csharp">context.Users
    .Where(x =&gt; x.Name == name);</code></pre>`,
      bestPractice: "Parameterize every dynamic database value.",
      commonMistake: "Building SQL strings directly from request parameters."
    },
    {
      id: "REV-Q24",
      num: 24,
      chapterId: 8,
      chapterTitle: "Chapter 08 — Security",
      q: "CORS vs CSRF?",
      shortAnswer: "CORS controls which browser origins can access cross-origin resources. CSRF tricks a user's authenticated browser into performing an unwanted action. They solve different problems.",
      detailedAnswer: `<p><strong>CORS:</strong> Controls which browser origins can access cross-origin resources.</p>
<p><strong>CSRF:</strong> Tricks a user's authenticated browser into performing an unwanted action.</p>
<p>They solve completely different security problems.</p>`,
      bestPractice: "Configure CORS narrowly and use appropriate CSRF protection when cookie-based authentication is involved.",
      commonMistake: `Thinking <code>AllowAnyOrigin()</code> is a general security mechanism.`
    },

    // -------------------------------------------------------------
    // CHAPTER 09 — Caching & Redis
    // -------------------------------------------------------------
    {
      id: "REV-Q25",
      num: 25,
      chapterId: 9,
      chapterTitle: "Chapter 09 — Caching & Redis",
      q: "What is Cache-Aside?",
      shortAnswer: "Application checks the cache first; on hit, returns cached data; on miss, loads from DB, writes to cache, and returns.",
      detailedAnswer: `<pre><code class="language-text">Read
 ↓
Cache?
 ├─ Yes → return
 └─ No
      ↓
    Database
      ↓
    Cache
      ↓
    Return</code></pre>`,
      bestPractice: "Define TTL and an explicit invalidation strategy.",
      commonMistake: "Caching data indefinitely."
    },
    {
      id: "REV-Q26",
      num: 26,
      chapterId: 9,
      chapterTitle: "Chapter 09 — Caching & Redis",
      q: "Distributed cache vs in-memory cache?",
      shortAnswer: "In-memory cache lives inside the application instance memory. Distributed cache (like Redis) is external and shared across all instances.",
      detailedAnswer: `<p>In-memory:</p>
<pre><code class="language-text">Application Instance
      ↓
   Memory</code></pre>
<p>Distributed:</p>
<pre><code class="language-text">App 1 ─┐
App 2 ─┼→ Redis
App 3 ─┘</code></pre>
<p>Distributed caching is better when multiple application instances need shared cache state.</p>`,
      bestPractice: "Use Redis or another distributed store for shared cache data.",
      commonMistake: "Using local memory cache for data that must be consistent across instances."
    },
    {
      id: "REV-Q27",
      num: 27,
      chapterId: 9,
      chapterTitle: "Chapter 09 — Caching & Redis",
      q: "What is cache invalidation?",
      shortAnswer: "Cache invalidation removes or updates stale cached data after the underlying source changes.",
      detailedAnswer: `<p>Strategies include:</p>
<pre><code class="language-text">TTL
Explicit deletion
Write-through
Event-driven invalidation
Versioned keys</code></pre>`,
      bestPractice: "Design invalidation together with the data update workflow.",
      commonMistake: "Adding caching without deciding how stale data will be handled."
    },

    // -------------------------------------------------------------
    // CHAPTER 10 — Messaging & RabbitMQ
    // -------------------------------------------------------------
    {
      id: "REV-Q28",
      num: 28,
      chapterId: 10,
      chapterTitle: "Chapter 10 — Messaging & RabbitMQ",
      q: "Queue vs Exchange in RabbitMQ?",
      shortAnswer: "The exchange routes messages according to bindings/keys; the queue stores messages until consumed.",
      detailedAnswer: `<pre><code class="language-text">Producer
   ↓
Exchange
   ↓
Routing
   ↓
Queue
   ↓
Consumer</code></pre>
<p>The exchange routes messages; the queue stores messages until consumed.</p>`,
      bestPractice: "Use exchanges and routing keys according to the message topology.",
      commonMistake: "Thinking producers normally send directly to queues."
    },
    {
      id: "REV-Q29",
      num: 29,
      chapterId: 10,
      chapterTitle: "Chapter 10 — Messaging & RabbitMQ",
      q: "What are acknowledgements?",
      shortAnswer: "Acknowledgement tells RabbitMQ that the consumer successfully processed a message. If processing fails, the message can be retried/requeued or dead-lettered.",
      detailedAnswer: `<p>Acknowledgement confirms that message consumption succeeded and that the broker can safely delete it. Without ACK (or on NACK), the broker can requeue or route to a dead-letter queue.</p>`,
      bestPractice: "Acknowledge only after successful processing.",
      commonMistake: "Acknowledging before business processing finishes."
    },
    {
      id: "REV-Q30",
      num: 30,
      chapterId: 10,
      chapterTitle: "Chapter 10 — Messaging & RabbitMQ",
      q: "What is a Dead Letter Queue?",
      shortAnswer: "A DLQ stores messages that cannot be successfully processed after defined failure conditions.",
      detailedAnswer: `<pre><code class="language-text">Queue
 ↓
Consumer
 ↓
Failure
 ↓
Retry
 ↓
Failure
 ↓
DLQ</code></pre>`,
      bestPractice: "Monitor DLQs and provide a controlled replay process.",
      commonMistake: "Using a DLQ as a permanent garbage bin."
    },

    // -------------------------------------------------------------
    // CHAPTER 11 — Kafka & Event Streaming
    // -------------------------------------------------------------
    {
      id: "REV-Q31",
      num: 31,
      chapterId: 11,
      chapterTitle: "Chapter 11 — Kafka & Event Streaming",
      q: "What is a Kafka partition?",
      shortAnswer: "A partition is an ordered append-only log within a Kafka topic, providing parallelism and scalability.",
      detailedAnswer: `<pre><code class="language-text">Topic
 ├── Partition 0
 ├── Partition 1
 └── Partition 2</code></pre>
<p>Partitions provide parallelism and scalability.</p>`,
      bestPractice: "Choose the partition key carefully when ordering matters.",
      commonMistake: "Assuming Kafka guarantees ordering across the entire topic."
    },
    {
      id: "REV-Q32",
      num: 32,
      chapterId: 11,
      chapterTitle: "Chapter 11 — Kafka & Event Streaming",
      q: "What is a consumer group?",
      shortAnswer: "A consumer group allows multiple consumers to share partitions so that each partition is processed by only one consumer at a time.",
      detailedAnswer: `<pre><code class="language-text">Partition 0 → Consumer A
Partition 1 → Consumer B
Partition 2 → Consumer C</code></pre>
<p>Within one consumer group, a partition is assigned to one consumer at a time.</p>`,
      bestPractice: "Scale consumers according to partition count and workload.",
      commonMistake: "Creating more consumers than partitions and expecting unlimited parallelism."
    },
    {
      id: "REV-Q33",
      num: 33,
      chapterId: 11,
      chapterTitle: "Chapter 11 — Kafka & Event Streaming",
      q: "Kafka offset vs RabbitMQ acknowledgement?",
      shortAnswer: "Kafka consumers track positions using offsets in an append-only log, enabling replay. RabbitMQ consumers acknowledge individual messages, which are removed upon ACK.",
      detailedAnswer: `<p>Kafka:</p>
<pre><code class="language-text">Partition → Offset</code></pre>
<p>RabbitMQ:</p>
<pre><code class="language-text">Message → ACK</code></pre>
<p>Kafka enables consumers to replay from earlier offsets.</p>`,
      bestPractice: "Design processing around delivery semantics and idempotency.",
      commonMistake: "Assuming either system automatically gives exactly-once business processing."
    },

    // -------------------------------------------------------------
    // CHAPTER 12 — Microservices
    // -------------------------------------------------------------
    {
      id: "REV-Q34",
      num: 34,
      chapterId: 12,
      chapterTitle: "Chapter 12 — Microservices",
      q: "What defines a microservice?",
      shortAnswer: "A microservice is a relatively autonomous service responsible for a well-defined business capability and capable of independent deployment.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-text">Order Service
Payment Service
Inventory Service
Notification Service</code></pre>`,
      bestPractice: "Define boundaries around business capabilities, not database tables.",
      commonMistake: "Creating dozens of tiny services with strong dependencies between them."
    },
    {
      id: "REV-Q35",
      num: 35,
      chapterId: 12,
      chapterTitle: "Chapter 12 — Microservices",
      q: "Database-per-service: why?",
      shortAnswer: "Each service owns its data, preventing direct database coupling between services and allowing independent schema evolution and scaling.",
      detailedAnswer: `<pre><code class="language-text">Order Service → Order DB
Payment Service → Payment DB</code></pre>
<p>Communication occurs through APIs/events.</p>`,
      bestPractice: "Treat service data as private implementation detail.",
      commonMistake: `<pre><code class="language-text">Order Service ─┐
Payment Service├→ Same DB tables
Inventory ─────┘</code></pre>This creates distributed monolith characteristics.`
    },
    {
      id: "REV-Q36",
      num: 36,
      chapterId: 12,
      chapterTitle: "Chapter 12 — Microservices",
      q: "Microservices vs Monolith?",
      shortAnswer: "A monolith is simpler to develop and operate initially. Microservices provide independent deployment and scaling but introduce distributed-system complexity.",
      detailedAnswer: `<p>Microservices introduce:</p>
<pre><code class="language-text">Network failures
Distributed tracing
Service discovery
Message delivery
Data consistency
Deployment complexity</code></pre>`,
      bestPractice: "Start with the simplest architecture that satisfies actual requirements.",
      commonMistake: "Choosing microservices simply because they are considered more modern."
    },

    // -------------------------------------------------------------
    // CHAPTER 13 — Distributed Systems
    // -------------------------------------------------------------
    {
      id: "REV-Q37",
      num: 37,
      chapterId: 13,
      chapterTitle: "Chapter 13 — Distributed Systems",
      q: "Explain CAP theorem.",
      shortAnswer: "When a network partition occurs, a distributed system must choose between strong consistency and availability.",
      detailedAnswer: `<pre><code class="language-text">C = Consistency
A = Availability
P = Partition tolerance</code></pre>
<p>In a real distributed system, network partitions must be tolerated, so the design involves consistency/availability trade-offs.</p>`,
      bestPractice: "Discuss CAP in terms of actual failure scenarios rather than simply saying 'choose two.'",
      commonMistake: "Claiming a normal standalone database must choose two of C/A/P at all times."
    },
    {
      id: "REV-Q38",
      num: 38,
      chapterId: 13,
      chapterTitle: "Chapter 13 — Distributed Systems",
      q: "Strong vs eventual consistency?",
      shortAnswer: "Strong consistency means reads reflect the latest committed state. Eventual consistency means replicas may temporarily differ but converge over time.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-text">Write → Service A
        ↓
   Event
        ↓
Service B</code></pre>
<p>B may temporarily contain older data.</p>`,
      bestPractice: "Use eventual consistency where the business process can tolerate it.",
      commonMistake: "Using eventual consistency for operations that require immediate correctness without compensating logic."
    },
    {
      id: "REV-Q39",
      num: 39,
      chapterId: 13,
      chapterTitle: "Chapter 13 — Distributed Systems",
      q: "How do you handle distributed transactions?",
      shortAnswer: "Avoid distributed database transactions (2PC) when possible. Prefer patterns such as Saga, Outbox, Idempotency, Compensation, and Event-driven workflows.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-text">Order Created
 ↓
Payment
 ↓
Inventory</code></pre>
<p>If inventory fails, execute a compensating action.</p>`,
      bestPractice: "Design workflows for partial failure.",
      commonMistake: "Trying to make multiple microservices behave like one local database transaction."
    },

    // -------------------------------------------------------------
    // CHAPTER 14 — Resilience & Fault Tolerance
    // -------------------------------------------------------------
    {
      id: "REV-Q40",
      num: 40,
      chapterId: 14,
      chapterTitle: "Chapter 14 — Resilience & Fault Tolerance",
      q: "Retry vs Circuit Breaker?",
      shortAnswer: "Retry handles transient failures. Circuit breaker prevents repeatedly calling a failing dependency to protect both client and downstream services.",
      detailedAnswer: `<pre><code class="language-text">Retry:
Request → Fail → Retry

Circuit Breaker:
Healthy → Open failure threshold → Open → Stop calls</code></pre>`,
      bestPractice: "Combine timeout + limited retry + circuit breaker where appropriate.",
      commonMistake: "Retrying every failure indefinitely."
    },
    {
      id: "REV-Q41",
      num: 41,
      chapterId: 14,
      chapterTitle: "Chapter 14 — Resilience & Fault Tolerance",
      q: "Why are timeouts important?",
      shortAnswer: "Without a timeout, a dependency can hold resources indefinitely and cause thread/request exhaustion.",
      detailedAnswer: `<pre><code class="language-text">API
 ↓
External Service
 ↓
Timeout</code></pre>`,
      bestPractice: "Define explicit timeouts for external calls.",
      commonMistake: "Using an extremely long global timeout."
    },
    {
      id: "REV-Q42",
      num: 42,
      chapterId: 14,
      chapterTitle: "Chapter 14 — Resilience & Fault Tolerance",
      q: "What is rate limiting?",
      shortAnswer: "Rate limiting controls how many requests a client can make during a period.",
      detailedAnswer: `<p>Example: 100 requests/minute/client</p>
<p>Algorithms include:</p>
<pre><code class="language-text">Fixed Window
Sliding Window
Token Bucket
Concurrency Limiting</code></pre>`,
      bestPractice: "Rate-limit expensive and abuse-prone endpoints.",
      commonMistake: "Using rate limiting as a replacement for authentication/authorization."
    },

    // -------------------------------------------------------------
    // CHAPTER 15 — Design Patterns
    // -------------------------------------------------------------
    {
      id: "REV-Q43",
      num: 43,
      chapterId: 15,
      chapterTitle: "Chapter 15 — Design Patterns",
      q: "Strategy vs Factory?",
      shortAnswer: "Strategy encapsulates interchangeable behavior. Factory decides which object/strategy to create.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-text">PaymentStrategy
 ├── VisaPayment
 ├── MadaPayment
 └── ApplePayPayment</code></pre>
<p>Factory:</p>
<pre><code class="language-text">PaymentStrategyFactory
        ↓
Select implementation</code></pre>`,
      bestPractice: "Use Strategy when behavior varies; Factory when creation/selection varies.",
      commonMistake: "Using factories everywhere just to avoid new."
    },
    {
      id: "REV-Q44",
      num: 44,
      chapterId: 15,
      chapterTitle: "Chapter 15 — Design Patterns",
      q: "Adapter pattern?",
      shortAnswer: "Adapter converts one interface into another interface expected by your application.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-text">Application
    ↓
IPaymentGateway
    ↓
Adapter
    ↓
External Payment API</code></pre>`,
      bestPractice: "Use adapters to isolate external vendor APIs from business logic.",
      commonMistake: "Allowing vendor-specific DTOs to leak throughout the application."
    },
    {
      id: "REV-Q45",
      num: 45,
      chapterId: 15,
      chapterTitle: "Chapter 15 — Design Patterns",
      q: "Decorator pattern?",
      shortAnswer: "Decorator adds behavior around an existing implementation without modifying it.",
      detailedAnswer: `<pre><code class="language-text">Logging
   ↓
Retry
   ↓
Real Service</code></pre>
<p>Example:</p>
<pre><code class="language-text">IIntegrationHttpClient
    ↓
LoggingDecorator
    ↓
RetryDecorator
    ↓
Implementation</code></pre>`,
      bestPractice: "Use decorators for cross-cutting concerns.",
      commonMistake: "Creating deeply nested decorators that become difficult to understand."
    },

    // -------------------------------------------------------------
    // CHAPTER 16 — Domain-Driven Design
    // -------------------------------------------------------------
    {
      id: "REV-Q46",
      num: 46,
      chapterId: 16,
      chapterTitle: "Chapter 16 — Domain-Driven Design",
      q: "Entity vs Value Object?",
      shortAnswer: "An Entity has identity and lifecycle. A Value Object is defined by its attributes/values and is immutable.",
      detailedAnswer: `<p>Entity: <code>User Id = 10</code></p>
<p>Value Object: <code>Money(100, "USD")</code></p>`,
      bestPractice: "Use value objects to encapsulate domain concepts and validation.",
      commonMistake: "Representing every meaningful domain concept as primitive strings/integers."
    },
    {
      id: "REV-Q47",
      num: 47,
      chapterId: 16,
      chapterTitle: "Chapter 16 — Domain-Driven Design",
      q: "What is an Aggregate?",
      shortAnswer: "An Aggregate is a consistency boundary containing related domain objects and controlled by an Aggregate Root.",
      detailedAnswer: `<pre><code class="language-text">Order
 ├── OrderLines
 └── ShippingInfo</code></pre>
<p>The application interacts with the aggregate through the root.</p>`,
      bestPractice: "Keep aggregates small enough to support practical transactional consistency.",
      commonMistake: "Creating huge aggregates containing the entire business model."
    },
    {
      id: "REV-Q48",
      num: 48,
      chapterId: 16,
      chapterTitle: "Chapter 16 — Domain-Driven Design",
      q: "What is a Domain Event?",
      shortAnswer: "A domain event represents something meaningful that happened in the domain.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-text">OrderPlaced
PaymentCompleted
UserRegistered</code></pre>
<p>It allows other processes to react without tightly coupling the original operation.</p>`,
      bestPractice: "Use domain events for business-significant events, not every technical action.",
      commonMistake: "Putting infrastructure logic directly inside the domain entity."
    },

    // -------------------------------------------------------------
    // CHAPTER 17 — CQRS & Event-Driven Architecture
    // -------------------------------------------------------------
    {
      id: "REV-Q49",
      num: 49,
      chapterId: 17,
      chapterTitle: "Chapter 17 — CQRS & Event-Driven Architecture",
      q: "Command vs Query?",
      shortAnswer: "Command changes state. Query reads state.",
      detailedAnswer: `<pre><code class="language-text">Command → changes state
Query   → reads state</code></pre>
<p>Command: <code>CreateUserCommand</code></p>
<p>Query: <code>GetUserQuery</code></p>
<p>Commands should express business intent.</p>`,
      bestPractice: "Keep handlers focused on one use case.",
      commonMistake: "Creating commands that are merely database CRUD wrappers with no meaningful behavior."
    },
    {
      id: "REV-Q50",
      num: 50,
      chapterId: 17,
      chapterTitle: "Chapter 17 — CQRS & Event-Driven Architecture",
      q: "What is Event-Driven Architecture?",
      shortAnswer: "Components communicate through events representing facts that have occurred, reducing synchronous coupling.",
      detailedAnswer: `<pre><code class="language-text">Order Service
      ↓
OrderCreated
      ↓
 ┌────┴─────┐
 ↓          ↓
Payment   Notification</code></pre>
<p>This reduces synchronous coupling.</p>`,
      bestPractice: "Define clear event contracts and delivery/retry semantics.",
      commonMistake: "Treating events as remote method calls."
    },
    {
      id: "REV-Q51",
      num: 51,
      chapterId: 17,
      chapterTitle: "Chapter 17 — CQRS & Event-Driven Architecture",
      q: "What is the Outbox Pattern?",
      shortAnswer: "The Outbox Pattern solves the problem of atomically updating database state and publishing an event.",
      detailedAnswer: `<p>Without Outbox:</p>
<pre><code class="language-text">DB Commit ✓
Event Publish ✗</code></pre>
<p>State changed but event was lost.</p>
<p>With Outbox:</p>
<pre><code class="language-text">Transaction
 ├── Business Data
 └── Outbox Event
       ↓
Committed
       ↓
Publisher
       ↓
Message Broker</code></pre>`,
      bestPractice: "Use an idempotent publisher/consumer strategy.",
      commonMistake: "Assuming the Outbox automatically provides exactly-once business processing."
    },

    // -------------------------------------------------------------
    // CHAPTER 18 — Docker & Containers
    // -------------------------------------------------------------
    {
      id: "REV-Q52",
      num: 52,
      chapterId: 18,
      chapterTitle: "Chapter 18 — Docker & Containers",
      q: "Image vs Container?",
      shortAnswer: "An Image is an immutable template; a Container is a running instance of an image.",
      detailedAnswer: `<pre><code class="language-text">Image = immutable template
Container = running instance of image</code></pre>
<p>Example:</p>
<pre><code class="language-text">.NET Image
    ↓
Container 1
Container 2</code></pre>`,
      bestPractice: "Build immutable versioned images.",
      commonMistake: "Treating containers like long-lived virtual machines."
    },
    {
      id: "REV-Q53",
      num: 53,
      chapterId: 18,
      chapterTitle: "Chapter 18 — Docker & Containers",
      q: "Why use multi-stage Docker builds?",
      shortAnswer: "They separate build dependencies from the final runtime image, resulting in a much smaller and more secure runtime container.",
      detailedAnswer: `<pre><code class="language-text">SDK Image
   ↓
Build
   ↓
Publish
   ↓
Runtime Image</code></pre>
<p>This produces a smaller runtime image.</p>`,
      bestPractice: "Use the smallest suitable runtime image and run as a non-root user where practical.",
      commonMistake: "Shipping the complete SDK/toolchain in production."
    },
    {
      id: "REV-Q54",
      num: 54,
      chapterId: 18,
      chapterTitle: "Chapter 18 — Docker & Containers",
      q: "Docker volume vs container filesystem?",
      shortAnswer: "Container filesystem data normally disappears when the container is removed. Volumes persist independently on the host or storage provider.",
      detailedAnswer: `<pre><code class="language-text">Container
    ↓
Volume
    ↓
Persistent Data</code></pre>`,
      bestPractice: "Use volumes for stateful data that must survive container recreation.",
      commonMistake: "Storing important database data only inside the container layer."
    },

    // -------------------------------------------------------------
    // CHAPTER 19 — Kubernetes
    // -------------------------------------------------------------
    {
      id: "REV-Q55",
      num: 55,
      chapterId: 19,
      chapterTitle: "Chapter 19 — Kubernetes",
      q: "Pod vs Deployment?",
      shortAnswer: "A Pod is the smallest deployable Kubernetes unit. A Deployment manages replicated Pods, self-healing, and rolling updates.",
      detailedAnswer: `<pre><code class="language-text">Deployment
    ↓
ReplicaSet
    ↓
Pods</code></pre>`,
      bestPractice: "Usually manage application Pods through Deployments rather than creating standalone Pods.",
      commonMistake: "Treating Pods as permanent servers."
    },
    {
      id: "REV-Q56",
      num: 56,
      chapterId: 19,
      chapterTitle: "Chapter 19 — Kubernetes",
      q: "Service vs Pod?",
      shortAnswer: "Pods are ephemeral and their IPs can change. A Service provides a stable network endpoint and load balancing for a group of Pods.",
      detailedAnswer: `<pre><code class="language-text">Client
  ↓
Service
  ↓
Pod
Pod
Pod</code></pre>`,
      bestPractice: "Use Services for stable internal/external connectivity.",
      commonMistake: "Calling Pod IPs directly from application configuration."
    },
    {
      id: "REV-Q57",
      num: 57,
      chapterId: 19,
      chapterTitle: "Chapter 19 — Kubernetes",
      q: "ConfigMap vs Secret?",
      shortAnswer: "ConfigMap stores non-sensitive configuration; Secret stores sensitive configuration (e.g., credentials, tokens).",
      detailedAnswer: `<pre><code class="language-text">ConfigMap → non-sensitive configuration
Secret    → sensitive configuration</code></pre>
<p>Examples:</p>
<pre><code class="language-text">ConfigMap:
Environment=Production

Secret:
DatabasePassword</code></pre>`,
      bestPractice: "Use external secret management for high-security production environments where appropriate.",
      commonMistake: "Committing Kubernetes Secret manifests containing real credentials into Git."
    },

    // -------------------------------------------------------------
    // CHAPTER 20 — CI/CD & DevOps
    // -------------------------------------------------------------
    {
      id: "REV-Q58",
      num: 58,
      chapterId: 20,
      chapterTitle: "Chapter 20 — CI/CD & DevOps",
      q: "What is CI/CD?",
      shortAnswer: "CI automates code merging, building, and testing. CD automates packaging, deploying, and verifying releases.",
      detailedAnswer: `<p>CI:</p>
<pre><code class="language-text">Commit
 ↓
Build
 ↓
Test
 ↓
Quality checks</code></pre>
<p>CD:</p>
<pre><code class="language-text">Artifact
 ↓
Deploy
 ↓
Verify</code></pre>`,
      bestPractice: "Automate tests and deployments with environment-specific configuration.",
      commonMistake: "Allowing production deployment to depend on undocumented manual steps."
    },
    {
      id: "REV-Q59",
      num: 59,
      chapterId: 20,
      chapterTitle: "Chapter 20 — CI/CD & DevOps",
      q: "What should a .NET CI pipeline contain?",
      shortAnswer: "Restore, Build, Unit Tests, Integration Tests, Static Analysis, Publish, Docker Build, Push Image, Deploy.",
      detailedAnswer: `<p>A typical pipeline:</p>
<pre><code class="language-text">Restore
 ↓
Build
 ↓
Unit Tests
 ↓
Integration Tests
 ↓
Static Analysis
 ↓
Publish
 ↓
Docker Build
 ↓
Push Image
 ↓
Deploy</code></pre>`,
      bestPractice: "Fail fast and publish immutable artifacts.",
      commonMistake: "Building a different artifact for each environment."
    },
    {
      id: "REV-Q60",
      num: 60,
      chapterId: 20,
      chapterTitle: "Chapter 20 — CI/CD & DevOps",
      q: "Blue-Green vs Rolling Deployment?",
      shortAnswer: "Blue-Green maintains two identical environments and switches traffic after validation. Rolling deployment gradually replaces old instances with new ones.",
      detailedAnswer: `<p>Blue-Green:</p>
<pre><code class="language-text">Blue = Current
Green = New</code></pre>
<p>Switch traffic after validation.<br>Rolling deployment gradually replaces old instances.</p>`,
      bestPractice: "Choose based on downtime, infrastructure cost, rollback requirements, and application compatibility.",
      commonMistake: "Assuming zero-downtime deployment is possible without backward-compatible APIs/database changes."
    },

    // -------------------------------------------------------------
    // CHAPTER 21 — Observability & Monitoring
    // -------------------------------------------------------------
    {
      id: "REV-Q61",
      num: 61,
      chapterId: 21,
      chapterTitle: "Chapter 21 — Observability & Monitoring",
      q: "Logs vs Metrics vs Traces?",
      shortAnswer: "Logs tell what happened; Metrics tell how much/how often; Traces tell where the request spent time across distributed components.",
      detailedAnswer: `<pre><code class="language-text">Logs   → What happened?
Metrics → How much/how often?
Traces → Where did the request spend time?</code></pre>
<p>Example:</p>
<pre><code class="language-text">Request
 ↓
API
 ↓
Redis
 ↓
Database
 ↓
External API</code></pre>
<p>Distributed tracing connects these operations.</p>`,
      bestPractice: "Use correlation/trace IDs across services.",
      commonMistake: "Logging everything without structured fields or correlation identifiers."
    },
    {
      id: "REV-Q62",
      num: 62,
      chapterId: 21,
      chapterTitle: "Chapter 21 — Observability & Monitoring",
      q: "What is OpenTelemetry?",
      shortAnswer: "OpenTelemetry is a vendor-neutral observability framework for collecting telemetry such as traces, metrics, and logs and exporting them to supported backends.",
      detailedAnswer: `<p>Typical flow:</p>
<pre><code class="language-text">.NET API
   ↓
OpenTelemetry
   ↓
Collector
   ↓
Observability Backend</code></pre>`,
      bestPractice: "Instrument HTTP, database, messaging, and important application operations.",
      commonMistake: "Adding tracing without propagating context between services."
    },
    {
      id: "REV-Q63",
      num: 63,
      chapterId: 21,
      chapterTitle: "Chapter 21 — Observability & Monitoring",
      q: "What are health checks?",
      shortAnswer: "Health checks expose application health information to monitoring/orchestration systems, distinguishing liveness from readiness.",
      detailedAnswer: `<p>Common types:</p>
<pre><code class="language-text">Liveness  → Is the process alive?
Readiness → Can it serve traffic?</code></pre>`,
      bestPractice: "Don't make liveness dependent on every external dependency.",
      commonMistake: "If Redis temporarily fails, marking the whole process as dead when it could still serve some requests."
    },

    // -------------------------------------------------------------
    // CHAPTER 22 — Cloud & Azure
    // -------------------------------------------------------------
    {
      id: "REV-Q64",
      num: 64,
      chapterId: 22,
      chapterTitle: "Chapter 22 — Cloud & Azure",
      q: "What is Azure Key Vault used for?",
      shortAnswer: "Key Vault securely stores and manages secrets, keys, and certificates.",
      detailedAnswer: `<p>Examples:</p>
<pre><code class="language-text">Database credentials
API keys
Certificates
Encryption keys</code></pre>`,
      bestPractice: "Use managed identity where supported instead of embedding credentials.",
      commonMistake: "Putting production secrets directly in appsettings.json or source control."
    },
    {
      id: "REV-Q65",
      num: 65,
      chapterId: 22,
      chapterTitle: "Chapter 22 — Cloud & Azure",
      q: "App Service vs AKS?",
      shortAnswer: "Azure App Service is a managed platform for hosting applications. AKS provides Kubernetes orchestration with greater control and complexity.",
      detailedAnswer: `<pre><code class="language-text">App Service → simpler PaaS
AKS         → Kubernetes platform</code></pre>`,
      bestPractice: "Choose AKS when Kubernetes capabilities are actually needed.",
      commonMistake: "Using Kubernetes solely because the application has multiple APIs."
    },
    {
      id: "REV-Q66",
      num: 66,
      chapterId: 22,
      chapterTitle: "Chapter 22 — Cloud & Azure",
      q: "How would you design a cloud-ready .NET API?",
      shortAnswer: "Design for stateless application instances, externalize shared state to Redis/DB, use managed identities, health checks, autoscaling, and centralized telemetry.",
      detailedAnswer: `<p>Consider:</p>
<pre><code class="language-text">Load Balancer
      ↓
Multiple API instances
      ↓
Redis
      ↓
Database
      ↓
Message Broker</code></pre>
<p>Plus:</p>
<pre><code class="language-text">Key Vault
Monitoring
Tracing
Auto Scaling
Health Checks
CI/CD</code></pre>`,
      bestPractice: "Design for stateless application instances and externalize shared state.",
      commonMistake: "Keeping session/state only in one application instance."
    },

    // -------------------------------------------------------------
    // CHAPTER 23 — System Design
    // -------------------------------------------------------------
    {
      id: "REV-Q67",
      num: 67,
      chapterId: 23,
      chapterTitle: "Chapter 23 — System Design",
      q: "How would you design a high-traffic API?",
      shortAnswer: "Start with clear requirements, introduce load balancing, horizontal scaling, caching layers, efficient database indexing, rate limiting, and offload asynchronous jobs to background queues.",
      detailedAnswer: `<p>Start with requirements. Then:</p>
<pre><code class="language-text">Client
 ↓
Load Balancer
 ↓
API Instances
 ↓
Cache
 ↓
Database</code></pre>
<p>For asynchronous work:</p>
<pre><code class="language-text">API
 ↓
Queue
 ↓
Workers</code></pre>
<p>Add: Rate limiting, Caching, Database indexes, Horizontal scaling, Observability, Resilience.</p>`,
      bestPractice: "Identify bottlenecks before selecting technologies.",
      commonMistake: "Starting the design with 'we should use microservices/Kafka/Kubernetes.'"
    },
    {
      id: "REV-Q68",
      num: 68,
      chapterId: 23,
      chapterTitle: "Chapter 23 — System Design",
      q: "How do you scale a database?",
      shortAnswer: "Options include indexes, query optimization, caching, read replicas, partitioning, sharding, archiving, and connection pooling. First optimize queries and schema before introducing complex distributed database strategies.",
      detailedAnswer: `<p>Options include:</p>
<pre><code class="language-text">Indexes
Query optimization
Caching
Read replicas
Partitioning
Sharding
Archiving
Connection pooling</code></pre>
<p>First optimize queries and schema before introducing complex distributed database strategies.</p>`,
      bestPractice: "Scale according to the actual bottleneck.",
      commonMistake: "Immediately choosing sharding without proving the need."
    },
    {
      id: "REV-Q69",
      num: 69,
      chapterId: 23,
      chapterTitle: "Chapter 23 — System Design",
      q: "How would you design an asynchronous order system?",
      shortAnswer: "The client calls the Order API which commits order data and an outbox event in one transaction; a publisher pushes to a message broker, which triggers independent Payment, Inventory, and Notification workers with idempotency and compensation.",
      detailedAnswer: `<p>Example:</p>
<pre><code class="language-text">Client
  ↓
Order API
  ↓
Database
  ↓
Outbox
  ↓
Message Broker
  ↓
Payment
  ↓
Inventory
  ↓
Notification</code></pre>
<p>Use: Idempotency, Retry, DLQ, Outbox, Saga/compensation, Distributed tracing.</p>`,
      bestPractice: "Assume messages can be duplicated and services can fail independently.",
      commonMistake: "Designing as though every network operation succeeds exactly once."
    },

    // -------------------------------------------------------------
    // CHAPTER 24 — Performance & Scalability
    // -------------------------------------------------------------
    {
      id: "REV-Q70",
      num: 70,
      chapterId: 24,
      chapterTitle: "Chapter 24 — Performance & Scalability",
      q: "How do you investigate a slow .NET API?",
      shortAnswer: "Use a structured approach: measure, trace request, check DB, check external calls, inspect CPU/memory/allocations, profile, and optimize based on telemetry data.",
      detailedAnswer: `<pre><code class="language-text">Measure
 ↓
Trace request
 ↓
Check DB
 ↓
Check external calls
 ↓
Check CPU/memory
 ↓
Check allocations
 ↓
Profile
 ↓
Optimize</code></pre>
<p>Look for: Slow SQL, N+1, Excessive serialization, Blocking calls, Large payloads, External API latency, Lock contention.</p>`,
      bestPractice: "Use profiling and telemetry rather than guessing.",
      commonMistake: "Adding caching before identifying the actual bottleneck."
    },
    {
      id: "REV-Q71",
      num: 71,
      chapterId: 24,
      chapterTitle: "Chapter 24 — Performance & Scalability",
      q: "How do you improve API scalability?",
      shortAnswer: "Non-blocking async I/O, horizontal scaling, caching, pagination, connection pooling, efficient DB queries, background workers, rate limiting, and response compression.",
      detailedAnswer: `<p>Techniques:</p>
<pre><code class="language-text">Async I/O
Horizontal scaling
Caching
Pagination
Connection pooling
Efficient DB queries
Background processing
Rate limiting
Compression where appropriate</code></pre>
<p>Keep APIs stateless where possible.</p>`,
      bestPractice: "Separate synchronous request work from expensive asynchronous work.",
      commonMistake: "Increasing server CPU/memory indefinitely instead of addressing the bottleneck."
    },
    {
      id: "REV-Q72",
      num: 72,
      chapterId: 24,
      chapterTitle: "Chapter 24 — Performance & Scalability",
      q: "How can async code still become slow?",
      shortAnswer: "Asynchronous code doesn't make operations faster by itself. Latency arises from too many external calls, sequential awaits, slow database queries, lock contention, thread pool starvation from sync-over-async blocking, and large memory allocations.",
      detailedAnswer: `<p>Problems can include:</p>
<pre><code class="language-text">Too many external calls
Sequential awaits
Slow database
Lock contention
Thread pool starvation from blocking code
Large allocations</code></pre>
<p>For independent operations:</p>
<pre><code class="language-csharp">var aTask = GetAAsync();
var bTask = GetBAsync();

await Task.WhenAll(aTask, bTask);</code></pre>`,
      bestPractice: "Parallelize independent I/O operations carefully.",
      commonMistake: "Running unlimited concurrent operations and overwhelming the dependency."
    },

    // -------------------------------------------------------------
    // CHAPTER 25 — Senior-Level Architecture & Real-World Scenarios
    // -------------------------------------------------------------
    {
      id: "REV-Q73",
      num: 73,
      chapterId: 25,
      chapterTitle: "Chapter 25 — Senior-Level Architecture & Real-World Scenarios",
      q: "An external API is unreliable. How would you design the integration?",
      shortAnswer: "Isolate the external API behind an adapter and application interface, then apply Timeout, Retry, Circuit Breaker, Logging, Correlation ID, and Rate Limiting.",
      detailedAnswer: `<p>I would isolate the external API behind an adapter:</p>
<pre><code class="language-text">Application
     ↓
IExternalService
     ↓
Adapter
     ↓
HTTP Client
     ↓
External API</code></pre>
<p>Then add:</p>
<pre><code class="language-text">Request
 ↓
Timeout
 ↓
Retry
 ↓
Circuit Breaker
 ↓
External API</code></pre>`,
      bestPractice: "Keep vendor-specific DTOs and behavior inside Infrastructure.",
      commonMistake: "Allowing external API models to spread through Domain/Application."
    },
    {
      id: "REV-Q74",
      num: 74,
      chapterId: 25,
      chapterTitle: "Chapter 25 — Senior-Level Architecture & Real-World Scenarios",
      q: "Production API suddenly becomes slow. What do you do?",
      shortAnswer: "Don't restart everything blindly. Follow a disciplined triage: inspect metrics, error rates, latency, traces, DB, external calls, recent deployments, identify the bottleneck, mitigate immediately (rollback, scale, shed load), then perform RCA.",
      detailedAnswer: `<p>Investigation workflow:</p>
<pre><code class="language-text">1. Check metrics
2. Check error rate
3. Check latency
4. Check traces
5. Check database
6. Check external dependencies
7. Check recent deployments
8. Check infrastructure
9. Identify bottleneck
10. Mitigate
11. Root-cause analysis</code></pre>
<p>Possible immediate mitigation: Rollback, Scale out, Disable expensive feature, Enable circuit breaker, Reduce traffic.</p>`,
      bestPractice: "Separate Mitigation from Root Cause Fix.",
      commonMistake: "Making multiple undocumented production changes simultaneously, making the root cause harder to identify."
    },
    {
      id: "REV-Q75",
      num: 75,
      chapterId: 25,
      chapterTitle: "Chapter 25 — Senior-Level Architecture & Real-World Scenarios",
      q: "How would you explain your architecture to a CEO/interviewer?",
      shortAnswer: "Use business language first, explain how business capabilities map to architecture layers, articulate how it scales and saves cost, and highlight trade-offs and vendor isolation.",
      detailedAnswer: `<p>Example:</p>
<blockquote>
"The system is designed around business capabilities.<br><br>
The API layer handles external communication. The application layer contains use cases. The domain contains business rules. Infrastructure handles databases and external integrations.<br><br>
For scalability, application instances are stateless, Redis handles distributed caching, messaging handles asynchronous workloads, and observability provides logs, metrics, and tracing.<br><br>
The architecture also isolates external providers, so replacing an integration does not require changing core business logic."
</blockquote>
<p>Then explain the technical decisions and trade-offs.</p>`,
      bestPractice: "Explain WHY you selected an architecture, not only WHAT technologies you used.",
      commonMistake: "Listing technologies (.NET + Redis + Kafka + Kubernetes + Docker + RabbitMQ...) without explaining the business problem each solves."
    }
  ],

  checklist: [
    {
      category: "Architecture",
      items: [
        "Clean Architecture",
        "Vertical Slice",
        "DDD (Domain-Driven Design)",
        "CQRS",
        "SOLID Principles",
        "Dependency Inversion",
        "Microservices vs Monolith"
      ]
    },
    {
      category: ".NET Core Internals",
      items: [
        "DI lifetimes (Transient, Scoped, Singleton)",
        "Middleware pipeline order",
        "async/await & Task vs ValueTask",
        "CancellationToken propagation",
        "EF Core tracking vs AsNoTracking",
        "Performance & memory profiling"
      ]
    },
    {
      category: "APIs & HTTP",
      items: [
        "RESTful HTTP semantics & status codes",
        "Idempotency & Idempotency Keys",
        "Authentication vs Authorization",
        "JWT token flow & security",
        "API security (OWASP Top 10)"
      ]
    },
    {
      category: "Distributed Systems & Messaging",
      items: [
        "Redis (Cache-Aside, distributed locking)",
        "RabbitMQ (Exchanges, Queues, ACKs, DLQ)",
        "Kafka (Partitions, Consumer Groups, Offsets)",
        "CAP Theorem trade-offs",
        "Eventual consistency vs Strong consistency",
        "Outbox Pattern & Sagas",
        "Retry & Circuit Breaker policies"
      ]
    },
    {
      category: "Infrastructure & DevOps",
      items: [
        "Docker (Multi-stage builds, non-root)",
        "Kubernetes (Pods, Deployments, Services)",
        "CI/CD pipelines (.NET test/build/push)",
        "Cloud & Azure Key Vault secrets",
        "Observability (OpenTelemetry, Logs, Metrics, Traces)"
      ]
    },
    {
      category: "System Design Pillars",
      items: [
        "Scalability (horizontal vs vertical)",
        "Reliability & high availability",
        "Security & zero-trust boundaries",
        "Performance & throughput",
        "Consistency & data integrity",
        "Failure handling & graceful degradation",
        "Observability & alerting",
        "Cost optimization & efficiency",
        "Maintainability & loose coupling",
        "Trade-offs justification"
      ]
    }
  ],

  formula: {
    title: "The Senior-Level Answer Formula",
    subtitle: "For almost any architecture question, structure your answer like this:",
    steps: [
      { step: 1, name: "Definition", icon: "📌", desc: "Clear, crisp 1-2 sentence core definition showing you understand the concept deeply without buzzwords." },
      { step: 2, name: "Why it exists", icon: "💡", desc: "The specific architectural or business pain point it was invented to solve." },
      { step: 3, name: "When to use it", icon: "🎯", desc: "Concrete scenario and requirements where this solution provides high ROI." },
      { step: 4, name: "Real-world example", icon: "🏢", desc: "How you applied it in production (.NET/C# code, database model, or microservice)." },
      { step: 5, name: "Trade-offs", icon: "⚖️", desc: "Every architecture choice has costs: complexity, latency, consistency, or operational overhead." },
      { step: 6, name: "Best practice", icon: "✅", desc: "Industry standards, recommended patterns, and clean code principles." },
      { step: 7, name: "What can go wrong", icon: "⚠️", desc: "Common pitfalls, anti-patterns, and war stories from the field." }
    ],
    goldenQuote: "That structure is more valuable in a senior interview than memorizing isolated definitions."
  }
};

// Raw Markdown for 1-Click Copy and Export
REVISION_DATA.rawMarkdown = `# Senior .NET / Backend Interview Revision

## 25 Chapters — 75 Important Questions & Answers

---

# Chapter 01 — .NET Architecture

### Clean Architecture, N-Tier, Onion, Vertical Slice, CQRS, SOLID

## 1. What is Clean Architecture and why would you use it?

**Short Answer:**
Clean Architecture separates business rules from infrastructure and frameworks. Dependencies point inward toward the Domain/Application layers, making the system easier to test, maintain, and evolve.

**Detailed Answer:**
Typical layers:

\`\`\`text
Presentation
    ↓
Application
    ↓
Domain

Infrastructure → implements Application interfaces
\`\`\`

* **Domain:** entities, value objects, domain rules
* **Application:** use cases, commands, queries, interfaces
* **Infrastructure:** EF Core, Redis, external APIs, messaging
* **Presentation:** Controllers/endpoints, authentication, HTTP concerns

The key principle is **Dependency Inversion**: business logic should not depend directly on infrastructure.

**Best Practice:**
Keep interfaces needed by the application in Application, and their implementations in Infrastructure.

**Common Mistake:**
Putting business logic inside Controllers or EF Core repositories.

---

## 2. Clean Architecture vs Vertical Slice Architecture?

**Short Answer:**
Clean Architecture organizes primarily by technical layers, while Vertical Slice organizes code around business features/use cases.

**Detailed Answer:**

Clean:

\`\`\`text
Application/
  Commands/
  Queries/
Domain/
Infrastructure/
Presentation/
\`\`\`

Vertical Slice:

\`\`\`text
Features/
  CreateUser/
    Command.cs
    Handler.cs
    Validator.cs
    Endpoint.cs
\`\`\`

Vertical Slice can still use Clean Architecture principles. They are not necessarily competing architectures.

**Best Practice:**
For large systems, organize features vertically while keeping dependency boundaries clean.

**Common Mistake:**
Assuming Vertical Slice means abandoning architecture boundaries.

---

## 3. When should you use CQRS?

**Short Answer:**
Use CQRS when read and write responsibilities have significantly different requirements, complexity, performance characteristics, or scaling needs.

**Detailed Answer:**

CQRS separates:

\`\`\`text
Command → changes state
Query   → reads state
\`\`\`

Example:

\`\`\`text
CreateOrderCommand
GetOrderDetailsQuery
\`\`\`

CQRS can be implemented without Event Sourcing or separate databases.

**Best Practice:**
Don't introduce CQRS simply because the application has CRUD operations.

**Common Mistake:**
Creating a separate architecture and handler for every trivial CRUD operation without a real benefit.

---

# Chapter 02 — C# Advanced

## 4. Class vs Record vs Struct?

**Short Answer:**
Classes are reference types commonly used for entities; records provide value-based equality and are useful for immutable data; structs are value types suitable for small value objects.

**Detailed Answer:**

\`\`\`csharp
class User
{
}

record UserDto(string Name);

struct Point
{
    public int X { get; set; }
}
\`\`\`

Records compare based on values by default.

Structs are copied by value and should generally remain small.

**Best Practice:**
Use records for DTOs/value-oriented data and classes for entities with identity/lifecycle.

**Common Mistake:**
Using large mutable structs, which can cause unnecessary copying and confusing behavior.

---

## 5. Why use generics?

**Short Answer:**
Generics provide type safety and reusable code without unnecessary boxing or casts.

Example:

\`\`\`csharp
public interface IRepository<T>
{
    Task<T?> GetAsync(Guid id);
}
\`\`\`

Instead of:

\`\`\`csharp
object Get(...);
\`\`\`

Generics are resolved at compile time and can be highly efficient.

**Best Practice:**
Use generic abstractions when behavior is genuinely shared.

**Common Mistake:**
Making everything generic even when the abstraction doesn't add value.

---

## 6. Explain async/await.

**Short Answer:**
\`async/await\` allows asynchronous operations without blocking the executing thread while waiting for I/O.

Example:

\`\`\`csharp
public async Task<User> GetUserAsync()
{
    return await db.Users.FirstAsync();
}
\`\`\`

While the database is processing the request, the thread can return to the thread pool.

**Best Practice:**

\`\`\`csharp
Task
ValueTask // only when justified
CancellationToken
\`\`\`

Propagate cancellation through application layers.

**Common Mistake:**

\`\`\`csharp
var result = GetAsync().Result;
\`\`\`

This blocks the thread and can cause scalability problems.

---

# Chapter 03 — ASP.NET Core

## 7. How does ASP.NET Core middleware work?

**Short Answer:**
Middleware forms a pipeline where each component can process the request, call the next middleware, and process the response.

\`\`\`text
Request
 ↓
Exception
 ↓
Authentication
 ↓
Authorization
 ↓
Endpoint
 ↓
Response
\`\`\`

Example:

\`\`\`csharp
app.UseAuthentication();
app.UseAuthorization();
\`\`\`

**Best Practice:**
Order middleware according to its dependencies.

**Common Mistake:**
Putting authentication/authorization middleware in the wrong order.

---

## 8. How do you implement global exception handling?

**Short Answer:**
Use centralized exception handling rather than repeating try/catch blocks in every controller.

Example concept:

\`\`\`text
Exception
   ↓
Global Handler
   ↓
Map exception
   ↓
ProblemDetails
\`\`\`

Expected API response:

\`\`\`json
{
  "status": 400,
  "title": "Validation Error"
}
\`\`\`

**Best Practice:**
Use \`ProblemDetails\` and consistent error codes.

**Common Mistake:**
Returning stack traces or internal exception details to clients.

---

## 9. How does Dependency Injection work in ASP.NET Core?

**Short Answer:**
ASP.NET Core has a built-in IoC container that resolves registered dependencies and manages their lifetimes.

Three common lifetimes:

\`\`\`text
Transient → new instance each resolution
Scoped    → one instance per request
Singleton → one instance for application lifetime
\`\`\`

Example:

\`\`\`csharp
services.AddScoped<IUserService, UserService>();
\`\`\`

**Best Practice:**
Use scoped services for request-oriented business services and DbContext.

**Common Mistake:**
Injecting a scoped dependency into a singleton.

---

# Chapter 04 — Database Performance

## 10. How do you optimize a slow SQL query?

**Short Answer:**

I would inspect:

1. Execution plan
2. Indexes
3. Joins
4. Filtering
5. Returned columns
6. Data volume
7. N+1 problems
8. Locking/blocking

**Best Practice:**
Measure first; don't blindly add indexes.

**Common Mistake:**
Assuming the database is slow without checking the execution plan.

---

## 11. When should you create an index?

**Short Answer:**
Indexes are useful for columns frequently used in filtering, joins, sorting, or uniqueness constraints.

Example:

\`\`\`sql
CREATE INDEX IX_Users_Email
ON Users(Email);
\`\`\`

But indexes increase:

* Storage
* Insert/update cost
* Maintenance cost

**Best Practice:**
Create indexes based on actual query patterns.

**Common Mistake:**
Creating indexes on every column.

---

## 12. What is a database transaction?

**Short Answer:**
A transaction groups operations into one atomic unit following ACID principles.

\`\`\`text
Begin
  Update A
  Update B
Commit
\`\`\`

If something fails:

\`\`\`text
Rollback
\`\`\`

**Best Practice:**
Keep transactions short and define the correct isolation level.

**Common Mistake:**
Keeping transactions open while calling external services.

---

# Chapter 05 — Entity Framework Core

## 13. What is DbContext?

**Short Answer:**
\`DbContext\` represents a unit of work with the database and manages entity tracking, queries, and persistence.

It handles:

\`\`\`text
Query
Tracking
Change detection
SaveChanges
Transactions
\`\`\`

**Best Practice:**
Normally use one scoped DbContext per request/unit of work.

**Common Mistake:**
Registering DbContext as Singleton.

---

## 14. Tracking vs AsNoTracking?

**Short Answer:**
Tracking allows EF Core to monitor entities for changes. \`AsNoTracking()\` is useful for read-only queries.

\`\`\`csharp
db.Users
   .AsNoTracking()
   .ToListAsync();
\`\`\`

**Best Practice:**
Use \`AsNoTracking()\` for read-only queries where change tracking isn't needed.

**Common Mistake:**
Using tracking for every large read query.

---

## 15. How do you avoid EF Core N+1 problems?

**Short Answer:**
Avoid executing one query for the parent and another query for every child.

Instead use:

\`\`\`csharp
Include()
\`\`\`

or preferably project directly:

\`\`\`csharp
.Select(x => new UserDto
{
    Id = x.Id,
    Name = x.Name
});
\`\`\`

**Best Practice:**
Prefer projection for API read models.

**Common Mistake:**
Calling database queries inside a loop.

---

# Chapter 06 — RESTful APIs

## 16. What makes an API RESTful?

**Short Answer:**
REST uses resource-oriented URLs, HTTP semantics, stateless requests, and standard methods/status codes.

Example:

\`\`\`text
GET    /users/10
POST   /users
PUT    /users/10
DELETE /users/10
\`\`\`

**Best Practice:**
Use HTTP semantics consistently.

**Common Mistake:**

\`\`\`text
POST /GetUser
POST /DeleteUser
\`\`\`

for everything.

---

## 17. PUT vs PATCH?

**Short Answer:**

\`PUT\` generally represents replacing the resource representation.

\`PATCH\` represents partial modification.

Example:

\`\`\`http
PATCH /users/10
\`\`\`

\`\`\`json
{
  "email": "new@email.com"
}
\`\`\`

**Best Practice:**
Use PATCH when partial updates are required.

**Common Mistake:**
Calling an endpoint PATCH while actually requiring the complete resource.

---

## 18. What is idempotency?

**Short Answer:**
An operation is idempotent if repeating the same request produces the same intended final state.

Examples:

\`\`\`text
GET → idempotent
PUT → normally idempotent
DELETE → normally idempotent
POST → normally not idempotent
\`\`\`

For payments/orders, use an idempotency key:

\`\`\`http
Idempotency-Key: abc123
\`\`\`

**Best Practice:**
Persist the key and resulting operation state.

**Common Mistake:**
Assuming every POST is safe to retry.

---

# Chapter 07 — Authentication & Authorization

## 19. Authentication vs Authorization?

**Short Answer:**

\`\`\`text
Authentication → Who are you?
Authorization  → What are you allowed to do?
\`\`\`

Example:

\`\`\`text
JWT authentication
        ↓
Claims
        ↓
Authorization policy
\`\`\`

**Best Practice:**
Keep authentication and authorization separate.

**Common Mistake:**
Treating possession of a valid JWT as permission to perform every action.

---

## 20. JWT authentication flow?

**Short Answer:**

\`\`\`text
Login
 ↓
Identity Provider
 ↓
Access Token
 ↓
Client
 ↓
Authorization: Bearer <token>
 ↓
API validates token
 ↓
Claims
\`\`\`

The API validates signature, issuer, audience, expiration, etc.

**Best Practice:**
Use short-lived access tokens and secure refresh-token handling.

**Common Mistake:**
Putting sensitive secrets or unnecessary personal data inside JWT claims.

---

## 21. RBAC vs Policy-based authorization?

**Short Answer:**
RBAC grants permissions based on roles. Policy-based authorization evaluates explicit requirements/claims/context.

Example:

\`\`\`text
Role: Admin
Permission: USERS.DELETE
\`\`\`

Policy:

\`\`\`csharp
RequireClaim("permission", "USERS.DELETE");
\`\`\`

**Best Practice:**
For complex enterprise systems, policy/permission-based authorization is usually more flexible than hardcoding roles everywhere.

**Common Mistake:**

\`\`\`csharp
if (user.Role == "Admin")
\`\`\`

throughout business code.

---

# Chapter 08 — Security

## 22. What are common OWASP API vulnerabilities?

Important examples:

* Broken authorization
* Injection
* Security misconfiguration
* Sensitive data exposure
* Broken authentication
* Unrestricted resource consumption

**Best Practice:**

\`\`\`text
Input validation
Authentication
Authorization
Rate limiting
Secure headers
Secret management
Logging
\`\`\`

**Common Mistake:**
Thinking authentication alone makes an API secure.

---

## 23. How do you prevent SQL Injection?

**Short Answer:**
Use parameterized queries/ORM APIs rather than concatenating user input into SQL.

Bad:

\`\`\`csharp
$"SELECT * FROM Users WHERE Name = '{name}'"
\`\`\`

Good:

\`\`\`csharp
context.Users
    .Where(x => x.Name == name);
\`\`\`

**Best Practice:**
Parameterize every dynamic database value.

**Common Mistake:**
Building SQL strings directly from request parameters.

---

## 24. CORS vs CSRF?

**Short Answer:**

**CORS** controls which browser origins can access cross-origin resources.

**CSRF** tricks a user's authenticated browser into performing an unwanted action.

They solve different problems.

**Best Practice:**
Configure CORS narrowly and use appropriate CSRF protection when cookie-based authentication is involved.

**Common Mistake:**
Thinking:

\`\`\`text
AllowAnyOrigin()
\`\`\`

is a general security mechanism.

---

# Chapter 09 — Caching & Redis

## 25. What is Cache-Aside?

**Short Answer:**

\`\`\`text
Read
 ↓
Cache?
 ├─ Yes → return
 └─ No
      ↓
    Database
      ↓
    Cache
      ↓
    Return
\`\`\`

**Best Practice:**
Define TTL and an explicit invalidation strategy.

**Common Mistake:**
Caching data indefinitely.

---

## 26. Distributed cache vs in-memory cache?

**Short Answer:**

In-memory:

\`\`\`text
Application Instance
      ↓
   Memory
\`\`\`

Distributed:

\`\`\`text
App 1 ─┐
App 2 ─┼→ Redis
App 3 ─┘
\`\`\`

Distributed caching is better when multiple application instances need shared cache state.

**Best Practice:**
Use Redis or another distributed store for shared cache data.

**Common Mistake:**
Using local memory cache for data that must be consistent across instances.

---

## 27. What is cache invalidation?

**Short Answer:**
Cache invalidation removes or updates stale cached data after the underlying source changes.

Strategies include:

\`\`\`text
TTL
Explicit deletion
Write-through
Event-driven invalidation
Versioned keys
\`\`\`

**Best Practice:**
Design invalidation together with the data update workflow.

**Common Mistake:**
Adding caching without deciding how stale data will be handled.

---

# Chapter 10 — Messaging & RabbitMQ

## 28. Queue vs Exchange in RabbitMQ?

**Short Answer:**

\`\`\`text
Producer
   ↓
Exchange
   ↓
Routing
   ↓
Queue
   ↓
Consumer
\`\`\`

The exchange routes messages; the queue stores messages until consumed.

**Best Practice:**
Use exchanges and routing keys according to the message topology.

**Common Mistake:**
Thinking producers normally send directly to queues.

---

## 29. What are acknowledgements?

**Short Answer:**
Acknowledgement tells RabbitMQ that the consumer successfully processed a message.

If processing fails, the message can be retried/requeued or dead-lettered.

**Best Practice:**
Acknowledge only after successful processing.

**Common Mistake:**
Acknowledging before business processing finishes.

---

## 30. What is a Dead Letter Queue?

**Short Answer:**
A DLQ stores messages that cannot be successfully processed after defined failure conditions.

\`\`\`text
Queue
 ↓
Consumer
 ↓
Failure
 ↓
Retry
 ↓
Failure
 ↓
DLQ
\`\`\`

**Best Practice:**
Monitor DLQs and provide a controlled replay process.

**Common Mistake:**
Using a DLQ as a permanent garbage bin.

---

# Chapter 11 — Kafka & Event Streaming

## 31. What is a Kafka partition?

**Short Answer:**
A partition is an ordered append-only log within a Kafka topic.

\`\`\`text
Topic
 ├── Partition 0
 ├── Partition 1
 └── Partition 2
\`\`\`

Partitions provide parallelism and scalability.

**Best Practice:**
Choose the partition key carefully when ordering matters.

**Common Mistake:**
Assuming Kafka guarantees ordering across the entire topic.

---

## 32. What is a consumer group?

**Short Answer:**
A consumer group allows multiple consumers to share partitions.

\`\`\`text
Partition 0 → Consumer A
Partition 1 → Consumer B
Partition 2 → Consumer C
\`\`\`

Within one consumer group, a partition is assigned to one consumer at a time.

**Best Practice:**
Scale consumers according to partition count and workload.

**Common Mistake:**
Creating more consumers than partitions and expecting unlimited parallelism.

---

## 33. Kafka offset vs RabbitMQ acknowledgement?

**Short Answer:**
Kafka consumers track positions using offsets. RabbitMQ consumers acknowledge individual messages.

Kafka:

\`\`\`text
Partition → Offset
\`\`\`

RabbitMQ:

\`\`\`text
Message → ACK
\`\`\`

Kafka enables consumers to replay from earlier offsets.

**Best Practice:**
Design processing around delivery semantics and idempotency.

**Common Mistake:**
Assuming either system automatically gives exactly-once business processing.

---

# Chapter 12 — Microservices

## 34. What defines a microservice?

**Short Answer:**
A microservice is a relatively autonomous service responsible for a well-defined business capability and capable of independent deployment.

Example:

\`\`\`text
Order Service
Payment Service
Inventory Service
Notification Service
\`\`\`

**Best Practice:**
Define boundaries around business capabilities, not database tables.

**Common Mistake:**
Creating dozens of tiny services with strong dependencies between them.

---

## 35. Database-per-service: why?

**Short Answer:**
Each service owns its data, preventing direct database coupling between services.

\`\`\`text
Order Service → Order DB
Payment Service → Payment DB
\`\`\`

Communication occurs through APIs/events.

**Best Practice:**
Treat service data as private implementation detail.

**Common Mistake:**

\`\`\`text
Order Service ─┐
Payment Service├→ Same DB tables
Inventory ─────┘
\`\`\`

This creates distributed monolith characteristics.

---

## 36. Microservices vs Monolith?

**Short Answer:**
A monolith is simpler to develop and operate initially. Microservices provide independent deployment and scaling but introduce distributed-system complexity.

Microservices introduce:

\`\`\`text
Network failures
Distributed tracing
Service discovery
Message delivery
Data consistency
Deployment complexity
\`\`\`

**Best Practice:**
Start with the simplest architecture that satisfies actual requirements.

**Common Mistake:**
Choosing microservices simply because they are considered more modern.

---

# Chapter 13 — Distributed Systems

## 37. Explain CAP theorem.

**Short Answer:**
When a network partition occurs, a distributed system must choose between strong consistency and availability.

\`\`\`text
C = Consistency
A = Availability
P = Partition tolerance
\`\`\`

In a real distributed system, network partitions must be tolerated, so the design involves consistency/availability trade-offs.

**Best Practice:**
Discuss CAP in terms of actual failure scenarios rather than simply saying "choose two."

**Common Mistake:**
Claiming a normal standalone database must choose two of C/A/P at all times.

---

## 38. Strong vs eventual consistency?

**Short Answer:**

Strong consistency means reads reflect the latest committed state according to the system's consistency model.

Eventual consistency means replicas may temporarily differ but converge.

Example:

\`\`\`text
Write → Service A
        ↓
   Event
        ↓
Service B
\`\`\`

B may temporarily contain older data.

**Best Practice:**
Use eventual consistency where the business process can tolerate it.

**Common Mistake:**
Using eventual consistency for operations that require immediate correctness without compensating logic.

---

## 39. How do you handle distributed transactions?

**Short Answer:**
Avoid distributed database transactions when possible. Prefer patterns such as:

* Saga
* Outbox
* Idempotency
* Compensation
* Event-driven workflows

Example:

\`\`\`text
Order Created
 ↓
Payment
 ↓
Inventory
\`\`\`

If inventory fails, execute a compensating action.

**Best Practice:**
Design workflows for partial failure.

**Common Mistake:**
Trying to make multiple microservices behave like one local database transaction.

---

# Chapter 14 — Resilience & Fault Tolerance

## 40. Retry vs Circuit Breaker?

**Short Answer:**

Retry handles transient failures.

Circuit breaker prevents repeatedly calling a failing dependency.

\`\`\`text
Retry:
Request → Fail → Retry

Circuit Breaker:
Healthy → Open failure threshold → Open → Stop calls
\`\`\`

**Best Practice:**
Combine timeout + limited retry + circuit breaker where appropriate.

**Common Mistake:**
Retrying every failure indefinitely.

---

## 41. Why are timeouts important?

**Short Answer:**
Without a timeout, a dependency can hold resources indefinitely and cause thread/request exhaustion.

\`\`\`text
API
 ↓
External Service
 ↓
Timeout
\`\`\`

**Best Practice:**
Define explicit timeouts for external calls.

**Common Mistake:**
Using an extremely long global timeout.

---

## 42. What is rate limiting?

**Short Answer:**
Rate limiting controls how many requests a client can make during a period.

Example:

\`\`\`text
100 requests/minute/client
\`\`\`

Algorithms include:

\`\`\`text
Fixed Window
Sliding Window
Token Bucket
Concurrency Limiting
\`\`\`

**Best Practice:**
Rate-limit expensive and abuse-prone endpoints.

**Common Mistake:**
Using rate limiting as a replacement for authentication/authorization.

---

# Chapter 15 — Design Patterns

## 43. Strategy vs Factory?

**Short Answer:**
Strategy encapsulates interchangeable behavior. Factory decides which object/strategy to create.

Example:

\`\`\`text
PaymentStrategy
 ├── VisaPayment
 ├── MadaPayment
 └── ApplePayPayment
\`\`\`

Factory:

\`\`\`text
PaymentStrategyFactory
        ↓
Select implementation
\`\`\`

**Best Practice:**
Use Strategy when behavior varies; Factory when creation/selection varies.

**Common Mistake:**
Using factories everywhere just to avoid \`new\`.

---

## 44. Adapter pattern?

**Short Answer:**
Adapter converts one interface into another interface expected by your application.

Example:

\`\`\`text
Application
    ↓
IPaymentGateway
    ↓
Adapter
    ↓
External Payment API
\`\`\`

**Best Practice:**
Use adapters to isolate external vendor APIs from business logic.

**Common Mistake:**
Allowing vendor-specific DTOs to leak throughout the application.

---

## 45. Decorator pattern?

**Short Answer:**
Decorator adds behavior around an existing implementation without modifying it.

\`\`\`text
Logging
   ↓
Retry
   ↓
Real Service
\`\`\`

Example:

\`\`\`text
IIntegrationHttpClient
    ↓
LoggingDecorator
    ↓
RetryDecorator
    ↓
Implementation
\`\`\`

**Best Practice:**
Use decorators for cross-cutting concerns.

**Common Mistake:**
Creating deeply nested decorators that become difficult to understand.

---

# Chapter 16 — Domain-Driven Design

## 46. Entity vs Value Object?

**Short Answer:**
An Entity has identity and lifecycle. A Value Object is defined by its attributes/value.

Entity:

\`\`\`text
User Id = 10
\`\`\`

Value Object:

\`\`\`text
Money(100, "USD")
\`\`\`

**Best Practice:**
Use value objects to encapsulate domain concepts and validation.

**Common Mistake:**
Representing every meaningful domain concept as primitive strings/integers.

---

## 47. What is an Aggregate?

**Short Answer:**
An Aggregate is a consistency boundary containing related domain objects and controlled by an Aggregate Root.

\`\`\`text
Order
 ├── OrderLines
 └── ShippingInfo
\`\`\`

The application interacts with the aggregate through the root.

**Best Practice:**
Keep aggregates small enough to support practical transactional consistency.

**Common Mistake:**
Creating huge aggregates containing the entire business model.

---

## 48. What is a Domain Event?

**Short Answer:**
A domain event represents something meaningful that happened in the domain.

Example:

\`\`\`text
OrderPlaced
PaymentCompleted
UserRegistered
\`\`\`

It allows other processes to react without tightly coupling the original operation.

**Best Practice:**
Use domain events for business-significant events, not every technical action.

**Common Mistake:**
Putting infrastructure logic directly inside the domain entity.

---

# Chapter 17 — CQRS & Event-Driven Architecture

## 49. Command vs Query?

**Short Answer:**

\`\`\`text
Command → changes state
Query   → reads state
\`\`\`

Command:

\`\`\`text
CreateUserCommand
\`\`\`

Query:

\`\`\`text
GetUserQuery
\`\`\`

Commands should express business intent.

**Best Practice:**
Keep handlers focused on one use case.

**Common Mistake:**
Creating commands that are merely database CRUD wrappers with no meaningful behavior.

---

## 50. What is Event-Driven Architecture?

**Short Answer:**
Components communicate through events representing facts that have occurred.

\`\`\`text
Order Service
      ↓
OrderCreated
      ↓
 ┌────┴─────┐
 ↓          ↓
Payment   Notification
\`\`\`

This reduces synchronous coupling.

**Best Practice:**
Define clear event contracts and delivery/retry semantics.

**Common Mistake:**
Treating events as remote method calls.

---

## 51. What is the Outbox Pattern?

**Short Answer:**
The Outbox Pattern solves the problem of atomically updating database state and publishing an event.

Without Outbox:

\`\`\`text
DB Commit ✓
Event Publish ✗
\`\`\`

State changed but event was lost.

With Outbox:

\`\`\`text
Transaction
 ├── Business Data
 └── Outbox Event
       ↓
Committed
       ↓
Publisher
       ↓
Message Broker
\`\`\`

**Best Practice:**
Use an idempotent publisher/consumer strategy.

**Common Mistake:**
Assuming the Outbox automatically provides exactly-once business processing.

---

# Chapter 18 — Docker & Containers

## 52. Image vs Container?

**Short Answer:**

\`\`\`text
Image = immutable template
Container = running instance of image
\`\`\`

Example:

\`\`\`text
.NET Image
    ↓
Container 1
Container 2
\`\`\`

**Best Practice:**
Build immutable versioned images.

**Common Mistake:**
Treating containers like long-lived virtual machines.

---

## 53. Why use multi-stage Docker builds?

**Short Answer:**
They separate build dependencies from the final runtime image.

\`\`\`text
SDK Image
   ↓
Build
   ↓
Publish
   ↓
Runtime Image
\`\`\`

This produces a smaller runtime image.

**Best Practice:**
Use the smallest suitable runtime image and run as a non-root user where practical.

**Common Mistake:**
Shipping the complete SDK/toolchain in production.

---

## 54. Docker volume vs container filesystem?

**Short Answer:**
Container filesystem data normally disappears when the container is removed. Volumes persist independently.

\`\`\`text
Container
    ↓
Volume
    ↓
Persistent Data
\`\`\`

**Best Practice:**
Use volumes for stateful data that must survive container recreation.

**Common Mistake:**
Storing important database data only inside the container layer.

---

# Chapter 19 — Kubernetes

## 55. Pod vs Deployment?

**Short Answer:**
A Pod is the smallest deployable Kubernetes unit. A Deployment manages replicated Pods and rolling updates.

\`\`\`text
Deployment
    ↓
ReplicaSet
    ↓
Pods
\`\`\`

**Best Practice:**
Usually manage application Pods through Deployments rather than creating standalone Pods.

**Common Mistake:**
Treating Pods as permanent servers.

---

## 56. Service vs Pod?

**Short Answer:**
Pods are ephemeral and their IPs can change. A Service provides a stable network endpoint for a group of Pods.

\`\`\`text
Client
  ↓
Service
  ↓
Pod
Pod
Pod
\`\`\`

**Best Practice:**
Use Services for stable internal/external connectivity.

**Common Mistake:**
Calling Pod IPs directly from application configuration.

---

## 57. ConfigMap vs Secret?

**Short Answer:**

\`\`\`text
ConfigMap → non-sensitive configuration
Secret    → sensitive configuration
\`\`\`

Examples:

\`\`\`text
ConfigMap:
Environment=Production

Secret:
DatabasePassword
\`\`\`

**Best Practice:**
Use external secret management for high-security production environments where appropriate.

**Common Mistake:**
Committing Kubernetes Secret manifests containing real credentials into Git.

---

# Chapter 20 — CI/CD & DevOps

## 58. What is CI/CD?

**Short Answer:**

CI:

\`\`\`text
Commit
 ↓
Build
 ↓
Test
 ↓
Quality checks
\`\`\`

CD:

\`\`\`text
Artifact
 ↓
Deploy
 ↓
Verify
\`\`\`

**Best Practice:**
Automate tests and deployments with environment-specific configuration.

**Common Mistake:**
Allowing production deployment to depend on undocumented manual steps.

---

## 59. What should a .NET CI pipeline contain?

A typical pipeline:

\`\`\`text
Restore
 ↓
Build
 ↓
Unit Tests
 ↓
Integration Tests
 ↓
Static Analysis
 ↓
Publish
 ↓
Docker Build
 ↓
Push Image
 ↓
Deploy
\`\`\`

**Best Practice:**
Fail fast and publish immutable artifacts.

**Common Mistake:**
Building a different artifact for each environment.

---

## 60. Blue-Green vs Rolling Deployment?

**Short Answer:**

Blue-Green:

\`\`\`text
Blue = Current
Green = New
\`\`\`

Switch traffic after validation.

Rolling deployment gradually replaces old instances.

**Best Practice:**
Choose based on downtime, infrastructure cost, rollback requirements, and application compatibility.

**Common Mistake:**
Assuming zero-downtime deployment is possible without backward-compatible APIs/database changes.

---

# Chapter 21 — Observability & Monitoring

## 61. Logs vs Metrics vs Traces?

**Short Answer:**

\`\`\`text
Logs   → What happened?
Metrics → How much/how often?
Traces → Where did the request spend time?
\`\`\`

Example:

\`\`\`text
Request
 ↓
API
 ↓
Redis
 ↓
Database
 ↓
External API
\`\`\`

Distributed tracing connects these operations.

**Best Practice:**
Use correlation/trace IDs across services.

**Common Mistake:**
Logging everything without structured fields or correlation identifiers.

---

## 62. What is OpenTelemetry?

**Short Answer:**
OpenTelemetry is an observability framework for collecting telemetry such as traces, metrics, and logs and exporting them to supported backends.

Typical flow:

\`\`\`text
.NET API
   ↓
OpenTelemetry
   ↓
Collector
   ↓
Observability Backend
\`\`\`

**Best Practice:**
Instrument HTTP, database, messaging, and important application operations.

**Common Mistake:**
Adding tracing without propagating context between services.

---

## 63. What are health checks?

**Short Answer:**
Health checks expose application health information to monitoring/orchestration systems.

Common types:

\`\`\`text
Liveness  → Is the process alive?
Readiness → Can it serve traffic?
\`\`\`

**Best Practice:**
Don't make liveness dependent on every external dependency.

**Common Mistake:**
If Redis temporarily fails, marking the whole process as dead when it could still serve some requests.

---

# Chapter 22 — Cloud & Azure

## 64. What is Azure Key Vault used for?

**Short Answer:**
Key Vault securely stores and manages secrets, keys, and certificates.

Examples:

\`\`\`text
Database credentials
API keys
Certificates
Encryption keys
\`\`\`

**Best Practice:**
Use managed identity where supported instead of embedding credentials.

**Common Mistake:**
Putting production secrets directly in \`appsettings.json\` or source control.

---

## 65. App Service vs AKS?

**Short Answer:**
Azure App Service is a managed platform for hosting applications. AKS provides Kubernetes orchestration with greater control and complexity.

\`\`\`text
App Service → simpler PaaS
AKS         → Kubernetes platform
\`\`\`

**Best Practice:**
Choose AKS when Kubernetes capabilities are actually needed.

**Common Mistake:**
Using Kubernetes solely because the application has multiple APIs.

---

## 66. How would you design a cloud-ready .NET API?

Consider:

\`\`\`text
Load Balancer
      ↓
Multiple API instances
      ↓
Redis
      ↓
Database
      ↓
Message Broker
\`\`\`

Plus:

\`\`\`text
Key Vault
Monitoring
Tracing
Auto Scaling
Health Checks
CI/CD
\`\`\`

**Best Practice:**
Design for stateless application instances and externalize shared state.

**Common Mistake:**
Keeping session/state only in one application instance.

---

# Chapter 23 — System Design

## 67. How would you design a high-traffic API?

Start with requirements.

Then:

\`\`\`text
Client
 ↓
Load Balancer
 ↓
API Instances
 ↓
Cache
 ↓
Database
\`\`\`

For asynchronous work:

\`\`\`text
API
 ↓
Queue
 ↓
Workers
\`\`\`

Add:

\`\`\`text
Rate limiting
Caching
Database indexes
Horizontal scaling
Observability
Resilience
\`\`\`

**Best Practice:**
Identify bottlenecks before selecting technologies.

**Common Mistake:**
Starting the design with "we should use microservices/Kafka/Kubernetes."

---

## 68. How do you scale a database?

Options include:

\`\`\`text
Indexes
Query optimization
Caching
Read replicas
Partitioning
Sharding
Archiving
Connection pooling
\`\`\`

First optimize queries and schema before introducing complex distributed database strategies.

**Best Practice:**
Scale according to the actual bottleneck.

**Common Mistake:**
Immediately choosing sharding without proving the need.

---

## 69. How would you design an asynchronous order system?

Example:

\`\`\`text
Client
  ↓
Order API
  ↓
Database
  ↓
Outbox
  ↓
Message Broker
  ↓
Payment
  ↓
Inventory
  ↓
Notification
\`\`\`

Use:

\`\`\`text
Idempotency
Retry
DLQ
Outbox
Saga/compensation
Distributed tracing
\`\`\`

**Best Practice:**
Assume messages can be duplicated and services can fail independently.

**Common Mistake:**
Designing as though every network operation succeeds exactly once.

---

# Chapter 24 — Performance & Scalability

## 70. How do you investigate a slow .NET API?

Use a structured approach:

\`\`\`text
Measure
 ↓
Trace request
 ↓
Check DB
 ↓
Check external calls
 ↓
Check CPU/memory
 ↓
Check allocations
 ↓
Profile
 ↓
Optimize
\`\`\`

Look for:

* Slow SQL
* N+1
* Excessive serialization
* Blocking calls
* Large payloads
* External API latency
* Lock contention

**Best Practice:**
Use profiling and telemetry rather than guessing.

**Common Mistake:**
Adding caching before identifying the actual bottleneck.

---

## 71. How do you improve API scalability?

Techniques:

\`\`\`text
Async I/O
Horizontal scaling
Caching
Pagination
Connection pooling
Efficient DB queries
Background processing
Rate limiting
Compression where appropriate
\`\`\`

Keep APIs stateless where possible.

**Best Practice:**
Separate synchronous request work from expensive asynchronous work.

**Common Mistake:**
Increasing server CPU/memory indefinitely instead of addressing the bottleneck.

---

## 72. How can async code still become slow?

Because asynchronous code doesn't automatically make operations faster.

Problems can include:

\`\`\`text
Too many external calls
Sequential awaits
Slow database
Lock contention
Thread pool starvation from blocking code
Large allocations
\`\`\`

For independent operations:

\`\`\`csharp
var aTask = GetAAsync();
var bTask = GetBAsync();

await Task.WhenAll(aTask, bTask);
\`\`\`

**Best Practice:**
Parallelize independent I/O operations carefully.

**Common Mistake:**
Running unlimited concurrent operations and overwhelming the dependency.

---

# Chapter 25 — Senior-Level Architecture & Real-World Scenarios

## 73. An external API is unreliable. How would you design the integration?

I would isolate the external API behind an adapter:

\`\`\`text
Application
     ↓
IExternalService
     ↓
Adapter
     ↓
HTTP Client
     ↓
External API
\`\`\`

Then add:

\`\`\`text
Timeout
Retry
Circuit Breaker
Logging
Correlation ID
Rate limiting
\`\`\`

For example:

\`\`\`text
Request
 ↓
Timeout
 ↓
Retry
 ↓
Circuit Breaker
 ↓
External API
\`\`\`

**Best Practice:**
Keep vendor-specific DTOs and behavior inside Infrastructure.

**Common Mistake:**
Allowing external API models to spread through Domain/Application.

---

## 74. Production API suddenly becomes slow. What do you do?

Don't immediately restart everything.

I would investigate:

\`\`\`text
1. Check metrics
2. Check error rate
3. Check latency
4. Check traces
5. Check database
6. Check external dependencies
7. Check recent deployments
8. Check infrastructure
9. Identify bottleneck
10. Mitigate
11. Root-cause analysis
\`\`\`

Possible immediate mitigation:

\`\`\`text
Rollback
Scale out
Disable expensive feature
Enable circuit breaker
Reduce traffic
\`\`\`

Then perform RCA.

**Best Practice:**
Separate:

\`\`\`text
Mitigation
\`\`\`

from:

\`\`\`text
Root Cause Fix
\`\`\`

**Common Mistake:**
Making multiple undocumented production changes simultaneously, making the root cause harder to identify.

---

## 75. How would you explain your architecture to a CEO/interviewer?

Use business language first.

Example:

\`\`\`text
The system is designed around business capabilities.

The API layer handles external communication.
The application layer contains use cases.
The domain contains business rules.
Infrastructure handles databases and external integrations.

For scalability, application instances are stateless,
Redis handles distributed caching,
messaging handles asynchronous workloads,
and observability provides logs, metrics, and tracing.

The architecture also isolates external providers,
so replacing an integration does not require changing
core business logic.
\`\`\`

Then explain the technical decisions and trade-offs.

**Best Practice:**
Explain **why** you selected an architecture, not only **what** technologies you used.

**Common Mistake:**
Listing technologies:

\`\`\`text
.NET + Redis + Kafka + Kubernetes + Docker + RabbitMQ...
\`\`\`

without explaining the business problem each solves.

---

# Final Senior Interview Checklist

Before a senior interview, be able to explain these without memorized definitions:

### Architecture

* Clean Architecture
* Vertical Slice
* DDD
* CQRS
* SOLID
* Dependency Inversion
* Microservices vs Monolith

### .NET

* DI lifetimes
* Middleware
* async/await
* CancellationToken
* EF Core tracking
* Performance

### APIs

* REST
* Idempotency
* Authentication
* Authorization
* JWT
* API security

### Distributed Systems

* Redis
* RabbitMQ
* Kafka
* CAP
* Eventual consistency
* Outbox
* Saga
* Retry
* Circuit Breaker

### Infrastructure

* Docker
* Kubernetes
* CI/CD
* Cloud
* Secrets
* Observability

### System Design

Always be ready to discuss:

\`\`\`text
Scalability
Reliability
Security
Performance
Consistency
Failure handling
Observability
Cost
Maintainability
Trade-offs
\`\`\`

## The Senior-Level Answer Formula

For almost any architecture question, structure your answer like this:

\`\`\`text
1. Definition
        ↓
2. Why it exists
        ↓
3. When to use it
        ↓
4. Real-world example
        ↓
5. Trade-offs
        ↓
6. Best practice
        ↓
7. What can go wrong
\`\`\`

That structure is more valuable in a senior interview than memorizing isolated definitions.`;

if (typeof window !== "undefined") {
  window.REVISION_DATA = REVISION_DATA;
}
if (typeof global !== "undefined") {
  global.REVISION_DATA = REVISION_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = REVISION_DATA;
}
