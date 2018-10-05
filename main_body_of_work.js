// Simplified implementation of Slyvia Plath implementation. From the book: If Hemmingway Wrote Javascript
const d = (x) => typeof x === 'string' ? x : x()

const mapOverObjectTerminate = (myObject) => (
  Object.keys(myObject).map( (key, index) => d(myObject[key]) )
)

const say_it_shortened = (...args) => (
  args.length > 0 ? _say_it_shortened(0, args) : ''
)

const _say_it_shortened = (prev_length, ...args) => (
  prev_length !== args.length
    ? _say_it_shortened.bind(null, args.length, ...args)
    : args.join(' ')
)

async function run_the_stuff(){
  let inputs = {}
  inputs['anonymousTerminator'] = await say_it_shortened('hello')('my')('jumbo', 'shrimp')()
  inputs['funcNeedsTerminator'] = await say_it_shortened('hello')('my')('jumbo', 'shrimp')

  console.log(
    mapOverObjectTerminate(inputs).join('\n')
  )
}
// run_the_stuff()

function micah_nested_partial_application_solution(){

  const say_it = (...args) =>
    _say_it( (...arr) => arr.join(" "), ...args)

  const _say_it = (fn, ...args) =>
    args.length === 0 ? fn() : _say_it.bind(null, fn.bind(null, ...args))

  const has_been_said = say_it("foo", "bar")("baz")("quz", "quo")()
  console.log(has_been_said)

}
micah_nested_partial_application_solution()

