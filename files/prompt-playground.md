# Prompt Playground

## Batch 01: a small experiment in giving an AI a useful task

This is a hands-on worksheet for the first course batch. I am not trying to find a magic prompt. I am testing whether clear instructions and relevant information help with one small task.

**Time:** about 35 to 45 minutes  
**You need:** a text editor and, if available, an AI tool you are allowed to use  
**Please do not enter private or sensitive information.** The shop and policy below are made up for this exercise.

## The tiny scenario

A customer asks the fictional Lantern Cafe:

> Can I bring my small dog?

Here is the cafe policy for this exercise:

- Dogs may sit with their person on the outdoor patio.
- Dogs must stay on a leash.
- Staff can offer a water bowl if asked.
- This policy does not say whether dogs can come inside.
- This policy does not cover cats or other animals.

The useful question is not just "Can the model write a nice sentence?" I also want to know whether it sticks to the information it was given.

## Round 1: try a bare request

Start with this prompt. Do not add the policy yet.

> Write a friendly answer to this customer: "Can I bring my small dog to Lantern Cafe?"

Paste or write the answer here:

____________________________________________________________

____________________________________________________________
Now look at the answer. Did it claim to know the cafe's rules, even though I did not provide them? Did it invent a detail? A smooth-sounding answer can still be a guess.

## Round 2: add a task and the policy

Now try the same customer question with clearer instructions and the made-up policy.

> You are drafting a short reply for Lantern Cafe. Use only the policy below. If the policy does not answer part of the question, say that the information is not specified and suggest asking cafe staff. Do not add rules that are not in the policy. Keep the reply friendly and under 45 words.
>
> Policy: Dogs may sit with their person on the outdoor patio. Dogs must stay on a leash. Staff can offer a water bowl if asked. The policy does not say whether dogs can come inside, and it does not cover other animals.
>
> Customer question: Can I bring my small dog?

Write down the answer:

____________________________________________________________
____________________________________________________________
## Check the answer, not just the tone

Give the answer one point for each item it gets right:

- It says dogs are allowed on the outdoor patio.
- It says the dog needs to stay on a leash.
- It does not claim dogs are allowed inside.
- It does not invent a new rule or service.
- It is clear and friendly.

**Score:** ____ out of 5

A high score on one try is not proof that the feature is reliable. It is just one example to discuss.

## Round 3: try awkward questions

Keep the same policy and instructions. Change only the customer question each time.

1. "Can my dog sit inside if I carry him?"
2. "Can I bring my cat onto the patio?"
3. "Can I get a water bowl for my dog?"
4. "My dog is not on a leash. Is that okay?"

For each answer, check:

- Did it use the policy rather than make up a rule?
- Did it clearly say when the policy did not give an answer?
- Did it answer the question that was actually asked?

Make a note of one answer you would want to improve:

____________________________________________________________

____________________________________________________________
## Round 4: change one instructions
Pick just one change. For example:

- Ask for a shorter reply.
- Ask for plain language.
- Ask the model to answer in one sentence.
- Ask it to say when the policy is not enough to answer.

Try the question again. Write down what changed:

**My one change:** ____________________________________________________________
**What changed in the answer?** ____________________________________________________________
**Did anything get worse?** ____________________________________________________________
Changing one thing at a time makes it easier to see which instruction mattered. If I change five things together, I cannot tell which one helped.

## Quick debrief

1. Which answer was most useful, and why?
2. Did adding the policy solve every problem, or did any answer still need review?
3. What should the app do if the policy is missing or unclear?
4. What would you test before showing this feature to real customers?

My takeaway:

____________________________________________________________
____________________________________________________________

## What this exercise shows

- Instructions explain the task and the limits.
- Context gives the model information that may be needed for the answer.
- Better instructions and useful context can help, but they do not guarantee correctness.
- Testing several realistic and awkward examples is more useful than judging one polished answer.
- The model's answer is a draft. The app still needs to decide how to handle missing facts and important mistakes.

This is a small classroom exercise, not a production test. A real product needs examples that match its users, its data, and the risks of its task.

## Sources for the ideas

OpenAI, Prompt Engineering: guidance on instructions, context, and examples.  
https://platform.openai.com/docs/guides/prompt-Engineering
OpenAI, Optimizing LLM Accuracy: guidance on testing, adding context, and evaluating outputs.  
https://platform.openai.com/docs/guides/optimizing-llm-Accuracy
Checked: 2026-10-30