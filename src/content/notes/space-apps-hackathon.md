---
title: On winning a hackathon
created: 2025-10-29
updated: 2025-10-29
growth: seedling
type: note
---
A few weeks ago I won our local NASA Space Apps hackathon, hosted in our Exeter Met Office HQ!

My wife and I were a team of two focused on the challenge: "Will it rain on my parade?"

Neither of us are software engineers, but we had our target set on shipping "something cool", but crucial, shipping "something done" by the end of the two days. So obviously we vibe coded our way through it.

But I think the story isn't really in that, nothing we built is particularly impressive to any software engineer, indeed, there were much more experienced and talented people participating that were doing incredibly interesting things with data. Yet, we won.. Why?

Where we stood out was on spending a good portion of the first day ensuring we had a solid diagnosis of the problem we wanted to solve - and for whom - before getting a LLM to write any code.

The specific user need within our challenge space was simply: "Will it be good to stargaze tonight?", obviously you can use any number of generic or niche-specific weather apps to answer this question, and as a nascent astrophotographer, I'd already used a lot of them. But there's always room in the market for one more.

So rather than focusing on trying to beat all the competitors at their strengths in a weekend, we decided to differentiate on what they were not great at. All of them are predicated on the user understanding meteorology and liking dense displays of lots of data, so we decided to do the opposite, give users a simple visual summary and accompanying AI interpretation of the data so that absolutely anyone can get an answer to the question: "Will it be good to stargaze tonight?"

After that, the rest was relatively smooth sailing with the vibe coding part, we collaborated with Claude on a briefing document to layout the requirements which we kept referring back to, made sure to work on tiny increments and asked it to keep a history of increments in a doc. So when we ran out of context window, we still had docs the LLM could reference and search through. We used replit as the all-in-one browser-based development environment with 'multiplayer' mean both of us could see what was happening, try prompts and know when the next increment was ready to test.

If you just want to play around with it, here's what we produced that weekend: [https://nightsight.replit.app/](https://nightsight.replit.app/)

Note that trades offs were made: we prioritised the mobile experience, desktop isn't great :)

Since then, I've been working on an iOS version (android coming soon™️) which has just passed review, have a play with that and let me know what you think: [link]