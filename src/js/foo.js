let invocation = 0

const Foo = () => {
  invocation++
  return `foo ${invocation}`
}

export { Foo }
