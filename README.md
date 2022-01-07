# ava2json
Converts [AVAPlayer](https://www.avaplayer.com/website/) history.txt to a simple json endpoint

Tries to fetch data whith every request to `/history`

# Structure

Retuns an array of objects:

```json
{
  "date":"2022-01-07 20:16:55",
  "artist":"EURYTHMICS",
  "song":"IT'S ALRIGHT ( BABY'S COMING BACK )",
  "duration":"02:58"
}
```
