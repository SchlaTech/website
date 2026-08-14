# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> smoke: /
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
  - main [ref=e20]:
    - generic [ref=e25]:
      - paragraph [ref=e26]: Manufacturing software that fits your business
      - heading "We Build Software Manufacturers Actually Want to Use." [level=1] [ref=e27]
      - paragraph [ref=e28]: SchlaTech helps manufacturers eliminate repetitive work, connect disconnected systems, and improve visibility through custom software, ERP solutions, and practical automation.
      - generic [ref=e29]:
        - link "Discuss Your Project" [ref=e30] [cursor=pointer]:
          - /url: "#contact"
        - link "View Our Work" [ref=e31] [cursor=pointer]:
          - /url: /portfolio
      - paragraph [ref=e32]: Custom software • ERP solutions • Automation • Reporting
    - generic [ref=e35]:
      - generic [ref=e36]: Acumatica
      - generic [ref=e37]: Global Shop ERP
      - generic [ref=e38]: .NET
      - generic [ref=e39]: C#
      - generic [ref=e40]: SQL Server
      - generic [ref=e41]: Power BI
      - generic [ref=e42]: REST APIs
      - generic [ref=e43]: Microsoft Azure
      - link "Acumatica development" [ref=e44] [cursor=pointer]:
        - /url: /acumatica-development
    - generic [ref=e46]:
      - generic [ref=e47]:
        - paragraph [ref=e48]: Built for the problems manufacturers face every day
        - heading "Practical software for the work that slows your team down" [level=2] [ref=e49]
        - paragraph [ref=e50]: When spreadsheets, manual entry, disconnected applications, and limited ERP functionality slow your team down, SchlaTech builds practical solutions around the way your business actually works.
      - generic [ref=e51]:
        - article [ref=e52]:
          - generic [ref=e55]:
            - heading "Repetitive Manual Work" [level=3] [ref=e56]
            - paragraph [ref=e57]: Replace time consuming steps with reliable automation.
        - article [ref=e58]:
          - generic [ref=e61]:
            - heading "Disconnected Systems" [level=3] [ref=e62]
            - paragraph [ref=e63]: Connect your ERP, applications, machines, and data.
        - article [ref=e64]:
          - generic [ref=e67]:
            - heading "Limited ERP Functionality" [level=3] [ref=e68]
            - paragraph [ref=e69]: Extend existing systems without forcing your team into awkward workarounds.
        - article [ref=e70]:
          - generic [ref=e73]:
            - heading "Poor Production Visibility" [level=3] [ref=e74]
            - paragraph [ref=e75]: Give teams clearer scheduling, inventory, and performance information.
        - article [ref=e76]:
          - generic [ref=e79]:
            - heading "Error Prone Data Entry" [level=3] [ref=e80]
            - paragraph [ref=e81]: Improve accuracy with validation, integrations, scanning, and purpose built workflows.
        - article [ref=e82]:
          - generic [ref=e85]:
            - heading "Outdated Internal Tools" [level=3] [ref=e86]
            - paragraph [ref=e87]: Modernize applications your business still depends on.
    - generic [ref=e89]:
      - generic [ref=e90]:
        - paragraph [ref=e91]: Manufacturing software solutions
        - heading "Solutions built around your operation" [level=2] [ref=e92]
        - paragraph [ref=e93]: From ERP extensions to shop floor automation, each engagement is designed to remove friction and improve the way your business runs.
      - generic [ref=e94]:
        - article [ref=e95]:
          - heading "Acumatica and ERP Solutions" [level=3] [ref=e99]
          - paragraph [ref=e100]: Customizations, integrations, reports, workflows, authentication, manufacturing enhancements, and external applications.
          - link "Explore this solution" [ref=e101] [cursor=pointer]:
            - /url: /acumatica-development
        - article [ref=e104]:
          - heading "Manufacturing Automation" [level=3] [ref=e110]
          - paragraph [ref=e111]: Production scheduling, shop floor workflows, barcode scanning, label printing, and repetitive task automation.
          - link "Explore this solution" [ref=e112] [cursor=pointer]:
            - /url: /portfolio
        - article [ref=e115]:
          - heading "Custom Business Applications" [level=3] [ref=e120]
          - paragraph [ref=e121]: Purpose built desktop, web, and mobile software designed around your actual operation.
          - link "Explore this solution" [ref=e122] [cursor=pointer]:
            - /url: /portfolio
        - article [ref=e125]:
          - heading "Reporting and Analytics" [level=3] [ref=e129]
          - paragraph [ref=e130]: Dashboards, KPIs, operational reporting, and clearer access to the data your team needs.
          - link "Explore this solution" [ref=e131] [cursor=pointer]:
            - /url: /portfolio
        - article [ref=e134]:
          - heading "Global Shop ERP Solutions" [level=3] [ref=e146]
          - paragraph [ref=e147]: Custom reporting, SQL based tools, integrations, data workflows, and supporting applications for Global Shop environments.
          - link "Explore this solution" [ref=e148] [cursor=pointer]:
            - /url: /portfolio
    - generic [ref=e152]:
      - generic [ref=e153]:
        - generic [ref=e154]:
          - paragraph [ref=e155]: Real software. Measurable results.
          - heading "Results that matter to day to day operations" [level=2] [ref=e156]
          - paragraph [ref=e157]: These examples reflect the kind of work SchlaTech has delivered for manufacturers that need reliable tools and measurable payoff.
        - link "View Our Case Studies" [ref=e158] [cursor=pointer]:
          - /url: /portfolio
      - generic [ref=e161]:
        - generic [ref=e162]:
          - paragraph [ref=e163]: 250+
          - paragraph [ref=e164]: Hours saved annually by automating a weekly cutbill process
        - generic [ref=e165]:
          - paragraph [ref=e166]: 50+
          - paragraph [ref=e167]: Touchscreen systems deployed across showroom locations
        - generic [ref=e168]:
          - paragraph [ref=e169]: 6 Hours to Seconds
          - paragraph [ref=e170]: A manual production task transformed into a one click workflow
        - generic [ref=e171]:
          - paragraph [ref=e172]: One Connected Workflow
          - paragraph [ref=e173]: Inventory data captured in the field and sent directly to the ERP
    - generic [ref=e175]:
      - generic [ref=e176]:
        - paragraph [ref=e177]: Featured wins
        - heading "Business problems solved in manufacturing, ERP, and operations" [level=2] [ref=e178]
        - paragraph [ref=e179]: Each project starts with a real operational challenge and ends with a measurable improvement in security, efficiency, planning, or visibility.
      - generic [ref=e180]:
        - article [ref=e181]:
          - paragraph [ref=e182]: Featured case study
          - heading "Acumatica OAuth / Microsoft Entra ID Migration" [level=3] [ref=e183]
          - generic [ref=e184]:
            - paragraph [ref=e185]: Problem
            - paragraph [ref=e186]: An external manufacturing application relied on legacy Windows Authentication, which made future security, remote access, and ongoing support harder to sustain.
          - generic [ref=e187]:
            - paragraph [ref=e188]: Solution
            - paragraph [ref=e189]: SchlaTech migrated the application to modern OAuth and Microsoft Entra ID authentication while preserving the existing user workflow and updating the app to align with current Microsoft identity patterns.
          - generic [ref=e190]:
            - paragraph [ref=e191]: Impact
            - paragraph [ref=e192]: The client gained modern authentication, improved security posture, easier deployment, and a more future-ready architecture for Acumatica-connected work.
          - generic [ref=e193]:
            - generic [ref=e194]: Acumatica
            - generic [ref=e195]: OAuth 2.0
            - generic [ref=e196]: Microsoft Entra ID
            - generic [ref=e197]: .NET
            - generic [ref=e198]: REST APIs
          - link "Explore the full story" [ref=e199] [cursor=pointer]:
            - /url: /portfolio
        - article [ref=e202]:
          - paragraph [ref=e203]: Featured case study
          - heading "Production Scheduling Dashboard" [level=3] [ref=e204]
          - generic [ref=e205]:
            - paragraph [ref=e206]: Problem
            - paragraph [ref=e207]: Production planners were jumping between multiple ERP screens and manually reviewing sales orders, dates, and manufacturing constraints before they could make a scheduling decision.
          - generic [ref=e208]:
            - paragraph [ref=e209]: Solution
            - paragraph [ref=e210]: SchlaTech created a scheduling dashboard that consolidates the key planning data into one interface, allowing planners to review orders, adjust dates, and identify conflicts faster.
          - generic [ref=e211]:
            - paragraph [ref=e212]: Impact
            - paragraph [ref=e213]: This reduced scheduling friction, improved planner efficiency, and made production planning more accurate and visible across the operation.
          - generic [ref=e214]:
            - generic [ref=e215]: Acumatica
            - generic [ref=e216]: C#
            - generic [ref=e217]: SQL Server
            - generic [ref=e218]: REST API
          - link "Explore the full story" [ref=e219] [cursor=pointer]:
            - /url: /portfolio
        - article [ref=e222]:
          - paragraph [ref=e223]: Featured case study
          - heading "Product Configuration Copy Utility" [level=3] [ref=e224]
          - generic [ref=e225]:
            - paragraph [ref=e226]: Problem
            - paragraph [ref=e227]: Creating similar configurable products required repeating large amounts of setup work, which slowed new product launches and increased inconsistency risk.
          - generic [ref=e228]:
            - paragraph [ref=e229]: Solution
            - paragraph [ref=e230]: SchlaTech built a configuration copy utility that duplicates existing product configurations while allowing selective updates so teams could launch new variations without starting from scratch.
          - generic [ref=e231]:
            - paragraph [ref=e232]: Impact
            - paragraph [ref=e233]: The process became faster, more consistent, and much less labor-intensive for product setup teams.
          - generic [ref=e234]:
            - generic [ref=e235]: Acumatica
            - generic [ref=e236]: Manufacturing Configuration
            - generic [ref=e237]: C#
            - generic [ref=e238]: SQL
          - link "Explore the full story" [ref=e239] [cursor=pointer]:
            - /url: /portfolio
    - generic [ref=e243]:
      - generic [ref=e244]:
        - paragraph [ref=e245]: Why manufacturers work with SchlaTech
        - heading "A practical partner for business systems and process improvement" [level=2] [ref=e246]
        - paragraph [ref=e247]: We focus on tools that fit the business, support your team, and stand up to real day to day use.
      - generic [ref=e248]:
        - article [ref=e249]:
          - heading "Manufacturing Experience" [level=3] [ref=e250]
          - paragraph [ref=e251]: Solutions shaped by real production, inventory, scheduling, and shop floor challenges.
        - article [ref=e252]:
          - heading "Built Around Your Workflow" [level=3] [ref=e253]
          - paragraph [ref=e254]: Software should fit the business, not force the business into a generic process.
        - article [ref=e255]:
          - heading "Direct Technical Partnership" [level=3] [ref=e256]
          - paragraph [ref=e257]: Work directly with the person understanding and building your solution.
        - article [ref=e258]:
          - heading "ERP and Custom Software Expertise" [level=3] [ref=e259]
          - paragraph [ref=e260]: Bridge the gaps between your ERP, internal tools, equipment, and business processes.
        - article [ref=e261]:
          - heading "Practical Technology" [level=3] [ref=e262]
          - paragraph [ref=e263]: Choose tools based on reliability and business value, not trends.
        - article [ref=e264]:
          - heading "Long Term Support" [level=3] [ref=e265]
          - paragraph [ref=e266]: Build maintainable solutions that can grow as the business changes.
    - generic [ref=e269]:
      - generic [ref=e270]:
        - paragraph [ref=e271]: Founder perspective
        - heading "Manufacturing knowledge meets software expertise" [level=2] [ref=e272]
        - paragraph [ref=e273]: SchlaTech was founded by Matt Schlabach, a software engineer with hands on experience building ERP customizations, manufacturing applications, automation tools, reporting systems, and shop floor software. SchlaTech combines technical depth with a practical understanding of how manufacturers actually operate.
        - list [ref=e274]:
          - listitem [ref=e275]: Acumatica development
          - listitem [ref=e276]: Global Shop ERP
          - listitem [ref=e277]: Manufacturing automation
          - listitem [ref=e278]: Custom .NET applications
          - listitem [ref=e279]: SQL and reporting
          - listitem [ref=e280]: ERP integrations
        - link "Learn More About SchlaTech" [ref=e281] [cursor=pointer]:
          - /url: /about
      - generic [ref=e285]:
        - img "Matt Schlabach"
    - generic [ref=e288]:
      - heading "What process is costing your team time every week?" [level=2] [ref=e289]
      - paragraph [ref=e290]: Tell us where your operation is getting stuck. We will help you determine whether custom software, ERP improvements, or automation can solve it.
      - generic [ref=e291]:
        - link "Discuss Your Project" [ref=e292] [cursor=pointer]:
          - /url: "#contact"
        - link "See Our Work" [ref=e293] [cursor=pointer]:
          - /url: /portfolio
    - generic [ref=e297]:
      - generic [ref=e298]:
        - paragraph [ref=e299]: Contact SchlaTech
        - heading "Start a conversation about the work that is slowing your team down" [level=2] [ref=e300]
        - paragraph [ref=e301]: Share the process, system, or problem you want to improve. We will help you evaluate practical options and outline the best path forward.
        - generic [ref=e302]:
          - paragraph [ref=e303]: Holmesville, Ohio
          - link "matt@schlatech.com" [ref=e304] [cursor=pointer]:
            - /url: mailto:matt@schlatech.com
          - link "(330) 763-1399" [ref=e305] [cursor=pointer]:
            - /url: tel:+13307631399
      - generic [ref=e306]:
        - generic [ref=e307]:
          - generic [ref=e308]:
            - text: Name
            - textbox "Name" [ref=e309]
          - generic [ref=e310]:
            - text: Email
            - textbox "Email" [ref=e311]
        - generic [ref=e312]:
          - text: What needs attention?
          - textbox "What needs attention?" [ref=e313]
        - button "Send inquiry" [ref=e314]
  - contentinfo [ref=e317]:
    - generic [ref=e318]:
      - generic [ref=e319]:
        - link "SchlaTech logo SCHLATECH Manufacturing software" [ref=e320] [cursor=pointer]:
          - /url: /
          - img "SchlaTech logo" [ref=e321]
          - generic [ref=e322]:
            - generic [ref=e323]: SCHLATECH
            - generic [ref=e324]: Manufacturing software
        - paragraph [ref=e325]: We help manufacturers eliminate manual work through custom software, ERP expertise, and intelligent automation.
        - paragraph [ref=e326]: Insight. Action. Growth.
      - generic [ref=e327]:
        - heading "Navigate" [level=2] [ref=e328]
        - list [ref=e329]:
          - listitem [ref=e330]:
            - link "Home" [ref=e331] [cursor=pointer]:
              - /url: /
          - listitem [ref=e332]:
            - link "Solutions" [ref=e333] [cursor=pointer]:
              - /url: /#services
          - listitem [ref=e334]:
            - link "Case Studies" [ref=e335] [cursor=pointer]:
              - /url: /portfolio
          - listitem [ref=e336]:
            - link "About" [ref=e337] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e338]:
            - link "Contact" [ref=e339] [cursor=pointer]:
              - /url: /#contact
          - listitem [ref=e340]:
            - link "Acumatica Development" [ref=e341] [cursor=pointer]:
              - /url: /acumatica-development
      - generic [ref=e342]:
        - heading "Contact" [level=2] [ref=e343]
        - list [ref=e344]:
          - listitem [ref=e345]: Holmesville, Ohio
          - listitem [ref=e346]:
            - link "matt@schlatech.com" [ref=e347] [cursor=pointer]:
              - /url: mailto:matt@schlatech.com
          - listitem [ref=e348]:
            - link "(330) 763-1399" [ref=e349] [cursor=pointer]:
              - /url: tel:+13307631399
          - listitem [ref=e350]:
            - link "Instagram" [ref=e351] [cursor=pointer]:
              - /url: https://instagram.com/schlatech
    - paragraph [ref=e353]: © SchlaTech. All rights reserved.
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