const LEETCODE_SESSION = "MY_LEETCODE_SESSION"
const CSRF_TOKEN = "MY_CSRF_TOKEN"
const NEW_SESSION_NAME = "MyNewSession1";

const fetchWithRetry = async (url, options, retries) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                console.log('Request succeeded:', response);
                return response;
            } else {
                console.log('Request failed');
            }
        } catch (error) {
            console.log('Fetch error:', error);
        }
    }
    console.log(`All ${retries} attempts failed.`);
};

const url = "https://leetcode.com/session/";
const options = {
    headers: {
        "content-type": "application/json",
        "x-csrftoken": CSRF_TOKEN,
        "x-requested-with": "XMLHttpRequest",
        "cookie": `LEETCODE_SESSION=${LEETCODE_SESSION};`
    },
    body: JSON.stringify({
        func: "create",
        name: NEW_SESSION_NAME
    }),
    method: "PUT"
};
const maxRetries = 50; // Set the maximum number of retries you are welcome to change this value

fetchWithRetry(url, options, maxRetries);