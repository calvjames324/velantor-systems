<!-- THIS FILE IS AUTO-GENERATED FROM INDEX.HTML -->
---
title: "Velantor Systems"
description: "Engineering team focused on machine learning and applied AI"
domain: "velantorsystems.com"
---

![](./assets/bg.png)

# Velantor Systems

A data-driven development studio

We are a team of data-driven engineers who specialize in making sense of messy, real-world data — cleaning, automating, and processing it at scale, with a hard emphasis on robustness and efficiency. Coupled with a design-first mindset and strong web development, we deliver full-stack applications with end-to-end functionality. From a first prototype to a production-scale system, we build it all.

[Linkedin](https://www.linkedin.com) [Email](mailto:hello@velantor.systems)

![](./assets/hero.svg)

## Work

### Entity Linking Problem

Solving deduplication and canoncalization

### Trading Engine

Implenting realtime trading strategies

### Manufactoring Execution System

Building an internal tracking system

### Voice Analytics

Metric analysis of audio scripts

Problem: A fintech firm approached us with the problem of Entity Resolution, which arose from daily ingestion of various documents. The problems to solve were those of deduplication and canonicalization without a ground truth available, in constrained time.

Solution: We build an automated pipeline for canoncalization of the entities using a graph-based deduplication system build on top of Neo4j, leveraging it's native graph-search algorithms to deliver a fast, efficient and accurate solution.

Problem: Our client was a quantitative trader who struggled with algorithmic implementation and backtesting of their algorithms, when iterating became a bottleneck while finding optimal parameters for certain trading strategies.

Solution: Our solution was to utilize a backtesting framework to backtest their strategy and implementing an event-based live trading system to execute the strategy on live markets using broker APIs, alongside a front-end for tracking and monitoring of the same.

Problem: We were approached by a manufacturer with the problem of internal tracking: too many excel files being put into the system, which made tracking of essential processes tedious.

Solution: We implemented a simple internal tracking tool which allowed for tracking of every process based on input forms, and provided various dashboards and analytics, alongside routine backups, which streamlined the entire process.

Problem: The requirement was to implement a pipeline, which, using audio transcripts could derive important analytics from voice call recordings, and for those metrics to be displayed on a dashboard.

Solution: The solution we provided was to implement a pipeline which converted voice recordings to text using audio model APIs, before getting structured output which could then be cleanly mapped to AWS RDS columns. We used Grafana to display the metrics.