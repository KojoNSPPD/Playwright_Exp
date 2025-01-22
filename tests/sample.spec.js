const {test,expect} = require("@playwright/test")

test('my first test', async function({page}) {
    
})

test('my second test', async function({page}){
    //
})

test('my third test', async function({page}){
    //
})

test('my fourth test', async function({page}){
    expect("Kojo Ankra").toContain('Ankra')
    expect(true).toBeTruthy()
})

test('my fifth test', async function({page}){
    expect(false).toBeFalsy()
})

test('my sixth test', async function({page}){
    expect(false).toBeFalsy()
    expect('Kojo Ankra'.includes('Kojo')).toBeTruthy()
})