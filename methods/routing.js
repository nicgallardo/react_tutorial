export default {
  createLink: (docs) => {
    let result = [];
    for(let doc of docs){
      result.push(`<li><NavLink to="${doc.path}">${doc.title}</NavLink></li>`)
    }
    return result.join('')
  }
}
