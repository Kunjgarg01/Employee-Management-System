const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare quarterly report",
        description: "Compile financial and performance data for Q3.",
        date: "2025-08-20T10:00:00Z",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update CRM data",
        description: "Ensure all client contact info is current.",
        date: "2025-08-10T14:00:00Z",
        category: "Data Entry"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client meeting follow-up",
        description: "Send summary email and action items.",
        date: "2025-08-15T09:00:00Z",
        category: "Client Relations"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test new software release",
        description: "Run functional tests for version 4.2.0.",
        date: "2025-08-25T13:30:00Z",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit weekly status update",
        description: "Share completed tasks and blockers.",
        date: "2025-08-22T17:00:00Z",
        category: "Reporting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Code review for teammate",
        description: "Review PR #132 for frontend component.",
        date: "2025-08-26T11:00:00Z",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix bug in user login flow",
        description: "Investigate and resolve session timeout issue.",
        date: "2025-08-21T15:00:00Z",
        category: "Bug Fixing"
      }
    ]
  },
  {
    id: 3,
    firstName: "Riya",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research competitor products",
        description: "Create summary document of top 5 competitors.",
        date: "2025-08-30T12:00:00Z",
        category: "Market Research"
      },
      {
       active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Organize team offsite",
        description: "Plan venue and agenda for team-building retreat.",
        date: "2025-08-18T10:00:00Z",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Create onboarding materials",
        description: "Develop slides and documents for new hires.",
        date: "2025-08-19T09:00:00Z",
        category: "Training"
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Analyze website traffic",
        description: "Prepare monthly analytics report using GA.",
        date: "2025-08-29T08:00:00Z",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Social media content calendar",
        description: "Plan posts for September.",
        date: "2025-08-25T10:00:00Z",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Send newsletter draft",
        description: "Submit to manager for review.",
        date: "2025-08-20T11:00:00Z",
        category: "Communication"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Launch A/B test",
        description: "Run homepage variation test.",
        date: "2025-08-28T15:00:00Z",
        category: "Experimentation"
      }
    ]
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Internal security audit",
        description: "Verify access permissions and logs.",
        date: "2025-08-29T09:00:00Z",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update documentation",
        description: "Ensure all APIs are documented properly.",
        date: "2025-08-23T16:00:00Z",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Configure CI/CD pipeline",
        description: "Integrate automated build system.",
        date: "2025-08-21T14:00:00Z",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Monitor production logs",
        description: "Check for anomalies or spikes in errors.",
        date: "2025-08-28T13:00:00Z",
        category: "Monitoring"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Kunj",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = (key) => {
  const employees= JSON.parse(localStorage.getItem("employees"));
  const admin= JSON.parse(localStorage.getItem("admin"));
  return{ employees, admin };
}