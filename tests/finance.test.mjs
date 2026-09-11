import test from 'node:test'; import assert from 'node:assert/strict';
const metrics=(cases)=>{const delivered=cases.filter(x=>x.status==='DELIVERED');const revenue=delivered.reduce((s,x)=>s+(x.price||0),0);const cost=delivered.reduce((s,x)=>s+(x.cost||0),0);return {revenue,cost,profit:revenue-cost,margin:revenue?((revenue-cost)/revenue)*100:0}};
test('financial totals use completed cases only',()=>assert.deepEqual(metrics([{status:'DELIVERED',price:100,cost:40},{status:'PRODUCTION',price:999,cost:0}]),{revenue:100,cost:40,profit:60,margin:60}));
test('zero revenue returns zero margin',()=>assert.equal(metrics([{status:'DELIVERED',cost:10}]).margin,0));
