# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> smoke: /portfolio
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
      - heading "Our Work in Action" [level=1] [ref=e26]
      - paragraph [ref=e27]: Real manufacturing problems, practical software, measurable business impact.
      - link "Discuss Your Project" [ref=e29] [cursor=pointer]:
        - /url: /#contact
  - main [ref=e30]:
    - generic [ref=e31]:
      - paragraph [ref=e32]: Featured case studies
      - heading "Success stories built for manufacturers" [level=2] [ref=e33]
    - generic [ref=e34]:
      - article [ref=e35]:
        - generic [ref=e36]:
          - generic [ref=e37]:
            - heading "Acumatica OAuth / Microsoft Entra ID Migration" [level=3] [ref=e38]
            - generic [ref=e39]:
              - paragraph [ref=e40]: Business problem
              - paragraph [ref=e41]: An external manufacturing application relied on legacy Windows Authentication, making future security and remote access increasingly difficult.
            - generic [ref=e42]:
              - paragraph [ref=e43]: Technical solution
              - paragraph [ref=e44]: SchlaTech migrated the application to OAuth 2.0 and Microsoft Entra ID while preserving the existing user workflow and aligning the app with modern Microsoft identity standards.
            - generic [ref=e45]:
              - paragraph [ref=e46]: Business impact
              - paragraph [ref=e47]: The client gained modern authentication, stronger security, easier deployment, and a more future-ready architecture for its Acumatica-connected system.
          - generic [ref=e48]:
            - paragraph [ref=e49]: Technology
            - generic [ref=e50]:
              - generic [ref=e51]: Acumatica
              - generic [ref=e52]: OAuth 2.0
              - generic [ref=e53]: Microsoft Entra ID
              - generic [ref=e54]: .NET
              - generic [ref=e55]: REST APIs
      - article [ref=e56]:
        - generic [ref=e57]:
          - generic [ref=e58]:
            - heading "Production Scheduling Dashboard" [level=3] [ref=e59]
            - generic [ref=e60]:
              - paragraph [ref=e61]: Business problem
              - paragraph [ref=e62]: Production planners were forced to move between multiple ERP screens while manually reviewing sales orders, dates, and production constraints.
            - generic [ref=e63]:
              - paragraph [ref=e64]: Technical solution
              - paragraph [ref=e65]: SchlaTech built a scheduling dashboard that consolidates production planning information into a single interface, helping planners review orders and update dates faster.
            - generic [ref=e66]:
              - paragraph [ref=e67]: Business impact
              - paragraph [ref=e68]: The result was faster planning, fewer scheduling errors, and better visibility for high-priority work.
          - generic [ref=e69]:
            - paragraph [ref=e70]: Technology
            - generic [ref=e71]:
              - generic [ref=e72]: Acumatica
              - generic [ref=e73]: C#
              - generic [ref=e74]: SQL Server
              - generic [ref=e75]: REST API
      - article [ref=e76]:
        - generic [ref=e77]:
          - generic [ref=e78]:
            - heading "Product Configuration Copy Utility" [level=3] [ref=e79]
            - generic [ref=e80]:
              - paragraph [ref=e81]: Business problem
              - paragraph [ref=e82]: Creating similar configurable products required repeated manual configuration work, which slowed new product setup and increased inconsistency risk.
            - generic [ref=e83]:
              - paragraph [ref=e84]: Technical solution
              - paragraph [ref=e85]: SchlaTech created a utility that copies existing product configurations while allowing selective updates so teams can launch similar products without rebuilding the setup manually.
            - generic [ref=e86]:
              - paragraph [ref=e87]: Business impact
              - paragraph [ref=e88]: This reduced repetitive setup work, accelerated new-product launches, and improved configuration consistency.
          - generic [ref=e89]:
            - paragraph [ref=e90]: Technology
            - generic [ref=e91]:
              - generic [ref=e92]: Acumatica
              - generic [ref=e93]: Manufacturing Configuration
              - generic [ref=e94]: C#
              - generic [ref=e95]: SQL
      - article [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e98]:
            - heading "Shop Floor Printing Automation" [level=3] [ref=e99]
            - generic [ref=e100]:
              - paragraph [ref=e101]: Business problem
              - paragraph [ref=e102]: Manufacturing documents like move tickets, labels, and work-center paperwork needed manual intervention and often followed inconsistent routing paths.
            - generic [ref=e103]:
              - paragraph [ref=e104]: Technical solution
              - paragraph [ref=e105]: SchlaTech implemented automated printing workflows that route production documents to the correct printers based on work center and process rules.
            - generic [ref=e106]:
              - paragraph [ref=e107]: Business impact
              - paragraph [ref=e108]: The operation saw less manual print handling, better production flow, and fewer routing errors on the shop floor.
          - generic [ref=e109]:
            - paragraph [ref=e110]: Technology
            - generic [ref=e111]:
              - generic [ref=e112]: Acumatica
              - generic [ref=e113]: Manufacturing
              - generic [ref=e114]: Label Printing
              - generic [ref=e115]: Custom Actions
      - article [ref=e116]:
        - generic [ref=e117]:
          - generic [ref=e118]:
            - heading "Cutbill Builder" [level=3] [ref=e119]
            - generic [ref=e120]:
              - paragraph [ref=e121]: Business problem
              - paragraph [ref=e122]: Weekly cutbill generation consumed several hours of manual calculations and exports while leaving room for costly mistakes before production could begin.
            - generic [ref=e123]:
              - paragraph [ref=e124]: Technical solution
              - paragraph [ref=e125]: SchlaTech designed a desktop application that automates cutbill calculations using configurable business rules and exports the required files directly for plant equipment.
            - generic [ref=e126]:
              - paragraph [ref=e127]: Business impact
              - paragraph [ref=e128]: The process dropped from several hours to seconds, saving more than 250 hours annually and improving consistency across the production schedule.
          - generic [ref=e129]:
            - paragraph [ref=e130]: Technology
            - generic [ref=e131]:
              - generic [ref=e132]: WPF
              - generic [ref=e133]: C#
              - generic [ref=e134]: SQL
              - generic [ref=e135]: Manufacturing Automation
      - article [ref=e136]:
        - generic [ref=e137]:
          - generic [ref=e138]:
            - heading "Manufacturing Operator Workstation" [level=3] [ref=e139]
            - generic [ref=e140]:
              - paragraph [ref=e141]: Business problem
              - paragraph [ref=e142]: Production employees needed a secure interface on the shop floor that could run without exposing Windows and without constant local maintenance.
            - generic [ref=e143]:
              - paragraph [ref=e144]: Technical solution
              - paragraph [ref=e145]: SchlaTech built a locked-down touchscreen workstation with centralized automatic updates, simplified workflows, and manufacturing-specific interfaces for operators across many sites.
            - generic [ref=e146]:
              - paragraph [ref=e147]: Business impact
              - paragraph [ref=e148]: The platform was deployed across 50+ locations and improved the operator experience while reducing maintenance overhead.
          - generic [ref=e149]:
            - paragraph [ref=e150]: Technology
            - generic [ref=e151]:
              - generic [ref=e152]: WPF
              - generic [ref=e153]: Prism
              - generic [ref=e154]: MVVM
              - generic [ref=e155]: Windows
              - generic [ref=e156]: SQL
      - article [ref=e157]:
        - generic [ref=e158]:
          - generic [ref=e159]:
            - heading "Mill Inventory Mobile Application" [level=3] [ref=e160]
            - generic [ref=e161]:
              - paragraph [ref=e162]: Business problem
              - paragraph [ref=e163]: Inventory was still being recorded in the yard and entered into the ERP later, delaying visibility and increasing the risk of errors.
            - generic [ref=e164]:
              - paragraph [ref=e165]: Technical solution
              - paragraph [ref=e166]: SchlaTech created an Android app that lets operators record inventory in the field using QR code scanning and immediate ERP integration.
            - generic [ref=e167]:
              - paragraph [ref=e168]: Business impact
              - paragraph [ref=e169]: The operation gained real-time inventory visibility, better traceability, and faster receiving and processing.
          - generic [ref=e170]:
            - paragraph [ref=e171]: Technology
            - generic [ref=e172]:
              - generic [ref=e173]: Android
              - generic [ref=e174]: QR Codes
              - generic [ref=e175]: REST API
              - generic [ref=e176]: ERP Integration
      - article [ref=e177]:
        - generic [ref=e178]:
          - generic [ref=e179]:
            - heading "Set Load Date Scheduler" [level=3] [ref=e180]
            - generic [ref=e181]:
              - paragraph [ref=e182]: Business problem
              - paragraph [ref=e183]: Production planners had no efficient way to assign and update load dates across large numbers of manufacturing orders.
            - generic [ref=e184]:
              - paragraph [ref=e185]: Technical solution
              - paragraph [ref=e186]: SchlaTech built a scheduling interface with filtering, mass updates, production point calculations, and optimized loading workflows designed to improve planner productivity.
            - generic [ref=e187]:
              - paragraph [ref=e188]: Business impact
              - paragraph [ref=e189]: The workflow became faster, more scalable, and much easier for planners to manage at volume.
          - generic [ref=e190]:
            - paragraph [ref=e191]: Technology
            - generic [ref=e192]:
              - generic [ref=e193]: Acumatica
              - generic [ref=e194]: Generic Inquiries
              - generic [ref=e195]: REST API
              - generic [ref=e196]: SQL
              - generic [ref=e197]: Manufacturing
    - generic [ref=e198]:
      - heading "Do you have a problem that looks like this?" [level=3] [ref=e199]
      - paragraph [ref=e200]: Manufacturing, ERP, automation, and integration challenges are exactly where SchlaTech adds value.
      - link "Talk to SchlaTech" [ref=e201] [cursor=pointer]:
        - /url: /contact
  - contentinfo [ref=e202]:
    - generic [ref=e203]:
      - generic [ref=e204]:
        - link "SchlaTech logo SCHLATECH Manufacturing software" [ref=e205] [cursor=pointer]:
          - /url: /
          - img "SchlaTech logo" [ref=e206]
          - generic [ref=e207]:
            - generic [ref=e208]: SCHLATECH
            - generic [ref=e209]: Manufacturing software
        - paragraph [ref=e210]: We help manufacturers eliminate manual work through custom software, ERP expertise, and intelligent automation.
        - paragraph [ref=e211]: Insight. Action. Growth.
      - generic [ref=e212]:
        - heading "Navigate" [level=2] [ref=e213]
        - list [ref=e214]:
          - listitem [ref=e215]:
            - link "Home" [ref=e216] [cursor=pointer]:
              - /url: /
          - listitem [ref=e217]:
            - link "Solutions" [ref=e218] [cursor=pointer]:
              - /url: /#services
          - listitem [ref=e219]:
            - link "Case Studies" [ref=e220] [cursor=pointer]:
              - /url: /portfolio
          - listitem [ref=e221]:
            - link "About" [ref=e222] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e223]:
            - link "Contact" [ref=e224] [cursor=pointer]:
              - /url: /#contact
          - listitem [ref=e225]:
            - link "Acumatica Development" [ref=e226] [cursor=pointer]:
              - /url: /acumatica-development
      - generic [ref=e227]:
        - heading "Contact" [level=2] [ref=e228]
        - list [ref=e229]:
          - listitem [ref=e230]: Holmesville, Ohio
          - listitem [ref=e231]:
            - link "matt@schlatech.com" [ref=e232] [cursor=pointer]:
              - /url: mailto:matt@schlatech.com
          - listitem [ref=e233]:
            - link "(330) 763-1399" [ref=e234] [cursor=pointer]:
              - /url: tel:+13307631399
          - listitem [ref=e235]:
            - link "Instagram" [ref=e236] [cursor=pointer]:
              - /url: https://instagram.com/schlatech
    - paragraph [ref=e238]: © SchlaTech. All rights reserved.
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