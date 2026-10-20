export const products = [
    {
        id: 1,
        title: "Kajitor",
        images: ["/images/kanban-drag-card.png", "/images/job-detail-dialog.png", "/images/analytics-dashboard.png"],
        description: "Job application tracker with a paid subscription plan, browser extension on Chrome, Edge, and Firefox, and a desktop app for Windows and macOS.",
        features: [
            "Table and Kanban board views, drag cards between stages",
            "AI fills in job details from a pasted listing or straight from the page via the browser extension",
            "Upload a CV to pre-fill your profile, then see how well it fits each role",
            "Analytics dashboard: funnel, response rate, weekly activity, stale applications",
            "Dark mode and four colour themes, demo mode with no signup required",
            "Stripe billing with a paid subscription plan",
            "Auth with multi-factor authentication and account security features",
            "800+ backend tests and 100+ frontend test files gate every release",
        ],
        tags: ["ASP.NET Core", "React", "TypeScript", "PostgreSQL", "EF Core", "TanStack Query", "JWT + MFA", "Stripe", "Claude API", "Browser Extension (MV3)", "CI/CD"],
        links: {
            demo: "https://kajitor.com",
            demoLabel: "Live App",
        }
    }
];
