import { Project, BlogPost, ContactMessage } from "../types";

// Seed data for projects
const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Verizon Prime Biller Wholesale",
    description: "Led core BSS billing integration, validation and mediation checking for Verizon's wholesale channels and reseller billing partners in an extensive global team environment.",
    category: "Telecom OSS/BSS",
    icon: "📡",
    techs: ["Singleview Billing", "SQL", "Mediation API", "UAT", "JIRA"],
    impact: "Successfully integrated complex contract validation for multi-million dollar wholesale billing accounts.",
    createdAt: "2024-03-15T08:00:00Z"
  },
  {
    id: "proj-2",
    title: "Capgemini Regression Cycle Automation",
    description: "Designed and engineered a robust modular Java Selenium Grid framework architecture, standardizing automation protocols and significantly optimizing delivery cycles.",
    category: "Test Architecture",
    icon: "⚙️",
    techs: ["Java 21", "Selenium Grid", "Spring Boot", "Docker", "TestNG"],
    impact: "Reduced regression execution durations by 40% across Capgemini delivery lines.",
    createdAt: "2024-01-10T14:15:00Z"
  },
  {
    id: "proj-3",
    title: "Inmarsat Billing Transformation Programme",
    description: "Worked on billing and mediation systems of CSG International to manage wholesale channel billing systems, optimizing rate plan setups and voucher management.",
    category: "Telecom OSS/BSS",
    icon: "💰",
    techs: ["CSG Singleview", "Database Schema", "SIT Testing", "Revenue Assurance"],
    impact: "Ensured seamless partner billing migration with zero post-release SLA leakage.",
    createdAt: "2023-11-20T10:30:00Z"
  },
  {
    id: "proj-4",
    title: "BT Retail Core Mobile Ordering System",
    description: "Conducted extensive end-to-end testing, planning and functional document preparations for BT Group's employee discount and mobile subscription customer ordering portal.",
    category: "Telecom OSS/BSS",
    icon: "📱",
    techs: ["E-commerce", "UAT Scenarios", "UAT Data Setup", "HP ALM"],
    impact: "Delivered brand new retail features to live production databases without any severe P1/P2 defects.",
    createdAt: "2024-05-01T09:00:00Z"
  }
];

// Seed data for blogs
const INITIAL_BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "From QA to Solution Architecture: The Power of Systems Thinking",
    summary: "Why starting in Quality Assurance gives you the ultimate vantage point for designing bulletproof enterprise software architectures.",
    content: `## The Untapped Edge of QA-Born Architects

Many developers dream of transition into Solution Architecture, but some of the most resilient systems are built by those who started in **Quality Assurance**. Why? Because QA engineers don't just ask *"how do I write this function?"*—they ask *"how will this entire system break when scaled, pushed, and abused?"*

### 1. The Power of "System Archeology"
During my 11+ years in Telecom OSS/BSS, I spent years analyzing logs, tracking network interfaces, and decoding packet captures. When you spend that much time understanding the cracks in a system, you develop a "sixth sense" for robust system integration:
*   **Update-Gaps & Race Conditions**: In telemetry or billing systems, small delays are catastrophic.
*   **Dependency Cascades**: Knowing how single point of failures propagate.

### 2. Speaking Three Languages
To design elegant solution architectures, you must translate:
1.  **Business Logic** (What the client actually needs - TMForum eTOM models).
2.  **Engineering Capabilities** (How to deploy safely on cloud-native stacks).
3.  **Real-world Edge Cases** (What happens when networks drop or services timeout).

The modern **Solution Architect** must be a generalist with extreme domain depth. Quality is not an after-thought; it must be designed into the blueprint.`,
    category: "Architecture",
    readTime: "5 min read",
    createdAt: "2026-05-28T09:00:00Z",
    status: "published"
  },
  {
    id: "blog-2",
    title: "Designing for Infinite Resilience in Telecom OSS Platforms",
    summary: "Exploring fault tolerance, transaction isolation, and network management patterns based on a decade of validation.",
    content: `## Resilience in High-Phosphate Domains

In Telecom Operations Support Systems (OSS), "downtime" is not just a missing button—it means service disruptions for thousands of physical terminals.

### Core Architectural Pillars for OSS:
*   **Idempotency Over Everything**: Outage alarms and provisioning commands will be retried. If your endpoints aren't safely idempotent, you'll trigger duplicate orders or duplicate Billing events.
*   **Graceful Degeneration**: If the physical inventory layer (GIS database) is down, the monitoring system should still display cached topologies with a warning, rather than crashing with a HTTP 500.
*   **Rate-Limiting & Backpressure**: Using message queues to handle bulk bursts of telemetry signals during a storm.

Through my path as a Test Architect, I've seen that the best architectures are those that treat failures as standard operational conditions, not exceptions.`,
    category: "Telecom Insights",
    readTime: "7 min read",
    createdAt: "2026-06-01T14:20:00Z",
    status: "published"
  },
  {
    id: "blog-3",
    title: "The Silent Success of Certified Scrum Product Ownership",
    summary: "How holding a CSPO certification changes the way an architect designs technical solutions around user value.",
    content: `## Bridging Technical Design to Real Value

A technically perfect architecture that doesn't deliver business value is a failure.

As a **Certified Scrum Product Owner (CSPO)**, my design philosophy focuses on:
*   **Iterative Design**: Building minimal viable architectures (MVA) that can adapt rather than rigid big-bang designs.
*   **Value-Stream Mapping**: Understanding where waste can be eliminated in the delivery lifecycle.
*   **User-Centric Architecture**: Designing technical APIs that correspond cleanly to actual customer business tasks.

Aligning solution blueprints to high-priority business epic outcomes is the key to enterprise agility.`,
    category: "Career Transition",
    readTime: "4 min read",
    createdAt: "2026-06-02T11:00:00Z",
    status: "published"
  }
];

// LocalStorage Helper Keys
const PROJECTS_KEY = "vetrivel_portfolio_projects";
const BLOGS_KEY = "vetrivel_portfolio_blogs";
const MESSAGES_KEY = "vetrivel_portfolio_messages";

export function getProjects(): Project[] {
  const data = localStorage.getItem(PROJECTS_KEY);
  if (!data || !data.includes("Verizon")) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(INITIAL_PROJECTS));
    return INITIAL_PROJECTS;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_PROJECTS;
  }
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

export function getBlogs(): BlogPost[] {
  const data = localStorage.getItem(BLOGS_KEY);
  if (!data) {
    localStorage.setItem(BLOGS_KEY, JSON.stringify(INITIAL_BLOGS));
    return INITIAL_BLOGS;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_BLOGS;
  }
}

export function saveBlogs(blogs: BlogPost[]) {
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
}

export function getMessages(): ContactMessage[] {
  const data = localStorage.getItem(MESSAGES_KEY);
  if (!data) {
    return [];
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

export function addMessage(message: Omit<ContactMessage, "id" | "createdAt">): ContactMessage {
  const messages = getMessages();
  const newMessage: ContactMessage = {
    ...message,
    id: `msg-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  messages.unshift(newMessage); // newest first
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
  return newMessage;
}

export function deleteMessage(id: string) {
  const messages = getMessages().filter(m => m.id !== id);
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
}

export function markMessageReplied(id: string) {
  const messages = getMessages().map(m => m.id === id ? { ...m, replied: true } : m);
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
}
