const axios = require('axios')
    // import와 똑같음 => require 
const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url).then(function(response) {
    console.log(response.data)
})

// then = 비동기 적이기 때문에 응답이 도착하면 함수를 실행하여라

// axios 는 XHR을 편하게 쓰기 위한 라이브 러리
// XHR은 XML HTTP Request JS에서 비동기적 동작을 요청하기 위한 것
// 홈페이지에서 일부만 바뀜 페이지의 전환이 없는 비동기적 요청
// AJAX는 위와같은 동작을 할수 있게 해주는 프로그래밍 기법을 뜻함.

