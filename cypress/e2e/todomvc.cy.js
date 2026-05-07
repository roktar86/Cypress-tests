describe('TodoMVC Tests', () => {

  it('Carga la página correctamente', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.contains('todos')
  })

  it('Crear una tarea', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')

  cy.get('.new-todo').type('Mi primera tarea{enter}')

  cy.contains('Mi primera tarea').should('exist')
})

it('Completar una tarea', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')

  cy.get('.new-todo').type('Tarea completa{enter}')

  cy.get('.toggle').click()

  cy.get('.completed').should('exist')
})

it('Eliminar una tarea', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')

  cy.get('.new-todo').type('Tarea a borrar{enter}')

  cy.get('.todo-list li')
    .trigger('mouseover')

  cy.get('.destroy').click({ force: true })

  cy.contains('Tarea a borrar').should('not.exist')
})

})
