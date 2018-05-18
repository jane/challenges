const sortObj = (obj) =>
  Object.keys(obj)
    .reduce((p, o) => {
      p.push([ o, obj[o] ])
      return p
    }, [])
    .sort((a, b) => b[1] - a[1])
    .reduce((p, [ k, v ]) => ({
      ...p, [k]: v
    }), {})

const tally = (str) =>
  str.split('').reduce((prev, curr) => {
    const l = curr.toLowerCase()
    const s = /[a-z]/.test(curr) ? 1 : -1
    prev[l] = (prev[l] || 0) + s
    return prev
  }, {})

const solve = (s) =>
  sortObj(tally(s))

// eslint-disable-next-line
g=s=>{a=s.split('').reduce((p,c)=>{l=c.toLowerCase();s=/[a-z]/.test(c)?1:-1;p[l]=(p[l]||0)+s;return p},{});return Object.keys(a).reduce((p,o)=>{p.push([o,a[o]]);return p},[]).sort((x,y)=>y[1]-x[1]).reduce((p,[k,v])=>({...p,[k]:v}),{})}

module.exports = {
  solve,
  sortObj,
  tally,
  // eslint-disable-next-line
  golfed: g
}
