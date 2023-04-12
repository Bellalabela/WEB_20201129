//한줄 주석 : 임시 자바스크립트 파일을 생성했습니다.
var ib = "hi"; //변수 선언 뒤에 주석처리 가능

/*
여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
*/

var a=1; //var 변수명 = 값(고전) 문제점?{} 블록 안에 변수도 외부 접근 가능 즉, 변수의 중복 선언이 빈번
var b;
b=5;

if(true){
	let c='let 접근'; //let 지역변수 함수 지역별로 블록별로 잘 열고 닫힙니다
	var c_1='var 접근'; //var 변수 전역변수 남용시 프로그램 엉망될 가능성 높음 
}
// console.log(c); //Error?
console.log(c_1);

let d=5; //let 변수명 = 값(일반) {} 안에 변수 외부 접근 x
//let d='값 재할당'; //Error? //특정 데이터 타입으로 초기화 된 값은 재할당 할 수 없게 되어있다 
console.log(d); 

const e='상수1 접근'; //const 변수명 = 값(상수) 재할당 및 재선언 x // 선언과 동시에 초기화가 규칙 //안정적으로 프로그래밍

//e=5;
//const f //Error?
console.log(e); 
