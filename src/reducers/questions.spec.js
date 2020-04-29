import { questions } from './questions'

describe('The questions reducer', ()=>{
  it ('should not modify state for unrecognised action', ()=> {
    console.log('Testing questions')
    const state = ['hello', 'goodbye']
    const stateClone = ['hello', 'goodbye']
    const newState = questions(state, {type: 'UNRECOGNISED_ACTION'})

    expect(newState).toEqual(stateClone)
    expect(newState).toBe(state)
  })

  it('should add new questions', ()=> {
    const state = [{question_id: 'hello'}, {question_id: 'goodbye'}]
    const newQuestion = {question_id:'hey'}
    const newQuestionClone = {question_id:'hey'}
    const newState = questions(state,{type:'FETCHED_QUESTION', question:newQuestion})

    expect(newState).toContain(newQuestion)
    expect(state).not.toContain(newQuestion)
    expect(newState).toHaveLength(3)
  })

})