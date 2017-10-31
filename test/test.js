//import { expect } from 'chai';
var chai = require('chai');
var expect = chai.expect;
const add = (n1, n2) => n1 + n2;

describe('Example', function() {
    describe('add 함수 테스트', function() {
        it('1+2를 넣으면 3의 값이 나와야 한다.', function(done) {
            var sum = add(1,2);
	    expect(sum).to.equal(3);
	    done();
        });

        it('2+2를 넣으면 5의 값이 나와야 한다.', (done) => { // 인위적 에러발생
            var sum = add(2,2);
      	    expect(sum).to.equal(4);
	    done();
	});

    });
});

