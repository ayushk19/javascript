//for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`)
}

const programming = ["js", "ruby", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key)    // print array index number
    // console.log(programming[key])
}

const map = new Map()
map.set('IN', 'India')
map.set('AUS', 'Australia')
map.set('FR', 'France')

for (const key in map) {
    console.log(key)       //doesn't print anything because map is not iterable using for in loop
}