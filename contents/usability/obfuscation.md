---
name: Obfuscation
---

At GitLab, we take user privacy and security seriously. As part of this we use obfuscation to protect sensitive information in our product. Obfuscation is the practice of making sensitive information difficult to understand or read. This helps prevent items such as email addresses or access tokens from unintentionally being made public.

## When to use obfuscation

- Obfuscate [email addresses](#email-addresses) when handling user-submitted information that is not intended to be public. For example, on Service Desk issues accessed by users with Guest access.

<todo>Add guidelines for other types of obfuscation</todo>

## Access tokens

Tokens are used to authenticate a user and authorize their access to certain resources. If a token is compromised, an attacker could potentially gain unauthorized access to those resources. Obfuscating the token in the UI makes it more difficult for an attacker to find and steal the token, helping to protect the user's account and resources.

<todo>Add obfuscation patterns for tokens</todo>

## Email Addresses

There are a few reasons why it may be harmful to users if their email address is unintentionally exposed. For example, it could lead to spam and unwanted emails, phishing attempts, or even identity theft.

To protect our users' email addresses we use the following pattern for obfuscation:

- Show the first two letters of the username followed by 5 asterisks `*`. Duplicate the character followed by 5 asterisks if the username is a single character.
- Show the `@` symbol.
- Show the first letter after the "@" symbol followed by 5 asterisks `*`.
- Show a `.`.
- Show the first letter of the TLD (top level domain) followed by 2 asterisks `*`.

For example, the email address `see@me.co.uk` would be obfuscated as `se*****@m*****.u**` and `getsuperfancysupport@paywhatyouwantforit.accounting` would be obfuscated as `ge*****@p*****.a**`.

This pattern balances the needs for privacy and useful information by protecting email addresses while still providing a way to differentiate between them.

It's important to consider the context in which the email address is being displayed, and make sure the email is obfuscated only when necessary.

## Passwords

<todo>Add section for passwords</todo>
