//arrays guarantees a 32bit number to be referenced
// contiguous memory space

const a = new ArrayBuffer(6);
const a8 = new Uint8Array(a);

a8[0] = 45;
a8[2] = 45;

const a16 = new Uint16Array(a);
a16[2] = 0x4545; 
console.log(a16)

/*
Simplified: getting the index takes the offset and calculate the amount of contiguous memory address

//Imputing:
In arrays, you never really put a new spzace. Instead, it overwrites existing one.

     insert = a + width * offset

In this sense, inserting takes constant time, because it doesn't iterate till given offset,
but rather calculate it's way into it.

deletes: follows the same order.
*/

