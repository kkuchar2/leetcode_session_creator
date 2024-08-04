const LEETCODE_SESSION = ""
const CSRF_TOKEN = "";

fetch("https://leetcode.com/session/", {
    "headers": {
        "content-type": "application/json",
        "x-csrftoken": CSRF_TOKEN,
        "x-requested-with": "XMLHttpRequest",
        "cookie": `LEETCODE_SESSION=${LEETCODE_SESSION};`
    },
    "body": "{\"func\":\"create\",\"name\":\"MyNewSession1\"}",
    "method": "PUT"
}).then(response => console.log(response));