# Leetcode Session Creator


[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/krzysiekkuch)

Recently Leetcode started to deprecate the old session system,
and the button to create a new session is not clickable,
sooo we cannot create new sessions anymore.
This is a simple script that creates a new session for you.

![image](https://github.com/user-attachments/assets/95a6c543-90d8-483c-ae67-63e1dc5e543a)

## How to use

1. Clone the repository, make sure you have Node.js installed
2. Open index.js
3. Enter your Leetcode session under LEETCODE_SESSION
4. Enter your Leetcode csrf token under CSRF_TOKEN
5. Change NEW_SESSION_NAME to the name of the new session you want to create
6. Fire up your terminal and run `node index.js`
7. Enjoy

## How to get Leetcode session and csrf token

1. Open Leetcode in your browser
2. Open developer tools
3. Go to Application tab
4. Find the cookies section
5. Copy the value of `LEETCODE_SESSION` and `csrftoken`

## Disclaimer

Leetcode may change the way they handle sessions at any time
and this script may stop working. Use it until you can :)
