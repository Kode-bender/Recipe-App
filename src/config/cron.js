import cren from 'cron'
import http from 'http'

const job = new cren.CronJob("/14 * * * *", () => {
    http.get(process.env.API_URL, (res) => {
        if(res.statusCode === 200) console.log("Request success");
        else console.log("Request failed", res.statusCode);
    }).on("error", (e) => console.error("Error sending request", e))
})

export default job