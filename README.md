![image](https://user-images.githubusercontent.com/26873/148603037-c3eee0eb-8f0c-4b92-8880-6f03fda7f1ca.png)

# ava2json
Converts [AVAPlayer](https://www.avaplayer.com/website/) history.txt to a simple json endpoint

Tries to fetch data whith every request to `/history`

## Structure

Retuns an array of objects:

```json
{
  "date":"2022-01-07 20:16:55",
  "artist":"EURYTHMICS",
  "song":"IT'S ALRIGHT ( BABY'S COMING BACK )",
  "duration":"02:58"
}
```

## Encoding
AVAPlayer uploads `latin1`, this server returns `UTF-8`

---

_AVAPlayer and its logo are trademark of their owner._
