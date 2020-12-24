const materialize = {
  collapsible(option = {}) {
    const elems = document.querySelectorAll('.collapsible')
    // eslint-disable-next-line no-undef
    M.Modal.init(elems, option)
  },
}

export default (context, inject) => {
  inject('materialize', materialize)
}
