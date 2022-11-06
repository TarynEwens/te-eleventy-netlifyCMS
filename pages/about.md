---
layout: layouts/page.njk
title: About
permalink: /about/
---

<section class="aboutMe">
    <img src="/images/TarynOnline-8338(1).jpg" alt="Photo of Taryn with her two samoyed dogs" class="aboutImage"/>
    <h2>About me</h2>
    <p>Just a person who loves learning, creating, reading, vintage inspired style, and most important of all: my two Samoyed dogs!</p>
    <p>I'm currently working as a software engineer, but I was previously a pastry chef specialising in handmade confectionery! 👩🏻‍🍳</p>
    <p></p>
</section>
<!-- <section class="aboutImageWrapper">
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
</section> -->
<section class="aboutCareer">
  <h2>About my career</h2>
  <ul className={utilStyles.listStandard}>
    <li>
      <strong>2000:</strong> Taught myself to write HTML so I
      could build websites about my virtual pets 🐶
    </li>
    <li>
      <strong>February 2018:</strong> Realised I could learn how
      to code more than basic websites. Started a
      web development bootcamp at
      <a
        className={utilStyles.linkFeature}
        href="https://generalassemb.ly/"
      >
        General Assembly
      </a>
      👩🏻‍💻
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
      🔍
    </li>
    <li>
      <strong>September 2019:</strong> Promoted to Software Engineer 🎉
    </li>
    <li>
      <strong>August 2020:</strong> Joined the Editor team at
      <a
        className={utilStyles.linkFeature}
        href="https://www.atlassian.com/"
      >
        Atlassian
      </a>
      🥳
    </li>
  </ul>
</section>
<section class="aboutWork">
  <h3 className={utilStyles.h3}>Things I’ve worked on</h3>
  <h4>Atlassian</h4>
  <ul className={utilStyles.listStandard}>
    <li>Mentored junior engineers in a program designed to support them in reaching the next level</li>
    <li>Coordinated the end-to-end releases of packages from platform into products, juggling up to 6 releases at a time at various stages from development to adoption. At the same time contributed to improvements in the release process & tooling.</li>
    <li>Contributed to a performance project which cut down time to interactive by 35%</li>
    <li>Supported feature contributions from external teams to the editor codebase
    <li>
      Feature led a team of engineers to build and release the
      <a href="https://community.atlassian.com/t5/Confluence-articles/New-Undo-Redo-buttons-in-the-Confluence-editor/ba-p/1735895">
        new undo/redo buttons in the Confluence cloud editor
      </a>
      (along with predictability improvements for undo/redo behaviours)!
    </li>
    <li>
      End to end tests for editor functionality to allow manual testing time
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
      Gutenberg CMS: building ‘blocks’ (components) for the new WordPress
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
