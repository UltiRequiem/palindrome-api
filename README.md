# Palirevert API

An API to get the word reversed and if it's a Palindrome or not.

## Demo

There is a working demo on: https://z5b6d8bad-z00481bbb-gtw.qovery.io

Try it with curl:

```bash
curl https://z5b6d8bad-z00481bbb-gtw.qovery.io/lol
```

## Response

Tipical response:

```json
// https://z5b6d8bad-z00481bbb-gtw.qovery.io/lola
{ "reversedWord": "alol" }
```

But if the word is a Palindrome:

```
// https://z5b6d8bad-z00481bbb-gtw.qovery.io/lol
{"reversedWord":"lol","isPalindrome":true}
```

### License

Palirevert is licensed under the [MIT License]('./LICENSE.md')
