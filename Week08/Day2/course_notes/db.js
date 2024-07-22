const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const {PGHOST,PGDATABASE,PGUSER,PGPASSWORD,PGPORT} = process.env;

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: {rejectUnauthorized: false},
    }
});

async function getVersion(){
    try{
        const result = await db.raw("select version()")
        console.log(result);
    }catch(error){
        console.log(error)
    }
}

// getVersion();

//select, where
db("products")
.select("id","name","price")
.where({id:1})
.then(rows => console.log(rows))
.catch(err => console.log(err));

//update
db("products")
.update({name: 'iPhone 16'})
.where({id:1})
.returning('*')
.then(result => console.log(result));

//insert
db("products")
.insert(
    [
        {name:"iPhone21", price:8000},
        {name:"iPad21", price:7000},
    ], 
    ["id","name","price"]
)
.then((result) => {
    console.log(result);
});

// delete
db("products")
.where({id:2})
.del()
.returning("*")
.then((res)=> console.log(res));

//select
db.raw("select * from products").then(res => console.log(res.rows))