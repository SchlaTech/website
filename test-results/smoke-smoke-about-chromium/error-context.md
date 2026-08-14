# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> smoke: /about
- Location: tests\smoke.spec.ts:6:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 4
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "SchlaTech logo SCHLATECH Manufacturing software" [ref=e4] [cursor=pointer]:
        - /url: /
        - img "SchlaTech logo" [ref=e5]
        - generic [ref=e6]:
          - generic [ref=e7]: SCHLATECH
          - generic [ref=e8]: Manufacturing software
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - button "Solutions" [ref=e13]
        - link "Case Studies" [ref=e16] [cursor=pointer]:
          - /url: /portfolio
        - link "About" [ref=e17] [cursor=pointer]:
          - /url: /about
        - link "Contact" [ref=e18] [cursor=pointer]:
          - /url: /#contact
        - link "Discuss Your Project" [ref=e19] [cursor=pointer]:
          - /url: /#contact
  - banner [ref=e20]:
    - generic [ref=e24]:
      - paragraph [ref=e25]: SchlaTech
      - heading "Why SchlaTech" [level=1] [ref=e26]
      - paragraph [ref=e27]: Practical software and ERP know-how that solve manufacturing problems.
      - link "Discuss Your Project" [ref=e29] [cursor=pointer]:
        - /url: /#contact
  - main [ref=e30]:
    - generic [ref=e31]:
      - heading "We solve the problems manufacturers actually have" [level=2] [ref=e32]
      - paragraph [ref=e33]: "SchlaTech focuses on measurable outcomes: reduced touch time, fewer errors, stronger security, and clearer visibility across operations. We combine deep ERP experience with pragmatic software engineering to deliver solutions that are easy to adopt and maintain."
    - generic [ref=e34]:
      - article [ref=e35]:
        - heading "Business-first approach" [level=3] [ref=e36]
        - paragraph [ref=e37]: We start with your process, not a technology. Our designs fit how your team works today and improve what matters most.
      - article [ref=e38]:
        - heading "ERP and Acumatica expertise" [level=3] [ref=e39]
        - paragraph [ref=e40]: Years of Acumatica and ERP integrations means fewer surprises and faster delivery when your systems and data need to work together.
      - article [ref=e41]:
        - heading "Maintainable, practical software" [level=3] [ref=e42]
        - paragraph [ref=e43]: "We build tools your team can own: readable code, sensible architecture, and support strategies that keep systems running long-term."
    - generic [ref=e44]:
      - heading "What we deliver" [level=3] [ref=e45]
      - list [ref=e46]:
        - listitem [ref=e47]: Acumatica integrations, customizations, and Generic Inquiries
        - listitem [ref=e48]: Secure OAuth / Microsoft Entra ID authentication migrations
        - listitem [ref=e49]: Shop floor automation, Kiosk/Workstation deployments, and label printing
        - listitem [ref=e50]: Reporting, dashboards, and operational analytics (Power BI, SQL)
        - listitem [ref=e51]: Mobile and desktop apps for field and plant operations
        - listitem [ref=e52]: Performance and reliability improvements for high-throughput environments
    - generic [ref=e53]:
      - heading "Featured success stories" [level=3] [ref=e54]
      - paragraph [ref=e55]: A few examples of how we turn business problems into operational improvements.
      - generic [ref=e56]:
        - generic [ref=e57]:
          - heading "Acumatica OAuth / Microsoft Entra ID Migration" [level=4] [ref=e58]
          - paragraph [ref=e59]: "Problem: Legacy Windows auth blocked secure remote access and future-proofing."
          - paragraph [ref=e60]: "Solution: Migrated to OAuth 2.0 and Microsoft Entra ID; preserved workflows and updated integrations."
          - paragraph [ref=e61]: "Impact: Modern authentication, stronger security, and simpler deployments."
        - generic [ref=e62]:
          - heading "Production Scheduling Dashboard" [level=4] [ref=e63]
          - paragraph [ref=e64]: "Problem: Planners jumped between ERP screens and spreadsheets, slowing decisions."
          - paragraph [ref=e65]: "Solution: Consolidated scheduling data into a single interface with mass-updates and conflict detection."
          - paragraph [ref=e66]: "Impact: Faster planning, fewer errors, and clearer visibility."
        - generic [ref=e67]:
          - heading "Cutbill Builder" [level=4] [ref=e68]
          - paragraph [ref=e69]: "Problem: Manual cutbill creation took hours and introduced costly mistakes."
          - paragraph [ref=e70]: "Solution: Desktop app automated cut calculations and exported production-ready files."
          - paragraph [ref=e71]: "Impact: Reduced a multi-hour task to seconds and saved 250+ hours per year."
      - link "Explore all case studies →" [ref=e73] [cursor=pointer]:
        - /url: /portfolio
    - generic [ref=e74]:
      - heading "Technologies we use" [level=3] [ref=e75]
      - generic [ref=e76]:
        - generic [ref=e77]: Acumatica
        - generic [ref=e78]: OAuth 2.0
        - generic [ref=e79]: Microsoft Entra ID
        - generic [ref=e80]: .NET
        - generic [ref=e81]: C#
        - generic [ref=e82]: SQL Server
        - generic [ref=e83]: REST APIs
        - generic [ref=e84]: WPF
        - generic [ref=e85]: Android
        - generic [ref=e86]: Power BI
        - generic [ref=e87]: Label Printing
    - generic [ref=e88]:
      - heading "Meet the founder" [level=3] [ref=e89]
      - generic [ref=e90]:
        - img "Matt Schlabach" [ref=e92]
        - generic [ref=e93]:
          - paragraph [ref=e94]: Matt Schlabach leads SchlaTech with a practical, outcome-driven mindset. He pairs hands-on ERP and manufacturing domain knowledge with pragmatic software engineering to deliver solutions that reduce friction and scale with the business.
          - paragraph [ref=e95]: Expertise
          - generic [ref=e96]:
            - generic [ref=e97]: Acumatica customizations & integrations
            - generic [ref=e101]: OAuth / Microsoft Entra ID
            - generic [ref=e105]: Desktop & mobile manufacturing apps (WPF, Android)
            - generic [ref=e108]: SQL Server, reporting & Power BI
          - generic [ref=e113]:
            - paragraph [ref=e114]: Matt works directly with clients on architecture, Acumatica projects, and manufacturing automation—helping teams get from problem to production-ready solution.
            - link "Request a consult" [ref=e116] [cursor=pointer]:
              - /url: /contact
    - generic [ref=e117]:
      - heading "Our process" [level=3] [ref=e118]
      - paragraph [ref=e119]: We follow a simple, predictable process so projects move from problem to production without surprises.
      - generic [ref=e120]:
        - generic [ref=e121]:
          - heading "1. Discover" [level=4] [ref=e122]
          - paragraph [ref=e123]: On-site or remote workshops to understand your process, constraints, and goals. We focus on measurable outcomes.
        - generic [ref=e124]:
          - heading "2. Plan" [level=4] [ref=e125]
          - paragraph [ref=e126]: Technical design, prioritized backlog, and a clear estimate. We identify the minimal viable deliverables that reduce risk.
        - generic [ref=e127]:
          - heading "3. Build & validate" [level=4] [ref=e128]
          - paragraph [ref=e129]: Iterative development with regular demos, user acceptance testing, and a pilot rollout to validate value before full deployment.
      - generic [ref=e130]:
        - generic [ref=e131]:
          - heading "4. Deploy" [level=4] [ref=e132]
          - paragraph [ref=e133]: We handle deployment, training, and initial support to ensure a smooth handoff and immediate ROI.
        - generic [ref=e134]:
          - heading "5. Support & improve" [level=4] [ref=e135]
          - paragraph [ref=e136]: Ongoing support, small enhancements, and performance tuning so your solution continues to deliver value.
    - generic [ref=e137]:
      - heading "Frequently asked questions" [level=3] [ref=e138]
      - generic [ref=e139]:
        - generic [ref=e140]:
          - paragraph [ref=e141]: How long does a typical project take?
          - paragraph [ref=e142]: "Small enhancements: 1–4 weeks. Medium projects (integrations, dashboards): 4–12 weeks. Larger ERP work is phased with pilot deliverables to reduce risk."
        - generic [ref=e143]:
          - paragraph [ref=e144]: Do you work with Acumatica?
          - paragraph [ref=e145]: Yes — Acumatica customizations, Generic Inquiries, REST API integrations, and migration projects are core capabilities.
        - generic [ref=e146]:
          - paragraph [ref=e147]: How do you handle authentication and security?
          - paragraph [ref=e148]: We implement modern authentication (OAuth 2.0, Microsoft Entra ID), secure API patterns, and follow least-privilege principles.
        - generic [ref=e149]:
          - paragraph [ref=e150]: What happens after launch?
          - paragraph [ref=e151]: We provide documentation, training, and initial support. Ongoing maintenance is available via retainer or T&M.
        - generic [ref=e152]:
          - paragraph [ref=e153]: Can you build shop-floor apps and integrations?
          - paragraph [ref=e154]: Yes — we build desktop and mobile apps, barcode/QR workflows, label printing, and direct ERP integration.
        - generic [ref=e155]:
          - paragraph [ref=e156]: How do we get started?
          - paragraph [ref=e157]: Start with a discovery call. We scope a pilot that demonstrates measurable value quickly and reduces execution risk.
    - generic [ref=e158]:
      - heading "Have a manufacturing or ERP problem to solve?" [level=2] [ref=e159]
      - paragraph [ref=e160]: Tell us about the bottleneck and we’ll show you how to fix it.
      - link "Contact Us" [ref=e161] [cursor=pointer]:
        - /url: /#form
    - generic [ref=e162]:
      - generic [ref=e163]:
        - generic [ref=e164]:
          - link "SchlaTech logo SCHLATECH Manufacturing software" [ref=e165] [cursor=pointer]:
            - /url: /
            - img "SchlaTech logo" [ref=e166]
            - generic [ref=e167]:
              - generic [ref=e168]: SCHLATECH
              - generic [ref=e169]: Manufacturing software
          - paragraph [ref=e170]: We help manufacturers eliminate manual work through custom software, ERP expertise, and intelligent automation.
          - paragraph [ref=e171]: Insight. Action. Growth.
        - generic [ref=e172]:
          - heading "Navigate" [level=2] [ref=e173]
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link "Home" [ref=e176] [cursor=pointer]:
                - /url: /
            - listitem [ref=e177]:
              - link "Solutions" [ref=e178] [cursor=pointer]:
                - /url: /#services
            - listitem [ref=e179]:
              - link "Case Studies" [ref=e180] [cursor=pointer]:
                - /url: /portfolio
            - listitem [ref=e181]:
              - link "About" [ref=e182] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e183]:
              - link "Contact" [ref=e184] [cursor=pointer]:
                - /url: /#contact
            - listitem [ref=e185]:
              - link "Acumatica Development" [ref=e186] [cursor=pointer]:
                - /url: /acumatica-development
        - generic [ref=e187]:
          - heading "Contact" [level=2] [ref=e188]
          - list [ref=e189]:
            - listitem [ref=e190]: Holmesville, Ohio
            - listitem [ref=e191]:
              - link "matt@schlatech.com" [ref=e192] [cursor=pointer]:
                - /url: mailto:matt@schlatech.com
            - listitem [ref=e193]:
              - link "(330) 763-1399" [ref=e194] [cursor=pointer]:
                - /url: tel:+13307631399
            - listitem [ref=e195]:
              - link "Instagram" [ref=e196] [cursor=pointer]:
                - /url: https://instagram.com/schlatech
      - paragraph [ref=e198]: © SchlaTech. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const pages = ['/', '/about', '/portfolio', '/acumatica-development'];
  4  | 
  5  | for (const p of pages) {
  6  |   test(`smoke: ${p}`, async ({ page }) => {
  7  |     const errors: string[] = [];
  8  |     page.on('console', (msg) => {
  9  |       if (msg.type() === 'error') errors.push(msg.text());
  10 |     });
  11 | 
  12 |     const response = await page.goto(p, { waitUntil: 'load' });
  13 |     expect(response).not.toBeNull();
  14 |     expect(response.status()).toBeGreaterThanOrEqual(200);
  15 |     expect(response.status()).toBeLessThan(400);
  16 | 
  17 |     const cssCount = await page.locator('link[rel="stylesheet"]').count();
  18 |     expect(cssCount).toBeGreaterThan(0);
  19 | 
  20 |     // allow any client-side scripts to run
  21 |     await page.waitForTimeout(300);
> 22 |     expect(errors.length).toBe(0);
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  23 |   });
  24 | }
  25 | 
```