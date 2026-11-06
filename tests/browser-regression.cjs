const { chromium } = require('playwright-core')
const fs = require('node:fs/promises')
const path = require('node:path')
const assert = require('node:assert/strict')
const root = path.resolve(__dirname, '../..')
const dist = path.join(root, 'Pentakuhl - Penta Freight_Code/dist')
const visuals = path.join(root, 'Pentakuhl - Penta Freight_Visuals/screenshots')
const mime = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
}
;(async () => {
  const browser = await chromium.launch({ headless: true })
  try {
    await fs.mkdir(visuals, { recursive: true })
    const context = await browser.newContext({ reducedMotion: 'reduce' })
    const errors = []
    const missing = []
    // Fulfil from disk to test the actual production bundle without sandbox loopback access.
    await context.route('**/*', async (route) => {
      const url = new URL(route.request().url())
      if (url.hostname !== 'audit.local') return route.abort()
      const file = path.join(
        dist,
        decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname),
      )
      if (!file.startsWith(dist)) return route.abort()
      try {
        await route.fulfill({
          body: await fs.readFile(file),
          contentType: mime[path.extname(file)] || 'application/octet-stream',
        })
      } catch {
        missing.push(url.pathname)
        await route.fulfill({ status: 404, body: 'Not found' })
      }
    })
    const page = await context.newPage()
    page.on('pageerror', (e) => errors.push(e.message))
    await page.goto('http://audit.local/', { waitUntil: 'networkidle' })
    assert.equal(await page.locator('h1').count(), 1)
    assert.equal(await page.locator('footer').evaluate((el) => el.parentElement.tagName), 'DIV')
    assert.equal(await page.locator('video').evaluate((v) => v.paused), true)
    assert.equal(
      await page
        .locator('.certification-track')
        .evaluate((el) => getComputedStyle(el).animationName),
      'none',
    )
    const badLinks = await page
      .locator('a[href^="#"]:not([data-inactive])')
      .evaluateAll((links) =>
        links.filter((a) => !document.getElementById(a.hash.slice(1))).map((a) => a.hash),
      )
    assert.deepEqual(badLinks, [])
    const widths = [320, 390, 640, 768, 1024, 1025, 1280, 1440, 1920]
    const layouts = []
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 })
      await page.evaluate(() => window.scrollTo(0, 0))
      const docHeight = await page.evaluate(() => document.documentElement.scrollHeight)
      for (let y = 0; y < docHeight; y += 650) {
        await page.evaluate((y) => window.scrollTo(0, y), y)
        await page.waitForTimeout(20)
      }
      await page.waitForTimeout(100)
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
      assert.equal(overflow, false, `horizontal overflow at ${width}`)
      const broken = await page
        .locator('img')
        .evaluateAll((imgs) =>
          imgs
            .filter((i) => i.checkVisibility() && (!i.complete || !i.naturalWidth))
            .map((i) => i.src),
        )
      assert.deepEqual(broken, [], `broken images at ${width}`)
      layouts.push({ width, overflow, images: 'passed' })
    }
    await page.setViewportSize({ width: 390, height: 844 })
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.getByRole('button', { name: 'Open menu', exact: true }).click()
    await page.waitForTimeout(100)
    assert.equal(await page.locator('dialog').evaluate((d) => d.open), true)
    assert.equal(
      await page.locator('dialog').evaluate((d) => d.contains(document.activeElement)),
      true,
    )
    await page.keyboard.press('Shift+Tab')
    assert.equal(
      await page.locator('dialog').evaluate((d) => d.contains(document.activeElement)),
      true,
      'focus escaped dialog',
    )
    await page.keyboard.press('Shift+Tab')
    assert.equal(
      await page.locator('dialog').evaluate((d) => d.contains(document.activeElement)),
      true,
    )
    await page.keyboard.press('Tab')
    assert.equal(
      await page.locator('dialog').evaluate((d) => d.contains(document.activeElement)),
      true,
    )
    await page.keyboard.press('Escape')
    await page.waitForTimeout(100)
    assert.equal(await page.locator('dialog').evaluate((d) => d.open), false)
    assert.equal(
      await page
        .getByRole('button', { name: 'Open menu', exact: true })
        .evaluate((b) => b === document.activeElement),
      true,
    )
    await page.getByRole('button', { name: 'Open menu', exact: true }).click()
    await page.locator('dialog').getByRole('button', { name: 'SERVICES', exact: true }).click()
    await page.locator('dialog').getByRole('link', { name: 'Sea Freight', exact: true }).click()
    await page.waitForTimeout(100)
    assert.equal(await page.locator('dialog').evaluate((d) => d.open), false)
    assert.equal(new URL(page.url()).hash, '#sea-freight')
    assert.equal(await page.locator('body').evaluate((b) => b.style.overflow), '')
    await page.getByRole('button', { name: 'Open menu', exact: true }).click()
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.waitForTimeout(100)
    assert.equal(await page.locator('dialog').evaluate((d) => d.open), false)
    assert.equal(await page.locator('body').evaluate((b) => b.style.overflow), '')
    const summary = page.locator('nav[aria-label="Main"] summary').first()
    await page.mouse.move(0, 0)
    await page.locator('[data-desktop-dropdown]').evaluateAll((menus) =>
      menus.forEach((menu) => {
        menu.open = false
      }),
    )
    await summary.focus()
    await page.keyboard.press('Enter')
    assert.equal(
      await page
        .locator('nav[aria-label="Main"] details')
        .first()
        .evaluate((d) => d.open),
      true,
    )
    await page.keyboard.press('Tab')
    assert.equal(
      await page
        .getByRole('link', { name: 'Air Freight', exact: true })
        .evaluate((a) => a === document.activeElement),
      true,
    )
    await page.keyboard.press('Escape')
    assert.equal(
      await page
        .locator('nav[aria-label="Main"] details')
        .first()
        .evaluate((d) => d.open),
      false,
    )
    assert.equal(await summary.evaluate((s) => s === document.activeElement), true)
    await summary.click()
    await page.getByRole('link', { name: 'Project Cargo', exact: true }).click()
    await page.waitForTimeout(100)
    assert.equal(new URL(page.url()).hash, '#project-cargo')
    // Restored placeholders must remain visible without navigation, scrolling or new tabs.
    for (const label of ['INDUSTRIES', 'CAREERS']) {
      const before = page.url()
      await page
        .locator('nav[aria-label="Main"]')
        .getByRole('link', { name: label, exact: true })
        .click()
      assert.equal(page.url(), before)
    }
    for (const label of ['LinkedIn', 'Privacy Policy', 'Terms and Conditions']) {
      const link = page.locator('footer').getByRole('link', { name: label, exact: true })
      await link.scrollIntoViewIfNeeded()
      const before = {
        url: page.url(),
        y: await page.evaluate(() => scrollY),
        pages: context.pages().length,
      }
      await link.click()
      assert.equal(page.url(), before.url)
      assert.equal(await page.evaluate(() => scrollY), before.y)
      assert.equal(context.pages().length, before.pages)
    }
    const readMore = page.getByRole('button', { name: /^Read more$/i })
    assert.equal(await readMore.count(), 7)
    for (const button of await readMore.all()) {
      await button.scrollIntoViewIfNeeded()
      const before = page.url()
      await button.click()
      assert.equal(page.url(), before)
    }
    await page.setViewportSize({ width: 390, height: 844 })
    await page.evaluate(() => window.scrollTo(0, 0))
    const logo = page
      .locator('header > div')
      .first()
      .getByRole('img', { name: 'Penta Freight', exact: true })
    assert.equal(await logo.isVisible(), true)
    const logoBox = await logo.boundingBox()
    assert.ok(logoBox.width > logoBox.height, 'mobile logo should read horizontally')
    await page.screenshot({ path: path.join(visuals, 'mobile-navbar.png') })
    await page.getByRole('button', { name: 'Open menu', exact: true }).click()
    assert.equal(
      await page.locator('dialog').getByRole('link', { name: 'CONTACT', exact: true }).isVisible(),
      true,
    )
    await page.screenshot({ path: path.join(visuals, 'mobile-menu.png') })
    await page.keyboard.press('Escape')
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.locator('footer').scrollIntoViewIfNeeded()
    await page.screenshot({ path: path.join(visuals, 'footer-restored.png') })
    await page.getByRole('button', { name: 'Unmute video', exact: true }).click()
    assert.equal(await page.locator('video').evaluate((v) => v.muted), false)
    await page.getByRole('button', { name: 'Mute video', exact: true }).click()
    for (const [width, height, name, target] of [
      [390, 844, 'mobile', 'awards'],
      [768, 1024, 'tablet', 'services'],
      [1440, 900, 'desktop', 'services'],
    ]) {
      await page.setViewportSize({ width, height })
      if (target === 'awards')
        await page.getByText('Emirates SkyCargo', { exact: true }).scrollIntoViewIfNeeded()
      else await page.locator('#air-freight').scrollIntoViewIfNeeded()
      await page.screenshot({ path: path.join(visuals, `${name}.png`) })
    }

    await page.emulateMedia({ reducedMotion: 'no-preference' })
    await page.getByRole('button', { name: 'Pause animation', exact: true }).click()
    assert.equal(
      await page
        .locator('.certification-track')
        .evaluate((el) => getComputedStyle(el).animationPlayState),
      'paused',
    )
    await page.getByRole('button', { name: 'Resume animation', exact: true }).click()
    assert.equal(
      await page
        .locator('.certification-track')
        .evaluate((el) => getComputedStyle(el).animationPlayState),
      'running',
    )
    const playback = await page.locator('video').evaluate(async (video) => {
      try {
        await video.play()
        return 'supported'
      } catch (error) {
        return error.name
      }
    })
    if (playback === 'supported') {
      await page.getByRole('button', { name: 'Pause video', exact: true }).click()
      assert.equal(await page.locator('video').evaluate((v) => v.paused), true)
      await page.getByRole('button', { name: 'Play video', exact: true }).click()
      await page.waitForFunction(() => !document.querySelector('video').paused)
      await page.emulateMedia({ reducedMotion: 'reduce' })
      assert.equal(await page.locator('video').evaluate((v) => v.paused), true)
    }
    await context.route('**/video/hero.mp4', (route) => route.abort())
    const failurePage = await context.newPage()
    await failurePage.emulateMedia({ reducedMotion: 'no-preference' })
    await failurePage.goto('http://audit.local/')
    await failurePage.getByRole('status').waitFor()
    assert.match(await failurePage.getByRole('status').textContent(), /Video unavailable/)
    await failurePage.close()
    console.log('Video playback:', playback)

    assert.deepEqual(errors, [])
    assert.deepEqual(missing, [])
    console.log(
      JSON.stringify(
        {
          videoPlayback: playback,
          mediaFailureFallback: 'passed',
          animationControls: 'passed',
          layouts,
          restoredInactiveControls: 'passed',
          mobileLogo: 'passed',
          keyboard: 'passed',
          mobileNavigation: 'passed',
          resizeScrollUnlock: 'passed',
          serviceAnchors: 'passed',
          reducedMotion: 'passed',
          mute: 'passed',
          runtimeErrors: errors,
          missingAssets: missing,
        },
        null,
        2,
      ),
    )
    await fs.writeFile(
      path.join(root, 'Pentakuhl - Penta Freight_Docs/verification-results.json'),
      JSON.stringify(
        {
          videoPlayback: playback,
          mediaFailureFallback: 'passed',
          animationControls: 'passed',
          layouts,
          restoredInactiveControls: 'passed',
          mobileLogo: 'passed',
          keyboard: 'passed',
          mobileNavigation: 'passed',
          resizeScrollUnlock: 'passed',
          serviceAnchors: 'passed',
          reducedMotion: 'passed',
          mute: 'passed',
          runtimeErrors: errors,
          missingAssets: missing,
        },
        null,
        2,
      ),
    )
  } finally {
    await browser.close()
  }
})().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
