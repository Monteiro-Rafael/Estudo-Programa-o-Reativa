const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')

const { map, concatAll } = require('rxjs/operators')

ajax({
    createXHR: ()=> new XMLHttpRequest(),
    url: 'https://api.github.com/users/Monteiro-Rafael/repos'
})
    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        concatAll(),
        map(resp => resp.full_name)
    )
    .subscribe(console.log)