# Batch 01 Notes: AI Engineering Basics

## What this batch covers

This first batch is an introduction to building a small product feature with a text-generating AI model. It is a starting point, not a complete map of AI engineering. Image models, speech systems, recommendation systems, and many other kinds of AI need different details.

## Four useful pieces

**Model**  
The software that receives an input and produces an output. In this batch, the example output is text.

**Instructions**  
The task and limits the app gives the model. For example: "Rewrite this note in a friendly tone. Keep the facts the same."

**Context**  
Information included to help with the current task. It might be text the user supplied or relevant information the app found in an approved source. A model should not be expected to know a private or current fact just because the answer would be useful.

**App**  
The product code and interface around the model. The app collects input, prepares a request, handles the model's response, and decides what to show the person.

## A simple request flow

Person asks a question

App checks the input and prepares instructions plus relevant Context
Model returns a possible answer
App checks, formats, or routes the answer
Person sees the result

This is a teaching sketch. Real systems can have extra steps, such as retrieval, tools, review, logging, or several model calls. Retrieval is one way an app can look up relevant information and include it in a model request; it is not required for every AI feature.

## A small example
A support worker writes: "Delivery late. Say sorry. Arrives Friday."

A reply-writing feature might ask a model for a short, friendly draft and tell it not to add facts. The app still needs to check the result before sending it. If the note did not say when the parcel arrives, the model should not invent a date.

## Reliability is part of the worker
A fluent answer can still be wrong. NIST describes generative AI confabulation as confidently stated erroneous or false content. The practical lesson is simple: a convincing tone is not a fact check.

For a small feature, make a short test set before calling it finished:

- One ordinary example.
- One unclear question.
- One question with missing information.
- One request that asks the model to add something not in the source.

Decide what a good answer must do. Then compare the results when you change one thing, such as the instruction or context. One successful example is a start, not proof that the feature is reliable.

## A few plain-English terms

**Prompt:** the input and instructions sent for a model task.  
**Context:** information supplied for that task.  
**Evaluation:** checking outputs against examples and clear criteria.  
**Fallback:** what the app does when it cannot answer safely or usefully.  
**Human review:** a person checks the output before an important action.

## Quick recap

- The model is one part of the feature, not the whole product.
- Instructions explain the task; context supplies useful details.
- Context can help, but it can be missing, irrelevant, or incorrect.
- Test normal and awkward cases, and decide what happens when information is missing.
- For important or risky decisions, choose suitable checks and human review.

## Sources to keep handy

NIST, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1 (2024).  
https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf

OpenAI, Optimizing LLM Accuracy.  
https://platform.openai.com/docs/guides/optimizing-llm-Accuracy
OpenAI, Prompt Engineering.  
https://platform.openai.com/docs/guides/prompt-engineering
Checked: 2026-10-30