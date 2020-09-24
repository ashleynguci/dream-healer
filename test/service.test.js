import {countString}  from '../service';

test('should return {\'a\':1}', ()=>{
    const result  = countString('run 2 2 world and see   2');
    expect(result.characterCount[0]).toMatchObject({"a":1});
})