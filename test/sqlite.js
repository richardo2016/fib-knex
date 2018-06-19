const assert = require('assert')

const FibKnex = require('../')

const knex = FibKnex({
    client: 'sqlite',
    useNullAsDefault: true
})


describe('sqlite', () => {
    it('no exception: select', () => {
        const sqlObj = knex('users')
            .select(knex.raw('count(*) as user_count, status'))
            // .where(knex.raw(1))
            .orWhere(knex.raw('status <> ?', [1]))
            .groupBy('status')
    })
})

