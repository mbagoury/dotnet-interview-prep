// ============================================================================
// Senior .NET & Architecture Interview Bank - Complete Dataset
// Extracted from Chapters 1-10, Chapters 11-20, and SOLID Masterclass Reference
// ============================================================================

var INTERVIEW_DATA = {
  metadata: {
    title: "Senior .NET & Architecture Interview Reference",
    totalQuestions: 353,
    totalChapters: 20,
    hasSolidMasterclass: true
  },

  categories: [
    { id: "core", name: "Language & Runtime", icon: "⚡", description: "C# Advanced, CLR, Memory Management, GC" },
    { id: "web", name: "ASP.NET Core & APIs", icon: "🌐", description: "Middleware, Routing, Minimal APIs, Filters, Rate Limiting" },
    { id: "di", name: "Dependency Injection", icon: "💉", description: "Lifetimes, Captive Dependencies, Scrutor, Keyed Services" },
    { id: "data", name: "Data Access & SQL", icon: "🗄️", description: "EF Core, SQL Server, Indexing, Performance, LINQ" },
    { id: "async", name: "Async & Concurrency", icon: "🔄", description: "Async/Await, ThreadPool, Channels, Semaphores" },
    { id: "arch", name: "Architecture & DDD", icon: "🏛️", description: "Clean Architecture, DDD, CQRS, MediatR, Invariants" },
    { id: "patterns", name: "Design Patterns & SOLID", icon: "🧩", description: "Gang of Four Patterns, SOLID Principles & C# implementations" },
    { id: "microservices", name: "Microservices & Distributed", icon: "🕸️", description: "Sagas, Outbox/Inbox, Service Discovery, Gateways" },
    { id: "messaging", name: "Messaging & Caching", icon: "📬", description: "RabbitMQ, Kafka, Redis, Distributed Caching" },
    { id: "devops", name: "DevOps & Cloud", icon: "🐳", description: "Docker, Kubernetes, Probes, Ingress, Helm" },
    { id: "security", name: "Security & Observability", icon: "🛡️", description: "JWT, OAuth2/OIDC, OpenTelemetry, Serilog, Metrics" }
  ],

  chapters: [
    { id: 1, name: "Chapter 1 - C# Advanced", categoryId: "core", range: "Q1-Q16 + C1-A1..A5", count: 21 },
    { id: 2, name: "Chapter 2 - .NET CLR & Memory Management", categoryId: "core", range: "Q17-Q29 + C2-A1..A5", count: 18 },
    { id: 3, name: "Chapter 3 - ASP.NET Core Pipeline & Middleware", categoryId: "web", range: "Q30-Q43 + C3-A1..A5", count: 19 },
    { id: 4, name: "Chapter 4 - Dependency Injection", categoryId: "di", range: "Q44-Q54 + C4-A1..A5", count: 16 },
    { id: 5, name: "Chapter 5 - Entity Framework Core", categoryId: "data", range: "Q55-Q68 + C5-A1..A5", count: 19 },
    { id: 6, name: "Chapter 6 - SQL Server", categoryId: "data", range: "Q69-Q81 + C6-A1..A5", count: 18 },
    { id: 7, name: "Chapter 7 - LINQ", categoryId: "data", range: "Q82-Q91 + C7-A1..A5", count: 15 },
    { id: 8, name: "Chapter 8 - Async/Await & Multithreading", categoryId: "async", range: "Q92-Q105 + C8-A1..A5", count: 19 },
    { id: 9, name: "Chapter 9 - Clean Architecture", categoryId: "arch", range: "Q106-Q116 + C9-A1..A5", count: 16 },
    { id: 10, name: "Chapter 10 - Domain-Driven Design (DDD)", categoryId: "arch", range: "Q117-Q129 + C10-A1..A5", count: 18 },
    { id: 11, name: "Chapter 11 - CQRS & MediatR", categoryId: "arch", range: "Q130-Q140 + C11-A1..A5", count: 16 },
    { id: 12, name: "Chapter 12 - Design Patterns", categoryId: "patterns", range: "Q141-Q153 + C12-A1..A5", count: 18 },
    { id: 13, name: "Chapter 13 - Microservices", categoryId: "microservices", range: "Q154-Q166 + C13-A1..A5", count: 18 },
    { id: 14, name: "Chapter 14 - Docker", categoryId: "devops", range: "Q167-Q177 + C14-A1..A5", count: 16 },
    { id: 15, name: "Chapter 15 - Kubernetes", categoryId: "devops", range: "Q178-Q190 + C15-A1..A5", count: 18 },
    { id: 16, name: "Chapter 16 - Redis", categoryId: "messaging", range: "Q191-Q202 + C16-A1..A5", count: 17 },
    { id: 17, name: "Chapter 17 - RabbitMQ & Kafka", categoryId: "messaging", range: "Q203-Q215 + C17-A1..A5", count: 18 },
    { id: 18, name: "Chapter 18 - Authentication & Authorization", categoryId: "security", range: "Q216-Q228 + C18-A1..A5", count: 18 },
    { id: 19, name: "Chapter 19 - Caching", categoryId: "messaging", range: "Q229-Q239 + C19-A1..A5", count: 16 },
    { id: 20, name: "Chapter 20 - Logging & Observability", categoryId: "security", range: "Q240-Q253 + C20-A1..A5", count: 19 }
  ],

  // Pre-configured interview round presets
  presets: [
    {
      id: "senior-general",
      name: "Senior .NET Full Spectrum",
      description: "15 diverse questions covering C#, CLR, Web, EF Core, Async, Clean Arch, Docker, and Redis.",
      durationMinutes: 45,
      questionIds: ["Q1", "Q19", "Q30", "Q44", "Q58", "Q72", "Q92", "Q99", "Q106", "Q118", "Q130", "Q141", "Q157", "Q168", "Q191"]
    },
    {
      id: "architect-distributed",
      name: "Cloud & Distributed Systems Architect",
      description: "12 high-impact questions on Microservices, Sagas, Outbox, Kafka, Redis, and Kubernetes.",
      durationMinutes: 45,
      questionIds: ["Q130", "Q132", "C11-A2", "Q154", "Q156", "Q157", "Q163", "Q174", "Q179", "Q195", "Q209", "Q214"]
    },
    {
      id: "csharp-clr-performance",
      name: "C# Internals & High-Performance .NET",
      description: "10 deep-dive questions on Memory, Span, GC, Structs, ThreadPool, and Async internals.",
      durationMinutes: 30,
      questionIds: ["Q1", "Q2", "Q8", "C1-A1", "Q18", "Q19", "Q20", "Q24", "Q92", "Q104"]
    },
    {
      id: "solid-clean-arch",
      name: "SOLID Principles & Clean Architecture",
      description: "10 architectural questions on Domain isolation, Invariants, Dependency Rule, and Pattern application.",
      durationMinutes: 30,
      questionIds: ["Q106", "Q107", "Q109", "Q110", "Q118", "Q119", "Q128", "Q143", "Q147", "Q151"]
    },
    {
      id: "backend-api-db",
      name: "Backend APIs, EF Core & SQL Server",
      description: "10 practical questions on ASP.NET Core pipeline, filters, EF queries, and SQL indexing.",
      durationMinutes: 30,
      questionIds: ["Q30", "Q33", "Q35", "Q37", "Q44", "Q56", "Q58", "Q69", "Q70", "Q75"]
    },
    {
      id: "phone-screen",
      name: "Quick Phone Screen (15 Min)",
      description: "5 rapid-fire litmus test questions to gauge senior seniority quickly.",
      durationMinutes: 15,
      questionIds: ["Q1", "Q44", "Q58", "Q92", "Q106"]
    }
  ],

  // Document 3: SOLID Masterclass
  solidMasterclass: {
    intro: {
      title: "SOLID Principles وعلاقتها بالـ Design Patterns",
      subtitle: "دليل عملي لمطوّر .NET مع أمثلة C# وجدول مراجعة نهائي للمقابلات",
      goldenRule: "قاعدة مهمة للمقابلة: Principles تخبرك كيف تفكر في التصميم، أما Patterns فتعطيك أدوات وحلولاً عملية لتنفيذ هذا التصميم.",
      goldenRuleEn: "Interview Golden Rule: Principles tell you how to THINK about design; Patterns give you concrete TOOLS and practical solutions to implement that design.",
      interviewAnswer: "SOLID is a set of object-oriented design principles that improves maintainability, extensibility, testability, and reduces coupling. Design patterns are reusable solutions that help implement these principles. For example, Strategy and Decorator support OCP, small role-based interfaces support ISP, interchangeable implementations must respect LSP, Command and Mediator help with SRP, and Dependency Injection, Adapter, and Abstract Factory support DIP.",
      distinctionTip: "نقطة تميّز في المقابلة: لا تقل إن كل Principle يقابله Pattern واحد مباشرة. وضح أن العلاقة Many-to-Many وأن اختيار الـ Pattern يعتمد على المشكلة والسياق.",
      distinctionTipEn: "Distinction Point: Never say each principle has exactly one pattern. Emphasize that the relationship is many-to-many and selecting a pattern depends on the exact problem and business context."
    },
    quickMap: [
      {
        principle: "S — SRP",
        name: "Single Responsibility Principle",
        arabic: "كل Class له سبب واحد واضح للتغيير ومسؤولية واحدة متماسكة",
        patterns: "Command, Mediator, Facade, Decorator / Pipeline Behaviors",
        antiPattern: "God Classes تجمع DB + Validation + Email + Files في نفس الكلاس"
      },
      {
        principle: "O — OCP",
        name: "Open/Closed Principle",
        arabic: "مغلق أمام التعديل المتكرر، ومفتوح لإضافة سلوك جديد عبر الـ Extension",
        patterns: "Strategy, Decorator, Factory, Template Method, Chain of Responsibility",
        antiPattern: "سلسلة switch أو if-else تكبر وتتعدل مع كل نوع أو متطلب جديد"
      },
      {
        principle: "L — LSP",
        name: "Liskov Substitution Principle",
        arabic: "أي Implementation تحل محل الـ Abstraction بدون كسر الـ Contract أو توقعات العميل",
        patterns: "Strategy, State, Decorator, Composite",
        antiPattern: "كلاس فرعي يرمي NotSupportedException لعملية معرّفة في الـ Interface"
      },
      {
        principle: "I — ISP",
        name: "Interface Segregation Principle",
        arabic: "لا تجبر العميل على الاعتماد على Methods لا يحتاجها؛ قسّم لـ Role Interfaces",
        patterns: "Adapter, Facade, CQRS, Role Interfaces",
        antiPattern: "Fat Interface ضخمة تجبر كل Implementation على ملء دوال فارغة أو غير مطلوبة"
      },
      {
        principle: "D — DIP",
        name: "Dependency Inversion Principle",
        arabic: "الـ Business Logic عالية المستوى تعتمد على Abstractions وليس على Concrete Infrastructure",
        patterns: "Dependency Injection, Abstract Factory, Adapter, Ports & Adapters, Repository",
        antiPattern: "new StripeClient() أو استدعاء SQL Server/Redis مباشرة داخل Business Service"
      }
    ],
    principles: [
      {
        id: "SRP",
        title: "Single Responsibility Principle (SRP)",
        tagline: "سبب واحد للتغيير (One Reason to Change)",
        meaning: "كل Class أو Module يجب أن يكون له سبب واحد واضح للتغيير ومسؤولية واحدة متماسكة. المقصود ليس دالة واحدة فقط، بل أن تكون جميع العمليات تخدم نفس الغرض المترابط.",
        badCode: `// ❌ الاستخدام الخاطئ: الكلاس مسؤول عن التحقق، الحفظ، إرسال الإيميل، وإنشاء الفاتورة
public class OrderService
{
    public async Task PlaceOrderAsync(Order order)
    {
        if (order.Total <= 0)
            throw new Exception("Invalid order");

        await SaveOrderToDatabaseAsync(order);
        await SendConfirmationEmailAsync(order);

        File.WriteAllText(
            $"invoice-{order.Id}.txt",
            $"Total: {order.Total}");
    }
}`,
        goodCode: `// ✅ التصميم الأفضل: PlaceOrderService ينسق فقط Case Use واحد، والمهام موزعة
public interface IOrderValidator { void Validate(Order order); }
public interface IOrderRepository { Task AddAsync(Order order); }
public interface IInvoiceGenerator { Task GenerateAsync(Order order); }
public interface INotificationSender { Task SendOrderConfirmationAsync(Order order); }

public class PlaceOrderService
{
    private readonly IOrderValidator _validator;
    private readonly IOrderRepository _repository;
    private readonly IInvoiceGenerator _invoiceGenerator;
    private readonly INotificationSender _notificationSender;

    public PlaceOrderService(
        IOrderValidator validator,
        IOrderRepository repository,
        IInvoiceGenerator invoiceGenerator,
        INotificationSender notificationSender)
    {
        _validator = validator;
        _repository = repository;
        _invoiceGenerator = invoiceGenerator;
        _notificationSender = notificationSender;
    }

    public async Task ExecuteAsync(Order order)
    {
        _validator.Validate(order);
        await _repository.AddAsync(order);
        await _invoiceGenerator.GenerateAsync(order);
        await _notificationSender.SendOrderConfirmationAsync(order);
    }
}`,
        patterns: [
          { name: "Command Pattern", desc: "يمثل كل Use Case كطلب مستقل مثل PlaceOrderCommand." },
          { name: "Mediator Pattern", desc: "يفصل الـ Controller عن الـ Handler المنفذ للـ Use Case." },
          { name: "Facade Pattern", desc: "يقدم واجهة مبسطة فوق مجموعة Components داخلية معقدة." },
          { name: "Pipeline Behaviors / Decorator", desc: "تنقل Logging, Validation, وTransactions بعيداً عن الـ Handler الأساسي." }
        ],
        consequences: [
          "تضخم الكلاسات لتصبح God Classes يصعب صيانتها.",
          "كتابة Unit Tests تصبح صعبة وبطيئة بسبب تشابك الـ Dependencies.",
          "تعديل طريقة إرسال الإيميل أو ملف الفاتورة قد يكسر منطق معالجة الطلبات الأساسي.",
          "استحالة إعادة استخدام جزء مستقل من الكود."
        ]
      },
      {
        id: "OCP",
        title: "Open/Closed Principle (OCP)",
        tagline: "مفتوح للإضافة، مغلق أمام التعديل (Open for Extension, Closed for Modification)",
        meaning: "الكود المستقر يكون مغلقاً أمام التعديل المتكرر، لكنه مفتوح لإضافة سلوكيات جديدة عن طريق الـ Extension والتجريد (Abstraction) بدلاً من تعديل دوال switch أو if كلما طرأ سيناريو جديد.",
        badCode: `// ❌ الاستخدام الخاطئ: كلما أضفنا فئة عميل جديدة (Student, Partner) نضطر لتعديل نفس الـ Method!
public decimal Calculate(decimal total, string customerType)
{
    return customerType switch
    {
        "Regular" => total,
        "VIP" => total * 0.80m,
        "Employee" => total * 0.70m,
        _ => total
    };
}`,
        goodCode: `// ✅ التصميم الأفضل: Strategy Pattern مع DI
public interface IDiscountStrategy
{
    bool CanApply(Customer customer);
    decimal Apply(decimal total);
}

public class VipDiscountStrategy : IDiscountStrategy
{
    public bool CanApply(Customer customer) => customer.Type == CustomerType.Vip;
    public decimal Apply(decimal total) => total * 0.80m;
}

public class DiscountCalculator
{
    private readonly IEnumerable<IDiscountStrategy> _strategies;
    public DiscountCalculator(IEnumerable<IDiscountStrategy> strategies)
        => _strategies = strategies;

    public decimal Calculate(Customer customer, decimal total)
    {
        var strategy = _strategies.FirstOrDefault(x => x.CanApply(customer));
        return strategy?.Apply(total) ?? total;
    }
}
// التسجيل في الـ DI:
// services.AddScoped<IDiscountStrategy, VipDiscountStrategy>();
// services.AddScoped<DiscountCalculator>();
// لإضافة خصم جديد ننشئ Strategy جديدة دون تعديل DiscountCalculator!`,
        patterns: [
          { name: "Strategy Pattern", desc: "تغيير الخوارزمية أو السلوك من خلال Implementations متعددة." },
          { name: "Decorator Pattern", desc: "إضافة Logging أو Caching أو Retry حول Service دون لمس كودها الأصلي." },
          { name: "Factory Method", desc: "اختيار الـ Implementation المناسبة في مكان مركزي معزول." },
          { name: "Template Method", desc: "تثبيت الهيكل العام للخطوات والسماح بتخصيص خطوات محددة في كلاسات مشتقة." },
          { name: "Chain of Responsibility", desc: "إضافة Handlers جديدة لسلسلة المعالجة بدون تعديل بقية العناصر." }
        ],
        consequences: [
          "تعديل كود مستقر في الإنتاج يُعرّض النظام لخطر Regression والأخطاء المفاجئة.",
          "تضخم دوال switch و if-else لتشمل مئات الأسطر المعقدة.",
          "صعوبة الاختبار المستقل لكل قاعدة خصم أو خوارزمية على حدة."
        ]
      },
      {
        id: "LSP",
        title: "Liskov Substitution Principle (LSP)",
        tagline: "قابلية الاستبدال دون كسر التوقعات (Substitutability)",
        meaning: "أي كلاس مشتق أو تطبيق (Implementation) يجب أن يكون قادراً على الحلول محل الـ Base Type أو الـ Interface بدون كسر افتراضات العميل أو إلقاء استثناءات لعمليات وُعد بها العقد.",
        badCode: `// ❌ الاستخدام الخاطئ: CashOnDelivery لا يدعم الاسترجاع الإلكتروني ويرمي Exception!
public abstract class PaymentMethod
{
    public abstract Task PayAsync(decimal amount);
    public abstract Task RefundAsync(decimal amount);
}

public class CashOnDeliveryPayment : PaymentMethod
{
    public override Task PayAsync(decimal amount) => Task.CompletedTask;

    // يكسر العقد! العميل يتوقع أن أي PaymentMethod يمكن عمل Refund لها!
    public override Task RefundAsync(decimal amount)
        => throw new NotSupportedException();
}`,
        goodCode: `// ✅ التصميم الأفضل: فصل العقود بدقة حتى لا تُفرض دوال غير مدعومة
public interface IPaymentMethod
{
    Task PayAsync(decimal amount);
}

public interface IRefundablePayment : IPaymentMethod
{
    Task RefundAsync(decimal amount);
}

public class CreditCardPayment : IRefundablePayment
{
    public Task PayAsync(decimal amount) => Task.CompletedTask;
    public Task RefundAsync(decimal amount) => Task.CompletedTask;
}

public class CashOnDeliveryPayment : IPaymentMethod
{
    public Task PayAsync(decimal amount) => Task.CompletedTask;
}

public class RefundService
{
    // الـ Compiler الآن يمنع تمرير CashOnDelivery لأن العقد يتطلب IRefundablePayment حصراً!
    public Task RefundAsync(IRefundablePayment payment, decimal amount)
        => payment.RefundAsync(amount);
}`,
        patterns: [
          { name: "Strategy Pattern", desc: "كل Strategy قابلة للاستبدال الكامل وتحترم نفس العقد بدقة." },
          { name: "State Pattern", desc: "جميع الحالات تنفذ نفس العقد مع سلوك متسق ومتوقع." },
          { name: "Decorator Pattern", desc: "المغلف يظل بديلاً صالحاً وشفافاً عن الـ Service التي يغلفها." },
          { name: "Composite Pattern", desc: "العميل يتعامل مع العنصر المفرد والشجرة بنفس الطريقة الآمنة." }
        ],
        consequences: [
          "ظهور أخطاء وقت التشغيل غير المتوقعة (NotSupportedException).",
          "اضطرار المطورين لكتابة `if (payment is CashOnDelivery)` في كود العميل مما يكسر OCP أيضاً.",
          "تغيير الشروط المسبقة (Preconditions) أو اللاحقة (Postconditions) يربك النظام بالكامل."
        ]
      },
      {
        id: "ISP",
        title: "Interface Segregation Principle (ISP)",
        tagline: "واجهات صغيرة مبنية على الأدوار (Role Interfaces)",
        meaning: "لا تجبر الـ Client على الاعتماد على Methods لا يحتاجها. يفضل تصميم واجهات صغيرة متخصصة تعبر عن دور محدد (Role) بدلاً من واجهة عامة ضخمة تجمع كل شيء.",
        badCode: `// ❌ الاستخدام الخاطئ: واجهة ضخمة (Fat Interface) تجبر كل مستهلك على الاعتماد على دوال لا تخصه
public interface IUserService
{
    Task<UserDto?> GetByIdAsync(Guid id);
    Task<Guid> CreateAsync(CreateUserRequest request);
    Task DeleteAsync(Guid id);
    Task ResetPasswordAsync(Guid id);
    Task<byte[]> ExportUsersAsync();
    Task UploadProfileImageAsync(Guid id, Stream image);
}
// وحدة تحكم للقراءة فقط تضطر للاعتماد على كل عمليات الحذف وتغيير كلمات المرور والتصدير!`,
        goodCode: `// ✅ التصميم الأفضل: تجزئة الواجهات حسب أدوار العميل الفعلي
public interface IUserReader
{
    Task<UserDto?> GetByIdAsync(Guid id);
}

public interface IUserWriter
{
    Task<Guid> CreateAsync(CreateUserRequest request);
    Task DeleteAsync(Guid id);
}

public interface IPasswordResetService
{
    Task ResetPasswordAsync(Guid userId);
}

public interface IUserExporter
{
    Task<byte[]> ExportAsync();
}

// Controller القراءة يعتمد فقط على ما يحتاجه بدقة
public class UsersQueryController : ControllerBase
{
    private readonly IUserReader _userReader;
    public UsersQueryController(IUserReader userReader)
        => _userReader = userReader;
}`,
        patterns: [
          { name: "Adapter Pattern", desc: "يقدم Interface مصغرة مناسبة فوق API أو Legacy Service ضخمة." },
          { name: "Facade Pattern", desc: "يقدم مجموعة عمليات منتقاة ومبسطة لعميل محدد." },
          { name: "CQRS Pattern", desc: "يفصل عمليات Commands (التعديل) عن Queries (القراءة) في عقود مستقلة." },
          { name: "Role Interfaces", desc: "مثل IReadRepository و IWriteRepository بدلاً من واجهة ضخمة لكل شيء." }
        ],
        consequences: [
          "تضخم الـ Mocks في الـ Unit Tests لاحتياج تجهيز دوال لا علاقة لها بالاختبار.",
          "إعادة بناء وإعادة نشر مكونات كثيرة عند تعديل دالة واحدة لا تستخدمها تلك المكونات.",
          "كود مشتت وواجهات مضللة تظهر إمكانيات غير مدعومة في السياق."
        ]
      },
      {
        id: "DIP",
        title: "Dependency Inversion Principle (DIP)",
        tagline: "الاعتماد على التجريد وليس التفاصيل (Depend on Abstractions)",
        meaning: "الـ High-Level Modules (منطق العمل) يجب ألا تعتمد على الـ Low-Level Modules (قواعد البيانات، مزودي الدفع، خدمات البريد). كلاهما يجب أن يعتمد على Abstractions. اتجاه الاعتمادية يكون نحو الداخل دائماً.",
        badCode: `// ❌ الاستخدام الخاطئ: CheckoutService مرتبطة مباشرة بمكتبة Stripe الملموسة
public class CheckoutService
{
    private readonly StripePaymentGateway _gateway;

    public CheckoutService()
    {
        // اقتران قوي ومباشر بالتفاصيل الخارجية!
        _gateway = new StripePaymentGateway();
    }

    public Task CheckoutAsync(decimal amount)
        => _gateway.PayAsync(amount);
}`,
        goodCode: `// ✅ التصميم الأفضل: الاعتماد على Interface خاصة بالتطبيق وعزل Stripe خلف Adapter
public interface IPaymentGateway
{
    Task<PaymentResult> PayAsync(decimal amount, CancellationToken cancellationToken = default);
}

public class CheckoutService
{
    private readonly IPaymentGateway _paymentGateway;

    // يُمرر التجريد عبر Constructor Injection
    public CheckoutService(IPaymentGateway paymentGateway)
        => _paymentGateway = paymentGateway;

    public Task<PaymentResult> CheckoutAsync(decimal amount, CancellationToken ct = default)
        => _paymentGateway.PayAsync(amount, ct);
}

// الـ Adapter يربط الـ SDK الملموس بالعقد الخاص بنا
public class StripePaymentAdapter : IPaymentGateway
{
    private readonly StripeSdkClient _client;
    public StripePaymentAdapter(StripeSdkClient client) => _client = client;

    public async Task<PaymentResult> PayAsync(decimal amount, CancellationToken ct = default)
    {
        var response = await _client.CreateChargeAsync(amount, ct);
        return new PaymentResult(response.Success, response.Reference);
    }
}
// التسجيل في الـ DI:
// services.AddScoped<IPaymentGateway, StripePaymentAdapter>();
// services.AddScoped<CheckoutService>();`,
        patterns: [
          { name: "Dependency Injection", desc: "تمرير الـ Abstraction من الخارج عبر الـ Container بدلاً من إنشائها محلياً." },
          { name: "Adapter Pattern", desc: "عزل تفاصيل الـ SDKs الخارجية خلف Interface متوافقة مع تطبيقك." },
          { name: "Abstract Factory", desc: "إنشاء عائلات من الكائنات دون ربط العميل بالأنواع الملموسة." },
          { name: "Ports & Adapters (Hexagonal)", desc: "الـ Port هو الواجهة داخل الـ Application، والـ Adapter هو التنفيذ داخل Infrastructure." },
          { name: "Repository Pattern", desc: "يخفي تفاصيل التخزين وSQL خلف عقد في لغة الـ Domain." }
        ],
        consequences: [
          "استحالة اختبار الـ Business Logic في Unit Tests بدون تشغيل قاعدة بيانات أو خدمات دفع حقيقية.",
          "صعوبة تغيير مزودي الخدمات (Vendor Lock-in) مثل الانتقال من Stripe إلى PayPal.",
          "انتشار تفاصيل البنية التحتية داخل صميم قواعد العمل."
        ]
      }
    ],
    unifiedExample: {
      title: "مثال واحد يجمع مبادئ SOLID الخمسة معاً",
      subtitle: "نظام إشعارات متعدد القنوات (Multi-Channel Notification System)",
      code: `// 1. DIP & ISP: Interface صغيرة متخصصة للإرسال فقط
public interface INotificationSender
{
    Task SendAsync(NotificationMessage message, CancellationToken cancellationToken);
}

// 2. SRP & LSP: كل فئة مسؤولة عن وسيلة إرسال واحدة وتحترم العقد
public class EmailNotificationSender : INotificationSender
{
    public Task SendAsync(NotificationMessage message, CancellationToken cancellationToken)
    {
        Console.WriteLine($"[Email Sent]: {message.Content}");
        return Task.CompletedTask;
    }
}

public class SmsNotificationSender : INotificationSender
{
    public Task SendAsync(NotificationMessage message, CancellationToken cancellationToken)
    {
        Console.WriteLine($"[SMS Sent]: {message.Content}");
        return Task.CompletedTask;
    }
}

// 3. SRP & OCP & DIP: الخدمة تنسق فقط، وتعتمد على IEnumerable<INotificationSender>
public class NotificationService
{
    private readonly IEnumerable<INotificationSender> _senders;

    public NotificationService(IEnumerable<INotificationSender> senders)
        => _senders = senders;

    public async Task NotifyAsync(NotificationMessage message, CancellationToken cancellationToken)
    {
        foreach (var sender in _senders)
        {
            await sender.SendAsync(message, cancellationToken);
        }
    }
}

// التسجيل في الـ DI:
// services.AddScoped<INotificationSender, EmailNotificationSender>();
// services.AddScoped<INotificationSender, SmsNotificationSender>();
// services.AddScoped<NotificationService>();`,
      breakdown: [
        { principle: "SRP", how: "كل Sender مسؤول عن قناة واحدة فقط، وNotificationService مسؤولة حصرياً عن تنسيق دورة الإرسال." },
        { principle: "OCP", how: "يمكن إضافة WhatsAppNotificationSender في أي وقت وتسجيله بالـ DI دون تعديل سطر واحد في NotificationService." },
        { principle: "LSP", how: "أي Sender يطبق INotificationSender يمكن استبداله أو إضافته بأمان دون أن تنكسر الحلقة أو يُلقى استثناء غير متوقع." },
        { principle: "ISP", how: "الـ Interface تحتوي فقط على الدالة المطلوبة بدقة (SendAsync) ولا تفرض دوالاً زائدة." },
        { principle: "DIP", how: "الـ NotificationService تعتمد على INotificationSender التجريدي وليس على كود الإيميل أو الـ SMS مباشرة." }
      ]
    },
    selfReviewQuestions: [
      "هل هذا الـ Class له سبب واحد واضح ومحدد للتغيير؟ (SRP)",
      "هل إضافة نوع أو سيناريو جديد تتطلب تعديل switch موجودة أم مجرد إضافة Implementation جديدة؟ (OCP)",
      "هل كل Implementation تحترم الـ Contract وتوقعات العميل بدون رمي Exceptions غير مدعومة؟ (LSP)",
      "هل الـ Client يعتمد حصراً على العمليات التي يحتاجها في واجهة دوره؟ (ISP)",
      "هل الـ Business Logic معزولة تماماً ولا تعرف تفاصيل SQL أو Redis أو SDK خارجي بشكل مباشر؟ (DIP)",
      "هل استخدمت الـ Pattern لحل مشكلة معمارية حقيقية أم أضفت تعقيداً لمجرد استخدام الـ Pattern؟"
    ]
  },

  // Top 5 Most Important Questions Per Section (Curated Senior & Architect Interview Reference)
  top5PerSection: [
    {
      chapterId: 1,
      title: "Chapter 1 - C# Advanced",
      icon: "⚡",
      category: "Language & Runtime",
      focus: "Evaluate memory layout understanding, boxing avoidance, zero-allocation Span/ref struct idioms, and iterator state machines.",
      questionIds: ["Q1", "Q2", "Q8", "Q9", "Q11"]
    },
    {
      chapterId: 2,
      title: "Chapter 2 - .NET CLR & Memory Management",
      icon: "⚡",
      category: "Language & Runtime",
      focus: "Test CLR stack vs heap allocation, Gen0/1/2 GC compaction lifecycle, LOH fragmentation, ArrayPool buffer reuse, and safe IDisposable patterns.",
      questionIds: ["Q18", "Q19", "Q20", "Q21", "Q24"]
    },
    {
      chapterId: 3,
      title: "Chapter 3 - ASP.NET Core Pipeline & Middleware",
      icon: "🌐",
      category: "ASP.NET Core & APIs",
      focus: "Assess request pipeline ordering, app.Use/Run/Map mechanics, Middleware vs Filters lifecycle, global ProblemDetails error handling, and rate limiting.",
      questionIds: ["Q30", "Q31", "Q33", "Q35", "Q40"]
    },
    {
      chapterId: 4,
      title: "Chapter 4 - Dependency Injection",
      icon: "💉",
      category: "Dependency Injection",
      focus: "Uncover captive dependency bugs (Singleton capturing Scoped), service lifetimes, manual scope creation in BackgroundService, Options pattern, and Keyed Services.",
      questionIds: ["Q44", "Q45", "Q47", "Q48", "Q54"]
    },
    {
      chapterId: 5,
      title: "Chapter 5 - Entity Framework Core",
      icon: "🗄️",
      category: "Data Access & SQL",
      focus: "Verify AsNoTracking query efficiency, DbContext threading/lifecycle, N+1 query identification and eager/split loading, bulk ExecuteUpdate, and global query filters.",
      questionIds: ["Q56", "Q57", "Q58", "Q63", "Q66"]
    },
    {
      chapterId: 6,
      title: "Chapter 6 - SQL Server",
      icon: "🗄️",
      category: "Data Access & SQL",
      focus: "Probe Clustered vs Non-Clustered B-tree index structures, covering indexes with INCLUDE, reading execution plan scans vs seeks, isolation levels/NOLOCK, and deadlock graphs.",
      questionIds: ["Q69", "Q70", "Q71", "Q72", "Q75"]
    },
    {
      chapterId: 7,
      title: "Chapter 7 - LINQ",
      icon: "🗄️",
      category: "Data Access & SQL",
      focus: "Test deferred vs immediate execution, Select vs SelectMany, AsQueryable expression tree generation vs AsEnumerable in-memory evaluation, and accidental mid-stream ToList.",
      questionIds: ["Q82", "Q83", "Q88", "Q90", "C7-A1"]
    },
    {
      chapterId: 8,
      title: "Chapter 8 - Async/Await & Multithreading",
      icon: "🔄",
      category: "Async & Concurrency",
      focus: "Examine compiler state machine generation, ConfigureAwait(false) context behavior, Task vs ValueTask allocation costs, async void process-crashing risks, and SemaphoreSlim.",
      questionIds: ["Q92", "Q94", "Q95", "Q96", "Q100"]
    },
    {
      chapterId: 9,
      title: "Chapter 9 - Clean Architecture",
      icon: "🏛️",
      category: "Architecture & DDD",
      focus: "Assess Dependency Rule compliance, layer boundary responsibilities (Domain/App/Infra), Persistence Ignorance, service types, and Vertical Slice architecture trade-offs.",
      questionIds: ["Q106", "Q109", "Q110", "Q111", "C9-A1"]
    },
    {
      chapterId: 10,
      title: "Chapter 10 - Domain-Driven Design (DDD)",
      icon: "🏛️",
      category: "Architecture & DDD",
      focus: "Check Bounded Context boundaries, Entity vs Value Object identity, Aggregate Root consistency boundaries, Domain vs Integration Events, and Rich vs Anemic domain models.",
      questionIds: ["Q117", "Q118", "Q119", "Q120", "Q128"]
    },
    {
      chapterId: 11,
      title: "Chapter 11 - CQRS & MediatR",
      icon: "🏛️",
      category: "Architecture & DDD",
      focus: "Evaluate Command vs Query separation, logical vs physical CQRS trade-offs, MediatR pipeline behaviors for cross-cutting validation/logging, and transactional Outbox pattern.",
      questionIds: ["Q130", "Q131", "Q133", "Q136", "C11-A2"]
    },
    {
      chapterId: 12,
      title: "Chapter 12 - Design Patterns",
      icon: "🧩",
      category: "Design Patterns & SOLID",
      focus: "Examine Factory Method vs Abstract Factory vs Builder, Decorator vs inheritance in DI, Adapter vs Facade, Strategy pattern dynamic dispatch, and Repository pattern with EF Core.",
      questionIds: ["Q141", "Q143", "Q145", "Q147", "Q151"]
    },
    {
      chapterId: 13,
      title: "Chapter 13 - Microservices",
      icon: "🕸️",
      category: "Microservices & Distributed",
      focus: "Probe service decomposition principles, Orchestration vs Choreography, Saga pattern distributed transactions, idempotency handling, and Polly resilience patterns (Circuit Breaker).",
      questionIds: ["Q154", "Q156", "Q157", "Q161", "Q162"]
    },
    {
      chapterId: 14,
      title: "Chapter 14 - Docker",
      icon: "🐳",
      category: "DevOps & Cloud",
      focus: "Verify container vs image lifecycle, multi-stage build optimization for .NET, ENTRYPOINT vs CMD execution semantics, and rootless container security in production.",
      questionIds: ["Q167", "Q168", "Q169", "Q170", "C14-A2"]
    },
    {
      chapterId: 15,
      title: "Chapter 15 - Kubernetes",
      icon: "🐳",
      category: "DevOps & Cloud",
      focus: "Assess Control Plane vs Worker Node architecture, Pod vs Deployment vs StatefulSet workloads, ClusterIP/NodePort/LoadBalancer networking, probes, and HPA resource limits.",
      questionIds: ["Q178", "Q179", "Q180", "Q184", "Q186"]
    },
    {
      chapterId: 16,
      title: "Chapter 16 - Redis",
      icon: "📬",
      category: "Messaging & Caching",
      focus: "Test Redis data structures (Hash, Sorted Set, Streams), RDB vs AOF persistence durability, memory eviction policies, distributed locking with SETNX/Redlock, and cache stampede.",
      questionIds: ["Q191", "Q193", "Q194", "Q195", "C16-A1"]
    },
    {
      chapterId: 17,
      title: "Chapter 17 - RabbitMQ & Kafka",
      icon: "📬",
      category: "Messaging & Caching",
      focus: "Contrast RabbitMQ exchange types and DLX with Kafka partition log model, consumer groups, delivery guarantees (at-least-once), and message broker vs event stream trade-offs.",
      questionIds: ["Q203", "Q206", "Q209", "Q210", "Q214"]
    },
    {
      chapterId: 18,
      title: "Chapter 18 - Authentication & Authorization",
      icon: "🛡️",
      category: "Security & Observability",
      focus: "Examine JWT structure and signature verification, Access vs Refresh token lifecycles, OAuth2 Authorization Code with PKCE, ASP.NET Core ClaimsPrincipal, and policy authorization.",
      questionIds: ["Q216", "Q217", "Q218", "Q222", "Q223"]
    },
    {
      chapterId: 19,
      title: "Chapter 19 - Caching",
      icon: "📬",
      category: "Messaging & Caching",
      focus: "Test Cache-Aside vs Write-Through patterns, IMemoryCache vs IDistributedCache, TTL and tag invalidation, cache stampede mutexes, and absolute vs sliding expiration traps.",
      questionIds: ["Q229", "Q230", "Q232", "Q233", "Q235"]
    },
    {
      chapterId: 20,
      title: "Chapter 20 - Logging & Observability",
      icon: "🛡️",
      category: "Security & Observability",
      focus: "Assess structured logging with template arguments, distributed tracing with W3C TraceContext/OpenTelemetry, three pillars of observability, and high-cardinality metric hazards.",
      questionIds: ["Q240", "Q244", "Q245", "Q246", "C20-A5"]
    }
  ],

  // Questions Database: 353 questions extracted from the 3 reference docs
  questions: []
};

if (typeof window !== "undefined") {
  window.INTERVIEW_DATA = INTERVIEW_DATA;
}
if (typeof global !== "undefined") {
  global.INTERVIEW_DATA = INTERVIEW_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = INTERVIEW_DATA;
}
