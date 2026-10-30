import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser = await chromium.launch();
try {
 for (const width of [320,390,768,1440]) {
  const page=await browser.newPage({viewport:{width,height:900}});
  const fontRequests=[];
  page.on('response',r=>{if(r.url().includes('.woff2')) fontRequests.push({url:r.url(),status:r.status()});});
  // The existing published alumni film is outside this placeholder review.
  await page.route('https://www.youtube-nocookie.com/**',route=>route.abort());
  await page.goto('http://127.0.0.1:4321/',{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('.p-mba-pardot__embed').innerText(),'Pardot form embedded here');
  assert.equal(await page.locator('#manifesto-film iframe').count(),0);
  assert.equal(await page.locator('#manifesto-film button[disabled]').count(),1);
  assert.equal(await page.locator('img[alt="Image placeholder"]').count(),3);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);
  assert(fontRequests.length>0 && fontRequests.every(r=>r.url.startsWith('http://127.0.0.1:4321/fonts/')&&r.status===200));
  await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>{i.loading='eager';return i.decode();})));
  assert(await page.locator('img').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0)));
  await page.screenshot({path:`review/mba-${width}.png`,fullPage:true});
  console.log(`${width}px: no overflow; placeholders, images and local fonts verified`);
  await page.close();
 }
} finally {await browser.close();}
