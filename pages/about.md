---
layout: layouts/page.njk
title: About
permalink: /about/
---

<section class="aboutMe">
  <h2>About me</h2>
  <p>Just a person who loves learning, creating, reading, vintage inspired style, and most important of all: my two samoyed dogs!</p>
  <p>I'm currently working as a software engineer, but I was previously a pastry chef specialising in handmade confectionery!</p>
  <p></p>
</section>
<section class="aboutImageWrapper">
  <img
    src="/images/taryn-lexi-desk1.jpg"
    alt="Taryn at her desk with her big fluffy dog begging for treats"
    class="imageHalf"
  />
  <img
    src="/images/taryn-lexi-desk2.jpg"
    alt="Taryn at her desk giving her big fluffy dog a treat"
    class="imageHalf"
  />
</section>
<section class="aboutCareer">
  <h2>About my career</h2>
  <ul className={utilStyles.listStandard}>
    <li>
      <strong>2000:</strong> Taught myself to write HTML so I
      could build websites about my virtual pets ð¶
    </li>
    <li>
      <strong>February 2018:</strong> Realised I could learn how
      to code for real, quit my candy making career and started a 12 week
      web development bootcamp at
      <a
        className={utilStyles.linkFeature}
        href="https://generalassemb.ly/"
      >
        General Assembly
      </a>
      ð¬
    </li>
    <li>
      <strong>June 2018:</strong> Started as a Junior Front-End Web
      Developer at
      <a
        className={utilStyles.linkFeature}
        href="https://www.finder.com.au/"
      >
        Finder
      </a>
      ð©ð»âð»
    </li>
    <li>
      <strong>September 2019:</strong> Promoted to Software Engineer ð
    </li>
    <li>
      <strong>August 2020:</strong> Joined the Editor team at
      <a
        className={utilStyles.linkFeature}
        href="https://www.atlassian.com/"
      >
        Atlassian
      </a>
      ð¥³
    </li>
  </ul>
</section>
<section class="aboutWork">
  <h3 className={utilStyles.h3}>Things Iâve worked on</h3>
  <h4>Atlassian</h4>
  <ul className={utilStyles.listStandard}>
    <li>Managed an end-to-end release of packages from platform into products</li>
    <li>
      Feature led the
      <a href="https://community.atlassian.com/t5/Confluence-articles/New-Undo-Redo-buttons-in-the-Confluence-editor/ba-p/1735895"> 
        new undo/redo buttons in the Confluence editor
      </a>
      (along with predictability improvements) from make to impact!
    </li>
    <li>
      Cypress tests for editor functionality to allow manual testing time
      to be spent on more complex scenarios
    </li>
    <li>
      <a href="https://community.atlassian.com/t5/Confluence-Cloud-articles/Solving-WTF-moments-in-Confluence-Improvements-to-lists-have/ba-p/1601228">
        Improvements to lists in the cloud editor
      </a>
    </li>
  </ul>
  <h4>Finder</h4>
  <ul className={utilStyles.listStandard}>
    <li>
      Design Ops: as a team we refreshed the navigation, page templates,
      side bar and more, giving the whole site a fresh new look and
      improved user experience. The page templates we created and rolled
      out across the site reduced bounce rate by ~25%.
    </li>
    <li>
      Gutenberg CMS: building âblocksâ (components) for the new WordPress
      editor, using a hybrid renderer that renders Wordpress content in a
      Next.JS front-end.
    </li>
    <li>
      Engineering diversity working group.
    </li>
    <li>
      <a
        className={utilStyles.linkFeature}
        href="https://medium.com/finder-tech"
      >
        Finder Tech Blog.
      </a>
    </li>
    <li>
      Web accessibility learning breaks.
    </li>
    <li>
      Helped propose and implement web accessibility standards.
    </li>
  </ul>
</section>
