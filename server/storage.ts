import { 
  User, 
  InsertUser, 
  Project, 
  InsertProject, 
  BlogPost, 
  InsertBlogPost, 
  ContactMessage, 
  InsertContactMessage 
} from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project methods
  getAllProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Blog post methods
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostsByLanguage(language: string): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string, language: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  
  // Seed data method for demo
  seedData(): Promise<void>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private blogPosts: Map<number, BlogPost>;
  private contactMessages: Map<number, ContactMessage>;
  
  private userIdCounter: number;
  private projectIdCounter: number;
  private blogPostIdCounter: number;
  private contactMessageIdCounter: number;
  
  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.blogPosts = new Map();
    this.contactMessages = new Map();
    
    this.userIdCounter = 1;
    this.projectIdCounter = 1;
    this.blogPostIdCounter = 1;
    this.contactMessageIdCounter = 1;
  }
  
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }
  
  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user = { id, ...insertUser };
    this.users.set(id, user);
    return user;
  }
  
  // Project methods
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  
  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(project => project.featured);
  }
  
  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.projectIdCounter++;
    const project = { 
      id, 
      ...insertProject, 
      demoUrl: insertProject.demoUrl || null,
      codeUrl: insertProject.codeUrl || null,
      featured: insertProject.featured || false,
      createdAt: new Date() 
    };
    this.projects.set(id, project);
    return project;
  }
  
  // Blog post methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }
  
  async getBlogPostsByLanguage(language: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.language === language)
      .sort((a, b) => {
        const dateA = a.date instanceof Date ? a.date : new Date();
        const dateB = b.date instanceof Date ? b.date : new Date();
        return dateB.getTime() - dateA.getTime();
      });
  }
  
  async getBlogPostBySlug(slug: string, language: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      post => post.slug === slug && post.language === language
    );
  }
  
  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostIdCounter++;
    const blogPost = { 
      id, 
      ...insertBlogPost, 
      content: insertBlogPost.content || null,
      language: insertBlogPost.language || 'en',
      date: new Date() 
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
  
  // Contact message methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageIdCounter++;
    const message = { 
      id, 
      ...insertMessage, 
      createdAt: new Date(),
      read: false
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  // Seed initial data for demo purposes
  async seedData(): Promise<void> {
    // Sample projects
    const sampleProjects: InsertProject[] = [
      {
        title: "AI Conversation Engine",
        description: "An advanced NLP-powered chatbot system with multi-language support and context awareness.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        tags: [".NET 8", "Angular", "PyTorch", "NLP"],
        demoUrl: "https://demo.example.com/ai-chatbot",
        codeUrl: "https://github.com/example/ai-chatbot",
        featured: true
      },
      {
        title: "Performance Analytics Platform",
        description: "Real-time data visualization dashboard with predictive analytics for enterprise clients.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        tags: [".NET 8", "Angular", "SQL Server", "Chart.js"],
        demoUrl: "https://demo.example.com/analytics",
        codeUrl: "https://github.com/example/analytics",
        featured: false
      },
      {
        title: "Microservices E-Commerce",
        description: "Scalable e-commerce platform with distributed microservices architecture and CI/CD pipeline.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        tags: [".NET 8", "Angular", "SQL Server", "Docker", "Azure"],
        demoUrl: "https://demo.example.com/ecommerce",
        codeUrl: "https://github.com/example/ecommerce",
        featured: false
      }
    ];
    
    // Add sample projects to storage
    for (const projectData of sampleProjects) {
      await this.createProject(projectData);
    }
    
    // Sample blog posts for each language
    const languages = ["en", "ar", "de", "it"];
    
    const blogPostTemplates = [
      {
        titleEn: "Building Efficient APIs with ASP.NET Core 8 Minimal APIs",
        excerptEn: "Learn how to leverage the power of Minimal APIs in ASP.NET Core 8 to build high-performance, maintainable web services with less code and boilerplate.",
        contentEn: "app.MapGet(\"/api/users/{id}\", async (int id, AppDbContext db) => <br>&nbsp;&nbsp;await db.Users.FindAsync(id) is User user<br>&nbsp;&nbsp;&nbsp;&nbsp;? Results.Ok(user)<br>&nbsp;&nbsp;&nbsp;&nbsp;: Results.NotFound());",
        category: "Backend Development",
        slug: "building-efficient-apis-asp-net-core-8"
      },
      {
        titleEn: "Implementing Multi-Language Support in Angular Applications",
        excerptEn: "A comprehensive guide to implementing robust internationalization in Angular applications using ngx-translate with support for RTL languages.",
        contentEn: "// app.module.ts<br>import &#123; TranslateModule, TranslateLoader &#125; from '@ngx-translate/core';<br>import &#123; TranslateHttpLoader &#125; from '@ngx-translate/http-loader';<br><br>export function HttpLoaderFactory(http: HttpClient) &#123;<br>&nbsp;&nbsp;return new TranslateHttpLoader(http, './assets/i18n/', '.json');<br>&#125;",
        category: "Artificial Intelligence",
        slug: "implementing-multi-language-support-angular"
      }
    ];
    
    // Title and excerpt translations for each language
    const translations = {
      ar: {
        titles: [
          "بناء واجهات برمجة تطبيقات فعالة مع ASP.NET Core 8 Minimal APIs",
          "تنفيذ دعم متعدد اللغات في تطبيقات Angular"
        ],
        excerpts: [
          "تعلم كيفية الاستفادة من قوة واجهات برمجة التطبيقات المصغرة في ASP.NET Core 8 لبناء خدمات ويب عالية الأداء وقابلة للصيانة بأقل قدر من التعليمات البرمجية.",
          "دليل شامل لتنفيذ التدويل القوي في تطبيقات Angular باستخدام ngx-translate مع دعم لغات RTL."
        ]
      },
      de: {
        titles: [
          "Effiziente APIs mit ASP.NET Core 8 Minimal APIs erstellen",
          "Implementierung mehrsprachiger Unterstützung in Angular-Anwendungen"
        ],
        excerpts: [
          "Erfahren Sie, wie Sie die Leistungsfähigkeit von Minimal APIs in ASP.NET Core 8 nutzen, um leistungsstarke, wartbare Webdienste mit weniger Code zu erstellen.",
          "Ein umfassender Leitfaden zur Implementierung robuster Internationalisierung in Angular-Anwendungen mit ngx-translate und Unterstützung für RTL-Sprachen."
        ]
      },
      it: {
        titles: [
          "Creazione di API efficienti con ASP.NET Core 8 Minimal APIs",
          "Implementazione del supporto multilingue nelle applicazioni Angular"
        ],
        excerpts: [
          "Impara a sfruttare la potenza delle Minimal API in ASP.NET Core 8 per costruire servizi web ad alte prestazioni e manutenibili con meno codice.",
          "Una guida completa all'implementazione di una solida internazionalizzazione nelle applicazioni Angular utilizzando ngx-translate con supporto per le lingue RTL."
        ]
      }
    };
    
    // Create blog posts for each language
    for (const language of languages) {
      for (let i = 0; i < blogPostTemplates.length; i++) {
        const template = blogPostTemplates[i];
        const title = language === "en" 
          ? template.titleEn 
          : translations[language as keyof typeof translations].titles[i];
        
        const excerpt = language === "en" 
          ? template.excerptEn 
          : translations[language as keyof typeof translations].excerpts[i];
        
        const postData: InsertBlogPost = {
          title,
          excerpt,
          content: template.contentEn, // Keep code samples in English for all languages
          category: template.category,
          slug: template.slug,
          language
        };
        
        await this.createBlogPost(postData);
      }
    }
  }
}

// Create and export the storage instance
export const storage = new MemStorage();

// Seed data on startup
storage.seedData().catch(console.error);
