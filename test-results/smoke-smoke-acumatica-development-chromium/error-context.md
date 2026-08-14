# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> smoke: /acumatica-development
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
        - link "Discuss Your Acumatica Project" [ref=e19] [cursor=pointer]:
          - /url: "#contact"
  - banner [ref=e20]:
    - generic [ref=e24]:
      - paragraph [ref=e25]: Acumatica development for manufacturers
      - heading "Extend Acumatica Around the Way Your Business Operates" [level=1] [ref=e26]
      - paragraph [ref=e27]: SchlaTech builds Acumatica customizations, integrations, manufacturing enhancements, reports, and connected applications that reduce manual work and close the gaps between your ERP and your operation.
      - paragraph [ref=e28]: Customizations • Integrations • Manufacturing • Reporting • Authentication
      - generic [ref=e29]:
        - link "Discuss Your Acumatica Project" [ref=e30] [cursor=pointer]:
          - /url: "#contact"
        - link "View Manufacturing Work" [ref=e31] [cursor=pointer]:
          - /url: /portfolio
  - main [ref=e32]:
    - generic [ref=e34]:
      - generic [ref=e35]:
        - paragraph [ref=e36]: Acumatica should support your workflow, not limit it
        - heading "Practical ERP work for manufacturers that need more than out of the box" [level=2] [ref=e37]
        - paragraph [ref=e38]: Every manufacturer has processes that do not fit neatly inside a standard ERP implementation. Teams often rely on spreadsheets, duplicate entry, manual exports, disconnected applications, and workarounds because the ERP does not fully reflect how the business actually operates.
      - paragraph [ref=e39]: SchlaTech helps manufacturers extend Acumatica with practical solutions that fit existing processes, improve visibility, and reduce the amount of work required outside the system.
    - generic [ref=e41]:
      - generic [ref=e42]:
        - paragraph [ref=e43]: Acumatica solutions built around real operations
        - heading "Capabilities that support manufacturers day to day" [level=2] [ref=e44]
        - paragraph [ref=e45]: From user workflows to integrations and reporting, the work is focused on solving practical business problems rather than just adding another layer to the ERP.
      - generic [ref=e46]:
        - article [ref=e47]:
          - heading "Custom Screens and Workflows" [level=3] [ref=e48]
          - paragraph [ref=e49]: Build purpose specific screens, actions, processing tools, validations, and workflows for the way your teams work.
        - article [ref=e50]:
          - heading "Manufacturing Enhancements" [level=3] [ref=e51]
          - paragraph [ref=e52]: Extend production, material, BOM, scheduling, shop floor, inventory, and manufacturing workflows.
        - article [ref=e53]:
          - heading "REST API and External Applications" [level=3] [ref=e54]
          - paragraph [ref=e55]: Connect Acumatica to custom desktop, web, mobile, equipment, and third party applications.
        - article [ref=e56]:
          - heading "OAuth and Microsoft Entra ID Authentication" [level=3] [ref=e57]
          - paragraph [ref=e58]: Modernize external application authentication rather than relying on legacy Windows authentication.
        - article [ref=e59]:
          - heading "Reports, Generic Inquiries, and Dashboards" [level=3] [ref=e60]
          - paragraph [ref=e61]: Create clearer access to operational, manufacturing, inventory, scheduling, and management information.
        - article [ref=e62]:
          - heading "Configuration and Data Utilities" [level=3] [ref=e63]
          - paragraph [ref=e64]: Build tools for copying configurations, validating information, transforming data, and reducing repetitive ERP administration.
        - article [ref=e65]:
          - heading "Printing and Label Automation" [level=3] [ref=e66]
          - paragraph [ref=e67]: Improve document, label, move ticket, pick ticket, and work center printing workflows.
        - article [ref=e68]:
          - heading "Performance and Usability Improvements" [level=3] [ref=e69]
          - paragraph [ref=e70]: Address slow processes, awkward workflows, large data sets, bulk updates, and external applications that do not perform well.
    - generic [ref=e72]:
      - generic [ref=e73]:
        - paragraph [ref=e74]: Examples of Acumatica and manufacturing work
        - heading "Focused work that supports operations, reporting, and workflow reliability" [level=2] [ref=e75]
        - paragraph [ref=e76]: These examples reflect the kind of practical engineering and integration work SchlaTech brings to Acumatica based environments.
      - generic [ref=e77]:
        - article [ref=e78]:
          - heading "Production Scheduling Application" [level=3] [ref=e79]
          - paragraph [ref=e80]: Operational problem
          - paragraph [ref=e81]: Teams needed a clearer way to review demand, schedule activity, update dates, and manage large result sets without relying on repeated manual work.
          - paragraph [ref=e82]: Solution approach
          - paragraph [ref=e83]: SchlaTech built a connected scheduling application that surfaced the right information in a practical workflow.
          - paragraph [ref=e84]: Practical outcome
          - paragraph [ref=e85]: The result is a more usable process for scheduling and coordination across the manufacturing operation.
        - article [ref=e86]:
          - heading "OAuth Authentication Migration" [level=3] [ref=e87]
          - paragraph [ref=e88]: Operational problem
          - paragraph [ref=e89]: An external manufacturing application still depended on legacy Windows authentication and was creating friction for users and administrators.
          - paragraph [ref=e90]: Solution approach
          - paragraph [ref=e91]: The application was modernized to use OAuth and Microsoft Entra ID authentication while preserving the business workflow.
          - paragraph [ref=e92]: Practical outcome
          - paragraph [ref=e93]: The system remains easier to manage and better aligned with current access practices.
        - article [ref=e94]:
          - heading "Product Configuration Copy Utility" [level=3] [ref=e95]
          - paragraph [ref=e96]: Operational problem
          - paragraph [ref=e97]: Copying product configuration information required repeated manual handling and carried a risk of missing rules or data.
          - paragraph [ref=e98]: Solution approach
          - paragraph [ref=e99]: SchlaTech created a purpose built utility that copied product configuration information while preserving the required rules and data.
          - paragraph [ref=e100]: Practical outcome
          - paragraph [ref=e101]: The business gained a more reliable way to support configuration work without extra manual effort.
        - article [ref=e102]:
          - heading "Shop Floor and Printing Workflows" [level=3] [ref=e103]
          - paragraph [ref=e104]: Operational problem
          - paragraph [ref=e105]: Manufacturing transactions and supporting documents still depended on disconnected steps and manual printing routines.
          - paragraph [ref=e106]: Solution approach
          - paragraph [ref=e107]: SchlaTech connected the workflow with supporting applications for work center printing, labels, move documents, and pick tickets.
          - paragraph [ref=e108]: Practical outcome
          - paragraph [ref=e109]: The process became more consistent and easier for teams to follow on the floor.
    - generic [ref=e111]:
      - generic [ref=e112]:
        - paragraph [ref=e113]: Connect Acumatica to the rest of your operation
        - heading "Integration work that helps information move reliably" [level=2] [ref=e114]
        - paragraph [ref=e115]: Acumatica is often only one part of the manufacturing software environment. SchlaTech builds connected solutions that move information reliably between the ERP, internal applications, shop floor systems, mobile devices, reporting tools, and outside services.
      - generic [ref=e116]:
        - generic [ref=e117]: REST API
        - generic [ref=e118]: OData
        - generic [ref=e119]: Microsoft Entra ID
        - generic [ref=e120]: Custom .NET applications
        - generic [ref=e121]: Web and mobile applications
        - generic [ref=e122]: SQL and reporting systems
        - generic [ref=e123]: Barcode and QR scanning
        - generic [ref=e124]: Label and document printing
        - generic [ref=e125]: Manufacturing equipment and workflow tools
        - generic [ref=e126]: Data imports, exports, and validation
    - generic [ref=e128]:
      - generic [ref=e129]:
        - paragraph [ref=e130]: Acumatica expertise with manufacturing context
        - heading "Why manufacturers work with SchlaTech" [level=2] [ref=e131]
      - generic [ref=e132]:
        - article [ref=e133]:
          - heading "Manufacturing Experience" [level=3] [ref=e134]
          - paragraph [ref=e135]: Acumatica work is approached with an understanding of production, inventory, scheduling, material movement, printing, and shop floor needs.
        - article [ref=e136]:
          - heading "Custom Software Capability" [level=3] [ref=e137]
          - paragraph [ref=e138]: When the right solution extends beyond Acumatica, SchlaTech can build the connected application rather than forcing everything into the ERP.
        - article [ref=e139]:
          - heading "Direct Technical Partnership" [level=3] [ref=e140]
          - paragraph [ref=e141]: Work directly with the person analyzing, designing, and building the solution.
        - article [ref=e142]:
          - heading "Practical Long Term Solutions" [level=3] [ref=e143]
          - paragraph [ref=e144]: Prioritize maintainability, usability, reliability, and measurable business value over unnecessary complexity.
    - generic [ref=e146]:
      - generic [ref=e147]:
        - paragraph [ref=e148]: A practical path from bottleneck to solution
        - heading "How the work typically unfolds" [level=2] [ref=e149]
      - generic [ref=e150]:
        - article [ref=e151]:
          - paragraph [ref=e152]: Step 1
          - heading "Understand the Workflow" [level=3] [ref=e153]
          - paragraph [ref=e154]: Review the current process, users, systems, workarounds, and desired outcome.
        - article [ref=e155]:
          - paragraph [ref=e156]: Step 2
          - heading "Design the Right Approach" [level=3] [ref=e157]
          - paragraph [ref=e158]: Determine whether the best answer is an Acumatica customization, integration, report, external application, or combination.
        - article [ref=e159]:
          - paragraph [ref=e160]: Step 3
          - heading "Build and Validate" [level=3] [ref=e161]
          - paragraph [ref=e162]: Develop iteratively and test against real operational scenarios.
        - article [ref=e163]:
          - paragraph [ref=e164]: Step 4
          - heading "Deploy and Support" [level=3] [ref=e165]
          - paragraph [ref=e166]: Release carefully, document the solution, and support future improvements.
    - generic [ref=e168]:
      - generic [ref=e169]:
        - paragraph [ref=e170]: Frequently asked questions
        - heading "Clear answers about Acumatica development work" [level=2] [ref=e171]
        - paragraph [ref=e172]: SchlaTech focuses on development, integrations, manufacturing software, and workflow improvements without presenting itself as a generic ERP reseller.
      - generic [ref=e173]:
        - group [ref=e174]:
          - generic "Can SchlaTech customize Acumatica manufacturing screens and workflows?" [ref=e175] [cursor=pointer]
        - group [ref=e176]:
          - generic "Can you connect an external application to Acumatica?" [ref=e177] [cursor=pointer]
        - group [ref=e178]:
          - generic "Can you help migrate an application from Windows authentication to OAuth?" [ref=e179] [cursor=pointer]
        - group [ref=e180]:
          - generic "Can you build tools that work alongside Acumatica rather than inside it?" [ref=e181] [cursor=pointer]
        - group [ref=e182]:
          - generic "Can you improve Acumatica reporting and Generic Inquiries?" [ref=e183] [cursor=pointer]
        - group [ref=e184]:
          - generic "Do you work with existing Acumatica partners or internal ERP teams?" [ref=e185] [cursor=pointer]
    - generic [ref=e188]:
      - paragraph [ref=e189]: Acumatica project planning
      - heading "Where is Acumatica creating extra work for your team?" [level=2] [ref=e190]
      - paragraph [ref=e191]: Tell us about the customization, integration, report, authentication issue, or manufacturing workflow that is slowing your operation down.
      - generic [ref=e192]:
        - link "Discuss Your Acumatica Project" [ref=e193] [cursor=pointer]:
          - /url: "#contact"
        - link "View Our Work" [ref=e194] [cursor=pointer]:
          - /url: /portfolio
  - contentinfo [ref=e195]:
    - generic [ref=e196]:
      - generic [ref=e197]:
        - link "SchlaTech logo SCHLATECH Manufacturing software" [ref=e198] [cursor=pointer]:
          - /url: /
          - img "SchlaTech logo" [ref=e199]
          - generic [ref=e200]:
            - generic [ref=e201]: SCHLATECH
            - generic [ref=e202]: Manufacturing software
        - paragraph [ref=e203]: We help manufacturers eliminate manual work through custom software, ERP expertise, and intelligent automation.
        - paragraph [ref=e204]: Insight. Action. Growth.
      - generic [ref=e205]:
        - heading "Navigate" [level=2] [ref=e206]
        - list [ref=e207]:
          - listitem [ref=e208]:
            - link "Home" [ref=e209] [cursor=pointer]:
              - /url: /
          - listitem [ref=e210]:
            - link "Solutions" [ref=e211] [cursor=pointer]:
              - /url: /#services
          - listitem [ref=e212]:
            - link "Case Studies" [ref=e213] [cursor=pointer]:
              - /url: /portfolio
          - listitem [ref=e214]:
            - link "About" [ref=e215] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e216]:
            - link "Contact" [ref=e217] [cursor=pointer]:
              - /url: /#contact
          - listitem [ref=e218]:
            - link "Acumatica Development" [ref=e219] [cursor=pointer]:
              - /url: /acumatica-development
      - generic [ref=e220]:
        - heading "Contact" [level=2] [ref=e221]
        - list [ref=e222]:
          - listitem [ref=e223]: Holmesville, Ohio
          - listitem [ref=e224]:
            - link "matt@schlatech.com" [ref=e225] [cursor=pointer]:
              - /url: mailto:matt@schlatech.com
          - listitem [ref=e226]:
            - link "(330) 763-1399" [ref=e227] [cursor=pointer]:
              - /url: tel:+13307631399
          - listitem [ref=e228]:
            - link "Instagram" [ref=e229] [cursor=pointer]:
              - /url: https://instagram.com/schlatech
    - paragraph [ref=e231]: © SchlaTech. All rights reserved.
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