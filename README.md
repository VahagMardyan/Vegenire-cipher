Vigenere cipher for Armenian, Latin, Cyrillic and Greek alphabets (recommended visit with PC).
https://vahagmardyan.github.io/Vegenire-cipher/

Encryption algorithm.
Let k -> key, m -> message and r -> result

r[i] = (m[i], k[i]) -> Intersection of m[i]-th row and k[i]-th column, where i=1,2,... length(m)

If length(k) < length(m), then encryption goes on from the first letter of key.
Encryption goes on until length(r)=length(m).

For example:

m = "Hello"
k = "cat"

Look at the Vigenere table:
r[1] = Intersection of (H,c) -> J
r[2] = Intersection of (e,a) -> e
r[3] = Intersection of (l,t) -> e
r[4] = Intersection of (l,c) -> n
r[5] = Intersection of (o,a) -> o

Finally, our result becomes "Jeeno".

Decryption algorithm.
Let k -> key, m -> message and r -> result
We need to find the "result" row that, when intersected with the "key" column, will yield the encrypted "message".
In simple words, we need to find message-letter in the in the key-name column. The row-letter will be our result's letter.

m = "wohos"
k = "dog"
r[1]: (d,?) -> w => ? is T. So, r[1] = T
r[2]: (o,?) -> o => ? is a. So, r[2] = a
r[3]: (g,?) -> h => ? is b. So, r[3] = b
r[4]: (d,?) -> o => ? is l. So, r[4] = l
r[5]: (o,?) -> s => ? is e. So, r[5] = e

Our encrypted message was "Table".