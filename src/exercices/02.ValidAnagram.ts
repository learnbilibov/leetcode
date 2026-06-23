/**
 * 242. Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * Example 1:

    Input: s = "anagram", t = "nagaram"

    Output: true

    Example 2:

    Input: s = "rat", t = "car"

    Output: false


 */

function isAnagram(s: string, t:string): boolean{
    if(s.length !== t.length) return false;

    const count = new Map<string, number>();
    for(const c of s) count.set(c, (count.get(c) ?? 0) + 1);

    for (const c of t){
        if(!count.has(c)) return false;
        count.set(c, count.get(c)! - 1);
        if(count.get(c) === 0) count.delete(c);
    }

    return count.size === 0;
}

export function init(): void{
    const exercices = [
        {
            s: "anagram",
            t: "nagaram"
        },
        {
            s: "rat",
            t: "car"
        },
    ];


    for(let ex of exercices){
        console.log(ex)
        console.log(isAnagram(ex.s, ex.t))
    }
}