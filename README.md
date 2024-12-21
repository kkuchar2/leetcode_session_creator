# Leetcode Session Creator


[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/krzysiekkuch)

Recently Leetcode started to deprecate the old session system,
and the button to create a new session is not clickable,
sooo we cannot create new sessions anymore.
This is a simple script that creates a new session for you.

![image](https://github.com/user-attachments/assets/95a6c543-90d8-483c-ae67-63e1dc5e543a)

## How to use

1. Clone the repository, make sure you have Node.js version 18+ installed
2. Open index.js
3. Enter your Leetcode session under LEETCODE_SESSION
4. Enter your Leetcode csrf token under CSRF_TOKEN
5. Change NEW_SESSION_NAME to the name of the new session you want to create
6. Fire up your terminal and run `node index.js`
7. Enjoy

WARNING: Sometimes Leetcode servers reject requests with 403 (maybe it hits new (post deprecation) server nodes with their Load Balancer
(just a guess).

I have added retries count to make requests run until it passes with 200. If it stops working completely (and I'm sure it will after some time)
it's nothing we can do.

## How to get Leetcode session and csrf token

1. Open Leetcode in your browser
2. Open browser's developer tools
3. Go to Application tab
4. Find the cookies section
5. Copy the value of `LEETCODE_SESSION` and `csrftoken`

## Disclaimer

Use at your own risk. Since this is not an official API. Leetcode may change the way they handle sessions at any time,
remove this endpoint, rate limit it, or do anything else. Since this script is using deprecated way
of creating sessions, it's just a matter of time when they will remove it and this script will stop working.
