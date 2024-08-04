const LEETCODE_SESSION = "MY_LEETCODE_SESSION"
const CSRF_TOKEN = "MY_CSRF_TOKEN"
const NEW_SESSION_NAME = "MyNewSession1";

fetch("https://leetcode.com/session/", {
    "headers": {
        "content-type": "application/json",
        "x-csrftoken": CSRF_TOKEN,
        "x-requested-with": "XMLHttpRequest",
        "cookie": `LEETCODE_SESSION=${LEETCODE_SESSION};`
    },
    "body": JSON.stringify({
        "func": "create",
        "name": NEW_SESSION_NAME
    }), "method": "PUT"
}).then(response => console.log(response));